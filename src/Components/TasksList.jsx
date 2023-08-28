import React, { Component } from "react";
import trash from "../Icons/trash-regular-48.png";
import check from "../Icons/check-regular-48 (1).png";

export class TasksList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task, index) => (
            <li key={index} className={task.class}>
              {task.task}
              <div className="taskButtons">
                <button onClick={() => this.props.deleteTask(task.task)}>
                  <img src={trash} alt="trash-icon" height="26px" />
                </button>
                <button onClick={() => this.props.setCompleted(task.task)}>
                  <img src={check} alt="trash-icon" height="26px" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
