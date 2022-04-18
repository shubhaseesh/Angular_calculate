import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  currentNumber: string = '0';
  result: number = 0;
  waitForSecondNumber = false;
  constructor() {}

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
    this.currentNumber += op;
  }

  public clear() {
    this.currentNumber = '0';
    this.waitForSecondNumber = false;
  }
}

// public doCalculation(op: any, secondOp: any) {
//   switch (op) {
//     case '+':
//       return (this.firstOperand += secondOp);
//     case '-':
//       return (this.firstOperand -= secondOp);
//     case '*':
//       return (this.firstOperand *= secondOp);
//     case '/':
//       return (this.firstOperand /= secondOp);
//     case '=':
//       return secondOp;
//   }
// }

// public getOperation(op: any) {
//   if (this.firstOperand == null) {
//     this.firstOperand = Number(this.currentNumber);
//   } else if ( this.operator) {
//     const result = this.doCalculation(
//       this.operator,
//       Number(this.currentNumber)
//     );
//     this.currentNumber = String(result);
//     this.firstOperand = result;
//   }
//   this.operator = op;
//   this.waitForSecondNumber = true;
// }
