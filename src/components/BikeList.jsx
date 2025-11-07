import { useState } from 'react';
import { Bike, CheckCircle2, Clock } from 'lucide-react';

const sampleBikes = [
  { id: 'SEP-001', name: 'Sepeda City 1', status: 'available', type: 'City Bike' },
  { id: 'SEP-002', name: 'Sepeda City 2', status: 'rented', type: 'City Bike' },
  { id: 'SEP-003', name: 'Sepeda Gunung 1', status: 'available', type: 'MTB' },
  { id: 'SEP-004', name: 'Sepeda Lipat 1', status: 'available', type: 'Folding' },
];

export default function BikeList() {
  const [query, setQuery] = useState('');
  const bikes = sampleBikes.filter(
    (b) => b.name.toLowerCase().includes(query.toLowerCase()) || b.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="daftar-sepeda" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Daftar Sepeda</h2>
          <p className="text-muted-foreground">Lihat ketersediaan sepeda secara cepat.</p>
        </div>
        <div className="w-full max-w-sm">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berdasarkan nama atau ID"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none ring-emerald-600/20 focus:ring"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bikes.map((bike) => (
          <div key={bike.id} className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <Bike />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">{bike.id}</p>
                <h3 className="text-lg font-semibold">{bike.name}</h3>
                <p className="text-sm text-gray-500">Tipe: {bike.type}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className={
                  'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ' +
                  (bike.status === 'available'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-amber-50 text-amber-700')
                }
              >
                {bike.status === 'available' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Tersedia
                  </>
                ) : (
                  <>
                    <Clock className="h-4 w-4" /> Dipinjam
                  </>
                )}
              </span>
              <a href="#form-booking" className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
                Pesan
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
