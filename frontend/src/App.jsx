import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Layout from "./Layout";
import AuthLayout from "./AuthLayout";
import Club from "./Club";
import AllClubs from "./AllClubs";

function App() {
    return (
        <>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/club/:name" element={<Club />} />
                    <Route path="/allclubs" element={<AllClubs />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
