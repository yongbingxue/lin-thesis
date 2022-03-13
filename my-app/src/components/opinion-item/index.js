import React from 'react';
import './index.css';
import classNames from "classnames";

export default class OpinionItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            className,
            opinion,
            english,
        } = this.props;
        let rootClass = classNames('app-opinion-item', className);
        let content = english ? opinion.english : opinion.chinese;
        let name = english ? opinion.englishName : opinion.chineseName;
        return (
            <div className={rootClass}>
                <div className='app-opinion-content'>
                    {content}
                </div>
                <div className='app-opinion-name'>
                    {name}
                </div>
            </div>
        )
    }
}

OpinionItem.defaultProps = {
    className: '',
    opinion: {},
    english: false,
}
