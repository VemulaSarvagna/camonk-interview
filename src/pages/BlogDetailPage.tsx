import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "@/api/blogs"

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!), // ✅ STRING ID
    enabled: !!id,
  })

  if (isLoading) return <p>Loading...</p>

  if (!data) return <p>Blog not found</p>

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Image */}
      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>

      {/* Date */}
      <p className="text-sm text-muted-foreground mb-6">
        {new Date(data.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Categories */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {data.category.map((cat) => (
          <span
            key={cat}
            className="text-xs px-3 py-1 rounded-full bg-muted font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Content */}
      <p className="leading-7 text-gray-800 whitespace-pre-line">
        {data.content}
      </p>
    </div>
  )
}

