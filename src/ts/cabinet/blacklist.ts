interface IBlacklistData {
  avatar: string;
  name: string;
  description: string;
  rang: string;
}

export class Blacklist {
  private content: string;
  private  blacklist: IBlacklistData[];

  constructor(content: string, blacklist: IBlacklistData[]) {
    this.content = content;
    this. blacklist =  blacklist;
    this.renderBlacklist();
  }

  renderBlacklist(): void {
    const  blacklistHtml = this.blacklist
      .map(
        (list) => `
        
      <div class="blacklist__row">
      <div class="blacklist__row-avatar">
      <img src="${list.avatar}" alt="${list.name}">
      </div>
      <div class="blacklist__row-column">
         <p class="blacklist__row-name">${list.name}</p>
         <p class="blacklist__row-info">${list.description}</p>
      </div>
      <div class="blacklist__row-rang">
      <img src="${list.rang}" alt="${list.name}">
      </div>
      <div class="blacklist__row-more">
         <svg>
            <use xlink:href="src/images/sprite.svg#more"></use>
         </svg>
      </div>
   </div>
   <hr class="blacklist__line">
      `
      )
      .join("");

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML =  blacklistHtml;
    }
  }
}
