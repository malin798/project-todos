import React from 'react'
import { ToDoItem } from './ToDoItem'
import { InputToDo } from './InputToDo'
import { ToDoHeader } from './ToDoHeader'
import { useSelector } from 'react-redux'
import { UncontrolledLottie } from './EmptyToDo'

export const ToDoList = () => {

  const allItems = useSelector((store) => store.todoitem.items)
  const completedTask = allItems.filter(item => item.done)

  return (
    <main>
      < ToDoHeader />
      < InputToDo />
      <ul>
        {allItems.map(item => 
          < ToDoItem item={item} key={item.id}/>)
        }
      </ul>

      {allItems.length === 0 ?
        <UncontrolledLottie /> : 
        <p className="summary-tasks">{completedTask.length}/{allItems.length} tasks complete!</p> 
      }

    </main>
  )
}