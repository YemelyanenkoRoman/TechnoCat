import { NextResponse } from "next/server";

interface RequestData {
  name: string;
  phone: string;
  direction?: string;
}

class TgApi {
  private static domain =
    "https://api.telegram.org/bot6140930260:AAES17ieQ2-IWPW8Wgx4YUr3pHdbYNNnR9Q";

  public static request(method: string, options?: RequestInit) {
    return fetch(`${this.domain}${method}`, options);
  }
}

export async function POST(request: Request) {
  const { name, phone, direction }: RequestData = await request.json();

  const tgBotInfoResponse = await TgApi.request("/getMe");

  const tgBotInfo = await tgBotInfoResponse.json();

  if (!tgBotInfo.ok) {
    NextResponse.error();
  }

  const response = await TgApi.request("/sendMessage", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      text: `${name}\n${phone}\n${direction}`,
      chat_id: "-1001789156995",
    }),
  });

  await response.json();

  return NextResponse.json({ data: "Hello" });
}
