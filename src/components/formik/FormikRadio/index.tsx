import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { ErrorMessage, Field, FieldInputProps, FieldProps } from 'formik';
import React, { ReactNode } from 'react';

export interface FormikRadioItem {
  key: string;
  value: string;
}

export interface MaterialUIRadioProps extends FieldInputProps<string> {
  errorString?: string;
  label: string;
  name: string;
}

export interface FormikRadioProps {
  errorString?: string;
  children: ReactNode;
  items: FormikRadioItem[];
  name: string;
  label: string;
}

const useStyles = makeStyles(() => ({
  formikRadio: { width: '100%', display: 'flex', justifyContent: 'center' },
}));

const MaterialUIRadio: React.FC<MaterialUIRadioProps> = ({
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
      <RadioGroup name={name} value={value} onChange={onChange} onBlur={onBlur}>
        {children}
      </RadioGroup>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikRadio: React.FC<FormikRadioProps> = ({ name, items, label, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.formikRadio}>
      <Field
        as={MaterialUIRadio}
        id={name}
        name={name}
        label={label}
        errorString={<ErrorMessage name={name} />}
        {...rest}
      >
        {({ field }: FieldProps) =>
          items.map((item: FormikRadioItem) => {
            return (
              <FormControlLabel
                key={item.key}
                id={item.value}
                label={item.key}
                control={<Radio checked={item.value === field.value} />}
                {...field}
                value={item.value}
              />
            );
          })
        }
      </Field>
    </div>
  );
};

export default FormikRadio;
