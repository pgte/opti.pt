'use strict'

const DEFAULT_CONTACTS = {
  phone: '910 353 088',
  address: [
    'Rua da Conceição, 90',
    '9050-026 Funchal'
  ],
  email: 'info@opti.pt'
}

const AFFILIATES = {
  default: DEFAULT_CONTACTS,
  madeira: Object.assign({}, DEFAULT_CONTACTS, {
    phone: '969 730 910',
    email: 'madeira@opti.pt'
  })
}

module.exports = function (req, reply) {
  console.log(reply.state('affiliate'))
  const affiliate = reply.state('affiliate') || 'default'
  reply(AFFILIATES[affiliate])
}
