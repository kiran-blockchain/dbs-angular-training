import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('Verify Demo Serive', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should exist', () => {
    expect(service).toBeDefined();
  });
  it('should have the getCartItems and addToCart Members',()=>{
    expect(service.getCartItems).toBeDefined();
    expect(service.addToCart).toBeDefined();
  })
  it('getCartItems() should give 0 items', () => {
    const cartItems = service.getCartItems();
    expect(cartItems.length).toBe(0)
  });
  it('addCartItems() should give add Items to the cart', () => {
    service.addToCart({id:1,name:"iPhone"});
    const cartItems = service.getCartItems();
    expect(cartItems.length).toBe(1);
    expect(cartItems[0].name).toBe('iPhone')

  });
  
});
