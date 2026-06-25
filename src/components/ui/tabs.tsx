"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-auto w-full flex-wrap items-center justify-center gap-1 rounded-xl bg-slate-900/60 p-1 text-slate-400 border border-slate-800",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex flex-1 min-w-[140px] items-center justify-center whitespace-nowrap rounded-lg px-3 py-3 text-[11px] md:text-xs font-bold tracking-wide transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/50",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-brand-card data-[state=active]:text-brand-cyan data-[state=active]:border data-[state=active]:border-slate-700/60 data-[state=active]:shadow-lg data-[state=active]:text-glow-cyan",
      "hover:text-slate-200",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/50 rounded-lg",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
