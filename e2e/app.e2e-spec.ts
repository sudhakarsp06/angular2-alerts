import { AlertsPage } from './app.po';

describe('alerts App', () => {
  let page: AlertsPage;

  beforeEach(() => {
    page = new AlertsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
