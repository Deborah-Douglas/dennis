const hotspot = document.querySelector('.hotspot');
const button = hotspot.querySelector('button');
const price = document.querySelector('#helmet-price');
const announcement = document.querySelector('#announcement');

let hovering = false;
let keyboardFocus = false;
let pinned = false;
let dismissed = false;

function update() {
  const open = !dismissed && (hovering || keyboardFocus || pinned);
  if (open === !price.hidden) return;
  price.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
  announcement.textContent = open ? `Helmet price: ${price.textContent}` : '';
}

// Listen on the group so moving onto the price doesn't close it.
hotspot.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'touch') return;
  hovering = true;
  dismissed = false;
  update();
});

hotspot.addEventListener('pointerleave', (event) => {
  if (event.pointerType === 'touch') return;
  hovering = false;
  update();
});

button.addEventListener('focus', () => {
  keyboardFocus = button.matches(':focus-visible');
  if (keyboardFocus) dismissed = false;
  update();
});

button.addEventListener('blur', () => {
  keyboardFocus = false;
  pinned = false;
  update();
});

button.addEventListener('click', () => {
  const wasPinned = pinned;
  pinned = !wasPinned;
  dismissed = wasPinned;
  update();
});

function closePrice() {
  pinned = false;
  dismissed = true;
  update();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !price.hidden) closePrice();
});

document.addEventListener('click', (event) => {
  if (!hotspot.contains(event.target) && !price.hidden) closePrice();
});
