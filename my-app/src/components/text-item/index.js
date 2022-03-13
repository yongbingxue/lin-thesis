import React from 'react';
import './index.css';
import classNames from "classnames";

export default class TextItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            className,
            english,
            chinese,
            vertical
        } = this.props;
        let rootClass = classNames('text-item', className);
        if (vertical) {
            rootClass = classNames('text-vertical', rootClass);
        }
        return (
            <div className={rootClass}>
                <div className='text-cn'>
                    {chinese}
                </div>
                <div className='text-en'>
                    {english}
                </div>
            </div>
        )
    }
}

TextItem.defaultProps = {
    className: '',
    english: '',
    chinese: '',
    vertical: false
}
