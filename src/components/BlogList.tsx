import { useBlogs } from "@/hooks/useBlogs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import type { Blog } from "@/types/blog"

interface BlogListProps {
  search?: string
}

export function BlogList({ search = "" }: BlogListProps) {
  const { data, isLoading, error } = useBlogs()

  if (isLoading) return <p>Loading blogs...</p>
  if (error) return <p>Error loading blogs</p>

  const filteredBlogs = data?.filter((blog: Blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description.toLowerCase().includes(search.toLowerCase()) ||
    blog.category.some((cat) =>
      cat.toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <div className="grid gap-6">
      {filteredBlogs?.length === 0 && (
        <p className="text-sm text-muted-foreground">No blogs found</p>
      )}

      {filteredBlogs?.map((blog) => (
        <Link key={blog.id} to={`/blogs/${blog.id}`}>
          <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition">
            <CardHeader>
              <div className="flex gap-2 mb-2 flex-wrap">
                {blog.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-2 py-1 rounded bg-muted"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <CardTitle>{blog.title}</CardTitle>
              <p className="text-xs text-muted-foreground">
                {new Date(blog.date).toDateString()}
              </p>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {blog.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
