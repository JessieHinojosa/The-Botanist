import React from "react";
import Cart from '../components/Cart';

const NoMatch = () => {
    return (
        <div className="flex justify-center items-center my-auto">
            <Cart />
            <h1>404 Page Not Found</h1>
        </div>
    );
};

export default NoMatch;
