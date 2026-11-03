import { useLocale } from "next-intl";
import fs from "fs";
import path from "path";

export default function Media() {
    const locale = useLocale()

  const publicFolder = path.join(process.cwd(), "public");

  const allFiles = fs.readdirSync(publicFolder);

  const chosenFiles = allFiles.filter((file) => {
    return (
      file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".mp4")
    );
  });

  return (
    <div className="flex flex-col items-center gap-5 min-h-dvh bg-[#611b00] p-5 text-white">
      {chosenFiles
        .filter((file) => file.endsWith(".png") || file.endsWith(".jpg"))
        .map((image, index) => (
          <figure key={index}>
            <img className="w-5xl" key={index} src={image} alt="" />
            <figcaption className="text-center">{image.replace(/.png|.jpg/, "")}</figcaption>
          </figure>
        ))}
        {chosenFiles
        .filter((file) => file.endsWith(".mp4") && file.includes(locale))
        .map((video, index) => (
          <figure key={index}>
            <video controls className="w-5xl" key={index} src={video} alt="" />
            <figcaption className="text-center">{video.slice(0, video.indexOf(locale)).replaceAll('_', " ")}</figcaption>
          </figure>
        ))}
    </div>
  );
}
