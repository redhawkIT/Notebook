/*
DB Config
TODO: Production DB config
*/
module.exports = (process.env.NODE_ENV === 'production')
  ? require('./development')
  : require('./development')
