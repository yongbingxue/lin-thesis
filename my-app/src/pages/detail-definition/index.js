import React from 'react';
import './index.css';
import {useParams} from "react-router-dom";
import AboutLink from "../../components/about-link";
import AppTitle from "../../components/title";
import NavBar from "../../components/navbar";
import TextItem from "../../components/text-item";
import {definitionMap, opinions} from "../../data/opinion";
import OpinionItem from "../../components/opinion-item";

export default function DetailDefinitionPage() {
    let params = useParams();
    return (
        <div className='detail-definition-page container'>
            <div>
                <AboutLink/>
                <div className='row'>
                    <div className='col-3'>
                        <AppTitle size='small'/>
                        <NavBar/>
                    </div>
                    <div className='col-4'>
                        <div className='keyword'>
                            Definitions
                        </div>
                        <TextItem className='sub-title' english={params.definition}
                                  chinese={definitionMap[params.definition]}/>
                    </div>
                    <div className='col-5'>
                        {
                            opinions.filter(o => params.definition === o.definition).map(opinion => {
                                return <OpinionItem key={opinion.id} opinion={opinion}/>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

