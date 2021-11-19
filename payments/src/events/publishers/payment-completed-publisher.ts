import { Publisher, PaymentCompletedEvent, Subjects } from "@madtickets/common";

export class PaymentCompletedPublisher extends Publisher<PaymentCompletedEvent> {
  subject: Subjects.PaymentCompleted = Subjects.PaymentCompleted;
}
