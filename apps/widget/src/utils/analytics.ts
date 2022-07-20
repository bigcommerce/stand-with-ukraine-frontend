import { getBaseURL } from './baseUrl';

const WIDGET_EVENTS = {
  OPENED: 'widget_opened',
  CLOSED: 'widget_closed',
  COLLAPSED: 'widget_collapsed',
  MODAL_OPENED: 'modal_opened',
  MODAL_CLOSED: 'modal_closed',
};

const CHARITY_EVENTS = {
  SEE_MORE: 'see_more',
  CLICK: 'support_click',
};

class Analytics {
  private url = getBaseURL().replace('/widget', '/api/v2');

  private track(type: 'charity-event' | 'widget-event', data: Record<string, string>) {
    // ToDo: Add real store_hash
    const params = new URLSearchParams({ ...data, store_hash: '' });
    const url = `${this.url}${type}?${params.toString()}`;

    try {
      void fetch(url, { method: 'POST' });
    } catch (err) {
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
    this.track('charity-event', { event: CHARITY_EVENTS.SEE_MORE, id: charityId });
  }

  charityClick(charityId: string) {
    this.track('charity-event', { event: CHARITY_EVENTS.CLICK, id: charityId });
  }
}

export const analytics = new Analytics();
