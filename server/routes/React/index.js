/*
REACT ROUTES
NOTE: These are only the custom ones.
Others are made automatically based on filename when using handle()
e.g. pages/dashboard.js -> /dashboard
*/
module.exports = (server, config, engine) => {
  const { render } = engine
  const handle = engine.getRequestHandler()
  /*
  Custom routes:
  https://github.com/zeit/next.js/blob/canary/examples/custom-server-express/server.js#L20
  */
  server.get('/catalog/page/:id', (req, res) => render(req, res, '/catalog/page', { id: req.params.id }))
  server.get('/company/profile/:id', (req, res) => render(req, res, '/company/profile', { id: req.params.id }))
  server.get('/review/id/:id', (req, res) => render(req, res, '/review/id', { id: req.params.id }))
  /*
  Next.JS SSR handler
  https://github.com/mluberry/nextjs-express
  */
  server.get('*', (req, res) => handle(req, res))
}
