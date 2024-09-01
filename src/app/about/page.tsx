import { FadeText } from "@/components/magicui/fade-text";
import { Experiences } from "../_components/Experience";

export default function About() {
  return (
    <section className="flex min-h-screen flex-col items-center pt-20 gap-10">
      <FadeText
        className="text-4xl font-bold"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.3 } },
        }}
        text="Behind the Code"
      />

      <div className="w-[700px] text-justify text-[#dbdbdb] flex flex-col gap-5">
        <div>
          <FadeText
            className="text-xl"
            direction="left"
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
            text="Meet Sean, A self-taught web developer and a third-year BS Computer Engineering student at the University of San Carlos, aspiring to become a Full-Stack Web Developer."
          />
        </div>

        <div>
          <FadeText
            className="text-xl"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.7 } },
            }}
            text="He has gained experience as a developer for Today's Carolinian, the university's student publication, and has participated in DICT Start-Up Challenges."
          />
        </div>

        <div>
          <FadeText
            className="text-xl"
            direction="right"
            framerProps={{
              show: { transition: { delay: 0.9 } },
            }}
            text="Passionate about sharing his knowledge of web development, and is also interested in robotics, having participated in a event, further expanding his technical expertise."
          />
        </div>
      </div>

      <Experiences />
    </section>
  );
}
