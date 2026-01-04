"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Pode ser usado como fallback ou se children for passado
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";

interface LeadModalProps {
    children?: React.ReactNode;
    variant?: "default" | "outline" | "ghost" | "secondary" | "link" | "destructive";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    triggerText?: string;
}

// Custom WhatsApp Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
    )
}

export function LeadModal({
    children,
    variant = "default",
    size = "lg",
    className,
    triggerText = "Quero treinar com a Vitória"
}: LeadModalProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const cleanPhone = phone.replace(/\D/g, "");
        const message = `Olá, meu nome é ${name}. Gostaria de saber mais sobre os treinamentos personalizados.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/5551991229234?text=${encodedMessage}`;

        fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone }),
        }).catch((err) => console.error("Failed to capture lead:", err));

        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setLoading(false);
            setOpen(false);
        }, 800);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children ? children : (
                    <CraftButton className={cn("bg-primary text-primary-foreground hover:bg-primary/90", className)}>
                        <CraftButtonLabel className="text-sm md:text-base font-bold tracking-widest">{triggerText}</CraftButtonLabel>
                        <CraftButtonIcon>
                            <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                        </CraftButtonIcon>
                    </CraftButton>
                )}
            </DialogTrigger>
            <DialogContent className="w-[90%] md:w-full sm:max-w-[425px] bg-[#0A0E17]/95 border-primary/20 backdrop-blur-xl shadow-2xl shadow-primary/10 rounded-2xl p-0 overflow-hidden ring-1 ring-white/10">
                {/* Decorative Top Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

                <div className="p-6 md:p-8 space-y-5 md:space-y-6 relative z-10">
                    <DialogHeader className="space-y-2 md:space-y-3">
                        <DialogTitle className="text-2xl md:text-3xl font-black font-display text-center text-white tracking-tight uppercase text-balance">
                            Vamos <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Começar?</span>
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-400 text-sm md:text-base leading-relaxed text-balance">
                            Preencha seus dados abaixo para iniciar sua transformação com a Vitória no WhatsApp.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 mt-2 md:mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-primary/80 ml-1">Seu Nome</Label>
                            <div className="relative group">
                                <Input
                                    id="name"
                                    placeholder="Como gostaria de ser chamada?"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="h-11 md:h-12 pl-4 pr-4 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-sm md:text-base"
                                />
                                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-primary/80 ml-1">Seu WhatsApp</Label>
                            <div className="relative group">
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="(00) 99999-9999"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="h-11 md:h-12 pl-4 pr-4 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-sm md:text-base"
                                />
                                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
                            </div>
                        </div>

                        <CraftButton
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-400 text-primary-foreground font-bold h-12 md:h-14 rounded-xl shadow-lg shadow-primary/25 hover:shadow-pink-500/40 mt-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="animate-pulse">Redirecionando...</span>
                            ) : (
                                <>
                                    <CraftButtonLabel className="text-base md:text-lg tracking-wide">Falar no WhatsApp</CraftButtonLabel>
                                    <CraftButtonIcon>
                                        <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                                    </CraftButtonIcon>
                                </>
                            )}
                        </CraftButton>

                        <p className="text-[10px] md:text-xs text-center text-gray-600 mt-3 md:mt-4">
                            * Seus dados estão seguros e não enviaremos spam.
                        </p>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
