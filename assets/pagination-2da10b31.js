import{S as e}from"./sprite-432a5857.js";import{s as i}from"./lava-lamp-a33f19c8.js";class r{currentPage;pageCount;constructor(t,a){this.currentPage=a,this.pageCount=t.pagination.pageCount}bindEvents(t){t.on("click",".page-pagination__button",a=>{i("page",a.currentTarget.id)}),t.on("click",".page-pagination__button-nav",a=>{a.currentTarget.id=="next"?this.currentPage++:a.currentTarget.id=="prev"&&this.currentPage--,this.currentPage>this.pageCount?this.currentPage=this.pageCount:this.currentPage<1&&(this.currentPage=1),i("page",this.currentPage)})}render(){let t="",a="";for(let n=1;n<=this.pageCount;n++)n==this.currentPage?a+=`<button id="${n}" class="page-pagination__button page-pagination__button_active">${n}</button>`:n==1||n==this.pageCount||n==this.currentPage-1||n==this.currentPage+1?a+=`<button id="${n}" class="page-pagination__button">${n}</button>`:(n==this.currentPage-2||n==this.currentPage+2)&&(a+='<p class="page-pagination__elips">...</p>');return this.pageCount>0&&(t+='<div class="teams-list-section__teams-list-pagination page-pagination">',this.currentPage>1?t+=`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${e}#arrow-left"></use>
    </svg>
  </button>`:t+=`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${e}#arrow-left"></use>
    </svg>
  </button>`,t+=a,this.currentPage<this.pageCount?t+=`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${e}#arrow-right"></use>
    </svg>
  </button>`:t+=`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${e}#arrow-right"></use>
    </svg>
  </button>`,t+="</div>"),t}}export{r as P};
