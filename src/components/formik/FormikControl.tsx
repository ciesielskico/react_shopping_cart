import React from 'react';
import FormikCheckbox, { FormikCheckboxProps } from './FormikCheckbox';
import FormikInput, { FormikInputProps } from './FormikInput';
import FormikRadio, { FormikRadioProps } from './FormikRadio';
import FormikSelect, { FormikSelectProps } from './FormikSelect';

export enum FormikControlTypes {
  INPUT = 'input',
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  DATE = 'date',
}

export interface FormikControlProps {
  control: FormikControlTypes;
}

const FormikControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case FormikControlTypes.INPUT:
      return <FormikInput {...(rest as FormikInputProps)} />;
    case FormikControlTypes.SELECT:
      return <FormikSelect {...(rest as FormikSelectProps)} />;
    case FormikControlTypes.RADIO:
      return <FormikRadio {...(rest as FormikRadioProps)} />;
    case FormikControlTypes.CHECKBOX:
      return <FormikCheckbox {...(rest as FormikCheckboxProps)} />;
    case FormikControlTypes.DATE:
      return <div></div>;
    default:
      return null;
  }
};

export default FormikControl;
