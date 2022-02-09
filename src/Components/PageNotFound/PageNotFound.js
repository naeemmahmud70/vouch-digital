import React from 'react';

const PageNotFound = () => {
    return (
        <div style={{ height: "100vh" }} className="d-flex align-items-center justify-content-center bg-light">
            <div className="text-center">
                <p className="fw-bold text-secondary">Sorry!!! We can't match this url!</p>
                <h1 className="text-danger fw-bold">This page is not found!!!</h1>
            </div>
        </div>
    );
};

export default PageNotFound;