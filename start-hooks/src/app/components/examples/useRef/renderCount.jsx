import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherStaet, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherStaet);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>

            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                render other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
