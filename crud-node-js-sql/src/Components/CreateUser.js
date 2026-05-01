import React, { useState } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { Alert } from "bootstrap";

const CreateUser = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        rollNumber: "",
    })
    const [closeAlert, setCloseAlert] = useState(true);
    const url = 'http://localhost:4000/students/create-student';
    const createStudent = studentInfo => {
        axios.post(url, studentInfo).then(res => {
            if (res.status === 200) {
                setCloseAlert(false)
                const timeout = setInterval(() => {
                    setCloseAlert(true)
                }, 1500);
                clearInterval(timeout)
            }
        }).catch(err => console.log("Failed to add student record", err))
    }

    return (
        <>
            <StudentForm
                initialValue={formValues}
                enableReinitialize
                createStudent={createStudent}
            >
                Create Student
            </StudentForm>
            {!closeAlert && <Alert>
                <Alert.Heading>
                    Student account created successfully
                </Alert.Heading>
            </Alert>}
        </>
    )
}

export default CreateUser;