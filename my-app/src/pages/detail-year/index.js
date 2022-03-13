import React from 'react';
import './index.css';
import {useParams} from "react-router-dom";
import AboutLink from "../../components/about-link";
import TextItem from "../../components/text-item";
import NavBar from "../../components/navbar";
import {opinions} from "../../data/opinion";
import OpinionItem from "../../components/opinion-item";
import AppTitle from "../../components/title";

export default function DetailYearPage() {
    let params = useParams();
    return (
        <div className='detail-year-page container'>
            <div>
                <AboutLink/>
                <div className='row'>
                    <div className='col-3'>
                        <AppTitle size='small'/>
                        <NavBar/>
                    </div>
                    <div className='col-4'>
                        <div className='keyword'>
                            {params.year}+
                        </div>
                        <TextItem className='sub-title' english='Generation' chinese='这代人'/>
                    </div>
                    <div className='col-5'>
                        {
                            opinions.filter(o => parseInt(params.year) === o.year).map(opinion => {
                                return <OpinionItem key={opinion.id} opinion={opinion}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

