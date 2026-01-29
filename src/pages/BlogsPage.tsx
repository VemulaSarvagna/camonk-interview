import { BlogList } from "@/components/BlogList"

export default function BlogsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <BlogList />
    </div>
  )
}
