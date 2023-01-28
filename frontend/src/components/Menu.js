import React from 'react'
import { NavLink, Link, useNavigate} from 'react-router-dom'





const Menu = (props) => {
    const history = useNavigate()

    const goHome = () => {
        history('/')
    }

    return (
        <nav className="navbar navbar-light bg-info bg-gradient mb-2">
            <div className="container-fluid">
                <div>
                    <span>МЕНЮ</span>
                    <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/users">Пользователи</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/projects">Проекты</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/todo">ToDo</NavLink></li>
                    </ul>
                </div>
                <div>
                    {props.user_status ? <button type='button' className='btn' onClick={() => {
                        props.logout()
                        goHome()
                    }}>Выйти</button>: 
                        <Link to='/login' className='nav-link'>Войти</Link>}
                    {props.user_status ? <span>{props.username}</span>: ''}
                </div>
            </div>
        </nav>
    )
}


export default Menu
