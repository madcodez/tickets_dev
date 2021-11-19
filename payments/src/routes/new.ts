import express, { Response, Request } from "express";
import { body } from "express-validator";
import {
  requireAuth,
  validatingRequest,
  NotFoundError,
  NotAuthorizedError,
  OrderStatus,
  BadRequestError,
} from "@madtickets/common";
import { Order } from "../models/order";
import { stripe } from "../stripe";
import { PaymentCompletedPublisher } from "../events/publishers/payment-completed-publisher";
import { natsWrapper } from "../nats-wrapper";
import { Payment } from "../models/payment";

const router = express.Router();

router.post(
  "/api/payments",
  requireAuth,
  [body("token").not().isEmpty(), body("orderId").not().isEmpty()],
  validatingRequest,
  async (req: Request, res: Response) => {
    const { token, orderId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    if (order.status == OrderStatus.Cancelled) {
      throw new BadRequestError("Cannot pay for cancelled order");
    }

    const charges = await stripe.charges.create({
      amount: order.price * 100,
      currency: "inr",
      source: token,
    });
    const payment = Payment.build({ orderId, stripeId: charges.id });
    await payment.save();
    new PaymentCompletedPublisher(natsWrapper.client).publish({
      orderId,
      stripeId: payment.stripeId,
    });
    res.status(201).send({ success: true });
    //res.send({ order });
  }
);

export { router as createPaymentRouter };
