import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') // Note: `slug` will be a string, not an array

  // ✅ Validate secret and slug
  if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || !slug) {
    return new Response('Invalid token or missing slug', { status: 401 })
  }

  // ✅ Enable draft mode (sets cookie)
  draftMode().enable()

  // ✅ Redirect safely
  return NextResponse.redirect(new URL(`/${slug}`, request.url))
}
