import { ADD_QUERY } from "./types";

export const AddQuery = (info) => {
  return {
    type: ADD_QUERY,
    payload: info,
  };
};
