import { Publisher, TicketUpdatedEvent, Subjects } from "@madtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: TicketUpdatedEvent["subject"] = Subjects.TicketUpdated;
}
