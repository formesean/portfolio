import { FadeText } from "../../components/magicui/fade-text";
import { MagicCard } from "../../components/magicui/magic-card";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col items-center pt-20 gap-11 max-lg:pb-40">
      <FadeText
        className="text-4xl font-bold"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.3 } },
        }}
        text="Connect the Dots"
      />

      <div className="w-[700px] max-md:w-full text-center text-[#dbdbdb]">
        <FadeText
          className="text-xl"
          direction="left"
          framerProps={{
            show: { transition: { delay: 0.5 } },
          }}
          text="Ready to connect? Reach out and let's start a conversation that could spark something amazing!"
        />
      </div>

      <MagicCard
        className="text-focus-in p-8 border-[#202020] cursor-pointer size-3/5 max-sm:w-full flex-col items-center justify-center shadow-2xl"
        gradientColor={"#262626"}
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            height={150}
            width={150}
            src={"/my-img.jpg"}
            alt="Sean Profile Image"
          />

          <p className="text-center text-2xl text-[#dbdbdb] pt-8">
            Sean Aguilar
          </p>

          <p className="text-base text-center text-[#6a6a6a] pt-2">
            Computer Engineering Student & Web Developer
          </p>

          <div className="flex gap-5 justify-center items-center pt-5">
            <Button
              className="w-full text-[#dbdbdb] hover:bg-transparent hover:border-[#dbdbdb] rounded-full border-2 border-[#202020]"
              variant={"ghost"}
            >
              <a href="mailto:seanaguilar698@gmail.com">Drop an E-Mail</a>
            </Button>
          </div>
        </div>
      </MagicCard>

      <div className="text-focus-in flex gap-8 justify-center items-center">
        <button
          role="link"
          className="text-[#dbdbdb] text-[12px] relative bg-[linear-gradient(#262626,#262626),linear-gradient(#dbdbdb,#dbdbdb)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]"
        >
          <a href="https://x.com/seanaguuuu" target="_blank">
            X (Twitter)
          </a>
        </button>
        <button
          role="link"
          className="text-[#dbdbdb] text-[12px] relative bg-[linear-gradient(#262626,#262626),linear-gradient(#dbdbdb,#dbdbdb)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]"
        >
          <a href="https://www.instagram.com/seanaguuuu" target="_blank">
            Instagram
          </a>
        </button>
        <button
          role="link"
          className="text-[#dbdbdb] text-[12px] relative bg-[linear-gradient(#262626,#262626),linear-gradient(#dbdbdb,#dbdbdb)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]"
        >
          <a href="https://www.linkedin.com/in/seanaguilar04" target="_blank">
            Linkedin
          </a>
        </button>
      </div>
    </section>
  );
}
