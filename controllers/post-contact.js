'use strict'

const pubsub = require('@google-cloud/pubsub')({
  projectId: 'modified-fabric-160310'
});
const topic = pubsub.topic('contact-request')

module.exports = function (req, reply) {
  let affiliate = req.state && req.state.affiliate
  if (Array.isArray(affiliate)) {
    affiliate = affiliate[0]
  }
  const message = Object.assign({
    affiliate: affiliate
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
