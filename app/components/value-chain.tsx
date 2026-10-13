import type { ReactNode } from 'react';
import styles from './value-chain.module.css';

type ChainIconName = 'building' | 'people' | 'technology' | 'partners' | 'entry' | 'operations' | 'output' | 'marketing' | 'service';

function ChainIcon({ name }: { name: ChainIconName }) {
  const paths: Record<ChainIconName, ReactNode> = {
    building: <><path d="m3 9 9-6 9 6M4 10h16M5 20h14M3 21h18M7 10v10M12 10v10M17 10v10" /></>,
    people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-4a6 6 0 0 1 12 0v4M16 4a3 3 0 0 1 0 6M17 13a5 5 0 0 1 4 5v3" /></>,
    technology: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4m-3-9-2-2 2-2m6 4 2-2-2-2" /></>,
    partners: <><path d="m3 8 4-3 5 2 4-2 5 3-4 9-5 3-8-6zM7 6l-4 9M17 6l4 9M13 7l-5 5c-1 2 1 3 3 1l2-2 5 4M10 15l4 3M12 13l4 3" /></>,
    entry: <><path d="M6 3h9l4 4v14H6zM15 3v5h4M2 13h11m-3-3 3 3-3 3M9 18h6" /></>,
    operations: <><path d="m10 2 4 0 1 3 3 2 3-1 2 4-3 2v3l2 2-2 4-3-1-3 2-1 2h-4l-1-3-3-2-3 1-2-4 2-2v-3L0 9l2-4 3 1 3-2z" transform="translate(1 0) scale(.92)" /><circle cx="12" cy="12" r="4" /></>,
    output: <><rect x="3" y="5" width="18" height="15" rx="2" /><path d="m3 7 9 7 9-7M8 3h8M8 17l2 2 5-5" /></>,
    marketing: <><path d="m4 10 14-6v15L4 14zM18 3v17M4 10H2v4h2M6 15l2 6h4l-2-5M21 6l2-2M21 12h3M21 18l2 2" /></>,
    service: <><path d="M4 13v-2a8 8 0 0 1 16 0v2M20 17v2l-7 2" /><rect x="2" y="11" width="4" height="7" rx="2" /><rect x="18" y="11" width="4" height="7" rx="2" /><path d="M8 12v-1a4 4 0 0 1 8 0v1M9 16c2 2 4 2 6 0" /></>,
  };

  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}

const supportActivities: { title: string; icon: ChainIconName; description: string }[] = [
  {
    title: 'Infraestructura',
    icon: 'building',
    description: 'Junta Directiva y Comité de Deportes: aprobación de políticas, reglas de inscripción, tarifas y criterios de cancelación. La Oficina de Deportes supervisa el proceso.',
  },
  {
    title: 'Talento humano',
    icon: 'people',
    description: 'Coordinadores, entrenadores y equipo de soporte: gestión de talleres, capacitación del personal y orientación a socios de todas las edades.',
  },
  {
    title: 'Tecnología',
    icon: 'technology',
    description: 'Plataforma web y app, nube, base de datos centralizada, UI/UX accesible y APIs de pago; integración del catálogo, las inscripciones y el control de cupos.',
  },
  {
    title: 'Aprovisionamiento',
    icon: 'partners',
    description: 'Proveedor de software o casa de desarrollo (SaaS o a medida), servicios de hosting y pasarelas de pago contempladas: Niubiz, Izipay y Culqi.',
  },
];

const primaryActivities: { title: string; icon: ChainIconName; items: string[]; owner: string }[] = [
  {
    title: 'Entrada',
    icon: 'entry',
    items: ['Catálogo de talleres, horarios, profesores y sedes', 'Datos de socios y familiares', 'Tarifas, aforo y reglas aprobadas'],
    owner: 'Oficina de Deportes',
  },
  {
    title: 'Operaciones',
    icon: 'operations',
    items: ['Validación del socio y de los cupos', 'Inscripción y actualización automática del aforo', 'Pago integrado', 'Objetivo: 24/7 y menos de 2 min'],
    owner: 'Sistema web · Deportes · Finanzas',
  },
  {
    title: 'Salida',
    icon: 'output',
    items: ['Confirmación inmediata y comprobante', 'Padrón y reporte de inscritos actualizado', 'Recordatorios y renovaciones'],
    owner: 'Sistema web · Oficina de Deportes',
  },
  {
    title: 'Marketing',
    icon: 'marketing',
    items: ['Diseño y validación de publicaciones', 'App y portal de socios', 'Email y boletín institucional', 'WhatsApp, SMS y pantallas informativas'],
    owner: 'Marketing',
  },
  {
    title: 'Servicio',
    icon: 'service',
    items: ['Autoservicio y chatbot', 'Soporte administrativo ágil', 'Orientación y capacitación', 'Aviso de cupo lleno o lista de espera'],
    owner: 'Soporte · Oficina de Deportes',
  },
];

