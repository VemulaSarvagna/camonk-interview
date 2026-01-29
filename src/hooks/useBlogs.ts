import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/api/blogs"

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })
