import styles from './tech-infrastructure.module.css';

function TennisBannerIllustration() {
  return (
    <svg viewBox="0 0 120 96" className={styles.bannerArtwork} fill="none" aria-hidden="true" focusable="false">
      {/* Decorative court arc */}
      <path d="M18 88c26-8 55-8 84 0" stroke="#7dd87d" strokeWidth="3.5" strokeLinecap="round" />
      {/* Racket */}
      <g transform="rotate(-38 52 44)">
        <ellipse cx="52" cy="30" rx="22" ry="28" fill="#103667" stroke="#e5eff8" strokeWidth="4" />
        {/* Strings */}
        <path
          d="M36 16h32M33 24h38M32 32h40M34 40h36M39 48h26M42 6v48M49 3v54M56 3v54M63 6v48"
          stroke="#9cc5e8"
          strokeWidth="1.2"
        />
        {/* Throat & Handle */}
        <path d="M44 56l8 16 8-16" stroke="#dce9f5" strokeWidth="3.5" fill="none" />
        <rect x="48.5" y="70" width="7" height="24" rx="2" fill="#f39c34" stroke="#fff" strokeWidth="1.2" />
      </g>
      {/* Tennis Ball */}
      <circle cx="80" cy="64" r="16" fill="#b4df37" stroke="#0c2d57" strokeWidth="2" />
      <path d="M68 54c8 4 8 16 0 20M92 54c-8 4-8 16 0 20" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function AsIsIllustration() {
  return (
    <svg viewBox="0 0 240 165" className={styles.asisIllustration} fill="none" aria-hidden="true" focusable="false">
      {/* Soft background cloud */}
      <path
        d="M28 135c-16-8-22-34-10-56 10-18 28-20 42-34 18-18 46-24 72-12 22 10 26 28 48 34 24 7 40 28 32 52-6 18-26 24-52 24H48c-8 0-15-3-20-8z"
        fill="#d9ecfa"
      />
      {/* Monitor stand */}
      <path d="M74 115h28l6 18H68l6-18z" fill="#506680" />
      <rect x="56" y="131" width="64" height="6" rx="3" fill="#2c435e" />
      {/* Monitor body */}
      <rect x="26" y="34" width="124" height="84" rx="8" fill="#103663" stroke="#092342" strokeWidth="2" />
      <rect x="33" y="41" width="110" height="64" rx="4" fill="#2687c8" />
      {/* Tennis ball inside monitor */}
      <circle cx="88" cy="73" r="21" fill="#9fd332" />
      <path d="M72 60c10 5 10 21 0 26M104 60c-10 5-10 21 0 26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      {/* Clipboard on right */}
      <rect x="162" y="34" width="54" height="72" rx="6" fill="#123a6b" />
      <rect x="167" y="41" width="44" height="60" rx="3" fill="#fff" />
      <rect x="178" y="29" width="22" height="10" rx="3" fill="#5c7999" />
      <circle cx="189" cy="33" r="2.2" fill="#fff" />
      {/* Clipboard lines */}
      <path d="M174 53h28M174 63h28M174 73h28M174 83h20" stroke="#1b4f82" strokeWidth="3" strokeLinecap="round" />
      {/* Stack of physical papers at bottom right */}
      <g transform="translate(132 108)">
        <polygon points="0,14 48,4 86,16 38,26" fill="#fff" stroke="#7fa2c4" strokeWidth="1.5" />
        <polygon points="0,20 48,10 86,22 38,32" fill="#f3f8fc" stroke="#7fa2c4" strokeWidth="1.5" />
        <polygon points="0,26 48,16 86,28 38,38" fill="#e6f0f9" stroke="#7fa2c4" strokeWidth="1.5" />
        <path d="M16 14l28-6M22 18l28-6" stroke="#99b7d4" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 56 50" className={styles.warningIcon} fill="none" aria-hidden="true" focusable="false">
      <path
        d="M25.4 4.5a3 3 0 0 1 5.2 0l21.6 37.5A3 3 0 0 1 49.6 46.5H6.4a3 3 0 0 1-2.6-4.5L25.4 4.5z"
        fill="#e7681c"
      />
      <rect x="26" y="16" width="4" height="15" rx="2" fill="#fff" />
      <circle cx="28" cy="37" r="2.6" fill="#fff" />
    </svg>
  );
}

function RiskIcon({ type }: { type: 'integration' | 'continuity' | 'security' | 'efficiency' }) {
  if (type === 'integration') {
    return (
      <svg viewBox="0 0 72 68" className={styles.riskIcon} fill="none" aria-hidden="true">
        <path
          d="M22 18h10c0-5 8-5 8 0h10a4 4 0 0 1 4 4v10c5 0 5 8 0 8v10a4 4 0 0 1-4 4H40c0-5-8-5-8 0H22a4 4 0 0 1-4-4V40c-5 0-5-8 0-8V22a4 4 0 0 1 4-4z"
          fill="#18609c"
        />
      </svg>
    );
  }
  if (type === 'continuity') {
    return (
      <svg viewBox="0 0 72 68" className={styles.riskIcon} fill="none" aria-hidden="true">
        <path d="M16 34a20 20 0 1 1 6 14.3" stroke="#13918e" strokeWidth="5.5" strokeLinecap="round" />
        <polygon points="12,26 23,36 9,38" fill="#13918e" />
        <circle cx="36" cy="34" r="12" fill="#d7f0f2" />
        <path d="M36 27v8l6 4" stroke="#0c345e" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'security') {
    return (
      <svg viewBox="0 0 72 68" className={styles.riskIcon} fill="none" aria-hidden="true">
        <path
          d="M36 8L14 17v16c0 14.5 9.4 25.4 22 29 12.6-3.6 22-14.5 22-29V17L36 8z"
          fill="#0f3968"
        />
        <rect x="27" y="31" width="18" height="15" rx="3" fill="#fff" />
        <path d="M31 31v-4a5 5 0 0 1 10 0v4" stroke="#fff" strokeWidth="3.2" />
        <circle cx="36" cy="37" r="2" fill="#0f3968" />
        <path d="M36 39v4" stroke="#0f3968" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 72 68" className={styles.riskIcon} fill="none" aria-hidden="true">
      <path d="M16 40l14-8 12-10 12-10" stroke="#12908e" strokeWidth="4.5" strokeLinecap="round" />
      <polygon points="56,9 55,21 44,12" fill="#12908e" />
      <rect x="16" y="44" width="9" height="12" rx="1.5" fill="#175185" />
      <rect x="29" y="37" width="9" height="19" rx="1.5" fill="#175185" />
      <rect x="42" y="29" width="9" height="27" rx="1.5" fill="#175185" />
      <path d="M11 56h50" stroke="#0f355e" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function DiagnosticoClipboardIllustration() {
  return (
    <svg viewBox="0 0 120 136" className={styles.diagIllustration} fill="none" aria-hidden="true">
      {/* Clipboard */}
      <rect x="12" y="16" width="76" height="98" rx="9" fill="#0e3766" />
      <rect x="20" y="26" width="60" height="80" rx="4" fill="#edf6fc" />
      <rect x="34" y="8" width="32" height="15" rx="4" fill="#3a6b9c" />
      <circle cx="50" cy="14" r="3" fill="#edf6fc" />
      {/* Checklists */}
      <path d="M27 42l4 4 7-8" stroke="#188450" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 43h28" stroke="#174a7e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M27 58l4 4 7-8" stroke="#188450" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 59h28" stroke="#174a7e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M27 74l4 4 7-8" stroke="#188450" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 75h20" stroke="#174a7e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M27 90l4 4 7-8" stroke="#188450" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Magnifying glass */}
      <circle cx="77" cy="88" r="20" fill="#d9eefb" stroke="#155791" strokeWidth="5.5" />
      <path d="M91 102l16 16" stroke="#0c315e" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function FlowNodeIcon({ step }: { step: 'socio' | 'portal' | 'cloud' | 'db' | 'confirm' }) {
  if (step === 'socio') {
    return (
      <svg viewBox="0 0 72 56" className={styles.flowIcon} fill="none" aria-hidden="true">
        <circle cx="20" cy="22" r="7" fill="#175894" />
        <path d="M8 44c0-8 24-8 24 0" fill="#175894" />
        <circle cx="52" cy="22" r="7" fill="#175894" />
        <path d="M40 44c0-8 24-8 24 0" fill="#175894" />
        <circle cx="36" cy="18" r="8.5" fill="#0d3562" />
        <path d="M21 46c0-10 30-10 30 0" fill="#0d3562" />
      </svg>
    );
  }
  if (step === 'portal') {
    return (
      <svg viewBox="0 0 72 56" className={styles.flowIcon} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="42" height="30" rx="3" fill="#0d3562" />
        <rect x="12" y="12" width="34" height="21" rx="1.5" fill="#9fd3f5" />
        <path d="M23 38h12l3 6H20l3-6z" fill="#46698f" />
        <rect x="46" y="18" width="18" height="29" rx="3" fill="#0d3562" stroke="#fff" strokeWidth="1.5" />
        <rect x="49" y="22" width="12" height="19" rx="1" fill="#5bb2e8" />
        <circle cx="55" cy="44" r="1.3" fill="#fff" />
      </svg>
    );
  }
  if (step === 'cloud') {
    return (
      <svg viewBox="0 0 72 56" className={styles.flowIcon} fill="none" aria-hidden="true">
        <path
          d="M22 44h30a11 11 0 0 0 1.5-21.9A15 15 0 0 0 24.8 18 12.5 12.5 0 0 0 22 44z"
          fill="#114b86"
        />
        <path d="M36 39V23m0 0l-6 6m6-6l6 6" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (step === 'db') {
    return (
      <svg viewBox="0 0 72 56" className={styles.flowIcon} fill="none" aria-hidden="true">
        <ellipse cx="36" cy="13" rx="18" ry="6.5" fill="#124c87" />
        <path d="M18 13v10c0 3.6 8 6.5 18 6.5s18-2.9 18-6.5V13" fill="#124c87" />
        <path d="M18 23v10c0 3.6 8 6.5 18 6.5s18-2.9 18-6.5V23" fill="#0d3562" />
        <path d="M18 33v9c0 3.6 8 6.5 18 6.5s18-2.9 18-6.5v-9" fill="#0d3562" />
        <ellipse cx="36" cy="13" rx="18" ry="6.5" stroke="#dff0fc" strokeWidth="1.5" />
        <path d="M18 23c0 3.6 8 6.5 18 6.5s18-2.9 18-6.5M18 33c0 3.6 8 6.5 18 6.5s18-2.9 18-6.5" stroke="#dff0fc" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 72 56" className={styles.flowIcon} fill="none" aria-hidden="true">
      <path d="M20 6h22l10 10v32a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" fill="#e9f4fc" stroke="#0d3562" strokeWidth="2.5" />
      <path d="M42 6v10h10" stroke="#0d3562" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M24 22h18M24 29h18M24 36h12" stroke="#165792" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="40" r="9" fill="#0d3562" />
      <path d="M46 40l2.8 2.8 5.2-5.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanStepIllustration({ step }: { step: 1 | 2 | 3 | 4 }) {
  if (step === 1) {
    return (
      <svg viewBox="0 0 90 64" className={styles.planIllustration} fill="none" aria-hidden="true">
        <rect x="14" y="10" width="52" height="34" rx="4" fill="#0f3764" />
        <rect x="18" y="14" width="44" height="26" rx="2" fill="#9ad1f5" />
        <path d="M6 44h68l-5 6H11l-5-6z" fill="#355679" />
        {/* Gear */}
        <circle cx="66" cy="38" r="11" fill="#0b2d53" />
        <circle cx="66" cy="38" r="4.5" fill="#e4f2fc" />
        <path
          d="M66 24v4M66 48v4M52 38h4M76 38h4M56 28l3 3M73 45l3 3M76 28l-3 3M59 45l-3 3"
          stroke="#0b2d53"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg viewBox="0 0 90 64" className={styles.planIllustration} fill="none" aria-hidden="true">
        <ellipse cx="36" cy="14" rx="18" ry="6" fill="#0f3968" />
        <path d="M18 14v28c0 3.5 8 6 18 6s18-2.5 18-6V14" fill="#0f3968" />
        <ellipse cx="36" cy="14" rx="18" ry="6" stroke="#dceefb" strokeWidth="1.5" />
        <path d="M18 24c0 3.5 8 6 18 6s18-2.5 18-6M18 34c0 3.5 8 6 18 6s18-2.5 18-6" stroke="#dceefb" strokeWidth="1.5" />
        {/* Person badge */}
        <circle cx="62" cy="33" r="7" fill="#1763a6" stroke="#e4f2fc" strokeWidth="1.5" />
        <path d="M50 53c0-8 24-8 24 0" fill="#1763a6" stroke="#e4f2fc" strokeWidth="1.5" />
      </svg>
    );
  }
  if (step === 3) {
    return (
      <svg viewBox="0 0 90 64" className={styles.planIllustration} fill="none" aria-hidden="true">
        <rect x="28" y="4" width="34" height="56" rx="5" fill="#0d3562" />
        <rect x="32" y="10" width="26" height="42" rx="2" fill="#2c8bd1" />
        <circle cx="45" cy="31" r="10" fill="#a5d836" />
        <path d="M38 25c4.5 2.5 4.5 9.5 0 12M52 25c-4.5 2.5-4.5 9.5 0 12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="45" cy="56" r="2" fill="#c7e2f8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 90 64" className={styles.planIllustration} fill="none" aria-hidden="true">
      <path
        d="M45 6L23 15v15c0 14 9.2 24.4 22 28 12.8-3.6 22-14 22-28V15L45 6z"
        fill="#0d3562"
      />
      <rect x="36" y="29" width="18" height="14" rx="2.5" fill="#fff" />
      <path d="M40 29v-4a5 5 0 0 1 10 0v4" stroke="#fff" strokeWidth="2.8" />
      <circle cx="45" cy="35" r="2" fill="#0d3562" />
      <path d="M45 37v3.5" stroke="#0d3562" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TrophyIllustration() {
  return (
    <svg viewBox="0 0 64 64" className={styles.trophyIcon} fill="none" aria-hidden="true">
      <path d="M18 14h28v12c0 9-6.2 16-14 16s-14-7-14-16V14z" fill="#f7bd2b" />
      <path d="M18 18H10c0 9 4 13 9 13M46 18h8c0 9-4 13-9 13" stroke="#f7bd2b" strokeWidth="4" strokeLinecap="round" />
      <rect x="29" y="41" width="6" height="9" fill="#d99a16" />
      <rect x="20" y="50" width="24" height="6" rx="2" fill="#f7bd2b" />
      <polygon points="32,20 34.2,24.6 39.2,25.3 35.6,28.8 36.5,33.8 32,31.4 27.5,33.8 28.4,28.8 24.8,25.3 29.8,24.6" fill="#fff4cc" />
    </svg>
  );
}

export interface TechEvidenceItem {
  src: string;
  badge: string;
  title: string;
  category: string;
  description: string;
  findingTag: string;
}

const evidenceItems: TechEvidenceItem[] = [
  {
    src: '/nueva1.jpeg',
    badge: 'Evidencia TI #1 · Hardware y Exportación Excel',
    title: 'Terminal Operativa, Anexo Telefónico y Exportación a Hojas de Cálculo',
    category: 'Infraestructura Tecnológica AS-IS',
    description:
      'Puesto de trabajo en la Oficina de Deportes equipado con monitor Samsung, periféricos alámbricos Logitech y teléfono fijo Samsung junto a la mampara institucional. En pantalla se observa la grilla de canchas (05 a 10, bloque de Academia Adultos) y botones rojos de descarga directa a archivos Excel (X), confirmando la fragmentación de datos locales.',
    findingTag: 'Brecha: Papel, Excel y sistema no sincronizados',
  },
  {
    src: '/nueva2.jpeg',
    badge: 'Evidencia TI #2 · Software Interno y Red Local',
    title: 'Módulo Web "OnDepor" en Oficina de Deportes (Sede Malecón 28 de Julio)',
    category: 'Digitalización Parcial y Entorno de Red',
    description:
      'Vista del sistema interno ejecutado en navegador sobre Windows 11 para las sedes de Tenis de Mesa y Tennis (Sábado 21 de Febrero 2026, canchas 01 a 10). Al fondo se aprecia el rotulado "OFICINA DE DEPORTES - CTTM" y el cableado de red local. Evidencia digitalización parcial para consulta de turnos, pero sin autoservicio de inscripción ni pagos en línea.',
    findingTag: 'Diagnóstico: Digitalización parcial (DMM Nivel 1)',
  },
  {
    src: '/nueva3.jpeg?v=2',
    badge: 'Evidencia TI #3 · Comprobante Físico (Código 2989)',
    title: 'Ficha Física de Matrícula y Pago sobre Teclado (Caso Invitado / No Socio)',
    category: 'Persistencia del Papel y Digitación Manual',
    description:
      'Ficha física de "Tenis Menores" correspondiente a la alumna Emilia Carrillo Peña (10 años, condición: Invitado / No socio, Código 2989), con días circulados a mano (Martes, Jueves y Viernes de 4 a 6 pm), pago manual de S/ 850.00 (08/01/2026) y sello de "COBRADO - 09 ENE 2026" por Enma Díaz O., reposando sobre el teclado para su posterior transcripción manual.',
    findingTag: 'Brecha: Digitación manual y riesgo de sobrecupo',
  },
];

export default function TechInfrastructureDiagnosis({
  onSelectImage,
}: {
  onSelectImage?: (img: { src: string; title: string; category: string; description: string }) => void;
}) {
  return (
    <section
      id="infraestructura-tecnologica"
      className={styles.section}
      aria-labelledby="tech-infra-title"
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-corporate-blue text-xs font-bold rounded-md uppercase tracking-wider mb-2">
          <i className="fas fa-server"></i> Evaluación de Plataforma y Datos
        </div>
        <h2 id="tech-infra-title" className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
          Diagnóstico de Infraestructura Tecnológica
        </h2>
        <p className="text-slate-600 mt-2 text-base md:text-lg max-w-3xl">
          Esquema integral de la situación tecnológica actual (AS-IS), brechas críticas, arquitectura propuesta (TO-BE) y hoja de ruta hacia una plataforma 24/7.
        </p>
      </div>

      <div className={styles.board}>
        {/* ENCABEZADO DEL ESQUEMA */}
        <header className={styles.banner}>
          <TennisBannerIllustration />
          <div className={styles.bannerDivider} aria-hidden="true" />
          <div className={styles.bannerHeading}>
            <h3>Diagnóstico de Infraestructura Tecnológica</h3>
            <p>Club Tennis Las Terrazas · Miraflores</p>
          </div>
          <div className={styles.bannerStripes} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </header>

        <div className={styles.body}>
          {/* 1. SITUACIÓN ACTUAL (AS-IS) */}
          <div className={styles.panel}>
            <div className={styles.tabHeader}>1. Situación Actual (AS-IS)</div>
            <div className={styles.panelCard}>
              <div className={styles.asisGrid}>
                <AsIsIllustration />

                <ul className={styles.bulletList}>
                  <li>Puesto administrativo con computadora y digitación manual.</li>
                  <li>Software administrativo existente o legacy.</li>
                  <li>Hojas de cálculo locales y datos fragmentados.</li>
                  <li>Fichas, boletas y comprobantes físicos.</li>
                  <li>Soporte TI: red local, software administrativo e intranet.</li>
                </ul>

                <div className={styles.warningBox} role="note">
                  <WarningIcon />
                  <p>
                    El sitio no detalla inventario de equipos, servidores, capacidad de red ni especificaciones; se requiere auditoría técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. PRINCIPALES BRECHAS Y RIESGOS */}
          <div className={styles.panel}>
            <div className={styles.tabHeader}>2. Principales Brechas y Riesgos</div>
            <div className={styles.panelCard}>
              <div className={styles.risksGrid}>
                <article className={`${styles.riskCard} ${styles.riskBlue}`}>
                  <h4 className={styles.riskHeader}>Integración</h4>
                  <div className={styles.riskBody}>
                    <RiskIcon type="integration" />
                    <p>Papel, Excel y sistema no sincronizados.</p>
                  </div>
                </article>

                <article className={`${styles.riskCard} ${styles.riskTeal}`}>
                  <h4 className={styles.riskHeader}>Continuidad</h4>
                  <div className={styles.riskBody}>
                    <RiskIcon type="continuity" />
                    <p>Dependencia del puesto y del personal, respaldos y recuperación por definir.</p>
                  </div>
                </article>

                <article className={`${styles.riskCard} ${styles.riskBlue}`}>
                  <h4 className={styles.riskHeader}>Seguridad</h4>
                  <div className={styles.riskBody}>
                    <RiskIcon type="security" />
                    <p>Controles de acceso, protección de datos y trazabilidad por fortalecer.</p>
                  </div>
                </article>

                <article className={`${styles.riskCard} ${styles.riskTeal}`}>
                  <h4 className={styles.riskHeader}>Eficiencia</h4>
                  <div className={styles.riskBody}>
                    <RiskIcon type="efficiency" />
                    <p>Digitación manual, colas y riesgo de duplicidad o sobrecupo.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* FILA MEDIA: 3. DIAGNÓSTICO & 4. INFRAESTRUCTURA PROPUESTA (TO-BE) */}
          <div className={styles.middleRow}>
            {/* 3. DIAGNÓSTICO */}
            <div className={styles.panel}>
              <div className={styles.tabHeader}>3. Diagnóstico</div>
              <div className={styles.panelCard}>
                <div className={styles.diagGrid}>
                  <DiagnosticoClipboardIllustration />
                  <ul className={styles.bulletList}>
                    <li>Infraestructura física y herramientas existentes con digitalización parcial.</li>
                    <li>Gobernanza de datos: nivel inicial (DMM 1, según diagnóstico del proyecto).</li>
                    <li>No hay evidencia suficiente en el sitio para calificar hardware, conectividad o ciberseguridad.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. INFRAESTRUCTURA PROPUESTA (TO-BE) */}
            <div className={styles.panel}>
              <div className={styles.tabHeader}>4. Infraestructura Propuesta (TO-BE)</div>
              <div className={styles.panelCard}>
                <div>
                  <div className={styles.tobeTopBadgeWrap}>
                    <span className={styles.tobeBadge}>Propuesta, no implementación confirmada</span>
                  </div>

                  <div className={styles.flowWrap}>
                    <div className={styles.flowStep}>
                      <FlowNodeIcon step="socio" />
                      <div className={styles.flowLabel}>Socio</div>
                    </div>

                    <div className={styles.flowStep}>
                      <FlowNodeIcon step="portal" />
                      <div className={styles.flowLabel}>Portal web / App móvil</div>
                    </div>

                    <div className={styles.flowStep}>
                      <FlowNodeIcon step="cloud" />
                      <div className={styles.flowLabel}>Servicios en la nube / API</div>
                    </div>

                    <div className={styles.flowStep}>
                      <FlowNodeIcon step="db" />
                      <div className={styles.flowLabel}>Base de datos centralizada</div>
                      <div className={styles.gatewayConnector}>
                        <span className={styles.gatewayArrows} aria-hidden="true">↑↓</span>
                        <div className={styles.gatewayBox}>
                          <svg viewBox="0 0 28 20" className={styles.gatewayIcon} fill="none" aria-hidden="true">
                            <rect x="1" y="2" width="26" height="16" rx="2.5" fill="#0d3562" />
                            <rect x="1" y="6" width="26" height="3.5" fill="#7fc4f0" />
                            <rect x="4" y="12" width="7" height="2.5" rx="1" fill="#fff" />
                          </svg>
                          <span>
                            Pasarela de pago<br />
                            (Niubiz / Izipay / Culqi)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.flowStep}>
                      <FlowNodeIcon step="confirm" />
                      <div className={styles.flowLabel}>Confirmación y comprobante digital</div>
                    </div>
                  </div>
                </div>

                <div className={styles.capabilitiesBar}>
                  <svg viewBox="0 0 32 32" className={styles.capabilitiesIcon} fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="14" fill="#1ea664" />
                    <path d="M10 16.5l4 4 8.5-9" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="m-0">
                    <strong>Capacidades clave:</strong> control de cupos en tiempo real, acceso por roles y cifrado, copias de seguridad y recuperación, monitoreo, soporte y mantenimiento, e integración de matrícula, socios y pagos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. PLAN DE MEJORA */}
          <div className={styles.panel}>
            <div className={styles.tabHeader}>5. Plan de Mejora</div>
            <div className={styles.panelCard}>
              <div className={styles.planGrid}>
                <div className={styles.planCard}>
                  <div className={styles.planCardTop}>
                    <span className={styles.planNumber}>1</span>
                    <p>Inventariar hardware, red, software y licencias.</p>
                  </div>
                  <PlanStepIllustration step={1} />
                </div>

                <div className={styles.planCard}>
                  <div className={styles.planCardTop}>
                    <span className={styles.planNumber}>2</span>
                    <p>Centralizar datos y definir responsables.</p>
                  </div>
                  <PlanStepIllustration step={2} />
                </div>

                <div className={styles.planCard}>
                  <div className={styles.planCardTop}>
                    <span className={styles.planNumber}>3</span>
                    <p>Implementar portal/app e integración de pagos.</p>
                  </div>
                  <PlanStepIllustration step={3} />
                </div>

                <div className={styles.planCard}>
                  <div className={styles.planCardTop}>
                    <span className={styles.planNumber}>4</span>
                    <p>Establecer seguridad, respaldos, monitoreo y capacitación.</p>
                  </div>
                  <PlanStepIllustration step={4} />
                </div>
              </div>
            </div>
          </div>

          {/* 6. EVIDENCIA FOTOGRÁFICA DE CAMPO */}
          <div className={styles.panel}>
            <div className={styles.tabHeader}>6. Evidencia Fotográfica en Campo (Auditoría TI)</div>
            <div className={styles.panelCard}>
              <div className={styles.evidenceGrid}>
                {evidenceItems.map((item) => (
                  <article
                    key={item.src}
                    className={styles.evidenceCard}
                    onClick={() =>
                      onSelectImage?.({
                        src: item.src,
                        title: item.title,
                        category: item.category,
                        description: item.description,
                      })
                    }
                  >
                    <div className={styles.evidenceImgWrap}>
                      <img src={item.src} alt={item.title} className={styles.evidenceImg} />
                      <span className={styles.evidenceBadge}>{item.badge}</span>
                      <span className={styles.evidenceZoomPill}>
                        <i className="fas fa-search-plus mr-1" aria-hidden="true"></i> Ampliar evidencia
                      </span>
                    </div>
                    <div className={styles.evidenceContent}>
                      <div>
                        <h4 className={styles.evidenceTitle}>{item.title}</h4>
                        <p className={styles.evidenceDesc}>{item.description}</p>
                      </div>
                      <div className={styles.evidenceMeta}>
                        <span>
                          <i className="fas fa-check-circle mr-1" aria-hidden="true"></i>
                          {item.findingTag}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* BANNER OBJETIVO */}
          <div className={styles.goalBanner}>
            <TrophyIllustration />
            <p className={styles.goalText}>
              <span className={styles.goalHighlight}>Objetivo:</span> una plataforma integrada, segura y disponible 24/7 que facilite la inscripción y mejore la gestión deportiva.
            </p>
          </div>
        </div>

        <p className={styles.sourceFooter}>
          Fuente: blog del proyecto Club Terrazas – Diagnóstico CMMI &amp; DMM, diagnóstico institucional y sección Cadena de Valor.
        </p>
      </div>
    </section>
  );
}
