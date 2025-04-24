export const cn = (...cls: (string | false | null | undefined)[]) =>
    cls.filter(Boolean).join(" ");
  