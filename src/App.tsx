import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Calendar, 
  Eye, 
  Award, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Briefcase, 
  Home, 
  Shield, 
  FileText,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

// Import local assets
import heroPortrait from './hero-portrait.jpg';
import aboutPortrait from './about-portrait.png';
import blogFeatured from './blog-featured.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Form states
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Testimonials state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: 'El abogado Miguel Lara me ayudó con mi caso laboral de principio a fin. Su profesionalismo y dedicación fueron excepcionales. Logró una compensación justa que superó mis expectativas.', author: 'Carlos Mendoza' },
    { text: 'Excelente servicio en mi proceso de divorcio. Siempre estuvo disponible para resolver mis dudas y me guió en cada paso del camino. Lo recomiendo totalmente.', author: 'María Fernanda Ruiz' },
    { text: 'Contraté sus servicios para una compraventa inmobiliaria y todo salió perfecto. Su conocimiento del derecho inmobiliario es impresionante. Muy agradecido.', author: 'Jorge Alberto Pérez' },
    { text: 'Implementó el SG-SST en nuestra empresa de manera profesional y eficiente. Cumplió con todos los plazos y la documentación quedó impecable.', author: 'Empresa Constructora del Caribe' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre}, Teléfono: ${telefono}, Email: ${email}, Mensaje: ${mensaje}`);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setNombre('');
      setTelefono('');
      setEmail('');
      setMensaje('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-navy text-white font-sans selection:bg-gold/30 overflow-x-hidden antialiased">
      <SalesAdvisorWidget
        nodeName="Miguel Lara Abogados"
        adn='{"report":"Derecho laboral, familia, civil, seguridad y salud en el trabajo e inmobiliario","opportunity_score":95,"google_place_id":"manual","location":{"latitude":10.391,"longitude":-75.4794},"custom_parameters":{"template":"prism","color":"Azul navy","business_name":"Miguel Lara Abogados","niche":"Servicios Jurídicos / Abogados","city":"Cartagena, Colombia","description":"Derecho laboral, familia, civil, seguridad y salud en el trabajo e inmobiliario"}}'
      />

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-40 h-20 flex items-center transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex flex-col items-center">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" className="mb-0.5">
              <rect x="10" y="2" width="8" height="28" rx="1" fill="#C5A55A" />
              <rect x="6" y="4" width="4" height="24" rx="1" fill="#C5A55A" opacity="0.7" />
              <rect x="18" y="4" width="4" height="24" rx="1" fill="#C5A55A" opacity="0.7" />
              <rect x="4" y="0" width="20" height="3" rx="1" fill="#C5A55A" />
              <rect x="4" y="29" width="20" height="3" rx="1" fill="#C5A55A" />
            </svg>
            <span className="text-gold font-semibold text-[11px] tracking-[3px] leading-tight">MIGUEL LARA</span>
            <span className="text-gold/70 text-[8px] tracking-[2px] leading-tight font-mono">ABOGADOS</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gold font-medium text-sm border-b-2 border-gold pb-0.5 transition-all">Inicio</button>
            <button onClick={() => document.getElementById('areas-practica')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/90 font-medium text-sm hover:text-gold transition-colors">Servicios</button>
            <button onClick={() => document.getElementById('por-que-elegirnos')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/90 font-medium text-sm hover:text-gold transition-colors">Nosotros</button>
            <button onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/90 font-medium text-sm hover:text-gold transition-colors">Boletín</button>
            <button onClick={() => document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/90 font-medium text-sm hover:text-gold transition-colors">Contacto</button>
          </div>

          <a href="https://wa.me/573226125511?text=Hola! Vengo desde su sitio web." target="_blank" rel="noopener noreferrer" className="hidden md:block bg-gold hover:bg-gold/90 text-navy font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-all hover:scale-[1.02]">
            Consulta Gratis
          </a>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="absolute top-20 left-0 right-0 bg-navy/98 backdrop-blur-md border-t border-white/10 md:hidden overflow-hidden">
              <div className="flex flex-col p-6 gap-4 font-mono text-xs uppercase tracking-wider">
                <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-gold font-medium text-left">Inicio</button>
                <button onClick={() => { document.getElementById('areas-practica')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/90 font-medium text-left hover:text-gold">Servicios</button>
                <button onClick={() => { document.getElementById('por-que-elegirnos')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/90 font-medium text-left hover:text-gold">Nosotros</button>
                <button onClick={() => { document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/90 font-medium text-left hover:text-gold">Boletín</button>
                <button onClick={() => { document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/90 font-medium text-left hover:text-gold font-bold">Contacto</button>
                <a href="https://wa.me/573226125511?text=Hola! Vengo desde su sitio web." target="_blank" rel="noopener noreferrer" className="bg-gold text-navy font-bold text-center py-3 rounded mt-2">CONSULTA GRATIS</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: 'radial-gradient(ellipse at 60% 50%, #152238 0%, #0B1426 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[calc(100vh-80px)] flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <p className="text-gold font-semibold text-xs tracking-[3px] uppercase">TU DEFENSA, MI COMPROMISO</p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]">
                Abogado en Cartagena que <span className="text-gold">protege</span> lo que más importa.
              </h1>
              <p className="text-white/80 text-lg max-w-lg font-light leading-relaxed">
                Asesoría legal y representación especializada en derecho laboral, familiar, inmobiliario y empresarial.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="https://wa.me/573226125511?text=Hola! Deseo agendar una consulta." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-bold text-sm px-6 py-3.5 rounded transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(197,165,90,0.3)]">
                  <Calendar size={16} />
                  Agenda tu consulta
                </a>
                <a href="https://www.instagram.com/miguellaraabogados/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-medium text-sm hover:text-gold transition-colors group">
                  <span className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-gold transition-colors">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  Conoce más sobre mí
                </a>
              </div>
              
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <div className="flex flex-col border-l border-white/10 pl-3">
                  <span className="text-white font-bold text-sm">+50 <span className="font-normal text-white/70">casos resueltos</span></span>
                  <span className="text-white/50 text-xs">Cartagena de Indias</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                <div className="space-y-1">
                  <div className="text-gold"><Shield size={20} /></div>
                  <h4 className="text-white font-bold text-xs uppercase">Confidencialidad</h4>
                  <p className="text-white/50 text-[10px] leading-tight">Absoluta discreción y reserva profesional</p>
                </div>
                <div className="space-y-1">
                  <div className="text-gold"><Award size={20} /></div>
                  <h4 className="text-white font-bold text-xs uppercase">Experiencia</h4>
                  <p className="text-white/50 text-[10px] leading-tight">+10 años de trayectoria impecable</p>
                </div>
                <div className="space-y-1">
                  <div className="text-gold"><Heart size={20} /></div>
                  <h4 className="text-white font-bold text-xs uppercase">Compromiso</h4>
                  <p className="text-white/50 text-[10px] leading-tight">Tu tranquilidad es nuestra prioridad</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:flex justify-center items-end">
              <div className="relative w-full max-w-md bg-gradient-to-t from-navy to-transparent rounded-2xl overflow-hidden border border-white/10 p-2">
                <img src={heroPortrait} alt="Miguel Lara - Abogado en Cartagena" className="w-full h-auto object-contain max-h-[70vh] rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center z-10 pointer-events-none">
          <svg width="40" height="20" viewBox="0 0 40 20" className="text-gold"><path d="M0 0L20 20L40 0H0Z" fill="currentColor"/></svg>
        </div>
      </section>

      {/* --- AREAS DE PRACTICA --- */}
      <section id="areas-practica" className="py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold text-xs tracking-[3px] uppercase mb-3">ÁREAS DE PRÁCTICA</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">¿En qué puedo ayudarte?</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Derecho Laboral */}
            <a href="https://wa.me/573226125511?text=Hola! Necesito asesoría en Derecho Laboral." target="_blank" rel="noopener noreferrer" className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Briefcase size={22} className="text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">Derecho laboral</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">Liquidaciones, despidos injustificados, salarios y acoso laboral.</p>
              <span className="inline-flex items-center gap-1.5 text-gold font-bold text-sm group-hover:gap-2.5 transition-all">
                Consultar <ArrowRight size={14} />
              </span>
            </a>

            {/* Derecho Familia */}
            <a href="https://wa.me/573226125511?text=Hola! Necesito asesoría en Derecho de Familia." target="_blank" rel="noopener noreferrer" className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Heart size={22} className="text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">Derecho de familia</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">Procesos de divorcio, custodia de menores, alimentos y sucesiones.</p>
              <span className="inline-flex items-center gap-1.5 text-gold font-bold text-sm group-hover:gap-2.5 transition-all">
                Consultar <ArrowRight size={14} />
              </span>
            </a>

            {/* Derecho Inmobiliario */}
            <a href="https://wa.me/573226125511?text=Hola! Necesito asesoría en Derecho Inmobiliario." target="_blank" rel="noopener noreferrer" className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Home size={22} className="text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">Derecho Inmobiliario</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">Estudios de títulos, contratos de compraventa y arrendamientos.</p>
              <span className="inline-flex items-center gap-1.5 text-gold font-bold text-sm group-hover:gap-2.5 transition-all">
                Consultar <ArrowRight size={14} />
              </span>
            </a>

            {/* Derecho SST */}
            <a href="https://wa.me/573226125511?text=Hola! Necesito asesoría en Derecho de Seguridad y Salud en el Trabajo (SST)." target="_blank" rel="noopener noreferrer" className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Shield size={22} className="text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">Derecho SST</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">Implementación y auditorías del Sistema de Gestión SG-SST.</p>
              <span className="inline-flex items-center gap-1.5 text-gold font-bold text-sm group-hover:gap-2.5 transition-all">
                Consultar <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* --- SOBRE NOSOTROS --- */}
      <section id="por-que-elegirnos" className="py-24 bg-navy border-t border-b border-white/5 relative overflow-hidden" style={{ background: '#080F1D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative hidden lg:flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl border border-white/10 p-2 overflow-hidden bg-slate-900/50">
                <img src={aboutPortrait} alt="Miguel Lara Abogado" className="w-full h-auto object-contain max-h-[500px] rounded-xl" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gold font-bold text-xs tracking-[3px] uppercase">POR QUÉ ELEGIRNOS</p>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white leading-tight">
                Más de <span className="text-gold">10 años</span> defendiendo lo que más te importa.
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Mi misión es brindar asesoría legal honesta, clara y altamente efectiva. Cada caso es único, por eso diseño estrategias a la medida que protegen tus intereses personales y comerciales.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-gold font-bold flex items-center gap-2">
                    <Shield size={16} /> <span>PROTECCIÓN</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">Cada estrategia legal blinda y asegura lo que has construido con esfuerzo.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-gold font-bold flex items-center gap-2">
                    <Eye size={16} /> <span>CLARIDAD</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">Te explicamos tu caso sin tecnicismos complejos. Decisiones informadas, siempre.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-gold font-bold flex items-center gap-2">
                    <Award size={16} /> <span>RESULTADOS</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">Larga trayectoria de casos ganados y transacciones exitosas en Bolívar.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-gold font-bold flex items-center gap-2">
                    <Heart size={16} /> <span>CONFIANZA</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">Tu caso se convierte en nuestra prioridad absoluta. Tu tranquilidad es el fin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
          <svg width="40" height="20" viewBox="0 0 40 20" className="text-gold"><path d="M0 0L20 20L40 0H0Z" fill="currentColor"/></svg>
        </div>
      </section>

      {/* --- FORMULARIO Y CONSULTA --- */}
      <section id="consulta" className="py-24 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-gold font-bold text-xs tracking-[3px] uppercase">CONSULTA GRATUITA</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy leading-tight">
                Agenda tu consulta <br /> sin compromiso
              </h2>
              <div className="w-10 h-0.5 bg-gold"></div>
              
              <ul className="space-y-4 pt-2">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
                  <span className="text-gray-700 text-sm font-medium">Atención directa y personalizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
                  <span className="text-gray-700 text-sm font-medium">Evaluación preliminar de viabilidad legal</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
                  <span className="text-gray-700 text-sm font-medium">Diseño de soluciones jurídicas efectivas</span>
                </li>
              </ul>

              <div className="pt-4">
                <a href="https://wa.me/573226125511?text=Hola! Me interesa agendar mi consulta gratis." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(197,165,90,0.2)]">
                  <Calendar size={14} />
                  Agenda Vía WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
              <h3 className="font-bold text-xl text-navy mb-6">Cuéntame tu caso</h3>
              
              <AnimatePresence mode="wait">
                {!formSuccess ? (
                  <motion.form key="contact-form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre completo" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" 
                      />
                      <input 
                        type="tel" 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Teléfono de contacto" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" 
                      />
                    </div>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Correo electrónico" 
                      required 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" 
                    />
                    <textarea 
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Breve resumen de tu caso legal..." 
                      required 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                    ></textarea>
                    
                    <button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <Send size={14} />
                      Enviar Mensaje
                    </button>
                  </motion.form>
                ) : (
                  <motion.div key="success-message" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl font-bold">
                      ✓
                    </div>
                    <p className="font-bold text-lg text-navy mb-2">¡Mensaje enviado con éxito!</p>
                    <p className="text-sm text-gray-500">Nos pondremos en contacto contigo lo antes posible para evaluar tu caso.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIOS --- */}
      <section id="testimonios" className="py-20 bg-navy border-t border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-gold text-center mb-10">
            Lo que dicen nuestros clientes
          </h2>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10">
              <span className="text-gold text-5xl leading-none font-serif block mb-4">“</span>
              <p className="text-base sm:text-lg text-white/80 italic leading-relaxed mb-6">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-bold text-sm text-gold">{testimonials[currentTestimonial].author}</p>
                  <div className="flex gap-0.5 text-gold mt-1 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                
                {/* Dots */}
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentTestimonial ? 'bg-gold' : 'bg-white/20 hover:bg-white/40'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-gold border border-white/10 flex items-center justify-center transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-gold border border-white/10 flex items-center justify-center transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* --- BOLETÍN JURÍDICO / NEURAL FEED --- */}
      <section id="blog" className="py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-bold text-xs tracking-[3px] uppercase mb-3">TU BLOG</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">Últimas Noticias</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <article className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={blogFeatured} alt="¿Qué hacer si te despiden injustificadamente?" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <FileText size={14} />
                    <span className="text-xs font-mono">Mayo 15, 2026</span>
                  </div>
                  <h3 className="font-bold text-xl text-navy mb-3 leading-snug">¿Qué hacer si te despiden injustificadamente?</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Si te acaban de despedir y sospechas que fue injustificado, este artículo es para ti. En Cartagena vemos cada semana casos de trabajadores que aceptan liquidaciones mal calculadas o renuncian a sus derechos por desconocimiento.
                  </p>
                  <a href="https://wa.me/573226125511?text=Hola! Leí su artículo del blog y tengo una consulta sobre despido laboral." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gold font-bold text-sm group-hover:gap-2.5 transition-all">
                    Consultar Caso <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            </div>

            {/* Neural Feed (2 artículos de IA) */}
            <div className="lg:col-span-7">
              <NeuralFeed nodeId="40e60e70-f7a0-447b-89eb-7ebe8a67dfe8" />
            </div>
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAPS SECTION --- */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gold/10 rounded-xl text-gold border border-gold/20">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-navy uppercase tracking-wide font-display">Oficina Jurídica</h3>
                <p className="text-gray-500 text-sm mt-0.5">Ubicación y Sede de Operaciones</p>
              </div>
            </div>

            <div className="space-y-4 pl-1">
              <div className="flex items-start gap-3">
                <div className="text-gold mt-0.5"><MapPin size={16} /></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bosque Tv. 54 Barrio San Isidro <br />
                  Diagonal 25, #53A-59 Segundo Piso <br />
                  Cartagena de Indias, Bolívar, Colombia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-gold"><Clock size={16} /></div>
                <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM | Sábado: 9:00 AM - 1:00 PM</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-gold"><Phone size={16} /></div>
                <p className="text-sm text-gray-600">+57 322 612 5511</p>
              </div>
            </div>

            <div className="pt-2">
              <a href="https://www.google.com/maps/search/?api=1&query=10.391,-75.4794" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-navy hover:bg-navy/95 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 w-fit">
                Cómo Llegar
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md p-2 h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.712272173845!2d-75.47940031438455!3d10.39100029146969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef43f3c4c4c4c4c%3A0xd4d4d4d4d4d4d4d4!2sMiguel%20Lara%20Abogados!5e0!3m2!1ses!2sco!4v1675425425425!5m2!1ses!2sco"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-navy py-12 border-t border-white/10 text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">MIGUEL LARA ABOGADOS</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/miguellaraabogados/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Instagram
            </a>
            <a href="https://www.facebook.com/miguellaraabogados" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Facebook
            </a>
          </div>

          <div className="text-[10px] text-slate-600 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de WhatsApp (No superpuesto, desplazado a la izquierda) */}
      <a
        href="https://wa.me/573226125511?text=Hola! Vengo desde su sitio web."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
}