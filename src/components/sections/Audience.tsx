"use client";

import { motion } from "framer-motion";
import { User, BatteryCharging, Heart, ShieldCheck } from "lucide-react";

export function Audience() {
    return (
        <section className="py-24 bg-card text-card-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold">Esse acompanhamento é para mulheres que:</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: ShieldCheck, text: "Querem começar a treinar com segurança e sem medo de lesões" },
                        { icon: BatteryCharging, text: "Buscam evolução física e mental constante" },
                        { icon: Heart, text: "Desejam melhorar performance e qualidade de vida" },
                        { icon: User, text: "Querem um treino pensado exclusivamente para elas" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-background/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-background/60 transition-colors text-center group"
                        >
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-8 h-8 text-primary" />
                            </div>
                            <p className="font-medium text-lg leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
