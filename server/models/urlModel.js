const mongoose = require("mongoose");

const urlModel = mongoose.Schema(
  {
    shortId: { type: String, unique: true, required: true },
    redirectURL: { type: String, required: true },
    visitHistory: [
      {
        timestamp: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("urlModel", urlModel);
