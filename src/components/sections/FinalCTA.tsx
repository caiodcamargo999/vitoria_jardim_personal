"use client";

import { LeadModal } from "@/components/LeadModal";

export function FinalCTA() {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                        Pronta para começar?
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Entre em contato e dê o primeiro passo para uma rotina de treino mais forte, saudável e alinhada com seus objetivos.
                    </p>
                    <div className="pt-4">
                        <LeadModal
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-widest text-xl px-12 py-8 h-auto w-full sm:w-auto shadow-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl"
                            triggerText="INICIAR TREINO"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
