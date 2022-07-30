import { IMultipartModel } from "../models/multipart.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IMultipartService extends ISubjectService<IMultipartModel> {}
