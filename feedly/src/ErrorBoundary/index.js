import React from 'react';
import imag from '../assets/error.svg';

const ErrorBoundary = () => {
    return (
        <div>
<img className="w-auto mx-auto" src={imag} alt="Error Boundary Image" />
            
        </div>
    )
}

export default ErrorBoundary
