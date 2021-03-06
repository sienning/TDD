import React, { useState } from 'react';

const Form = ({ getFormInfos }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [size, setSize] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getFormInfos(firstname, lastname, age, size, message);
        document.getElementById("form-id").reset();
    }

    return (
        <div>
            <h4>Tell us more about yourself !</h4>
            <form id="form-id" onSubmit={handleSubmit}>
                <p>
                    <label >First Name
                        <input data-testid="input-firstname" onChange={e => setFirstname(e.target.value)} name="firstname" required placeholder='First Name' />
                    </label>
                </p>
                <p>
                    <label>Last Name
                        <input data-testid="input-lastname" onChange={e => setLastname(e.target.value)} name="lastname" required placeholder='Last Name' />
                    </label>
                </p>
                <p>
                    <label>Age
                        <input data-testid="input-age" onChange={e => setAge(e.target.value)} name="age" step="1" min="1" type="number" required placeholder='Age' />
                    </label>
                </p>
                <p>
                    <label>Size
                        <input data-testid="input-size" onChange={e => setSize(e.target.value)} name="size" type="number" required placeholder='Size in centimeters' /> cm
                    </label>
                </p>

                <label>Your message :
                    <textarea data-testid="textarea-message" onChange={e => setMessage(e.target.value)} name="message" rows="5" cols="40" required placeholder='Your Message ...' />
                </label>

                <br /><button data-testid="button-submit" type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;