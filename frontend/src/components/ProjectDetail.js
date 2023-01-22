import React from 'react'
import { useParams } from 'react-router-dom'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.title}
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


const ProjectDetail = ({projects}) => {
    let {title} = useParams()
    let currentProject = projects.filter((item) => item.title === title)

    return (
        <table class='table table-bordered table-hover'>
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
            {currentProject.map((project) => <ProjectItem project = {project} />)}
            </tbody>
        </table>
    )
}

export default ProjectDetail
