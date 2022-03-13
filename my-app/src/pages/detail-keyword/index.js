import React from 'react';
import './index.css';
import {useParams} from "react-router-dom";

export default function DetailKeywordPage() {
    let params = useParams();
    let keyword = params.keyword;
    return (
        <div>
           TODO
        </div>
    )
}

