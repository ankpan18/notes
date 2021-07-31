import React from 'react';
import {getOptions} from './../services/filter';

const options=getOptions();

export default function Filter(props){
    const{filter,change}=props;
    const getClass=(key)=>(key===filter? 'selected':'');
    return(
        <ul className="filters list-unstyled clearfix">
            {/*  <li>
                <a className="selected">All</a>
            </li>
            <li>
                <a>Active</a>
            </li>
            <li>
                <a>Completed</a>
           </li> */} 
           {Object.keys(options).map(key=>(
               <li key={key}>
                   <a onClick={()=> change(key)} className={getClass(key)}>
                       {options[key]}
                    </a>
               </li>

           ))
           }
        </ul>
    );
}
