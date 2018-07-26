import _ from 'lodash';
import amqplib from 'amqplib';

export default async function lift() {
  let amqpConfig = _.get(framework, 'config.connections.amqplib');

  framework.amqplibConnection = await amqplib.connect(amqpConfig);
  return framework.amqplibConnection;
}
