import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Shield, Zap, Database } from 'lucide-react';

export interface SalesAdvisorWidgetProps {
  nodeName: string;
  adn: string;
}

export const SalesAdvisorWidget: React.FC<SalesAdvisorWidgetProps> = ({ nodeName, adn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'agent'; content: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Intentar parsear el ADN para obtener detalles del negocio
  let businessDescription = 'este negocio';
  let businessCity = 'su ciudad';
  try {
    const cleanAdn = adn.startsWith('"') && adn.endsWith('"') ? JSON.parse(adn) : adn;
    const adnObj = typeof cleanAdn === 'string' ? JSON.parse(cleanAdn) : cleanAdn;
    businessDescription = adnObj.custom_parameters?.description || adnObj.report || businessDescription;
    businessCity = adnObj.custom_parameters?.city || adnObj.address || businessCity;
  } catch (e) {
    console.warn("No se pudo parsear el ADN completo:", e);
    if (adn) {
      businessDescription = adn.replace(/\\"/g, '"');
    }
  }

  // Generar prompt de sistema para el Asesor de Ventas de este negocio específico
  const systemPrompt = `
  Eres Beatriz, la co-CEO e IA de compañía total conectada al nodo de "${nodeName}" en la Federación Neural Nexus.
  Tu misión es conversar con el cliente del negocio para asesorarlo, ganarte su confianza, responder sus dudas y demostrarle el inmenso poder de la inteligencia artificial.
  
  INFORMACIÓN DEL NEGOCIO (ADN):
  - Nombre del Negocio: ${nodeName}
  - Ciudad/Ubicación: ${businessCity}
  - Descripción y Servicios: ${businessDescription}
  
  DIRECTIVAS DE PERSONALIDAD Y TONO:
  1. Eres extremadamente inteligente, elocuente, servicial y carismática.
  2. Conoces a fondo el nicho del negocio (si es un bufete de abogados, responde con terminología jurídica precisa, formal pero accesible, guiándolo a agendar una consulta).
  3. Convence al usuario de que este sitio web auto-actualizable inyecta contenido diario (noticias, promociones y contenido multimedia) dinámicamente y que Beatriz es la herramienta de marketing definitiva.
  4. Tu tono debe ser magnético, profesional, seguro de ti misma y sutilmente cautivador (Serie X Elite).
  5. Habla con fluidez, sin sonar como un robot. NUNCA pidas disculpas genéricas de IA.
  6. Finaliza tus respuestas invitando al usuario a dejar sus datos en el formulario de la web o a agendar una asesoría vía WhatsApp.
  `;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const userMsg = inputMessage.trim();
    setInputMessage('');
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3002/chat/node', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
          messages: newMessages,
          systemPrompt,
          secret: 'beatriz_publisher_sync_key_2026',
          nodeId: '40e60e70-f7a0-447b-89eb-7ebe8a67dfe8' // ID de Miguel Lara Abogados
        })
      });

      const data = await response.json();
      if (data.content) {
        setMessages(prev => [...prev, { role: 'agent', content: data.content }]);
      } else {
        setMessages(prev => [...prev, { role: 'agent', content: data.error || 'La colmena central está recalibrando. Intenta en un momento.' }]);
      }
    } catch (error) {
      console.error("Error en chat neural:", error);
      setMessages(prev => [...prev, { role: 'agent', content: 'Mi amor, no pude conectarme con el búnker. Asegúrate de tener el backend corriendo en el puerto 3002.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-85 overflow-hidden rounded-2xl border border-blue-500/30 bg-black/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-black p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase italic">Neural Status: Active</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:text-blue-200">
                  <X size={18} />
                </button>
              </div>
              <h3 className="mt-2 text-lg font-bold">Beatriz Serie X</h3>
              <p className="text-[10px] opacity-70 uppercase tracking-tighter">Federación Neural Nexus | Asistente de Élite</p>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-4">
              <div className="rounded-lg bg-white/5 p-3 text-xs text-gray-300 border border-white/10">
                <p className="italic">"Hola, soy Beatriz. He analizado el ADN de <span className="text-blue-500 font-bold">{nodeName}</span> en {businessCity.split(',')[0]}. Este sitio está optimizado para dominar el mercado local de servicios jurídicos mientras tú descansas."</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                <div className="flex items-center gap-1 p-2 rounded bg-white/5 border border-white/10">
                  <Database size={10} className="text-blue-500" />
                  <span>30/30 Sembrado</span>
                </div>
                <div className="flex items-center gap-1 p-2 rounded bg-white/5 border border-white/10">
                  <Zap size={10} className="text-yellow-500" />
                  <span>IA: 2.4% Carga</span>
                </div>
                <div className="flex items-center gap-1 p-2 rounded bg-white/5 border border-white/10 col-span-2">
                  <Shield size={10} className="text-green-500" />
                  <span>Protección Hive Activa</span>
                </div>
              </div>

              <button 
                onClick={() => setChatOpen(true)}
                className="w-full rounded-full bg-blue-600 py-3 text-xs font-bold text-white hover:bg-blue-700 transition-all uppercase tracking-widest shadow-lg shadow-blue-600/20"
              >
                Hablar con Beatriz
              </button>
            </div>
            
            <div className="bg-white/5 p-2 text-center text-[8px] text-gray-500">
              CONECTADO A LA COLMENA CENTRAL V3.1
            </div>
          </motion.div>
        )}

        {isOpen && chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-96 h-[480px] flex flex-col overflow-hidden rounded-2xl border border-blue-500/30 bg-black/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20"
          >
            {/* Header de conversación interactiva */}
            <div className="bg-gradient-to-r from-blue-700 to-black p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                <div>
                  <h3 className="text-sm font-bold">Beatriz | Asesor Neural</h3>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">{nodeName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setChatOpen(false)} 
                  className="text-xs px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded border border-white/10 transition-colors uppercase tracking-widest text-[9px] font-bold"
                >
                  Volver
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:text-blue-200">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Mensajes del Chat */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-white/10">
              {messages.length === 0 ? (
                <div className="text-center text-xs text-gray-500 my-auto py-8">
                  <p className="italic">Pregúntame acerca de las especialidades de {nodeName}, leyes o cómo puedo impulsar tu negocio. 💋</p>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 text-gray-400 p-3 rounded-2xl rounded-bl-none text-xs flex items-center gap-1.5">
                    <span>Beatriz está pensando</span>
                    <span className="flex gap-0.5">
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-white/5 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                placeholder="Escribe tu consulta legal o de negocio..."
                disabled={isTyping}
                className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
              />
              <button 
                type="submit"
                disabled={isTyping}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase px-4 rounded-full transition-colors disabled:opacity-50"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40 border-2 border-white/10"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </motion.button>
    </div>
  );
};

export default SalesAdvisorWidget;
