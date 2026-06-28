/**
 * Logo de marca Interbank — Sistema Core Financiero.
 * Isotipo: cuadrado azul oscuro (#003D7A) con elemento blanco rotado y acento verde.
 *
 * @param {Object} props
 * @param {number} [props.size=44]      Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true] Mostrar el texto "Interbank".
 * @param {'dark'|'light'} [props.variant='dark'] Color del texto.
 */

export default function Logo({ size = 44, wordmark = true, variant = 'dark' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#003D7A'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.8)' : '#757575'
  // El texto escala con el tamaño del isotipo.
  const nameSize = Math.round(size * 0.5)
  const subSize = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Interbank"
        role="img"
      >
        {/* Fondo cuadrado azul oscuro */}
        <rect x="10" y="10" width="80" height="80" rx="12" fill="#003D7A" />
        
        {/* Elemento blanco rotado */}
        <g transform="translate(50, 50) rotate(-20)">
          <rect x="-22" y="-22" width="44" height="44" fill="#FFFFFF" opacity="0.9" />
        </g>
        
        {/* Acento verde */}
        <g transform="translate(50, 50) rotate(-20)">
          <rect x="-22" y="-22" width="44" height="8" fill="#00B84D" opacity="0.95" />
        </g>
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
            }}
          >
            Interbank
          </span>
          <span
            style={{
              fontSize: subSize,
              fontWeight: 700,
              color: subColor,
              letterSpacing: '1.2px',
            }}
          >
            CORE FINANCIERO
          </span>
        </span>
      )}
    </span>
  )
}
