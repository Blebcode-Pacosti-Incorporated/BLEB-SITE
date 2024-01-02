import './Messenger.css';

import MessengerPage from "./MessengerPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPage from "./ForgotPage";

export default function Messenger () {
    return (
        <div className="Messenger">
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
