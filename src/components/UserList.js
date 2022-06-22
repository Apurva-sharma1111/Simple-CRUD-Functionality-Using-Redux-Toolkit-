import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../features/userSlice';
import { setUserForUp } from '../features/setUserSlice';

export const UserList = () => {
    const users = useSelector((state)=> state.user);
    const dispatch = useDispatch();
  return (
    <div>
        
        {
            users.map((user) => (
                <div className='dataDiv' key={user.id}>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => dispatch(setUserForUp(user))}>Edit</button>
                    <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                </div>
            ))
        }
        
    </div>
  )
}
