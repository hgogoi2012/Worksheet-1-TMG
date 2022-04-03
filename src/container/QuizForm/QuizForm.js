import React, { useState } from "react";
import "./quizform.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Level1 from "./Level1";
import Level2 from "./Level2";
import { Button } from '@chakra-ui/react'
import SuccessPage from './SuccessPage/SuccessPage'
import Intro from "./Intro/Intro";

const initialValues = {
    name: "",
    email: "",
    number: "",
    course: "",
    skills: [],
    skills1: [],
};

const QuizForm = ({ Auth, setAuth, PDF, setPDF }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [id, setId] = useState('')


    const [Loading, setLoading] = useState(false)
    const isEndStep = activeStep === 2;
    const isLastStep = activeStep === 1;
    const url = "https://script.google.com/macros/s/AKfycbyu88bUFOe2YqSuU5wcokSpogAki7loq9e2kB__qX7DykKtb5g/exec"

    // const currentValidationSchema = validationSchema[activeStep];

    function renderStep(step) {
        switch (step) {
            case 0:
                return <Level1 />;
            case 1:
                return <Level2 />;
            case 2:
                return <SuccessPage />;

            default:
                return <div>Not Found</div>;
        }
    }

    const getData = (id) => {
        setId(id)


    }

    const submitForm = (values) => {
        setLoading(true)
        console.log('Form data', values)

        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));
        formData.set("name", id);





        console.log('normal', formData);

        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(function (response) {
            console.log(response)

            return response.json()
        }).then(function (data) {


            setLoading(false)
        })
    };

    function onSubmit(values, actions) {
        if (isLastStep) {
            submitForm(values, actions);
            setActiveStep(activeStep + 1);
        } else {
            setActiveStep(activeStep + 1);
        }
    }


    return (
        <div onClick={() => { setPDF(false) }} className="form__Container">
            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                {({ isSubmitting }) => (
                    <Form className="quizContainer">
                        {Auth ? renderStep(activeStep) : <Intro getData={getData} setAuth={setAuth} />}

                        {/* {activeStep !== 0 && <Button colorScheme='blackAlpha' variant='solid' onClick={handleBack}>Back</Button>} */}

                        {(!isEndStep && Auth) && <Button className="submitBtn" isLoading={Loading ? true : false} colorScheme='blue' type="submit">
                            {isLastStep ? "Submit" : "Next"}
                        </Button>}

                    </Form>
                )}
            </Formik></div>
    );
};

export default QuizForm;
