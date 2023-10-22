import { iconType } from "@/generalTypes";

export const GET_PROGRAMS_QUERY = '*[_type=="usedPrograms"]';

export type GetProgramsQueryType = {
  name: string;
  icon: iconType;
  iconAlt: string;
  link: string;
};
