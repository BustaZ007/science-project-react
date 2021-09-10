import React, { Component } from 'react';
import AuthServices from '../../services/AuthServices.js';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import styles from './style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            login: '',
            password: '',
            message: '',
        };
        this.login = this.login.bind(this);
    }

    login(){
        const data = {
            login: this.state.login,
            password: this.state.password
        };
        AuthServices.login(data)
            .then((res)=>{
                this.setState({ message : res})
            }); 
    }

    render() {
        return (
            <div className={styles.loginPage}>
                <div className={styles.loginForm}>
                    <Input className={styles.input}
                        value={this.state.login} 
                        onChange={(e)=>{this.setState({
                            login : e.target.value
                        })}}
                        type='text'
                        placeholder='Введите свое имя пользователя'
                        label='Имя пользователя'
                        icon='user'/>
                    <Input className={styles.input}
                        value={this.state.password} 
                        onChange={(e)=>{this.setState({
                            password : e.target.value
                        })}}
                        type='password'
                        placeholder='Введите свой пароль'
                        label='Пароль'
                        icon='lock-alt'/>
                    <p className={styles.message}>{this.state.message}</p>
                    <Button text='Войти' 
                        onClick={this.login}
                        className={styles.button}/>
                </div>
            </div>
        )
    }
}
