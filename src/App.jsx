import Hero from './components/Hero';
import BikeList from './components/BikeList';
import BookingForm from './components/BookingForm';
import AdminCTA from './components/AdminCTA';

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Go‑Wes ITERA. Dibangun untuk memudahkan penyewaan sepeda di Kebun Raya ITERA.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">GW</span>
            Go‑Wes ITERA
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#daftar-sepeda" className="hover:text-emerald-700">Sepeda</a>
            <a href="#form-booking" className="hover:text-emerald-700">Booking</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <BikeList />
        <BookingForm />
        <AdminCTA />
      </main>

      <Footer />
    </div>
  );
}
