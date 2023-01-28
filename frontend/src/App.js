import React from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Cookies from 'universal-cookie'
import UserList from './components/Users'
import ProjectList from './components/Project'
import ToDoList from './components/ToDo'
import ProjectDetail from './components/ProjectDetail'
import Footer from './components/Footer'
import Menu from './components/Menu'
import LoginForm from './components/Auth'


const NotFound404 = () => {
  const location = useLocation()
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todo': [],
      'token': '',
      'current_user': ''
    }
  }

  set_token(token, login) {
    const cookies = new Cookies()
    cookies.set('token', token)
    cookies.set('current_user', login)
    this.setState({'token': token, 'current_user': login}, ()=>this.load_data())
  }

  is_authenticated() {
    return this.state.token !== ''
  }

  get_token_from_storage(){
    const cookies = new Cookies()
    const token = cookies.get('token')
    const current_user = cookies.get('current_user')
    this.setState({'token': token, 'current_user': current_user}, ()=>this.load_data())
  }

  get_token(login, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: login, password: password})
    .then(response => {
      this.set_token(response.data['token'], login)
    }).catch(error => alert("Неверный логин или пароль!"))
  }

  logout() {
    this.set_token('', '')
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  load_data() {
    const headers = this.get_headers()
    axios.all([
      axios.get('http://127.0.0.1:8000/api/users/', {headers}),
      axios.get('http://127.0.0.1:8000/api/projects/', {headers}),
      axios.get('http://127.0.0.1:8000/api/todo/', {headers})
    ])
    .then(response => {
      const users = response[0].data.results
      const projects = response[1].data.results
      const todo = response[2].data.results
        this.setState(
          {
            'users': users,
            'projects': projects,
            'todo': todo
          }
      )
    }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.get_token_from_storage()
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Menu user_status={this.is_authenticated()} username={this.state.current_user} logout={() => this.logout()} />
          <Routes>
            <Route path='/' element={<UserList users = {this.state.users} />} />
            <Route path='/projects' element={<ProjectList projects = {this.state.projects} />} />
            <Route path='/todo' element={<ToDoList items = {this.state.todo} />} />
            <Route path='/users' element={<Navigate replace to='/' />} />
            <Route path='/login' element={<LoginForm get_token={(login, password) => this.get_token(login, password)} />} />
            <Route path='/project/:title' element={<ProjectDetail projects = {this.state.projects} />} />
            <Route path='*' element={<NotFound404 />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
