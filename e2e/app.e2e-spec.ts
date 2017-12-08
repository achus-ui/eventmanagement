import { EventmanagementPage } from './app.po';

describe('eventmanagement App', () => {
  let page: EventmanagementPage;

  beforeEach(() => {
    page = new EventmanagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
