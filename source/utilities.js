export function cn(...cns) {
  return cns.reduce((acc, curr) => `${acc} ${curr}`).trim();
}

export function hasClass(el, clazz) {
  return new RegExp(`(^| )(${clazz})($| )`).test(el.className);
}

export function addClass(el, clazz) {
  return (!hasClass(el, clazz)) ? (el.className += ` ${clazz}`).trim() : false;
}

export function removeClass(el, clazz) {
  return (hasClass(el, clazz)) ? el.className = el.className.split(' ').filter((c) => c !== clazz).join(' ') : false;
}

export function toggleClass(el, clazz) {
  return hasClass(el, clazz) ? removeClass(el, clazz) : addClass(el, clazz);
}