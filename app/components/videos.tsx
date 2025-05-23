"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "@/app/context/context";
import { ContactModalState } from "@/app/types/types";

function Video() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const context = useContext(AppContext);
  const setIsContactModalOpen = context?.setIsContactModalOpen ?? (() => {});
  const setIsMobileNavOpen = context?.setIsMobileNavOpen ?? (() => {});

  const videoSrcs = [
    {
      src: "/videos/video1.mp4",
      title: "CodeJayXchangeAd",
      thumbnail: "/images/codejaylogo.jpeg",
    },
    {
      src: "/videos/video2.mp4",
      title: "CodeJayXchangeAd",
      thumbnail: "/images/codejaylogo.jpeg",
    },
    {
      src: "/videos/video3.mp4",
      title: "CodeJayXchangeAd",
      thumbnail: "/images/codejaylogo.jpeg",
    },
    {
      src: "/videos/video4.mp4",
      title: "CodeJayXchangeAd",
      thumbnail: "/images/codejaylogo.jpeg",
    },
    {
      src: "/videos/video5.mp4",
      title: "CodeJayXchangeAd",
      thumbnail: "/images/codejaylogo.jpeg",
    },
  ];

  // Add this to your state variables at the top of the component
  const [userControlled, setUserControlled] = useState(false);

  // Add/modify the togglePlay function like this
  const togglePlay = () => {
    setUserControlled(true); // Mark that user has taken control
    setIsPlaying((prev) => !prev);
  };

  // Modify your Intersection Observer like this
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the element must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const wasInView = isInView;
        const isNowInView = entry.isIntersecting;

        setIsInView(isNowInView);

        // Reset userControlled when video exits the viewport
        if (wasInView && !isNowInView) {
          setUserControlled(false);
          if (isPlaying) setIsPlaying(false);
        }

        // Auto play/pause only if not user controlled
        if (!userControlled) {
          if (isNowInView) {
            if (!isPlaying) setIsPlaying(true);
          } else {
            if (isPlaying) setIsPlaying(false);
          }
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isPlaying, userControlled, isInView]); // Add isInView to dependency array
  // Handle sound toggle
  const toggleSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering play/pause
    setIsMuted(!isMuted);
  };

  // Navigate to previous video
  const handlePrev = () => {
    if (isTransitioning) return;

    const newIndex = (currentIndex - 1 + videoSrcs.length) % videoSrcs.length;
    handleVideoChange(newIndex);
  };

  // Navigate to next video
  const handleNext = () => {
    if (isTransitioning) return;

    const newIndex = (currentIndex + 1) % videoSrcs.length;
    handleVideoChange(newIndex);
  };

  // Handle video end
  const handleVideoEnd = () => {
    handleNext();
  };

  // Handle video transition
  const handleVideoChange = (newIndex: number) => {
    setIsTransitioning(true);

    // Use setTimeout to allow transition to complete
    setTimeout(() => {
      setCurrentIndex(newIndex);

      // Reset the current video if it was playing
      if (isPlaying && isInView) {
        // After a brief delay to allow DOM update, play the new video
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch((err) => {
              console.error("Play error:", err);
            });
            setIsTransitioning(false);
          }
        }, 50);
      } else {
        setIsTransitioning(false);
      }
    }, 300); // Duration should match the CSS transition
  };

  // Update video muted state when isMuted changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle play/pause state change
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.error("Play error:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <section ref={sectionRef} className="w-full">
      <div className="max-container flex flex-col lg:flex-row items-center gap-3">
        <header className="flex flex-col items-start gap-8 lg:gap-5">
          {/* text */}
          <div className="flex flex-col gap-2 w-full">
            <h2 className="font-Inter font-bold text-3xl text-center md:text-left">
              Video{" "}
              <span className="text-forestgreen dark:text-secondary">
                Gallery
              </span>
            </h2>
            <p className="text-base md:text-lg mx-auto text-gray-500 dark:text-gray-400 text-center md:text-left">
              <span className="font-semibold">Watch Our Journey Unfold —</span>{" "}
              Explore our video collection showcasing successful trades, client
              interactions, and educational content. See firsthand how we're
              making financial services accessible and transparent.
            </p>
            <button
              onClick={() => {
                setIsContactModalOpen({
                  type: "starter",
                  state: true,
                } as ContactModalState);
                setIsMobileNavOpen(false);
              }}
              className="w-fit mx-auto md:mx-0 text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out mt-4 
                              rounded-lg dark:bg-forestgreen-dark px-4 py-3 md:px-6 flex items-center justify-center gap-2 rounded-lg0"
            >
              <span className="text-sm">Get Started</span>{" "}
              <Image
                alt="whatsapp icon"
                src={"/icons/whatsapp-icon.svg"}
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* pagination */}
          <div
            className="flex items-center gap-3 self-center md:self-end mx-4 cursor-pointer"
            onClick={togglePlay}
          >
            {/* previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="backdrop-blur-sm bg-forestgreen/80 dark:bg-forestgreen-dark/80 text-white dark:text-secondary hover:bg-forestgreen/60 dark:hover:bg-forestgreen-dark/60
              p-4 rounded-full cursor-pointer  duration-200 ease-in-out text-lg md:text-lg"
              aria-label="Previous video"
            >
              <ArrowLeft />
            </button>
            {/* next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="backdrop-blur-sm bg-forestgreen/80 dark:bg-forestgreen-dark/80 text-white dark:text-secondary hover:bg-forestgreen/60 dark:hover:bg-forestgreen-dark/60
              p-4 rounded-full cursor-pointer  duration-200 ease-in-out text-lg md:text-lg"
              aria-label="Next video"
            >
              <ArrowRight />
            </button>
          </div>
        </header>

        {/* video container - reduced height */}
        <div className="mt-6 relative w-full h-64 md:h-96 bg-background dark:bg-foreground rounded-lg overflow-hidden">
          {/* Main content - both image and video share the same transition */}
          <div
            className={`w-full h-full cursor-pointer ${
              isTransitioning ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300 ease-in-out`}
            onClick={togglePlay}
          >
            {!isPlaying ? (
              /* Image thumbnail with play button */
              <div className="relative w-full h-full">
                <Image
                  alt={videoSrcs[currentIndex].title}
                  src={videoSrcs[currentIndex].thumbnail}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0} // Prioritize loading first image
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/80 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-6 md:border-t-8 border-t-transparent border-l-12 md:border-l-16 border-l-white border-b-6 md:border-b-8 border-b-transparent ml-1 md:ml-2"></div>
                  </div>
                </div>
              </div>
            ) : (
              /* Video player */
              <video
                ref={videoRef}
                src={videoSrcs[currentIndex].src}
                className="w-full h-full object-cover"
                loop={false}
                playsInline
                muted={isMuted}
                onEnded={handleVideoEnd}
              />
            )}

            {/* Video title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">
                {videoSrcs[currentIndex].title}
              </h3>
            </div>

            {/* Sound control - only show when video is playing */}
            {isPlaying && (
              <button
                onClick={toggleSound}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors duration-200"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            )}
          </div>

          {/* Video indicator */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {videoSrcs.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-primary" : "w-2 bg-white/60"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
