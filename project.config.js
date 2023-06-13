// Node.js Configurations:

exports.node_env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
exports.dirname = __dirname
// exports.platform = 'https://test.dovepay.com'
exports.platform = 'https://www.dovepay.com'
exports.CORP = false
// exports.CORP = { policy: "cross-origin" }
// exports.CORP = { policy: "same-site" }
// exports.CORP = { policy: "same-origin" }