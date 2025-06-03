"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import {Card, CardHeader, CardDescription, CardContent} from "@/components/ui/card"
import AutoScroll from "embla-carousel-auto-scroll";
import PointLight from "@/public/test_point_light_3_.png"
import Image from "next/image"

export default function Projects () {
  return (
    <div className="mx-auto flex flex-col items-center justify-center min-h-[80vh] text-center">
      <Carousel
        opts={{loop: true, align:"start"}}
        plugins={[
          AutoScroll({
            speed: 2,
            startDelay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Card className="text-center">
              <CardHeader>
                Raytracer
              </CardHeader>
              <CardDescription>
                Faire un Raytracer en Cpp 
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="text-center">
              <CardHeader>
                Jetpack 
              </CardHeader>
              <CardDescription>
                Recrée le jeu Jetpack Joyride en réseau en C/Cpp 
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="text-center">
              <CardHeader>
                Zappy 
              </CardHeader>
              <CardDescription>
                Crée un server, une ia et un gui afin de jouer en réseau à jeu d'affrontement d'ia 
              </CardDescription>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
