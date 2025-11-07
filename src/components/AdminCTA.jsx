import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function AdminCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-emerald-600 p-8 text-white md:flex-row">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Panel Admin
          </div>
          <h3 className="mt-4 text-2xl font-bold">Kelola Stok & Peminjaman dengan Mudah</h3>
          <p className="mt-1 text-white/90">
            Petugas dapat memvalidasi kedatangan, update status sepeda, tambah unit baru, dan melihat laporan harian.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-emerald-700 shadow hover:bg-emerald-50"
        >
          Buka Dashboard Admin
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
