import React, { Component } from 'react';

class Paypalc extends Component {
  render() {
    return (
      <div className="paypal-calc-container">
        <h1>paypal</h1>
        <form action="" className="paypal-calculator"
          onChange={(e)=>this.props.paypalCalc(e)}>
          <div>
            <label>Sale cost</label>
            <input type="number" className="sale-cost"/>
          </div>
          <div>
            <label>Shipping Paid</label>
            <input type="number" className="shipping-paid"/>
          </div>
          <div>
            <label>Subtotal</label>
            <input value={this.props.subtotal} disabled/>
          </div>
          <div>
            <label>Ship Cost</label>
            <input className="shipping-cost"/>
          </div>
          <div>
            <label>Paypal Fee</label>
            <input value={this.props.paypalFee} disabled/>
          </div>
          <div>
            <label>Total</label>
            <input value={this.props.grandTotal} disabled/>
          </div>
          <div>
            <label>Purchase</label>
            <input />
          </div>
          <div>
            <label>Profit</label>
            <input disabled/>
          </div>
        </form>
      </div>
    );
  }
}

export default Paypalc;
