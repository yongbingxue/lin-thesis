import React from 'react';
import '../index.css';
import TextItem from "../../text-item";
import classNames from "classnames";
import {Link} from "react-router-dom";

export default class NavDefinition extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    showNavList = () => {
        this.setState({
            isNavShow: true
        })
    }
    hideNavList = () => {
        this.setState({
            isNavShow: false
        })
    }

    render() {
        let containerClass = classNames('app-nav__list-container', this.state.isNavShow ? '' : 'hide');
        return (
            <div className='app-nav-item' onMouseEnter={this.showNavList} onMouseLeave={this.hideNavList}>
                <TextItem english='Definition' chinese='定义' vertical/>
                <div className={containerClass}>
                    <ul className='app-nav__list'>
                        <Link to="/detail/definition/criticism">
                            <li className='app-nav__list-item'>批评 Criticism</li>
                        </Link>
                        <Link to="/detail/definition/objective">
                            <li className='app-nav__list-item'>客观 Objective</li>
                        </Link>
                        <Link to="/detail/definition/forms">
                            <li className='app-nav__list-item'>形态 Forms</li>
                        </Link>
                        <Link to="/detail/definition/positive">
                            <li className='app-nav__list-item'>积极的 Positive</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

NavDefinition.defaultProps = {
    className: ''
}
