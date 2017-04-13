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
  let affiliate = req.state && req.state.affiliate || 'default'
  if (Array.isArray(affiliate)) {
    affiliate = affiliate[0]
  }
  console.log('affiliate:', affiliate)
  reply(AFFILIATES[affiliate])
}
