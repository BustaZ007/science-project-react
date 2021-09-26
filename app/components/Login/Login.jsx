import React, { Component } from 'react';
import AuthServices from '../../services/AuthServices.js';
import { addErrorOnElements } from '../../utils.jsx';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import styles from './style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.loginRef = React.createRef();
        this.passwordRef = React.createRef();

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
        if(data.login === '' || data.password === ''){
            return addErrorOnElements([(data.login === '')?this.loginRef.current:this.passwordRef.current]);
        }
        AuthServices.login(data)
            .then((res)=>{
                this.setState({ message : res});
                if(res){
                    addErrorOnElements([this.loginRef.current, this.passwordRef.current]);
                }
            }); 
    }

    render() {
        return (
            <div className={styles.loginPage}>
                <form className={styles.loginForm}
                    onSubmit={(evt)=>{
                        evt.preventDefault();
                        this.login();
                    }}>
                    <Input className={styles.input}
                        value={this.state.login} 
                        onChange={(e)=>{this.setState({
                            login : e.target.value
                        })}}
                        type='text'
                        placeholder='Введите свое имя пользователя'
                        label='Имя пользователя'
                        icon='user'
                        myRef={this.loginRef}
                        required={true}/>
                    <Input className={styles.input}
                        value={this.state.password} 
                        onChange={(e)=>{this.setState({
                            password : e.target.value
                        })}}
                        type='password'
                        placeholder='Введите свой пароль'
                        label='Пароль'
                        icon='lock-alt'
                        myRef={this.passwordRef}
                        required={true}/>
                    <p className={styles.message}>{this.state.message}</p>
                    <Button text='Войти'
                        onClick={this.login}
                        className={styles.button}/>
                </form>
            </div>
        )
    }
}
