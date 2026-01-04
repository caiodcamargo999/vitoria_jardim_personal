"use client";

import { motion } from "framer-motion";
import {
    Dumbbell,
    Waves,
    Trophy,
    Activity
} from "lucide-react";

const services = [
    {
        title: "CrossFit",
        icon: Dumbbell,
        description: "Treinos personalizados ou em pequenos grupos. Força, condicionamento, mobilidade e técnica. Para iniciantes e avançadas.",
        color: "bg-primary/20 text-primary"
    },
    {
        title: "Natação",
        icon: Waves,
        description: "Aulas para mulheres e crianças. Aprimoramento técnico, condicionamento, reabilitação e respiração.",
        color: "bg-blue-500/20 text-blue-400"
    },
    {
        title: "Futevôlei",
        icon: Trophy,
        description: "Aulas individuais ou em grupo. Técnica, movimentação e preparo físico. Para iniciantes e praticantes.",
        color: "bg-indigo-500/20 text-indigo-400"
    },
    {
        title: "Musculação",
        icon: Dumbbell,
        description: "Treinos personalizados com progressão segura e foco em resultados duradouros.",
        color: "bg-cyan-500/20 text-cyan-400"
    },
    {
        title: "Treinamento Funcional",
        icon: Activity,
        description: "Generalizado ou específico para desempenho esportivo. Treinos focados nos movimentos funcionais do seu objetivo, alinhando coordenação, força, resistência e consciência corporal.",
        color: "bg-purple-500/20 text-purple-400"
    }
];

export function Services() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white mb-6 tracking-tight">
                        Como posso te ajudar
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg tracking-wide uppercase text-xs md:text-sm">
                        Metodologias validadas para você atingir sua melhor versão
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 max-w-[1400px] mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="h-full p-8 flex flex-col items-center text-center bg-white/[0.03] border border-white/[0.05] hover:border-primary/30 hover:bg-white/[0.06] rounded-sm transition-all duration-500 ease-out group-hover:-translate-y-2">
                                <div className={`w-12 h-12 rounded-full ${service.color} bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 mb-8`}>
                                    <service.icon className="w-5 h-5 opacity-80" />
                                </div>

                                <h3 className="text-xl font-[family-name:var(--font-playfair)] text-white mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-400 font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
