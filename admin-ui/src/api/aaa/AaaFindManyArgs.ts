import { AaaWhereInput } from "./AaaWhereInput";
import { AaaOrderByInput } from "./AaaOrderByInput";

export type AaaFindManyArgs = {
  where?: AaaWhereInput;
  orderBy?: Array<AaaOrderByInput>;
  skip?: number;
  take?: number;
};
