"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const CarouselInfo = [
  {
    title: "Leilões ativos",
    description: 100,
  },
  {
    title: "Cidades ativas",
    description: 1240,
  },
];

export default function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {CarouselInfo.map((info, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-1">
              <Card className="h-full">
                <CardHeader className="text-center text-xl font-bold uppercase">
                  {info.title}
                </CardHeader>
                <Separator />
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-lg font-semibold">
                    {info.description}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
