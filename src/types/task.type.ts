import { ITaskModel } from "src/interfaces/models/task.model.interface";
import { MongoType } from "./mongo.type";

export class TaskType extends MongoType implements ITaskModel {}
