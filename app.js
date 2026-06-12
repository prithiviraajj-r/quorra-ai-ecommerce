const products = [
  {
    id: 1,
    name: "Auralux Studio ANC Headphones",
    category: "electronics",
    price: 189,
    was: 249,
    rating: 4.8,
    reviews: 8421,
    fast: true,
    deal: true,
    tags: ["travel", "music", "work", "headphones"],
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 2,
    name: "VistaBook Air 14 AI Laptop",
    category: "electronics",
    price: 899,
    was: 1099,
    rating: 4.7,
    reviews: 3152,
    fast: true,
    deal: true,
    tags: ["laptop", "student", "work", "creator"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 3,
    name: "EchoWave Mini Smart Speaker",
    category: "electronics",
    price: 79,
    was: 119,
    rating: 4.6,
    reviews: 12002,
    fast: true,
    deal: true,
    tags: ["smart home", "speaker", "gift"],
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 4,
    name: "NestLoom Cloud Cotton Throw",
    category: "home",
    price: 64,
    was: 88,
    rating: 4.5,
    reviews: 1780,
    fast: true,
    deal: false,
    tags: ["home", "sleep", "gift", "decor"],
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 5,
    name: "ChefMate Digital Air Fryer Pro",
    category: "home",
    price: 129,
    was: 169,
    rating: 4.9,
    reviews: 9024,
    fast: true,
    deal: true,
    tags: ["kitchen", "home", "family"],
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 6,
    name: "MetroFlex Knit Runner Sneakers",
    category: "fashion",
    price: 74,
    was: 95,
    rating: 4.4,
    reviews: 4866,
    fast: false,
    deal: true,
    tags: ["fashion", "walking", "fitness", "shoes"],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 7,
    name: "GlowLab Daily Skin Reset Kit",
    category: "beauty",
    price: 42,
    was: 58,
    rating: 4.6,
    reviews: 2341,
    fast: true,
    deal: true,
    tags: ["beauty", "skin", "gift", "skincare"],
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 8,
    name: "PulseFit AMOLED Fitness Watch",
    category: "sports",
    price: 149,
    was: 199,
    rating: 4.7,
    reviews: 7750,
    fast: true,
    deal: false,
    tags: ["fitness", "health", "watch", "gift"],
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 9,
    name: "SummitTrail Steel Hydration Bottle",
    category: "sports",
    price: 28,
    was: 38,
    rating: 4.8,
    reviews: 5291,
    fast: true,
    deal: false,
    tags: ["fitness", "travel", "budget", "outdoor"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 10,
    name: "LumaDesk Wireless LED Task Lamp",
    category: "home",
    price: 54,
    was: 70,
    rating: 4.5,
    reviews: 1988,
    fast: true,
    deal: false,
    tags: ["work", "home", "student", "desk"],
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 11,
    name: "CarryPro Commuter Tech Backpack",
    category: "fashion",
    price: 86,
    was: 124,
    rating: 4.6,
    reviews: 3410,
    fast: true,
    deal: true,
    tags: ["travel", "work", "student", "bag"],
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 12,
    name: "PixelForge 4K Creator Monitor",
    category: "electronics",
    price: 399,
    was: 499,
    rating: 4.7,
    reviews: 2675,
    fast: false,
    deal: true,
    tags: ["work", "gaming", "creator", "monitor"],
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 13,
    name: "SnapFrame Pro Mirrorless Camera",
    category: "electronics",
    price: 749,
    was: 899,
    rating: 4.8,
    reviews: 1844,
    fast: true,
    deal: true,
    tags: ["camera", "creator", "travel", "photo"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 14,
    name: "ChargeDock 3-in-1 Mag Station",
    category: "electronics",
    price: 69,
    was: 99,
    rating: 4.5,
    reviews: 4307,
    fast: true,
    deal: true,
    tags: ["phone", "charger", "desk", "gift"],
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 15,
    name: "ModeLine Oversized Bomber Jacket",
    category: "fashion",
    price: 118,
    was: 158,
    rating: 4.5,
    reviews: 2210,
    fast: true,
    deal: false,
    tags: ["fashion", "jacket", "streetwear"],
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 16,
    name: "AuraWear Minimal Smart Ring",
    category: "fashion",
    price: 229,
    was: 279,
    rating: 4.4,
    reviews: 924,
    fast: true,
    deal: true,
    tags: ["fashion", "health", "wearable", "gift"],
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 17,
    name: "PureBloom Refillable Fragrance",
    category: "beauty",
    price: 72,
    was: 96,
    rating: 4.7,
    reviews: 3098,
    fast: true,
    deal: true,
    tags: ["beauty", "fragrance", "gift"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 18,
    name: "SilkRoot Hair Care Duo",
    category: "beauty",
    price: 36,
    was: 49,
    rating: 4.5,
    reviews: 1817,
    fast: false,
    deal: true,
    tags: ["beauty", "hair", "budget"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 19,
    name: "FlexCore Adjustable Dumbbell Pair",
    category: "sports",
    price: 299,
    was: 379,
    rating: 4.8,
    reviews: 4012,
    fast: true,
    deal: true,
    tags: ["fitness", "home gym", "strength"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 20,
    name: "StrideMat Smart Yoga Mat",
    category: "sports",
    price: 84,
    was: 110,
    rating: 4.4,
    reviews: 1459,
    fast: true,
    deal: false,
    tags: ["fitness", "yoga", "health", "gift"],
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 21,
    name: "BrewIQ Smart Coffee Maker",
    category: "home",
    price: 179,
    was: 229,
    rating: 4.7,
    reviews: 5184,
    fast: true,
    deal: true,
    tags: ["kitchen", "coffee", "smart home", "gift"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 22,
    name: "ClearView Robot Vacuum Max",
    category: "home",
    price: 349,
    was: 449,
    rating: 4.6,
    reviews: 6235,
    fast: true,
    deal: true,
    tags: ["home", "cleaning", "smart home"],
    image: "https://images.unsplash.com/photo-1603618090561-412154b4bd1b?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 23,
    name: "GameSphere RGB Mechanical Keyboard",
    category: "electronics",
    price: 119,
    was: 159,
    rating: 4.8,
    reviews: 6880,
    fast: true,
    deal: false,
    tags: ["gaming", "keyboard", "work", "student"],
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=700&q=90"
  },
  {
    id: 24,
    name: "CloudRest Ergonomic Office Chair",
    category: "home",
    price: 259,
    was: 329,
    rating: 4.6,
    reviews: 3566,
    fast: false,
    deal: true,
    tags: ["work", "home office", "desk"],
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=90"
  }
];

const productCaptions = {
  1: "Over-ear wireless headphones with active noise cancellation and long battery life.",
  2: "Lightweight 14-inch laptop built for work, classes, streaming, and creative tasks.",
  3: "Compact smart speaker for music, voice control, timers, and connected home routines.",
  4: "Soft cotton throw blanket for bedrooms, sofas, reading corners, and gifting.",
  5: "Digital air fryer for crisp snacks, quick dinners, and low-oil everyday cooking.",
  6: "Breathable knit sneakers designed for walking, casual outfits, and daily comfort.",
  7: "Daily skincare set with cleanser, serum, and moisturizer for a fresh routine.",
  8: "AMOLED fitness watch for workouts, heart-rate tracking, sleep, and notifications.",
  9: "Insulated steel bottle that keeps drinks cold for gym, travel, and outdoor use.",
  10: "Adjustable LED desk lamp with wireless charging for study and home-office setups.",
  11: "Slim commuter backpack with organized storage for laptop, charger, and essentials.",
  12: "Sharp 4K monitor for creators, gaming, multitasking, and clean desk setups.",
  13: "Mirrorless camera for travel photos, videos, portraits, and creator content.",
  14: "Three-device charging dock for phone, earbuds, and smartwatch nightstand setups.",
  15: "Modern bomber jacket with relaxed streetwear styling and everyday layering comfort.",
  16: "Minimal smart ring for health insights, sleep tracking, and subtle wearable style.",
  17: "Refillable fragrance with a polished bottle design for daily wear or gifting.",
  18: "Hair-care duo for smoother, softer-looking hair with a clean bathroom-shelf look.",
  19: "Space-saving adjustable dumbbells for strength training and home gym workouts.",
  20: "Cushioned yoga mat for stretching, balance work, pilates, and recovery sessions.",
  21: "Smart coffee maker for scheduled brews, rich flavor, and easy morning routines.",
  22: "Robot vacuum for automatic floor cleaning, pet hair pickup, and smart scheduling.",
  23: "RGB mechanical keyboard with tactile keys for gaming, typing, and desk upgrades.",
  24: "Ergonomic office chair with supportive cushioning for long work and study days."
};

products.forEach((product) => {
  product.caption = productCaptions[product.id];
});

const state = {
  query: "",
  category: "all",
  sort: "featured",
  maxPrice: 1200,
  primeOnly: false,
  dealOnly: false,
  cart: []
};

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const sortSelect = document.querySelector("#sortSelect");
const priceRange = document.querySelector("#priceRange");
const priceLabel = document.querySelector("#priceLabel");
const resultCount = document.querySelector("#resultCount");
const resultTitle = document.querySelector("#resultTitle");
const primeOnly = document.querySelector("#primeOnly");
const dealOnly = document.querySelector("#dealOnly");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const subtotal = document.querySelector("#subtotal");
const delivery = document.querySelector("#delivery");
const total = document.querySelector("#total");
const overlay = document.querySelector("#overlay");
const assistantDock = document.querySelector("#assistantDock");
const chatLog = document.querySelector("#chatLog");
const assistantInput = document.querySelector("#assistantInput");

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function getFilteredProducts() {
  const query = state.query.toLowerCase().trim();
  let list = products.filter((product) => {
    const matchesText = !query || [product.name, product.caption, product.category, ...product.tags].join(" ").toLowerCase().includes(query);
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesPrice = product.price <= state.maxPrice;
    const matchesFast = !state.primeOnly || product.fast;
    const matchesDeal = !state.dealOnly || product.deal;
    return matchesText && matchesCategory && matchesPrice && matchesFast && matchesDeal;
  });

  if (state.sort === "rating") list = list.sort((a, b) => b.rating - a.rating);
  if (state.sort === "priceAsc") list = list.sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") list = list.sort((a, b) => b.price - a.price);
  if (state.sort === "featured") list = list.sort((a, b) => Number(b.deal) - Number(a.deal) || b.rating - a.rating);
  return list;
}

function renderProducts() {
  const list = getFilteredProducts();
  resultCount.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
  resultTitle.textContent = state.query ? `Results for "${state.query}"` : "Recommended for you";

  if (!list.length) {
    productGrid.innerHTML = `<p class="empty">No products match those filters. Try widening your search.</p>`;
    return;
  }

  productGrid.innerHTML = list.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-caption">${product.caption}</p>
        <div class="rating-row">
          <span class="stars">${"★".repeat(Math.round(product.rating))}</span>
          <span>${product.rating} (${product.reviews.toLocaleString()})</span>
        </div>
        <div>
          <span class="price">${money(product.price)}</span>
          <span class="was">${money(product.was)}</span>
        </div>
        <div class="badge-row">
          ${product.fast ? `<span class="badge">QuorraFast</span>` : ""}
          ${product.deal ? `<span class="badge deal">Deal</span>` : ""}
        </div>
        <button class="add-button" type="button" data-add="${product.id}">Add to Cart</button>
      </div>
    </article>
  `).join("");
}

function updateCart() {
  const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const sub = state.cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const ship = sub > 0 && sub < 50 ? 7 : 0;
  cartCount.textContent = itemCount;
  subtotal.textContent = money(sub);
  delivery.textContent = ship ? money(ship) : "Free";
  total.textContent = money(sub + ship);

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="empty">Your cart is ready for something excellent.</p>`;
    return;
  }

  cartItems.innerHTML = state.cart.map((item) => `
    <div class="cart-item">
      <img src="${item.product.image}" alt="${item.product.name}">
      <div>
        <h3>${item.product.name}</h3>
        <p>${money(item.product.price)} each</p>
      </div>
      <div class="qty-controls" aria-label="Quantity controls">
        <button type="button" data-dec="${item.product.id}">-</button>
        <strong>${item.qty}</strong>
        <button type="button" data-inc="${item.product.id}">+</button>
      </div>
    </div>
  `).join("");
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  const existing = state.cart.find((item) => item.product.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ product, qty: 1 });
  updateCart();
}

function setPanel(panel) {
  cartPanel.classList.toggle("open", panel === "cart");
  assistantDock.classList.toggle("open", panel === "assistant");
  overlay.classList.toggle("open", Boolean(panel));
}

function addMessage(text, sender = "ai") {
  const node = document.createElement("div");
  node.className = `message ${sender}`;
  node.textContent = text;
  chatLog.appendChild(node);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function assistantReply(prompt) {
  const text = prompt.toLowerCase();
  const budgetMatch = text.match(/\$?(\d{2,4})/);
  const budget = budgetMatch ? Number(budgetMatch[1]) : Infinity;
  const intentWords = text.split(/\W+/).filter(Boolean);
  const matches = products
    .filter((product) => product.price <= budget)
    .map((product) => {
      const haystack = [product.name, product.category, ...product.tags].join(" ").toLowerCase();
      const keywordScore = intentWords.filter((word) => haystack.includes(word)).length;
      const dealScore = product.deal ? 1.5 : 0;
      return { product, score: keywordScore + product.rating + dealScore };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.product);

  if (!matches.length) {
    return "I could not find a fit in that price range. Try a higher budget or a broader category.";
  }

  const names = matches.map((product) => `${product.name} (${money(product.price)}, ${product.rating} stars)`).join("; ");
  return `I would shortlist: ${names}. My top pick is ${matches[0].name} because it balances rating, price, and current deal value.`;
}

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  state.category = categorySelect.value;
  renderProducts();
});

categorySelect.addEventListener("change", () => {
  state.category = categorySelect.value;
  renderProducts();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});

priceRange.addEventListener("input", () => {
  state.maxPrice = Number(priceRange.value);
  priceLabel.textContent = money(state.maxPrice);
  renderProducts();
});

primeOnly.addEventListener("change", () => {
  state.primeOnly = primeOnly.checked;
  renderProducts();
});

dealOnly.addEventListener("change", () => {
  state.dealOnly = dealOnly.checked;
  renderProducts();
});

document.querySelector("#resetFilters").addEventListener("click", () => {
  state.query = "";
  state.category = "all";
  state.sort = "featured";
  state.maxPrice = 1200;
  state.primeOnly = false;
  state.dealOnly = false;
  searchInput.value = "";
  categorySelect.value = "all";
  sortSelect.value = "featured";
  priceRange.value = "1200";
  priceLabel.textContent = "$1,200";
  primeOnly.checked = false;
  dealOnly.checked = false;
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(Number(button.dataset.add));
  setPanel("cart");
});

cartItems.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  if (inc) addToCart(Number(inc.dataset.inc));
  if (dec) {
    const item = state.cart.find((entry) => entry.product.id === Number(dec.dataset.dec));
    if (item) item.qty -= 1;
    state.cart = state.cart.filter((entry) => entry.qty > 0);
    updateCart();
  }
});

document.querySelector("#cartButton").addEventListener("click", () => setPanel("cart"));
document.querySelector("#closeCart").addEventListener("click", () => setPanel(null));
document.querySelector("#closeAssistant").addEventListener("click", () => setPanel(null));
document.querySelector("#startAssistant").addEventListener("click", () => setPanel("assistant"));
document.querySelector("#openAssistantTop").addEventListener("click", () => setPanel("assistant"));
overlay.addEventListener("click", () => setPanel(null));

document.querySelector("#assistantForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const prompt = assistantInput.value.trim();
  if (!prompt) return;
  addMessage(prompt, "user");
  assistantInput.value = "";
  setTimeout(() => addMessage(assistantReply(prompt)), 220);
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.dataset.prompt;
    addMessage(prompt, "user");
    addMessage(assistantReply(prompt));
  });
});

addMessage("Hi, I am Quorra. Ask for a category, a budget, or a person you are buying for, and I will recommend the best fit.");
renderProducts();
updateCart();
