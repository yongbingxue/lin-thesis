import React from 'react';
import './index.css';
import classNames from "classnames";
import NavYear from "./nav-year";
import NavKeyword from "./nav-keyword";
import NavDefinition from "./nav-definition";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {className} = this.props;
        let rootClass = classNames('app-navbar', className);
        return (
            <div className={rootClass}>
                <NavYear/>
                <NavDefinition/>
                <NavKeyword/>
            </div>
        )
    }
}

NavBar.defaultProps = {
    className: ''
}
