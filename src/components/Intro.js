import React from 'react';

const Intro = ({ firstname, lastname, age, size, message }) => {
    return (
        <div>
            {
                firstname ?
                    <div>
                        <h1>Hello {firstname} {lastname} !</h1>
                        <p>
                            You are {age} years old and {size}m tall !
                        </p>
                        <p>You have a message for everyone :</p>
                        <p>{message}</p>
                        <a className='App-link' href='#form'>Fill the form again</a>
                    </div> :
                    <div>
                        <h1>Hi</h1>
                        <h5>You need to introduce yourself first, in the form down there.</h5>
                        <a className='App-link' href='#form'>Fill the form</a>
                    </div>
            }
        </div>
    );
}

export default Intro;