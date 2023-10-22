import { iconType } from "@/generalTypes";

export const GET_STACK_QUERY = '*[_type=="stackEntry"]';

export type GetStackQueryType = { icon: iconType; title: string };
