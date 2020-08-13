import { Button, makeStyles, Paper } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import FormikControl from './formik/FormikControl';

export interface OrderForm {
  name: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  deliveryType: DeliveryType;
  paymentMethod: string;
  agreements: string[];
}

export enum DeliveryType {
  COURIER = 'COURIER',
  POST = 'POST',
  PARCEL_LOCKER = 'PARCEL_LOCKER',
}

export enum PaymentMethod {
  CARD = 'CARD',
  CASH = 'CASH',
  TRANSFER = 'TRANSFER',
}

const agreements = [
  { value: 'agreement1', key: 'AGREEMENT1' },
  { value: 'agreement2', key: 'AGREEMENT2' },
  { value: 'agreement3', key: 'AGREEMENT3' },
];

const initialValues: OrderForm = {
  name: '',
  lastName: '',
  address: '',
  email: '',
  phone: '',
  deliveryType: DeliveryType.COURIER,
  paymentMethod: PaymentMethod.CARD,
  agreements: [],
};

const validationSchema = Yup.object<OrderForm>().shape({
  name: Yup.string().required(),
  lastName: Yup.string(),
  address: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string(),
  deliveryType: Yup.string().required().nullable(),
  paymentMethod: Yup.string().required(),
  agreements: Yup.array().of(Yup.string()).required(),
});

const useStyles = makeStyles(() => ({
  paper: {
    width: '50%',
    margin: '1rem auto',
    padding: '1rem',
  },
}));

function DeliveryForm(props: any) {
  const classes = useStyles();

  const onSubmit = (values: OrderForm) => console.log({ ...values, cart: props.cart });

  return (
    <Paper className={classes.paper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form>
            <FormikControl control="input" type="text" label="Name" name="name" />
            <FormikControl control="input" type="text" label="Last name" name="lastName" />
            <FormikControl control="input" type="text" label="Address" name="address" />
            <FormikControl control="input" type="text" label="Email" name="email" />
            <FormikControl control="input" type="text" label="Phone" name="phone" />
            <FormikControl
              control="select"
              label="Delivery type"
              name="deliveryType"
              items={Object.entries(DeliveryType).map(([key, value]) => ({ label: key, value }))}
            />
            <FormikControl
              control="radio"
              label="Payment method"
              name="paymentMethod"
              items={Object.entries(PaymentMethod).map(([key, value]) => ({ key, value }))}
            />
            <FormikControl
              control="checkbox"
              label="Agreements"
              name="agreements"
              items={agreements}
            />
            <Button variant="contained" color="primary" type="submit">
              SUBMIT
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

const mapStateToProps = (state: any) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(DeliveryForm);
