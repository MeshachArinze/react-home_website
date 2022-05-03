import { send } from "emailjs-com";
import { useState } from 'react';
import "./ContactForm.css";

const initialFormValues = {
  fullName: "",
  email: "",
  message:"",
  formSubmitted: false,
  success: false
}

export const useFormControls = () => {
    const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});
  const validate = (fieldValues = values) => {
    let temp = { ...errors }

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required."
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message ? "" : "This field is required."

    setErrors({
      ...temp
    });
  }


  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    validate({ [name]: value });
  };

  const handleFormSubmit = async (e) => {
    // this function will be triggered by the submit event
      e.preventDefault();
      send(
      'SERVICE ID',
      'TEMPLATE ID',
      toSend,
      'User ID'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    if (formIsValid()) {
      alert("You've posted your form!")
    }

  }
   const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };
 return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  };
}
export default useFormControls;
