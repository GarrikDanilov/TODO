import React from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import UserList from './components/Users'
import ProjectList from './components/Project'
import ToDoList from './components/ToDo'
import ProjectDetail from './components/ProjectDetail'
import Footer from './components/Footer'
import Menu from './components/Menu'


const NotFound404 = ({location}) => {
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
      'todo': []
    }
  }

  componentDidMount() {
    axios.all([
      axios.get('http://127.0.0.1:8000/api/users/'),
      axios.get('http://127.0.0.1:8000/api/projects/'),
      axios.get('http://127.0.0.1:8000/api/todo/')
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

  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path='/' component={() => <UserList users = {this.state.users} />} />
            <Redirect from='/users' to='/' />
            <Route exact path='/projects' component={() => <ProjectList projects = {this.state.projects} />} />
            <Route exact path='/todo' component={() => <ToDoList items = {this.state.todo} />} />
            <Route path='/project/:title'>
              <ProjectDetail projects = {this.state.projects} />
            </Route>
            <Route component={NotFound404} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
