import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    MongoClient.connect(
      "mongodb+srv://umairkmongodb:<password>@cluster0.nlnab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
