/**
 * Matriz TRL × CRL — o mecanismo proprietário, desenhado em SVG.
 *
 * Aceita um ponto opcional (trl, crl) para plotar o resultado do
 * autodiagnóstico. Sem ponto, funciona como diagrama explicativo.
 */

interface MatrizProps {
  trl?: number;
  crl?: number;
  className?: string;
}

const PAD = 56;
const SIZE = 360;

/** Converte nível 1..9 em coordenada dentro da grade. */
function pos(level: number) {
  return PAD + ((level - 0.5) / 9) * SIZE;
}

export function MatrizTrlCrl({ trl, crl, className = "" }: MatrizProps) {
  const hasPoint = typeof trl === "number" && typeof crl === "number";
  const cx = hasPoint ? pos(trl!) : 0;
  const cy = hasPoint ? PAD + SIZE - ((crl! - 0.5) / 9) * SIZE : 0;

  return (
    <svg
      viewBox="0 0 480 470"
      className={className}
      role="img"
      aria-label="Matriz de maturidade técnica (TRL) por maturidade comercial (CRL)"
    >
      {/* zonas */}
      <rect
        x={PAD + SIZE * (6 / 9)}
        y={PAD + SIZE * (6 / 9)}
        width={SIZE / 3}
        height={SIZE / 3}
        className="fill-highlight/15"
      />
      <rect
        x={PAD + SIZE * (6 / 9)}
        y={PAD}
        width={SIZE / 3}
        height={SIZE / 3}
        className="fill-cta/10"
      />

      {/* grade 9x9 */}
      <g className="stroke-stroke/60" fill="none">
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={PAD + (i / 9) * SIZE}
            y1={PAD}
            x2={PAD + (i / 9) * SIZE}
            y2={PAD + SIZE}
            strokeWidth={i % 3 === 0 ? 1.2 : 0.5}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={PAD}
            y1={PAD + (i / 9) * SIZE}
            x2={PAD + SIZE}
            y2={PAD + (i / 9) * SIZE}
            strokeWidth={i % 3 === 0 ? 1.2 : 0.5}
          />
        ))}
      </g>

      {/* diagonal */}
      <line
        x1={PAD}
        y1={PAD + SIZE}
        x2={PAD + SIZE}
        y2={PAD}
        className="stroke-text-muted"
        strokeWidth={1.5}
        strokeDasharray="6 5"
      />
      <text
        x={PAD + SIZE / 2 - 6}
        y={PAD + SIZE / 2 - 10}
        className="fill-text-muted"
        fontSize="10"
        textAnchor="middle"
        transform={`rotate(-45 ${PAD + SIZE / 2 - 6} ${PAD + SIZE / 2 - 10})`}
      >
        trajetória equilibrada
      </text>

      {/* rótulos de zona */}
      <text
        x={PAD + SIZE * (7.5 / 9)}
        y={PAD + SIZE * (7.4 / 9)}
        className="fill-highlight"
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
      >
        Tecnologia
      </text>
      <text
        x={PAD + SIZE * (7.5 / 9)}
        y={PAD + SIZE * (8 / 9)}
        className="fill-highlight"
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
      >
        órfã
      </text>
      <text
        x={PAD + SIZE * (7.5 / 9)}
        y={PAD + SIZE * (1.2 / 9)}
        className="fill-cta"
        fontSize="10"
        textAnchor="middle"
      >
        Pronta para
      </text>
      <text
        x={PAD + SIZE * (7.5 / 9)}
        y={PAD + SIZE * (1.8 / 9)}
        className="fill-cta"
        fontSize="10"
        textAnchor="middle"
      >
        escalar
      </text>
      <text
        x={PAD + SIZE * (1.5 / 9)}
        y={PAD + SIZE * (8 / 9)}
        className="fill-text-muted"
        fontSize="10"
        textAnchor="middle"
      >
        Pesquisa
      </text>
      <text
        x={PAD + SIZE * (1.5 / 9)}
        y={PAD + SIZE * (1.5 / 9)}
        className="fill-text-muted"
        fontSize="10"
        textAnchor="middle"
      >
        Demanda sem
      </text>
      <text
        x={PAD + SIZE * (1.5 / 9)}
        y={PAD + SIZE * (2.1 / 9)}
        className="fill-text-muted"
        fontSize="10"
        textAnchor="middle"
      >
        solução
      </text>

      {/* ponto plotado */}
      {hasPoint && (
        <>
          <circle cx={cx} cy={cy} r="14" className="fill-cta/25" />
          <circle cx={cx} cy={cy} r="7" className="fill-cta" />
          <circle cx={cx} cy={cy} r="7" className="stroke-background" strokeWidth="2" fill="none" />
        </>
      )}

      {/* escalas */}
      {[1, 3, 5, 7, 9].map((n) => (
        <text
          key={`x${n}`}
          x={pos(n)}
          y={PAD + SIZE + 18}
          className="fill-text-muted"
          fontSize="10"
          textAnchor="middle"
        >
          {n}
        </text>
      ))}
      {[1, 3, 5, 7, 9].map((n) => (
        <text
          key={`y${n}`}
          x={PAD - 12}
          y={PAD + SIZE - ((n - 0.5) / 9) * SIZE + 4}
          className="fill-text-muted"
          fontSize="10"
          textAnchor="middle"
        >
          {n}
        </text>
      ))}

      {/* eixos */}
      <text
        x={PAD + SIZE / 2}
        y={PAD + SIZE + 42}
        className="fill-text"
        fontSize="12"
        fontWeight="600"
        textAnchor="middle"
      >
        TRL — maturidade técnica →
      </text>
      <text
        x={18}
        y={PAD + SIZE / 2}
        className="fill-text"
        fontSize="12"
        fontWeight="600"
        textAnchor="middle"
        transform={`rotate(-90 18 ${PAD + SIZE / 2})`}
      >
        CRL — maturidade comercial →
      </text>
    </svg>
  );
}
