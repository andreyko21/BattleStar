import $ from "jquery";
import Sprite from "./../../../../images/sprite.svg";

export class FriendItem {
    private container: JQuery<HTMLElement>;

    constructor(containerId: string, friendName: string, friendStatus: string, friendAvatar: string, friendId: string, friendOnlineStatus: boolean) {
        this.container = $(containerId);

        if (this.container.length === 0) {
            throw new Error(`Container with ID ${containerId} not found.`);
        }

        this.render(friendName, friendStatus, friendAvatar, friendId, friendOnlineStatus);
    }

    private render(friendName: string, friendStatus: string, friendAvatar: string, friendId: string, friendOnlineStatus: boolean): void {
    const onlineStatusClass = friendOnlineStatus ? 'online' : 'offline';

    const friendItem = $('<div>', { class: 'friends-page__sidebar-friend', 'data-friend-id': friendId })
        .append($('<div>', { class: 'friends-page__sidebar-friend-avatar' })
            .append($('<img>', { src: friendAvatar, alt: friendName })))
        .append($('<p>', { class: 'friends-page__sidebar-friend-name', text: friendName }))
        .append($('<p>', { class: `friends-page__sidebar-friend-status ${onlineStatusClass}`, text: friendStatus }))
        .append($('<button>', { class: 'friends-page__sidebar-friend-setting-button' })
            .append($('<svg>', { class: 'friends-page__sidebar-setting-icon' })
                .append(`<use xlink:href="${Sprite}#more"></use>`)));


    const menu = $('<div>', { class: 'friends-page__sidebar-friend-menu' })
        .append($('<ul>')
            
        ).hide();

  
    friendItem.append(menu);

  
    friendItem.find('.friends-page__sidebar-friend-setting-button').on('click', function(event) {
        menu.toggle();
        event.stopPropagation();
    });


    this.container.append(friendItem);

  
    $(document).on('click', (event) => {
        if (!$(event.target).closest('.friends-page__sidebar-friend-setting-button, .friends-page__sidebar-friend-menu').length) {
            menu.hide();
        }
    });
}
}