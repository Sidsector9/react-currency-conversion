import React, { Component } from 'react';
import github from 'simple-icons/icons/github';

export default class CCFooter extends Component {
    render() {
        return(
            <div className="cc-footer">
                <a href="https://github.com/Sidsector9/react-currency-conversion" className="cc-github-logo" dangerouslySetInnerHTML={{ __html: github.svg }} />
                <h2>App powered by:</h2>
                <a className="cc-tech" href="https://reactjs.org/">React JS</a>, <a className="cc-tech" href="https://exchangeratesapi.io/">exchangeratesapi.io</a> <span className="cc-and">and</span> <a className="cc-tech" href="http://nivo.rocks/">nivo</a>
                <div className="cc-created-by">Created by <a href="https://github.com/sidsector9">Siddharth Thevaril</a></div>
            </div>
        );
    }
}
