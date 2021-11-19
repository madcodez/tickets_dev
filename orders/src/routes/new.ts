import express, { Request, Response } from "express";
import {
  validatingRequest,
  requireAuth,
  NotFoundError,
  BadRequestError,
} from "@madtickets/common";
import { body } from "express-validator";
import mongoose from "mongoose";
import { Ticket } from "../models/ticket";
import { Order, OrderStatus } from "../models/order";
import { OrderCreatedPublisher } from "../events/publishers/order-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();
const EXPIRATION_WINDOW_SECONDS = 1 * 60;

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("TicketId must be provided"),
  ],
  validatingRequest,
  async (req: Request, res: Response) => {
    //Check for ticketId in the tickets collections
    const ticket = await Ticket.findById(req.body.ticketId);

    if (!ticket) {
      throw new NotFoundError();
    }
    //console.log(ticket);
    //Check for the ticket is reserved
    const isReserved = await ticket.isReserved();
    //console.log(isReserved);
    if (isReserved) {
      throw new BadRequestError("Ticket is already reserved");
    }
    //Expiration time for fifteen mins
    const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds() + EXPIRATION_WINDOW_SECONDS);
    //Create the order for ticket
    const order = Order.build({
      userId: req.currentUser!.id,
      status: OrderStatus.Created,
      ticket: ticket,
      expiresAt: expiresAt,
    });
    await order.save();
    //Publish the ticket other service
    new OrderCreatedPublisher(natsWrapper.client).publish({
      id: order.id,
      status: order.status,
      userId: order.userId,
      expiresAt: order.expiresAt.toISOString(),
      ticket: {
        id: ticket.id,
        price: ticket.price,
      },
      version: order.version,
    });
    res.status(201).send(order);
  }
);
export { router as newOrderRouter };
