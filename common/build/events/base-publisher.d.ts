import { Subjects } from "./subjects";
import { Stan } from "node-nats-streaming";
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    protected client: Stan;
    abstract subject: T["subject"];
    constructor(client: Stan);
    publish(data: T["data"]): Promise<void>;
}
export {};
