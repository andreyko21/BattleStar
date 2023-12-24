import $ from "jquery";
import { FriendItem } from "./friend";

type Friend = {
  name: string;
  status: string;
  avatar: string;
  id: string;
  online: boolean;
};

export class Sidebar {
  private container: JQuery<HTMLElement>;
  private friends: Friend[];

  constructor(containerId: string, friends: Friend[]) {
    this.container = $(containerId);

    if (this.container.length === 0) {
      throw new Error(`Container with ID ${containerId} not found.`);
    }

    this.friends = friends;
    this.render();
  }

  public render(): void {
    const sidebarHtml = this.createSidebarHtml();
    this.container.append(sidebarHtml);

    const friendsListContainerId = `friends-list-${Date.now()}`;
    // const friendsListContainer = $(`#${friendsListContainerId}`);

    this.friends.forEach((friend) => {
      new FriendItem(
        `#${friendsListContainerId}`,
        friend.name,
        friend.status,
        friend.avatar,
        friend.id,
        friend.online
      );
    });
  }

  private createSidebarHtml(): string {
    const friendsListContainerId = `friends-list-${Date.now()}`;

    return `
            <div class="friends-page__sidebar">
                <!-- ... other sidebar content ... -->
                <div id="${friendsListContainerId}" class="friends-page__sidebar-friends-list">
                </div>
            </div>`;
  }
}
