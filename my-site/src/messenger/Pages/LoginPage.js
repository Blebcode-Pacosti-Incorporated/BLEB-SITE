import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';

export default function LoginPage () {

    return (
        <div className="LoginForm">
            <center><div className='Title'>Вход</div></center>
            <div className='Input' placeholder="E-mail" contentEditable />
            <div className='Input' placeholder="Пароль" contentEditable />
            <center><div className='Button'>Войти</div></center>
            <div className='Divider' />
            <linkpad>
                <Link>Забыли пароль?</Link>
                <Link>Регистрация</Link>
            </linkpad>
        </div>
    )
}

function Link ({ href, children }) {
    const navigate = useNavigate()
    return (
        <div 
            className='Link' 
            onClick={ () => {navigate(href)} }
        >
            {children}
        </div>
    )
}