import React,{components} from "react";
/*class ProductDetails extends React.components{
    constructor(){
        super();
        this.state={}
        
    }
    render()
    {
        return(
            <div>
                <h1 style={{fontSize:"30px"}}>Hello World</h1>
            </div>
        )
    }
}
export default ProductDetails;
*/

class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }
  export default Car;