const dataControls = [
  {
    title: 'Gobierno de datos',
    description: 'Definir responsables de los datos de socios, talleres y pagos; permisos por rol y reglas para proteger la información personal.',
    outcome: 'Responsabilidad y acceso controlado',
  },
  {
    title: 'Calidad de datos',
    description: 'Validar socios y datos obligatorios, evitar inscripciones duplicadas y conciliar el estado del pago con la matrícula.',
    outcome: 'Registros completos y consistentes',
  },
  {
    title: 'Operación de datos',
    description: 'Actualizar cupos al registrar la inscripción, conservar la trazabilidad de cambios y gestionar respaldos y recuperación.',
    outcome: 'Aforo confiable y continuidad',
  },
  {
    title: 'Plataforma y arquitectura',
    description: 'Mantener una fuente central de información e integrar portal, app y pagos para sustituir los archivos de Excel dispersos.',
    outcome: 'Una fuente de datos compartida',
  },
];

export default function ValueChain() {
  return (
    <section id="cadena-de-valor" className={styles.section} aria-labelledby="value-chain-section-title">
      <div className="mb-8">
        <h2 id="value-chain-section-title" className="font-bold text-3xl text-slate-900 tracking-tight">Cadena de Valor</h2>
        <p className="text-slate-500 mt-2 text-lg">Cómo la inscripción digital genera valor para el socio y el club</p>
      </div>

      <div className={styles.diagram}>
        <header className={styles.header}>
          <span className={styles.badge}>Modelo propuesto · TO-BE</span>
          <h3>Automatización de inscripción a talleres deportivos</h3>
          <p>Club Terrazas de Miraflores · CMMI y DMM</p>
        </header>

        <section aria-labelledby="value-chain-support-title" className={styles.group}>
          <h3 id="value-chain-support-title" className={styles.groupTitle}>Actividades de apoyo</h3>
          <div className={styles.supportActivities}>
            {supportActivities.map(({ title, icon, description }) => (
              <article className={styles.supportRow} key={title}>
                <h4><ChainIcon name={icon} />{title}</h4>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="value-chain-primary-title" className={styles.group}>
          <h3 id="value-chain-primary-title" className={styles.groupTitle}>Actividades primarias</h3>
          <div className={styles.primaryActivities}>
            {primaryActivities.map(({ title, icon, items, owner }) => (
              <article className={styles.primaryCard} key={title}>
                <ChainIcon name={icon} />
                <h4>{title}</h4>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                <p className={styles.owner}><span>Responsable</span>{owner}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="value-chain-margin-title" className={styles.margin}>
          <h3 id="value-chain-margin-title">Margen de valor</h3>
          <div className={styles.economics}>
            <div>
              <h4>Ingresos</h4>
              <p>Cuotas de talleres deportivos y cargos por cancelación tardía, si la política aprobada los contempla.</p>
            </div>
            <div>
              <h4>Eficiencia operativa</h4>
              <p>Ahorro esperado por menos tareas manuales, colas, errores de registro y reprocesos.</p>
            </div>
            <div>
              <h4>Costos</h4>
              <p>Desarrollo, hardware, hosting, mantenimiento, comisiones de pago, marketing interno y capacitación.</p>
            </div>
          </div>
          <p className={styles.valueOutcome}><strong>Valor para el socio:</strong> acceso simple, cupos visibles y confirmación oportuna. <strong>Valor para el club:</strong> información confiable y más tiempo para la gestión deportiva.</p>
        </section>

        <section aria-labelledby="value-chain-dmm-title" className={styles.group}>
          <h3 id="value-chain-dmm-title" className={styles.groupTitle}>Lente DMM sobre datos de socios, cupos y pagos</h3>
          <p className={styles.groupIntro}>Controles propuestos para atender las brechas de datos identificadas en el AS-IS.</p>
          <div className={styles.dataControls}>
            {dataControls.map(({ title, description, outcome }) => (
              <article className={styles.dataCard} key={title}>
                <h4>{title}</h4>
                <p>{description}</p>
                <span>{outcome}</span>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="value-chain-cmmi-title" className={styles.cmmi}>
          <div>
            <span className={styles.eyebrow}>Contribución a la meta del proyecto</span>
            <h3 id="value-chain-cmmi-title">CMMI · Nivel 3: proceso definido</h3>
            <p>Estandarizar el flujo de inscripción, asignar responsables, documentar validaciones y excepciones, y supervisar el proceso con reportes actualizados.</p>
          </div>
          <div className={styles.indicators}>
            <h4>Indicadores sugeridos</h4>
            <ul>
              <li>Tiempo de inscripción</li>
              <li>Porcentaje de inscripciones digitales</li>
              <li>Incidentes de sobrecupo o duplicidad</li>
              <li>Pagos conciliados con inscripciones</li>
            </ul>
          </div>
        </section>

        <p className={styles.note}>La cadena describe la propuesta de mejora del blog. Los beneficios y la meta de inscripción en menos de 2 minutos deberán validarse durante la implementación.</p>
      </div>
    </section>
  );
}
