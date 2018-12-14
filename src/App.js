import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import AddTask from "./AddTask";
import StageBlock from "./StageBlock";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {stages: []}
    }

    render() {
        return (
            <div>
                <Header createStage={this.createStage.bind(this)}/>
                <AddTask createTask={this.createTask.bind(this)}/>
                <div className="content_wrapper">
                    {this.state.stages.map((elem, i) => {
                        return <StageBlock key={i} currentTask={i} name={elem.stageName} tasks={elem.tasks}
                                           moveTaskForward={this.moveTaskForward.bind(this)}/>
                    })}
                </div>
            </div>
        );
    }

    createStage() {
        const stageName = prompt("Введите имя новой стадии", "Стадия");
        if (stageName.length) {
            const stages = this.state.stages;
            stages.push({"stageName": stageName, "tasks": []});
            this.setState({
                stages
            })
        }
    }

    createTask() {
        const taskName = prompt("Введите имя новой задачи", "Задача");
        if (taskName.length) {
            const stages = this.state.stages;
            const firstStage = stages[0];
            firstStage.tasks.splice(firstStage.tasks.length, 0, taskName);
            this.setState({
                stages
            })
        }
    }

    moveTaskForward(evt) {
        const stageNum = +evt.target.getAttribute('data-key');
        const stages = this.state.stages;
        const stage = stages[stageNum];
        const taskToMove = stage.tasks.splice(0, 1);
        if (stages.length > stageNum + 1) {
            stages[stageNum + 1].tasks.push(taskToMove);
        }
        this.setState({
            stages
        })

    }

}

export default App;
