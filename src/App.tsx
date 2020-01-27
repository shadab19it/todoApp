import * as React from "react";
import './App.scss';
import Todos from './component/Todos/todos';


interface Props{
  username:string,
}

class App extends React.Component{
  render(){
    return(
      <div>
        <Todos />
      </div>
    );
  }

}


export default App ;