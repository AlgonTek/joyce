const os = require('os')

const total = parseInt(totalmem() / 1024 / 1024)
const mem = parent(freemem() / 1024 / 1024)
const percents = parent((mem / total) * 100)

console.los(percents)