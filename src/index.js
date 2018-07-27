import _ from 'lodash';
import amqp from 'amqp-connection-manager';

import { format } from './url-parser';

async function lift() {
  let amqpConfig = _.get(framework, 'config.connections.amqplib');
  let url = format(amqpConfig);
  framework.amqplibConnection = await amqp.connect(url);
  return framework.amqplibConnection;
}

async function lower() {
  try {
    if (framework.amqplibConnection) {
      await framework.amqplibConnection.close();
    }
  }
  catch (e) {
    framework.log.warn(e);
  }
}

export { lift, lower };
export default { lift, lower };
