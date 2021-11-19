import {
  Listener,
  PaymentCompletedEvent,
  Subjects,
  NotFoundError,
  OrderStatus,
} from "@madtickets/common";
import { Message } from "node-nats-streaming";

import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class PaymentCompletedListener extends Listener<PaymentCompletedEvent> {
  queueGroupName = queueGroupName;
  subject: PaymentCompletedEvent["subject"] = Subjects.PaymentCompleted;

  async onMessage(data: PaymentCompletedEvent["data"], message: Message) {
    const { orderId, stripeId } = data;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }

    order.set({ status: OrderStatus.Complete });
    await order.save();
    message.ack();
  }
}
