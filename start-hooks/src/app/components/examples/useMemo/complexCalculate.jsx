import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factarial(n) {
    return n ? n * factarial(n - 1) : 1;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const btnColor = otherState ? "primary" : "secondary";
    const fact = factarial(value);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>value: {value}</p>
                <p>result fact: {fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    increment
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${btnColor} mx-2`}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    otherState
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
