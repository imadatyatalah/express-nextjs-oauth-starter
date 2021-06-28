const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  server_port: process.env.PORT,
  github_client_id: process.env.GITHUB_ID,
  github_client_secret: process.env.GITHUB_SECRET,
};
