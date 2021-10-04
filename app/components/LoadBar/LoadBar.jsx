import React, { Component } from 'react';
import styles from './style.css';

export default class LoadBar extends Component {
    render() {
        return (
            <div className={styles.loadBar}>
                <i className='bx bx-loader bx-spin' ></i>
            </div>
        )
    }
}
