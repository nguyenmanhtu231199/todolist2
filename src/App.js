
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components';
import TodoItem from './components/TodoItem';
import { selectTodoList } from './features/TodoSlice';


function App() {
  const todoList =useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div
        className="app__todocontainer"
        > 
        {todoList.map(item=>(
          <TodoItem
          name={item.item}
          done={item.done}
          id={item.id}
          />
        ))}
        
        </div>
     
      <Input/>
      </div>
    </div>
  );
}

export default App;
