"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe } from "lucide-react";
import Image from "next/image";
import { LeadModal } from "@/components/LeadModal";

export function Consulting() {
    return (
        <section className="py-12 md:py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual - Running Aesthetic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full"
                    >
                        <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/vitoria_futevolei_2.jpg"
                                alt="Consultoria Online Vitória Jardim"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                <p className="text-white font-display font-bold">Liberdade Geográfica</p>
                                <p className="text-xs text-gray-300">Treine onde e quando quiser</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold tracking-wider uppercase border border-primary/20">
                            <Globe className="w-4 h-4" />
                            Treine sem Fronteiras
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight font-display">
                            A mesma <span className="text-primary">excelência</span>, em qualquer lugar do mundo.
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            A consultoria online não é um "plano genérico". É a minha metodologia de performance adaptada para a sua realidade. Seja numa academia de rede, no box de CrossFit ou na garagem de casa.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Eu analiso seus movimentos, ajusto sua técnica e periodizo sua evolução através de um aplicativo exclusivo. Você nunca mais vai se sentir perdida na hora de treinar.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                "Prescrição individualizada baseada no seu objetivo",
                                "Análise de vídeos para correção técnica (feedback real)",
                                "Ajustes de carga e intensidade semanais",
                                "Suporte direto via WhatsApp para dúvidas"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <LeadModal
                                size="lg"
                                className="w-full sm:w-auto bg-white text-background hover:bg-gray-100"
                                triggerText="Quero Consultoria Online"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
