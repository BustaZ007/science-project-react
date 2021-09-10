import React, { Component } from 'react';
import styles from './style.css';

export default class Button extends Component {
    render() {
        return (
            <button className={`${styles.button} ${this.props.className}`}
                onClick={this.props.onClick}>
                {(this.props.icon)
                ?<i className={'bx bx-'+this.props.icon}></i>
                :<p>{this.props.text}</p>}
            </button>
        )
    }
}
