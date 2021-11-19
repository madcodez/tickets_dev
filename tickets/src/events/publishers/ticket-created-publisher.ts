import { Publisher, TicketCreatedEvent, Subjects } from "@madtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: TicketCreatedEvent["subject"] = Subjects.TicketCreated;
}
