import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here are Terms and Conditions</h3>
            <p>Go Back To: <Link to='/signup'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;