import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


describe('getNumber', ()=>{
  it('should return a string number when a number button is clicked ', () =>{
    const result = getNumber('4');
    expect(result).toBe();
  })
})

function getNumber(arg0: string) {
  throw new Error('Function not implemented.');
}
// describe('CalculatorComponent', () => {
//   let component: CalculatorComponent;
//   let fixture: ComponentFixture<CalculatorComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CalculatorComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CalculatorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });