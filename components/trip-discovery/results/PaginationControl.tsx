"use client";

export default function PaginationControl({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5);

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        className="px-2 py-1 text-slate-600 disabled:opacity-50"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          aria-current={currentPage === p ? "page" : undefined}
          className={`w-7 h-7 rounded-full text-sm ${
            currentPage === p
              ? "bg-slate-900 text-white"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        className="px-2 py-1 text-slate-600 disabled:opacity-50"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
