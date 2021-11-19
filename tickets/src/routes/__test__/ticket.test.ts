import { Ticket } from "../../models/ticket";

it("implement optimistic concurrency control", async () => {
  const ticket = Ticket.build({
    title: "First",
    price: 10,
    userId: "123",
  });
  await ticket.save();

  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  await firstInstance!.save();
  try {
    await secondInstance!.save();
  } catch (err) {
    return;
  }

  throw new Error("Should nt reach this point");
});
