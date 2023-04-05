import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus();
    };
    const handleClickWidht = () => {
        inputRef.current.style.border = "3px solid red";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-lable">
                email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleFocus}>
                Focus
            </button>
            <button className="btn btn-primary" onClick={handleClickWidht}>
                change border
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
