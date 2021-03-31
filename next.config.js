const path = require("path");

module.exports = {
  // Opyions to use sass
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // Options for next/image
  images: {
    domains: ["res.cloudinary.com"],
  },
};
