export const MENU_OPEN = 'MENU_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE';
export const MENU_TOGGLE = 'MENU_TOGGLE';

export const openMenu = () => ({
  type: MENU_OPEN,
});

export const closeMenu = () => ({
  type: MENU_CLOSE,
});

export const toggleMenu = notification => ({
  type: MENU_TOGGLE,
  meta: { notification },
})
