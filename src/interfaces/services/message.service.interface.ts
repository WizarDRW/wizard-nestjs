import { IMessageModel } from "../models/message.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IMessageService extends ISubjectService<IMessageModel> {}
