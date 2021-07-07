import mongoose from "mongoose";
import express from "express";
import Postmsg from "./dbmodel.js";
import cors from "cors";
import Pusher from "pusher";

const port = process.env.PORT || 9000;
const app = express();

const pusher = new Pusher({
  appId: "1230633",
  key: "c9039e744defe416e8c9",
  secret: "bece216667e874c3ce7a",
  cluster: "eu",
  useTLS: true,
});

app.use(express.json());
app.use(cors());

const dburl =
  "mongodb+srv://admin:linkedin@cluster0.kkutp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(dburl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;
db.once("open", () => {
  console.log("db connected");

  const msgCollection = db.collection("posts");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
  
    if (change.operationType == "insert") {
      const messdetail = change.fullDocument;
      pusher.trigger("message", "inserted", {
        name: messdetail.name,
        descripation : messdetail.descripation,
        message : messdetail.message,
        image: messdetail.image,
      });
    } else {
      console.log("pusher can not trigger");
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).send("hiii");
});
app.post("/new", (req, res) => {
  const bodydb = req.body;
  Postmsg.create(bodydb, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});
app.get("/sync", (req, res) => {
  Postmsg.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});
app.listen(port, () => {
  console.log(`port running ${port}`);
});
