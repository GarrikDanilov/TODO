import React from 'react'
import { Link } from 'react-router-dom'


const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                <Link to={`/project/${project.title}`}>{project.title}</Link>
            </td>
            <td>
                {project.users.join(', ')}
            </td>
            <td>
                {project.created.substr(0,16).replace('T', ' ')}
            </td>
            <td>
                {project.updated.substr(0,16).replace('T', ' ')}
            </td>
            <td>
                {project.repo}
            </td>
            <td>
                <button onClick={() => deleteProject(project.url)} type='button' className='btn bg-transparent'>
                    <i className='bi bi-trash3-fill text-danger'></i>
                </button>
            </td>
        </tr>
    )
}


const ProjectList = ({projects, deleteProject}) => {
    return (
        <div>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Проект</th>
                        <th>Разработчики</th>
                        <th>Создан</th>
                        <th>Обновлен</th>
                        <th>Репозиторий</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => <ProjectItem project = {project} deleteProject = {deleteProject} />)}
                </tbody>
            </table>
            <div className='text-start'>
                <Link to='/projects/create' className='btn btn-success'>Добавить</Link>
            </div>
        </div>
    )
}

export default ProjectList
