import React from 'react';
import './index.css';
import NavBar from "../../components/navbar";
import {opinions} from "../../data/opinion";
import OpinionItem from "../../components/opinion-item";
import AboutLink from "../../components/about-link";
import AppTitle from "../../components/title";

export default class IndexPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <AboutLink/>
                </div>
                <AppTitle/>
                <div className='row'>
                    <NavBar className='col-1'/>
                    <div className='col-1'/>
                    <div className='col-10'>
                        <div className='row'>
                            <div className='col-3'>
                                {
                                    opinions.slice(0, opinions.length / 2).map(opinion => {
                                        return <OpinionItem opinion={opinion}/>
                                    })
                                }
                            </div>
                            <div className='col-3'>
                                {
                                    opinions.slice(0, opinions.length / 2).map(opinion => {
                                        return <OpinionItem english opinion={opinion}/>
                                    })
                                }
                            </div>
                            <div className='col-3'>
                                {
                                    opinions.slice(opinions.length / 2, opinions.length).map(opinion => {
                                        return <OpinionItem opinion={opinion}/>
                                    })
                                }
                            </div>
                            <div className='col-3'>
                                {
                                    opinions.slice(opinions.length / 2, opinions.length).map(opinion => {
                                        return <OpinionItem english opinion={opinion}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

IndexPage.defaultProps = {
    className: ''
}
