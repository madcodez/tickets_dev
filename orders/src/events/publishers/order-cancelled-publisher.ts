import { Publisher, OrderCancelledEvent, Subjects } from "@madtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: OrderCancelledEvent["subject"] = Subjects.OrderCancelled;
}
