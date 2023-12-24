class o{container;tabsClass;tabsParam;constructor(s,e,i){if(this.tabsClass=e,this.tabsParam=i,this.container=document.querySelector(`#${s}`),!this.container)throw new Error(`Container with id #${s} not found.`);this.render()}render(){const s=this.tabsParam.reduce((t,n)=>(t+=`
      <div
         class="tabs-block__tab"
         data-tab-name="${n[0]}"
      >
         ${n[1]}
      </div>
      `,t),""),e=this.tabsParam.reduce((t,n)=>(t+=`
         <div
            class="tabs-block__content-container"
            id="${n[0]}-content"
         >    
         </div>
      `,t),""),i=`
      <div class="tabs-block__tabs">
        ${s}
          <div class="tabs-block__lamp"><span></span></div>
        </div>
      <div class="content__tabs-content">        
      ${e}
      </div>
   `,a=document.createElement("div");a.classList.add("tabs-block"),a.classList.add(`${this.tabsClass}`),a.innerHTML=i,this.container?.append(a)}}export{o as T};
