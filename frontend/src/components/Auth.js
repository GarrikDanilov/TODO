import React from 'react'


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'login': '',
            'password': ''
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleSubmit(event) {
        this.props.get_token(this.state.login, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h2 className='mt-3'>ВХОД</h2>
                <div className='mb-3'>
                    <input type='text' name='login' placeholder='login' value={this.state.login}
                onChange={(event) => this.handleChange(event)} />
                </div>
                <div className='mb-3'>
                    <input type='password' name='password' placeholder='password' value={this.state.password}
                onChange={(event) => this.handleChange(event)} />
                </div>
                <div className='mb-3'>
                    <input type='submit' value='Войти' className='btn btn-primary' />
                </div>
            </form>
        )
    }
}


export default LoginForm