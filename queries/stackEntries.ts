import { iconType } from "@/generalTypes";

export const GET_ALL_STACK_QUERY = '*[_type=="stackEntry"]';

export type GetAllStackQueryType = { icon: iconType; title: string };
