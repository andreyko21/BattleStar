import {
  GetCsStreamingData,
  GetCsStreamingDataQuery,
} from '../../../queries.graphql.d';
import Sprite from './../../images/sprite.svg';
import { getLocateParam } from '../functions/windowLocation';
import { request } from 'graphql-request';

class RenderingCsDataForStream {
  private readonly infoBlock: HTMLElement | null;
  private readonly chatViewers: HTMLElement | null;
  private readonly videoIframe: HTMLIFrameElement | null;

  constructor() {
    this.infoBlock = document.querySelector('#info-block');
    this.chatViewers = document.querySelector('#chat-viewers');
    this.videoIframe = document.querySelector(
      'iframe[title="YouTube video player"]'
    );

    this.renderData();
  }

  private async renderData() {
    const streamingData = await this.transformData();
    this.renderInfoData(streamingData);
    this.addDataForChatViewers(streamingData.viewers as string);
    this.addSrcForVideo(streamingData.videoUrl as string);
  }

  private addSrcForVideo(videoUrl: string) {
    if (this.videoIframe !== null) {
      this.videoIframe.src = videoUrl;
    }
  }

  private getParamsQuery(): string | null {
    return getLocateParam('id');
  }

  private async getData(): Promise<GetCsStreamingDataQuery | undefined> {
    const ENDPOINT = 'https://battle-star-app.onrender.com/graphql';
    const params = this.getParamsQuery();
    try {
      const csBrodcastingsData = await request(
        ENDPOINT,
        GetCsStreamingData,
        { id: params },
        {
          Authorization:
            'Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912',
        }
      );
      return csBrodcastingsData;
    } catch (error) {
      console.error(error);
    }
  }

  private async transformData(): Promise<{
    [key: string]: string | undefined;
  }> {
    const streamingData = await this.getData();
    const abbrStreamingData = streamingData?.cs2Brodcasting?.data?.attributes;
    const streamingDataTransforming: {
      [key: string]: string | undefined;
    } = {
      title: abbrStreamingData?.title,
      country:
        abbrStreamingData?.creator?.data?.attributes?.Options?.selected_country
          ?.data?.attributes?.name,
      urlFlag:
        abbrStreamingData?.creator?.data?.attributes?.Options?.selected_country
          ?.data?.attributes?.flag.data?.attributes?.url,
      altTextFlag: abbrStreamingData?.creator?.data?.attributes?.Options
        ?.selected_country?.data?.attributes?.flag.data?.attributes
        ?.alternativeText as string,
      map: abbrStreamingData?.map?.data?.attributes?.name,
      rate: abbrStreamingData?.rate.toString() as string,
      participants:
        abbrStreamingData?.participants.players?.data.length.toString(),
      gameMode: abbrStreamingData?.cs_game_mode?.data?.attributes?.title,
      viewers: abbrStreamingData?.viewers.toString(),
      videoUrl: abbrStreamingData?.videoUrl,
    };
    return streamingDataTransforming;
  }

  private renderInfoData(streamingData: { [key: string]: string | undefined }) {
    const template = `
      <div class="stream-page__name-block">
        <img
          src="${streamingData.urlFlag}"
          alt="flag of ${streamingData.altTextFlag}"
          class="stream-page__flag"
        />
        <div class="stream-page__name">
        ${streamingData.title}
          <svg>
import Sprite from './../../images/sprite.svg';
            <use xlink:href="${Sprite}#share"></use>
          </svg>
        </div>
      </div>
      <div class="stream-page__info stream-page__info_type_map">
        <div class="stream-page__data-title"> Карта </div>
        <div class="stream-page__data-value"> ${streamingData.map} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_rate">
        <div class="stream-page__data-title"> Ставка </div>
        <div class="stream-page__data-value"> ${streamingData.rate} $ </div>
      </div>
      <div class="stream-page__info stream-page__info_type_mode">
        <div class="stream-page__data-title"> Режим </div>
        <div class="stream-page__data-value"> ${streamingData.gameMode} </div>
      </div>
      <div class="stream-page__info stream-page__info_type_participants">
        <div class="stream-page__data-title"> Учасников </div>
        <div class="stream-page__data-value"> ${streamingData.participants}x${
          streamingData.gameMode
        } </div>
      </div>
      <div class="stream-page__info stream-page__info_type_id">
        <div class="stream-page__data-title"> ID </div>
        <div class="stream-page__data-value">
        ${this.getParamsQuery()}
          <svg>
            <use xlink:href="${Sprite}#copy"></use>
          </svg>
        </div>
      </div>`;
    if (this.infoBlock !== null) {
      this.infoBlock.innerHTML = template;
    }
  }

  private addDataForChatViewers(viewers: string) {
    if (this.chatViewers !== null) {
      this.chatViewers.innerHTML = `${viewers} учасников`;
    }
  }
}

export { RenderingCsDataForStream };
