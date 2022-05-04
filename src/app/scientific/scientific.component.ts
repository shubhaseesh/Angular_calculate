// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-scientific',
//   templateUrl: './scientific.component.html',
//   styleUrls: ['./scientific.component.css']
// })
// export class ScientificComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.css'],
})
export class ScientificComponent implements OnInit {
  currentNumber = '0';
  waitForSecondNumber = false;
  constructor() {}
  ngOnInit(): void {}

  public getNumber(val: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = val;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'
        ? (this.currentNumber = val)
        : (this.currentNumber += val);
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  public getOperation(op: string) {
    this.currentNumber += op;    
    try {
      if (op === '=') {
        this.currentNumber = eval(this.currentNumber);
        return;
      }
    } catch (error) {
      this.currentNumber = 'Error!';
      setTimeout(() => {
        this.currentNumber = '0';
      }, 1000);
      return;
    }
  }
  public getPercent(){
    this.currentNumber = String((eval(this.currentNumber)*0.01).toFixed(3));
  }
  public backFunction() {
    this.currentNumber = this.currentNumber.slice(0, -1);
  }
  public getPow(){
    let num = Number(this.currentNumber);
    console.log(num);
    this.currentNumber ="";
    let expo = Number(this.currentNumber);
    let currnum = Math.pow(num,expo)
    this.currentNumber = String(currnum);
  }
  public getExp(){
    this.currentNumber = String(Math.exp(1).toFixed(9));
  }

  public clear() {
    this.currentNumber = '0';
    this.waitForSecondNumber = false;
  }

}