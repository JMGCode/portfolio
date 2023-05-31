import { NextResponse } from "next/server";

const SpotifyWebApi = require("spotify-web-api-node");

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // const { code } = await request.json();
  const jj = await request.json();

  return new NextResponse(
    `login -- without spotify library ${JSON.stringify(jj)} `,
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "text/plain",
      },
    }
  );

  // const spotifyApi = new SpotifyWebApi(credentials);

  // console.log(
  //   "login from post login function after Swebapi",
  //   JSON.stringify(credentials)
  // );

  // spotifyApi
  //   .authorizationCodeGrant(code)
  //   .then((data: any) => {
  //     const { access_token, refresh_token, expires_in } = data.body;

  //     console.log("login sucess message", JSON.stringify(data));

  //     // return NextResponse.json({
  //     //   accessToken: access_token,
  //     //   refreshToken: refresh_token,
  //     //   expiresIn: expires_in,
  //     // });

  //     return new NextResponse(
  //       JSON.stringify({
  //         accessToken: access_token,
  //         refreshToken: refresh_token,
  //         expiresIn: expires_in,
  //       }),
  //       {
  //         status: 200,
  //         headers: {
  //           "Access-Control-Allow-Origin": origin || "*",
  //           "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //           "Access-Control-Allow-Headers": "Content-Type",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //   })
  //   .catch((error: any) => {
  //     console.log(error);
  //     return new Response(null, {
  //       status: 400,
  //       statusText: "Bad Request",
  //     });
  //   });

  // const origin = request.headers.get("origin");
  // console.log("login post request", origin);

  // return new NextResponse("login -- all good with headers", {
  //   status: 200,
  //   headers: {
  //     "Access-Control-Allow-Origin": origin || "*",
  //     "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //     "Access-Control-Allow-Headers": "Content-Type",
  //     "Content-Type": "text/plain",
  //   },
  // });
}

export async function OPTIONS(request: Request) {
  console.log("login options request");
  const origin = request.headers.get("origin");
  return new Response("login options OK", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
