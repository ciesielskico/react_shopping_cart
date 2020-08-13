import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FormikCheckboxItem } from './FormikCheckbox';
import FormikControl, { FormikControlTypes } from './FormikControl';
import { FormikRadioItem } from './FormikRadio';
import { FormikSelectItem } from './FormikSelect';

const initialValues = {
  email: '',
  select: '',
  radio: '',
  checkbox: [],
};

const validationSchema = Yup.object({
  email: Yup.date().required(),
  select: Yup.string(),
  radio: Yup.string(),
  checkbox: Yup.array(),
});

const onSubmit = (values: any) => console.log(values);

const selectItems: FormikSelectItem[] = [
  { label: 'Choose', value: '' },
  { label: 'Option1', value: 'Option1' },
  { label: 'Option2', value: 'Option2' },
  { label: 'Option3', value: 'Option3' },
];

const radioItems: FormikRadioItem[] = [
  { key: 'Option1', value: 'Option1' },
  { key: 'Option2', value: 'Option2' },
  { key: 'Option3', value: 'Option3' },
];

const checkboxItems: FormikCheckboxItem[] = [
  { key: 'Option1', value: 'Option1' },
  { key: 'Option2', value: 'Option2' },
  { key: 'Option3', value: 'Option3' },
];

function FormikPlayground() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl
            control={FormikControlTypes.INPUT}
            type="date"
            label="Email"
            name="email"
          />
          <FormikControl
            control={FormikControlTypes.SELECT}
            label="Select"
            name="select"
            items={selectItems}
          />
          <FormikControl
            control={FormikControlTypes.RADIO}
            label="Radio"
            name="radio"
            items={radioItems}
          />
          <FormikControl
            control={FormikControlTypes.CHECKBOX}
            label="Checkbox"
            name="checkbox"
            items={checkboxItems}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikPlayground;
