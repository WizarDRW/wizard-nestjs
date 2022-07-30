import { IChapterModel } from "../models/chapter.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IChapterService extends ISubjectService<IChapterModel> {}
