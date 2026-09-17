import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

const cardVariants = cva(
  "group/card flex flex-col gap-(--card-spacing) overflow-hidden text-sm transition-[border-color,box-shadow,transform] duration-200 ease-out [--card-spacing:--spacing(5)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-[inherit] *:[img:last-child]:rounded-b-[inherit]",
  {
    variants: {
      variant: {
        default: "border border-border bg-card text-card-foreground",
        subtle:
          "border border-transparent bg-surface-subtle text-card-foreground",
        elevated:
          "border border-border/70 bg-card text-card-foreground shadow-soft",
        inverse:
          "border border-white/10 bg-surface-inverse text-surface-inverse-foreground shadow-soft",
      },
      size: {
        sm: "rounded-xl py-(--card-spacing) [--card-spacing:--spacing(4)]",
        default: "rounded-2xl py-(--card-spacing)",
        lg: "rounded-3xl py-(--card-spacing) [--card-spacing:--spacing(8)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Card({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-2 px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-lg leading-snug font-semibold tracking-[-0.01em] group-data-[size=sm]/card:text-base group-data-[size=lg]/card:text-xl",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "text-sm leading-relaxed text-muted-foreground group-data-[variant=inverse]/card:text-surface-inverse-foreground/70",
        className,
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center border-t border-border/80 bg-muted/50 p-(--card-spacing) group-data-[variant=inverse]/card:border-white/10 group-data-[variant=inverse]/card:bg-white/5",
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  cardVariants,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
