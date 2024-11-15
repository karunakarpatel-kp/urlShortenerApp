const asyncHandler = require("express-async-handler");
const logger = require("node-color-log");
const urlModel = require("../models/urlModel");

const getShorIdController = asyncHandler(async (req, res, next) => {
  const shortIdParam = req.params.shortId;
  console.log(shortIdParam);

  const getAndUpdateObjFrmDB = await urlModel.findOneAndUpdate(
    { shortId: shortIdParam },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    {
      new: true, // Return the updated document
    }
  );

  // Check if the document exists and handle cases where it's not found
  if (getAndUpdateObjFrmDB && getAndUpdateObjFrmDB.redirectURL) {
    res.redirect(getAndUpdateObjFrmDB.redirectURL);
  } else {
    logger.error(`No URL found for short ID: ${shortIdParam}`);
    res.status(404).json({ error: "URL not found" });
  }
});

module.exports = getShorIdController;

// const asyncHandler = require("express-async-handler");
// const logger = require("node-color-log");
// const urlModel = require("../models/urlModel");

// const getShorIdController = asyncHandler(async (req, res, next) => {
//   const shortIdParam = req.params.shortID;

//   const getAndUpdateObjFrmDB = await urlModel.findOneAndUpdate(
//     { shortId: shortIdParam },
//     {
//       $push: {
//         visitHistory: {
//           timestamp: Date.now(),
//         },
//       },
//     },
//     {
//       upsert: true,
//     }
//   );
//   res.redirect(getAndUpdateObjFrmDB.redirectURL);
// });

// module.exports = getShorIdController;
