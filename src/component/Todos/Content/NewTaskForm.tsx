import * as React from "react";
import {Task} from '../../../interface/interface';



interface NewTaskFormProps{
    onChange:(event:any)=>void;
    onAdd:(event: React.FormEvent<HTMLFormElement>)=>void;
    task:Task;
}

class NewTaskForm extends React.Component<NewTaskFormProps,{}>{
    render(){
        return(
            <div>
                 <form onSubmit={this.props.onAdd}>
                   <input onChange={this.props.onChange} value={this.props.task.name} />
                   <button type="submit">Add a task</button>
                 </form>
            </div>
        )
    }
}

export default NewTaskForm;