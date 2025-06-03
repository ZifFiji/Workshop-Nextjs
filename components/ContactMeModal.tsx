import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger} from "@/components/ui/dialog"
import {NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu"


export function ContactMeModal({ isOpen }: { isOpen: boolean }) {
  return (
    <Dialog>
      <form>
      <DialogTrigger>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Me contacter
        </NavigationMenuLink>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Me contacer</DialogTitle>
            <DialogDescription>
              Saisissez votre nom, email et votre demande.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nom</Label>
              <Input id="nom" name="nom" defaultValue="..." />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Email</Label>
              <Input id="email" name="email" type="email" defaultValue="nom@gmail.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Demande</Label>
              <Input id="ask" name="ask" defaultValue="Je vous contacte pour ..." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit">Envoyer</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    // <Card className="w-full max-w-sm">
    //   <CardHeader>
    //     <CardTitle>Contactez-moi</CardTitle>
    //     <CardDescription>
    //       Entrez votre email et le motif du message. 
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <form>
    //       <div className="flex flex-col gap-6">
    //         <div className="grid gap-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="m@example.com"
    //             required
    //           />
    //         </div>
    //         <div className="grid gap-2">
    //           <div className="flex items-center">
    //             <Label htmlFor="message">Message</Label>
    //           </div>
    //           <Input id="message" required />
    //         </div>
    //       </div>
    //     </form>
    //   </CardContent>
    //   <CardFooter className="flex-col gap-2">
    //     <Button type="submit" className="w-full">
    //       Login
    //     </Button>
    //     <Button variant="outline" className="w-full">
    //       Login with Google
    //     </Button>
    //   </CardFooter>
    // </Card>
  )
}
