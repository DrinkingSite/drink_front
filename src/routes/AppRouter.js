import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "../App";
import Header from "../components/organism/Header";
import CategoryPage from "../page/CategoryPage";
import DetailPage from "../page/DetailPage";
import LoginPage from "../page/LoginPage";
import Redirection from "../components/template/Redirection";


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
                <Route path="/" element={<BasicLayout />}>
                    <Route index element={<App />} />
                    <Route path="category" element={<CategoryPage />} />
                    <Route path="login" element={<LoginPage />} />

                    <Route path="kakao/callback" element={<Redirection/>}/>
                    <Route path="detail" element={<DetailPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;