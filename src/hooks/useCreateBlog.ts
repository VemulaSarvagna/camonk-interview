import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/api/blogs"

export function useCreateBlog() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })
}
