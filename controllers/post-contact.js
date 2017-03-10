'use strict'

const pubsub = require('@google-cloud/pubsub')({
  projectId: 'modified-fabric-160310'
});
const topic = pubsub.topic('contact-request')

module.exports = function (req, reply) {
  const message = Object.assign({
    affiliate: req.state && req.state.affiliate
  }, req.payload)
  topic.publish(JSON.stringify(message), function (err) {
    if (err) {
      console.error(err)
      reply(err)
    } else {
      reply('OK')
    }
  })
}
