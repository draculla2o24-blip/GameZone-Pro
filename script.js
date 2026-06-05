// Games Database
const gamesDatabase = [
    { id: 1, name: "EA Sports FC 25", platform: "ps5", description: "أحدث إصدار من سلسلة ألعاب كرة القدم", price: 499, image: "https://image.api.playstation.com/vulcan/ap/rnd/202409/1616/d90ccc5e8c0cff821bd1c61fbc2b5fea98f18e4f832ff2f6.png?w=440&thumb=false", discount: 10 },
    { id: 2, name: "God of War Ragnarök", platform: "ps5", description: "ملحمة الآلهة الإسكندنافية", price: 399, image: "https://image.api.playstation.com/vulcan/img/rnd/202011/0711/p8JCvA8692BICXAPoyylh7ed.png?w=440&thumb=false", badge: "حصري", discount: 0 },
    { id: 3, name: "Call of Duty MW III", platform: "ps5", description: "أقوى ألعاب الأكشن والحرب", price: 449, image: "https://image.api.playstation.com/cdn/UP0002/CUSA03522_00/6RXAjYiUhGOLE8Ow4FpUbiTSj6X1x1Lb.png?w=440&thumb=false", discount: 15 },
    { id: 4, name: "Spider-Man 2", platform: "ps5", description: "مغامرات سبايدرمان", price: 429, image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png?w=440&thumb=false", discount: 0 },
    { id: 5, name: "Final Fantasy XVI", platform: "ps5", description: "مغامرة ملحمية", price: 479, image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/2904/NspyF8og84Div2VMShXI4cV7.png?w=440&thumb=false", discount: 5 },
    { id: 6, name: "GTA V", platform: "ps4", description: "الكلاسيكية الخالدة", price: 199, image: "https://image.api.playstation.com/vulcan/ap/rnd/202203/1409/oltI7Zc96usbdvhVVXcV1EAi.png?w=440&thumb=false", discount: 20 },
    { id: 7, name: "The Last of Us II", platform: "ps4", description: "قصة مؤثرة", price: 299, image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png?w=440&thumb=false", badge: "كلاسيكية", discount: 0 },
    { id: 8, name: "Red Dead Redemption 2", platform: "ps4", description: "الغرب المتوحش", price: 349, image: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440&thumb=false", discount: 10 },
    { id: 9, name: "FIFA 26", platform: "ps4", description: "لعبة كرة القدم", price: 399, image: "https://image.api.playstation.com/vulcan/ap/rnd/202509/1900/c2e1c15a9e0946971b531c6e176c50ce6c5a24d653a20829.png?w=440&thumb=false", discount: 0 },
    { id: 10, name: "Horizon Forbidden West", platform: "ps4", description: "مغامرات ألوي", price: 379, image: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png?w=440&thumb=false", discount: 0 },
    { id: 11, name: "Cyberpunk 2077", platform: "pc", description: "عالم مستقبلي", price: 279, image: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png?w=440&thumb=false", discount: 25 },
    { id: 12, name: "Hogwarts Legacy", platform: "pc", description: "عالم هاري بوتر", price: 449, image: "https://image.api.playstation.com/vulcan/ap/rnd/202503/2716/ce2e7f5896365b4e35a192b1f7592b590fee98827644ddb4.png?w=440&thumb=false", discount: 0 },
    { id: 13, name: "Baldur's Gate 3", platform: "pc", description: "لعبة RPG حائزة على جوائز", price: 399, image: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png?w=440&thumb=false", badge: "جائزة", discount: 0 },
    { id: 14, name: "Elden Ring", platform: "pc", description: "لعبة الأكشن الملحمية", price: 429, image: "https://image.api.playstation.com/vulcan/ap/rnd/202402/0817/114b1df9577098209a8bb8e45f4a009e201e9a2fa5113a06.png?w=440&thumb=false", discount: 10 },
    { id: 15, name: "The Witcher 3", platform: "pc", description: "المغامرة الخالدة", price: 149, image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png?w=440&thumb=false", discount: 40 }
];

// Game Download Links Database
const downloadLinks = {
    1: { pc: "https://example.com/download/ea-fc25-pc.zip", ps5: "https://store.playstation.com/ps5/ea-fc25", ps4: "https://store.playstation.com/ps4/ea-fc25" },
    2: { pc: "https://example.com/download/gow-ragnarok-pc.zip", ps5: "https://store.playstation.com/ps5/god-of-war-ragnarok", ps4: "https://store.playstation.com/ps4/god-of-war-ragnarok" },
    3: { pc: "https://example.com/download/cod-mw3-pc.zip", ps5: "https://store.playstation.com/ps5/cod-mw3", ps4: "https://store.playstation.com/ps4/cod-mw3" },
    4: { pc: "https://example.com/download/spiderman-2-pc.zip", ps5: "https://store.playstation.com/ps5/spiderman-2", ps4: "https://store.playstation.com/ps4/spiderman-2" },
    5: { pc: "https://example.com/download/ff16-pc.zip", ps5: "https://store.playstation.com/ps5/final-fantasy-xvi", ps4: "https://store.playstation.com/ps4/final-fantasy-xvi" },
    6: { pc: "https://example.com/download/gta5-pc.zip", ps5: "https://store.playstation.com/ps5/gta-v", ps4: "https://store.playstation.com/ps4/gta-v" },
    7: { pc: "https://example.com/download/lou2-pc.zip", ps5: "https://store.playstation.com/ps5/last-of-us-2", ps4: "https://store.playstation.com/ps4/last-of-us-2" },
    8: { pc: "https://example.com/download/rdr2-pc.zip", ps5: "https://store.playstation.com/ps5/rdr2", ps4: "https://store.playstation.com/ps4/rdr2" },
    9: { pc: "https://example.com/download/fifa24-pc.zip", ps5: "https://store.playstation.com/ps5/fifa-24", ps4: "https://store.playstation.com/ps4/fifa-24" },
    10: { pc: "https://example.com/download/horizon-fw-pc.zip", ps5: "https://store.playstation.com/ps5/horizon-forbidden-west", ps4: "https://store.playstation.com/ps4/horizon-forbidden-west" },
    11: { pc: "https://example.com/download/cyberpunk-pc.zip", ps5: "https://store.playstation.com/ps5/cyberpunk-2077", ps4: "https://store.playstation.com/ps4/cyberpunk-2077" },
    12: { pc: "https://example.com/download/hogwarts-pc.zip", ps5: "https://store.playstation.com/ps5/hogwarts-legacy", ps4: "https://store.playstation.com/ps4/hogwarts-legacy" },
    13: { pc: "https://example.com/download/baldurs-gate3-pc.zip", ps5: "https://store.playstation.com/ps5/baldurs-gate-3", ps4: "https://store.playstation.com/ps4/baldurs-gate-3" },
    14: { pc: "https://example.com/download/elden-ring-pc.zip", ps5: "https://store.playstation.com/ps5/elden-ring", ps4: "https://store.playstation.com/ps4/elden-ring" },
    15: { pc: "https://example.com/download/witcher3-pc.zip", ps5: "https://store.playstation.com/ps5/witcher-3", ps4: "https://store.playstation.com/ps4/witcher-3" }
};

// App State
let games = [...gamesDatabase];
let cart = [];
let currentUser = null;
let currentPlatform = "all";

// DOM Elements
let productsGrid, cartSidebar, cartItems, cartCount, cartTotal;
let authModal, paymentModal, downloadModal, notification, loadingSpinner;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    setupEventListeners();
    loadFromStorage();
    renderGames();
    updateAuthUI();
    updateCartUI();
    updateStats();
    initCustomCursor();
});

function initializeElements() {
    productsGrid = document.getElementById('productsGrid');
    cartSidebar = document.getElementById('cartSidebar');
    cartItems = document.getElementById('cartItems');
    cartCount = document.getElementById('cartCount');
    cartTotal = document.getElementById('cartTotal');
    authModal = document.getElementById('authModal');
    paymentModal = document.getElementById('paymentModal');
    downloadModal = document.getElementById('downloadModal');
    notification = document.getElementById('notification');
    loadingSpinner = document.getElementById('loadingSpinner');
}

// Custom Cursor
function initCustomCursor() {
    if (window.innerWidth <= 992) return;
    
    const oldCursor = document.querySelector('.custom-cursor');
    const oldDot = document.querySelector('.custom-cursor-dot');
    if (oldCursor) oldCursor.remove();
    if (oldDot) oldDot.remove();
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const dot = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(dot);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
    });
    
    const hoverElements = document.querySelectorAll('a, button, .product-card, .platform-btn, .add-to-cart');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

function setupEventListeners() {
    // Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }
    
    // Platform Filter
    document.querySelectorAll('.platform-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPlatform = btn.dataset.platform;
            renderGames();
        });
    });
    
    // Cart Toggle
    const cartToggle = document.getElementById('cartToggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            if (!currentUser) {
                showNotification('يجب تسجيل الدخول أولاً', 'error');
                openAuthModal();
                return;
            }
            cartSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close Cart
    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (!currentUser) {
                showNotification('يجب تسجيل الدخول أولاً', 'error');
                openAuthModal();
                return;
            }
            if (cart.length === 0) {
                showNotification('السلة فارغة', 'error');
                return;
            }
            openPaymentModal();
        });
    }
    
    // Download Modal Close
    const closeDownloadBtn = document.getElementById('closeDownloadModal');
    if (closeDownloadBtn) {
        closeDownloadBtn.addEventListener('click', () => {
            if (downloadModal) downloadModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Copy All Links Button
    const copyAllLinksBtn = document.getElementById('copyAllLinksBtn');
    if (copyAllLinksBtn) {
        copyAllLinksBtn.addEventListener('click', copyAllDownloadLinks);
    }
    
    setupAuthEvents();
    setupPaymentEvents();
    
    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === cartSidebar) {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (e.target === authModal) closeAuthModal();
        if (e.target === paymentModal) closePaymentModal();
        if (e.target === downloadModal) {
            if (downloadModal) downloadModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function setupAuthEvents() {
    const closeAuthBtn = document.getElementById('closeAuthModal');
    if (closeAuthBtn) closeAuthBtn.addEventListener('click', closeAuthModal);
    
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const forgotLink = document.getElementById('forgotPasswordLink');
    const backToLogin = document.getElementById('backToLogin');
    
    if (showRegister) showRegister.addEventListener('click', (e) => { e.preventDefault(); switchAuthForm('register'); });
    if (showLogin) showLogin.addEventListener('click', (e) => { e.preventDefault(); switchAuthForm('login'); });
    if (forgotLink) forgotLink.addEventListener('click', (e) => { e.preventDefault(); switchAuthForm('forgot'); });
    if (backToLogin) backToLogin.addEventListener('click', (e) => { e.preventDefault(); switchAuthForm('login'); });
    
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotForm = document.getElementById('forgotForm');
    
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    if (forgotForm) forgotForm.addEventListener('submit', handleForgotPassword);
}

function setupPaymentEvents() {
    const closePaymentBtn = document.getElementById('closePaymentModal');
    if (closePaymentBtn) closePaymentBtn.addEventListener('click', closePaymentModal);
    
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            method.classList.add('active');
            const methodType = method.dataset.method;
            document.querySelectorAll('.payment-form').forEach(form => form.classList.remove('active'));
            if (methodType === 'card') document.getElementById('cardPaymentForm').classList.add('active');
            else if (methodType === 'vodafone') document.getElementById('vodafoneForm').classList.add('active');
            else if (methodType === 'instapay') document.getElementById('instapayForm').classList.add('active');
        });
    });
    
    const processBtn = document.getElementById('processPaymentBtn');
    if (processBtn) processBtn.addEventListener('click', processPayment);
}

