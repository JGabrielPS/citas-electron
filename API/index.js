const app = require("express")();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
