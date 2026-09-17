"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const separatorVariants = cva(
  "shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
  {
    variants: {
      variant: {
        default: "bg-border",
        strong: "bg-foreground/18",
        inverse: "bg-white/15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Separator({
  className,
  orientation = "horizontal",
  variant = "default",
  ...props
}: SeparatorPrimitive.Props & VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(separatorVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Separator, separatorVariants };
