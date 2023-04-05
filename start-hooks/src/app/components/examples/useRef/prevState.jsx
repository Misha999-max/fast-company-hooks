import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef(0);
    const [otherStaet, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherStaet;
    }, [otherStaet]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>Prev state: {prevState.current}</p>
            <p>Current State: {otherStaet}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                render other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
