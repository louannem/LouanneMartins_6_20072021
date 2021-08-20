const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    app: ["./src/pages/index.js", "./src/pages/page_photographe.js"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};