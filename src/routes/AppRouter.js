import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "../App";
import Header from "../components/organism/Header";
import CategoryPage from "../page/CategoryPage";
import LoginPage from "../page/LoginPage";

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
                {/* <Route path="/login" element={<UserLayout />}>
                    <Route index element={<LoginPage />} />
                </Route> */}
                <Route path="/" element={<BasicLayout />}>
                    <Route index element={<App />} />
                    <Route path="category" element={<CategoryPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;