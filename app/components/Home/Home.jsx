import React, { Component } from 'react';
import { API } from '../../constants';
import ApiServices from '../../services/ApiServices';
import styles from './style.css';

export default class Home extends Component {


    componentDidMount(){
        ApiServices.getUserInformation();
    }
    render() {
        return (
            <div>
                <h1>Hello</h1> 
            </div>
        )
    }
}
