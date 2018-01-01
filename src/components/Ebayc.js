import React, { Component } from 'react';

class Ebayc extends Component {
  render() {
    return (
      <div>
        <h1>ebay</h1>
        <form action="" className="ebay-calculator">
          <div onChange={(e)=>this.props.calcSubTotal(e)}>
            <div>
              <label>Sale cost</label>
              <input type="number" className="sale-cost"/>
            </div>
            <div>
              <label>Shipping Paid</label>
              <input type="number" className="shipping-paid"/>
            </div>
          </div>
          <div>
            <label>Subtotal</label>
            <input value={this.props.subtotal}/>
          </div>
          <div>
            <label>Ship Cost</label>
            <input/>
          </div>
          <div>
            <label>Ship Fee</label>
            <input/>
          </div>
          <div>
            <label>Ebay Fee</label>
            <input/>
          </div>
          <div>
            <label>Paypal Fee</label>
            <input/>
          </div>
          <div>
            <label>Total</label>
            <input/>
          </div>
        </form>
      </div>
    );
  }
}

export default Ebayc;
