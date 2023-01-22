import React from 'react'


const Menu = () => {
    return (
        <nav class="navbar navbar-light bg-info bg-gradient">
            <div class="container-fluid justify-content-start">
                <span class="navbar-brand">МЕНЮ</span>
                <button type="button" class="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/users">Пользователи</a></li>
                    <li><a class="dropdown-item" href="/projects">Проекты</a></li>
                    <li><a class="dropdown-item" href="/todo">ToDo</a></li>
                </ul>
            </div>
        </nav>
    )
}


export default Menu
