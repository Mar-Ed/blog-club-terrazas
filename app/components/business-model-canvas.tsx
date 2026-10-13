import type { ReactNode } from 'react';
import styles from './business-model-canvas.module.css';

type IconName =
  | 'people' | 'team' | 'gear' | 'catalog' | 'training' | 'database'
  | 'software' | 'support' | 'handshake' | 'phone' | 'laptop' | 'email'
  | 'whatsapp' | 'robot' | 'bell' | 'money' | 'refund' | 'clock'
  | 'chart' | 'megaphone' | 'building' | 'document' | 'globe';

type CanvasItem = {
  icon: IconName;
  label: string;
  detail?: string;
};

// All illustrations are inline vectors; the reference image is not embedded.
function CanvasIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const drawings: Record<IconName, ReactNode> = {
    people: <>
      <path fill="var(--canvas-blue)" d="M3 34v-7c0-6 14-6 14 0v7z" />
      <path fill="var(--canvas-pink)" d="M15 34v-8c0-7 14-7 14 0v8z" />
      <path fill="var(--canvas-green)" d="M27 34v-7c0-6 11-6 11 0v7z" />
      <circle cx="10" cy="16" r="6" fill="var(--canvas-skin)" />
      <circle cx="22" cy="14" r="6.5" fill="var(--canvas-skin)" />
      <circle cx="33" cy="17" r="5" fill="var(--canvas-skin)" />
      <path d="M4 15c-1-10 13-10 12 0l-4-4-4 3zM16 13c-1-10 14-10 13 2l-4-5-5 3zM28 16c-1-8 11-8 10 0l-5-3z" fill="var(--canvas-brown)" />
      <path d="m19 24 3 4 3-4M10 27v7M33 28v6" />
    </>,
    team: <>
      <path fill="var(--canvas-gold)" d="M3 34v-7c0-6 13-6 13 0v7z" />
      <path fill="var(--canvas-green)" d="M25 34v-7c0-6 12-6 12 0v7z" />
      <path fill="var(--canvas-blue)" d="M12 36V25c0-7 16-7 16 0v11z" />
      <circle cx="9" cy="17" r="5" fill="var(--canvas-skin)" />
      <circle cx="31" cy="17" r="5" fill="var(--canvas-skin)" />
      <circle cx="20" cy="12" r="6" fill="var(--canvas-skin)" />
      <path d="m17 23 3 4 3-4M15 10c0-7 11-7 11 0l-5-2z" fill="var(--canvas-brown)" />
    </>,
    gear: <>
      <path fill="var(--canvas-gray)" d="m16 4 8 0 1 5 4 2 5-2 4 7-4 4v4l4 3-4 7-5-2-4 2-1 5h-8l-1-5-4-2-5 2-4-7 4-3v-4l-4-4 4-7 5 2 4-2z" />
      <circle cx="20" cy="22" r="9" fill="var(--canvas-paper)" />
      <circle cx="20" cy="22" r="4" fill="var(--canvas-gray)" />
    </>,
    catalog: <>
      <rect x="4" y="5" width="32" height="30" rx="2" fill="var(--canvas-paper)" />
      <path fill="var(--canvas-blue)" d="M4 5h32v8H4z" />
      <path d="M10 3v5M30 3v5M9 19h8M9 24h8M9 29h8M22 19h8M22 24h8M22 29h8" />
    </>,
    training: <>
      <rect x="3" y="5" width="34" height="24" rx="2" fill="var(--canvas-blue)" />
      <rect x="6" y="8" width="28" height="18" fill="var(--canvas-paper)" />
      <circle cx="20" cy="17" r="6" fill="var(--canvas-gold)" />
      <path d="m20 9 1 4 4 1-2 3 1 4-4-1-4 1 1-4-2-3 4-1zM16 29v5M24 29v5M11 35h18" />
    </>,
    database: <>
      <path fill="var(--canvas-blue)" d="M8 10v21c0 7 24 7 24 0V10z" />
      <ellipse cx="20" cy="10" rx="12" ry="5" fill="var(--canvas-paper)" />
      <path d="M8 17c0 7 24 7 24 0M8 24c0 7 24 7 24 0" />
      <circle cx="28" cy="29" r="1" fill="var(--canvas-paper)" stroke="none" />
    </>,
    software: <>
      <rect x="3" y="4" width="29" height="25" rx="2" fill="var(--canvas-paper)" />
      <path fill="var(--canvas-blue)" d="M3 4h29v6H3z" />
      <path d="m13 16-4 4 4 4M21 16l4 4-4 4M18 15l-3 10M8 34h20M14 29v5M23 29v5" />
      <path fill="var(--canvas-gold)" d="m31 22 7 3-2 10-7 2-3-8z" />
      <path d="m29 29 3 3 3-6" />
    </>,
    support: <>
      <circle cx="20" cy="11" r="7" fill="var(--canvas-skin)" />
      <path d="M5 35v-7c0-13 30-13 30 0v7z" fill="var(--canvas-green)" />
      <path d="M9 14v-4c0-13 22-13 22 0v4M31 14v6l-8 2" />
      <rect x="7" y="12" width="5" height="9" rx="2" fill="var(--canvas-blue)" />
      <rect x="28" y="12" width="5" height="9" rx="2" fill="var(--canvas-blue)" />
      <path d="m15 26 5 5 5-5M20 31v4" />
    </>,
    handshake: <>
      <path fill="var(--canvas-skin)" d="m7 14 8-5 6 3 5-1 10 10-9 10-5 3-13-11z" />
      <path fill="var(--canvas-skin)" d="m17 10 7-1 10 8-5 5-9-7-5 5c-4 1-6-2-4-4z" />
      <path d="m16 23 10 8M20 20l10 8M24 17l9 7M12 27l4-5c2-2 5 1 3 3l-3 5M17 31l4-5c2-2 5 1 3 3l-3 4" />
      <path fill="var(--canvas-blue)" d="m2 8 7 3-5 14-6-3zM32 8l7-3 5 15-7 3z" />
      <path fill="var(--canvas-paper)" d="m8 12 3 1-4 10-3-1zM30 10l3-1 4 11-3 1z" />
    </>,
    phone: <>
      <rect x="10" y="3" width="20" height="34" rx="3" fill="var(--canvas-gray)" />
      <path fill="var(--canvas-blue)" d="M12 8h16v23H12z" />
      <path d="M16 5h8M18 34h4" />
    </>,
    laptop: <>
      <rect x="7" y="6" width="26" height="23" rx="2" fill="var(--canvas-gray)" />
      <rect x="10" y="9" width="20" height="16" fill="var(--canvas-blue)" />
      <path fill="var(--canvas-paper)" d="M7 29 2 34h36l-5-5z" />
      <path d="M15 31h10" />
    </>,
    email: <>
      <rect x="3" y="12" width="34" height="24" rx="2" fill="var(--canvas-gold)" />
      <path fill="var(--canvas-paper)" d="M9 16V4h22v12L20 25z" />
      <path d="m3 13 17 12 17-12M4 35l12-13M36 35 24 22M14 9h12M14 13h12M14 17h8" />
    </>,
    whatsapp: <>
      <path fill="var(--canvas-green)" d="M36 19c0 17-19 22-28 13l-6 3 2-8C-5 11 11-1 25 4c7 2 11 8 11 15z" />
      <path fill="var(--canvas-paper)" stroke="none" d="m12 10 5 6-3 3c2 4 4 6 8 7l3-4 6 3c-3 11-18 1-21-6-2-4-2-7 2-9z" />
    </>,
    robot: <>
      <path d="M20 3v5M5 17H2v10h4M35 17h3v10h-4" />
      <circle cx="20" cy="3" r="2" fill="var(--canvas-green)" />
      <rect x="6" y="9" width="28" height="24" rx="7" fill="var(--canvas-paper)" />
      <rect x="10" y="14" width="20" height="10" rx="4" fill="var(--canvas-blue)" />
      <circle cx="15" cy="19" r="2" fill="var(--canvas-paper)" />
      <circle cx="25" cy="19" r="2" fill="var(--canvas-paper)" />
      <path d="M15 28h10M12 33v4M28 33v4" />
    </>,
    bell: <>
      <path fill="var(--canvas-gold)" d="M8 27c4-4 3-7 3-12 0-12 18-12 18 0 0 5-1 8 3 12z" />
      <path d="M5 29h30M16 31c0 7 8 7 8 0M20 3V1" />
      <circle cx="31" cy="9" r="6" fill="var(--canvas-green)" />
      <path d="m28 9 2 2 4-4" />
    </>,
    money: <>
      <path fill="var(--canvas-green)" d="m14 13-4-9h20l-4 9c15 13 14 24-6 24S-1 26 14 13z" />
      <path d="M13 13h14M16 18h8M24 21c-9-6-14 6-4 6s5 10-4 5M20 17v18" />
    </>,
    refund: <>
      <circle cx="24" cy="14" r="10" fill="var(--canvas-gold)" />
      <path d="M24 7v14M28 9c-8-4-10 6-4 5s7 8-4 5" />
      <path fill="var(--canvas-skin)" d="M3 28h9l7-4 10 3c3 1 2 4-1 4h-9l10 2 8-5c4-2 5 2 2 4l-10 6-18-3H3z" />
      <path fill="var(--canvas-blue)" d="M1 26h6v12H1z" />
    </>,
    clock: <>
      <circle cx="20" cy="22" r="15" fill="var(--canvas-paper)" />
      <path d="M16 2h8M20 2v5M30 9l3-3M20 12v10l7 4M9 22h2M29 22h2M20 32v2" />
      <path d="M8 13c5-8 16-9 23-1" stroke="var(--canvas-blue)" strokeWidth="3" />
    </>,
    chart: <>
      <path d="M4 5v31h33" />
      <path fill="var(--canvas-blue)" d="M9 24h5v12H9z" />
      <path fill="var(--canvas-gold)" d="M19 18h5v18h-5z" />
      <path fill="var(--canvas-green)" d="M29 11h5v25h-5z" />
      <path d="m8 18 11-7 6 3L35 4M28 4h7v7" />
    </>,
    megaphone: <>
      <path fill="var(--canvas-blue)" d="m8 16 23-9v25L8 24z" />
      <path fill="var(--canvas-paper)" d="M8 16H3v8h5zM27 8h5v25h-5z" />
      <path fill="var(--canvas-gray)" d="m10 25 4 12h6l-4-14z" />
      <path d="M35 10l4-3M36 20h4M35 30l4 3" />
    </>,
    building: <>
      <path fill="var(--canvas-gray)" d="m2 12 18-10 18 10zM4 33h32v4H4z" />
      <path fill="var(--canvas-paper)" d="M7 14h5v17H7zM18 14h5v17h-5zM29 14h5v17h-5z" />
      <path d="M5 14h31M4 32h32" />
    </>,
    document: <>
      <path fill="var(--canvas-paper)" d="m11 3 23 9-12 26L0 27z" />
      <path fill="var(--canvas-pink)" d="m12 7 11 4-2 5-11-4z" />
      <path d="m9 17 16 6M7 21l16 6M5 25l11 4" />
      <path fill="var(--canvas-blue)" d="m27 24 11 5-3 9-11-5z" />
    </>,
    globe: <>
      <circle cx="20" cy="15" r="12" fill="var(--canvas-green)" />
      <path d="m14 5 3 6-4 4 3 6 4-1 1-7 6-2 2-4M28 17l-4 2 1 5" />
      <path fill="var(--canvas-skin)" d="M3 23c-3 1-2 8 0 11l9 4h5V27c0-4-4-4-4 0v4L7 27v-4c0-3-4-3-4 0zM37 23c3 1 2 8 0 11l-9 4h-5V27c0-4 4-4 4 0v4l6-4v-4c0-3 4-3 4 0z" />
    </>,
  };

  return (
    <svg viewBox="-2 0 44 42" fill="none" stroke="var(--canvas-ink)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${styles.icon} ${className}`} aria-hidden="true" focusable="false">
      {drawings[name]}
    </svg>
  );
}

