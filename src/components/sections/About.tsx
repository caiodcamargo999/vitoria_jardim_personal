"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section className="py-12 md:py-24 bg-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content - Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-primary font-display uppercase tracking-widest text-sm font-bold">O Diferencial</span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                                Não é sobre "malhar", é sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">construir capacidade</span>.
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                A maioria das mulheres que chega até mim tem uma queixa comum: <strong>elas treinam, mas não se sentem "atletas" de suas próprias vidas.</strong> O corpo não muda na velocidade desejada, e as dores aparecem mais que os resultados.
                            </p>
                            <p>
                                Minha abordagem é diferente porque a origem dela é diferente. Com mais de <span className="text-white font-bold">12 anos como atleta de natação</span> e vivência intensa no <span className="text-white font-bold">CrossFit</span>, eu entendi que o segredo não está na carga que você levanta, mas na <em>qualidade</em> do movimento que você executa.
                            </p>
                            <p>
                                Eu não vendo apenas fichas de treino. Eu vendo o fim das suas dúvidas na academia. Eu entrego a certeza de que cada gota de suor está te levando para um corpo mais forte, funcional e esteticamente poderoso.
                            </p>
                        </div>

                        <div className="pt-4 grid grid-cols-2 gap-6">
                            <div className="p-4 bg-card border border-white/5 rounded-xl">
                                <h4 className="text-3xl font-black text-white font-display mb-1">12+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Anos de Performance</p>
                            </div>
                            <div className="p-4 bg-card border border-white/5 rounded-xl">
                                <h4 className="text-3xl font-black text-white font-display mb-1">L1</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Trainer Certificada</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content - Gym Aesthetic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
                            <Image
                                src="/gym_aesthetic.png"
                                alt="Foco e Performance no Treino"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white font-display text-xl font-bold uppercase leading-tight">
                                    "Sua disciplina define onde você chega."
                                </p>
                                <p className="text-primary text-sm mt-2">Vitória Jardim</p>
                            </div>
                        </div>
                        {/* Decorative Ring */}
                        <div className="absolute -inset-4 border border-primary/20 rounded-[20px] -z-10 translate-x-4 translate-y-4" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
