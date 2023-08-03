import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "../App";
import Header from "../components/organism/Header";
import LoginPage from "../page/LoginPage";
import SignUpPage from "../page/SignUpPage";

function BasicLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

function UserLayout() {
    return <Outlet />;
}

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<UserLayout />}>
                    <Route index element={<LoginPage />} />
                </Route>
                <Route path="/join" element={<UserLayout />}>
                    <Route index element={<SignUpPage />} />
                </Route>
                <Route path="/" element={<BasicLayout />}>
                    <Route index element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;