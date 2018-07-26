import _ from 'lodash';
import amqplib from 'amqplib';

async function lift() {
  let amqpConfig = _.get(framework, 'config.connections.amqplib');

  let connection;
  await amqplib.connect(amqpConfig).then(conn => {
    connection = conn;
  });
  return connection;
}

export default lift;
//# sourceMappingURL=bundle.esm.js.map
