import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import BlogDetailPage from "./BlogDetailPage"
import CreateBlog from "./CreateBlog"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="blogs/:id" element={<BlogDetailPage />} />
      </Route>

       <Route path="/create" element={<CreateBlog />} />
    </Routes>
  )
}
