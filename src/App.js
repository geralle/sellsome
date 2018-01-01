import React, { Component } from 'react';
import Ebayc from './components/Ebayc'

class App extends Component {
  constructor(){
    super();
    this.state = {
      salecost: 0,
      shippingpaid: 0,
      subtotal: 0
    }
  }

  calcSubTotal(event){
    let identifier = event.target.className
    let value = Number(event.target.value)
    let subtotalVal = this.state.subtotal
    let saleCost = this.state.salecost
    let shippingPaid = this.state.shippingpaid

    if(identifier === "sale-cost"){
      saleCost = value
    }else if (identifier === "shipping-paid") {
      shippingPaid = value
    }

    subtotalVal = saleCost + shippingPaid
    this.setState({
      salecost: saleCost,
      shippingpaid: shippingPaid,
      subtotal: subtotalVal.toFixed(2)
    })
  }

  render() {
    return (
      <div>
        <img src="http://via.placeholder.com/200x200" alt=""/>
        <Ebayc
          calcSubTotal={(e)=>this.calcSubTotal(e)}
          subtotal={this.state.subtotal}
        />
      </div>
    );
  }
}

export default App;
