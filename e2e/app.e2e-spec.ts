import { SeeYouPage } from './app.po';

describe('see-you App', () => {
  let page: SeeYouPage;

  beforeEach(() => {
    page = new SeeYouPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
