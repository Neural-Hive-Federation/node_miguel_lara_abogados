import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface FeedItem {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export const NeuralFeed: React.FC<{ nodeId?: string }> = () => {
  const feedItems: FeedItem[] = [
    {
      id: 1,
      category: "Derecho Laboral",
      title: "Claves sobre la Indemnización por Despido Injustificado",
      excerpt: "Conozca los límites legales y el cálculo correcto de la indemnización laboral para proteger sus derechos contractuales.",
      date: "Hoy"
    },
    {
      id: 2,
      category: "Derecho Familiar",
      title: "Guía Práctica para Procesos de Sucesiones",
      excerpt: "Cómo tramitar herencias y distribución de bienes de forma pacífica y conforme al código civil colombiano.",
      date: "Ayer"
    },
    {
      id: 3,
      category: "Inmobiliario",
      title: "Protección Contractual en Contratos de Arrendamiento",
      excerpt: "Evite disputas futuras con cláusulas claras de mantenimiento, incrementos de ley y condiciones de entrega del inmueble.",
      date: "Hace 5 días"
    }
  ];

  return (
    <section className="py-20 bg-black/50 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-8">
          Boletín Jurídico
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedItems.map((item) => (
            <div 
              key={item.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-700/50 hover:bg-blue-950/5 transition-all group duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-950/40 px-2.5 py-1 rounded border border-blue-900/40">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-gray-500 flex items-center gap-1">
                    <Calendar size={10} />
                    {item.date}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                  {item.excerpt}
                </p>
              </div>
              <a 
                href="https://wa.me/573226125511?text=Hola! Me interesa asesoría legal sobre: "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Consultar Caso <ArrowUpRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
