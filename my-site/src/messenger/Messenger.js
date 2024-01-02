import './Messenger.css';

import MessengerPage from "./Pages/MessengerPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPage from "./Pages/ForgotPage";

export default function Messenger () {
    return (
        <div className="Messenger" data-name="Blebsenger">
            <Routes defaultElement={<MessengerPage />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPage />} />
            </Routes>
        </div>
    )
}

function Routes ({ defaultElement, children }) {
    for(let child of children)
        if (window.location.pathname === child.props.path)
            return child.props.element
    return defaultElement
}

function Route ({ path, element }) {
    return element
}
