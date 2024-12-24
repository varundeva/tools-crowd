'use client'

import { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Base64Tool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === 'encode') {
      setOutput(btoa(input))
    } else {
      try {
        setOutput(atob(input))
      } catch (error) {
        setOutput('Error: Invalid Base64 input')
      }
    }
  }

  return (
    <ToolLayout
      title="Base64 Encoder/Decoder"
      description="Encode or decode Base64 strings"
      information="Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's designed to carry data stored in binary formats across channels that only reliably support text content. Base64 is commonly used when there's a need to encode binary data that needs to be stored and transferred over media that are designed to deal with textual data."
      useCases={[
        "Encoding binary data for inclusion in XML or JSON",
        "Embedding image data in CSS or HTML",
        "Encoding data in URL parameters",
        "Storing complex data structures in text-based databases"
      ]}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="input">Input</Label>
          <Textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to encode or decode"
            required
          />
        </div>
        <RadioGroup defaultValue="encode" onValueChange={(value) => setMode(value)} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="encode" id="encode" />
            <Label htmlFor="encode">Encode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="decode" id="decode" />
            <Label htmlFor="decode">Decode</Label>
          </div>
        </RadioGroup>
        <Button type="submit" className="w-full">
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </Button>
      </form>
      {output && (
        <div className="mt-4 space-y-2">
          <Label htmlFor="output">Output</Label>
          <Textarea
            id="output"
            value={output}
            readOnly
          />
        </div>
      )}
    </ToolLayout>
  )
}

