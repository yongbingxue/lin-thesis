import React from 'react';
import '../index.css';
import TextItem from "../../text-item";
import classNames from "classnames";
import {Link} from "react-router-dom";

export default class NavKeyword extends React.Component {

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
                <TextItem english='Keywords' chinese='关键字' vertical/>
                <div className={containerClass}>
                    <ul className='app-nav__list'>
                        <Link to="/detail/keyword/:keyword">
                            <li className='app-nav__list-item'>Traditional</li>
                        </Link>
                        <Link to="/detail/keyword/:keyword">
                            <li className='app-nav__list-item'>Fashion/Trend</li>
                        </Link>
                        <Link to="/detail/keyword/:keyword">
                            <li className='app-nav__list-item'>Cultural Fusion</li>
                        </Link>
                        <Link to="/detail/keyword/:keyword">
                            <li className='app-nav__list-item'>Old vs New</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

NavKeyword.defaultProps = {
    className: ''
}
