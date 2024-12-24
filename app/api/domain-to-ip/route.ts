import { NextResponse } from 'next/server'
import dns from 'dns'
import { promisify } from 'util'

const resolve4 = promisify(dns.resolve4)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get('domain')

  if (!domain) {
    return NextResponse.json({ error: 'Domain is required' }, { status: 400 })
  }

  try {
    const addresses = await resolve4(domain)
    return NextResponse.json({ ip_addresses: addresses })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to resolve IP addresses' }, { status: 500 })
  }
}

