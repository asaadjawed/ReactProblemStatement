import React from 'react';

export default class PostScreen extends React.Component{

    state ={ 
        UserPost : []

    }

    componentDidMount(){

        axios.get("https://gorest.co.in/public-api/posts")

        .then(res=>{

            

            this.setState({
                UserPost : res.data,
                
            })
        })
    }


    render(){
    
        const { UserPost } = this.state;
        console.log(UserPost)
        const UserPostList = UserPost.length ? (
            UserPost.map(UserPost =>{
                return(
                   <div>
                       <h5 className="card">{UserPost}</h5>
                   </div>
                )
            })
        ):(
            <div> No Post Found </div>
        )

        return(

            <div>
                {UserPostList}
            </div>
        )
}
}