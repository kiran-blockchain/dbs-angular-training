import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnittestComponent } from './unittest.component';

describe('UnittestComponent', () => {
  let component: UnittestComponent;
  let fixture: ComponentFixture<UnittestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnittestComponent ]
    })
   .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnittestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('UI should have the p tag with text as unittest works!', () => {
    const app = fixture.debugElement.nativeElement;
    const contentOfPTag =app.querySelector('p').textContent;
    expect(contentOfPTag).toBe('unittest');
  });
  it('UI should have the h1 tag with text as kiran', () => {
    const app = fixture.debugElement.nativeElement;
    const contentOfPTag =app.querySelector('h1').textContent;
    expect(contentOfPTag).toBe('kiran');
  });
  it('UI should have the button tag with text as Click me', () => {
    const app = fixture.debugElement.nativeElement;
    const contentOfPTag =app.querySelector('button').textContent;
    expect(contentOfPTag).toBe('Click Me');
  });
  it('UI should have the button tag with text as Click me', () => {
    const app = fixture.debugElement.nativeElement;
    const button =app.querySelector('button');
    button.click();
    fixture.detectChanges();
    const contentOfPTag =app.querySelector('h1').textContent;
    expect(contentOfPTag).toBe('Ravi');
  
    
  });
  
});
