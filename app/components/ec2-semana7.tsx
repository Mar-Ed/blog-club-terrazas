// Contenido extraído de "EC2_Semana7_Puntos2y3_Club_Terrazas.pptx"
// Punto 2: Evaluación de procesos (CMMI V2.0) · Punto 3: Diagnóstico de madurez (DMM)
import type { ReactNode } from 'react';

const criterios = [
  { valor: '+800', texto: 'inscripciones simultáneas en periodos de matrícula de 15 días' },
  { valor: '+3,500', texto: 'familias con derecho a las academias deportivas' },
  { valor: 'Papel', texto: 'fichas, sellos y recibos físicos como único soporte' },
  { valor: 'S/ 1,540', texto: 'cobrados a mano en una sola ficha (N° 8281)' },
];

const dmm = [
  {
    dimension: 'Gobierno de datos',
    hoy: 'Sin responsables ni permisos por rol; datos de menores sin protección formal',
    meta: 'Responsables definidos, permisos por rol y cumplimiento de la Ley N° 29733',
  },
  {
    dimension: 'Calidad de datos',
    hoy: 'Fichas manuales sin validación; riesgo de duplicidad y datos desfasados',
    meta: 'Socios validados, sin duplicados y pagos conciliados con la matrícula',
  },
  {
    dimension: 'Operación de datos',
    hoy: 'Cupos actualizados a mano y pérdida física de comprobantes',
    meta: 'Cupos en tiempo real, trazabilidad de cambios y respaldos',
  },
  {
    dimension: 'Plataforma y arquitectura',
    hoy: 'Hojas de cálculo locales y software legacy sin integración',
    meta: 'Fuente única de datos que integra portal, app y pagos',
  },
];

const fases = [
  {
    titulo: 'FASE 1 · Estabilizar',
    nivel: 'Nivel 1 → 2',
    color: 'amber',
    items: [
      'Nombrar al dueño del proceso y a los responsables de datos',
      'Estandarizar la ficha y el procedimiento de inscripción',
      'Centralizar el padrón de alumnos en una sola base',
    ],
  },
  {
    titulo: 'FASE 2 · Automatizar',
    nivel: 'Nivel 2',
    color: 'blue',
    items: [
      'Lanzar portal y app de autoservicio para los socios',
      'Bloquear vacantes en tiempo real',
      'Integrar pasarela de pago y comprobante electrónico',
    ],
  },
  {
    titulo: 'FASE 3 · Definir y medir',
    nivel: 'Nivel 2 → 3',
    color: 'emerald',
    items: [
      'Documentar flujo, validaciones y excepciones',
      'Medir con reportes e indicadores',
      'Proteger datos personales (Ley N° 29733) y auditar cambios',
    ],
  },
] as const;

const faseStyles = {
  amber: 'border-amber-300 bg-amber-50 text-amber-900',
  blue: 'border-blue-300 bg-blue-50 text-blue-900',
  emerald: 'border-emerald-300 bg-emerald-50 text-emerald-900',
};

const indicadores = [
  { valor: '< 2 min', titulo: 'Tiempo de inscripción', detalle: 'Por socio, desde el portal web', icon: 'fa-stopwatch' },
  { valor: '100%', titulo: 'Inscripciones digitales', detalle: 'Sin filas ni fichas de papel', icon: 'fa-laptop' },
  { valor: '0', titulo: 'Sobrecupos y duplicados', detalle: 'Gracias al bloqueo de vacantes', icon: 'fa-user-lock' },
  { valor: '100%', titulo: 'Pagos conciliados', detalle: 'Cada pago ligado a su matrícula', icon: 'fa-link' },
];

