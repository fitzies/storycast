"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Avatar from "./Avatar";
import { Button } from "./ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Contextual Suggestions",
    href: "/features/",
    description:
      "Real-time writing guidance tailored to your style, tone, and intent.",
  },
  {
    title: "Intelligent Ideation",
    href: "/features/",
    description:
      "AI-powered brainstorming to spark creativity and generate fresh ideas.",
  },
  {
    title: "Analytics",
    href: "/features/",
    description:
      "Personalized analytics to track themes, character arcs, and writing style within your stories.",
  },
  {
    title: "Narrative Structuring",
    href: "/features/",
    description:
      "AI-powered tools to help you outline, plot, and structure your stories.",
  },
  {
    title: "Insights",
    href: "/features/",
    description:
      "Insights into how your writing is perceived and received by your audience.",
  },
  {
    title: "Adaptive Thesaurus",
    href: "/features/",
    description:
      "Intelligent word recommendations to elevate your vocabulary and expression.",
  },
];

export default function Nav() {
  return (
    <div className="w-screen flex justify-center py-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Introduction</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/" title="Getting started">
                  Prepare to unleash your creative potential.
                </ListItem>
                <ListItem href="/how-to" title="How to use">
                  A straightforward guide to leverage Storycast's abilities.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="absolute right-5">
        {null ? <Avatar image="" alt="" fallback="" /> : null}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
