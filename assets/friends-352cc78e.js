import"./modulepreload-polyfill-3cfb730f.js";import{$ as i}from"./jquery-995cfbaf.js";import{B as r,L as o}from"./lava-lamp-91bf70b1.js";import{A as l,H as _}from"./sidebar-f3222882.js";import{S as e}from"./sprite-3002caef.js";import{T as m}from"./tabs-create-b6236109.js";import"./windowLocation-a7eb2864.js";import"./dropDownMenu-8d97c7ef.js";import"./queries.graphql.d-f9acd4bb.js";class h{container;users;constructor(s,t){this.container=i(s),this.users=t,this.render()}render(){this.container.append(this.createChatSectionHtml()),this.renderUsers()}createChatSectionHtml(){return`
      <section class="page__chat-section chat-section">
        <div class="chat-section__sidebar chat-section-sidebar">
          <div class="chat-section-sidebar__search-block">
            <label class="input__search">
  <button class="input__search-button">
    <svg class="input__search-icon">
      <use xlink:href="src/images/sprite.svg#search"></use>
    </svg>
  </button>
  <input
    class="input__search-input"
    type="text"
    placeholder="Поиск по друзьям"
  />
</label>
          </div>
          <div id="list-users" class="chat-section-sidebar__list-users list-users">
        
          </div>
        </div>
        <div class="chat-section__chat">
          <div class="chat__messages-container">
                <div class="chat__message">
                  <div class="chat__message-user-avatar">
                    <img src="./src/images/chat/companion-avatar.png" alt="" />
                  </div>
                  <div class="chat__message-block">
                    <p class="chat__message-block-user-name">JohnTrawolta_4</p>
                    <p class="chat__message-block-user-message">Good game!</p>
                    <div class="chat__message-block-user-image">
                      <img src="./src/images/chat/message-image.png" alt="" />
                    </div>
                  </div>
                  <p class="chat__message-time">12:34</p>
                </div>
                <div class="chat__message chat__message_my">
                  <div class="chat__message-user-avatar">
                    <img src="./src/images/chat/companion-avatar.png" alt="" />
                  </div>
                  <div class="chat__message-block">
                    <p class="chat__message-block-user-name">JohnTrawolta_4</p>
                    <p class="chat__message-block-user-message">Good game!</p>
                    <div class="chat__message-block-user-image">
                      <img src="./src/images/chat/message-image.png" alt="" />
                    </div>
                  </div>
                  <p class="chat__message-time">12:34</p>
                </div>
                <div class="chat__message chat__message_my">
                  <div class="chat__message-user-avatar">
                    <img src="./src/images/chat/companion-avatar.png" alt="" />
                  </div>
                  <div class="chat__message-block">
                    <p class="chat__message-block-user-name">JohnTrawolta_4</p>
                    <p class="chat__message-block-user-message">Good game!</p>
                    <div class="chat__message-block-user-image">
                      <img src="./src/images/chat/message-image.png" alt="" />
                    </div>
                  </div>
                  <p class="chat__message-time">12:34</p>
                </div>
              </div>
              <label class="chat__message-input-block">
                <input
                  class="chat__message-input"
                  type="text"
                  placeholder="Введите текст сообщения..."
                />
                <button class="chat__message-submit-button">
                  <svg class="header__notification-button-icon">
                    <use xlink:href="${e}#arrow-top"></use>
                  </svg>
                </button>
              </label>
        </div>
      </section>`}renderUsers(){const s=this.users.map(t=>this.createUserHtml(t)).join("");this.container.find("#list-users").html(s),this.attachMenuEventHandlers()}attachMenuEventHandlers(){this.container.find(".user").each((s,t)=>{const a=i(t);a.find(".user__setting-button").on("click",function(){a.find(".user-menu").toggle()}),a.on("mouseleave",function(){a.find(".user-menu").hide()})})}createUserHtml(s){return`
    <div class="user">
      <div class="user__avatar">
        <div class="user__online-status ${s.online?"user__online-status_online":""}"></div>
        <img src="${s.avatar}" alt="${s.name}" />
      </div>
      <p class="user__name">${s.name}</p>
      <p class="user__status">${s.status}</p>
      <button class="user__setting-button">
        <svg class="friends-page__sidebar-setting-icon">
          <use xlink:href="${e}#more"></use>
        </svg>
      </button>
      <div class="user-menu" style="display: none;">
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#account"></use>
                    </svg>
        Открыть профиль</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#share"></use>
                    </svg>
        Поделиться профилем</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#trash"></use>
                    </svg>
        Удалить из друзей</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#flag"></use>
                    </svg>
        Пожаловаться</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#blacklist"></use>
                    </svg>
        Заблокировать</button>
      </div>
    </div>`}}class g{container;users;constructor(s,t){this.container=i(s),this.users=t,this.render()}render(){this.container.append(this.createChatSectionHtml()),this.renderUsers()}createChatSectionHtml(){return`
      <section class="page__chat-section chat-section">
        <div class="chat-section__sidebar chat-section-sidebar">
          <div class="chat-section-sidebar__search-block">
            <label class="input__search">
  <button class="input__search-button">
    <svg class="input__search-icon">
      <use xlink:href="src/images/sprite.svg#search"></use>
    </svg>
  </button>
  <input
    class="input__search-input"
    type="text"
    placeholder="Поиск по друзьям"
  />
</label>
          </div>
          <div id="list-users" class="chat-section-sidebar__list-users list-users">
        
          </div>
        </div>
        <div class="chat-section__chat">
          <div class="chat__messages-container">
                <div class="chat__message">
                  <div class="chat__message-user-avatar">
                    <img src="./src/images/chat/companion-avatar.png" alt="" />
                  </div>
                  <div class="chat__message-block">
                    <p class="chat__message-block-user-name">JohnTrawolta_4</p>
                    <p class="chat__message-block-user-message">Good game!</p>
                    <div class="chat__message-block-user-image">
                      <img src="./src/images/chat/message-image.png" alt="" />
                    </div>
                  </div>
                  <p class="chat__message-time">12:34</p>
                </div>
                <div class="chat__message chat__message_my">
                  <div class="chat__message-user-avatar">
                    <img src="./src/images/chat/companion-avatar.png" alt="" />
                  </div>
                  <div class="chat__message-block">
                    <p class="chat__message-block-user-name">JohnTrawolta_4</p>
                    <p class="chat__message-block-user-message">Good game!</p>
                    <div class="chat__message-block-user-image">
                      <img src="./src/images/chat/message-image.png" alt="" />
                    </div>
                  </div>
                  <p class="chat__message-time">12:34</p>
                </div>
                <div class="chat__message chat__message_my">
                  <div class="chat__message-user-avatar">
                    <img src="./src/images/chat/companion-avatar.png" alt="" />
                  </div>
                  <div class="chat__message-block">
                    <p class="chat__message-block-user-name">JohnTrawolta_4</p>
                    <p class="chat__message-block-user-message">Good game!</p>
                    <div class="chat__message-block-user-image">
                      <img src="./src/images/chat/message-image.png" alt="" />
                    </div>
                  </div>
                  <p class="chat__message-time">12:34</p>
                </div>
              </div>
              <label class="chat__message-input-block">
                <input
                  class="chat__message-input"
                  type="text"
                  placeholder="Введите текст сообщения..."
                />
                <button class="chat__message-submit-button">
                  <svg class="header__notification-button-icon">
                    <use xlink:href="${e}#arrow-top"></use>
                  </svg>
                </button>
              </label>
        </div>
      </section>`}renderUsers(){const s=this.users.map(t=>this.createUserHtml(t)).join("");this.container.find("#list-users").html(s),this.attachMenuEventHandlers()}attachMenuEventHandlers(){this.container.find(".user").each((s,t)=>{const a=i(t);a.find(".user__setting-button").on("click",function(){a.find(".user-menu").toggle()}),a.on("mouseleave",function(){a.find(".user-menu").hide()})})}createUserHtml(s){return`
    <div class="user">
      <div class="user__avatar">
        <div class="user__online-status ${s.online?"user__online-status_online":""}"></div>
        <img src="${s.avatar}" alt="${s.name}" />
      </div>
      <p class="user__name">${s.name}</p>
      <p class="user__status">${s.status}</p>
      <button class="user__setting-button">
        <svg class="friends-page__sidebar-setting-icon">
          <use xlink:href="${e}#more"></use>
        </svg>
      </button>
      <div class="user-menu" style="display: none;">
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#account"></use>
                    </svg>
        Открыть профиль</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#share"></use>
                    </svg>
        Поделиться профилем</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#trash"></use>
                    </svg>
        Удалить из друзей</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#flag"></use>
                    </svg>
        Пожаловаться</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#blacklist"></use>
                    </svg>
        Заблокировать</button>
      </div>
    </div>`}}const u="data:image/png;base64,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";class d{container;users;constructor(s,t){this.container=i(s),this.users=t,this.render()}render(){this.container.append(this.createChatSectionHtml()),this.renderUsers()}createChatSectionHtml(){return`
      <section class="page__chat-section chat-section">
        <div class="chat-section__sidebar chat-section-sidebar chat-section-sidebar_request">
          <div class="chat-section-sidebar__search-block">
            <label class="input__search">
  <button class="input__search-button">
    <svg class="input__search-icon">
      <use xlink:href="src/images/sprite.svg#search"></use>
    </svg>
  </button>
  <input
    class="input__search-input"
    type="text"
    placeholder="Поиск по никнейму"
  />
</label>
          </div>
          <div id="list-users" class="chat-section-sidebar__list-users list-users">
        
          </div>
        </div>
        <div class="chat-section__chat chat_request">
          <div class="chat__messages-container">
            <div class="chat__messages-empty-container">
                <div class="chat__messages-empty-container-line">
                </div>
                <p class="chat__messages-empty-container-text-info">
                    У вас еще нет сообщений с Sergio Richt
                </p>
            </div>
              </div>
              <label class="chat__message-input-block chat__message-input-block_request">
                <input
                  class="chat__message-input"
                  type="text"
                  placeholder="Введите текст сообщения..."
                />
                <button class="chat__message-submit-button">
                  <svg class="chat__message-submit-button-icon">
                    <use xlink:href="${e}#arrow-top"></use>
                  </svg>
                </button>
              </label>
        </div>
      </section>`}renderUsers(){const s=this.users.map(t=>this.createUserHtml(t)).join("");this.container.find("#list-users").html(s),this.attachMenuEventHandlers()}attachMenuEventHandlers(){this.container.find(".user").each((s,t)=>{const a=i(t);a.find(".user__setting-button").on("click",function(){a.find(".user-menu").toggle()}),a.on("mouseleave",function(){a.find(".user-menu").hide()})})}createUserHtml(s){return`
    <div class="user user_request">
      <div class="user__avatar">
        <div class="user__online-status ${s.online?"user__online-status_online":""}"></div>
        <img src="${s.avatar}" alt="${s.name}" />
      </div>
      <p class="user__name">${s.name}</p>
      <p class="user__status">${s.status}</p>
      <div class="user__rank">
        <img class="user__rank-img" src="${u}" alt="Rank" />
      </div>
      <button class="user__submit-button user__submit-button_check">
        <svg class="user__submit-button-icon">
          <use xlink:href="${e}#check-mark"></use>
        </svg>
      </button>
      <button class="user__setting-button">
        <svg class="user__setting-button-icon">
          <use xlink:href="${e}#more"></use>
        </svg>
      </button>
      <div class="user-menu" style="display: none;">
      <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_succes">
                      <use xlink:href="${e}#addUser"></use>
                    </svg>
        Принять  в друзья</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#deleteUser"></use>
                    </svg>
        Отклонить</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#account"></use>
                    </svg>
        Открыть профиль</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#share"></use>
                    </svg>
        Поделиться профилем</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#flag"></use>
                    </svg>
        Пожаловаться</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#blacklist"></use>
                    </svg>
        Заблокировать</button>
      </div>
    </div>`}}class b{container;users;constructor(s,t){this.container=i(s),this.users=t,this.render()}render(){this.container.append(this.createChatSectionHtml()),this.renderUsers()}createChatSectionHtml(){return`<section class="page__search-section search-section">
              <div class="search-section__container">
                <div class="search-section__search-block">
                  <label class="input__search">
                    <button class="input__search-button">
                      <svg class="input__search-icon">
                        <use xlink:href="src/images/sprite.svg#search"></use>
                      </svg>
                    </button>
                    <input
                      class="input__search-input"
                      type="text"
                      placeholder="Поиск по никнейму"
                    />
                  </label>
                </div>
                <div class="search-section__list-users list-users" id="list-users"></div>
              </div>
            </section>`}renderUsers(){const s=this.users.map(t=>this.createUserHtml(t)).join("");this.container.find("#list-users").html(s),this.attachMenuEventHandlers()}attachMenuEventHandlers(){this.container.find(".user").each((s,t)=>{const a=i(t);a.find(".user__setting-button").on("click",function(){a.find(".user-menu").toggle()}),a.on("mouseleave",function(){a.find(".user-menu").hide()})})}createUserHtml(s){return`
    <div class="user user_request">
      <div class="user__avatar">
        <div class="user__online-status ${s.online?"user__online-status_online":""}"></div>
        <img src="${s.avatar}" alt="${s.name}" />
      </div>
      <p class="user__name">${s.name}</p>
      <p class="user__status">${s.status}</p>
      <div class="user__rank">
        <img class="user__rank-img" src="${u}" alt="Rank" />
      </div>
      <button class="user__submit-button user__submit-button_user">
        <svg class="user__submit-button-icon">
          <use xlink:href="${e}#addUser"></use>
        </svg>
      </button>
      <button class="user__setting-button">
        <svg class="user__setting-button-icon">
          <use xlink:href="${e}#more"></use>
        </svg>
      </button>
      <div class="user-menu" style="display: none;">
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#account"></use>
                    </svg>
        Открыть профиль</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_succes">
                      <use xlink:href="${e}#addUser"></use>
                    </svg>
        Принять  в друзья</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon">
                      <use xlink:href="${e}#share"></use>
                    </svg>
        Поделиться профилем</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#flag"></use>
                    </svg>
        Пожаловаться</button>
        <button class="user-menu__button">
        <svg class="user-menu__button-icon user-menu__button-icon_warn">
                      <use xlink:href="${e}#blacklist"></use>
                    </svg>
        Заблокировать</button>
      </div>
    </div>`}}const n="/assets/user-sidebar-9c14671c.svg";class v{constructor(){new _(".wrapper"),new m("tabs-block","users-page__filters",[["onlineUsers","ОНЛАЙН"],["allUsers","ВСЕ"],["request","ЗАЯВКИ"],["search","ПОИСК"]]),new r("users-page__filters"),new o("users-page__filters"),i("#onlineUsers-content").addClass("tabs-block__content-container_active"),new h("#onlineUsers-content",[{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0}]),new g("#allUsers-content",[{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0}]),new d("#request-content",[{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0}]),new b("#search-content",[{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0},{name:"SergioRicht",status:"Играет в CS:GO",avatar:n,online:!0}])}}new v;new l("wrapper","ДРУЗЬЯ");
