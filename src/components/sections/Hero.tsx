"use client";

import Image from "next/image";
import { LeadModal } from "@/components/LeadModal";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background py-20 md:py-0">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/vitoria_autoridade.jpeg"
                    alt="Vitória Jardim Background"
                    fill
                    className="object-cover object-[50%_0%] md:object-[50%_25%] opacity-100 blur-[4px]"
                    priority
                />
                {/* Intensified Blue Blur Overlay */}
                <div className="absolute inset-0 bg-blue-950/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-blue-900/30 to-blue-900/50" />
            </div>

            <div className="container mx-auto px-4 relative z-10 grid place-items-center text-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8 max-w-4xl"
                >
                    <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-md border border-primary/30 text-primary font-bold rounded-full text-xs md:text-sm uppercase tracking-[0.2em] shadow-lg shadow-primary/10 mb-6">
                        Alta Performance & Resultado
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display text-white uppercase tracking-tighter leading-[1.1] drop-shadow-2xl text-balance">
                        Sua Força Vai Além do que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary">Você Imagina</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md text-balance">
                        Você treina, se esforça, mas sente que estagnou? Chegou a hora de parar de fazer "apenas exercícios" e começar a treinar com <strong>intencionalidade clínica</strong>.
                        Uma metodologia validada por anos de esporte de alto rendimento, agora ao seu alcance.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <LeadModal
                            size="lg"
                            className="font-display uppercase tracking-widest text-lg px-10 py-8 h-auto w-full sm:w-auto shadow-primary/50 shadow-2xl hover:shadow-primary/70 border-2 border-primary/50 bg-primary/80 backdrop-blur-sm hover:bg-primary transition-all duration-300"
                            triggerText="INICIAR TREINO"
                        />
                        {/* Optional Secondary Link/Info */}
                        <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Faça uma consultoria online gratuita
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
