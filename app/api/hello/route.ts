import { NextResponse } from 'next/server';

export async function GET() {
  // Return a simple payload to verify the API route is reachable.
  return NextResponse.json({ greeting: 'Hello from the Next.js API route!' });
}
