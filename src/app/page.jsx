import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div>
      <section className="sticky flex flex-col justify-center items-center top-0 h-full gap-10">
        <div className="relative h-full w-full">
          <img src="pyramids_less_sky_crop.jpg" className="w-dvw h-dvh object-cover" />
            <div
              className="absolute inset-0 bg-black pointer-events-none [animation-name:fade-dark] [animation-timeline:scroll()] [animation-range:0dvh_100dvh]"
              style={{ animationFillMode: "both" }}
            />
        </div>
      </section>

      <section className="relative min-h-dvh bg-[#962a00] shadow-[0_-20px_50px_#962a00]"></section>
    </div>
  );
}
