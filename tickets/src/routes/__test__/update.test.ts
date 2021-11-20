import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

it("return 404 if he id not exists for put requests", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", global.signin())
    .send({ title: "qweqe", price: 100 });
  expect(response.status).toEqual(404);
});

it("return 401 if the user is not authenticated", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .put(`/api/tickets/${id}`)
    .send({ title: "qweqe", price: 100 });
  expect(response.status).toEqual(401);
});
it("return 401 if the userid is doesnot own the tickets", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: "qweqe", price: 100 });
  console.log(response.body);
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({ title: "qweqe", price: 100 })
    .expect(401);
});

it("return 401 if the invalid price and title ", async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({});
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({ title: "asdweqe", price: 200 })
    .expect(400);
});
it("return 200 if the tickets been updated", async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({ title: "qweqe", price: 100 });
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({ title: "asdweqe", price: 200 })
    .expect(200);
});
