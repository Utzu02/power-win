const withOpacity = (v) => ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${v}))`
      : `rgb(var(${v}) / ${opacityValue})`;
  
  module.exports = {
    /* ...restul configului... */
    theme: {
      extend: {
        colors: {
          background: withOpacity("--pw-bg"),
          card: withOpacity("--pw-surface"),
          primary: withOpacity("--pw-text"),
          "primary-dim": withOpacity("--pw-text-dim"),
          accent: withOpacity("--pw-accent"),
          "accent-light": withOpacity("--pw-accent-light"),
        },
      },
    },
  };
  