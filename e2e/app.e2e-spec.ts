import { SimpleAngular4ExamplePage } from './app.po';

describe('simple-angular4-example App', () => {
  let page: SimpleAngular4ExamplePage;

  beforeEach(() => {
    page = new SimpleAngular4ExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
