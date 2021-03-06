import React, { Component } from 'react';

class Ebayc extends Component {
  render() {
    return (
      <div className="ebay-calc-container">
        <h1>ebay</h1>
        <form action="" className="ebay-calculator" onChange={(e)=>this.props.ebayCalc(e)}>
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
            <label>Ship Fee</label>
            <input value={this.props.shippingFee} disabled/>
          </div>
          <div>
            <label>Ebay Fee</label>
            <input value={this.props.ebayFee} disabled/>
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
            <input type="number" className="purchase-price"/>
          </div>
          <div>
            <label>Profit</label>
            <input value={this.props.profit} disabled/>
          </div>
        </form>
      </div>
    );
  }
}

export default Ebayc;
