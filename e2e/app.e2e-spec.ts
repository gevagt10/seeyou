import { SeeYouPage } from './app.po';

describe('see-you App', function() {
  let page: SeeYouPage;

  beforeEach(() => {
    page = new SeeYouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
