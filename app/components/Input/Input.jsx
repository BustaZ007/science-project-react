import React, { Component } from 'react';
import styles from './style.css';

export default class Input extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            type: props.type,
        };
    }
    
    render() {
        return (
            <div className={`${styles.inputBlock} ${this.props.className}`}>
                {(this.props.label)
                ? <label className={styles.label} htmlFor={this.props.id}>{this.props.label}</label> 
                : null}
                <div className={styles.inputWithIconBlock} ref={this.props.myRef}>
                    {(this.props.icon)
                    ?<i className={'bx bx-'+this.props.icon} ></i>
                    :null}
                    <input className={styles.input} id={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyDown={this.props.onKeyDown}
                    required={this.props.required}
                    type={this.state.type}
                    placeholder={this.props.placeholder}/>
                    {(this.props.type === 'password')
                    ?<i className={'bx bx-'+((this.state.type === 'text')?'show ':'hide ') + styles.passHideButton}
                        onClick={()=>this.setState({
                            type: (this.state.type === 'text') ? 'password' : 'text'
                        })}
                        title='Показать/скрыть пароль'></i>
                    :null}
                </div> 
            </div>
        )
    }
}
