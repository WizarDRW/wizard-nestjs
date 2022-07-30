import { IUserOptionModel } from "../models/user.option.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IUserOptionService extends ISubjectService<IUserOptionModel> {}
