import { BlogAppPage } from './app.po';

describe('blog-app App', function() {
  let page: BlogAppPage;

  beforeEach(() => {
    page = new BlogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
