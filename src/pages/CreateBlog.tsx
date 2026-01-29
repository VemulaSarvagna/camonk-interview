import { useState } from "react"
import { useCreateBlog } from "@/hooks/useCreateBlog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const CATEGORIES = ["FINANCE", "TECH", "CAREER", "REGULATIONS","LAW","TAXATION","LIFESTYLE"]

export default function CreateBlog() {
  const { mutate, isPending } = useCreateBlog()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [category, setCategory] = useState<string[]>([])

  const toggleCategory = (cat: string) => {
    setCategory((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      title,
      description,
      content,
      coverImage,
      category,
      date: new Date().toISOString(),
    })
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          placeholder="Cover image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />

        <Input
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Textarea
          placeholder="Blog content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        {/* Categories */}
        <div>
          <p className="font-medium mb-2">Category</p>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-3 py-1 rounded border text-sm
                  ${
                    category.includes(cat)
                      ? "bg-primary text-white"
                      : "bg-muted"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Publishing..." : "Publish Blog"}
        </Button>
      </form>
    </div>
  )
}
