export function Footer() {
    return (
        <footer className="py-8 bg-card border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Vitória Jardim. Todos os direitos reservados.
                </p>
                <p className="text-xs text-muted-foreground/50 mt-2">
                    Design by Rarity Agency
                </p>
            </div>
        </footer>
    );
}
