import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Clock, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useReservationForm } from "../hooks/useReservationForm";

const contactItems = [
  {
    icon: Clock,
    label: "Hours",
    lines: [
      "Tue — Fri: 13:30 – 16:00 / 20:30 – 23:30",
      "Sat — Sun: 13:00 – 16:30 / 20:00 – 00:00",
      "Monday: Closed",
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+34 91 234 56 78"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["reservas@mareeyterra.es"],
  },
  {
    icon: MapPin,
    label: "Address",
    lines: ["Calle de Velázquez, 45", "28001 Madrid"],
  },
];

const occasions = [
  { value: "none", label: "No special occasion" },
  { value: "anniversary", label: "Anniversary" },
  { value: "birthday", label: "Birthday" },
  { value: "business", label: "Business meeting" },
  { value: "proposal", label: "Marriage proposal" },
  { value: "other", label: "Other occasion" },
];

const inputClass =
  "w-full border border-gray-200 px-4 py-3 text-midnight font-[var(--font-jost)] text-sm focus:outline-none focus:border-terracotta transition-colors duration-200";
const labelClass =
  "block font-[var(--font-jost)] text-xs tracking-widest uppercase text-text-muted-mare mb-2";

export default function Reservations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    formData,
    updateField,
    handleSubmit,
    isSubmitting,
    isSuccess,
    errors,
    resetForm,
  } = useReservationForm();

  useGSAP(
    () => {
      gsap.fromTo(
        ".reservations-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="reservations"
      ref={containerRef}
      className="bg-mahogany py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-mare tracking-widest font-[var(--font-jost)] text-xs font-light uppercase block mb-4">
            Reserve Your Table
          </span>
          <h2 className="font-[var(--font-cormorant)] italic text-5xl lg:text-6xl text-cream">
            Reservations
          </h2>
        </div>

        <div className="reservations-content grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-gold-mare mt-0.5 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-[var(--font-jost)] text-xs tracking-widest uppercase text-gold-mare/70 mb-1">
                      {item.label}
                    </div>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="font-[var(--font-jost)] text-cream/70 text-sm leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Decorative divider */}
            <div className="border-t border-gold-mare/20 pt-8">
              <p className="font-[var(--font-cormorant)] italic text-xl text-cream/60 leading-relaxed">
                "A table reserved in advance is the first step towards a perfect
                evening."
              </p>
              <p className="font-[var(--font-jost)] text-gold-mare text-sm mt-3">
                — Chef Marco Ricci
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-2xl p-8 lg:p-10">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <CheckCircle size={48} className="text-terracotta mb-4" />
                <h3 className="font-[var(--font-cormorant)] italic text-3xl text-midnight mb-3">
                  Reservation Confirmed
                </h3>
                <p className="font-[var(--font-jost)] text-text-muted-mare text-sm mb-8 max-w-xs">
                  We have received your request. You will receive a confirmation
                  by email shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-colors duration-300 px-8 py-3 font-[var(--font-jost)] text-xs tracking-widest uppercase"
                >
                  New Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="reservation-name" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="reservation-name"
                      type="text"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateField("name", e.target.value)
                      }
                      className={inputClass}
                      placeholder="Maria García"
                    />
                    {errors.name && (
                      <p className="text-terracotta text-xs mt-1 font-[var(--font-jost)]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="reservation-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="reservation-email"
                      type="email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateField("email", e.target.value)
                      }
                      className={inputClass}
                      placeholder="maria@example.com"
                    />
                    {errors.email && (
                      <p className="text-terracotta text-xs mt-1 font-[var(--font-jost)]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="reservation-phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="reservation-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateField("phone", e.target.value)
                      }
                      className={inputClass}
                      placeholder="+34 600 000 000"
                    />
                    {errors.phone && (
                      <p className="text-terracotta text-xs mt-1 font-[var(--font-jost)]">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="reservation-guests" className={labelClass}>
                      Guests
                    </label>
                    <select
                      id="reservation-guests"
                      value={formData.guests}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        updateField("guests", Number(e.target.value))
                      }
                      className={inputClass}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="reservation-date" className={labelClass}>
                      Date
                    </label>
                    <input
                      id="reservation-date"
                      type="date"
                      value={formData.date}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateField("date", e.target.value)
                      }
                      className={inputClass}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.date && (
                      <p className="text-terracotta text-xs mt-1 font-[var(--font-jost)]">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="reservation-time" className={labelClass}>
                      Time
                    </label>
                    <select
                      id="reservation-time"
                      value={formData.time}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        updateField("time", e.target.value)
                      }
                      className={inputClass}
                    >
                      {[
                        "13:00",
                        "13:30",
                        "14:00",
                        "14:30",
                        "15:00",
                        "15:30",
                        "20:00",
                        "20:30",
                        "21:00",
                        "21:30",
                        "22:00",
                        "22:30",
                        "23:00",
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-terracotta text-xs mt-1 font-[var(--font-jost)]">
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Occasion */}
                <div className="mb-5">
                  <label htmlFor="reservation-occasion" className={labelClass}>
                    Special occasion
                  </label>
                  <select
                    id="reservation-occasion"
                    value={formData.occasion}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      updateField("occasion", e.target.value)
                    }
                    className={inputClass}
                  >
                    {occasions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div className="mb-8">
                  <label htmlFor="reservation-notes" className={labelClass}>
                    Additional notes
                  </label>
                  <textarea
                    id="reservation-notes"
                    value={formData.notes}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      updateField("notes", e.target.value)
                    }
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Allergies, preferences, or any special requests..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-terracotta hover:bg-sienna disabled:opacity-60 text-white py-4 font-[var(--font-jost)] font-medium tracking-widest transition-colors duration-300 text-sm uppercase"
                >
                  {isSubmitting ? "Processing..." : "Confirm Reservation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
