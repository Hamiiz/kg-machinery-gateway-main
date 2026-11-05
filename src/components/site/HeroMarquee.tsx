const names = [
  { text: "ከፍያለው ግርማ ማሽነሪ ኪራይ እና የየብስ ትራንስፖርት ተዛማጅ ስራዋች", lang: "am" },
  { text: "Kefyalew Girma Machinery Rental & Land Transport", lang: "en" },
  { text: "克菲亚勒夫·吉尔马机械租赁与陆路运输", lang: "zh" },
];

export function HeroMarquee() {
  // two identical halves → seamless leftward loop (-50%)
  const sequence = [...names, ...names];

  return (
    <div
      className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-label="Kefyalew Girma Machinery Rental & Land Transport"
    >
      <div className="marquee-track" aria-hidden="true">
        {sequence.map((n, i) => (
          <span
            key={`${n.lang}-${i}`}
            lang={n.lang}
            className="px-8 text-xl font-extrabold whitespace-nowrap text-cream drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-2xl lg:text-3xl"
          >
            {n.text}
          </span>
        ))}
      </div>
    </div>
  );
}
