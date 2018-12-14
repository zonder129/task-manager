import React, {Component} from 'react';
import './AddTask.css';

class AddTask extends Component {
    render() {
        return (
            <div className="content_wrapper">
                <button className="header_button" id="add_task_button" onClick={this.props.createTask}>
                    Добавить задачу
                </button>
            </div>
        );
    }
}

export default AddTask;
