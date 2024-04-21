import Bento from "@/components/BentoGrid";
import HeaderHighlight from "@/components/HeroHighlight";
import Popup from "@/components/Popup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
var jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";
import { isUser, parseJwt } from "@/lib/utils";
import { useUser } from "@/lib/hooks";

const Page = ({ params }: { params: { slug: string } }) => {
  const loggedIn = isUser(cookies().get("user")?.value);

  return (
    <>
      <Dialog>
        <div className="flex flex-col items-center py-4 gap-3 pb-12">
          <Badge variant="secondary" className="scale-110">
            💜 Demo avaliable soon
          </Badge>
          <HeaderHighlight
            text="Your AI co-pilot for effortless writing,"
            highlight="unleash your potential now."
          />
          <p className="text-zinc-400 text-md w-2/3 text-center text-md lg:block hidden">
            Harness the power of advanced language models to unlock your
            creative potential and streamline your writing process. Whether
            you're a seasoned wordsmith or just starting your writing journey,
            our AI assistant is here to be your collaborative partner every step
            of the way.
          </p>
          <Popup />
          <div className="flex py-4 gap-2 mb-8 lg:scale-100 scale-90">
            {!loggedIn ? (
              <DialogTrigger asChild>
                <Button>Get started</Button>
              </DialogTrigger>
            ) : (
              <Link href={"/dashboard"}>
                <Button>Dashboard</Button>
              </Link>
            )}
            <Link href={"/features"}>
              <Button variant="outline">Browse all features</Button>
            </Link>
          </div>
          <Bento items={bento_items} />
        </div>
      </Dialog>
    </>
  );
};

export default Page;

const bento_items: BentoLayout = [
  {
    title: "Contextual Suggestions",
    description:
      "Real-time writing guidance tailored to your style, tone, and intent.",
    header: "Two",
    size: 2,
  },
  {
    title: "Intelligent Ideation",
    description:
      "AI-powered brainstorming to spark creativity and generate fresh ideas.",
    header: "Three",
    size: 1,
  },
  {
    title: "Story Analytics",
    description:
      "Personalized analytics to track themes, character arcs, and writing style within your stories.",
    header: "Four",
    size: 1,
  },
  {
    title: "Narrative Structuring",
    description:
      "AI-powered tools to help you outline, plot, and structure your stories.",
    header: "Five",
    size: 1,
  },
  {
    title: "Emotional Insights",
    description:
      "Insights into how your writing is perceived and received by your audience.",
    header: "Six",
    size: 1,
  },
];
