import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0 align-middle">
      {children}
    </Heading>
  ),
};

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  const { backgroundImage, text, buttonLink, buttonText } = slice.primary;

  return (
    <section className="relative text-white">
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none max-h-[60vh] max-w-7xl object-cover mx-auto animate-fade-down animate-delay-75"
        />
      )}
      <Bounded yPadding="lg" className="relative">
        <div className="grid justify-items-start gap-8 animate-fade-down animate-delay-300">
          <div className="max-w-4xl text-left">
            <PrismicRichText
              field={text}
              components={components}
            />
          </div>
          {isFilled.link(buttonLink) && (
            <PrismicNextLink
              field={buttonLink}
              className="
              rounded px-5 py-3 font-medium text-black bg-green-500 
              animate-wiggle-more animate-infinite animate-delay-700 animate-duration-1000"
            >
              {buttonText || "Learn More"}
            </PrismicNextLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
