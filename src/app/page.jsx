"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale()
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
            <img
              src="october war victory.jpg"
              alt="october war victory"
              className="md:w-100"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-2">
              How did that even begin?
            </h2>
            <div className="flex flex-row gap-2">
              <p className="w-fit md:w-auto text-sm md:text-lg">
                In June 1967, Egypt and several other Arab countries fought
                against Israel in a conflict known as the Naksa, or the Six-Day
                War. The war began on June 5, 1967, when Israel launched a
                surprise attack against Egyptian airfields and destroyed many
                Egyptian aircraft on the ground. This attack seriously weakened
                the Egyptian army and contributed to a major military defeat.
                Within six days, Israel occupied the Sinai Peninsula and the
                Gaza Strip, as well as other Arab territories. The news of the
                defeat spread quickly and caused great sadness among the
                Egyptian people. Many Egyptians felt disappointed because their
                country had lost important land in such a short period. However,
                the Naksa was not the end of Egypt's efforts to recover its
                territory. Instead, it became a turning point in Egyptian
                history and taught the country important lessons about military
                preparation, planning, and the need for strong armed forces.
                After the war, Egypt began rebuilding its army, improving its
                weapons and training, and preparing for future battles. Egyptian
                soldiers worked hard to become stronger and more experienced.
                The country also began taking steps to challenge the Israeli
                occupation of Sinai. These efforts led to the War of Attrition
              </p>
              <div>
                <figure className="w-fit md:w-max md:h-max">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWnM9L2mcrMSO9T2r20Ho75gl1t7UUDRYwKcLxKmlJw&s=10"
                    alt=""
                  />
                  <figcaption className="text-xs text-center">
                    A picture of the occupied part pf the middle east back then
                  </figcaption>
                </figure>
              </div>
            </div>
            <video src={locale == 'en' ? 'sixday_war_en.mp4' : 'sixday_war_ar.mp4'}></video>
          </div>
        </div>
      </section>
    </div>
  );
}
