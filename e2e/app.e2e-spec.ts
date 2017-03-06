import { AngularLeaguePage } from './app.po';

describe('angular-league App', () => {
  let page: AngularLeaguePage;

  beforeEach(() => {
    page = new AngularLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
