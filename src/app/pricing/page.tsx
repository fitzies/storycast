import PricingBox from "@/components/PricingBox";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="font-bold text-3xl">
        Pick a plan to begin your writing journey
      </h1>
      <p className="pt-2 text-zinc-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, voluptatibus.
      </p>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-4 sm:py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <PricingBox
            title="Hobby"
            cost="0"
            included={[
              "One project",
              "Contexual suggestion",
              "Adaptive thesaurus",
            ]}
          />
          <PricingBox
            title="Pro"
            cost="29"
            included={[
              "Unlimited projects",
              "Access to all features",
              "Up to 6 members",
              "Expert publishing",
              "Community access",
            ]}
            highlighted
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
