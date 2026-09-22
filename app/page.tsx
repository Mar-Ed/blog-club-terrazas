"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState({ process: true, asis: true, tobe: true });

  const toggleMenu = (key: keyof typeof menuOpen) => {
    setMenuOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 h-16 fixed w-full z-30 flex items-center justify-between px-4 lg:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-500 hover:text-slate-700 focus:outline-none w-10 h-10 flex items-center justify-center lg:hidden transition-colors rounded-md hover:bg-slate-100"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          <div className="flex items-center gap-3 font-bold text-xl text-slate-900 cursor-pointer">
            <Image src="/logo.png" alt="Logo" width={36} height={36} className="object-contain" />
            <span className="tracking-tight">CLUB TERRAZAS</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-8 font-medium text-sm text-slate-600">
          <span className="hover:text-corporate-accent transition-colors cursor-pointer">Sedes</span>
          <span className="hover:text-corporate-accent transition-colors cursor-pointer">Deportes</span>
          <span className="hover:text-corporate-accent transition-colors cursor-pointer">Contacto</span>
          
          <button className="bg-corporate-accent hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm">
            <i className="fas fa-user-circle"></i> Intranet
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`bg-white w-72 h-full pt-16 border-r border-slate-200 flex flex-col fixed lg:relative z-20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg lg:shadow-none`}>
        <div className="p-6 border-b border-slate-100">
          <h2 className="font-bold text-xl text-slate-900 mb-1">CMMI & DMM</h2>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Proyecto Académico</p>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2">
            <div className="flex items-center gap-3 px-4 py-3 bg-corporate-light text-corporate-accent rounded-lg font-semibold text-sm cursor-pointer transition-colors">
              <i className="fas fa-project-diagram w-5 text-center"></i>
              Vista General
            </div>
          </div>

          <div className="px-4 mb-1">
            <button 
              onClick={() => toggleMenu('process')}
              className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-lg focus:outline-none transition-colors ${menuOpen.process ? 'text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-3">
                <i className={`fas fa-cogs w-5 text-center ${menuOpen.process ? 'text-corporate-accent' : 'text-slate-400'}`}></i>
                Process Blueprint
              </div>
              <i className={`fas fa-chevron-${menuOpen.process ? 'down' : 'right'} text-xs text-slate-400 transition-transform`}></i>
            </button>
            <ul className={`submenu-transition px-4 ml-4 border-l border-slate-200 mt-1 space-y-1 ${menuOpen.process ? 'submenu-open mb-3' : ''}`}>
              <li className="py-1.5 pl-4 text-sm text-slate-600 hover:text-corporate-accent cursor-pointer transition-colors rounded-r-md hover:bg-slate-50">Objetivo</li>
              <li className="py-1.5 pl-4 text-sm text-slate-600 hover:text-corporate-accent cursor-pointer transition-colors rounded-r-md hover:bg-slate-50">SIPOC</li>
            </ul>
          </div>

          <div className="px-4 mb-1">
            <button 
              onClick={() => toggleMenu('asis')}
              className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-lg focus:outline-none transition-colors ${menuOpen.asis ? 'text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-3">
                <i className={`fas fa-code-branch w-5 text-center ${menuOpen.asis ? 'text-corporate-accent' : 'text-slate-400'}`}></i>
                Flujo AS-IS
              </div>
              <i className={`fas fa-chevron-${menuOpen.asis ? 'down' : 'right'} text-xs text-slate-400 transition-transform`}></i>
            </button>
            <ul className={`submenu-transition px-4 ml-4 border-l border-slate-200 mt-1 space-y-1 ${menuOpen.asis ? 'submenu-open mb-3' : ''}`}>
              <li className="py-1.5 pl-4 text-sm text-slate-600 hover:text-corporate-accent cursor-pointer transition-colors rounded-r-md hover:bg-slate-50">Diagrama Actual</li>
              <li className="py-1.5 pl-4 text-sm text-slate-600 hover:text-corporate-accent cursor-pointer transition-colors rounded-r-md hover:bg-slate-50">Brechas Identificadas</li>
            </ul>
          </div>

          <div className="px-4 mb-1">
            <button 
              onClick={() => toggleMenu('tobe')}
              className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-lg focus:outline-none transition-colors ${menuOpen.tobe ? 'text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-3">
                <i className={`fas fa-rocket w-5 text-center ${menuOpen.tobe ? 'text-corporate-accent' : 'text-slate-400'}`}></i>
                Flujo TO-BE
              </div>
              <i className={`fas fa-chevron-${menuOpen.tobe ? 'down' : 'right'} text-xs text-slate-400 transition-transform`}></i>
            </button>
            <ul className={`submenu-transition px-4 ml-4 border-l border-slate-200 mt-1 space-y-1 ${menuOpen.tobe ? 'submenu-open mb-3' : ''}`}>
              <li className="py-1.5 pl-4 text-sm text-slate-600 hover:text-corporate-accent cursor-pointer transition-colors rounded-r-md hover:bg-slate-50">Propuesta Automatizada</li>
              <li className="py-1.5 pl-4 text-sm text-slate-600 hover:text-corporate-accent cursor-pointer transition-colors rounded-r-md hover:bg-slate-50">Beneficios</li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full pt-16 overflow-y-auto relative p-6 md:p-10 lg:p-14">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 flex flex-col justify-center relative">
              <div className="inline-block px-3 py-1 bg-corporate-light text-corporate-accent rounded-full text-xs font-bold tracking-wide uppercase mb-6 w-max border border-blue-200">
                Sede Bajada Balta
              </div>

              <h1 className="font-extrabold text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
                Optimización del Proceso de <span className="text-corporate-accent">Inscripción de Talleres</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Rediseño del proceso de matrícula para disciplinas deportivas y culturales, elevando el nivel de madurez operativa bajo los marcos de referencia CMMI y DMM.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white border border-slate-200 shadow-sm text-slate-700 px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2">
                  <i className="fas fa-medal text-slate-400"></i>
                  Gestión Deportiva
                </div>
                <div className="bg-corporate-blue text-white shadow-md px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2">
                  <i className="fas fa-chart-line text-blue-200"></i>
                  Meta: Nivel 3 CMMI
                </div>
              </div>

              {/* Información Académica Portada (Diseño UX/UI) */}
              <div className="mt-10 border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Equipo Investigador • UNTELS</p>
                  <p className="text-xs font-bold text-corporate-accent bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">CMMI y DMM</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {/* Autor 1 */}
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0 group-hover:bg-corporate-blue group-hover:text-white transition-colors">MB</div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">Marcelo Bilbao R.</p>
                      <a href="mailto:2313010105@untels.edu.pe" className="text-[11px] text-slate-500 hover:text-corporate-accent transition-colors">2313010105@untels.edu.pe</a>
                    </div>
                  </div>
                  {/* Autor 2 */}
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0 group-hover:bg-corporate-blue group-hover:text-white transition-colors">PI</div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">Paul Irrarazabal A.</p>
                      <a href="mailto:2017210179@untels.edu.pe" className="text-[11px] text-slate-500 hover:text-corporate-accent transition-colors">2017210179@untels.edu.pe</a>
                    </div>
                  </div>
                  {/* Autor 3 */}
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0 group-hover:bg-corporate-blue group-hover:text-white transition-colors">VF</div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">Valeri Flores R.</p>
                      <a href="mailto:2213010105@untels.edu.pe" className="text-[11px] text-slate-500 hover:text-corporate-accent transition-colors">2213010105@untels.edu.pe</a>
                    </div>
                  </div>
                  {/* Docente */}
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-corporate-accent flex items-center justify-center font-bold text-xs shrink-0 border border-blue-100"><i className="fas fa-chalkboard-teacher"></i></div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">Arqque Pantigozo A.</p>
                      <p className="text-[11px] font-semibold text-corporate-accent">Docente Asesor</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                <img 
                  src="/portada.jpg" 
                  alt="Club Terrazas Portada" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-semibold text-lg drop-shadow-md">Miraflores, Lima</p>
                  <p className="text-sm text-slate-200 drop-shadow-md flex items-center gap-2 mt-1">
                    <i className="fas fa-map-marker-alt"></i> Costa Verde
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Ficha Técnica */}
          <div>
            <div className="mb-8">
              <h2 className="font-bold text-3xl text-slate-900 tracking-tight">Información Institucional</h2>
              <p className="text-slate-500 mt-2 text-lg">Datos generales y alcance del proceso</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-corporate-light text-corporate-accent rounded-lg flex items-center justify-center text-xl mb-5">
                  <i className="far fa-building"></i>
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">CLUB TENNIS LAS TERRAZAS MIRAFLORES</h4>
                <div className="space-y-3 mt-4 text-sm text-slate-600 flex-1">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-500">RUC</span>
                    <span className="text-slate-900 font-medium">20162842031</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-500">Tipo</span>
                    <span className="text-slate-900 font-medium">Asociación Civil</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-500">Estado</span>
                    <span className="text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded text-xs">Activo y Habido</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="font-medium text-slate-500">Fundación</span>
                    <span className="text-slate-900">18 Mar 1918</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-md transition-shadow relative">
                <div className="h-32 relative overflow-hidden">
                  <img src="/piscina_2.jpg" alt="Piscina Club" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/40"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Sede Principal
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Malecón y Bajada Balta</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Malecón 28 de Julio Nro. 390, Urb. Cercado de Miraflores. Sede icónica con canchas de tenis de arcilla y piscinas en los acantilados de la Costa Verde.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-corporate-blue text-white rounded-xl shadow-sm border border-blue-800 p-6 flex flex-col">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl mb-5">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">Process Blueprint</h4>
                <p className="text-sm text-blue-100 mb-4 bg-white/10 inline-block px-3 py-1 rounded-full w-max">Gestión de Inscripción</p>
                <div className="space-y-3 text-sm text-blue-50">
                  <p><strong className="text-white">Dueño:</strong> Jefe Oficina Deportes</p>
                  <p><strong className="text-white">Actores:</strong> MKT, Deportes, Finanzas, Socio</p>
                  <p><strong className="text-white">Inputs:</strong> Parrilla talleres, BD, Solicitud</p>
                  <p><strong className="text-white">Outputs:</strong> Padrón, Comprobantes</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Diagnóstico */}
          <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
            <h2 className="font-bold text-2xl text-slate-900 tracking-tight mb-6">Diagnóstico CMMI y Área Seleccionada</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h4 className="font-semibold text-corporate-accent mb-3 flex items-center gap-2">
                  <i className="fas fa-building text-blue-500"></i> Área Seleccionada
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Se ha elegido la <strong>Oficina de Deportes de la sede principal (Bajada Balta)</strong> por ser el núcleo histórico e icónico del club. Las instalaciones abarcan canchas de tenis y piscinas, siendo las actividades deportivas (CIIU 92413) el giro principal de la asociación. Cualquier mejora operativa aquí impacta directamente en el <em>core business</em> y en la satisfacción de los asociados.
                </p>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-semibold text-corporate-accent mb-3 flex items-center gap-2">
                  <i className="fas fa-sitemap text-blue-500"></i> Estado Actual: Nivel 1 (Inicial)
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Actualmente, el proceso de inscripción opera en un <strong>Nivel 1 de CMMI</strong>. Es un flujo <strong>reactivo, impredecible y dependiente del esfuerzo humano</strong>. Las validaciones dependen del personal editando archivos de Excel compartidos de manera local o por WhatsApp. Ante un pico de demanda, el proceso colapsa provocando cuellos de botella y errores en los datos (sobrecupos).
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* AS-IS */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="font-bold text-3xl text-slate-900 tracking-tight">Flujo Actual "AS-IS"</h2>
                <p className="text-slate-500 mt-2 text-lg">Proceso manual y reactivo de matrículas</p>
              </div>
              <div className="bg-orange-50 text-orange-700 border border-orange-200 px-4 py-1.5 rounded-full font-semibold text-sm w-max flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span> Nivel 1 CMMI - Ad-hoc
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex justify-center bg-slate-50 rounded-lg border border-slate-100 p-2 md:p-6 mb-8">
                  <img src="/as%20is.png" alt="Diagrama AS-IS" className="max-w-full h-auto rounded shadow-sm border border-slate-200 bg-white" />
              </div>

              <div className="bg-red-50 rounded-lg border border-red-100 p-5 md:p-6">
                <h4 className="font-bold text-red-800 flex items-center gap-2 mb-3">
                  <i className="fas fa-exclamation-circle"></i> Brechas y Riesgos Identificados
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-900">
                  <div className="bg-white/60 p-4 rounded-md border border-red-100">
                    <strong className="block mb-1 text-red-800">Perspectiva CMMI</strong>
                    Falta de predictibilidad; colapso ante alta demanda (cuello de botella); dedicación de tiempo operativo en lugar de estratégico.
                  </div>
                  <div className="bg-white/60 p-4 rounded-md border border-red-100">
                    <strong className="block mb-1 text-red-800">Perspectiva DMM</strong>
                    Data transitando por canales informales; riesgo de sobrescritura en Excel local y falta de integridad que genera sobrecupos.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TO-BE */}
          <div className="pb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="font-bold text-3xl text-slate-900 tracking-tight">Flujo Propuesto "TO-BE"</h2>
                <p className="text-slate-500 mt-2 text-lg">Modelo automatizado de autoservicio</p>
              </div>
              <div className="bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full font-semibold text-sm w-max flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Nivel 3 CMMI - Definido
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex justify-center bg-slate-50 rounded-lg border border-slate-100 p-2 md:p-6 mb-8">
                  <img src="/to%20be.png" alt="Diagrama TO-BE" className="max-w-full h-auto rounded shadow-sm border border-slate-200 bg-white" />
              </div>

              <div className="bg-emerald-50 rounded-lg border border-emerald-100 p-5 md:p-6">
                <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
                  <i className="fas fa-check-circle"></i> Beneficios Proyectados
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-emerald-900">
                  <div className="bg-white/60 p-4 rounded-md border border-emerald-100">
                    <strong className="block mb-1 text-emerald-800">Perspectiva CMMI</strong>
                    Proceso altamente escalable sin cuellos de botella. La Oficina de Deportes transiciona de una labor transaccional a una labor de supervisión estratégica.
                  </div>
                  <div className="bg-white/60 p-4 rounded-md border border-emerald-100">
                    <strong className="block mb-1 text-emerald-800">Perspectiva DMM</strong>
                    Eliminación del error humano en la digitación. Consolidación de un <i>Single Source of Truth</i>, protección de datos personales y control de aforo en tiempo real.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
