import { NextResponse } from 'next/server'
import dns from 'dns'
import { promisify } from 'util'

const resolvens = promisify(dns.resolvens)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get('domain')

  if (!domain) {
    return NextResponse.json({ error: 'Domain is required' }, { status: 400 })
  }

  try {
    const nameservers = await resolvens(domain)
    return NextResponse.json({ nameservers })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to resolve nameservers' }, { status: 500 })
  }
}

