import { Button } from "./ui/button";

const PricingBox = ({
  title,
  cost,
  included,
  highlighted,
}: {
  title: string;
  cost: string;
  included: string[];
  highlighted?: boolean;
}) => {
  return (
    <>
      <div
        className={`rounded-2xl border p-6 shadow-sm ring-1 ${
          highlighted
            ? "border-purple-600 ring-purple-600"
            : "border-white ring-white"
        } sm:order-last sm:px-8 lg:p-12`}
      >
        <div className="text-center">
          <h2 className="text-lg font-medium text-white">
            {title}
            <span className="sr-only">Plan</span>
          </h2>

          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-white sm:text-4xl">
              {" "}
              {cost}${" "}
            </strong>

            <span className="text-sm font-medium text-white">/month</span>
          </p>
        </div>

        <ul className="mt-6 space-y-2">
          {included.map((item) => {
            return (
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-white"> {item} </span>
              </li>
            );
          })}
        </ul>

        <div className="w-full flex justify-center items-center pt-8">
          <Button variant="default" className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default PricingBox;
