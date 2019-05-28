const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const app = new Koa();
const router = new Router();
const serve = require('koa-static');
const mount = require('koa-mount');

const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

app.use(mount('/dist', serve(path.join(__dirname, '../dist'))));

app.use(async (ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = await readFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000);

// // Create a new User
// router.post('/api/User', (ctx, next) => {
//   users.create();
// });
//
// // Retrieve all User
// router.get('/api/Users', (ctx, next) => {
//   users.findAll();
// });
//
// // Retrieve a single User by Id
// router.get('/api/User/:UserId', (ctx, next) => {
//   users.findById();
// });
//
// // Update a User with Id
// router.put('/api/User/:UserId', (ctx, next) => {
//   users.update();
// });
//
// // Delete a User with Id
// router.delete('/api/User/:UserId', (ctx, next) => {
//   users.delete();
// });
//
// app
//   .use(router.routes())
//   .use(router.allowedMethods());


