import { ILibraryModel } from "../models/library.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface ILibraryService extends ISubjectService<ILibraryModel> {}
