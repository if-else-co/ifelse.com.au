export const ordinalize = (n) => {
  let s = ['th', 'st', 'nd', 'rd'];
  let v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const getMonthShortName = (m) => {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m];
}

export const formatDate = (date) => {
  return `${getMonthShortName(date.getMonth())} ${ordinalize(date.getDate())}, ${date.getFullYear()}`;
}

export const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export const smoothScrollTo = (id, d = 16, time = 300) => {
  const topPadding = 50;
  let el = document.getElementById(id);
  if (el) {
    let h = el.getBoundingClientRect().top - topPadding;
    let i = window.scrollY;
    let x = window.scrollX;
    let pixelsPerDiff = (h - i) / (time / d);
    let int = setInterval(() => {
      i += pixelsPerDiff;
      if (i < h) {
        window.scrollTo(x, i);
      } else {
        window.scrollTo(x, h);
      }
      if (i >= h) {
        clearInterval(int);
      }
    }, d);
    el.focus();
  }
}
