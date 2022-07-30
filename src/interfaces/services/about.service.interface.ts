import { IAboutModel } from "../models/about.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IAboutService extends ISubjectService<IAboutModel> {

}
