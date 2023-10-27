import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AaaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="image" source="image" />
      </SimpleForm>
    </Edit>
  );
};
