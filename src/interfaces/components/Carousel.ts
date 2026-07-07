import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode | ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}
