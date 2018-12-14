import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="workflow_header">
                <h1 style={{width: 'fit-content'}}>WORKFLOW!</h1>
                <button className="header_button" id="add_stage_button" onClick={this.props.createStage}>
                    Добавить стадию проекта
                </button>
            </div>
        );
    }


}

export default Header;
