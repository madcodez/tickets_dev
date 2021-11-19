import {
  Listener,
  TicketCreatedEvent,
  Subjects,
  NotFoundError,
} from "@madtickets/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  queueGroupName = queueGroupName;
  subject: TicketCreatedEvent["subject"] = Subjects.TicketCreated;

  async onMessage(data: TicketCreatedEvent["data"], message: Message) {
    const { price, title, id } = data;

    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    await ticket.save();

    message.ack();
  }
}
