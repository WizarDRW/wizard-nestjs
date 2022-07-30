import { IForumModel } from "../models/forum.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IForumService extends ISubjectService<IForumModel> {}
