import { BaseTabs } from "./component/tabs";
import { LavaLamp } from "./component/lava-lamp";
import { Header } from "./component/header/header";
import { AppSidebar } from "./component/sidebar/sidebar";

new Header("#wrapper");
new BaseTabs("tabs");
new LavaLamp("tabs");
new AppSidebar("wrapper", "ТУРНИРЫ");
