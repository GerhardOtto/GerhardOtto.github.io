"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { twJoin, twMerge } from "tailwind-merge";
import { IconContext, IconType } from "react-icons/lib";
import { Icon } from "lucide-react";

type Props = {
  isReversed?: boolean;
  className?: string;
  icons: IconType[];
};

// const ICONS: StaticImageData[] = [];
// const ICONS: string[] = ["Hello", "World", "Hope", "This", "Works", "It", "Does", "In-fact", "Work"];

// const ELEMENTS = [...ICONS, ...ICONS];

export const Marquee: React.FC<Props> = ({
  isReversed = false,
  className,
  icons,
}) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>(null);
  const [repeatCount, setRepeatCount] = useState(3);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        });
        timeline.current = gsap
          .timeline({ defaults: { ease: "none", repeat: -1 } })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 20,
          })
          .set(movingContainer.current, { xPercent: 0 });
      };
      setupInfiniteMarqueeTimeline();
    },
    { dependencies: [isReversed] }
  );

  let timelineTimeScaleTween = useRef<GSAPTween>(null);

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.2,
      duration: 0.8,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.8,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {icons.map((Item, index) => {
          const isLast = index === icons.length - 1;
          return (
            <div
              key={index}
              className={twJoin(
                "relative flex shrink-0 items-center justify-center",
                isLast && "mr-10"
              )}
            >
              <Item size={52} />
            </div>
          );
        })}
      </div>
    ),
    []
  );

  useEffect(() => {
    if (listRef.current) {
      const listWidth = listRef.current.offsetWidth;
      const screenWidth = window.innerWidth;
      const minWidth = screenWidth * 2;

      setRepeatCount(Math.ceil(minWidth / listWidth));
    }
  }, [icons.length]);
  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {Array.from({ length: repeatCount }).map((_, i) => (
          <div key={i} ref={i === 0 ? listRef : null}>
            {list}
          </div>
        ))}
      </div>
    </div>
  );
};
