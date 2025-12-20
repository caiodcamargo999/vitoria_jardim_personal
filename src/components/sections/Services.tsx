"use client";

import { motion } from "framer-motion";
import {
    Dumbbell,
    Waves,
    Trophy,
    Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        title: "Liberação Miofascial",
        icon: Activity,
        description: "Alívio de dores e tensões. Prevenção de lesões, recuperação muscular e melhora da mobilidade.",
        color: "bg-cyan-500/20 text-cyan-400"
    }
];

export function Services() {
    return (
        <section className="py-12 md:py-20 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Como posso te ajudar</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Metodologias validadas para você atingir sua melhor versão, seja na terra ou na água.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-card text-card-foreground">
                                <CardHeader>
                                    <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
