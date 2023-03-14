import { NextResponse } from 'next/server'
import { blockedIp } from 'lib/rules/ip'

export async function middleware(req) {
  // Return 403 if the IP is blocked
  if (await blockedIp(req)) {
    return new NextResponse(null, { status: 403 })
  }
  return
}
