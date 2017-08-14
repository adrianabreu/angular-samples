import { TransclusionPage } from './app.po';

describe('transclusion App', () => {
  let page: TransclusionPage;

  beforeEach(() => {
    page = new TransclusionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
