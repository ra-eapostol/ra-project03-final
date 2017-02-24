import { BaseRepoPage } from './app.po';

describe('base-repo App', function() {
  let page: BaseRepoPage;

  beforeEach(() => {
    page = new BaseRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
