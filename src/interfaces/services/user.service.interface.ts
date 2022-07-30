import { IUserModel } from "../models/user.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IUserService extends ISubjectService<IUserModel> {}
