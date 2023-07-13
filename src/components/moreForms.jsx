import React, { useState } from 'react';


// create an object to store the data
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    
    const [firstError, setFirstError] = useState("")
    const [lastError, setLastError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPassError] = useState("")
    const [confirmPasswordError, setConfirmPassError] = useState("")

    const submitForm = e => {
    // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })

    };


    // This is where we run our validations
    const handleChange = e => {
        const { name, value } = e.target
        setFormData((currentData) => ({ ...currentData, [name]: value }))
    
        if (name == 'firstName' && value.length < 1){
            setFirstError("")
        } else if (name == 'firstName' && value.length < 2){
            setFirstError("First Name must be at least 2 characters!")
        } else if (name == 'firstName'){
            setFirstError("")
        }

        if (name == 'lastName' && value.length < 1){
            setLastError("")
        } else if (name == 'lastName' && value.length < 2){
            setLastError("Last Name must be at least 2 characters!")
        } else if (name == 'lastName'){
            setLastError("")
        }
        
        if (name == 'email' && value.length < 1){
            setEmailError("")
        } else if (name == 'email' && value.length < 5){
            setEmailError("Email must be at least 5 characters!")
        } else if (name == 'email'){
            setEmailError("")
        }
        
        if (name == 'password' && value.length < 1){
            setPassError("")
        } else if (name == 'password' && value.length < 8){
            setPassError("Password must be at least 8 characters!")
        } else if (name == 'password'){
            setPassError("")
        }

        if (name == 'confirmPassword' && value.length < 1){
            setPassError("")
        } else if (name == 'confirmPassword' && value != formData.password){
            setConfirmPassError("Password does not match!")
        } else if (name == 'confirmPassword'){
            setConfirmPassError("")
        }
    }


    return (
        <form onSubmit={submitForm}>
            <fieldset>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <p class="styleError">{firstError}</p>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <p class="styleError">{lastError}</p>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    <p class="styleError">{emailError}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name="password" value={formData.password} onChange={handleChange} />
                    <p class="styleError">{passwordError}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    <p class="styleError">{confirmPasswordError}</p>
                    <br></br>
                    <input type="submit" value="Create User"/>
                </div>
            </fieldset>
        </form>
    )
};






export default Form;