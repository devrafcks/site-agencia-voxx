'use client'
import { motion } from 'framer-motion'
import { MessageSquare, Clock, Send, User, Mail, MessageCircle, Info, MapPin, Phone } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
}

export default function Contato() {
  return (
    <main className="overflow-x-hidden bg-navy selection:bg-orange/20 selection:text-white">
      {/* ─── Hero / Form Section ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-navy min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-20 mix-blend-overlay" />
        
        <div className="voxx-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Esquerda: Texto e Cards */}
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
               <motion.h1 variants={fadeInUp} className="font-display font-black text-white leading-tight mb-8 max-w-lg" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                 Vamos criar algo <br/>
                 <span className="text-orange italic">extraordinário.</span>
               </motion.h1>
               <motion.p variants={fadeInUp} className="font-body text-cream/70 text-lg leading-relaxed max-w-lg mb-16">
                 Pronto para transformar sua visão em um ecossistema digital de alta performance? Nossa equipe está preparada para desenhar a estratégia que sua marca merece.
               </motion.p>
            </motion.div>

            {/* Direita: Formulário */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
               <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-bl-full pointer-events-none" />
                 
                 <h2 className="font-display font-bold text-navy text-2xl mb-1">Entre em Contato</h2>
                 <p className="font-body text-muted text-xs mb-8">Preencha os campos abaixo.</p>

                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div className="space-y-1.5">
                     <label className="font-body text-navy font-bold text-[10px] uppercase tracking-wider">Nome Completo</label>
                     <input type="text" className="w-full bg-cream/30 border border-navy/10 rounded-xl px-4 py-3 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-orange transition-all" placeholder="Como devemos chamar você?" />
                   </div>
                   
                   <div className="space-y-1.5">
                     <label className="font-body text-navy font-bold text-[10px] uppercase tracking-wider">E-mail Corporativo</label>
                     <input type="email" className="w-full bg-cream/30 border border-navy/10 rounded-xl px-4 py-3 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-orange transition-all" placeholder="nome@empresa.com" />
                   </div>

                   <div className="space-y-1.5">
                     <label className="font-body text-navy font-bold text-[10px] uppercase tracking-wider">Mensagem</label>
                     <textarea rows={3} className="w-full bg-cream/30 border border-navy/10 rounded-xl px-4 py-3 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-orange transition-all resize-none" placeholder="Conte-nos sobre o seu projeto..."></textarea>
                   </div>
                   
                   <div className="pt-2">
                     <button className="w-full py-4 rounded-xl bg-orange text-white font-body font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-orange/90 transition-all shadow-lg shadow-orange/20">
                       Enviar Solicitação <Send size={16} />
                     </button>
                   </div>
                   
                   <p className="font-body text-muted text-[10px] text-center mt-2 opacity-60">
                     Seus dados estão protegidos sob nossa política de privacidade.
                   </p>
                 </form>
               </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  )
}
