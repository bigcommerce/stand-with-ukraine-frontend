/* eslint-disable camelcase */

module.exports = (req, res) => {
  if (
    req.query &&
    req.query.name &&
    req.query.email &&
    req.query.message
  ) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
};
/* eslint-enable camelcase */
