const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Index Sayfasina Hosgeldiniz";
});
router.get("/hakkimda", (ctx) => {
  ctx.body = "Hakkimda Sayfasina Hosgeldiniz";
});
router.get("/iletisim", (ctx) => {
  ctx.body = "Iletisim Sayfasina Hosgeldiniz";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
