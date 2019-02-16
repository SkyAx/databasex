import React, {
    Component
} from 'react';
import logo from './logo.svg';

import {
    Menu, Segment
} from "semantic-ui-react";
import './header.css';

export default class Header extends Component {
    state = {activeItem: ''};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render({activeItem} = this.state) {
        return (
            <Segment
                inverted={'true'}
                className={'header-container'}>
                <a href="/">
                    <img className={'logo-img'} src={logo} alt=""/>
                </a>
                <Menu
                    secondary={'true'}
                    inverted={'true'}>
                    <Menu.Item
                        name='launches'
                        active={activeItem === 'launches'}
                        onClick={this.handleItemClick}>Launches</Menu.Item>
                    <Menu.Item
                        name='years'
                        active={activeItem === 'years'}
                        onClick={this.handleItemClick}>Years</Menu.Item>
                    <Menu.Item
                        name={'rockets'}
                        active={activeItem === 'rockets'}
                        onClick={this.handleItemClick}>Rockets</Menu.Item>
                </Menu>
            </Segment>
        )
    }
};