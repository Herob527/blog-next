import { iconType } from "@/generalTypes";

export const GET_ALL_EXPERIENCES_QUERY = `
*[_type=="experience"] {
  icon,
  started,
  finished,
  thingsDone[] {
    thing, 
    descriptionOfThing
  },
  companyName,
  companyWebsite,
  jobTitle
}
`;

export type GetAllExperiencesQueryType = {
  icon: iconType;
  started: string;
  finished: string;
  thingsDone: {
    thing: string;
    descriptionOfThing: string;
  }[];
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
};
