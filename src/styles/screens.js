const breakpoints = {
  mediumMin: 480,
  mediumMax: 992,
};

const intervals = {
  smallMax: breakpoints.mediumMin - 1,
  mediumMin: breakpoints.mediumMin,
  mediumMax: breakpoints.mediumMax - 1,
  largeMin: breakpoints.mediumMax,
};

const screens = {
  small: `(max-width: ${intervals.smallMax}px)`,
  medium: `(min-width: ${intervals.mediumMin}px) and (max-width: ${intervals.mediumMax}px)`,
  large: `(min-width: ${intervals.largeMin}px)`,
};

export default screens;
