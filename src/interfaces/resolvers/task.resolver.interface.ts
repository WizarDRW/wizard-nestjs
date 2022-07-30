import { IMongoType } from "src/middlewares/utils/mongo.util";
import { ITaskModel } from "../models/task.model.interface";

export interface ITaskResolver {
    tasks(): Promise<ITaskModel[]>;
    taskById(id: String): Promise<ITaskModel>;
    taskCreate(input: ITaskModel): Promise<ITaskModel>;
    taskUpdate(input: ITaskModel): Promise<IMongoType>;
    taskDelete(id: String): Promise<IMongoType>;
}
