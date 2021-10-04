import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HOST, ResponseStatus } from '../../constants';
import ApiServices from '../../services/ApiServices';
import AuthServices from '../../services/AuthServices';
import { addEventListenerOnTopBar } from '../../utils.jsx';
import LoadBar from '../LoadBar/LoadBar.jsx';
import styles from './style.css';

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : null,
            scrollStyle : styles.topBar,
        };

        this.addScrollStyle = this.addScrollStyle.bind(this);
    }
    
    componentDidMount(){
        ApiServices.getUserInformation()
        .then((res) =>{
            if(res.status === ResponseStatus.SUCCES){
                console.log(res.data);
                this.setState({
                    user: res.data,
                });
            }
        });
        addEventListenerOnTopBar(this.addScrollStyle);
    }

    addScrollStyle(isScroll){
        this.setState({
            scrollStyle :(isScroll)? styles.scrolledTopBar : styles.topBar
        });
    }

    render() {
        return (
            <div className={this.state.scrollStyle}>
                <h2 className={styles.logoName}>Информатор. &nbsp;science</h2>
                <div className={styles.contentBlock}>
                    {(!this.state.user)
                    ?<LoadBar/>
                    :<>
                        <Link to='/' className={styles.userInfo}>
                            <div className={styles.userTextBlock}>
                                <p className={styles.userName}>{`${this.state.user.second_name} ${this.state.user.first_name}`}</p>
                                <p className={styles.userRole}>{this.state.user.role}</p>
                            </div>
                            <img src={HOST + this.state.user.image} className={styles.userAvatar}/>
                        </Link>
                        <div className={styles.menu}>
                            <Link to ='/' className={styles.menuLink}>Личный кабинет</Link>
                            <Link to ='/login' className={styles.menuLink} onClick={AuthServices.logout}>Выйти</Link>
                        </div>
                    </>}
                </div>
            </div>
        )
    }
}
