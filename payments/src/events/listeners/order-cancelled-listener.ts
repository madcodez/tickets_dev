import {
  OrderCancelledEvent,
  Listener,
  Subjects,
  OrderStatus,
} from "@madtickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  queueGroupName = queueGroupName;
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    const order = await Order.findOne({ id: data.id, version: data.version });

    if (!order) {
      throw new Error("Order is not found");
    }

    order.set({ status: OrderStatus.Cancelled });

    await order.save();

    msg.ack();
  }
}
