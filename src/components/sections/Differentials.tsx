"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Differentials() {
    const items = [
        "Atendimento humanizado",
        "Treinos realmente personalizados",
        "Experiência prática como atleta e treinadora",
        "Atuação em múltiplas modalidades",
        "Foco em resultados sustentáveis e saudáveis"
    ];

    return (
        <section className="py-12 md:py-20 bg-background/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-card rounded-[2rem] shadow-xl p-8 lg:p-16 relative overflow-hidden text-card-foreground border border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Por que escolher a Vitória?</h2>
                            <p className="text-muted-foreground mb-8 text-sm md:text-base">
                                Não é apenas sobre exercícios, é sobre construir uma relação saudável e potente com seu corpo, com o suporte de quem vive o esporte todos os dias.
                            </p>
                            <ul className="space-y-4">
                                {items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Star className="w-4 h-4 text-primary fill-primary" />
                                        </div>
                                        <span className="font-medium text-foreground">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden bg-background/50">
                            {/* Abstract Representation of Quality */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-background/40 flex items-center justify-center">
                                <span className="text-muted-foreground font-bold text-6xl opacity-20">QUALITY</span>
                            </div>
                            {/* Ideally this would be another photo of Vitoria teaching/training */}
                            <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur p-4 rounded-xl shadow-sm text-center border border-white/5">
                                <p className="text-primary font-bold text-xl">100%</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Comprometimento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
