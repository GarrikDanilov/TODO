import React from 'react'
import {Link} from 'react-router-dom'


const ToDoItem = ({item, deleteToDo}) => {
    return (
        <tr>
            <td>
                {item.project}
            </td>
            <td>
                {item.user}
            </td>
            <td>
                {item.deleted ? 'Закрыто': 'В работе'}
            </td>
            <td>
                <button onClick={() => deleteToDo(item.url)} type='button' className='btn bg-transparent border-0' disabled={item.deleted}>
                    <i className='bi bi-trash3-fill text-danger'></i>
                </button>
            </td>
        </tr>
    )
}


const ToDoList = ({items, deleteToDo}) => {
    return (
        <div className='px-3'>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Проект</th>
                        <th>Разработчик</th>
                        <th>Статус</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => <ToDoItem item = {item} deleteToDo = {deleteToDo} />)}
                </tbody>
            </table>
            <div className='text-start'>
                <Link to='/todo/create' className='btn btn-success mb-3'>Добавить</Link>
            </div>
        </div>
    )
}

export default ToDoList
