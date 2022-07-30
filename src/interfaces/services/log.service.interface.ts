import { ILogModel } from "../models/log.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface ILogService extends ISubjectService<ILogModel> {}
