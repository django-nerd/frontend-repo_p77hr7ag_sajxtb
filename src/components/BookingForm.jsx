import { useState } from 'react';
import { Calendar, Mail, Phone, User } from 'lucide-react';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    bikeId: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now this just simulates submission
    setSubmitted(true);
  };

  return (
    <section id="form-booking" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold">Form Booking</h2>
        <p className="text-muted-foreground">Lengkapi data untuk melakukan pemesanan sepeda.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5 rounded-xl border bg-white p-6 shadow-sm">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Nama Lengkap</label>
            <div className="flex items-center gap-3 rounded-lg border px-3">
              <User className="h-4 w-4 text-gray-500" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Contoh: Budi Santoso"
                className="w-full py-2 outline-none"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <div className="flex items-center gap-3 rounded-lg border px-3">
              <Mail className="h-4 w-4 text-gray-500" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="nama@email.com"
                className="w-full py-2 outline-none"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Nomor HP</label>
            <div className="flex items-center gap-3 rounded-lg border px-3">
              <Phone className="h-4 w-4 text-gray-500" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="08xxxxxxxxxx"
                className="w-full py-2 outline-none"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Tanggal Pakai</label>
            <div className="flex items-center gap-3 rounded-lg border px-3">
              <Calendar className="h-4 w-4 text-gray-500" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full py-2 outline-none"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">ID Sepeda (opsional)</label>
            <input
              name="bikeId"
              value={form.bikeId}
              onChange={handleChange}
              placeholder="Contoh: SEP-001"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <button type="submit" className="rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700">
            Pesan Sekarang
          </button>

          {submitted && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
              Pemesanan terkirim! Tunjukkan bukti pemesanan di pos penyewaan untuk check‑in.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
