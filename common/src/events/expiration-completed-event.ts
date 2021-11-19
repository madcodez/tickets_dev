import { Subjects } from "./subjects";
import { OrderStatus } from "../types/order-status";

export interface ExpirationCompletedEvent {
  subject: Subjects.ExpirationCompleted;
  data: {
    orderId: string;
  };
}
