import { getRequest } from '../functions/request';
import { getCookie } from '../functions/cookie';
import { CreatorLobby, GetMyInfo } from '../../../queries.graphql.d';
import type { CreatorDataForLobby } from '../types';
import DefaultAvatar from './../../images/chat/default-avatar.png';

class Creator {
  transformedCreatorData: CreatorDataForLobby = {
    userId: null,
    username: null,
    playerId: null,
    avatarUrl: null,
    avatarAltText: null,
    csGoRank: null,
    dota2Rank: null,
  };

  private async getCreatorData() {
    try {
      const token: string | null | undefined = getCookie('token');
      if (token) {
        const userInfo: { me: { id: string; username: string } } =
          (await getRequest(GetMyInfo, {}, token)) as {
            me: { id: string; username: string };
          };
        const userInfo2: any = await getRequest(
          CreatorLobby,
          { id: userInfo.me.id },
          token
        );
        return userInfo2;
      } else {
        console.error('Token is null or undefined');
      }
    } catch (error) {
      console.error('Error in init:', error);
    }
  }

  async transformCreatorData() {
    const creatorData = await this.getCreatorData();

    this.transformedCreatorData = {
      userId: creatorData.usersPermissionsUser.data.id || null,
      username:
        creatorData.usersPermissionsUser.data.attributes.username || null,
      playerId:
        creatorData.usersPermissionsUser.data.attributes.player?.data?.id ||
        null,
      avatarUrl:
        creatorData.usersPermissionsUser.data.attributes.avatar?.data
          ?.attributes?.url || DefaultAvatar,
      avatarAltText:
        creatorData.usersPermissionsUser.data.attributes.avatar?.data
          ?.attributes?.alternativeText || 'Default avater',
      csGoRank:
        creatorData.usersPermissionsUser.data.attributes.player?.data
          ?.attributes.CSGO?.Default_information?.rank || null,
      dota2Rank:
        creatorData.usersPermissionsUser.data.attributes.player?.data
          ?.attributes.DOTA2?.Default_information?.rank || null,
    };
    console.log('Creator data received');

    return this.transformedCreatorData;
  }
}

export { Creator };
