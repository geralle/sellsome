import React, { Component } from 'react';
import Ebayc from './components/Ebayc'
import Goatc from './components/Goatc'
import Paypalc from './components/Paypalc'

class App extends Component {
  constructor(){
    super();
    this.state = {
      salecost: 0.00,
      shippingpaid: 0.00,
      subtotal: 0.00,
      shippingcost: 0.00,
      shippingfee: 0.00,
      ebayfee: 0.00,
      paypalfee: 0.00,
      goatfee: 0.00,
      cashoutfee: 0.00,
      grandtotal: 0.00,
      purchased: 0.00,
      profit: ""
    }
  }

  ebayCalc(event){
    let identifier = event.target.className
    let value = Number(event.target.value)
    let saleCost = this.state.salecost
    let shippingPaid = this.state.shippingpaid
    let subtotalVal = this.state.subtotal
    let shippingCost = this.state.shippingcost
    let shippingFee = this.state.shippingfee
    let ebayFee = this.state.ebayfee
    let paypalFee = this.state.paypalfee
    let grandTotal = this.state.grandtotal
    let profitTotal = Number(this.state.profit)
    let purchasePrice = 0
    console.log(typeof purchasePrice)
    if(purchasePrice === undefined){
      console.log('hi')
      purchasePrice = 0
    }else{
      console.log('here')
      purchasePrice = this.state.purchsed
    }

    console.log(typeof purchasePrice)

    switch(identifier !== undefined){
      case identifier === "sale-cost":
        saleCost = value
        break;
      case identifier === "shipping-paid":
        shippingPaid = value
        break;
      case identifier === "shipping-cost":
        shippingCost = value
        break;
      case identifier === "purchase-price":
        purchasePrice = value
        break
      default:
        break;
    }

    subtotalVal = Number((saleCost + shippingPaid).toFixed(2))
    shippingFee = Number((shippingPaid * -.1).toFixed(2))
    ebayFee = Number((saleCost * -.1).toFixed(2))
    paypalFee = -1*(subtotalVal * .029 + .3).toFixed(2)
    grandTotal = (subtotalVal +
                  shippingCost +
                  shippingFee +
                  ebayFee +
                  paypalFee)

    profitTotal = "" + (grandTotal - purchasePrice)

    this.setState({
      salecost: saleCost,
      shippingpaid: shippingPaid,
      subtotal: subtotalVal,
      shippingfee: shippingFee,
      ebayfee: ebayFee,
      paypalfee: paypalFee,
      grandtotal: grandTotal,
      purchased: purchasePrice,
      profit: profitTotal
    })
  }

  goatCalc(event){
    let identifier = event.target.className
    let value = Number(event.target.value)
    let goatFee = this.state.goatFee
    let cashoutFee = this.state.cashoutfee
    let grandTotal = this.state.grandtotal
    let saleCost = value

    goatFee = -1*(saleCost * .145 + 5).toFixed(2)
    cashoutFee = -1*((saleCost + goatFee) * .029).toFixed(2)
    grandTotal = (Number(saleCost) +
                  Number(goatFee) +
                  Number(cashoutFee)).toFixed(2)


    this.setState({
      salecost: saleCost,
      goatfee: goatFee,
      cashoutfee: cashoutFee,
      grandtotal: grandTotal
    })
  }

  paypalCalc(event){

  }

  render() {
    return (
      <div>
        <header>
          <a href="/">
            <img className="logo" src="./geralle-logo.png" alt="geralle-logo"/>
          </a>
        </header>
        <div className="main-container">
          <select id="calc-select">
            <option value="ebay">Ebay</option>
            <option value="paypal">Paypal</option>
            <option value="goat">Goat</option>
          </select>
          <div className="calculator-container">
            <Paypalc
              paypalCalc={(e)=>this.paypalCalc(e)}
            />
            <Goatc
              goatCalc={(e)=>this.goatCalc(e)}
              goatFee={this.state.goatfee}
              cashoutFee={this.state.cashoutfee}
              grandTotal={this.state.grandtotal}
            />
            <Ebayc
              ebayCalc={(e)=>this.ebayCalc(e)}
              subtotal={this.state.subtotal}
              shippingFee={this.state.shippingfee}
              ebayFee={this.state.ebayfee}
              paypalFee={this.state.paypalfee}
              grandTotal={this.state.grandtotal}
              profit={this.state.profit}
              purchased={this.state.purchased}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
