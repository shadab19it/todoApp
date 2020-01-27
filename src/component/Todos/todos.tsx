import * as React from "react";
import {Task} from '../../interface/interface'
import NewTaskForm from './Content/NewTaskForm';
import TaskList from './Content/TaskList';


interface State{
    newTask:Task;
    tasks:Task[];
}


class TodoApp extends React.Component<{},State>{
    state:State={
        newTask:{
            id:1,
            name:""
        },
        tasks:[]
    }

    addTask = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        this.setState(previousState =>({
            newTask:{
                id:previousState.newTask.id + 1,
                name:""
            },
            tasks:[...previousState.tasks,previousState.newTask]
        }));
    }

    handleTaskChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            newTask:{
                ...this.state.newTask,
                name:event.target.value
            }
        });
    };

    deleteTask = (taskDelete:Task)=>{
        this.setState(previousState =>({
            tasks:[
                ...previousState.tasks.filter(task=> task.id !== taskDelete.id)
            ]
        }));

    }




    render(){
        return (
            <div>
                <h2>Welcome to New todo App !</h2>
                <NewTaskForm 
                 task={this.state.newTask}
                 onAdd={this.addTask}
                 onChange={this.handleTaskChange}
                 />
                 <TaskList tasks={this.state.tasks} onDelete={this.deleteTask}/>
            </div>
        );
    }
}


export default TodoApp;