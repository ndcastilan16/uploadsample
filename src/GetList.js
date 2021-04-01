import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  
  async getUsersData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'Name',  
      accessor: 'Name',
     }
     ,{  
      Header: 'IdentificationNumber',  
      accessor: 'IdentificationNumber' ,
      }
     
     ,{  
     Header: 'Attendance',  
     accessor: 'Attendance' ,
     }
     
  ]
  console.log(this.props.data1);
    return (

      <ReactTable  
      data={this.props.data1}  
      columns={columns}  
   />
   
    )
  }
}