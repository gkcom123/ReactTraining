import React,{Component} from 'react';
import axios from 'axios';
export class FetchDemo extends Component {
    constructor(props){
        super(props);

    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/userList')
        .then(res=>{
            console.log('from Axios', res.data);
        })

        fetch("http://localhost:5000/api/userList")
        .then(res => res.json())
        .then(
            (result) =>{
                console.log(result);
            },
            (error) => {
                console.log('Error is',error);
            }
        )
    }
    render() {
        return(
        <div>
            API call demo
        </div>
        )
    }
}