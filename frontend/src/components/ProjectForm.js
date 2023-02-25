import React from "react"


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            repo: '',
            users: []
        }
    }

    toggleButton() {
        let title = document.getElementById('title').value
        let users = document.getElementById('users').value

        if (title && users) {
            document.getElementById('submitButton').disabled = false
        } else {
            document.getElementById('submitButton').disabled = true
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        
        this.toggleButton()
    }

    handleChangeSelect(event) {
        let options = document.getElementById('users').selectedOptions
        let values = Array.from(options).map(({value}) => value)
        this.setState(
            {
                [event.target.name]: values
            }
        )
        
        this.toggleButton()
    }

    handleSubmit(event) {
        this.props.createProject(this.state.title, this.state.repo, this.state.users)
        event.preventDefault()
    }

    render() {
        return (
            <form className="px-3 mt-5" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Название:* </span>
                            <div className="col-auto">
                                <input type="text" className="form-control" name="title" id="title" 
                                onChange={(event) => this.handleChange(event)} value={this.state.title} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Репозиторий: </span>
                            <div className="col-auto">
                                <input type="text" className="form-control" name="repo" 
                                onChange={(event) => this.handleChange(event)} value={this.state.repo} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Разработчики:* </span>
                            <div className="col-auto">
                                <select name="users" className="form-select" multiple id="users" onChange={(event) => this.handleChangeSelect(event)}>
                                    {this.props.users.map((item) => <option value={item.username}>{item.username}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button type='submit' className='btn btn-success' data-bs-dismiss='modal' id='submitButton' disabled>Создать</button>
                    <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>Отмена</button>
                </div>
            </form>
        )
    }
}


export default ProjectForm