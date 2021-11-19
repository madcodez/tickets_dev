import {
  Listener,
  Subjects,
  NotFoundError,
  TicketUpdatedEvent,
} from "@madtickets/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  queueGroupName = queueGroupName;
  subject: TicketUpdatedEvent["subject"] = Subjects.TicketUpdated;

  async onMessage(data: TicketUpdatedEvent["data"], message: Message) {
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new NotFoundError();
    }
    const { title, price } = data;
    ticket.set({ title, price });
    await ticket.save();

    message.ack();
  }
}
