const nextRoutes = require('next-routes')
module.exports = nextRoutes()
  .add('portal', '/:lang?/portal')
  .add('portal2', '/:lang?/portal2')
  .add('gendarme', '/:lang?/gendarme')
  .add('sail', '/:lang?/sail')
  .add('totem', '/:lang?/totem')
  .add('team', '/:lang?/team')
  .add('monolit', '/:lang?/monolit')
  .add('sueo', '/:lang?/sueo/:id?')
  .add('alpha-vd', '/:lang?/alpha-vd')
  .add('alpha-mat', '/:lang?/alpha-mat')
  .add('index', '/:lang?')

