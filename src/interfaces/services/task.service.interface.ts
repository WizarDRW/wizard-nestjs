import { ITaskModel } from "../models/task.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface ITaskService extends ISubjectService<ITaskModel> {}
