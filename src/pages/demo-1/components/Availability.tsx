import RevealSection from "../../../components/animations/RevealSection";

export default function Availability() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F3F0]" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-[var(--font-playfair-sc)] text-[clamp(1.8rem,5vw,3rem)] md:text-5xl font-normal mb-4 text-[#1C1C1C] tracking-wide">
              Check Availability
            </h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs">
              Secure your stay at Hotel Bella Grace
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <form
            className="max-w-5xl mx-auto bg-white p-6 sm:p-8 md:p-12 shadow-sm border border-stone-100"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "#/demo-1/reserve";
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-end">
              <div className="space-y-2">
                <label
                  className="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold"
                  htmlFor="bg-checkin"
                >
                  Check-In Date
                </label>
                <div className="relative">
                  <input
                    id="bg-checkin"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border-0 border-b border-gray-200 focus:outline-none focus:border-stone-800 py-3 px-0 text-sm bg-transparent text-[#1C1C1C]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold"
                  htmlFor="bg-checkout"
                >
                  Check-Out Date
                </label>
                <div className="relative">
                  <input
                    id="bg-checkout"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border-0 border-b border-gray-200 focus:outline-none focus:border-stone-800 py-3 px-0 text-sm bg-transparent text-[#1C1C1C]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold"
                  htmlFor="bg-guests"
                >
                  Number of Guests
                </label>
                <div className="relative">
                  <select
                    id="bg-guests"
                    defaultValue="2"
                    className="w-full border-0 border-b border-gray-200 focus:outline-none focus:border-stone-800 py-3 px-0 text-sm bg-transparent text-[#1C1C1C] appearance-none cursor-pointer"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="suite">Luxury Suite (5+)</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 bottom-3 text-stone-300 text-xs">
                    ▾
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2 md:col-span-1">
                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] text-white py-4 px-6 text-[11px] uppercase tracking-widest font-medium transition-colors duration-300 hover:bg-[#D2AA00]"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </form>
        </RevealSection>
      </div>
    </section>
  );
}
