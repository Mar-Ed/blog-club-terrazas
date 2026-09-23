"use client";

import { useState } from 'react';
import Image from 'next/image';

interface LightboxImage {
  src: string;
  title: string;
  category: string;
  description: string;
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState({
    diagnostico: true,
    procesos: true,
    evidencia: true,
    blueprint: true,
    asis: true,
    tobe: true
  });
  const [activeModalImage, setActiveModalImage] = useState<LightboxImage | null>(null);

  const toggleMenu = (key: keyof typeof menuOpen) => {
    setMenuOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      {/* Lightbox Modal */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:px-6 border-b border-slate-100 bg-slate-50/80">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-corporate-accent bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 inline-block mb-1">
                  {activeModalImage.category}
                </span>
                <h3 className="font-bold text-lg md:text-xl text-slate-900">{activeModalImage.title}</h3>
              </div>
              <button 
                onClick={() => setActiveModalImage(null)}
                className="w-10 h-10 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
                title="Cerrar vista ampliada"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-4 md:p-6 flex flex-col items-center justify-center bg-slate-900/5">
              <img 
                src={activeModalImage.src} 
                alt={activeModalImage.title} 
                className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-md border border-slate-200 bg-white"
              />
              <p className="mt-4 text-sm text-slate-700 max-w-2xl text-center leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm">
                {activeModalImage.description}
              </p>
            </div>

            <div className="p-3 bg-slate-100 border-t border-slate-200 flex justify-end">
              <button 
                onClick={() => setActiveModalImage(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Cerrar Visor
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar Superior */}
      <nav className="bg-white border-b border-slate-200 h-16 fixed w-full z-30 flex items-center justify-between px-4 lg:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none w-10 h-10 flex items-center justify-center lg:hidden transition-colors rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          <div 
            onClick={() => scrollToSection('portada')}
            className="flex items-center gap-3 font-bold text-lg md:text-xl text-slate-900 cursor-pointer"
          >
            <Image src="/logo.png" alt="Logo Club Terrazas" width={38} height={38} className="object-contain" />
            <div className="flex flex-col">
              <span className="tracking-tight leading-none">CLUB TENNIS LAS TERRAZAS</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Miraflores • Diagnóstico CMMI & DMM</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600">
          <button onClick={() => scrollToSection('diagnostico')} className="hover:text-corporate-accent transition-colors">
            Diagnóstico
          </button>
          <button onClick={() => scrollToSection('procesos')} className="hover:text-corporate-accent transition-colors">
            Mapa de Procesos
          </button>
          <button onClick={() => scrollToSection('evidencia')} className="hover:text-corporate-accent transition-colors flex items-center gap-1.5 font-bold text-blue-600">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Imagen Prueba
          </button>
          <button onClick={() => scrollToSection('asis')} className="hover:text-corporate-accent transition-colors">
            Flujo AS-IS
          </button>
          <button onClick={() => scrollToSection('tobe')} className="hover:text-corporate-accent transition-colors">
            Flujo TO-BE
          </button>
          
          <button 
            onClick={() => scrollToSection('evidencia')}
            className="bg-corporate-accent hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <i className="fas fa-receipt"></i> Ver Boleta de Prueba
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay para Móviles */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar de Navegación Lateral */}
      <aside className={`bg-white w-72 h-full pt-16 border-r border-slate-200 flex flex-col fixed lg:relative z-30 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none`}>
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h2 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
            <i className="fas fa-award text-corporate-accent"></i> CMMI & DMM
          </h2>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Diagnóstico y Optimización</p>
        </div>

        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {/* Vista General */}
          <button 
            onClick={() => scrollToSection('portada')}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-700 hover:bg-slate-100 rounded-lg font-semibold text-sm transition-colors text-left"
          >
            <i className="fas fa-home w-5 text-center text-slate-400"></i>
            Vista General
          </button>

          {/* Menú Diagnóstico Institucional */}
          <div>
            <button 
              onClick={() => toggleMenu('diagnostico')}
              className="w-full flex items-center justify-between px-3 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-building w-5 text-center text-corporate-accent"></i>
                Diagnóstico Empresarial
              </div>
              <i className={`fas fa-chevron-${menuOpen.diagnostico ? 'down' : 'right'} text-xs text-slate-400`}></i>
            </button>
            {menuOpen.diagnostico && (
              <ul className="ml-4 pl-3 border-l border-slate-200 space-y-1 mt-1 mb-2">
                <li>
                  <button onClick={() => scrollToSection('diagnostico')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Ficha y Contexto Institucional
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('infraestructura')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Galería de Sedes e Instalaciones
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Menú Mapa de Procesos */}
          <div>
            <button 
              onClick={() => toggleMenu('procesos')}
              className="w-full flex items-center justify-between px-3 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-sitemap w-5 text-center text-corporate-accent"></i>
                Mapa de Procesos
              </div>
              <i className={`fas fa-chevron-${menuOpen.procesos ? 'down' : 'right'} text-xs text-slate-400`}></i>
            </button>
            {menuOpen.procesos && (
              <ul className="ml-4 pl-3 border-l border-slate-200 space-y-1 mt-1 mb-2">
                <li>
                  <button onClick={() => scrollToSection('mapa-procesos')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Clasificación de Macroprocesos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('proceso-elegido')} className="w-full text-left py-1.5 px-2 text-xs font-semibold text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    🎯 Proceso Elegido: Inscripción
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Menú Evidencia Crítica */}
          <div className="bg-amber-50/60 rounded-lg border border-amber-200/70 p-1">
            <button 
              onClick={() => scrollToSection('evidencia')}
              className="w-full flex items-center justify-between px-2.5 py-2 font-bold text-sm text-amber-900 hover:bg-amber-100/60 rounded transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <i className="fas fa-file-invoice-dollar text-amber-600"></i>
                <span>Imagen Prueba & Puesto</span>
              </div>
              <span className="text-[10px] bg-red-500 text-white font-black px-1.5 py-0.5 rounded-full uppercase">Clave</span>
            </button>
          </div>

          {/* Menú Process Blueprint */}
          <div>
            <button 
              onClick={() => toggleMenu('blueprint')}
              className="w-full flex items-center justify-between px-3 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-project-diagram w-5 text-center text-corporate-accent"></i>
                Process Blueprint
              </div>
              <i className={`fas fa-chevron-${menuOpen.blueprint ? 'down' : 'right'} text-xs text-slate-400`}></i>
            </button>
            {menuOpen.blueprint && (
              <ul className="ml-4 pl-3 border-l border-slate-200 space-y-1 mt-1 mb-2">
                <li>
                  <button onClick={() => scrollToSection('blueprint')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Ficha Técnica y SIPOC
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Menú AS-IS */}
          <div>
            <button 
              onClick={() => toggleMenu('asis')}
              className="w-full flex items-center justify-between px-3 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-code-branch w-5 text-center text-orange-500"></i>
                Flujo AS-IS (Actual)
              </div>
              <i className={`fas fa-chevron-${menuOpen.asis ? 'down' : 'right'} text-xs text-slate-400`}></i>
            </button>
            {menuOpen.asis && (
              <ul className="ml-4 pl-3 border-l border-slate-200 space-y-1 mt-1 mb-2">
                <li>
                  <button onClick={() => scrollToSection('asis')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Diagrama de Flujo AS-IS
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('brechas')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Brechas CMMI & DMM
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Menú TO-BE */}
          <div>
            <button 
              onClick={() => toggleMenu('tobe')}
              className="w-full flex items-center justify-between px-3 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-rocket w-5 text-center text-emerald-600"></i>
                Flujo TO-BE (Propuesto)
              </div>
              <i className={`fas fa-chevron-${menuOpen.tobe ? 'down' : 'right'} text-xs text-slate-400`}></i>
            </button>
            {menuOpen.tobe && (
              <ul className="ml-4 pl-3 border-l border-slate-200 space-y-1 mt-1 mb-2">
                <li>
                  <button onClick={() => scrollToSection('tobe')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Diagrama TO-BE Automatizado
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('beneficios')} className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-corporate-accent hover:bg-blue-50/50 rounded transition-colors">
                    Beneficios y Meta CMMI N3
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Footer Sidebar */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
          <p className="text-[11px] font-semibold text-slate-600">Universidad Nacional Tecnológica de Lima Sur</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Ingeniería de Sistemas • UNTELS</p>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 h-full pt-16 overflow-y-auto relative p-4 md:p-8 lg:p-12 scroll-smooth">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* ========================================================= */}
          {/* SECCIÓN 1: HERO / PORTADA */}
          {/* ========================================================= */}
          <section id="portada" className="pt-2">
            <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
              <div className="lg:w-7/12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-corporate-light text-corporate-accent rounded-full text-xs font-bold tracking-wide uppercase border border-blue-200">
                    Sede Bajada Balta • Miraflores
                  </span>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold tracking-wide uppercase border border-amber-200">
                    Evaluación CMMI N1 ➔ N3
                  </span>
                </div>

                <h1 className="font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight mb-4">
                  Diagnóstico y Rediseño del Proceso de <span className="text-corporate-accent">Inscripción de Talleres</span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                  Evaluación de madurez operativa y gobernanza de datos en el <strong>Club Tennis Las Terrazas Miraflores</strong>. Análisis integral desde el modelo manual actual sustentado en evidencia física hasta la arquitectura automatizada bajo CMMI V2.0 y DMM.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="bg-white border border-slate-200 shadow-sm text-slate-700 px-4 py-2.5 rounded-lg font-medium text-xs md:text-sm flex items-center gap-2">
                    <i className="fas fa-medal text-amber-500"></i>
                    <span>CIIU 92413: Gestión Deportiva</span>
                  </div>
                  <div className="bg-corporate-blue text-white shadow-md px-4 py-2.5 rounded-lg font-medium text-xs md:text-sm flex items-center gap-2">
                    <i className="fas fa-chart-line text-blue-200"></i>
                    <span>Objetivo: CMMI Nivel 3 (Definido)</span>
                  </div>
                  <button 
                    onClick={() => scrollToSection('evidencia')}
                    className="bg-amber-600 hover:bg-amber-700 text-white shadow-md px-4 py-2.5 rounded-lg font-bold text-xs md:text-sm flex items-center gap-2 transition-colors"
                  >
                    <i className="fas fa-search-plus"></i>
                    <span>Ver Imagen Prueba (Boleta N° 8281)</span>
                  </button>
                </div>

                {/* Información Académica Portada UNTELS */}
                <div className="border-t border-slate-200 pt-5 bg-white/70 p-4 rounded-xl border">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <i className="fas fa-graduation-cap text-corporate-accent"></i> Equipo Investigador • UNTELS
                    </p>
                    <span className="text-xs font-bold text-corporate-accent bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      CMMI & DMM
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {/* Marcelo */}
                    <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-corporate-accent flex items-center justify-center font-bold text-xs shrink-0">MB</div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-800 truncate">Marcelo Bilbao R.</p>
                        <p className="text-[10px] text-slate-500 truncate">2313010105@untels</p>
                      </div>
                    </div>
                    {/* Paul */}
                    <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-corporate-accent flex items-center justify-center font-bold text-xs shrink-0">PI</div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-800 truncate">Paul Irrarazabal A.</p>
                        <p className="text-[10px] text-slate-500 truncate">2017210179@untels</p>
                      </div>
                    </div>
                    {/* Valeri */}
                    <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-corporate-accent flex items-center justify-center font-bold text-xs shrink-0">VF</div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-800 truncate">Valeri Flores R.</p>
                        <p className="text-[10px] text-slate-500 truncate">2213010105@untels</p>
                      </div>
                    </div>
                    {/* Docente */}
                    <div className="flex items-center gap-2.5 p-2 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="w-8 h-8 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0">
                        <i className="fas fa-chalkboard-teacher"></i>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-900 truncate">Arqque Pantigozo A.</p>
                        <p className="text-[10px] font-semibold text-amber-800">Docente Asesor</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Imagen Portada Club */}
              <div className="lg:w-5/12 w-full">
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer border border-slate-200"
                  onClick={() => setActiveModalImage({
                    src: "/portada.jpg",
                    title: "Sede Principal Balta - Club Tennis Las Terrazas",
                    category: "Instalación Histórica",
                    description: "Vista panorámica de la sede histórica del Club Tennis Las Terrazas, ubicada en el Malecón 28 de Julio con vista al mar de la Costa Verde en Miraflores."
                  })}
                >
                  <img 
                    src="/portada.jpg" 
                    alt="Club Tennis Las Terrazas Portada" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow">
                    <i className="fas fa-camera text-corporate-accent"></i> Clic para ampliar
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1">
                      <i className="fas fa-map-marker-alt"></i> Bajada Balta & Malecón 28 de Julio • Miraflores
                    </div>
                    <p className="font-bold text-lg md:text-xl leading-snug drop-shadow-md">
                      Fundado el 18 de Marzo de 1918 (108 años de trayectoria)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* ========================================================= */}
          {/* SECCIÓN 2: DIAGNÓSTICO INSTITUCIONAL Y EMPRESARIAL */}
          {/* ========================================================= */}
          <section id="diagnostico" className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-corporate-blue text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                <i className="fas fa-search"></i> Diagnóstico de la Organización
              </div>
              <h2 className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
                Diagnóstico Integral del Club Terrazas
              </h2>
              <p className="text-slate-600 text-base md:text-lg mt-2 max-w-3xl">
                Evaluación del contexto operativo, estructura jurídica y realidad tecnológica del <strong>Club Tennis Las Terrazas Miraflores</strong>, identificando las condiciones actuales de soporte para sus academias deportivas.
              </p>
            </div>

            {/* Tarjetas Informativas de Diagnóstico */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tarjeta 1: Ficha Legal */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 bg-blue-50 text-corporate-accent rounded-xl flex items-center justify-center text-xl mb-4 border border-blue-100">
                    <i className="far fa-building"></i>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Identidad Institucional</h3>
                  <p className="text-xs text-slate-500 mb-4">Datos formales registrados ante SUNAT y registros públicos</p>
                  
                  <div className="space-y-2.5 text-xs md:text-sm text-slate-700">
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Razón Social</span>
                      <span className="font-semibold text-right text-slate-900">Club Tennis Las Terrazas</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">RUC</span>
                      <span className="font-mono font-semibold text-slate-900">20162842031</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Personería</span>
                      <span className="font-medium text-slate-900">Asociación Civil sin Fines de Lucro</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Giro de Negocio</span>
                      <span className="font-semibold text-corporate-blue">CIIU 92413 (Actividades Deportivas)</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-500 font-medium">Estado Fiscal</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-xs border border-emerald-200">
                        Activo y Habido
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2: Dimensión Operativa y Masa Social */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-4 border border-emerald-100">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Comunidad y Servicios</h3>
                  <p className="text-xs text-slate-500 mb-4">Magnitud de asociados y beneficiarios de los talleres</p>
                  
                  <div className="space-y-3 text-xs md:text-sm text-slate-700">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">Masa Societaria Activa</span>
                        <span className="text-xs font-extrabold text-corporate-accent">+3,500 familias</span>
                      </div>
                      <p className="text-xs text-slate-500">Socios titulares, cónyuges, hijos y familiares con derecho a academia deportiva.</p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">Ciclos de Alta Demanda</span>
                        <span className="text-xs font-extrabold text-amber-600">Verano e Invierno</span>
                      </div>
                      <p className="text-xs text-slate-500">Picos de más de 800 inscripciones simultáneas en periodos de matrícula de 15 días.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta 3: Diagnóstico de Madurez CMMI / DMM */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-xl shadow-md p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl mb-4 text-amber-400 border border-white/10">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">Nivel de Madurez Actual</h3>
                  <span className="inline-block text-[11px] font-bold text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full mb-3 border border-amber-400/30">
                    NIVEL 1: INICIAL / AD-HOC
                  </span>
                  
                  <p className="text-xs text-blue-100 leading-relaxed mb-4">
                    La organización cuenta con infraestructura de primer nivel pero sus procesos administrativos son altamente <strong>reactivos, artesanales y descentralizados</strong>.
                  </p>

                  <div className="space-y-2 text-xs text-blue-200">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-times-circle text-red-400"></i>
                      <span>Falta de automatización y autoservicio web.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-times-circle text-red-400"></i>
                      <span>Uso de comprobantes y fichas manuales de papel.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-times-circle text-red-400"></i>
                      <span>Riesgo de datos desfasados y sobrecupos en talleres.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-blue-300">Meta CMMI propuesta:</span>
                  <span className="font-extrabold text-emerald-400">Nivel 3 (Definido)</span>
                </div>
              </div>
            </div>

            {/* Subsección: Galería de Sedes e Infraestructura con NUEVAS IMÁGENES */}
            <div id="infraestructura" className="pt-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
                <div>
                  <h3 className="font-bold text-2xl text-slate-900 tracking-tight flex items-center gap-2">
                    <i className="fas fa-images text-corporate-accent"></i> Infraestructura Deportiva en Diagnóstico
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Instalaciones de la Sede Bajada Balta donde se desarrollan los talleres analizados (Tenis, Natación, Fútbol Infantil y Disciplinas de Campo)
                  </p>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
                  <i className="fas fa-info-circle text-corporate-accent mr-1"></i> Haz clic en cualquier imagen para verla en detalle
                </span>
              </div>

              {/* Grid de 4 Nuevas Imágenes del Club */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* 1. Canchas de Tenis de Arcilla (tennis_campus.jpeg) */}
                <div 
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setActiveModalImage({
                    src: "/tennis_campus.jpeg",
                    title: "Canchas Oficiales de Tenis en Polvo de Ladrillo",
                    category: "Infraestructura Central - Tenis",
                    description: "Canchas principales de tenis de arcilla en la Sede Balta. Es la disciplina insignia del Club Tennis Las Terrazas con mayor cantidad de inscripciones en academias formativas infantiles y de adultos mayores."
                  })}
                >
                  <div className="h-48 relative overflow-hidden bg-slate-100">
                    <img 
                      src="/tennis_campus.jpeg" 
                      alt="Canchas de Tenis de Arcilla Club Terrazas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-amber-500 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded shadow">
                      Academia Tenis
                    </span>
                    <span className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold drop-shadow truncate">
                      Canchas de Arcilla (Bajada Balta)
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-slate-800 mb-1">Tenis Menores y Adultos</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      Canchas de polvo de ladrillo donde operan torneos oficiales y las clases de la Academia Infantil (ver Ficha de Prueba N° 8281).
                    </p>
                  </div>
                </div>

                {/* 2. Complejo Acuático (piscina.jpeg) */}
                <div 
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setActiveModalImage({
                    src: "/piscina.jpeg",
                    title: "Complejo de Piscinas y Terrazas de Sol",
                    category: "Infraestructura Acuática",
                    description: "Piscina semiolímpica del club con graderías, sombrillas y delimitación de carriles. Alberga la Academia de Natación en todos sus niveles pedagógicos durante las temporadas estivales e invernales."
                  })}
                >
                  <div className="h-48 relative overflow-hidden bg-slate-100">
                    <img 
                      src="/piscina.jpeg" 
                      alt="Piscina Club Terrazas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded shadow">
                      Natación Formativa
                    </span>
                    <span className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold drop-shadow truncate">
                      Piscina Semiolímpica
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-slate-800 mb-1">Academia de Natación</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      Carriles para natación competitiva y libre. Proceso de matrícula altamente demandado que requiere asignación estricta de cupos por carril.
                    </p>
                  </div>
                </div>

                {/* 3. Cancha de Grass Sintético (tennis.jpeg) */}
                <div 
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setActiveModalImage({
                    src: "/tennis.jpeg",
                    title: "Campo de Césped Sintético - Escuela Formativa",
                    category: "Infraestructura Multideportiva",
                    description: "Cancha polideportiva y de fútbol en césped sintético. En la imagen se aprecia la sesión matutina de la academia infantil con padres observando desde la terraza superior."
                  })}
                >
                  <div className="h-48 relative overflow-hidden bg-slate-100">
                    <img 
                      src="/tennis.jpeg" 
                      alt="Academia de Fútbol y Multideporte" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded shadow">
                      Fútbol & Polideportivo
                    </span>
                    <span className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold drop-shadow truncate">
                      Cancha Sintética de Menores
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-slate-800 mb-1">Escuela Formativa Infantil</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      Práctica deportiva multidisciplinaria para hijos de socios. El registro manual actual dificulta la programación de turnos y profesores.
                    </p>
                  </div>
                </div>

                {/* 4. Operación Nocturna (noche.jpeg) */}
                <div 
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setActiveModalImage({
                    src: "/noche.jpeg",
                    title: "Operación y Dinámica Nocturna de la Sede Balta",
                    category: "Ambiente Operativo",
                    description: "Vista nocturna de las instalaciones del Club Terrazas con iluminación integral en piscinas y canchas de tenis. Refleja el flujo continuo de asociados hasta horas avanzadas de la noche."
                  })}
                >
                  <div className="h-48 relative overflow-hidden bg-slate-100">
                    <img 
                      src="/noche.jpeg" 
                      alt="Vista Nocturna Club Terrazas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-purple-600 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded shadow">
                      Operatividad Continua
                    </span>
                    <span className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold drop-shadow truncate">
                      Vida Social y Deportiva Nocturna
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-slate-800 mb-1">Turnos Vespertinos y Noche</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      Talleres para socios adultos después del horario laboral. Evidencia la necesidad de un sistema web 24/7 de reservas e inscripciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* ========================================================= */}
          {/* SECCIÓN 3: MAPA DE PROCESOS DE LA EMPRESA & PROCESO ELEGIDO */}
          {/* ========================================================= */}
          <section id="mapa-procesos" className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                <i className="fas fa-network-wired"></i> Arquitectura Organizacional
              </div>
              <h2 className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
                Mapa de Procesos de la Organización
              </h2>
              <p className="text-slate-600 text-base md:text-lg mt-2 max-w-3xl">
                Estructura sistémica de los macroprocesos del Club Tennis Las Terrazas Miraflores, clasificados según su naturaleza estratégica, misional (clave) y de soporte.
              </p>
            </div>

            {/* Diagrama Estructurado de Procesos */}
            <div className="space-y-6">
              {/* Macroprocesos Estratégicos */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <h4 className="font-bold text-sm md:text-base text-slate-800 uppercase tracking-wider">
                    1. Procesos Estratégicos (Dirección y Gobierno)
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs flex items-start gap-3">
                    <i className="fas fa-chess-king text-indigo-500 mt-1"></i>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900">Gestión de Consejo Directivo</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">Políticas institucionales, estatutos y directrices para asociados.</p>
                    </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs flex items-start gap-3">
                    <i className="fas fa-chart-pie text-indigo-500 mt-1"></i>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900">Planeamiento y Finanzas</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">Asignación presupuestal para infraestructura y convenios deportivos.</p>
                    </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs flex items-start gap-3">
                    <i className="fas fa-shield-alt text-indigo-500 mt-1"></i>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900">Calidad y Cumplimiento Normativo</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">Auditoría estatutaria, protocolos de salud deportiva y CMMI.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Macroprocesos Operativos / Misionales (CORE BUSINESS) */}
              <div className="bg-blue-50/70 rounded-xl p-6 border-2 border-corporate-accent/40 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-600 animate-ping"></span>
                    <h4 className="font-extrabold text-base md:text-lg text-slate-900 uppercase tracking-wider">
                      2. Procesos Operativos o Misionales (Giro Central del Club)
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-corporate-accent bg-white px-3 py-1 rounded-full border border-blue-200 w-max">
                    Impacto Directo en el Asociado
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Proceso Elegido Destacado */}
                  <div className="bg-white p-4 rounded-xl border-2 border-corporate-accent shadow-md md:col-span-2 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 bg-corporate-accent text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">
                      PROCESO CRÍTICO ELEGIDO
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-corporate-accent mb-2">
                        <i className="fas fa-bullseye text-lg"></i>
                        <span className="text-xs font-bold uppercase tracking-wider">P.OP-01 Seleccionado</span>
                      </div>
                      <h5 className="font-extrabold text-base text-slate-900 mb-1">
                        Inscripción, Matrícula y Cobranza de Talleres Deportivos
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Recepción de postulaciones, validación de cupos de canchas/piscinas, control manual de pagos en caja y registro de listas de alumnos. <strong>Es el foco del presente estudio CMMI y DMM.</strong>
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Oficina Encargada:</span>
                      <span className="font-bold text-slate-800">Dpto. de Deportes & Tesorería</span>
                    </div>
                  </div>

                  {/* P.OP-02 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 mb-1">
                        <i className="fas fa-calendar-check text-blue-500"></i>
                        <span className="text-[11px] font-bold">P.OP-02</span>
                      </div>
                      <h5 className="font-bold text-sm text-slate-900 mb-1">Reserva de Escenarios y Canchas</h5>
                      <p className="text-xs text-slate-500">Asignación de canchas de arcilla para socios y partidos libres.</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2">Área: Intendencia Deportiva</span>
                  </div>

                  {/* P.OP-03 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 mb-1">
                        <i className="fas fa-id-card text-blue-500"></i>
                        <span className="text-[11px] font-bold">P.OP-03</span>
                      </div>
                      <h5 className="font-bold text-sm text-slate-900 mb-1">Admisión y Gestión Societaria</h5>
                      <p className="text-xs text-slate-500">Alta de nuevos socios, emisión de carnets y cuotas de mantenimiento.</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2">Área: Junta Calificadora</span>
                  </div>
                </div>
              </div>

              {/* Macroprocesos de Soporte */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-slate-500"></span>
                  <h4 className="font-bold text-sm md:text-base text-slate-800 uppercase tracking-wider">
                    3. Procesos de Soporte (Apoyo Operacional)
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                    <strong className="block text-slate-900 font-semibold mb-1">Tecnologías de la Información</strong>
                    <span className="text-slate-500 text-[11px]">Soporte a red local, software administrativo e intranet.</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                    <strong className="block text-slate-900 font-semibold mb-1">Tesorería y Contabilidad</strong>
                    <span className="text-slate-500 text-[11px]">Emisión de boletas, facturación electrónica y conciliación.</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                    <strong className="block text-slate-900 font-semibold mb-1">Mantenimiento de Sedes</strong>
                    <span className="text-slate-500 text-[11px]">Riego de arcilla, tratamiento de piscinas y limpieza.</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                    <strong className="block text-slate-900 font-semibold mb-1">Talento Humano & Entrenadores</strong>
                    <span className="text-slate-500 text-[11px]">Contratación de profesores de tenis, natación y salvavidas.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Justificación de la Elección del Proceso */}
            <div id="proceso-elegido" className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-corporate-accent flex items-center justify-center text-lg font-bold">
                  <i className="fas fa-check-double"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Justificación Metodológica: ¿Por qué se eligió el Proceso de Inscripción de Talleres?
                  </h3>
                  <p className="text-xs text-slate-500">Criterios de criticidad operativa bajo los marcos CMMI V2.0 y DMM</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 text-sm text-slate-700">
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-corporate-accent">
                  <strong className="block text-slate-900 font-bold mb-1">1. Máximo Volumen Transaccional</strong>
                  <p className="text-xs leading-relaxed text-slate-600">
                    Al inicio de cada periodo (enero para academia de verano y marzo/julio para invierno), cientos de familias matriculan a sus hijos simultáneamente, desbordando la capacidad del personal físico.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-amber-500">
                  <strong className="block text-slate-900 font-bold mb-1">2. Mayor Fricción y Riesgo Operativo</strong>
                  <p className="text-xs leading-relaxed text-slate-600">
                    Obligar al socio a acudir a ventanilla o enviar recibos por WhatsApp genera colas, pérdida de fichas de papel y errores de cobro que afectan la reputación del club.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-red-500">
                  <strong className="block text-slate-900 font-bold mb-1">3. Cero Gobernanza de Datos (DMM Nivel 1)</strong>
                  <p className="text-xs leading-relaxed text-slate-600">
                    La información queda fragmentada en hojas de cálculo locales sin conciliación automática con las cuentas bancarias ni actualización de vacantes en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* ========================================================= */}
          {/* SECCIÓN 4: EVIDENCIA CRÍTICA DEL DIAGNÓSTICO (IMAGEN PRUEBA) */}
          {/* ========================================================= */}
          <section id="evidencia" className="space-y-8 bg-gradient-to-b from-amber-50/40 to-white p-6 md:p-8 rounded-2xl border-2 border-amber-300/80 shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-800 text-xs font-black rounded-md uppercase tracking-wider mb-2 border border-red-200">
                <i className="fas fa-exclamation-triangle text-red-600"></i> Evidencia Documental Primaria del Diagnóstico
              </div>
              <h2 className="font-black text-2xl md:text-4xl text-slate-900 tracking-tight flex flex-wrap items-center gap-3">
                <span>Auditoría Operativa: La "Imagen Prueba"</span>
                <span className="text-xs font-bold bg-amber-500 text-white px-2.5 py-1 rounded-md">
                  Ficha de Matrícula N° 8281
                </span>
              </h2>
              <p className="text-slate-700 text-sm md:text-base mt-2 max-w-4xl leading-relaxed">
                A continuación se presenta el hallazgo empírico más determinante de la auditoría: el <strong>documento físico real</strong> mediante el cual el Club Tennis Las Terrazas gestiona actualmente las inscripciones y cobranzas de sus talleres, acompañado de la estación operativa del personal.
              </p>
            </div>

            {/* Comparativa Visual: Documento Físico vs Estación de Trabajo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LA IMAGEN PRUEBA: FICHA DE MATRÍCULA Y PAGO (7 COLUMNAS) */}
              <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border-2 border-amber-400 overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-receipt text-xl text-amber-200"></i>
                    <div>
                      <h4 className="font-extrabold text-sm md:text-base leading-tight">DOCUMENTO FÍSICO REAL: FICHA N° 8281</h4>
                      <p className="text-[11px] text-amber-100">Academia / Taller: Tennis Menores (Temporada Febrero 2026)</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveModalImage({
                      src: "/prueba_boleta.jpeg",
                      title: "Ficha Real de Matrícula y Pago - Club Tennis Las Terrazas",
                      category: "Evidencia Primaria de Auditoría",
                      description: "Ficha física oficial N° 8281 donde se evidencia el llenado manual con lapicero de 4 alumnos inscritos en Tennis Menores (Vincent, Anthony, Caroline y Matthew Pendergast), días circulados a mano (Lunes, Miércoles, Jueves a las 10:00), costo de S/ 1,540.00 en efectivo/caja y sellos físicos de 'COBRADO' y 'DPTO. DE DEPORTES'."
                    })}
                    className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <i className="fas fa-expand-alt"></i> Ampliar Prueba
                  </button>
                </div>

                {/* Contenedor de la Imagen con zoom hover */}
                <div 
                  className="relative bg-slate-900 p-2 md:p-4 flex items-center justify-center cursor-pointer group"
                  onClick={() => setActiveModalImage({
                    src: "/prueba_boleta.jpeg",
                    title: "Ficha Real de Matrícula y Pago - Club Tennis Las Terrazas",
                    category: "Evidencia Primaria de Auditoría",
                    description: "Ficha física oficial N° 8281 donde se evidencia el llenado manual con lapicero de 4 alumnos inscritos en Tennis Menores (Vincent, Anthony, Caroline y Matthew Pendergast), días circulados a mano (Lunes, Miércoles, Jueves a las 10:00), costo de S/ 1,540.00 en efectivo/caja y sellos físicos de 'COBRADO' y 'DPTO. DE DEPORTES'."
                  })}
                >
                  <img 
                    src="/prueba_boleta.jpeg" 
                    alt="Ficha física de matrícula y pago Club Terrazas - Imagen Prueba" 
                    className="max-h-[500px] w-auto object-contain rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                    <span className="bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <i className="fas fa-search-plus text-amber-400"></i> Clic para inspeccionar en alta resolución
                    </span>
                  </div>
                </div>

                {/* Desglose Forense de la Imagen Prueba */}
                <div className="p-5 bg-white space-y-3">
                  <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <i className="fas fa-microscope text-corporate-accent"></i> Hallazgos Auditados en la Boleta Física:
                  </h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-red-50/70 rounded-lg border border-red-200">
                      <strong className="block text-red-900 font-bold mb-0.5">
                        <i className="fas fa-pen text-red-600 mr-1"></i> 1. Escritura a Mano (4 Alumnos)
                      </strong>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Los alumnos <em>Vincent, Anthony, Caroline y Matthew Pendergast</em> fueron anotados a mano sobre una misma ficha sin validación en padrón oficial.
                      </p>
                    </div>

                    <div className="p-3 bg-red-50/70 rounded-lg border border-red-200">
                      <strong className="block text-red-900 font-bold mb-0.5">
                        <i className="fas fa-clock text-red-600 mr-1"></i> 2. Días y Turnos Circulados a Lapicero
                      </strong>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Se circuló con bolígrafo: <em>"Lunes, Miércoles, Jueves - Horario: 10:00 hrs"</em>. No hay reserva de pista en sistema informático.
                      </p>
                    </div>

                    <div className="p-3 bg-red-50/70 rounded-lg border border-red-200">
                      <strong className="block text-red-900 font-bold mb-0.5">
                        <i className="fas fa-money-bill-wave text-red-600 mr-1"></i> 3. Cobro Manual por S/ 1,540.00
                      </strong>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Monto total registrado a mano. Recaudación física en ventanilla sujeta a descuadres de caja y riesgo de traslado de efectivo.
                      </p>
                    </div>

                    <div className="p-3 bg-red-50/70 rounded-lg border border-red-200">
                      <strong className="block text-red-900 font-bold mb-0.5">
                        <i className="fas fa-stamp text-red-600 mr-1"></i> 4. Doble Sellado y Burocracia Física
                      </strong>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Sellos de tinta física de <em>"COBRADO"</em> (02 FEB 2026 - Enma Díaz Ocala) y sello de <em>"DPTO. DE DEPORTES"</em>, confirmando la dependencia analógica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LA ESTACIÓN DE TRABAJO DEL OPERADOR (5 COLUMNAS) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col">
                  <div className="bg-slate-800 text-white px-5 py-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm leading-tight">Estación Operativa de la Oficina de Deportes</h4>
                      <p className="text-[10px] text-slate-300">Puesto de Atención y Digitación Manual</p>
                    </div>
                    <button 
                      onClick={() => setActiveModalImage({
                        src: "/laptop.jpeg",
                        title: "Estación de Trabajo en Oficina de Deportes - Club Terrazas",
                        category: "Infraestructura Administrativa",
                        description: "Fotografía real del puesto operativo de la Oficina de Deportes del Club Terrazas. Se aprecia al operador (Alejandro Vicencio / Sede Principal) consultando y digitando manualmente registros en una pantalla de software administrativo legacy, teléfono de mesa y la mampara de vidrio con el escudo oficial del club CTLM."
                      })}
                      className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded text-xs font-medium transition-colors"
                    >
                      <i className="fas fa-search-plus"></i> Ampliar
                    </button>
                  </div>

                  <div 
                    className="relative bg-slate-100 h-64 overflow-hidden cursor-pointer group"
                    onClick={() => setActiveModalImage({
                      src: "/laptop.jpeg",
                      title: "Estación de Trabajo en Oficina de Deportes - Club Terrazas",
                      category: "Infraestructura Administrativa",
                      description: "Fotografía real del puesto operativo de la Oficina de Deportes del Club Terrazas. Se aprecia al operador (Alejandro Vicencio / Sede Principal) consultando y digitando manualmente registros en una pantalla de software administrativo legacy, teléfono de mesa y la mampara de vidrio con el escudo oficial del club CTLM."
                    })}
                  >
                    <img 
                      src="/laptop.jpeg" 
                      alt="Estación de Trabajo Oficina de Deportes Club Terrazas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold drop-shadow">
                      Escritorio de Deportes • Operador: Alejandro Vicencio
                    </span>
                  </div>

                  <div className="p-4 space-y-2 text-xs text-slate-700 bg-slate-50">
                    <p className="leading-relaxed">
                      <strong>Análisis del puesto de trabajo:</strong> El personal administrativo debe transcribir manualmente los datos de las fichas de papel (como la Boleta 8281) al software administrativo visible en el monitor.
                    </p>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span><i className="fas fa-door-open mr-1"></i> Mampara con logotipo CTLM</span>
                      <span className="font-semibold text-red-600"><i className="fas fa-exclamation-circle mr-1"></i> Cuello de botella en digitación</span>
                    </div>
                  </div>
                </div>

                {/* Síntesis del Diagnóstico CMMI */}
                <div className="bg-slate-900 text-white rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    <h5 className="font-bold text-sm text-amber-300 uppercase tracking-wider">
                      Veredicto de Auditoría CMMI & DMM
                    </h5>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    La evidencia física y fotográfica demuestra de manera irrefutable que el proceso se encuentra en <strong>NIVEL 1 (INICIAL)</strong>. Cualquier indisponibilidad del personal o pérdida física del papel destruye la trazabilidad histórica de la matrícula deportiva.
                  </p>
                </div>
              </div>

            </div>
          </section>

          <hr className="border-slate-200" />

          {/* ========================================================= */}
          {/* SECCIÓN 5: PROCESS BLUEPRINT & SIPOC */}
          {/* ========================================================= */}
          <section id="blueprint" className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-corporate-accent text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                <i className="fas fa-project-diagram"></i> Ingeniería de Procesos
              </div>
              <h2 className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
                Process Blueprint & Matriz SIPOC
              </h2>
              <p className="text-slate-600 text-base md:text-lg mt-2 max-w-3xl">
                Formalización del alcance, actores, insumos, actividades y resultados del proceso seleccionado.
              </p>
            </div>

            {/* Ficha Blueprint */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Dueño del Proceso</div>
                <div className="font-extrabold text-slate-900 text-base">Jefe de Oficina de Deportes</div>
                <div className="text-xs text-slate-500 mt-1">Sede Principal Bajada Balta</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Actores Clave</div>
                <div className="font-extrabold text-slate-900 text-base">Socio, Deportes, Finanzas</div>
                <div className="text-xs text-slate-500 mt-1">Cajeros, Profesores y Secretaría</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Entradas Críticas</div>
                <div className="font-extrabold text-slate-900 text-base">Ficha Física, Solicitud, Pago</div>
                <div className="text-xs text-slate-500 mt-1">Parrilla de horarios de tenis/natación</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Salidas Generadas</div>
                <div className="font-extrabold text-slate-900 text-base">Padrón de Alumnos & Boleta</div>
                <div className="text-xs text-slate-500 mt-1">Listado para entrenadores de pista</div>
              </div>
            </div>

            {/* Matriz SIPOC */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 bg-slate-100 border-b border-slate-200 font-bold text-sm text-slate-800 flex items-center justify-between">
                <span>Matriz SIPOC (Suppliers - Inputs - Process - Outputs - Customers)</span>
                <span className="text-xs font-semibold text-corporate-accent bg-white px-2.5 py-0.5 rounded border border-slate-200">
                  Estándar ISO 9001 / CMMI
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Proveedores (S)</th>
                      <th className="p-3.5">Entradas (I)</th>
                      <th className="p-3.5">Proceso / Fases (P)</th>
                      <th className="p-3.5">Salidas (O)</th>
                      <th className="p-3.5">Clientes (C)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-semibold text-slate-900">Oficina de Deportes & Coordinación</td>
                      <td className="p-3.5">Parrilla de talleres, aforos de canchas, costos fijados</td>
                      <td className="p-3.5">1. Publicación de convocatoria y horarios</td>
                      <td className="p-3.5">Afiches físicos y circulares informativas</td>
                      <td className="p-3.5">Asociados y familiares</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-semibold text-slate-900">Socio del Club (Familia)</td>
                      <td className="p-3.5">Ficha llenada a mano, comprobante de pago</td>
                      <td className="p-3.5">2. Recepción presencial y verificación manual</td>
                      <td className="p-3.5">Ficha sellada de "COBRADO" (ej. Boleta 8281)</td>
                      <td className="p-3.5">Caja / Tesorería</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-semibold text-slate-900">Tesorería / Caja</td>
                      <td className="p-3.5">Efectivo, voucher POS, liquidación diaria</td>
                      <td className="p-3.5">3. Cobro y emisión de recibo físico</td>
                      <td className="p-3.5">Boleta contable física</td>
                      <td className="p-3.5">Socio titular</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-semibold text-slate-900">Personal de Secretaría Deportes</td>
                      <td className="p-3.5">Pila de fichas físicas selladas</td>
                      <td className="p-3.5">4. Digitación en Excel/software legacy</td>
                      <td className="p-3.5">Listado de asistencia impreso</td>
                      <td className="p-3.5">Profesores de Tenis/Piscina</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* ========================================================= */}
          {/* SECCIÓN 6: FLUJO ACTUAL "AS-IS" & BRECHAS IDENTIFICADAS */}
          {/* ========================================================= */}
          <section id="asis" className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                  <i className="fas fa-history"></i> Proceso Vigente
                </div>
                <h2 className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
                  Flujo Actual "AS-IS" (Manual y Fragmentado)
                </h2>
                <p className="text-slate-600 text-base md:text-lg mt-2 max-w-3xl">
                  Modelado del flujo de trabajo evidenciado en la auditoría física. El socio transita por múltiples ventanillas provocando cuellos de botella severos.
                </p>
              </div>
              <div className="bg-orange-50 text-orange-800 border-2 border-orange-300 px-4 py-2 rounded-xl font-bold text-sm w-max flex items-center gap-2 shadow-sm self-start sm:self-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                Nivel 1 CMMI - Inicial / Ad-hoc
              </div>
            </div>

            {/* Diagrama AS-IS con Modal */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <i className="fas fa-sitemap text-orange-500"></i> Diagrama de Flujo AS-IS (BPMN / Notación Funcional)
                </h4>
                <button 
                  onClick={() => setActiveModalImage({
                    src: "/as is.png",
                    title: "Diagrama de Flujo Actual AS-IS",
                    category: "Modelado de Procesos Actuales",
                    description: "Diagrama de flujo detallado del proceso AS-IS de matrícula en el Club Terrazas. Muestra las interacciones manuales entre el Socio, Deportes, Caja y los Entrenadores, evidenciando las tareas en papel y los cuellos de botella analógicos."
                  })}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <i className="fas fa-search-plus"></i> Ampliar Diagrama
                </button>
              </div>

              <div 
                className="flex justify-center bg-slate-50 rounded-xl border border-slate-200 p-4 md:p-6 mb-6 cursor-pointer group hover:bg-slate-100/80 transition-colors"
                onClick={() => setActiveModalImage({
                  src: "/as is.png",
                  title: "Diagrama de Flujo Actual AS-IS",
                  category: "Modelado de Procesos Actuales",
                  description: "Diagrama de flujo detallado del proceso AS-IS de matrícula en el Club Terrazas. Muestra las interacciones manuales entre el Socio, Deportes, Caja y los Entrenadores, evidenciando las tareas en papel y los cuellos de botella analógicos."
                })}
              >
                <img 
                  src="/as%20is.png" 
                  alt="Diagrama AS-IS del Proceso de Matrícula" 
                  className="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 bg-white group-hover:shadow-md transition-shadow" 
                />
              </div>

              {/* Brechas Identificadas */}
              <div id="brechas" className="bg-red-50 rounded-xl border border-red-200 p-5 md:p-6">
                <h4 className="font-bold text-red-900 flex items-center gap-2 mb-4 text-base">
                  <i className="fas fa-exclamation-triangle text-red-600"></i> Brechas y Riesgos Críticos Sustentados en la Evidencia
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-950">
                  <div className="bg-white/80 p-4 rounded-lg border border-red-100 shadow-xs">
                    <strong className="block mb-1 text-red-900 font-bold flex items-center gap-1.5">
                      <i className="fas fa-layer-group text-red-600"></i> Perspectiva CMMI V2.0 (Capacidad Operativa)
                    </strong>
                    <ul className="space-y-1.5 text-xs text-red-900 list-disc list-inside">
                      <li><strong>Falta de Repetibilidad:</strong> El proceso depende enteramente de la pericia y memoria de las personas en ventanilla.</li>
                      <li><strong>Cuello de Botella Masivo:</strong> En temporada de verano, las filas presenciales y saturación telefónica colapsan la oficina.</li>
                      <li><strong>Esfuerzo Transaccional Ineficiente:</strong> El personal calificado de deportes pierde horas en digitación en lugar de supervisión atlética.</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 p-4 rounded-lg border border-red-100 shadow-xs">
                    <strong className="block mb-1 text-red-900 font-bold flex items-center gap-1.5">
                      <i className="fas fa-database text-red-600"></i> Perspectiva DMM (Gobernanza de Datos)
                    </strong>
                    <ul className="space-y-1.5 text-xs text-red-900 list-disc list-inside">
                      <li><strong>Datos Fragmentados:</strong> Fichas en papel no sincronizadas con la base de datos de socios ni con el software contable.</li>
                      <li><strong>Riesgo de Sobrecupos:</strong> Al anotarse a mano sin reserva atómica, se inscriben alumnos por encima del aforo de las canchas de tenis.</li>
                      <li><strong>Inseguridad de la Información:</strong> Pérdida física de comprobantes y nula protección de datos personales de menores.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* ========================================================= */}
          {/* SECCIÓN 7: FLUJO PROPUESTO "TO-BE" & BENEFICIOS */}
          {/* ========================================================= */}
          <section id="tobe" className="space-y-8 pb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                  <i className="fas fa-rocket"></i> Modelo Automatizado
                </div>
                <h2 className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
                  Flujo Propuesto "TO-BE" (Autoservicio Digital)
                </h2>
                <p className="text-slate-600 text-base md:text-lg mt-2 max-w-3xl">
                  Rediseño integral de autoservicio web con pasarela de pagos integrada, validación en tiempo real y asignación automática de vacantes.
                </p>
              </div>
              <div className="bg-emerald-50 text-emerald-800 border-2 border-emerald-300 px-4 py-2 rounded-xl font-bold text-sm w-max flex items-center gap-2 shadow-sm self-start sm:self-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                Meta: Nivel 3 CMMI - Definido
              </div>
            </div>

            {/* Diagrama TO-BE con Modal */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <i className="fas fa-sitemap text-emerald-600"></i> Diagrama de Flujo TO-BE (Arquitectura Rediseñada)
                </h4>
                <button 
                  onClick={() => setActiveModalImage({
                    src: "/to be.png",
                    title: "Diagrama de Flujo Propuesto TO-BE",
                    category: "Arquitectura Futura Automatizada",
                    description: "Diagrama de flujo TO-BE donde el socio se autentica en el portal web institucional, visualiza vacantes en tiempo real, matricula a sus beneficiarios, efectúa el pago electrónico instantáneo y recibe automáticamente su comprobante y pase deportivo digital."
                  })}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <i className="fas fa-search-plus"></i> Ampliar Diagrama
                </button>
              </div>

              <div 
                className="flex justify-center bg-slate-50 rounded-xl border border-slate-200 p-4 md:p-6 mb-6 cursor-pointer group hover:bg-slate-100/80 transition-colors"
                onClick={() => setActiveModalImage({
                  src: "/to be.png",
                  title: "Diagrama de Flujo Propuesto TO-BE",
                  category: "Arquitectura Futura Automatizada",
                  description: "Diagrama de flujo TO-BE donde el socio se autentica en el portal web institucional, visualiza vacantes en tiempo real, matricula a sus beneficiarios, efectúa el pago electrónico instantáneo y recibe automáticamente su comprobante y pase deportivo digital."
                })}
              >
                <img 
                  src="/to%20be.png" 
                  alt="Diagrama TO-BE del Proceso Automatizado" 
                  className="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 bg-white group-hover:shadow-md transition-shadow" 
                />
              </div>

              {/* Beneficios Proyectados */}
              <div id="beneficios" className="bg-emerald-50 rounded-xl border border-emerald-200 p-5 md:p-6">
                <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-4 text-base">
                  <i className="fas fa-check-circle text-emerald-600"></i> Beneficios Estratégicos y Transformación Cuantitativa
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-emerald-950">
                  <div className="bg-white/80 p-4 rounded-lg border border-emerald-100 shadow-xs">
                    <strong className="block mb-1 text-emerald-900 font-bold flex items-center gap-1.5">
                      <i className="fas fa-award text-emerald-600"></i> Logros bajo CMMI V2.0
                    </strong>
                    <ul className="space-y-1.5 text-xs text-emerald-900 list-disc list-inside">
                      <li><strong>Proceso Estandarizado y Medible:</strong> Se alcanzan los objetivos de Nivel 3 (Definido), con métricas de tiempo de ciclo y satisfacción del socio.</li>
                      <li><strong>Eliminación de Filas Físicas:</strong> 100% de matrículas operadas en línea vía autoservicio 24/7.</li>
                      <li><strong>Rol Estratégico de Deportes:</strong> La coordinación deportiva pasa a monitorear rendimiento atlético y calidad docente.</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 p-4 rounded-lg border border-emerald-100 shadow-xs">
                    <strong className="block mb-1 text-emerald-900 font-bold flex items-center gap-1.5">
                      <i className="fas fa-shield-virus text-emerald-600"></i> Logros bajo DMM (Data Management Maturity)
                    </strong>
                    <ul className="space-y-1.5 text-xs text-emerald-900 list-disc list-inside">
                      <li><strong>Única Fuente de Verdad (SSOT):</strong> Base de datos centralizada con bloqueo atómico de vacantes que impide sobrecupos.</li>
                      <li><strong>Cero Pérdida de Documentos:</strong> Comprobantes electrónicos (facturación electrónica SUNAT) generados automáticamente.</li>
                      <li><strong>Protección de Datos:</strong> Registro formal con encriptación y trazabilidad de auditoría según Ley N° 29733.</li>
                    </ul>
                  </div>
                </div>

                {/* Tabla Comparativa de Madurez */}
                <div className="mt-5 bg-white rounded-lg border border-emerald-200 overflow-hidden">
                  <div className="p-3 bg-emerald-100/60 font-bold text-xs text-emerald-900 uppercase tracking-wider">
                    Matriz Comparativa de Madurez: Estado Actual vs Propuesto
                  </div>
                  <div className="overflow-x-auto text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="p-2.5">Dimensión Evaluada</th>
                          <th className="p-2.5 text-red-700">Estado Actual (AS-IS)</th>
                          <th className="p-2.5 text-emerald-700">Estado Propuesto (TO-BE)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr>
                          <td className="p-2.5 font-semibold">Canal de Inscripción</td>
                          <td className="p-2.5 text-red-600">Presencial / Ficha física en papel</td>
                          <td className="p-2.5 text-emerald-600 font-semibold">Portal Web Autoservicio 24/7</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold">Control de Vacantes</td>
                          <td className="p-2.5 text-red-600">Manual / Desfase que genera sobrecupos</td>
                          <td className="p-2.5 text-emerald-600 font-semibold">Bloqueo automático en tiempo real</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold">Medio de Pago</td>
                          <td className="p-2.5 text-red-600">Ventanilla de caja física / Efectivo</td>
                          <td className="p-2.5 text-emerald-600 font-semibold">Pasarela de pago online (Tarjetas / Yape)</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold">Nivel CMMI</td>
                          <td className="p-2.5 text-red-600 font-bold">Nivel 1 (Inicial)</td>
                          <td className="p-2.5 text-emerald-600 font-bold">Nivel 3 (Definido)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
