import { NextResponse } from "next/server";

const lyricsFinder = require("lyrics-finder");

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const { searchParams } = new URL(request.url);
  const artist = searchParams.get("artist");
  const title = searchParams.get("title");

  const lyrics = (await lyricsFinder(artist, title)) || "No Lyrics Found";

  return NextResponse.json(
    { lyrics },
    {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    }
  );
}
