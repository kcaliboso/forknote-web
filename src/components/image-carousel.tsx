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
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem className="basis-1/3" key={image}>
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
