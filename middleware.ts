import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/team/:path*"],
};

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Team Area"' },
  });
}

export function middleware(req: NextRequest) {
  const expectedPass = process.env.TEAM_PASSWORD;
  if (!expectedPass) return unauthorized();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  const base64 = auth.split(" ")[1] || "";
  const decoded = Buffer.from(base64, "base64").toString();
  const [user, pass] = decoded.split(":");

  // user puede ser cualquiera; validamos solo pass
  if (!pass || pass !== expectedPass) return unauthorized();

  return NextResponse.next();
}
