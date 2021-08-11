import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactindexComponent } from './contactindex.component';

describe('ContactindexComponent', () => {
  let component: ContactindexComponent;
  let fixture: ComponentFixture<ContactindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
