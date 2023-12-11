import{s as i}from"./lava-lamp-a33f19c8.js";const a="/assets/sprite-11cd64cb.svg";class o{currentPage;pageCount;constructor(t,n){this.currentPage=n,this.pageCount=t.pagination.pageCount}bindEvents(t){t.on("click",".page-pagination__button",n=>{i("page",n.currentTarget.id)}),t.on("click",".page-pagination__button-nav",n=>{n.currentTarget.id=="next"?this.currentPage++:n.currentTarget.id=="prev"&&this.currentPage--,this.currentPage>this.pageCount?this.currentPage=this.pageCount:this.currentPage<1&&(this.currentPage=1),i("page",this.currentPage)})}render(){let t="",n="";for(let e=1;e<=this.pageCount;e++)e==this.currentPage?n+=`<button id="${e}" class="page-pagination__button page-pagination__button_active">${e}</button>`:e==1||e==this.pageCount||e==this.currentPage-1||e==this.currentPage+1?n+=`<button id="${e}" class="page-pagination__button">${e}</button>`:(e==this.currentPage-2||e==this.currentPage+2)&&(n+='<p class="page-pagination__elips">...</p>');return this.pageCount>0&&(t+='<div class="teams-list-section__teams-list-pagination page-pagination">',this.currentPage>1?t+=`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${a}#arrow-left"></use>
    </svg>
  </button>`:t+=`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${a}#arrow-left"></use>
    </svg>
  </button>`,t+=n,this.currentPage<this.pageCount?t+=`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${a}#arrow-right"></use>
    </svg>
  </button>`:t+=`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${a}#arrow-right"></use>
    </svg>
  </button>`,t+="</div>"),t}}export{o as P,a as S};
