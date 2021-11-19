import { TicketCreatedEvent } from "./ticket-created-event";
import { Subjects } from "./subjects";
import { Publisher } from "./base-publisher";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: TicketCreatedEvent["subject"] = Subjects.TicketCreated;
}
