const fs = require('fs');

module.exports = (req, res) => {
  const status = {
    published: true,
  };

  fs.writeFileSync(`${__dirname}/GET.json`, JSON.stringify(status, null, 2));

  res.status(200).json(status);
};
