import React, { Component } from 'react';
import { Container } from "semantic-ui-react";
import Header from '../header'
import LatestLaunch from '../latest-launch';
import './app.css';

export default class App extends Component {

    render() {
        return(
            <Container>
                <Header/>
                <LatestLaunch/>
            </Container>
        )
    }
};