import React, { Component } from 'react';
import { API } from '../../constants';
import ApiServices from '../../services/ApiServices';
import TopBar from '../TopBar/TopBar.jsx';
import styles from './style.css';

export default class Home extends Component {


    componentDidMount(){
        ApiServices.getUserInformation();
    }
    render() {
        return (
            <div className={styles.app}>
                <TopBar/>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
                <h1>a</h1>
            </div>
        )
    }
}
