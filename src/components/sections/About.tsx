"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Texture - Clean & Subtle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content - Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <span className="text-primary font-display uppercase tracking-[0.2em] text-xs font-bold pl-1">O Diferencial</span>
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] font-[family-name:var(--font-playfair)]">
                                Não é sobre <span className="italic text-primary/90">"malhar"</span>.<br />
                                É sobre se sentir capaz no próprio corpo.
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                A maioria das mulheres que chega até mim <strong className="text-white font-medium">já treina</strong>.
                                Mas ainda assim sente que algo não encaixa.
                            </p>
                            <p>
                                O corpo demora a responder, as dores aparecem antes dos resultados e o treino deixa de ser confiança — vira frustração.
                            </p>
                            <p>
                                Meu trabalho é te ajudar a construir um corpo <span className="text-white font-medium">forte, funcional e preparado para a sua vida real</span>. Com método, acompanhamento e objetivo em cada treino.
                            </p>
                            <p>
                                Minha abordagem é diferente porque a origem dela é diferente. Com mais de <span className="text-white font-medium">12 anos como atleta de natação</span> e vivência intensa no <span className="text-white font-medium">CrossFit</span>, eu entendi que o segredo não está na carga que você levanta, mas na <em className="font-[family-name:var(--font-playfair)] italic">qualidade e na intenção</em> de cada sessão de treino.
                            </p>
                            <p>
                                Eu entrego o fim das suas dúvidas na academia, junto com a certeza de que cada gota de suor está te levando para um corpo mais forte, funcional e esteticamente poderoso.
                            </p>
                        </div>

                        <div className="pt-6 grid grid-cols-2 gap-8 border-t border-white/10">
                            <div>
                                <h4 className="text-4xl font-[family-name:var(--font-playfair)] text-white mb-2">12+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Anos de Performance</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-[family-name:var(--font-playfair)] text-white mb-2">L1</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Trainer Certificada</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 shadow-2xl">
                            <Image
                                src="/vitoria_swimming_peito.jpg"
                                alt="Foco e Performance no Treino"
                                fill
                                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl italic leading-tight mb-4">
                                    "Força se constrói.<br />
                                    Confiança também."
                                </p>
                                <p className="text-primary text-xs uppercase tracking-widest">Vitória Jardim</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