function openAuthModal() {
    if (authModal) {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        switchAuthForm('login');
    }
}

function closeAuthModal() {
    if (authModal) {
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function switchAuthForm(formType) {
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    if (formType === 'login') document.getElementById('loginForm').classList.add('active');
    else if (formType === 'register') document.getElementById('registerForm').classList.add('active');
    else if (formType === 'forgot') document.getElementById('forgotForm').classList.add('active');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    const users = JSON.parse(localStorage.getItem('gamezone_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        if (rememberMe) localStorage.setItem('gamezone_user', JSON.stringify(user));
        else sessionStorage.setItem('gamezone_user', JSON.stringify(user));
        updateAuthUI();
        closeAuthModal();
        showNotification(`مرحباً ${user.name}! تم تسجيل الدخول بنجاح`);
        renderGames();
    } else {
        showNotification('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('كلمة المرور غير متطابقة', 'error');
        return;
    }
    if (password.length < 6) {
        showNotification('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('gamezone_users') || '[]');
    if (users.find(u => u.email === email)) {
        showNotification('البريد الإلكتروني مسجل مسبقاً', 'error');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        password: password,
        joinDate: new Date().toLocaleDateString('ar-EG'),
        orders: []
    };
    
    users.push(newUser);
    localStorage.setItem('gamezone_users', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('gamezone_user', JSON.stringify(newUser));
    updateAuthUI();
    closeAuthModal();
    showNotification(`مرحباً ${name}! تم إنشاء حسابك بنجاح`);
    renderGames();
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    const users = JSON.parse(localStorage.getItem('gamezone_users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (user) {
        showNotification('تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني', 'success');
        switchAuthForm('login');
    } else {
        showNotification('البريد الإلكتروني غير مسجل', 'error');
    }
}

function updateAuthUI() {
    const authContainer = document.getElementById('authButtonContainer');
    if (!authContainer) return;
    
    if (currentUser) {
        authContainer.innerHTML = `<li><button class="profile-btn" id="profileButton"><i class="fas fa-user-circle"></i><span>${currentUser.name.split(' ')[0]}</span></button></li>`;
        const profileBtn = document.getElementById('profileButton');
        if (profileBtn) profileBtn.addEventListener('click', showUserMenu);
    } else {
        authContainer.innerHTML = `<li><button class="profile-btn" id="showAuthBtn"><i class="fas fa-user"></i><span>تسجيل الدخول</span></button></li>`;
        const showAuthBtn = document.getElementById('showAuthBtn');
        if (showAuthBtn) showAuthBtn.addEventListener('click', openAuthModal);
    }
}

function showUserMenu() {
    if (confirm(`${currentUser.name}\n\n📧 ${currentUser.email}\n📱 ${currentUser.phone || 'غير مسجل'}\n\nاضغط OK لتسجيل الخروج`)) {
        currentUser = null;
        localStorage.removeItem('gamezone_user');
        sessionStorage.removeItem('gamezone_user');
        updateAuthUI();
        showNotification('تم تسجيل الخروج بنجاح');
    }
}

function openPaymentModal() {
    if (!paymentModal) return;
    
    const summary = document.getElementById('paymentSummary');
    const totalAmount = document.getElementById('paymentTotalAmount');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (summary) {
        summary.innerHTML = `
            <h4 style="margin-bottom: 15px;">ملخص الطلب</h4>
            ${cart.map(item => `<div style="display: flex; justify-content: space-between; margin-bottom: 10px;"><span>${item.name} x${item.quantity}</span><span>${(item.price * item.quantity).toLocaleString()} ج.م</span></div>`).join('')}
            <div style="border-top: 1px solid rgba(255,255,255,0.1); margin-top: 10px; padding-top: 10px;">
                <div style="display: flex; justify-content: space-between; font-weight: bold;"><span>الإجمالي</span><span>${total.toLocaleString()} ج.م</span></div>
            </div>
        `;
    }
    if (totalAmount) totalAmount.textContent = `${total.toLocaleString()} ج.م`;
    
    paymentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    if (paymentModal) {
        paymentModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function processPayment() {
    if (cart.length === 0) {
        showNotification('السلة فارغة', 'error');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const order = {
            id: 'ORD-' + Date.now(),
            customer: currentUser,
            items: [...cart],
            total: total,
            date: new Date().toISOString(),
            downloadLinks: []
        };
        
        // Generate download links for each game
        order.items.forEach(item => {
            const game = games.find(g => g.id === item.id);
            if (game && downloadLinks[item.id]) {
                const platformLink = downloadLinks[item.id][game.platform] || downloadLinks[item.id].pc;
                order.downloadLinks.push({
                    gameId: item.id,
                    gameName: item.name,
                    platform: game.platform,
                    link: platformLink,
                    image: item.image,
                    expiresIn: '48 ساعة'
                });
            }
        });
        
        // Save order
        let orders = JSON.parse(localStorage.getItem('gamezone_orders') || '[]');
        orders.push(order);
        localStorage.setItem('gamezone_orders', JSON.stringify(orders));
        
        // Update user orders
        if (currentUser) {
            if (!currentUser.orders) currentUser.orders = [];
            currentUser.orders.push(order.id);
            localStorage.setItem('gamezone_user', JSON.stringify(currentUser));
            
            const users = JSON.parse(localStorage.getItem('gamezone_users') || '[]');
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                if (!users[userIndex].orders) users[userIndex].orders = [];
                users[userIndex].orders.push(order.id);
                localStorage.setItem('gamezone_users', JSON.stringify(users));
            }
        }
        
        // Show download modal with links
        showDownloadModal(order.downloadLinks);
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartUI();
        
        hideLoading();
        closePaymentModal();
        cartSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        showNotification(`تم إتمام الشراء بنجاح! رقم الطلب: ${order.id}`, 'success');
    }, 2000);
}

function showDownloadModal(downloadItems) {
    if (!downloadModal) return;
    
    const container = document.getElementById('downloadLinksContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (downloadItems.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 40px;">لا توجد روابط تحميل متاحة لهذه الألعاب</div>';
    } else {
        downloadItems.forEach(item => {
            const platformIcon = item.platform === 'pc' ? 'fab fa-windows' : 'fab fa-playstation';
            const platformName = item.platform.toUpperCase();
            
            const downloadItem = document.createElement('div');
            downloadItem.className = 'download-item';
            downloadItem.innerHTML = `
                <div class="download-item-header">
                    <div class="download-item-img">
                        <img src="${item.image}" alt="${item.gameName}">
                    </div>
                    <div class="download-item-info">
                        <h4>${item.gameName}</h4>
                        <p><i class="${platformIcon}"></i> ${platformName}</p>
                        <p>⏱️ الصلاحية: ${item.expiresIn}</p>
                    </div>
                </div>
                <div class="download-item-actions">
                    <a href="${item.link}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> تحميل الآن
                    </a>
                    <button class="copy-link-btn" data-link="${item.link}">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            `;
            container.appendChild(downloadItem);
        });
        
        // Add copy link event listeners
        document.querySelectorAll('.copy-link-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const link = btn.getAttribute('data-link');
                copyToClipboard(link);
            });
        });
    }
    
    downloadModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('تم نسخ الرابط بنجاح!', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('تم نسخ الرابط بنجاح!', 'success');
    });
}

function copyAllDownloadLinks() {
    const downloadBtns = document.querySelectorAll('.download-btn');
    const links = Array.from(downloadBtns).map(btn => btn.href);
    if (links.length > 0) {
        const allLinks = links.join('\n');
        copyToClipboard(allLinks);
    } else {
        showNotification('لا توجد روابط لنسخها', 'error');
    }
}

function renderGames() {
    if (!productsGrid) return;
    
    let filteredGames = games;
    if (currentPlatform !== "all") {
        filteredGames = games.filter(game => game.platform === currentPlatform);
    }
    
    productsGrid.innerHTML = '';
    
    filteredGames.forEach(game => {
        const platformClass = game.platform;
        const platformIcon = game.platform === 'pc' ? 'fab fa-windows' : 'fab fa-playstation';
        const platformName = game.platform.toUpperCase();
        const finalPrice = game.discount > 0 ? game.price * (1 - game.discount / 100) : game.price;
        const hasDiscount = game.discount > 0;
        
        const gameCard = document.createElement('div');
        gameCard.className = 'product-card';
        gameCard.innerHTML = `
            <div class="product-img">
                <img src="${game.image}" alt="${game.name}">
                <span class="product-platform ${platformClass}"><i class="${platformIcon}"></i> ${platformName}</span>
                ${game.badge ? `<span class="product-badge">${game.badge}</span>` : ''}
                ${hasDiscount ? `<span class="product-badge" style="background: var(--accent-green); left: auto; right: 15px;">-${game.discount}%</span>` : ''}
            </div>
            <div class="product-content">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <div class="product-price">${hasDiscount ? `<span class="product-old-price">${game.price.toLocaleString()} ج.م</span>` : ''}${finalPrice.toLocaleString()} ج.م</div>
                <button class="add-to-cart" data-id="${game.id}"><i class="fas fa-cart-plus"></i> أضف إلى السلة</button>
            </div>
        `;
        productsGrid.appendChild(gameCard);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!currentUser) {
                showNotification('يجب تسجيل الدخول أولاً', 'error');
                openAuthModal();
                return;
            }
            const gameId = parseInt(btn.dataset.id);
            addToCart(gameId);
        });
    });
}

function addToCart(gameId) {
    if (!currentUser) {
        showNotification('يجب تسجيل الدخول أولاً', 'error');
        openAuthModal();
        return;
    }
    
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    const finalPrice = game.discount > 0 ? game.price * (1 - game.discount / 100) : game.price;
    const existingItem = cart.find(item => item.id === gameId);
    
    if (existingItem) {
        existingItem.quantity++;
        showNotification(`تم تحديث كمية ${game.name}`);
    } else {
        cart.push({
            id: game.id,
            name: game.name,
            price: finalPrice,
            image: game.image,
            platform: game.platform,
            quantity: 1
        });
        showNotification(`تم إضافة ${game.name} إلى السلة`);
    }
    
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>السلة فارغة</p><button class="btn btn-outline" style="margin-top: 15px;" onclick="document.getElementById('cartSidebar').classList.remove('active')">تسوق الآن</button></div>`;
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">${item.price.toLocaleString()} ج.م</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        document.querySelectorAll('.decrease').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), -1));
        });
        document.querySelectorAll('.increase').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 1));
        });
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
        });
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `${total.toLocaleString()} ج.م`;
}

function updateQuantity(gameId, change) {
    const itemIndex = cart.findIndex(i => i.id === gameId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) cart.splice(itemIndex, 1);
        saveCart();
        updateCartUI();
        showNotification('تم تحديث السلة');
    }
}

function removeFromCart(gameId) {
    cart = cart.filter(i => i.id !== gameId);
    saveCart();
    updateCartUI();
    showNotification('تم إزالة المنتج من السلة');
}

function updateStats() {
    const gamesCount = document.getElementById('gamesCount');
    const usersCount = document.getElementById('usersCount');
    if (gamesCount) gamesCount.textContent = games.length;
    if (usersCount) {
        const users = JSON.parse(localStorage.getItem('gamezone_users') || '[]');
        usersCount.textContent = users.length;
    }
}

function showNotification(message, type = 'success') {
    if (!notification) return;
    const notificationText = document.getElementById('notificationText');
    if (notificationText) notificationText.textContent = message;
    notification.style.background = type === 'error' ? 'linear-gradient(135deg, #ff4757, #ff6b81)' : 'linear-gradient(135deg, #00cc66, #00aa55)';
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
}

function showLoading() {
    if (loadingSpinner) loadingSpinner.style.display = 'flex';
}

function hideLoading() {
    if (loadingSpinner) loadingSpinner.style.display = 'none';
}

function saveCart() {
    localStorage.setItem('gamezone_cart', JSON.stringify(cart));
}

function loadFromStorage() {
    const storedUser = localStorage.getItem('gamezone_user') || sessionStorage.getItem('gamezone_user');
    if (storedUser) currentUser = JSON.parse(storedUser);
    const savedCart = localStorage.getItem('gamezone_cart');
    if (savedCart) cart = JSON.parse(savedCart);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const navLinks = document.getElementById('navLinks');
            if (navLinks && navLinks.classList.contains('active')) navLinks.classList.remove('active');
        }
    });
});