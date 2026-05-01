import React from "react";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Please give valid email").required(),
        rollNumber: Yup.number().positive("Invalid roll number").integer("Invalid roll number").required("Required")
    })
    return (
        <>
            <div>
                <Formik {...props} validationSchema={validationSchema}>
                    <Form>
                        <FormGroup>
                            <Field name="name" type="text" className="form-control" />
                            <ErrorMessage name="name" component="span" className="d-block invalid-feedback" />
                        </FormGroup>
                        <FormGroup>
                            <Field name="email" type="text" className="form-control" />
                            <ErrorMessage name="email" component="span" className="d-block invalid-feedback" />
                        </FormGroup>
                        <FormGroup>
                            <Field name="rollNumber" type="number" className="form-control" />
                            <ErrorMessage name="rollNumber" component="span" className="d-block invalid-feedback" />
                        </FormGroup>
                        <Button type="submit" size="lg" block="block">{props.children}</Button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default StudentForm;