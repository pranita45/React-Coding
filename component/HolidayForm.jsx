import { Component } from "react";
class AddUser extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            email: "",
            number: 0,
            city: ""
            
        }
    }

    getUserName = (event) => {
        this.setState({ username: event.target.value })
    }

    getEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    getpwd = (e) => {
        this.setState({ password: e.target.value })
    }

    getNumber = (e) => {
        this.setState({ number: e.target.value })
        console.log(this.state);

    }

    submit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }



    render() {
        return (<div style={{backgroundColor:"black"}}>
            <h1 style={{backgroundColor:"#808080"}}>HOLIDAY REQUEST FORM</h1>
            <br/>
            <div style={{border:"solid #808080 5px"}} className="container  App-header">
                
                <br/>
                <h3>Fill The Below Details</h3>

                <form onSubmit={this.submit}>
                    <div className="form-group">
                    <br/>
                        <label htmlFor="exampleInputEmail1">Employee Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" onChange={this.getUserName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Company Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Company Name" onChange={this.getUserName} />
                    </div>
                    <br />
                    <div className="form-group">
                        <h5>Holiday Date</h5>
                        <label htmlFor="exampleInputEmail1">From</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="From" />

                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" >To</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" placeholder="To"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Total Days </label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Total Days" onChange={this.getNumber}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" >Employee Signature</label>
                        <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Employee Signature" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Date</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" placeholder=" Current Date"  />
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Approved By </label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Immediate Supervisor" onChange={this.getUserName}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"> Date </label>
                        <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Mention Here Approved's Date" />
                    </div>
                    <br/>
                    <hr/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br/>
                    <br/>
                 </form>
                 <br/>
            </div>
            <br/>
        </div>
            
        )
    }
}

export default AddUser;

