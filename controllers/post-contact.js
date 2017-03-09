'use strict'

const pubsub = require('@google-cloud/pubsub')();
const topic = pubsub.topic('contact-request')

module.exports = function (req, reply) {
  const payload = req.payload
  console.log(payload)
  topic.publish({
    data: JSON.stringify(req.payload)
  }, function (err) {
    if (err) {
      console.error(err)
      reply(err)
    } else {
      reply('OK')
    }
  })
}
