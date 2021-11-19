import express, { Response, Request } from "express";
import { Ticket } from "../models/ticket";
import {
  NotFoundError,
  NotAuthorizedError,
  requireAuth,
  validatingRequest,
  BadRequestError,
} from "@madtickets/common";
import { natsWrapper } from "../nats-wrapper";
import { TicketUpdatedPublisher } from "../events/publishers/ticket-updated-publisher";

const router = express.Router();

router.put(
  "/api/tickets/:id",
  requireAuth,
  validatingRequest,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundError();
    }

    if (ticket.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    if (ticket.orderId) {
      throw new BadRequestError("Ticket is reserved");
    }

    const { title, price } = req.body;
    ticket.set({ title, price });
    await ticket.save();

    new TicketUpdatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      version: ticket.version,
      price: ticket.price,
      userId: ticket.userId,
    });
    res.send(ticket);
  }
);

export { router as updateTicketRouter };
