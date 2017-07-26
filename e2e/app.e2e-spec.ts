import { Components1Page } from './app.po';

describe('components1 App', () => {
  let page: Components1Page;

  beforeEach(() => {
    page = new Components1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