function NivelEscala({ hoy, meta }: { hoy: number; meta: number }) {
  return (
    <div className="flex items-end gap-1.5">
      {[0, 1, 2, 3, 4, 5].map((n) => {
        const esHoy = n === hoy;
        const esMeta = n === meta;
        return (
          <div key={n} className="flex flex-col items-center gap-1">
            <span className={`text-[10px] font-bold h-3 ${esHoy ? 'text-red-600' : esMeta ? 'text-emerald-600' : 'text-transparent'}`}>
              {esHoy ? 'Hoy' : esMeta ? 'Meta' : '·'}
            </span>
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold border ${
                esHoy
                  ? 'bg-red-500 text-white border-red-600'
                  : esMeta
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : n < hoy
                      ? 'bg-red-100 text-red-700 border-red-200'
                      : 'bg-slate-100 text-slate-400 border-slate-200'
              }`}
            >
              {n}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Etiqueta({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-corporate-blue text-xs font-bold rounded-md uppercase tracking-wider mb-2">
      {children}
    </div>
  );
}

export default function Ec2Semana7() {
  return (
    <section id="ec2-semana7" className="space-y-12 scroll-mt-20">
      {/* Encabezado */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 md:p-10 shadow-lg">
        <span className="inline-block text-[11px] font-bold text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full mb-4 border border-amber-400/30 uppercase tracking-wider">
          EC2 · Semana 7
        </span>
        <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight mb-3">
          Evaluación de procesos y diagnóstico de madurez
        </h2>
        <p className="text-blue-100 text-base md:text-lg max-w-3xl">
          Puntos 2 y 3 · Capacidad de procesos (CMMI V2.0) y madurez de datos (DMM) del Club Tennis Las Terrazas · Miraflores.
        </p>
        <p className="text-xs text-blue-300 mt-5">
          UNTELS · Ingeniería de Sistemas — Marcelo Bilbao R. · Paul Irrarazabal A. · Valeri Flores R. | Docente: Arqque Pantigozo A.
        </p>
      </div>

      {/* ===================== PUNTO 2 ===================== */}
      <div id="ec2-procesos" className="space-y-6 scroll-mt-20">
        <div>
          <Etiqueta><i className="fas fa-clipboard-check"></i> Punto 2 · Evaluación de procesos</Etiqueta>
          <h3 className="font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">Procesos seleccionados</h3>
          <p className="text-slate-600 mt-1">
            Del mapa de procesos del club se evalúan dos procesos conectados: uno misional y uno de soporte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-corporate-accent text-white flex items-center justify-center text-xl font-extrabold">A</div>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Inscripción y matrícula de talleres</h4>
              <p className="text-xs font-semibold text-corporate-accent mb-2">P.OP-01 · Proceso misional · Dpto. de Deportes</p>
              <p className="text-sm text-slate-600">Recepción de fichas, verificación de cupos y digitación del padrón de alumnos.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl font-extrabold">B</div>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Cobro y emisión de comprobantes</h4>
              <p className="text-xs font-semibold text-amber-700 mb-2">Proceso de soporte · Tesorería y Contabilidad</p>
              <p className="text-sm text-slate-600">Cobro en caja, boleta física y liquidación diaria de los pagos de talleres.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Criterios de selección</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {criterios.map((c) => (
              <div key={c.valor} className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-extrabold text-corporate-accent">{c.valor}</p>
                <p className="text-xs text-slate-600 mt-1">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Análisis nivel de capacidad */}
      <div id="ec2-capacidad" className="space-y-6 scroll-mt-20">
        <div>
          <Etiqueta><i className="fas fa-layer-group"></i> Punto 2 · Análisis de nivel de capacidad</Etiqueta>
          <h3 className="font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">Capacidad actual (CMMI V2.0)</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Proceso A */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-corporate-accent uppercase">Proceso A</p>
                <h4 className="font-bold text-lg text-slate-900">Inscripción y matrícula</h4>
                <span className="inline-block mt-1 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  Nivel 1 · Inicial / Ad-hoc
                </span>
              </div>
              <NivelEscala hoy={1} meta={3} />
            </div>
            <p className="text-sm text-slate-600 italic">Los resultados dependen de las personas, no de un proceso definido.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-bold text-sm text-amber-900 mb-2"><i className="fas fa-file-alt mr-1"></i> Evidencia: ficha física N° 8281</p>
              <ul className="text-xs text-amber-900 space-y-1 list-disc list-inside">
                <li>4 alumnos anotados a mano en una sola ficha, sin validar en el padrón</li>
                <li>Días y turnos circulados a lapicero; no hay reserva de cancha en sistema</li>
                <li>Doble sello de tinta (COBRADO y Dpto. de Deportes) como único control</li>
                <li>Digitación posterior en Excel o software legacy</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-bold text-sm text-red-900 mb-2"><i className="fas fa-exclamation-triangle mr-1"></i> Brechas de capacidad</p>
              <ul className="text-xs text-red-900 space-y-1 list-disc list-inside">
                <li><strong>Sin repetibilidad:</strong> depende de la memoria del personal de ventanilla</li>
                <li><strong>Sin medición:</strong> no hay indicadores de tiempo de ciclo ni de satisfacción</li>
                <li><strong>Sobrecupos:</strong> no existe reserva atómica de vacantes frente al aforo</li>
              </ul>
            </div>
          </div>

          {/* Proceso B */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-amber-700 uppercase">Proceso B</p>
                <h4 className="font-bold text-lg text-slate-900">Cobro y comprobantes</h4>
                <span className="inline-block mt-1 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  Nivel 2 · Gestionado (estimado)
                </span>
              </div>
              <NivelEscala hoy={2} meta={3} />
            </div>
            <p className="text-sm text-slate-600 italic">Se ejecuta y se controla en caja, pero sin estándar ni integración con la matrícula.</p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="font-bold text-sm text-emerald-900 mb-2"><i className="fas fa-check-circle mr-1"></i> Lo que ya funciona</p>
              <ul className="text-xs text-emerald-900 space-y-1 list-disc list-inside">
                <li>Liquidación diaria de caja y voucher POS</li>
                <li>Boleta contable emitida por cada cobro</li>
                <li>Facturación electrónica en Tesorería y Contabilidad</li>
                <li>Sello COBRADO con fecha y responsable</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-bold text-sm text-red-900 mb-2"><i className="fas fa-times-circle mr-1"></i> Lo que falla</p>
              <ul className="text-xs text-red-900 space-y-1 list-disc list-inside">
                <li>Cobro en efectivo en ventanilla: riesgo de descuadres</li>
                <li>Recibo físico escrito a mano (S/ 1,540.00 en la ficha 8281)</li>
                <li>Sin conciliación automática con las cuentas bancarias</li>
                <li>El pago no queda ligado a la reserva del cupo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brecha */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h4 className="font-bold text-lg text-slate-900 mb-4">Brecha frente a la meta de Nivel 3</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-slate-200 p-5">
              <p className="text-xs font-bold text-corporate-accent uppercase">Proceso A</p>
              <p className="text-3xl font-extrabold text-red-600">+2 niveles</p>
              <p className="text-sm text-slate-600">De Nivel 1 (Inicial) a Nivel 3 (Definido)</p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-5">
              <p className="text-xs font-bold text-amber-700 uppercase">Proceso B</p>
              <p className="text-3xl font-extrabold text-amber-600">+1 nivel</p>
              <p className="text-sm text-slate-600">De Nivel 2 (Gestionado) a Nivel 3 (Definido)</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-700 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <i className="fas fa-flag text-corporate-accent mr-1"></i>
            <strong>Prioridad:</strong> empezar por el proceso A, que tiene la mayor brecha y el mayor volumen de operaciones.
          </p>
        </div>
      </div>

      {/* Propuesta de mejora */}
      <div id="ec2-propuesta" className="space-y-6 scroll-mt-20">
        <div>
          <Etiqueta><i className="fas fa-lightbulb"></i> Punto 2 · Propuesta de mejora</Etiqueta>
          <h3 className="font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">Propuesta de mejora por proceso</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              titulo: 'A · Inscripción y matrícula',
              nivel: 'Nivel 1 → 3',
              acento: 'text-corporate-accent',
              items: [
                ['fa-globe', 'Portal web de autoservicio 24/7', 'El socio se inscribe en línea; meta de menos de 2 minutos.'],
                ['fa-lock', 'Bloqueo atómico de vacantes', 'El cupo se descuenta al inscribir: no hay sobrecupos.'],
                ['fa-database', 'Padrón único digital', 'Una sola fuente de datos reemplaza fichas y hojas de Excel.'],
              ],
            },
            {
              titulo: 'B · Cobro y comprobantes',
              nivel: 'Nivel 2 → 3',
              acento: 'text-amber-600',
              items: [
                ['fa-credit-card', 'Pasarela de pago en línea', 'Niubiz, Izipay o Culqi, con tarjetas y Yape.'],
                ['fa-file-invoice', 'Comprobante electrónico automático', 'Boleta SUNAT al confirmar el pago, sin papel ni sellos.'],
                ['fa-balance-scale', 'Conciliación automática', 'Cada pago queda ligado a su matrícula y a la cuenta bancaria.'],
              ],
            },
          ].map((p) => (
            <div key={p.titulo} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg text-slate-900">{p.titulo}</h4>
                <span className="text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">{p.nivel}</span>
              </div>
              <div className="space-y-3">
                {p.items.map(([icon, t, d]) => (
                  <div key={t} className="flex gap-3">
                    <i className={`fas ${icon} ${p.acento} w-5 text-center mt-1`}></i>
                    <div>
                      <p className="font-semibold text-sm text-slate-900">{t}</p>
                      <p className="text-xs text-slate-600">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <i className="fas fa-project-diagram mr-1"></i>
          Ambos procesos se integran en un solo flujo TO-BE: inscripción, pago y comprobante.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* ===================== PUNTO 3 ===================== */}
      <div id="ec2-madurez" className="space-y-6 scroll-mt-20">
        <div>
          <Etiqueta><i className="fas fa-tachometer-alt"></i> Punto 3 · Diagnóstico de nivel de madurez</Etiqueta>
          <h3 className="font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">Diagnóstico: el club está en Nivel 1</h3>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Escala de madurez CMMI V2.0</p>
          <div className="grid grid-cols-5 gap-2">
            {['Inicial', 'Gestionado', 'Definido', 'Cuantitativo', 'Optimizado'].map((n, i) => {
              const nivel = i + 1;
              const hoy = nivel === 1;
              const meta = nivel === 3;
              return (
                <div
                  key={n}
                  className={`rounded-lg p-3 text-center border ${
                    hoy ? 'bg-red-500 text-white border-red-600' : meta ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-slate-50 text-slate-500 border-slate-200'
                  }`}
                >
                  <p className="text-2xl font-extrabold">{nivel}</p>
                  <p className="text-[11px] font-semibold">{n}</p>
                  {(hoy || meta) && <p className="text-[10px] font-black mt-1 uppercase">{hoy ? 'Hoy' : 'Meta'}</p>}
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-bold text-red-900">Resultado: Nivel 1 · Inicial / Ad-hoc</p>
              <ul className="text-xs text-red-900 space-y-1 mt-2 list-disc list-inside">
                <li>Procesos reactivos, artesanales y descentralizados</li>
                <li>Sin autoservicio web ni automatización</li>
                <li>Datos fragmentados en hojas locales y en papel</li>
                <li>Riesgo de datos desfasados y de sobrecupos</li>
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex flex-col justify-center">
              <p className="font-bold text-emerald-900">Meta: Nivel 3 · Definido</p>
              <p className="text-sm text-emerald-900 mt-1">Procesos documentados, medibles y estandarizados.</p>
            </div>
          </div>
        </div>

        {/* Tabla DMM */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200">
            <h4 className="font-bold text-slate-900">Madurez de datos (DMM) por dimensión</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase">
                <tr>
                  <th className="p-3">Dimensión</th>
                  <th className="p-3 text-red-700">Hoy · Nivel 1</th>
                  <th className="p-3 text-emerald-700">Meta · Nivel 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dmm.map((d) => (
                  <tr key={d.dimension}>
                    <td className="p-3 font-semibold text-slate-900 whitespace-nowrap">{d.dimension}</td>
                    <td className="p-3 text-red-700">{d.hoy}</td>
                    <td className="p-3 text-emerald-700">{d.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 p-3 border-t border-slate-100">Dimensiones tomadas del enfoque DMM aplicado en el blog del proyecto.</p>
        </div>
      </div>

      {/* Estrategia */}
      <div id="ec2-estrategia" className="space-y-6 scroll-mt-20">
        <div>
          <Etiqueta><i className="fas fa-route"></i> Punto 3 · Estrategia</Etiqueta>
          <h3 className="font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">Ruta del Nivel 1 al Nivel 3</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {fases.map((f) => (
            <div key={f.titulo} className={`rounded-xl border-2 p-5 ${faseStyles[f.color]}`}>
              <p className="font-extrabold">{f.titulo}</p>
              <p className="text-xs font-bold opacity-80 mb-3">{f.nivel}</p>
              <ul className="text-sm space-y-2">
                {f.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <i className="fas fa-check mt-1 text-xs"></i>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-3">
          <i className="fas fa-gavel text-corporate-accent mr-1"></i>
          <strong>Gobernanza:</strong> la Junta Directiva y el Comité de Deportes aprueban reglas, tarifas y cancelaciones.
        </p>

        <h4 className="font-bold text-xl text-slate-900 pt-2">Indicadores para medir el avance</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {indicadores.map((k) => (
            <div key={k.titulo} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 text-center">
              <i className={`fas ${k.icon} text-corporate-accent text-xl mb-2`}></i>
              <p className="text-3xl font-extrabold text-slate-900">{k.valor}</p>
              <p className="font-semibold text-sm text-slate-800">{k.titulo}</p>
              <p className="text-xs text-slate-500">{k.detalle}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic">Metas propuestas por el equipo; se validarán durante la implementación.</p>
      </div>

      {/* Conclusiones */}
      <div id="ec2-conclusiones" className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 md:p-8 scroll-mt-20">
        <h3 className="font-extrabold text-2xl mb-5">Conclusiones</h3>
        <ol className="space-y-4">
          {[
            'El proceso de inscripción está en Nivel 1 y el cobro en Nivel 2 (estimado); la brecha clave es la falta de integración y de datos confiables.',
            'La meta es el Nivel 3 (Definido) en CMMI y DMM, con autoservicio, pago en línea y una fuente única de datos.',
            'La estrategia avanza en tres fases (estabilizar, automatizar, definir y medir) y se controla con cuatro indicadores.',
          ].map((c, i) => (
            <li key={i} className="flex gap-4">
              <span className="w-8 h-8 shrink-0 rounded-full bg-amber-400 text-slate-900 font-extrabold flex items-center justify-center">{i + 1}</span>
              <p className="text-blue-100">{c}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
