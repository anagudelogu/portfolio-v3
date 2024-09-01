import MobileMenu from './mobile-menu'

export default function NavigationBar() {
  return (
    <div>
      <nav className="container flex items-center justify-between py-4">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-serif text-2xl font-bold text-transparent">
          Andres Agudelo
        </div>
        <MobileMenu />
      </nav>
    </div>
  )
}
