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
                <Link href="/forgot-password">Забыли пароль?</Link>
                <Link href="/register">Регистрация</Link>
            </linkpad>
        </div>
    )
}

function Link ({ href, children }) {
    return (
        <div className='Link' onClick={() => {
           window.history.pushState(null, null, href)
        }}>
            {children}
        </div>
    )
}