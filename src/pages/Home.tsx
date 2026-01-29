import { BlogList } from "@/components/BlogList"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Home() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
              CA
            </div>
            <span className="font-semibold text-lg">CA MONK</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-primary">Tools</span>
            <span className="cursor-pointer hover:text-primary">Practice</span>
            <span className="cursor-pointer hover:text-primary">Events</span>
            <span className="cursor-pointer hover:text-primary">Job Board</span>
            <span className="cursor-pointer hover:text-primary">Points</span>
          </nav>

          {/* Right Buttons */}
          <div className="flex gap-3 items-center">
            <button
              onClick={() => navigate("/create")}
              className="border border-primary text-primary text-sm px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            >
              + Create Blog
            </button>

            <button className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition">
              Profile
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center py-8 px-6">
          <h1 className="text-4xl font-bold">CA Monk Blog</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>

          {/* 🔍 SEARCH BAR */}
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto w-full overflow-hidden">

        {/* Blog List */}
        <aside className="md:col-span-1 overflow-y-auto pr-2">
          <h2 className="font-semibold mb-4">Latest Articles</h2>
          <BlogList search={search} />
        </aside>

        {/* Blog Detail */}
        <main className="md:col-span-2 overflow-y-auto pl-2">
          <Outlet />
        </main>
      </div>
    </div>
  )
}


