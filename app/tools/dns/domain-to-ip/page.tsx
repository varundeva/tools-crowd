'use client'

import { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function DomainToIP() {
  const [domain, setDomain] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/domain-to-ip?domain=${domain}`)
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult('Error occurred while fetching data')
    }
  }

  return (
    <ToolLayout
      title="Domain to IP"
      description="Convert a domain name to IP address"
      information="The Domain to IP tool resolves a domain name to its corresponding IP address(es). This process is fundamental to how the internet works, allowing human-readable domain names to be translated into machine-readable IP addresses that computers use to identify each other on a network."
      useCases={[
        "Troubleshooting network connectivity issues",
        "Verifying server configurations",
        "Setting up firewall rules",
        "Bypassing DNS-based content filters"
      ]}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter a domain name"
          required
        />
        <Button type="submit" className="w-full">Convert</Button>
      </form>
      {result && (
        <Textarea
          value={result}
          readOnly
          className="mt-4 h-[200px]"
        />
      )}
    </ToolLayout>
  )
}

