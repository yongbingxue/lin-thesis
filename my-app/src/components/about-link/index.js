import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import TextItem from "../text-item";

export default class AboutLink extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='about-link'>
                <Link to="/">
                    <TextItem className='about-link__subtitle' english='About' chinese='关于'/>
                </Link>
            </div>
        )
    }
}

AboutLink.defaultProps = {}
