import React,{Component} from 'react'
import { userData } from '../UserData';
class UserData extends Component{
    constructor(){
        super();
        this.state={
            users: userData
        }
    }

//user is an object or may be said that array
    updateUser=(user)=>{
        console.log(user);
        const users=[...this.state.users];
        const index =users.indexOf(user);
        console.log(users);
        users[index].title="update";
        this.setState({user:users});


        alert(user);
        // obj
    }
    deleteUser=(user)=>{
        console.log(user);
        const users=this.state.users.filter((u)=>u.id!==user.id)
        this.setState({users:users});
        alert(user);
    }
    render(){
        return(
            <>
             <table className='container table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                            <td><button className="btn btn-primary m-2" onClick={()=>this.updateUser(user)}>Update</button></td>
                            <td><button className="btn btn-danger m-2" onClick={()=>this.deleteUser(user)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
             </table>
            </>
        )
    }
}
export default UserData;