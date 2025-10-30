// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.use(cors());
app.use(jsonServer.bodyParser());

app.db = router.db;

app.use(auth);
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ JSON Server đang chạy tại http://localhost:${PORT}`);
});
