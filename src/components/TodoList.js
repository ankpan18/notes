import React from 'react';
import TodoItem from './TodoItem';
import Header from './Header';

function TodoList(props){
const{title,items}=props;
return (
        <div className="todolist">
          <Header title={title}/>
          <ul className="list-unstyled">
            {items.map(item=><TodoItem key={item.id} data={item}/>)}
          </ul>
        </div>
  );
}



export default TodoList;