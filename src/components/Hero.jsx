import { Bike, CalendarCheck, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 to-emerald-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <Bike size={14} />
              </span>
              Go-Wes ITERA • Kebun Raya ITERA
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Sistem Penyewaan Sepeda Online yang Cepat & Mudah
            </h1>
            <p className="mt-4 text-white/90 md:text-lg">
              Pesan sepeda sebelum datang, cek ketersediaan real-time, dan nikmati
              pengalaman berkeliling Kebun Raya ITERA tanpa antre.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#daftar-sepeda" className="rounded-lg bg-white px-5 py-3 font-semibold text-emerald-700 shadow hover:bg-emerald-50">
                Lihat Daftar Sepeda
              </a>
              <a href="#form-booking" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">
                Pesan Sekarang
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 text-white/90 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5" />
                <span>Pemesanan Online</span>
              </div>
              <div className="flex items-center gap-3">
                <Bike className="h-5 w-5" />
                <span>Stok Real‑time</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5" />
                <span>Check‑in Cepat</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
              <div className="flex h-full w-full items-center justify-center p-8">
                <div className="text-center">
                  <Bike className="mx-auto h-20 w-20 text-white/90" />
                  <p className="mt-4 text-lg font-semibold">Go‑Wes ITERA</p>
                  <p className="text-white/80">Sewa sepeda jadi simpel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
