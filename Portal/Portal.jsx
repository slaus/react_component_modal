import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './Portal.scss';

class Portal extends Component {
    el = document.createElement('div');

    componentDidMount() {
        const div = document.body.appendChild(this.el);
        div.classList.add('overlay');
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        const {children} = this.props;

        return ReactDOM.createPortal(children, this.el);
    }
}

export default Portal;