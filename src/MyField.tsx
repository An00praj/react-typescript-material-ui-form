import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";
import * as React from "react";

export const MyField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder, 
  field
}) => {
  return (
    <TextField placeholder={placeholder} {...field}/>
  );
}