function ItemList({ items, columns = false }: { items: CanvasItem[]; columns?: boolean }) {
  return (
    <ul className={`${styles.items} ${columns ? styles.twoColumns : ''}`}>
      {items.map(({ icon, label, detail }) => (
        <li className={styles.item} key={label}>
          <CanvasIcon name={icon} />
          <span>{label}{detail && <span className={styles.detail}>{detail}</span>}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ id, title, className = '', children, accent }: {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
  accent?: IconName;
}) {
  return (
    <section className={`${styles.block} ${className}`} aria-labelledby={id}>
      <h4 className={styles.blockTitle} id={id}>{title}</h4>
      {accent && <CanvasIcon name={accent} className={styles.cornerIcon} />}
      {children}
    </section>
  );
}

const channels: CanvasItem[] = [
  { icon: 'phone', label: 'App Móvil Oficial Club Terrazas' },
  { icon: 'laptop', label: 'Portal Web de Socios' },
  { icon: 'email', label: 'Email Institucional y Boletín' },
  { icon: 'whatsapp', label: 'WhatsApp / SMS / Pantallas informativas' },
];

const partners: CanvasItem[] = [
  { icon: 'handshake', label: 'Proveedor de software / Casa de desarrollo', detail: '(SaaS / A medida)' },
  { icon: 'team', label: 'Coordinadores y entrenadores de talleres' },
  { icon: 'software', label: 'Pasarelas de Pago', detail: '(Niubiz, Izipay, Culqi)' },
  { icon: 'building', label: 'Junta Directiva', detail: '(aprobación de políticas)' },
];

function ClubMark() {
  return (
    <svg viewBox="0 0 80 80" className={styles.clubMark} fill="none" aria-hidden="true" focusable="false">
      <path d="M28 15a15 15 0 0 1 27 0" fill="var(--canvas-gold)" />
      <g strokeWidth="4.5">
        <path d="M5 19c26 0 38 20 38 50M5 29c20 0 28 16 28 40M75 19c-25 0-38 20-38 50M75 29c-19 0-28 16-28 40" stroke="#187caf" />
        <path d="M16 10c14 2 21 8 25 13M64 10c-13 2-20 8-24 13M12 39c1 13 5 22 12 30M68 39c-1 13-5 22-12 30M40 40v29" stroke="#358c47" />
      </g>
    </svg>
  );
}

function SportsDecorations() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      <svg className={styles.rackets} viewBox="0 0 150 150" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="canvas-racket-net" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 0h6v6" stroke="#4a98ac" strokeWidth=".6" /></pattern>
        </defs>
        <g transform="rotate(-24 35 45)"><ellipse cx="35" cy="36" rx="22" ry="32" fill="url(#canvas-racket-net)" stroke="#2684ad" strokeWidth="4" /><path d="m27 65 8 23 8-23M35 88v36" stroke="#2684ad" strokeWidth="6" /></g>
        <g transform="rotate(30 88 64)"><ellipse cx="88" cy="47" rx="21" ry="29" fill="url(#canvas-racket-net)" stroke="#d09b54" strokeWidth="4" /><path d="m81 74 7 19 7-19M88 93v34" stroke="#d09b54" strokeWidth="6" /></g>
        <circle cx="25" cy="115" r="24" fill="#ef9859" stroke="#8c502d" strokeWidth="2" /><path d="M1 115h48M25 91v48M9 97c22 3 26 16 29 37M8 133c21-3 29-17 31-35" stroke="#8c502d" strokeWidth="1.5" />
        <circle cx="88" cy="13" r="10" fill="#a6ca59" /><path d="M82 5c8 5-3 9 3 16" stroke="#edf4ba" strokeWidth="2" />
      </svg>
      <svg className={styles.football} viewBox="0 0 70 70" aria-hidden="true" focusable="false">
        <circle cx="35" cy="35" r="30" fill="#fff" stroke="#697a7d" />
        <path d="m35 21 13 9-5 15H27l-5-15zM15 13l8 3-7 14-11-2M52 10l-4 20 15-2M54 58l-11-13-3 19M10 51l17-6-2 17" fill="#26343a" />
        <path d="m23 16 12 5 13-5M16 30l6 0M48 30l9 7M43 45l9 3M27 45l-9-5" fill="none" stroke="#697a7d" />
      </svg>
      {[styles.courtTop, styles.courtBottom].map((className) => (
        <svg className={className} viewBox="0 0 190 120" key={className} aria-hidden="true" focusable="false">
          <rect x="1" y="1" width="188" height="118" fill="#62b483" stroke="#fff" strokeWidth="2" />
          <g fill="none" stroke="#d4f5de" strokeWidth="1.5"><rect x="17" y="13" width="156" height="94" /><path d="M95 13v94M17 33h156M17 87h156M56 33v54M134 33v54M56 60h78" /></g>
        </svg>
      ))}
      <div className={styles.wave} />
      <div className={styles.dots} />
    </div>
  );
}

export default function BusinessModelCanvas() {
  return (
    <section id="modelo-de-negocio" className={styles.section} aria-labelledby="canvas-section-title">
      <div className="mb-8">
        <h2 id="canvas-section-title" className="font-bold text-3xl text-slate-900 tracking-tight">Modelo de Negocio Canvas</h2>
        <p className="text-slate-500 mt-2 text-lg">Automatización de la inscripción a talleres deportivos</p>
      </div>

      <div className={styles.canvas}>
        <SportsDecorations />
        <header className={styles.header}>
          <div className={styles.brand}>
            <ClubMark />
            <span>Club Terrazas<br />de Miraflores</span>
          </div>
          <h3 className={styles.title}>Automatización inscripción<br className={styles.titleBreak} /> talleres deportivos</h3>
        </header>

        <div className={styles.grid}>
          <Block id="canvas-segments" title="Segmentos de clientes" className={styles.segments}>
            <CanvasIcon name="people" className={styles.peopleIllustration} />
            <ItemList items={[
              { icon: 'people', label: 'Socios titulares y familiares', detail: '(todas las edades)' },
              { icon: 'team', label: 'Directiva y Comité de Deportes' },
            ]} />
            <CanvasIcon name="handshake" className={styles.partnerIllustration} />
            <ItemList items={[
              { icon: 'gear', label: 'Proveedor de software / Casa de desarrollo', detail: '(SaaS / A medida)' },
              { icon: 'software', label: 'Pasarelas de Pago', detail: '(Niubiz, Izipay, Culqi)' },
              { icon: 'building', label: 'Coordinadores y entrenadores', detail: '(aprobación de políticas)' },
            ]} />
          </Block>

          <Block id="canvas-activities" title="Actividades clave" className={styles.activities}>
            <ItemList items={[
              { icon: 'gear', label: 'Desarrollo e integración de la plataforma' },
              { icon: 'catalog', label: 'Gestión del catálogo de talleres', detail: '(cursos, tarifas, cupos)' },
              { icon: 'training', label: 'Capacitación y comunicación', detail: '(socios, personal)' },
              { icon: 'gear', label: 'Soporte y mantenimiento' },
            ]} />
          </Block>

          <Block id="canvas-resources" title="Recursos clave" className={styles.resources} accent="database">
            <ItemList items={[
              { icon: 'database', label: 'Infraestructura tecnológica', detail: '(nube, BD, APIs pagos)' },
              { icon: 'software', label: 'Software y UI/UX adaptable', detail: '(accesible para todos)' },
              { icon: 'support', label: 'Equipo de soporte y TI' },
            ]} />
          </Block>

          <Block id="canvas-value" title="Propuesta de valor" className={styles.value}>
            <CanvasIcon name="handshake" className={styles.valueIllustration} />
            <ItemList items={[
              { icon: 'clock', label: 'Inscripción rápida', detail: '(24/7, <2 min)' },
              { icon: 'chart', label: 'Visibilidad de cupos en tiempo real' },
              { icon: 'chart', label: 'Confirmación inmediata y pagos integrados' },
              { icon: 'megaphone', label: 'Eliminación de colas y carga administrativa' },
            ]} />
            <div className={styles.timeIllustration}>
              <CanvasIcon name="clock" />
              <CanvasIcon name="handshake" />
            </div>
          </Block>

          <Block id="canvas-channels" title="Canales" className={styles.channels} accent="laptop">
            <ItemList items={channels} />
          </Block>

          <Block id="canvas-channels-secondary" title="Canales" className={styles.channelsSecondary} accent="phone">
            <ItemList items={channels} />
          </Block>

          <Block id="canvas-relationships" title="Relación con los clientes" className={styles.relationships}>
            <ItemList items={[
              { icon: 'robot', label: 'Autoservicio', detail: '(100% digital e intuitivo)' },
              { icon: 'bell', label: 'Notificaciones personalizadas', detail: '(recordatorios, renovaciones)' },
              { icon: 'support', label: 'Soporte ágil', detail: '(chatbot, administrativo)' },
            ]} />
          </Block>

          <Block id="canvas-income" title="Fuentes de ingresos" className={styles.income} accent="money">
            <ItemList items={[
              { icon: 'money', label: 'Cobro de cuotas de talleres deportivos' },
              { icon: 'refund', label: 'Ahorro de costos por eficiencia operativa' },
              { icon: 'money', label: 'Cargos por cancelación tardía', detail: '(si aplica)' },
            ]} />
          </Block>

          <div className={styles.bottomRow}>
            <Block id="canvas-partners" title="Socios clave" accent="globe">
              <ItemList items={partners} columns />
            </Block>
            <Block id="canvas-costs" title="Estructura de costos" accent="document">
              <ItemList items={[
                { icon: 'document', label: 'Desarrollo e implementación inicial', detail: '(software, hardware)' },
                { icon: 'money', label: 'Comisiones transaccionales', detail: '(pagos)' },
                { icon: 'database', label: 'Costos recurrentes de tecnología', detail: '(hosting, mantenimiento)' },
                { icon: 'chart', label: 'Costos de marketing interno y capacitación' },
              ]} columns />
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}
