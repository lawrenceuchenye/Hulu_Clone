import Header from "../components/Header"
import CatNavbar from "../components/CatNavbar"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-slate-900">
      {/* Header */}
       <Header />

      {/*Category Navbar */}
        <CatNavbar />
     </div>
  )
}
