import React from 'react'
import PropTypes from 'prop-types'

class FizzBuzz extends React.Component {
    constructor() {
      super();
      this.state = {
        fizzBuzz: [],
        num: '',
        days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
    
      }
    }

    handleChange(event) {
        this.setState({num: event.target.value})
        console.log(this.state.num)
      
    }
    render() { 
     
      return (
        <div> <input type="text" name="num" value={this.state.num}
      onChange={this.handleChange.bind(this)}/>
   
      <button
            onClick={this._fizzBuzz.bind(this)}>Click</button> 
            
            <ul>
            {this.state.fizzBuzz.map((number) =>(
            <li>{number}</li>))}
            </ul>
            
</div>
      
      );
    }
    
    _fizzBuzz() {
        let num = this.state.num;
        const tempArray = [];
        var today = new Date().getDay();
        var dayName = this.state.days[today];

        if (isNaN(num) || num < 1 || num > 1000) {
            alert("Input is not valid");
        }else{
        for(let i=1;i<=num;i++){
        if (i % 3 === 0 && i % 5 === 0) {
          tempArray.push('FizzBuzz')
      } else if (i % 5 === 0) {
        tempArray.push(<h8 className = "buzz">{dayName[0]}uzz</h8>)
      } else if (i % 3 === 0) {
        tempArray.push(<h8 className = "fizz">{dayName[0]}izz</h8>);
      } else {
        tempArray.push(i)
      }
    }
}
    
    this.setState({fizzBuzz: []}, function(){this.updateFizzBuzzArray(tempArray)});
}
    updateFizzBuzzArray(tempArray){
        this.setState({fizzBuzz:Object.assign(this.state.fizzBuzz, tempArray)});
    }
    }
  
  FizzBuzz.propTypes ={
      num : PropTypes.number
  }
 
export default FizzBuzz