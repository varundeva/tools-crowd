'use client'

import { useState } from 'react'
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
    </form>
  )
}

