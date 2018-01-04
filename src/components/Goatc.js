import React, { Component } from 'react';

class Goatc extends Component {
  render() {
    return (
      <div className="goat-calc-container">
        <h1>goat</h1>
        <form action="" className="goat-calculator"
          onChange={(e)=>this.props.goatCalc(e)}>
          <div>
            <label>Sale cost</label>
            <input type="number" className="sale-cost"/>
          </div>
          <div>
            <label>Fees</label>
            <input value={this.props.goatFee} disabled/>
          </div>
          <div>
            <label>Cashout Fee</label>
            <input value={this.props.cashoutFee} disabled/>
          </div>
          <div>
            <label>Total</label>
            <input value={this.props.grandTotal} disabled/>
          </div>
        </form>
      </div>
    );
  }
}

export default Goatc;
