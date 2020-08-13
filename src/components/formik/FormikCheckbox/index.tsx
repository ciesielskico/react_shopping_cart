import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  makeStyles,
} from '@material-ui/core';
import { ErrorMessage, Field, FieldInputProps, FieldProps } from 'formik';
import React, { ReactNode } from 'react';

export interface FormikCheckboxItem {
  key: string;
  value: string;
}

export interface MaterialUICheckboxProps extends FieldInputProps<string> {
  errorString?: string;
  label: string;
  name: string;
}

export interface FormikCheckboxProps {
  errorString?: string;
  children: ReactNode;
  items: FormikCheckboxItem[];
  name: string;
  label: string;
}

const useStyles = makeStyles(() => ({
  formikCheckbox: { width: '100%', display: 'flex', justifyContent: 'center' },
}));

const MaterialUICheckbox: React.FC<MaterialUICheckboxProps> = ({
  errorString,
  label,
  children,
  onChange,
  onBlur,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <FormGroup onChange={onChange} onBlur={onBlur}>
        {children}
      </FormGroup>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ name, items, label, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.formikCheckbox}>
      <Field
        as={MaterialUICheckbox}
        id={name}
        name={name}
        label={label}
        errorString={<ErrorMessage name={name} />}
        {...rest}
      >
        {({ field }: FieldProps) =>
          items.map((item: FormikCheckboxItem) => (
            <FormControlLabel
              key={item.key}
              id={item.value}
              {...field}
              value={item.value}
              label={item.key}
              control={<Checkbox checked={field.value.includes(item.value)} />}
            />
          ))
        }
      </Field>
    </div>
  );
};

export default FormikCheckbox;
