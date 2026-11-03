"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();
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
              <h2 className="font-bold text-2xl pb-2">{t('whatIsOctoberWar')}</h2>
              <p className="md:text-lg md:pr-5">
                {t('whatIsOctoberWarText')}
              </p>
            </div>
            <img
              src="october war victory.jpg"
              alt="october war victory"
              className="md:w-100"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold pb-2">
              {t('howDidThatEvenBegin')}
            </h2>
            <div className="flex flex-row gap-5">
              <p className="w-fit text-sm md:text-lg">
                {t('naksaText')}
              </p>
              <div>
                <figure className="w-fit md:w-max md:h-max">
                  <img src="occupied parts of the middle east.jpg" alt="" />
                  <figcaption className="text-xs text-center">
                    {t('occupiedPartsCaption')}
                  </figcaption>
                </figure>
              </div>
            </div>
            <h2 className="text-2xl font-bold pb-2">
              {t('backgroundOfNaksa')}
            </h2>
            <div className="flex flex-row gap-5">
              <p className="w-fit text-sm md:text-lg">
                {t('backgroundOfNaksaText')}
              </p>
              <figure className="w-fit md:w-max md:h-max">
                <img src="The former president Gamal Abdel Nasser.jpg" alt="" />
                <figcaption className="text-xs text-center">
                  {t('nasserCaption')}
                </figcaption>
              </figure>
            </div>
            <h2 className="text-2xl font-bold pb-2">
              {t('beginningOfWar')}
            </h2>
            <div className="flex flex-col md:flex-row gap-5">
              <p className="w-fit text-sm md:text-lg">
                {t('beginningOfWarText')}
              </p>
              <figure className="w-fit md:w-max md:h-max">
                <img
                  src="destroyed Egyptian military aircraft on the tarmac of an airbase.jpg"
                  alt=""
                />
                <figcaption className="text-xs text-center">
                  {t('destroyedAircraftCaption')}
                </figcaption>
              </figure>
            </div>
            <h2 className="text-2xl font-bold pb-2">
              {t('impactOfNaksa')}
            </h2>
            <p className="text-sm md:text-lg">
              {t('impactOfNaksaText')}
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <p className="w-fit text-sm md:text-lg">
                {t('nasserResignationText')}
              </p>
              <figure className="w-fit md:w-100 md:h-max">
                <img
                  src="The Former Egyptian President Gamal Abdel Nasser delivering his resignation speech to the nation, following the Naksa.jpg"
                  alt=""
                />
                <figcaption className="text-xs text-center">
                  {t('nasserResignationCaption')}
                </figcaption>
              </figure>
            </div>
            <video
              src={locale == "en" ? "sixday_war_en.mp4" : "sixday_war_ar.mp4"}
              controls
            ></video>
          </div>
          <div className="flex flex-col gap-5 w-fit text-sm md:text-lg">
            <h2 className="text-2xl font-bold pb-2">
              {t('secondPhase')}
            </h2>
            <p>
              {t('warOfAttritionIntro')}
            </p>
            <div className="flex flex-row">
              <p className="w-fit">
                {t('barLevText')}
              </p>
              <figure className="w-fit md:w-100 md:h-max">
                <img
                  src="Egyptian army leaders planning for the october war.jpg"
                  alt=""
                />
                <figcaption className="text-xs text-center">
                  {t('armyLeadersCaption')}
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <p className="w-fit">
                {t('attritionDetails')}
              </p>
              <figure className="w-fit md:w-max md:h-max">
                <img
                  src="Egyptian El-Sa'ka (Special Forces) commandos during the Battle of Ras El-Ash on June 30, 1967
.jpg"
                  alt=""
                />
                <figcaption className="text-xs text-center">
                  {t('rasElAshCaption')}
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col items-center">
              <figure>
                <img
                  src="The Egyptian army establishing a position on the eastern bank of the Suez Canal after crossing into Sinai.jpg"
                  alt=""
                />
                <figcaption className="text-xs text-center">
                  {t('easternBankCaption')}
                </figcaption>
              </figure>
            </div>
            <video
              src={
                locale == "en"
                  ? "War_of_Attrition_EN_dubbed.mp4"
                  : "War_of_Attrition_AR_dubbed.mp4"
              }
              controls
            ></video>
          </div>
          <div className="flex flex-col gap-5 w-fit text-sm md:text-lg">
            <h2 className="text-2xl font-bold pb-2">
              {t('thirdPhase')}
            </h2>
            <div className="flex flex-row gap-5">
              <p className="w-fit text-sm md:text-lg">
                {t('octoberWarIntro')}
              </p>
              <figure className="w-fit md:w-max md:h-max">
                <img src="Egyptian Air Force.jpg" alt="" />
                <figcaption className="text-xs text-center">
                  {t('airForceCaption')}
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-row gap-5">
              <p className="w-fit text-sm md:text-lg">
                {t('crossingText')}
              </p>
              <figure className="w-fit md:w-max md:h-max">
                <img src="Egyptian Army Breaking the Bar Lev Line.jpg" alt="" />
                <figcaption className="text-xs text-center">
                  {t('barLevCaption')}
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                <p className="w-fit text-sm md:text-lg">
                  {t('determinationText')}
                </p>
                <figure className="w-fit md:w-max md:h-max">
                  <img src="Egyptian tanks crossing to sinai.jpg" alt="" />
                  <figcaption className="text-xs text-center">
                    {t('tanksCaption')}
                  </figcaption>
                </figure>
              </div>
              <figure className="flex flex-col">
                <img src="Egyptian army crossing the suez canal.jpg" alt="" />
                <figcaption className="text-xs text-center">
                  {t('armyCrossingCaption')}
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <p className="w-fit">
                {t('peaceText')}
              </p>
              <figure>
                <img
                  src="The Former Egyptian President Anwar El Sadat signing the Camp David Accords.jpg"
                  alt=""
                />
                <figcaption className="text-xs text-center">
                  {t('sadatCaption')}
                </figcaption>
              </figure>
            </div>
            <p>
              {t('conclusion')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
