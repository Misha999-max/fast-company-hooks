import React, { useEffect } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ logOut }) => {
    useEffect(() => {
        console.log("button logOut");
    });
    return (
        <button className="btn btn-primary" onClick={logOut}>
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    logOut: PropTypes.func
};

const MemoWithUseCallbackExample = () => {
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    return <LogOutButton logOut={handleLogOut} />;
};

export default MemoWithUseCallbackExample;
