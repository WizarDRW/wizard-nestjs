import { IDraftModel } from "../models/draft.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IDraftService extends ISubjectService<IDraftModel> {}
