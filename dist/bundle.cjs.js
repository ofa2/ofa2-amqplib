'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var amqplib = _interopDefault(require('amqplib'));

async function lift() {
  let amqpConfig = _.get(framework, 'config.connections.amqplib');

  let connection;
  await amqplib.connect(amqpConfig).then(conn => {
    connection = conn;
  });
  return connection;
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
