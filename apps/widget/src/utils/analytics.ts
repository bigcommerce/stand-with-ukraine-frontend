import { STORE_HASH } from '../constants';

import { getBaseURL } from './baseUrl';

const WIDGET_EVENTS = {
  OPENED: 'widget-opened',
  CLOSED: 'widget-closed',
  COLLAPSED: 'widget-collapsed',
  MODAL_OPENED: 'modal-opened',
  MODAL_CLOSED: 'modal-closed',
};

const CHARITY_EVENTS = {
  SEE_MORE: 'see-more-clicked',
  CLICK: 'support-clicked',
};

class Analytics {
  private url = getBaseURL().replace('/widget', '/api/v2');

  private track(type: 'charity-event' | 'widget-event', data: Record<string, string>) {
    const params = new URLSearchParams({
      ...data,
      store_hash: STORE_HASH,
    });
    const url = `${this.url}${type}?${params.toString()}`;

    try {
      void fetch(url, { method: 'POST', mode: 'cors' });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('SWU ANALYTICS ERROR:', err);
    }
  }

  widgetOpened() {
    this.track('widget-event', { event: WIDGET_EVENTS.OPENED });
  }

  widgetClosed() {
    this.track('widget-event', { event: WIDGET_EVENTS.CLOSED });
  }

  widgetCollapsed() {
    this.track('widget-event', { event: WIDGET_EVENTS.COLLAPSED });
  }

  modalOpened() {
    this.track('widget-event', { event: WIDGET_EVENTS.MODAL_OPENED });
  }

  modalClosed() {
    this.track('widget-event', { event: WIDGET_EVENTS.MODAL_CLOSED });
  }

  charitySeeMore(charityId: string) {
    this.track('charity-event', { event: CHARITY_EVENTS.SEE_MORE, charity: charityId });
  }

  charityClick(charityId: string) {
    this.track('charity-event', { event: CHARITY_EVENTS.CLICK, charity: charityId });
  }
}

export const analytics = new Analytics();
