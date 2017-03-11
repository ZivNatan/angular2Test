import { RouteProjectPage } from './app.po';

describe('route-project App', () => {
  let page: RouteProjectPage;

  beforeEach(() => {
    page = new RouteProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
