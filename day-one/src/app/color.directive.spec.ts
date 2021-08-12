import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Component, Directive } from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing'
import { ColorDirective } from './color.directive';
@Component({
  template:`<h1 dbsColorTest>Welcome</h1>`
})
class TestComponent{
  constructor(){

  }
}
describe('ColorDirective', () => {
  let component:TestComponent
  let fixture:ComponentFixture<TestComponent>;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[TestComponent,ColorDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  })
  it('should create an instance', () => {
    const ele = fixture.debugElement.nativeElement;
    const selector = ele.querySelector('h1');
    const color = selector.style.backgroundColor
    expect(color).toBe('red');

  });
});
