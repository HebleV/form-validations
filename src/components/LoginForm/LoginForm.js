import React from 'react';
import { emailRegex, passwordRegex, textRegex } from '../../helpers.js';

const formValid = ({ formErrors, ...values }) => {
    let validVal = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (validVal = false);
    })

    Object.values(values).forEach(val => {
        val === null && (validVal = false);
    });

    return validVal;
}

export class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING VALUES--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
        } else {
            console.error("ERROR - INVALID FORM VALUES");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case 'firstName':
                formErrors.firstName =
                !textRegex.test(value) && value.length > 0
                        ? "Must not contain any numbers"
                        : "";
                break;

            case 'lastName':
                formErrors.lastName =
                !textRegex.test(value) && value.length > 0
                        ? "Must not contain any numbers"
                        : "";
                break;

            case 'email':
                formErrors.email =
                    emailRegex.test(value) && value.length > 0
                        ? ""
                        : "Invalid email address";
                break;

            case 'password':
                formErrors.password =
                    value.length < 8 
                        ? "Minimum 8 characters" 
                        : passwordRegex.test(value)
                        ? "Only numbers(0-9) and letters(A-Z, a-z) are allowed"
                        : "";
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state)
        );
    }

    render() {
        const { formErrors } = this.state;
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className=""
                        name="firstName"
                        noValidate
                        onChange={this.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{formErrors.firstName}</span>
                    )}
                </div>

                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className=""
                        name="lastName"
                        noValidate
                        onChange={this.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                        <span className="errorMessage">{formErrors.lastName}</span>
                    )}
                </div>

                <div className="email">
                    <label htmlFor="email">Email address</label>
                    <input
                        className=""
                        type="email"
                        name="email"
                        noValidate
                        onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className=""
                        name="password"
                        noValidate
                        onChange={this.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                    )}
                </div>
                <div className="freeTrial">
                    <button type="submit">Claim Your Free Trial</button>
                </div>
                <div className="agreement">
                    <p><small>You are agreeing to our <a href='http://frescanogroup.com/' target="_blank">Terms and Services</a></small></p>
                </div>
            </form>
        )
    }
}