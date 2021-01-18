import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

function App() {
  const todoComponent = todosData.map( data => {
    return(
      <div>
         <TodoItem key={data.id} item={data}/>
      </div>
    )
  })
  return (
    <div className="todo-list">
      {todoComponent}
    </div>
  );
}

export default App;
