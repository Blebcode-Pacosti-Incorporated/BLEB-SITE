import './Messenger.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MessengerPage from "./MessengerPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPage from "./ForgotPage";

export default function Messenger () {
    console.log("HUY")
    return (
        <div className="Messenger">
                <Routes>
                    <Route path="*" element={<MessengerPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPage />} />
                </Routes>
        </div>
    )
}