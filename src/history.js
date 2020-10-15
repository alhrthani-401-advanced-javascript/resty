import React from 'react';
import './historyBoard.scss'ك
class History extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='historyBoard'>
                <ul>{this.props.hits}</ul>
            </div>
        );
    }
}
export default History;