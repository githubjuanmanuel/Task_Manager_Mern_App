import React from 'react'

const TaskForm = ({createTask,name,handleImputChange,isEditing, updateTask}) => {
  return (
    <form className='task-form' onSubmit={isEditing ? updateTask : createTask}>
        <input type="text" placeholder='Add a task' name='name' value={name} onChange={handleImputChange}/>
        <button type='submit'>{isEditing ? 'Edit' : 'Add'}</button>
    </form>
  )
}

export default TaskForm