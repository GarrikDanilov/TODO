import React from 'react'
import { Link } from 'react-router-dom'
import ProjectForm from './ProjectForm'


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


const ProjectList = ({projects, users, createProject, deleteProject}) => {
    return (
        <div className='px-3 mb-3'>
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
                <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#createProject'>Добавить</button>
            </div>

            <div className='modal fade' id='createProject' tabIndex='-1' aria-labelledby='createProjectLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='createProjectLabel'>Новый проект</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <ProjectForm users={users} createProject={createProject} />
                        </div>
                        <div className='modal-footer'>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectList
