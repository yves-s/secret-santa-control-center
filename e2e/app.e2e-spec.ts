import { SecretSantaControlCenterPage } from './app.po';

describe('secret-santa-control-center App', function() {
  let page: SecretSantaControlCenterPage;

  beforeEach(() => {
    page = new SecretSantaControlCenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
