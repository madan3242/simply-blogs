
export const Navbar = () => {
  return (
    <div className="w-full bg-slate-400 p-3 flex items-center justify-between">
        <h1 className="text-3xl font-bold p-2 text-white">Simply Blogs</h1>
        <div className="flex space-x-3">
          <button className="bg-white rounded-md px-4 py-2">Login</button>
          <button className="bg-white rounded-md px-4 py-2">Signup</button>
        </div>
    </div>
  )
}
