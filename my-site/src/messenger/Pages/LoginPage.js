import './css/LoginPage.css';

export default function LoginPage () {

    return (
        <div className="LoginForm">
            <center><div className='Title'>Вход</div></center>
            <div className='Input' placeholder="E-mail" contentEditable></div>
            <div className='Input' placeholder="Пароль" contentEditable></div>
        </div>
    )
}