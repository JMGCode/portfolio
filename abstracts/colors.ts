export const primaryColor = "rgba(252, 58, 121, 1)";
export const secondaryColor = "rgba(254, 87, 46, 1)";
export const primaryDisabled = "rgba(148, 100, 116, 1)";
export const brandGradient = `linear-gradient(
  90deg,
  rgba(254, 87, 46, 1) 0%,
  rgba(252, 58, 121, 1) 100%
)`;

export const black100 = "hsla(334, 10%, 14%, 1)";
export const black75 = "hsla(334, 10%, 14%, .75)";
export const black50 = "hsla(334, 10%, 14%, .5)";
export const black25 = "hsla(334, 10%, 14%, .25)";
export const black10 = "hsla(334, 10%, 14%, .1)";
export const black5 = "hsla(334, 10%, 14%, .05)";

export const white100 = "hsla(0, 0%, 100%, 1)";
export const white75 = "hsla(0, 0%, 100%, .75)";
export const white50 = "hsla(0, 0%, 100%, .5)";
export const white25 = "hsla(0, 0%, 100%, .25)";
export const white10 = "hsla(0, 0%, 100%, .1)";
export const white5 = "hsla(0, 0%, 100%, .05)";

const colors = {
  primaryColor,
  secondaryColor,
  primaryDisabled,
  brandGradient,
};

const blacks = {
  black100,
  black75,
  black50,
  black25,
  black10,
  black5,
};

const whites = {
  white100,
  white75,
  white50,
  white25,
  white10,
  white5,
};

export const systemColors = { ...colors, ...blacks, ...whites };
