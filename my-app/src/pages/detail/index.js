import React from 'react';
import './index.css';
import {useParams} from "react-router-dom";
import AboutLink from "../../components/about-link";
import TextItem from "../../components/text-item";
import './index.css';
import NavBar from "../../components/navbar";

export default function DetailPage() {
    let params = useParams();
    return (
        <div className='detail-page container'>
            <div>
                <AboutLink/>
                <div className='row'>
                   <div className='col-3'>
                       <div>
                           <TextItem className='title' english='Contemporary Chinese Culture' chinese='现代中国文化'/>
                       </div>
                       <NavBar />
                   </div>
                    <div className='col-4'>

                    </div>
                    <div className='col-5'></div>
                </div>
                {params.keywordId}
            </div>
        </div>
    )
}

