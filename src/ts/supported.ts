import { Accordeons } from './component/accordeon';
import { Header } from './component/header/header';
import { LavaLamp } from './component/lava-lamp';
import { AppSidebar } from './component/sidebar/sidebar';
import { BaseTabs } from './component/tabs';
import { SupportedForm } from './supported/form';

document.addEventListener('DOMContentLoaded', () => {
  new Header('#wrapper');
  new AppSidebar('wrapper', 'МАТЧИ');
  new BaseTabs('frecuent-question__tabs-block');
  new LavaLamp('frecuent-question__tabs-block');
  new Accordeons('accordion');
  new SupportedForm('feedback');
});
