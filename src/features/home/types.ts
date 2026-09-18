export type HomePageIconName =
  | "boxes"
  | "chart"
  | "database"
  | "file-text"
  | "package-check"
  | "settings"
  | "shopping-cart"
  | "sparkles"
  | "users";

export type HomePageContent = {
  brandName: string;
  navigation: {
    ariaLabel: string;
    items: ReadonlyArray<{ label: string; href: string }>;
    signInLabel: string;
    contactLabel: string;
    compactContactLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleContinuation: string;
    description: string;
    primaryActionLabel: string;
    secondaryActionLabel: string;
    proofPoints: ReadonlyArray<string>;
    imageAlt: string;
  };
  process: {
    title: string;
    description: string;
    steps: ReadonlyArray<{
      number: string;
      title: string;
      description: string;
      icon: HomePageIconName;
    }>;
  };
  solutions: {
    title: string;
    subtitle: string;
    description: string;
    itemDescription: string;
    items: ReadonlyArray<{ title: string; icon: HomePageIconName }>;
  };
  differentiators: {
    title: string;
    items: ReadonlyArray<{ title: string; icon: HomePageIconName }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
    email: string;
  };
  footer: {
    companyName: string;
    links: ReadonlyArray<{ label: string; href: string }>;
  };
};
