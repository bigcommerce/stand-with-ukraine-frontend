import { STORE_HASH, WIDGET_STATUS } from '../constants';

import { getBaseURL } from './baseUrl';

enum WIDGET_EVENTS {
  OPENED = 'widget-opened',
  CLOSED = 'widget-closed',
  COLLAPSED = 'widget-collapsed',
  MODAL_OPENED = 'modal-opened',
  MODAL_CLOSED = 'modal-closed',
}

enum CHARITY_EVENTS {
  SEE_MORE = 'see-more-clicked',
  CLICK = 'support-clicked',
}

class Analytics {
  private url = getBaseURL().replace('/widget', '/api/v2');

  private track(type: 'charity-event' | 'widget-event', data: Record<string, string>) {
    if (!STORE_HASH) {
      return;
    }

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

  trackWidgetStatus(widgetStatus: WIDGET_STATUS) {
    let event: WIDGET_EVENTS;

    switch (widgetStatus) {
      case WIDGET_STATUS.COLLAPSED:
        event = WIDGET_EVENTS.COLLAPSED;
        break;

      case WIDGET_STATUS.DISABLED:
        event = WIDGET_EVENTS.CLOSED;
        break;

      case WIDGET_STATUS.ENABLED:
        event = WIDGET_EVENTS.OPENED;
        break;
    }

    if (event) {
      this.track('widget-event', { event });
    }
  }

  trackModalStatus(isOpen: boolean) {
    this.track('widget-event', {
      event: isOpen ? WIDGET_EVENTS.MODAL_OPENED : WIDGET_EVENTS.MODAL_CLOSED,
    });
  }

  charitySeeMore(charityId: string) {
    this.track('charity-event', { event: CHARITY_EVENTS.SEE_MORE, charity: charityId });
  }

  charityClick(charityId: string) {
    this.track('charity-event', { event: CHARITY_EVENTS.CLICK, charity: charityId });
  }
}

export const analytics = new Analytics();
