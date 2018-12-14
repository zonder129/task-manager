import React, {Component} from 'react';
import './TasksBlockButton.css';

class TasksBlockButton extends Component {
    render() {
        return (
            <button className="workflow_button" onClick={this.props.moveTaskForward} data-key={this.props.currentTask}>
                Перевести верхнюю задачу на следующую стадию
            </button>
        );
    }
}

export default TasksBlockButton;
