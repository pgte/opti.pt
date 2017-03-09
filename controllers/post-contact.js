'use strict'

const pubsub = require('@google-cloud/pubsub')({
  projectId: 'modified-fabric-160310'
});
const topic = pubsub.topic('contact-request')

module.exports = function (req, reply) {
  topic.publish(req.payload, function (err) {
    if (err) {
      console.error(err)
      reply(err)
    } else {
      reply('OK')
    }
  })
}
