import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex mb-5 align-items-center">
            <strong>Loading...</strong>
            <div
             className="spinner-border text-info ml-auto"
             role="status"
             aria-hidden="true"
            ></div>
            
        </div>
    );
};

export default Loading;