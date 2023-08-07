import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const token = requestUrl.searchParams.get('token')

  if (token) {
    cookies().set('token', token)
    return NextResponse.redirect(requestUrl.origin)
  }
}