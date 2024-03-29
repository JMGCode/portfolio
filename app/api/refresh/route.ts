// import { NextResponse } from "next/server";

// const SpotifyWebApi = require("spotify-web-api-node");

// const credentials = {
//   redirectUri: process.env.REDIRECT_URI,
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
// };

// export async function POST(request: Request) {
//   const { refreshToken } = await request.json();

//   const refreshCredentials = { ...credentials, refreshToken };
//   const spotifyApi = new SpotifyWebApi(refreshCredentials);

//   spotifyApi
//     .refreshAccessToken()
//     .then((data: any) => {
//       console.log("spotify body refresh", data.body);
//       const { access_token, expires_in } = data.body;

//       return NextResponse.json({
//         accessToken: access_token,
//         expiresIn: expires_in,
//         refreshToken,
//       });
//     })
//     .catch((error: any) => {
//       return new Response(null, {
//         status: 400,
//         statusText: "Bad Request",
//       });
//     });
// }

// export async function OPTIONS(request: Request) {
//   const origin = request.headers.get("origin");
//   return new Response("refresh options OK", {
//     status: 200,
//     headers: {
//       "Access-Control-Allow-Origin": origin || "*",
//       "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
// }

import { NextResponse } from "next/server";

const SpotifyWebApi = require("spotify-web-api-node");

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

export async function POST(request: Request) {
  const { code } = await request.json();

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data: any) => {
      const { access_token, refresh_token, expires_in } = data.body;

      return NextResponse.json({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
      });
    })
    .catch((error: any) => {
      console.log(error);
      return new Response(null, {
        status: 400,
        statusText: "Bad Request",
      });
    });
}
