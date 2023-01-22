import React from 'react'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                <a href={`/project/${project.title}`}>{project.title}</a>
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
                {projects.map((project) => <ProjectItem project = {project} />)}
            </tbody>
        </table>
    )
}

export default ProjectList
