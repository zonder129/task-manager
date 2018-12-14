import React, {Component} from 'react';
import TasksList from "./TasksList";
import TasksBlockButton from "./TasksBlockButton";
import './StageBlock.css';

class StageBlock extends Component {
    render() {
        return (
            <div className="workflow_block">
                <p className="workflow_block_header">{this.props.name}</p>
                <TasksList tasks={this.props.tasks}/>
                <TasksBlockButton currentTask={this.props.currentTask} moveTaskForward={this.props.moveTaskForward}/>
            </div>
        );
    }
}

export default StageBlock;
