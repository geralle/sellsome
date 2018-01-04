import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function changeCalc(){
  if(dropdownSelection === 'ebay'){
    ebayCalc.style.display = "block"
    goatCalc.style.display = "none"
    paypalCalc.style.display = "none"
  }else if (dropdownSelection === 'paypal') {
    ebayCalc.style.display = "none"
    goatCalc.style.display = "none"
    paypalCalc.style.display = "block"
  }else if (dropdownSelection === 'goat') {
    ebayCalc.style.display = "none"
    goatCalc.style.display = "block"
    paypalCalc.style.display = "none"
  }
}

var dropdownSelection = "ebay"
var ebayCalc = document.getElementsByClassName('ebay-calc-container')[0]
var paypalCalc = document.getElementsByClassName('paypal-calc-container')[0]
var goatCalc = document.getElementsByClassName('goat-calc-container')[0]
var calcSelect = document.getElementById('calc-select')
calcSelect.addEventListener('change', function(event){
  dropdownSelection = event.target.value
  changeCalc()
})

changeCalc()
