import React from 'react'
import { Link } from 'react-router-dom'


const ProjectItem = ({project}) => {
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
        </tr>
    )
}


const ProjectList = ({projects}) => {
    return (
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>Проект</th>
                    <th>Разработчики</th>
                    <th>Создан</th>
                    <th>Обновлен</th>
                    <th>Репозиторий</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => <ProjectItem project = {project} />)}
            </tbody>
        </table>
    )
}

export default ProjectList
