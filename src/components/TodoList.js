import React from 'react';
import TodoItem from './TodoItem';
import Header from './Header';
import Footer from './Footer';
import {applyFilter} from './../services/filter';

function TodoList(props){
const{title,items,addNew,filter,changeFilter}=props;
const count=items.length;
const filteredList=applyFilter(items,filter);
return (
        <div className="todolist">
          <Header title={title} addNew={addNew}/>
          {filteredList.length>0
          ?(
            <ul className="list-unstyled">
              {filteredList.map(item=><TodoItem key={item.id} data={item}/>)}
            </ul>
          )
          : <p className="alert alert-info">There are no items.</p>
        }
          <Footer {...{count, filter, changeFilter}}/>
        </div>
  );
}

// function applyFilter(list,filter){
//   switch(filter){
//     case 'completed':
//       return list.filter(item=>item.completed===true);

//     case 'active':
//       return list.filter(item=>item.completed!==true);
      
//       default:
//         return list;
//   }
// }

export default TodoList;