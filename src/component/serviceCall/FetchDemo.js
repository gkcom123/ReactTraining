import React,{Component} from 'react';
import axios from 'axios';
export class FetchDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isAPILoaded: false,
            users: [],
            nameText:'',
            passwordText:'',
            postCallStatus: null
        }
        this.searchInterval = 300;
        //this.onSearchChange = this.onSearchChange.bind(this);
    }
    // onSearchChange(event) {
    //     console.log("Event is triggered");
    // }

    onNameChange = (event) => {
        this.setState({nameText:event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({passwordText:event.target.value})
    }
    onSearchChange = (event) =>{
        clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(()=>{
            fetch("http://localhost:5000/api/userList")
            .then(res => res.json())
            .then(
                (result) =>{
                    this.setState({
                        isAPILoaded: false,
                        users: result.data
                    })
                    //console.log(result);
                },
                (error) => {
                    this.setState({
                        isAPILoaded: false,
                        error
                    })
                    console.log('Error is',error);
                }
            )
        }, this.searchInterval);
        
    }
    postData = (url=``,data={})=> {
        return fetch(url,{
            method:"POST", //GET is default, Possible : PUT,DELETE,PATCH etc
            mode: "cors", //no-cors, cors default is same-origin
            cache: "no-cache",
            credentials: "same-origin",
            headers:{
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body:JSON.stringify(data),
        })
        .then(response=> response.json())
        .catch(error=> console.error(`Fetch Error=\n`,error));
    }
    onSubmit = () =>{
        const name = this.state.nameText;
        const password = this.state.passwordText;
        const data = {name, password};
        this.postData(`http://localhost:5000/api/updateUser`,data)
        .then(data=> {
            this.setState({postCallStatus:data.status});
            console.log(data.status)
        })
        .catch(error=> console.error(error))
    }
    componentDidMount() {
        // Below steps are for Axios, which is a different library 
        // axios.get('http://localhost:5000/api/userList')
        // .then(res=>{
        //     //console.log('from Axios get call', res.data);
        // })
        const data = {name: 'Demo User', password: 'khjdhj'};
        axios.post('http://localhost:5000/api/updateUser',data)
        .then(res=>{
            //console.log('from Axios post call', res.data);
        })

        // Below steps are for fetch api, which is provided by React
        // fetch("http://localhost:5000/api/userList")
        // .then(res => res.json())
        // .then(
        //     (result) =>{
        //         this.setState({
        //             isAPILoaded: true,
        //             users: result.data
        //         })
        //         //console.log(result);
        //     },
        //     (error) => {
        //         this.setState({
        //             isAPILoaded: true,
        //             error
        //         })
        //         console.log('Error is',error);
        //     }
        // )
        //This is the POST Call
        this.postData(`http://localhost:5000/api/updateUser`,data)
        .then(data=> console.log(data))
        .catch(error=> console.error(error))
    }
    render() {
        const {isAPILoaded,users,error} = this.state;
       
        // const isAPILoaded = this.state.isAPILoaded
        //Remove the below sections if api is not returning
        if(isAPILoaded) {
            return (<div>Loading...</div>)
        }
        //console.log('---->',typeof error, error);
        if(error){
            return <div>Something Wrong...{error.toString()}</div>
        }
        return(
            <div>
                <ul className="">
                    {users.map((user,index) => (
                        <li key={index}>
                            {user.userName}
                        </li>
                ))}
                </ul>
                <input type="search" placeholder="Search" onChange={this.onSearchChange}/>
                <input type="text" placeholder="Name" onChange={this.onNameChange}/>
                <input type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                <button type="Button" onClick={this.onSubmit}> Submit </button>
                {this.state.postCallStatus ?
                <span>{this.state.postCallStatus}</span> :''}
            </div>
        )
    }
}