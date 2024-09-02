import { FadeText } from "../../components/magicui/fade-text";

export default function Blog() {
  return (
    <section className="flex min-h-screen flex-col items-center pt-20 gap-20">
      <FadeText
        className="text-4xl font-bold"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.3 } },
        }}
        text="Scribbles"
      />
      <div className="text-focus-in">
        <FadeText
          className="text-xl text-[#444444]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.3 } },
          }}
          text="Kinda sucks being empty right!?"
        />
      </div>
    </section>
  );
}
