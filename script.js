// ── PRODUCTS ──────────────────────────────────────────────────────
const PRODUCTS = [
  // FOOD
  {id:1,name:"Tiffin Service (Weekly Plan)",category:"food",price:699,old:999,rating:4.8,rc:1240,emoji:"🍱",bg:"bg-food",badge:"Best Value"},
  {id:2,name:"Maggi Noodles (12 Pack)",category:"food",price:149,old:199,rating:4.7,rc:3201,emoji:"🍜",bg:"bg-food",badge:"Popular"},
  {id:3,name:"Parle-G + Bourbon Combo",category:"food",price:89,old:130,rating:4.5,rc:2100,emoji:"🍪",bg:"bg-food",badge:null},
  {id:4,name:"Sambar Rice Dabba (Thali)",category:"food",price:79,old:99,rating:4.6,rc:987,emoji:"🍛",bg:"bg-food",badge:"Fresh"},
  {id:5,name:"Bread + Peanut Butter Combo",category:"food",price:129,old:179,rating:4.4,rc:654,emoji:"🥜",bg:"bg-food",badge:null},
  {id:6,name:"Poha + Upma Breakfast Pack",category:"food",price:59,old:89,rating:4.7,rc:1876,emoji:"🥣",bg:"bg-food",badge:"Morning"},
  // SNACKS
  {id:7,name:"Lay's Variety Pack (10 pcs)",category:"snacks",price:199,old:250,rating:4.6,rc:2341,emoji:"🍟",bg:"bg-snack",badge:"Combo"},
  {id:8,name:"Kurkure + Nachos Bundle",category:"snacks",price:149,old:199,rating:4.5,rc:1432,emoji:"🌽",bg:"bg-snack",badge:null},
  {id:9,name:"Dark Chocolate Bar Set (5)",category:"snacks",price:299,old:399,rating:4.8,rc:876,emoji:"🍫",bg:"bg-snack",badge:"Midnight"},
  {id:10,name:"Energy Drink Pack (Red Bull)",category:"snacks",price:449,old:599,rating:4.7,rc:1234,emoji:"⚡",bg:"bg-snack",badge:"Exam Mode"},
  {id:11,name:"Mixed Dry Fruits 250g",category:"snacks",price:199,old:299,rating:4.6,rc:567,emoji:"🥜",bg:"bg-snack",badge:"Healthy"},
  {id:12,name:"Cup Noodles Variety (8)",category:"snacks",price:259,old:349,rating:4.5,rc:2198,emoji:"🍜",bg:"bg-snack",badge:null},
  // STUDY
  {id:13,name:"A4 Notebook Set (5 pcs)",category:"study",price:149,old:199,rating:4.7,rc:3401,emoji:"📓",bg:"bg-study",badge:"Semester"},
  {id:14,name:"Pen + Pencil Combo Pack",category:"study",price:89,old:129,rating:4.5,rc:2100,emoji:"✏️",bg:"bg-study",badge:null},
  {id:15,name:"Scientific Calculator (Basic)",category:"study",price:399,old:599,rating:4.6,rc:876,emoji:"🔢",bg:"bg-study",badge:"Must Have"},
  {id:16,name:"Sticky Notes + Highlighters",category:"study",price:129,old:179,rating:4.8,rc:1543,emoji:"📌",bg:"bg-study",badge:null},
  {id:17,name:"Stapler + Punching Machine",category:"study",price:199,old:299,rating:4.4,rc:654,emoji:"📎",bg:"bg-study",badge:null},
  {id:18,name:"Drawing Sheet Pack (20 pcs)",category:"study",price:79,old:120,rating:4.6,rc:987,emoji:"📐",bg:"bg-study",badge:"Engineering"},
  // ROOM ESSENTIALS
  {id:19,name:"Microfibre Pillow (2 pcs)",category:"room",price:399,old:599,rating:4.7,rc:2341,emoji:"🛏️",bg:"bg-room",badge:"Comfy"},
  {id:20,name:"Bedsheet Set (Single, AC)",category:"room",price:499,old:799,rating:4.8,rc:1876,emoji:"🏠",bg:"bg-room",badge:"Popular"},
  {id:21,name:"Plastic Bucket + Mug Set",category:"room",price:199,old:299,rating:4.5,rc:1234,emoji:"🪣",bg:"bg-room",badge:null},
  {id:22,name:"Extension Board (4 socket)",category:"room",price:349,old:499,rating:4.6,rc:3210,emoji:"🔌",bg:"bg-room",badge:"Must Have"},
  {id:23,name:"Clothes Hanger Set (12 pcs)",category:"room",price:99,old:149,rating:4.4,rc:876,emoji:"🧷",bg:"bg-room",badge:null},
  {id:24,name:"LED Study Lamp",category:"room",price:599,old:899,rating:4.9,rc:2198,emoji:"💡",bg:"bg-room",badge:"Best Seller"},
  // HYGIENE
  {id:25,name:"Dettol Soap Pack (4 pcs)",category:"hygiene",price:149,old:199,rating:4.7,rc:3401,emoji:"🧼",bg:"bg-hygiene",badge:"Germ Free"},
  {id:26,name:"Shampoo + Conditioner Set",category:"hygiene",price:299,old:449,rating:4.6,rc:1543,emoji:"🧴",bg:"bg-hygiene",badge:"Combo"},
  {id:27,name:"Toothbrush + Paste Pack",category:"hygiene",price:129,old:179,rating:4.8,rc:2100,emoji:"🪥",bg:"bg-hygiene",badge:null},
  {id:28,name:"Roll-on Deodorant (2 pcs)",category:"hygiene",price:199,old:299,rating:4.5,rc:987,emoji:"🌿",bg:"bg-hygiene",badge:"Fresh"},
  {id:29,name:"Trimmer (Corded)",category:"hygiene",price:599,old:899,rating:4.7,rc:654,emoji:"✂️",bg:"bg-hygiene",badge:"Grooming"},
  {id:30,name:"Face Wash + Moisturizer Kit",category:"hygiene",price:249,old:349,rating:4.6,rc:1876,emoji:"✨",bg:"bg-hygiene",badge:null},
  // LAUNDRY
  {id:31,name:"Surf Excel 1kg Powder",category:"laundry",price:199,old:279,rating:4.8,rc:4321,emoji:"👕",bg:"bg-laundry",badge:"Bestseller"},
  {id:32,name:"Liquid Detergent (500ml)",category:"laundry",price:149,old:199,rating:4.6,rc:2100,emoji:"🧺",bg:"bg-laundry",badge:null},
  {id:33,name:"Ironing Service (5 clothes)",category:"laundry",price:99,old:149,rating:4.7,rc:1234,emoji:"🪄",bg:"bg-laundry",badge:"On-Demand"},
  {id:34,name:"Laundry Bag (2 pcs)",category:"laundry",price:149,old:199,rating:4.5,rc:876,emoji:"👜",bg:"bg-laundry",badge:null},
  {id:35,name:"Stain Remover Spray",category:"laundry",price:129,old:179,rating:4.4,rc:543,emoji:"💧",bg:"bg-laundry",badge:null},
  // GADGETS
  {id:36,name:"USB Type-C Cable (2m, Braided)",category:"gadgets",price:199,old:349,rating:4.8,rc:5401,emoji:"🔌",bg:"bg-gadget",badge:"Durable"},
  {id:37,name:"Wireless Earbuds (Budget)",category:"gadgets",price:999,old:1599,rating:4.6,rc:2341,emoji:"🎧",bg:"bg-gadget",badge:"Value"},
  {id:38,name:"Power Bank 10000mAh",category:"gadgets",price:899,old:1499,rating:4.7,rc:3210,emoji:"🔋",bg:"bg-gadget",badge:"Must Have"},
  {id:39,name:"Laptop Stand (Adjustable)",category:"gadgets",price:699,old:999,rating:4.5,rc:876,emoji:"💻",bg:"bg-gadget",badge:null},
  {id:40,name:"LED Desk Fan (USB)",category:"gadgets",price:499,old:799,rating:4.6,rc:1543,emoji:"🌀",bg:"bg-gadget",badge:"Summer"},
  {id:41,name:"Smart Plug WiFi (2 pcs)",category:"gadgets",price:799,old:1199,rating:4.7,rc:987,emoji:"📡",bg:"bg-gadget",badge:"Smart"},
  {id:42,name:"Mouse (Wired, Ergonomic)",category:"gadgets",price:399,old:599,rating:4.6,rc:2198,emoji:"🖱️",bg:"bg-gadget",badge:null},
];

