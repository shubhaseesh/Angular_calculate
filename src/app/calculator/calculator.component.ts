import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  currentNumber: string = '0';
  result: number = 0;
  waitForSecondNumber = false;
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
