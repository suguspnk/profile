import Autoplay from 'embla-carousel-autoplay'; // Import Autoplay plugin
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons for buttons
import React, { useCallback, useEffect, useState } from 'react';

// Simple Skeleton Loader Component - REMOVED
// const SkeletonLoader = () => (
//   <div className="animate-pulse bg-muted rounded-lg w-[150px] h-[270px]"></div>
// );

const Certifications = () => {
  // const [isLoading, setIsLoading] = useState(true); // State to track badge loading - REMOVED

  // Add useEffect hook inside the component to load the script
  useEffect(() => {
    // setIsLoading(true); // Start loading - REMOVED
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';

    // Script load handler - REMOVED
    // script.onload = () => {
    //   setIsLoading(false); // Mark loading as complete when script loads
    // };

    // Script error handler - REMOVED
    // script.onerror = () => {
    //   console.error('Failed to load Credly script.');
    //   setIsLoading(false); // Stop loading indicator even on error
    // };

    // Check if the script already exists
    const existingScript = document.querySelector(
      `script[src="${script.src}"]`
    );
    if (!existingScript) {
      document.body.appendChild(script);
    }
    // else block related to isLoading removed

    // Cleanup function (optional: remove script tag)
    return () => {
      // Decide if script removal is needed based on application structure
      // Generally, it might be safer to leave it if multiple components use it
      // const scriptToRemove = document.querySelector(`script[src="${script.src}"]`);
      // if (scriptToRemove && document.body.contains(scriptToRemove)) {
      //   document.body.removeChild(scriptToRemove);
      // }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ] // Add Autoplay plugin
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // State for selected dot index

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Function to scroll to a specific dot/slide
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap()); // Update selected index
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  const certificationsData = [
    { id: 'f9b18950-7008-467d-83da-c6b22b5ed68c' },
    { id: 'aa7a1763-cddb-477b-b751-b3a6d29d43a2' },
    { id: 'bd099484-198d-485e-b889-75f27080b0d5' },
    { id: '299e2dde-b63d-407f-88d2-454e105b48c3' },
    { id: 'f4f5e6b5-923c-42a6-bf39-d4c61a9eebf3' },
    { id: '12ebf105-8755-4ec9-ba33-194ba822472c' },
  ];

  return (
    <section
      id="certifications"
      className="section bg-background text-foreground relative overflow-hidden"
      style={{ '--delay': 5 } as React.CSSProperties}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 md:mb-16 text-center">
          Certifi<span className="text-accent">cations</span>
        </h2>

        {/* Embla Carousel Structure */}
        <div className="relative">
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex -ml-4">
              {' '}
              {/* Negative margin to counteract padding */}
              {certificationsData.map((cert, index) => (
                <div
                  className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
                  key={index}
                >
                  {' '}
                  {/* Adjust basis for number of items visible */}
                  <div className="bg-card p-4 rounded-lg border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col items-center w-full h-full justify-center aspect-w-9 aspect-h-16">
                    {/* Maintain aspect ratio */}
                    {/* Conditional rendering removed - always show badge div */}
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id={cert.id}
                      data-share-badge-host="https://www.credly.com"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Slightly adjusted styling */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-card/70 hover:bg-card/90 text-foreground rounded-full p-2 shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Previous certification"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-card/70 hover:bg-card/90 text-foreground rounded-full p-2 shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Next certification"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {certificationsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === selectedIndex
                  ? 'bg-primary'
                  : 'bg-muted-foreground/50 hover:bg-muted-foreground'
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
