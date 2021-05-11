import React from 'react';
import axios from 'axios';



export default class LandingScreen extends React.Component{

  
    state ={ 
        AvailableUser : []

    }

    componentDidMount(){

        axios.get("https://gorest.co.in/public-api/users")

        .then(res=>{

            

            this.setState({
                AvailableUser : res.data,
                
            })
        })
    }

    render(){

        const { AvailableUser } = this.state;
        console.log(AvailableUser)
        const UserList = AvailableUser.length != null ? (
            AvailableUser.map(AvailableUser =>{
                return(
                   <div>
                       <h5>{AvailableUser}</h5>
                   </div>
                )
            })
        ):(
            <div> No User Found </div>
        )
        return(
            <div>
                {UserList}
            </div>
        )
    }
}
