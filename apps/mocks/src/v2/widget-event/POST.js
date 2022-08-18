/* eslint-disable camelcase */
const valid_events = [
  'widget-opened',
  'widget-collapsed',
  'widget-closed',
  'modal-opened',
  'modal-closed',
];
const valid_store = ['test-store'];

module.exports = (req, res) => {
  if (
    req.query &&
    valid_events.includes(req.query.event) &&
    valid_store.includes(req.query.store_hash)
  ) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
};
/* eslint-enable camelcase */
