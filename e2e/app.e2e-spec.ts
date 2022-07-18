import { BookStoreFrontPage } from './app.po';

describe('book-store-front App', function() {
  let page: BookStoreFrontPage;

  beforeEach(() => {
    page = new BookStoreFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
