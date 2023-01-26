import React from 'react'


const ToDoItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.project}
            </td>
            <td>
                {item.user.username}
            </td>
            <td>
                {item.deleted ? 'Закрыто': 'В работе'}
            </td>
        </tr>
    )
}


const ToDoList = ({items}) => {
    return (
        <table class='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>Проект</th>
                    <th>Разработчик</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <ToDoItem item = {item} />)}
            </tbody>
        </table>
    )
}

export default ToDoList
