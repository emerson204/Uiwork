"use client";

import React from "react";
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

const components = [
  {
    title: "Buttons",
    href: "/start/botones",
    description: "Botones con estilo y precisión para cualquier acción.",
  },
  {
    title: "Checkbox",
    href: "/start/checkbox",
    description: "Checkboxes modernos para selecciones claras y rápidas.",
  },
  {
    title: "Inputs",
    href: "/start/inputs",
    description: "Campos de entrada elegantes y funcionales.",
  },
  {
    title: "Cards",
    href: "/start/cards",
    description: "Tarjetas llamativas para destacar información.",
  },
  {
    title: "Toggles",
    href: "/start/toggles",
    description: "Toggles intuitivos para un control fácil.",
  },
  {
    title: "Forms",
    href: "/start/form",
    description: "Formularios elegantes y reactivos para tus páginas.",
  },
];

export function MenuComponents() {
  return (
    <NavigationMenu className="relative z-30">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-slate-200 dark:bg-gray-700/25">
            Componentes
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
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
