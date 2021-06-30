import dotenv from "dotenv";

dotenv.config();

export const jwt_key = process.env.JWT_KEY;
export const server_port = process.env.PORT;
export const github_client_id = process.env.GITHUB_ID;
export const github_client_secret = process.env.GITHUB_SECRET;