// ── STATE ─────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('cc_cart') || '[]');
let users = JSON.parse(localStorage.getItem('cc_users') || '[]');
let currentUser = JSON.parse(localStorage.getItem('cc_user') || 'null');
let activeFilter = 'all';
let coStep_n = 1;
let selPayMethod = 'upi';
let couponOn = false;

// ── NAVIGATION ────────────────────────────────────────────────────
function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const l = document.getElementById('nl-' + page);
  if (l) l.classList.add('active');
  if (page === 'cart') renderCart();
  window.scrollTo(0, 0);
}
function quickShop(cat) {
  go('shop');
  activeFilter = cat;
  document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
  const btn = Array.from(document.querySelectorAll('.f-btn')).find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + cat + "'"));
  if (btn) btn.classList.add('active');
  renderProducts();
}

// ── PRODUCTS ─────────────────────────────────────────────────────
function renderProducts() {
  const q = document.getElementById('search-in').value.toLowerCase();
  const sort = document.getElementById('sort-sel').value;
  let list = PRODUCTS.filter(p => {
    const mc = activeFilter === 'all' || p.category === activeFilter;
    const ms = p.name.toLowerCase().includes(q) || p.category.includes(q);
    return mc && ms;
  });
  if (sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  else if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  const g = document.getElementById('prod-grid');
  if (!list.length) { g.innerHTML = '<div class="no-results">🔍 No products found. Try another search.</div>'; return; }
  g.innerHTML = list.map(p => `
    <div class="card" onclick="addToCart(${p.id})">
      <div class="card-img ${p.bg}">
        <span>${p.emoji}</span>
        ${p.badge ? `<div class="card-badge">${p.badge}</div>` : ''}
      </div>
      <div class="card-body">
        <div class="card-cat">${p.category}</div>
        <div class="card-name">${p.name}</div>
        <div style="display:flex;align-items:center;margin-bottom:10px">
          <span class="card-stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
          <span class="card-rc">(${p.rc.toLocaleString()})</span>
        </div>
        <div class="card-footer">
          <div>
            <span class="card-price">₹${p.price}</span>
            <span class="card-old">₹${p.old}</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation();addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>`).join('');
}
function setFilter(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

// ── CART ─────────────────────────────────────────────────────────
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({...p, qty: 1});
  saveCart(); updCount();
  showToast('info', p.emoji + ' ' + p.name.split(' ').slice(0,3).join(' ') + ' added!');
}
function removeItem(id) { cart = cart.filter(x => x.id !== id); saveCart(); updCount(); renderCart(); }
function chgQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  saveCart(); renderCart();
}
function saveCart() { localStorage.setItem('cc_cart', JSON.stringify(cart)); }
function updCount() { document.getElementById('cart-count').textContent = cart.reduce((s,i) => s+i.qty, 0); }
function renderCart() {
  const el = document.getElementById('cart-items');
  if (!cart.length) {
    el.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><div style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:6px">Cart is empty</div><div style="color:var(--muted);font-size:0.88rem;margin-bottom:1.2rem">Add some hostel essentials!</div><button class="btn-primary" onclick="go('shop')">Shop Now</button></div>`;
    updSummary(); return;
  }
  el.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="c-img">${i.emoji}</div>
      <div class="c-info">
        <div class="c-cat">${i.category}</div>
        <div class="c-name">${i.name}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="chgQty(${i.id},-1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="chgQty(${i.id},1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:7px">
        <div class="c-price">₹${(i.price * i.qty).toLocaleString()}</div>
        <button class="rm-btn" onclick="removeItem(${i.id})">🗑️</button>
      </div>
    </div>`).join('');
  updSummary();
}
function updSummary() {
  const sub = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const del = sub > 0 ? (sub >= 499 ? 0 : 29) : 0;
  const disc = couponOn ? Math.round(sub * 0.1) : 0;
  const tot = sub + del - disc;
  document.getElementById('s-sub').textContent = '₹' + sub.toLocaleString();
  document.getElementById('s-del').textContent = del === 0 ? 'FREE' : '₹' + del;
  document.getElementById('s-disc').textContent = '−₹' + disc.toLocaleString();
  document.getElementById('s-tot').textContent = '₹' + tot.toLocaleString();
}
function applyCoupon() {
  const c = document.getElementById('coupon-in').value.trim().toUpperCase();
  const valid = ['HOSTEL10','CAMPUS10','DORM10','SAVE10'];
  if (valid.includes(c)) { couponOn = true; updSummary(); showToast('success','🎉 10% off applied!'); }
  else showToast('error', 'Invalid code. Try HOSTEL10');
}

// ── AUTH ──────────────────────────────────────────────────────────
function openAuth() {
  if (currentUser) {
    currentUser = null; localStorage.removeItem('cc_user');
    document.getElementById('auth-btn').textContent = 'Sign In';
    showToast('info','👋 Signed out!'); return;
  }
  document.getElementById('auth-modal').classList.add('open');
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function switchTab(t) {
  document.getElementById('p-login').style.display = t==='login'?'block':'none';
  document.getElementById('p-reg').style.display = t==='register'?'block':'none';
  document.getElementById('t-login').classList.toggle('active', t==='login');
  document.getElementById('t-reg').classList.toggle('active', t==='register');
  clearAM();
}
function clearAM() { ['a-err','a-ok'].forEach(id => { document.getElementById(id).style.display='none'; }); }
function showAM(type,msg) {
  const el = document.getElementById(type==='err' ? 'a-err' : 'a-ok');
  el.textContent = msg; el.style.display = 'block';
}
function doLogin() {
  const em = document.getElementById('l-email').value.trim();
  const pw = document.getElementById('l-pass').value;
  if (!em || !pw) return showAM('err','Fill all fields.');
  const u = users.find(x => x.email === em && x.pass === pw);
  if (!u) return showAM('err','Wrong email or password.');
  currentUser = u; localStorage.setItem('cc_user', JSON.stringify(u));
  document.getElementById('auth-btn').textContent = '👤 ' + u.fname;
  closeModal('auth-modal'); showToast('success','Welcome back, ' + u.fname + '! 👋');
}
function doReg() {
  const fn = document.getElementById('r-fn').value.trim();
  const ln = document.getElementById('r-ln').value.trim();
  const em = document.getElementById('r-email').value.trim();
  const pw = document.getElementById('r-pass').value;
  if (!fn||!ln||!em||!pw) return showAM('err','Fill all fields.');
  if (pw.length < 6) return showAM('err','Password min 6 chars.');
  if (users.find(x => x.email === em)) return showAM('err','Account already exists.');
  const u = {fname:fn, lname:ln, email:em, pass:pw};
  users.push(u); localStorage.setItem('cc_users', JSON.stringify(users));
  currentUser = u; localStorage.setItem('cc_user', JSON.stringify(u));
  document.getElementById('auth-btn').textContent = '👤 ' + fn;
  closeModal('auth-modal'); showToast('success','Account created! Welcome 🎉');
}

// ── CHECKOUT ─────────────────────────────────────────────────────
function openCheckout() {
  if (!cart.length) return showToast('error','Cart is empty!');
  coStep_n = 1;
  ['cp1','cp2','cp3','cp-ok'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('cp1').classList.add('active');
  ['cs1','cs2','cs3'].forEach((id,i) => {
    const el = document.getElementById(id);
    el.classList.remove('active','done');
    if (i===0) el.classList.add('active');
    el.querySelector('.s-num').textContent = i+1;
  });
  if (currentUser) {
    document.getElementById('d-fn').value = currentUser.fname || '';
    document.getElementById('d-ln').value = currentUser.lname || '';
  }
  document.getElementById('co-modal').classList.add('open');
}
function coStep(n) {
  if (n === 2) {
    if (!document.getElementById('d-fn').value.trim() || !document.getElementById('d-addr').value.trim() || !document.getElementById('d-city').value.trim() || !document.getElementById('d-pin').value.trim())
      return showToast('error','Fill delivery details!');
  }
  document.getElementById('cp' + coStep_n).classList.remove('active');
  const prevEl = document.getElementById('cs' + coStep_n);
  prevEl.classList.remove('active'); prevEl.classList.add('done');
  prevEl.querySelector('.s-num').textContent = '✓';
  coStep_n = n;
  document.getElementById('cp' + n).classList.add('active');
  document.getElementById('cs' + n).classList.add('active');
  if (n === 3) buildReview();
}
function selPay(m) {
  selPayMethod = m;
  ['upi','card','nb','cod'].forEach(x => document.getElementById('pm-' + x).classList.toggle('sel', x===m));
  document.getElementById('upi-p').style.display = m==='upi'?'block':'none';
  document.getElementById('card-p').style.display = m==='card'?'block':'none';
}
function buildReview() {
  const sub = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const del = sub >= 499 ? 0 : 29;
  const disc = couponOn ? Math.round(sub*0.1) : 0;
  const tot = sub + del - disc;
  const items = cart.map(i => `${i.emoji} ${i.name.split(' ').slice(0,4).join(' ')} × ${i.qty} — ₹${(i.price*i.qty).toLocaleString()}`).join('\n');
  const addr = `${document.getElementById('d-fn').value} ${document.getElementById('d-ln').value}, ${document.getElementById('d-addr').value}, ${document.getElementById('d-city').value} ${document.getElementById('d-pin').value}`;
  const pn = {'upi':'UPI / GPay','card':'Credit/Debit Card','nb':'Net Banking','cod':'Cash on Delivery'};
  document.getElementById('o-review').innerHTML = `
    <div style="margin-bottom:7px;color:var(--text);font-weight:500">📦 Items</div>
    <div style="white-space:pre-line;margin-bottom:11px">${items}</div>
    <div style="margin-bottom:3px">📍 <strong style="color:var(--text)">Deliver to:</strong> ${addr}</div>
    <div style="margin-bottom:3px">💳 <strong style="color:var(--text)">Payment:</strong> ${pn[selPayMethod]}</div>
    <div style="margin-top:11px;padding-top:11px;border-top:1px solid var(--border);color:var(--text)">
      Total: <strong style="color:var(--accent);font-size:1.05rem">₹${tot.toLocaleString()}</strong>
      ${disc > 0 ? `<span style="color:var(--green);font-size:0.75rem;margin-left:7px">(Saved ₹${disc})</span>` : ''}
    </div>`;
}
function placeOrder() {
  const oid = 'CC-' + Date.now().toString().slice(-8).toUpperCase();
  document.getElementById('oid').textContent = 'Order ID: ' + oid;
  document.getElementById('cp3').classList.remove('active');
  document.getElementById('cp-ok').classList.add('active');
  document.getElementById('cs3').classList.remove('active');
  document.getElementById('cs3').classList.add('done');
  document.getElementById('cs3').querySelector('.s-num').textContent = '✓';
  cart = []; saveCart(); updCount();
}
function afterOrder() { closeModal('co-modal'); go('shop'); }

// ── TOAST ─────────────────────────────────────────────────────────
let tt;
function showToast(type, msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = 'toast ' + type + ' show';
  clearTimeout(tt);
  tt = setTimeout(() => t.classList.remove('show'), 3000);
}

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('click', e => {
  if (e.target.classList.contains('overlay')) e.target.classList.remove('open');
});
if (currentUser) document.getElementById('auth-btn').textContent = '👤 ' + currentUser.fname;
updCount();
renderProducts();
