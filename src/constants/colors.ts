export const RED_COLORS = {
  FIRST: "#FA752B",
  SECOND: "#DE4D26",
  THIRD: "#da463d",
  FORTH: "#DE2658",
  FIFTH: "#ff3fd2",
};

export const PURPLE_COLORS = {
  FIRST: "#da4dff",
  SECOND: "#a344ff",
  THIRD: "#7041ff",
};

export const BLUE_COLORS = {
  FIRST: "#3167ff",
  SECOND: "#00A8D7",
  THIRD: "#2ed3ff",
  FORTH: "#1ffff5",
};

export const GREEN_COLORS = {
  FIRST: "#36F482",
};

export const YELLOW_COLORS = {
  FIRST: "#FFEE30",
  SECOND: "#E9A537",
  THIRD: "#FF9530",
};

export const COLORS = {
  WHITE: "#FFFFFF",
  WHITE_MEDIUM: "#F5F5F5",
  WHITE_DARK: "#f1f1f1",
  GREY_LIGHTEST: "#e1e1e1",
  GREY_LIGHT: "#989898",
  GREY: "#6a6a6a",
  GREY_MEDIUM: "#3F3F3F",
  GREY_DARK: "#353535",
  BLACK_MEDIUM: "#2A2A2A",
  BLACK_DARK: "#1F1F1F",
  DARK: "#000000",
  GREEN: "#3DB39E",
  RED: RED_COLORS.THIRD,
  YELLOW: YELLOW_COLORS.SECOND,
  BLUE: BLUE_COLORS.THIRD,
  DARK_BLUE: BLUE_COLORS.SECOND,
};

export const AVAILABLE_COLORS = [
  ...Object.values(YELLOW_COLORS),
  ...Object.values(RED_COLORS),
  ...Object.values(PURPLE_COLORS),
  ...Object.values(BLUE_COLORS),
  ...Object.values(GREEN_COLORS),
];

export const COLORS_FOR_BLACK_CHECKMARK = [
  YELLOW_COLORS.FIRST.toLowerCase(),
  YELLOW_COLORS.SECOND.toLowerCase(),
  BLUE_COLORS.THIRD.toLowerCase(),
  BLUE_COLORS.FORTH.toLowerCase(),
  GREEN_COLORS.FIRST.toLowerCase(),
];
