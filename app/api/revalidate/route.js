import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidateTag('guide')
  revalidateTag('other')
  return NextResponse.json({ revalidated: true, now: Date.now() })
}