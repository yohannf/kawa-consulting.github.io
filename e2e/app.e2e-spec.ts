import { KawaConsultingPage } from './app.po';

describe('kawa-consulting App', () => {
  let page: KawaConsultingPage;

  beforeEach(() => {
    page = new KawaConsultingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
