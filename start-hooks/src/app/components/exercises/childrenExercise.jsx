import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const TextCloneElement = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = {
            index: index + 1
        };
        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <TextCloneElement>
                <Component />
                <Component />
                <Component />
            </TextCloneElement>
        </CollapseWrapper>
    );
};
ChildrenExercise.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ index }) => {
    return <div>{index} Компонент списка</div>;
};
Component.propTypes = {
    index: PropTypes.number
};

export default ChildrenExercise;
