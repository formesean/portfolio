import { TechStack } from "./_components/TechStack";
import WordPullUp from "../components/magicui/word-pull-up";
import WordRotate from "../components/magicui/word-rotate";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-5">
        <WordPullUp
          className="text-7xl font-bold text-left tracking-widest"
          words="Hey, I'm Sean."
        />
        <WordRotate
          className="text-4xl font-medium text-left tracking-widest"
          words={["Building the web,", "dreaming in circuits"]}
        />
      </div>
      <TechStack />
    </section>
  );
}
