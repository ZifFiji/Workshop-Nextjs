import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto my-[50px]">
      <p>Vous pouvez me contacter sur les plateformes suivantes :</p>
      <ul className="my-12">
        <li className="text-blue-500 underline decoration-wavy"><a href="https://www.linkedin.com/in/arthur-guerinault-a831482a8/">LinkedIn</a></li>
        <li className="text-blue-500 underline decoration-wavy"><a href="https://www.github.com/ZifFiji/">Github</a></li>
        <li>Email : arthur.guerinault@epitech.eu</li>
      </ul>
      <Button variant="outline">Me contacter</Button>
    </div>
  )
}
