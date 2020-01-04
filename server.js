const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./app/public"));

const apiRoutes = require("./app/routes/apiRoutes");
app.use("/api", apiRoutes);

const clientRoutes = require("./app/routes/clientRoutes");
app.use("/", clientRoutes);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
