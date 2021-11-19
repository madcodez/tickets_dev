import { Publisher, OrderCreatedEvent, Subjects } from "@madtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: OrderCreatedEvent["subject"] = Subjects.OrderCreated;
}
