import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h2 className="text-3xl font-bold mb-4">La page n'a pas été trouvée.</h2>
      <p className="mb-6">Désolé, la page que vous cherchez n'existe pas.</p>
      <Button>
        <Link href="/" className="underline">
          Retournez à l'accueil
        </Link>
      </Button>
    </div>
  );
}
