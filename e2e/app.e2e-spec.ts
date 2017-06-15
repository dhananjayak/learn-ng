import { LogonFormRxPage } from './app.po';

describe('logon-form-rx App', () => {
  let page: LogonFormRxPage;

  beforeEach(() => {
    page = new LogonFormRxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
