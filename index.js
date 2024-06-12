import express from "express";
import mongoose from "mongoose";
import BusinessTable from "./res/model/BusinessInfo.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/businessTable")
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch(() => {
    console.log("Database connection failed.");
  });

app.get("/:page/:perPage/:searchKeyword", async (req, res) => {
  try {
    let page = Number(req.params.page);
    let perPage = Number(req.params.perPage);
    let searchKeyword = req.params.searchKeyword;
    let skipItem = (page - 1) * perPage;

    let data;

    if (searchKeyword !== "0") {
      let searchRgx = { $regex: searchKeyword, $options: "i" };
      let searchQuery = {
        $or: [
          { name: searchRgx },
          { address: searchRgx },
          { capital: searchRgx },
          { profit: searchRgx },
          { loss: searchRgx },
          { owner: searchRgx },
        ],
      };

      data = await BusinessTable.aggregate([
        {
          $facet: {
            total: [{ $match: searchQuery }, { $count: "count" }],
            data: [
              { $match: searchQuery },
              { $skip: skipItem },
              { $limit: perPage },
            ],
          },
        },
      ]);
    } else {
      data = await BusinessTable.aggregate([
        {
          $facet: {
            total: [{ $count: "count" }],
            data: [{ $skip: skipItem }, { $limit: perPage }],
          },
        },
      ]);
    }

    res.json({ status: "success", response: data });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
});

app.post("/data", async (req, res) => {
  console.log(req.body);
  try {
    let data = await BusinessTable.insertMany(req.body);
    res.json({ status: "success", response: data });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
});

app.listen(3030, () => {
  console.log("The app is running successfully at 3030 port");
});
