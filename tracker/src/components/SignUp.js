import React from "react";
import { Button, TextField } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
// navigate
// value array me lo meri language me
// submit function and fetch or store the value 
    const navigate = useNavigate();


    //1. Icreate a form object which should match with model fields
    const userForm = {
        username: "",
        mobile: "",
        email: "",
        password: "",

    }

    //2. create a function for form submission
    const userSubmit = async (formdata) => {
        console.log(formdata);
        const response = await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            console.log('success');
            Swal.fire({
                icon: "success",
                title: "Well Done!!👌",
                text: "Wonderful JOB!!"
            })
            navigate("/login1")
        } else {
            console.log('error occured');
            Swal.fire({
                icon: "error",
                title: "Try Again!!😒",
                text: "search for error!!"
            });

        }
    };



    const formSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    });


    return (
        <section className="sections vh-100">
            <div className="containers h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-12">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <div className="sign-up-form">
                                            <Formik initialValues={userForm} onSubmit={userSubmit} validationSchema={formSchema}>
                                                {/* The Formik component is a helpful tool for managing form state in React, 
                                                including capturing user input, handling form validation,
                                                 and triggering form submission. */}
                                                 
                                                {({ values, handleChange, handleSubmit, errors, touched }) => (
                                                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div class="form-outline flex-fill mb-0">
                                                                <TextField
                                                                    label="Username"
                                                                    variant="outlined"
                                                                    className="w-100"
                                                                    id="username"
                                                                    onChange={handleChange}
                                                                    value={values.username}
                                                                    helperText={touched.username ? errors.username : ''}
                                                                    error={Boolean(errors.username && touched.username)}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                            <i class="fa-solid fa-mobile-screen fa-lg me-3 fa-fw"></i>
                                                            <div class="form-outline flex-fill mb-0">
                                                                <TextField
                                                                    label="Number"
                                                                    variant="outlined"
                                                                    className="w-100"
                                                                    id="mobile"
                                                                    onChange={handleChange}
                                                                    value={values.mobile} />

                                                            </div>

                                                        </div>
                                                        

                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>

                                                            <div class="form-outline flex-fill mb-0">

                                                                <TextField
                                                                    label="Email"
                                                                    variant="outlined"
                                                                    className="w-100"
                                                                    id="email"
                                                                    onChange={handleChange}
                                                                    value={values.email}
                                                                    helperText={touched.email ? errors.email : ''}
                                                                    error={Boolean(errors.email && touched.email)}
                                                                />

                                                            </div>
                                                        </div>

                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div class="form-outline flex-fill mb-0">
                                                                <TextField
                                                                    label="Password"
                                                                    variant="outlined"
                                                                    className="w-100"
                                                                    id="password"
                                                                    onChange={handleChange}
                                                                    value={values.password}
                                                                    helperText={touched.password ? errors.password : ''}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                            <Button className="btn btn-primary" type="submit" variant="contained">
                                                                SIGN UP
                                                            </Button>
                                                        </div>
                                                    </form>
                                                )}
                                            </Formik>

                                        </div>

                                    </div>
                                    <div class="col-md-10 col-lg-4  d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=2000"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>





    );
};

export default SignUp;