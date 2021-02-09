import * as CartActions from './cart.actions';

describe('Cart', () => {
  it('should create an instance', () => {
    expect(new CartActions.LoadCarts()).toBeTruthy();
  });
});
