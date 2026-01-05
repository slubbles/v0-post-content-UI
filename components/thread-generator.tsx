"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { List, Loader2 } from "lucide-react"
import { GeneratedThread } from "@/components/generated-thread"
import { UsageIndicator } from "@/components/usage-indicator"

export function ThreadGenerator() {
  const [topic, setTopic] = useState("")
  const [keyPoints, setKeyPoints] = useState("")
  const [threadLength, setThreadLength] = useState([5])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedThread, setGeneratedThread] = useState<string[]>([])

  const topicLength = topic.length

  const handleGenerate = async () => {
    if (!topic.trim()) return

    setIsGenerating(true)
    try {
      const response = await fetch("/api/thread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          keyPoints,
          threadLength: threadLength[0],
        }),
      })

      const data = await response.json()
      if (data.thread) {
        setGeneratedThread(data.thread)
      }
    } catch (error) {
      console.error("Thread generation error:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-6">
      <UsageIndicator />

      <Card className="transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <List className="h-5 w-5 text-primary" />
            Thread Builder
          </CardTitle>
          <CardDescription>Break down your big ideas into bite-sized brilliance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="topic">Main Topic</Label>
              <span className="text-xs text-muted-foreground">{topicLength} characters</span>
            </div>
            <Textarea
              id="topic"
              placeholder="What's the big idea you want to share? Tell us the story..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              rows={3}
              className="resize-none transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyPoints">Key Points (Optional)</Label>
            <Textarea
              id="keyPoints"
              placeholder="Got specific points to hit? Add them here (one per line works great)..."
              value={keyPoints}
              onChange={(e) => setKeyPoints(e.target.value)}
              rows={4}
              className="resize-none transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="threadLength">Thread Length</Label>
              <span className="text-sm font-medium text-primary">{threadLength[0]} posts</span>
            </div>
            <Slider
              id="threadLength"
              min={3}
              max={15}
              step={1}
              value={threadLength}
              onValueChange={setThreadLength}
              className="transition-opacity hover:opacity-80"
            />
            <p className="text-xs text-muted-foreground">Tip: 5-7 posts hit the sweet spot for engagement</p>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!topic.trim() || isGenerating}
            className="w-full transition-all hover:scale-[1.02] active:scale-[0.98]"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Crafting your thread...
              </>
            ) : (
              <>
                <List className="mr-2 h-4 w-4" />
                Generate Thread
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedThread.length > 0 && <GeneratedThread thread={generatedThread} />}
    </div>
  )
}
