import { IThemeModel } from "../models/theme.model.interface";
import { ISubjectService } from "./subject.service.interface";

export interface IThemeService extends ISubjectService<IThemeModel> {}
