import React from 'react';
import './index.css';
import classNames from "classnames";
import TextItem from "../text-item";

export default class AppTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            className,
            size,
        } = this.props;
        let rootClass = classNames('app-title', className);
        if (size === 'small') {
            rootClass = classNames('small', rootClass);
        }
        return (
            <div className={rootClass}>
                <TextItem className='' english='Contemporary Chinese Culture' chinese='现代中国文化'/>
            </div>
        )
    }
}

AppTitle.defaultProps = {
    className: '',
    size: 'normal'
}
