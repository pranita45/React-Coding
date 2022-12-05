import React, { Component } from "react";
class Event extends Component {
    constructor() {
        super()
        this.state = {
            password: "",
            email: "",
            username: "",
            city: "",
            text:"",
            phone:0,
            address:"",
            state:"",
            text1:""
        

        }

    }
    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                <h1 style={{ color: "white" }}>Event Registraction</h1>
                <br/>
                <div style={{ border: "solid #808080 5px" }} className="container  App-header">

                    <br/>
                    <h3>Fill The Below Contact Details</h3>

                    <form onSubmit={this.submit}>
                        <div className="form-group">
                            <br/>
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" onChange={this.getUserName} />
                        </div>
                        
                        <br/>
                        <div className="form-group">
                            
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="It is required" onChange={this.getEmail} />

                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" >Phone</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your mobile number here" onChange={this.getPhone}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">City </label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Answer Here" onChange={this.getCity} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" >Address</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Answer Here" onChange={this.getAddress} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">State</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder=" Current State" onChange={this.getState} />
                        </div>
                          
                         <br/>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">How did you here about the event? </label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Answer Here" onChange={this.getText} />
                        </div>

                         <br/>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"> When will you arrive?</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Hour:Min AM/PM" onChange={this.geText1}/>
                        </div>
                        <br />
                        <hr />

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <br />
                        <br />
                        
                    </form>
                    <br />
                </div>
                <br />
            </div>

        )
    }
}
export default Event;
