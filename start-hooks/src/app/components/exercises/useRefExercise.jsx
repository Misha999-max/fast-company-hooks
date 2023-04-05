import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const textRef = useRef();

    const handleChangeBlock = () => {
        textRef.current.textContent = "BLOCK";
        textRef.current.style.cssText =
            "color:white; height:150px;width:80px;border:3px solid black;margin-bottom:20px;";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={textRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            ></div>
            <button className="btn btn-primary" onClick={handleChangeBlock}>
                Блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
