import { INewsModel } from "../models/news.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface INewsService extends ISubjectService<INewsModel> {}
