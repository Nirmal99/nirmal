import React from "react"

export default class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            search:""
        }
    }
    data=()=>{
        return ([
            {
                name:"nirmal",
                address:"trichy"
            },{
                name:"nimmy",
                address:"trichy"
            }
        ])
    }
    handleChange=(event)=>{
        this.setState({search:event.target.value})
    }
    componentDidMount(){
        this.setState({data:this.data()})
    }
    render(){
        console.log(this.state)
        return <React.Fragment>
            <input type="text" onChange={this.handleChange} ></input>
            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {this.data().map(data=>{
                        console.log(data)
                        // if(this.state.search===data.name || this.state.search===""){
                            if(data.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1){
                        return <tr>
                            <td>{data.name}</td>
                          <td>{data.address}</td>
                        </tr>
    }})}
                </tbody>
            </table>
        </React.Fragment>
        
    }




}