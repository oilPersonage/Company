const nextRoutes = require('next-routes')
module.exports = nextRoutes()
  .add('portal', '/:lang?/portal')
  .add('sueo', '/:lang?/sueo')
  .add('index', '/:lang?')

