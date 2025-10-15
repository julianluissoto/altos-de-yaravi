import { Mountain, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
            <Mountain className="h-4 w-4" />
            <p>&copy; {new Date().getFullYear()} Altos de Yaraví | Refugios. Todos los derechos reservados.</p>
        </div>
        <Link href="https://www.linkedin.com/in/julian-soto-dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-center hover:text-foreground transition-colors">
          Diseñado por Julian Soto
          <Linkedin className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}
