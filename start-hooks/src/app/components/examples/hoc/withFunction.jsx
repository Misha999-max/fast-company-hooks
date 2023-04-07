import React, { useEffect, useState } from "react";

const withFunction = (Component) => () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const login = localStorage.getItem("auth");
        const isLogin = JSON.parse(login);
        console.log(isLogin);
        setUser(isLogin);
    }, []);

    const onLogOut = () => {
        setUser(() => ({
            token: "",
            isAuth: false
        }));
        localStorage.setItem("auth", JSON.stringify(user));
    };
    const onLogin = () => {
        setUser(() => ({
            token: "token",
            isAuth: true
        }));
        localStorage.setItem("auth", JSON.stringify(user));
    };
    return (
        <Component isAuth={user.isAuth} onLogOut={onLogOut} onLogin={onLogin} />
    );
};

export default withFunction;
