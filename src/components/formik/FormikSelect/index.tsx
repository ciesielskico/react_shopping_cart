import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import { ErrorMessage, Field, FieldInputProps } from 'formik';
import React, { ReactNode } from 'react';

export interface FormikSelectItem {
  label: string;
  value: string;
}

export interface FormikSelectProps {
  name: string;
  items: FormikSelectItem[];
  label: string;
}

export interface MaterialUISelectProps extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  label: string;
}

const useStyles = makeStyles(() => ({ formikSelect: { width: '100%' } }));

const MaterialUISelectField: React.FC<MaterialUISelectProps> = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onBlur,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({ name, items, label, ...rest }) => {
  const classes = useStyles();

  return (
    <Field
      className={classes.formikSelect}
      name={name}
      as={MaterialUISelectField}
      label={label}
      errorString={<ErrorMessage name={name} />}
      {...rest}
    >
      {items.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Field>
  );
};

export default FormikSelect;
