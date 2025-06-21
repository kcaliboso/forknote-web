import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { createImageUrl } from "@/lib/utils";

interface CarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: CarouselProps) {
  return (
    <Carousel
      className="w-full max-w-[260px] lg:max-w-sm xl:max-w-xl"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem className="" key={image}>
            <img
              src={createImageUrl(image, "recipes")}
              alt="ingredient-image"
              className=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
