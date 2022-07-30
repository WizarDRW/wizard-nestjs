import { IOptionModel } from "../models/option.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IOptionService extends ISubjectService<IOptionModel> {}
