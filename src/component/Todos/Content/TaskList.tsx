import * as React from 'react';

import {Task} from '../../../interface/interface';
import TaskListItem from './TaskListItem';


interface TaskListProps{
    tasks:Task[];
    onDelete:(task:Task) => void
}

class TaskList extends React.Component<TaskListProps>{
    render(){
        return (
        <div>
            <ul>
                {this.props.tasks.map(task => (
                    <TaskListItem task={task} onDelete={this.props.onDelete}/>
                ))}
            </ul>
                
         </div>
          
        )
    }
}

export default TaskList