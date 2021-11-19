import { OrderCreatedEvent, Listener, Subjects } from "@madtickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  queueGroupName = queueGroupName;
  subject: Subjects.OrderCreated = Subjects.OrderCreated;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const order = Order.build({
      id: data.id,
      userId: data.userId,
      version: data.version,
      status: data.status,
      price: data.ticket.price,
    });
    console.log(order);
    await order.save();

    msg.ack();
  }
}
