import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

const createTicket = () => {
  return request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: "asdaf", price: "100" });
};

it("returns tickets if tickets are found", async () => {
  await createTicket();
  await createTicket();
  await createTicket();
  // const tickets = await Ticket.find({});
  const response = await request(app).get("/api/tickets").expect(200);
  //console.log(response.body);
  expect(response.body.length).toEqual(3);
});
