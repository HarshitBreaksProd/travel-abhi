import { Trip } from "./types";

export default function MyTripsTable({ trips }: { trips: Trip[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 text-slate-600">
            <th className="text-left font-medium px-4 py-3">Trip Title</th>
            <th className="text-left font-medium px-4 py-3">Date</th>
            <th className="text-left font-medium px-4 py-3">Status</th>
            <th className="text-left font-medium px-4 py-3">Bookings</th>
            <th className="text-left font-medium px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((t, i) => (
            <tr key={t.title} className={i % 2 === 1 ? "bg-white" : "bg-white"}>
              <td className="px-4 py-3 text-slate-800">{t.title}</td>
              <td className="px-4 py-3 text-slate-600">{t.date}</td>
              <td className="px-4 py-3">
                <span
                  className={
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border " +
                    (t.status === "Active"
                      ? "bg-slate-100 text-slate-800"
                      : t.status === "Upcoming"
                      ? "bg-slate-100 text-slate-800"
                      : "bg-slate-100 text-slate-800")
                  }
                >
                  {t.status}
                </span>
              </td>
              <td className="px-4 py-3 text-slate-800">{t.bookings}</td>
              <td className="px-4 py-3 text-primary">
                <button className="underline text-xs mr-2">Edit</button>
                <button className="underline text-xs mr-2">Duplicate</button>
                <button className="underline text-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
