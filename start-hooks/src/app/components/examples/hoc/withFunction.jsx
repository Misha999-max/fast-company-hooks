import React from "react";

const withFunction = (Component) => () => {
    const login = localStorage.getItem("auth");
    const isLogin = JSON.parse(login);

    const onLogOut = () => {
        localStorage.setItem(
            "auth",
            JSON.stringify({ token: "token", isAuth: false })
        );
        // const newPerson = localStorage.getItem("auth");
        // const parseNewPerson = JSON.parse(newPerson);
        // parseNewPerson.isAuth = false;
        // localStorage.setItem("auth", JSON.stringify(parseNewPerson));
    };
    const onLogin = () => {
        console.log(isLogin);
        localStorage.setItem(
            "auth",
            JSON.stringify({ token: "token", isAuth: true })
        );
        console.log("onLogin");
    };
    return (
        <Component
            isAuth={isLogin.isAuth}
            onLogOut={onLogOut}
            onLogin={onLogin}
        />
    );
};

export default withFunction;
