import{S as i}from"./header-ec130f68.js";class c{containerId;items;activeItemTitle;constructor(e,t){this.containerId=e,this.activeItemTitle=t,this.items=[{title:"ГЛАВНАЯ",icon:`${i}#newspaper`,link:"/index.html"},{title:"МАТЧИ",icon:`${i}#controller`,link:"/calibration.html"},{title:"ТУРНИРЫ",icon:`${i}#cup`,link:"/tournaments.html"},{title:"КОМАНДЫ",icon:`${i}#people`,link:"/teams.html"},{title:"ДРУЗЬЯ",icon:`${i}#person`,link:"/friends.html"}],this.render()}render(){const e=document.getElementById(this.containerId);if(!e)throw new Error(`Container with id #${this.containerId} not found.`);const t=document.createElement("div");t.className="sidebar";const n=this.createLogoAnchor(),a=this.createNav();t.appendChild(n),t.appendChild(a),e.appendChild(t)}createLogoAnchor(){const e=document.createElement("a");e.className="sidebar__logo",e.href="/index";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","sidebar__logo");const n=document.createElementNS("http://www.w3.org/2000/svg","use");return n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",`${i}#logo`),t.appendChild(n),e.appendChild(t),e}createNav(){const e=document.createElement("nav");return e.className="sidebar__nav",this.items.forEach(t=>{const n=this.createNavItem(t);e.appendChild(n)}),e}createNavItem(e){const t=document.createElement("a");t.href=e.link,t.className=`sidebar__nav-item ${e.title===this.activeItemTitle?"sidebar__nav-item_active":""}`;const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("class","sidebar__nav-item-icon");const a=document.createElementNS("http://www.w3.org/2000/svg","use");a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e.icon),n.appendChild(a);const o=document.createElement("span");return o.className="sidebar__nav-item-text",o.textContent=e.title,t.appendChild(n),t.appendChild(o),t}}export{c as A};
