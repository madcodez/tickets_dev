import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";
import mongoose from "mongoose";

it("return  404 for an invalid paramter of ID", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/tickets/${id}`).expect(404);
});

it("return a ticket if ticket is found", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: "Concert", price: 20 })
    .expect(201);

  await request(app).get(`/api/tickets/${response.body.id}`).expect(200);
});
