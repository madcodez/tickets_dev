import nats, { Stan } from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";
import { TicketCreatedEvent } from "./events/ticket-created-event";
console.clear();
const stan = nats.connect("ticketing", "abcdff", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to nats");

  const data: TicketCreatedEvent["data"] = {
    id: "123",
    title: "concert",
    price: 20,
  };
  await new TicketCreatedPublisher(stan).publish(data);
});
