import * as WishlistActions from './wishlist.actions';

describe('Wishlist', () => {
  it('should create an instance', () => {
    expect(new WishlistActions.LoadWishlists()).toBeTruthy();
  });
});
