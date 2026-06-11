import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

const App = () => {
  const accentColor = 'blue-700';

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const posts = [
    {
      id: 1,
      title: 'Derecho Laboral',
      content: 'Asesoramiento y representación en materia laboral',
      image: 'https://picsum.photos/300/200',
      date: '10 de marzo de 2023',
    },
    {
      id: 2,
      title: 'Derecho de Familia',
      content: 'Asesoramiento y representación en materia de familia',
      image: 'https://picsum.photos/300/201',
      date: '15 de febrero de 2023',
    },
    {
      id: 3,
      title: 'Derecho Civil',
      content: 'Asesoramiento y representación en materia civil',
      image: 'https://picsum.photos/300/202',
      date: '20 de enero de 2023',
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget
        nodeName="Miguel Lara Abogados"
        adn="&quot;{\&quot;report\&quot;:\&quot;Derecho laboral, familia, civil, seguridad y salud en el trabajo e inmobiliario\&quot;,\&quot;opportunity_score\&quot;:95,\&quot;google_place_id\&quot;:\&quot;manual\&quot;,\&quot;location\&quot;:{\&quot;latitude\&quot;:10.391,\&quot;longitude\&quot;:-75.4794},\&quot;custom_parameters\&quot;:{\&quot;template\&quot;:\&quot;prism\&quot;,\&quot;color\&quot;:\&quot;Azul navy\&quot;,\&quot;business_name\&quot;:\&quot;Miguel Lara Abogados\&quot;,\&quot;niche\&quot;:\&quot;Servicios Jurídicos / Abogados\&quot;,\&quot;city\&quot;:\&quot;Cartagena, Colombia\&quot;,\&quot;description\&quot;:\&quot;Derecho laboral, familia, civil, seguridad y salud en el trabajo e inmobiliario\&quot;}}&quot;"
      />

      <div>
        <nav className="bg-blue-900 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
              Miguel Lara Abogados
            </h2>
            <a
              href="https://wa.me/573226125511?text=Hola! Vengo desde su sitio web."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Reservar
            </a>
          </div>
        </nav>

        <section className="py-20 px-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 rounded-full bg-blue-700" />
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">
              Miguel Lara Abogados
              <span className="text-blue-700"> - Servicios Jurídicos</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" alt={post.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      {post.title}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-700 hover:opacity-70 transition-opacity">
                    Leer Más <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12">
            Contacto
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-sm font-bold">Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              className="p-2 border border-gray-400 rounded bg-white text-black"
            />
            <label className="text-sm font-bold">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="p-2 border border-gray-400 rounded bg-white text-black"
            />
            <label className="text-sm font-bold">Mensaje:</label>
            <textarea
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              className="p-2 border border-gray-400 rounded bg-white text-black"
            />
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </form>
        </section>

        <section className="py-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12">
            ¿Cómo Llegar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.712272173845!2d-75.47940031438455!3d10.39100029146969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef43f3c4c4c4c4c%3A0xd4d4d4d4d4d4d4d4!2sMiguel%20Lara%20Abogados!5e0!3m2!1ses!2sco!4v1675425425425!5m2!1ses!2sco`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10.391,-75.4794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-700 hover:opacity-70 transition-opacity"
                >
                  Ver en Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Dirección:</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Calle 123, # 45-67, Cartagena, Colombia</p>
            </div>
          </div>
        </section>

        <NeuralFeed nodeId="40e60e70-f7a0-447b-89eb-7ebe8a67dfe8" />

        <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white uppercase tracking-wider">Miguel Lara Abogados</h3>
                  <p className="text-slate-400 text-sm mt-1">Cartagena, Colombia</p>
                  <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mt-0.5">Cartagena, Colombia</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10.391,-75.4794"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                Cómo Llegar
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-white tracking-wider">MIGUEL LARA ABOGADOS</span>
              <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02 2.5.06 4.13 1.04 4.96 3.29 1.11 3.02.37 6.11-.56 8.89-1.42 4.3-4.21 6.53-7.94 7.52-2.44.64-4.9.67-7.36.03-2.84-.73-4.79-2.43-6.13-5.15-.91-1.86-.93-3.88-.27-5.75.68-1.94 2.11-3.22 4.14-3.82 1.08-.32 2.19-.46 3.3-.46.53 0 1.06.03 1.59.09.01 1.48.01 2.96.01 4.44z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
              Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;