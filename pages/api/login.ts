import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const SpotifyWebApi = require("spotify-web-api-node");

type Data = {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
};

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    origin: "https://music-player.jmgcode.com/",
    methods: ["POST", "OPTIONS"],
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Run cors
  await cors(req, res);
  if (req.method === "POST") {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi(credentials);

    spotifyApi
      .authorizationCodeGrant(code)
      .then((data: any) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((error: any) => {
        console.log(error);
        return res.status(400);
      });
  }
  return res.status(400);
};

export default handler;
