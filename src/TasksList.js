import React, {Component} from 'react';
import './TasksList.css';

class TasksList extends Component {
    render() {
        return (
            <ul className="task_list">
                {this.props.tasks.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        );
    }
}

export default TasksList;
