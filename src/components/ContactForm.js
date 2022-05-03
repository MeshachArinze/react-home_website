import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useFormControls from './useFormControls';
import './ContactForm.css';

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10
  }
];

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  FontSize: ".8rem"
}

const textStyle = {
  width: "70%",
  marginBottom: "1.5rem",
  padding: "1rem 2rem",
  borderRadius: "5px",
  FontSize: ".8rem",
  margin: "1rem 0"
}

export const ContactForm = () => {
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();


  return (
      <form onSubmit={handleFormSubmit} style={formStyle}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            key={index}
            onBlur={handleInputValue}
            onChange={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            multiline={inputFieldValue.multiline ?? false}
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            style={textStyle}
            {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}

          />
        );
      })}
      <Button
        type="submit"
        disabled={!formIsValid()}
      >
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm;