import * as React from 'react';
import { Button } from "@material-ui/core";
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';

interface Values {
  firstName: String;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ firstName: '', lastName: '', email: '' }} onSubmit={(values) => {
      onSubmit(values);
    }}>

      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <Field 
              name="firstName" 
              placeholder="first name"
              componet={MyField} 
            />
          </div>
          <div>
            <Field 
              name="lastName"
              placeholder="last name"
              componet={MyField} 
            />
          </div>
          <div>
            <Field 
              name="email"
              placeholder="email" 
              componet={MyField} 
            />
          </div>
          <Button type="submit">submit</Button>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
      )}
    </Formik>
  );
};