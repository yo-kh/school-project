"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Home() {
  const t = useTranslations("Homepage");
  const [bgImage, setBgImage] = useState(
    "Egyptian October War Tribute desktop.png",
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setBgImage("Egyptian October War Tribute desktop.png");
      } else {
        setBgImage("Egyptian October War Tribute phone.png");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="sticky flex flex-col justify-center items-center top-0 h-full gap-10">
        <div className="relative h-full w-full">
          <h1
            dir="rtl"
            className="absolute top-[10%] left-1/2 -translate-x-1/2
                      text-center text-3xl md:text-6xl
                      font-bold text-[#A66B22]"
            style={{ fontFamily: "'Aref Ruqaa', serif" }}
          >
            {t("title")}
          </h1>
          <img src={bgImage} className="w-dvw h-dvh object-fill" />
          <div
            className="absolute inset-0 bg-black pointer-events-none [animation-name:fade-dark] [animation-timeline:scroll()] [animation-range:0dvh_100dvh]"
            style={{ animationFillMode: "both" }}
          />
        </div>
      </section>

      <section className="relative min-h-dvh bg-[#611b00] shadow-[0_-20px_50px_#962a00] p-5 text-white">
        <div className="flex flex-col gap-10">
          <div className="md:flex">
            <div className="pb-2">
              <h2 className="font-bold text-2xl pb-2">What is October war?</h2>
              <p className="md:text-lg md:pr-5">
                On the afternoon of October 6, 1973, Egypt witnessed the
                beginning of a historic moment that would remain forever in its
                people's memory. On the 10th of Ramadan, the Egyptian armed
                forces crossed the Suez Canal and launched a courageous
                operation to break through the Bar Lev Line. With careful
                planning, determination, and extraordinary bravery, Egyptian
                soldiers overcame major obstacles and proved that strong will
                and unity could change the course of history.
              </p>
            </div>
            <img src="october war victory.jpg" alt="october war victory" className="md:w-100"/>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-2">
              How did that even begin?
            </h2>
            <p className="md:text-lg">
              In the summer of 1967, Egypt faced one of the most difficult
              moments in its modern history which is the the six days war.
              Tensions across the Middle East had been rising, and on June 5,
              war broke out between Israel and several Arab countries, including
              Egypt. The conflict moved quickly, and within six days, Israeli
              forces had captured the Sinai Peninsula, reaching the Suez Canal.
              For Egyptians, the defeat brought deep sorrow and the loss of a
              significant part of their land. Yet, behind this difficult moment,
              a new determination began to grow: Egypt would rebuild its armed
              forces and continue its efforts to recover Sinai. The events of
              1967 marked the beginning of a long journey that would shape the
              years leading to the October War.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
