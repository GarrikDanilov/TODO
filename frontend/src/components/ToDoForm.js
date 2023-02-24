import React from "react"


class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: '',
            user: '',
            body: ''
        }
    }

    toggleButton() {
        let project = document.getElementById('project').value
        let user = document.getElementById('user').value
        let body = document.getElementById('body').value

        if (project && user && body) {
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

    handleSubmit(event) {
        this.props.createToDo(this.state.project, this.state.user, this.state.body)
        event.preventDefault()
    }

    render() {
        return (
            <form className="px-3 mt-5" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Проект: </span>
                            <div className="col-auto">
                                <select name="project" className="form-select" id="project" onChange={(event) => this.handleChange(event)}>
                                    <option value='' selected>Выберете проект</option>
                                    {this.props.projects.map((item) => <option value={item.title}>{item.title}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Пользователь: </span>
                            <div className="col-auto">
                                <select name="user" className="form-select" id="user" onChange={(event) => this.handleChange(event)}>
                                    <option value='' selected>Выберете пользователя</option>
                                    {this.props.users.map((item) => <option value={item.username}>{item.username}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-start">
                            <label for='body'>Задание</label>
                        </div>
                        <div className="col-7">
                            <textarea className='form-control mb-3' name='body' id="body" placeholder="Введите текст задания"
                            value={this.state.body} onChange={(event) => this.handleChange(event)} />
                        </div>
                    </div>
                </div>
                <div className="text-start">
                    <button type="submit" className="btn btn-success" id="submitButton" disabled>Создать</button>
                </div>
            </form>
        )
    }
}


export default ToDoForm