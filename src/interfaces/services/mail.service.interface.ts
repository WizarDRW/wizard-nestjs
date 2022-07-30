import { IMailModel } from "../models/mail.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IMailService extends ISubjectService<IMailModel> {}
