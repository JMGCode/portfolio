import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";

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

const cors = Cors({
  origin: "https://music-player.jmgcode.com",
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const { refreshToken } = req.body;

    const refreshCredentials = { ...credentials, refreshToken };
    const spotifyApi = new SpotifyWebApi(refreshCredentials);

    spotifyApi
      .refreshAccessToken()
      .then((data: any) => {
        console.log("spotify body refresh", data.body);
        // console.log("The access token has been refreshed: ", data.body);
        const { access_token, expires_in } = data.body;

        res.json({
          accessToken: access_token,
          expiresIn: expires_in,
          refreshToken,
        });
        //   spotifyApi.setAccessToken(data.body["access_token"]);
      })
      .catch((error: any) => {
        console.log("refresh error : ", error);
        res.status(400);
      });
  }
  return res.status(400);
};

export default handler;
