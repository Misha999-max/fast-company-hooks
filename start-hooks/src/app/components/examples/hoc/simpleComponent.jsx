import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, isAuth, onLogOut }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-danger" onClick={onLogOut}>
                    выйти из системы
                </button>
            ) : (
                <button className="btn btn-success" onClick={onLogin}>
                    войти в ситсему
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    isAuth: PropTypes.bool,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
