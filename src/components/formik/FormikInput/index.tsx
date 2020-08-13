import { makeStyles, TextField } from '@material-ui/core';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

const useStyles = makeStyles(() => ({ formikInput: { width: '100%' } }));

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
  EMAIL = 'email',
}

export interface FormikInputProps {
  label: string;
  name: string;
  type: InputType;
}

const FormikInput: React.FC<FormikInputProps> = ({ label, name, type, ...rest }) => {
  const classes = useStyles();

  return (
    <Field
      as={TextField}
      className={classes.formikInput}
      type={type}
      name={name}
      label={label}
      helperText={<ErrorMessage name={name} />}
      {...rest}
    />
  );
};

export default FormikInput;
