import type { Garment, Pattern as PatternKind, Product } from "@/lib/products";

type Colors = [string, string, string];
type ArtProduct = Product & { garment: Garment; pattern: PatternKind; colors: Colors };

const SHAPES: Record<Garment, string> = {
  tee: "M60 40 L85 30 Q100 48 115 30 L140 40 L176 76 L153 99 L139 87 L139 203 L61 203 L61 87 L47 99 L24 76 Z",
  sweater: "M62 38 L85 30 Q100 46 115 30 L138 38 L186 152 L158 163 L139 108 L139 208 L61 208 L61 108 L42 163 L14 152 Z",
  dress: "M80 30 L91 28 Q100 42 109 28 L120 30 L126 84 L152 208 L48 208 L74 84 Z",
  pants: "M58 30 L142 30 L152 218 L108 218 L100 96 L92 218 L48 218 Z",
  tote: "M44 92 L156 92 L164 214 L36 214 Z",
  cap: "M44 148 Q44 66 100 66 Q156 66 156 148 Z",
  scarf: "M72 22 Q100 14 128 22 L138 218 Q100 228 62 218 Z",
  earrings: "",
};

function Pattern({ id, p, colors }: { id: string; p: PatternKind; colors: Colors }) {
  const [a, b, c] = colors;
  switch (p) {
    case "stripes":
      return (
        <pattern id={id} width="200" height="26" patternUnits="userSpaceOnUse">
          <rect width="200" height="26" fill={a} />
          <rect y="9" width="200" height="8" fill={b} />
          <rect y="20" width="200" height="3" fill={c} />
        </pattern>
      );
    case "dots":
      return (
        <pattern id={id} width="34" height="34" patternUnits="userSpaceOnUse">
          <rect width="34" height="34" fill={a} />
          <circle cx="9" cy="9" r="6" fill={b} />
          <circle cx="26" cy="26" r="4" fill={c} />
        </pattern>
      );
    case "checks":
      return (
        <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse">
          <rect width="36" height="36" fill={c} />
          <rect width="18" height="18" fill={a} />
          <rect x="18" y="18" width="18" height="18" fill={b} />
        </pattern>
      );
    case "waves":
      return (
        <pattern id={id} width="40" height="28" patternUnits="userSpaceOnUse">
          <rect width="40" height="28" fill={a} />
          <path d="M0 10 Q10 0 20 10 T40 10" fill="none" stroke={b} strokeWidth="5" />
          <path d="M0 24 Q10 14 20 24 T40 24" fill="none" stroke={c} strokeWidth="3" />
        </pattern>
      );
    case "sunburst":
      return (
        <pattern id={id} width="200" height="240" patternUnits="userSpaceOnUse">
          <rect width="200" height="240" fill={a} />
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={i}
              d="M100 120 L-60 90 L-60 120 Z"
              transform={`rotate(${i * (360 / 14)} 100 120)`}
              fill={i % 2 ? b : c}
              opacity={0.9}
            />
          ))}
          <circle cx="100" cy="120" r="20" fill={a} />
        </pattern>
      );
    default:
      return (
        <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill={a} />
        </pattern>
      );
  }
}

export default function ProductArt({ product, className }: { product: ArtProduct; className?: string }) {
  const pid = `pat-${product.id}`;
  const [a, b, c] = product.colors;
  const g = product.garment;
  const ink = "#173d30";

  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label={product.name} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <Pattern id={pid} p={product.pattern} colors={product.colors} />
        <clipPath id={`clip-${product.id}`}>
          <path d={SHAPES[g]} />
        </clipPath>
      </defs>

      {g === "earrings" ? (
        <g stroke={ink} strokeWidth="3" strokeLinejoin="round">
          {[62, 138].map((x, i) => (
            <g key={x}>
              <path d={`M${x} 40 q-8 -10 0 -18 q10 -2 10 8`} fill="none" />
              <circle cx={x} cy="58" r="12" fill={i ? b : a} />
              <circle cx={x} cy="116" r="30" fill={i ? a : b} />
              <circle cx={x} cy="116" r="12" fill={c} />
              {Array.from({ length: 8 }).map((_, k) => (
                <circle
                  key={k}
                  cx={x + Math.cos((k * Math.PI) / 4) * 22}
                  cy={116 + Math.sin((k * Math.PI) / 4) * 22}
                  r="5"
                  fill={k % 2 ? c : a}
                  strokeWidth="2"
                />
              ))}
            </g>
          ))}
        </g>
      ) : (
        <g strokeLinejoin="round" strokeLinecap="round">
          {g === "tote" && (
            <path d="M70 94 Q70 40 100 40 Q130 40 130 94" fill="none" stroke={ink} strokeWidth="9" />
          )}
          {g === "cap" && (
            <>
              <path d="M52 150 Q110 128 184 156 Q176 176 100 166 Q60 162 52 150 Z" fill={c} stroke={ink} strokeWidth="3" />
              <circle cx="100" cy="66" r="6" fill={b} stroke={ink} strokeWidth="3" />
            </>
          )}
          <path d={SHAPES[g]} fill={`url(#${pid})`} stroke={ink} strokeWidth="3" />
          {g === "cap" && (
            <>
              <path d="M100 66 Q80 110 78 148 M100 66 Q120 110 122 148" fill="none" stroke={ink} strokeWidth="2" opacity=".45" />
              <path d="M44 148 L156 148" stroke={ink} strokeWidth="3" />
            </>
          )}
          {g === "tee" && <path d="M85 30 Q100 52 115 30" fill="none" stroke={ink} strokeWidth="3" />}
          {g === "sweater" && (
            <g clipPath={`url(#clip-${product.id})`}>
              <rect x="0" y="194" width="200" height="16" fill={c} opacity=".9" />
              <path d="M85 30 Q100 50 115 30 L115 38 Q100 56 85 38 Z" fill={c} />
            </g>
          )}
          {g === "sweater" && <path d="M61 194 H139" stroke={ink} strokeWidth="2.5" />}
          {g === "dress" && (
            <>
              <path d="M70 90 Q100 104 130 90" fill="none" stroke={ink} strokeWidth="3" />
              <path d="M86 90 L74 84 M114 90 L126 84" stroke={ink} strokeWidth="3" fill="none" />
            </>
          )}
          {g === "pants" && (
            <>
              <path d="M58 44 H142" stroke={ink} strokeWidth="3" />
              <path d="M100 96 L100 44" stroke={ink} strokeWidth="2.5" />
            </>
          )}
          {g === "scarf" && (
            <>
              {Array.from({ length: 9 }).map((_, i) => (
                <path key={i} d={`M${66 + i * 8.5} 220 v14`} stroke={i % 2 ? b : c} strokeWidth="3.5" fill="none" />
              ))}
            </>
          )}
          {g === "tote" && <path d="M36 214 L164 214" stroke={ink} strokeWidth="3" />}
        </g>
      )}
    </svg>
  );
}
