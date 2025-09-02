"use client";

import { useId, useState } from "react";

export type CityOption = { label: string; value: string };
export type CategoryOption = { label: string; value: string };

type Range = [number, number];

export default function FiltersSidebar({
  cities,
  categories,
  selectedCity,
  onCityChange,
  selectedCategory,
  onCategoryChange,
  budget,
  onBudgetChange,
  duration,
  onDurationChange,
  onDatesChange,
}: {
  cities: CityOption[];
  categories: CategoryOption[];
  selectedCity?: string;
  onCityChange: (value: string | undefined) => void;
  selectedCategory?: string;
  onCategoryChange: (value: string | undefined) => void;
  budget: Range;
  onBudgetChange: (v: Range) => void;
  duration: Range;
  onDurationChange: (v: Range) => void;
  onDatesChange?: (start: string, end: string) => void;
}) {
  const cityId = useId();
  const categoryId = useId();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="font-poppins">
      <div className="mb-4">
        <label
          className="block text-slate-800 text-sm font-semibold mb-2"
          htmlFor={cityId}
        >
          Select a city
        </label>
        <div className="relative">
          <select
            id={cityId}
            className="w-full appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            value={selectedCity ?? ""}
            onChange={(e) => onCityChange(e.target.value || undefined)}
          >
            <option value="">Select a city</option>
            {cities.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>
      </div>

      <div className="relative mt-6 mb-4">
        <div className="border-t border-slate-200" />
        <span className="absolute -top-3 left-0 bg-white text-[11px] tracking-wide text-slate-500">
          Filters
        </span>
      </div>

      <div className="mt-4">
        <Label>Date Range</Label>
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              onDatesChange?.(e.target.value, endDate);
            }}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            aria-label="Start date"
          />
          <span className="text-slate-400">—</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              onDatesChange?.(startDate, e.target.value);
            }}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            aria-label="End date"
          />
        </div>
      </div>

      <div className="mt-4">
        <Label>Budget</Label>
        <TwoThumbSlider
          min={5000}
          max={200000}
          step={1000}
          value={budget}
          minDistance={5000}
          onChange={onBudgetChange}
          format={(v) => new Intl.NumberFormat("en-IN").format(v)}
        />
      </div>

      <div className="mt-8">
        <Label>Trip Duration</Label>
        <OneThumbSlider
          min={1}
          max={30}
          step={1}
          value={duration[1]}
          onChange={(v) => onDurationChange([duration[0], v])}
          format={(v) => `${v} Days`}
        />
      </div>

      <div className="mt-8">
        <label
          className="block text-slate-800 text-sm font-semibold mb-2"
          htmlFor={categoryId}
        >
          Category
        </label>
        <div className="relative">
          <select
            id={categoryId}
            className="w-full appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            value={selectedCategory ?? ""}
            onChange={(e) => onCategoryChange(e.target.value || undefined)}
          >
            <option value="">Category</option>
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-slate-800 text-sm font-semibold mb-2">{children}</p>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function TwoThumbSlider({
  min,
  max,
  step,
  value,
  onChange,
  minDistance = 0,
  format,
}: {
  min: number;
  max: number;
  step: number;
  value: Range;
  onChange: (v: Range) => void;
  minDistance?: number;
  format?: (v: number) => string;
}) {
  const pct = (v: number) => ((v - min) / (max - min)) * 100;
  const display = (v: number) => (format ? format(v) : String(v));

  const snap = (v: number) => {
    const snapped = Math.round((v - min) / step) * step + min;
    return clamp(snapped, min, max);
  };

  const getValueFromClientX = (clientX: number, track: HTMLDivElement) => {
    const rect = track.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const raw = min + ratio * (max - min);
    return snap(raw);
  };

  const onStartDrag = (
    index: 0 | 1,
    e: React.PointerEvent<HTMLDivElement>,
    track: HTMLDivElement
  ) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    const move = (clientX: number) => {
      const proposed = getValueFromClientX(clientX, track);
      let [a, b] = value;
      if (index === 0) {
        a = clamp(proposed, min, b - minDistance);
      } else {
        b = clamp(proposed, a + minDistance, max);
      }
      onChange([snap(a), snap(b)]);
    };
    move(e.clientX);
    const handleMove = (ev: PointerEvent) => move(ev.clientX);
    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  const onTrackDown = (
    e: React.PointerEvent<HTMLDivElement>,
    track: HTMLDivElement
  ) => {
    const clicked = getValueFromClientX(e.clientX, track);
    const [a, b] = value;
    const distA = Math.abs(clicked - a);
    const distB = Math.abs(clicked - b);
    const index: 0 | 1 = distA <= distB ? 0 : 1;
    onStartDrag(index, e, track);
  };

  const [a, b] = value;

  return (
    <div>
      <div className="flex justify-between text-xs text-slate-600 mb-2">
        <span>{display(a)}</span>
        <span>{display(b)}</span>
      </div>
      <div className="relative h-8" ref={undefined}>
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] bg-slate-200 rounded-full" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[6px] bg-primary rounded-full"
          style={{ left: `${pct(a)}%`, right: `${100 - pct(b)}%` }}
        />

        <div
          className="absolute inset-0"
          onPointerDown={(e) => onTrackDown(e, e.currentTarget)}
        />

        <Thumb
          style={{ left: `${pct(a)}%` }}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={b - minDistance}
          aria-valuenow={a}
          tabIndex={0}
          onPointerDown={(e) =>
            onStartDrag(0, e, e.currentTarget.parentElement as HTMLDivElement)
          }
          onKeyDown={(e) => {
            let next = a;
            if (e.key === "ArrowLeft") next = a - step;
            if (e.key === "ArrowRight") next = a + step;
            if (e.key === "Home") next = min;
            if (e.key === "End") next = b - minDistance;
            next = clamp(snap(next), min, b - minDistance);
            if (next !== a) onChange([next, b]);
          }}
        />
        <Thumb
          style={{ left: `${pct(b)}%` }}
          role="slider"
          aria-valuemin={a + minDistance}
          aria-valuemax={max}
          aria-valuenow={b}
          tabIndex={0}
          onPointerDown={(e) =>
            onStartDrag(1, e, e.currentTarget.parentElement as HTMLDivElement)
          }
          onKeyDown={(e) => {
            let next = b;
            if (e.key === "ArrowLeft") next = b - step;
            if (e.key === "ArrowRight") next = b + step;
            if (e.key === "Home") next = a + minDistance;
            if (e.key === "End") next = max;
            next = clamp(snap(next), a + minDistance, max);
            if (next !== b) onChange([a, next]);
          }}
        />
      </div>
    </div>
  );
}

function Thumb({
  style,
  ...rest
}: { style: React.CSSProperties } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary shadow cursor-pointer"
      style={style}
      {...rest}
    />
  );
}

function OneThumbSlider({
  min,
  max,
  step,
  value,
  onChange,
  format,
}: {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}) {
  const pct = (v: number) => ((v - min) / (max - min)) * 100;
  const display = (v: number) => (format ? format(v) : String(v));
  const a = min; // fixed start
  const b = value;
  return (
    <div>
      <div className="flex justify-end text-xs text-slate-600 mb-2">
        <span>{display(b)}</span>
      </div>
      <div className="relative h-8">
        <input
          aria-label="max days"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full appearance-none bg-transparent opacity-0 pointer-events-auto z-30"
        />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] bg-slate-200 rounded-full" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[6px] bg-primary rounded-full"
          style={{ left: `${pct(a)}%`, right: `${100 - pct(b)}%` }}
        />
        <Thumb style={{ left: `${pct(b)}%` }} />
      </div>
    </div>
  );
}
