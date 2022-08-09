import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { fetchUsers } from '../redux/userSlice';


const FetchThunk = () => {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ?<div>{user.error}</div>: null }
        {!user.loading && user.users.length ?(
            <ul>
                {user.users.map((user,index)=>(
                    <li key = {index}>{user.username}</li>
                ))}
            </ul>
        ):null}
    </div>
  )
}

export default FetchThunk