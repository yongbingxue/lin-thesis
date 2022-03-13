import React from 'react';
import '../index.css';
import TextItem from "../../text-item";
import classNames from "classnames";
import {Link} from "react-router-dom";

export default class NavYear extends React.Component {

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
                <TextItem english='Birth Year' chinese='出生年份' vertical/>
                <div className={containerClass}>
                    <ul className='app-nav__list'>
                        <Link to="/detail/year/2000">
                            <li className='app-nav__list-item'>2000+</li>
                        </Link>
                        <Link to="/detail/year/1990">
                            <li className='app-nav__list-item'>1990+</li>
                        </Link>
                        <Link to="/detail/year/1960">
                            <li className='app-nav__list-item'>1960+</li>
                        </Link>
                        <Link to="/detail/year/1940">
                            <li className='app-nav__list-item'>1940+</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

NavYear.defaultProps = {
    className: ''
}
