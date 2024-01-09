import { Header } from './component/header/header';
import { AppSidebar } from './component/sidebar/sidebar';
import { getLocateParam } from './functions/windowLocation';
import { RenderingCsDataForStream } from './stream/rendering-cs-data';
import { RenderingDotaDataForStream } from './stream/rendering-dota-data';

document.addEventListener('DOMContentLoaded', () => {
  new Header('#wrapper');
  new AppSidebar('wrapper', 'МАТЧИ');
  selectGameForRender();
});

async function selectGameForRender() {
  if (getLocateParam('game') == 'dota2') {
    new RenderingDotaDataForStream();
  } else {
    new RenderingCsDataForStream();
  }
}
