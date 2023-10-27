import { Aaa as TAaa } from "../api/aaa/Aaa";

export const AAA_TITLE_FIELD = "image";

export const AaaTitle = (record: TAaa): string => {
  return record.image?.toString() || String(record.id);
};
