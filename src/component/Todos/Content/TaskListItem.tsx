import * as React from 'react';

import {Task} from '../../../interface/interface';

interface TaskListItemProps {
    task: Task;
    onDelete:(task: Task) => void
}


class TaskListItem extends React.Component<TaskListItemProps>{

    onClick =()=>{
        this.props.onDelete(this.props.task)
    }

    render(){
        return(
            <li>
                {this.props.task.name} <button onClick={this.onClick}>X</button>
            </li>
        )
    }
}

export default TaskListItem;