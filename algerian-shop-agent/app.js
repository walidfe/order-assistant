(function () {
  const STORAGE_KEY = 'algerian-orders-v1';
  const PROFILE_NAME_KEY = 'algerian-shop-merchant-name';
  const PROFILE_IMAGE_KEY = 'algerian-shop-profile-image';
  const DEFAULT_STATUS = 'Pending';
  const WILAYAS = [
    'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira',
    'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda',
    'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'M\'Sila', 'Mascara',
    'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt',
    'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa',
    'Relizane', 'Timimoun', 'Bordj Baji Mokhtar', 'Ouled Djellal', 'Béni Abbès', 'In Guezzam', 'In Salah', 'Djanet',
    'El M\'Ghair', 'El Meniaa', 'El Meghaier'
  ];

  const translations = {
    fr: {
      title: 'Gestion des commandes - Algérie',
      eyebrow: 'Assistant de commande',
      appTitle: 'Gestion des commandes',
      filterWilaya: 'Filtrer par wilaya',
      statusLabel: 'Statut',
      allStatuses: 'Tous',
      pendingStatus: 'En attente',
      shippedStatus: 'Expédiée',
      deliveredStatus: 'Livrée',
      messageClient: 'Message client',
      messagePlaceholder: 'Exemple: Habit nechri 2 kisan, esmi Ahmed, tel 0555xxxxxx, Blida, commune Boufarik, livraison à domicile',
      parseMessage: 'Analyser le message',
      newOrder: 'Nouveau',
      customerName: 'Nom client',
      customerNamePlaceholder: 'Nom complet',
      phone: 'Téléphone',
      phonePlaceholder: '0555xxxxxx',
      wilaya: 'Wilaya',
      commune: 'Commune',
      communePlaceholder: 'Commune',
      email: 'Email',
      address: 'Adresse',
      deliveryType: 'Type de livraison',
      homeDelivery: 'À domicile',
      stopDesk: 'Bureau',
      subtotal: 'Sous-total (DZD)',
      shippingFee: 'Frais de livraison (DZD)',
      total: 'Total (DZD)',
      items: 'Articles / détails',
      itemsPlaceholder: '2 kits, 1 parfum, 3 savon...',
      saveOrder: 'Enregistrer la commande',
      savedOrders: 'Commandes sauvegardées',
      exportCsv: 'Exporter CSV',
      allWilayas: 'Toutes les wilayas',
      chooseWilaya: 'Choisir une wilaya',
      liveStatus: 'En ligne',
      heroTitle: 'Suivi des commandes locales',
      heroText: 'Analyse, validation et suivi rapide des commandes pour les commerçants algériens.',
      emptyOrderState: 'Aucune commande ne correspond au filtre sélectionné.',
      customer: 'Client',
      phoneLabel: 'Téléphone:',
      wilayaLabel: 'Wilaya:',
      communeLabel: 'Commune:',
      deliveryLabel: 'Livraison:',
      articlesLabel: 'Articles:',
      feesLabel: 'Frais:',
      totalLabel: 'Total:',
      statusSelect: 'Changer le statut',
      missingFieldsAlert: 'Merci de remplir au minimum le nom, le téléphone, la wilaya et la commune.',
      emptyMessageAlert: 'Saisissez un message client pour l\'analyse.',
      totalRevenue: 'Total:',
      pendingCount: 'En attente:',
      shippedCount: 'Expédiées:',
      deliveredCount: 'Livrées:'
    },
    ar: {
      title: 'إدارة الطلبات - الجزائر',
      eyebrow: 'مساعد الطلب',
      appTitle: 'إدارة الطلبات',
      filterWilaya: 'تصفية حسب الولاية',
      statusLabel: 'الحالة',
      allStatuses: 'الكل',
      pendingStatus: 'قيد الانتظار',
      shippedStatus: 'تم الشحن',
      deliveredStatus: 'تم التوصيل',
      messageClient: 'رسالة العميل',
      messagePlaceholder: 'مثال: حابب نشتري 2 كيسان، اسمي أحمد، رقم 0555xxxxxx، البليدة، بلدية بوفاريك، توصيل للمنزل',
      parseMessage: 'تحليل الرسالة',
      newOrder: 'جديد',
      customerName: 'اسم العميل',
      customerNamePlaceholder: 'الاسم الكامل',
      phone: 'الهاتف',
      phonePlaceholder: '0555xxxxxx',
      wilaya: 'الولاية',
      commune: 'البلدية',
      communePlaceholder: 'البلدية',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      deliveryType: 'نوع التوصيل',
      homeDelivery: 'التوصيل إلى المنزل',
      stopDesk: 'مكتب',
      subtotal: 'المجموع الفرعي (DZD)',
      shippingFee: 'رسوم التوصيل (DZD)',
      total: 'المجموع الإجمالي (DZD)',
      items: 'العناصر / التفاصيل',
      itemsPlaceholder: '2 علب، 1 عطر، 3 صابون...',
      saveOrder: 'حفظ الطلب',
      savedOrders: 'الطلبات المحفوظة',
      exportCsv: 'تصدير CSV',
      allWilayas: 'كل الولايات',
      chooseWilaya: 'اختر الولاية',
      liveStatus: 'متصل',
      heroTitle: 'متابعة الطلبات المحلية',
      heroText: 'تحليل وتحقق ومتابعة سريعة للطلبات لمتاجر الجزائر.',
      emptyOrderState: 'لا توجد طلبات تطابق المرشح المختار.',
      customer: 'العميل',
      phoneLabel: 'الهاتف:',
      wilayaLabel: 'الولاية:',
      communeLabel: 'البلدية:',
      deliveryLabel: 'التوصيل:',
      articlesLabel: 'العناصر:',
      feesLabel: 'التكاليف:',
      totalLabel: 'المجموع:',
      statusSelect: 'تغيير الحالة',
      missingFieldsAlert: 'يرجى ملء الاسم والهاتف والولاية والبلدية على الأقل.',
      emptyMessageAlert: 'أدخل رسالة العميل لتحليلها.',
      totalRevenue: 'المجموع:',
      pendingCount: 'قيد الانتظار:',
      shippedCount: 'تم الشحن:',
      deliveredCount: 'تم التوصيل:'
    },
    en: {
      title: 'Order Management - Algeria',
      eyebrow: 'Order assistant',
      appTitle: 'Order Management',
      filterWilaya: 'Filter by wilaya',
      statusLabel: 'Status',
      allStatuses: 'All',
      pendingStatus: 'Pending',
      shippedStatus: 'Shipped',
      deliveredStatus: 'Delivered',
      messageClient: 'Customer message',
      messagePlaceholder: 'Example: I want to buy 2 kits, my name is Ahmed, tel 0555xxxxxx, Blida, commune Boufarik, home delivery',
      parseMessage: 'Parse message',
      newOrder: 'New',
      customerName: 'Customer name',
      customerNamePlaceholder: 'Full name',
      phone: 'Phone',
      phonePlaceholder: '0555xxxxxx',
      wilaya: 'Wilaya',
      commune: 'Commune',
      communePlaceholder: 'Commune',
      email: 'Email',
      address: 'Address',
      deliveryType: 'Delivery type',
      homeDelivery: 'Home delivery',
      stopDesk: 'Stop desk',
      subtotal: 'Subtotal (DZD)',
      shippingFee: 'Shipping fee (DZD)',
      total: 'Total (DZD)',
      items: 'Items / details',
      itemsPlaceholder: '2 kits, 1 perfume, 3 soaps...',
      saveOrder: 'Save order',
      savedOrders: 'Saved orders',
      exportCsv: 'Export CSV',
      allWilayas: 'All wilayas',
      chooseWilaya: 'Choose a wilaya',
      liveStatus: 'Online',
      heroTitle: 'Local order tracking',
      heroText: 'Quick parsing, validation, and tracking for Algerian merchants and local orders.',
      emptyOrderState: 'No orders match the selected filter.',
      customer: 'Customer',
      phoneLabel: 'Phone:',
      wilayaLabel: 'Wilaya:',
      communeLabel: 'Commune:',
      deliveryLabel: 'Delivery:',
      articlesLabel: 'Items:',
      feesLabel: 'Fees:',
      totalLabel: 'Total:',
      statusSelect: 'Change status',
      missingFieldsAlert: 'Please fill in at least the name, phone, wilaya, and commune.',
      emptyMessageAlert: 'Enter a customer message to analyse it.',
      totalRevenue: 'Total:',
      pendingCount: 'Pending:',
      shippedCount: 'Shipped:',
      deliveredCount: 'Delivered:'
    }
  };

  let orders = [];
  let currentLanguage = 'fr';

  const elements = {
    messageInput: document.getElementById('messageInput'),
    parseButton: document.getElementById('parseButton'),
    resetButton: document.getElementById('resetButton'),
    orderForm: document.getElementById('orderForm'),
    customerName: document.getElementById('customerName'),
    phoneNumber: document.getElementById('phoneNumber'),
    wilaya: document.getElementById('wilaya'),
    commune: document.getElementById('commune'),
    email: document.getElementById('email'),
    address: document.getElementById('address'),
    deliveryType: document.getElementById('deliveryType'),
    subtotal: document.getElementById('subtotal'),
    shippingFee: document.getElementById('shippingFee'),
    total: document.getElementById('total'),
    itemsText: document.getElementById('itemsText'),
    status: document.getElementById('status'),
    themeToggle: document.getElementById('themeToggle'),
    filterWilaya: document.getElementById('filterWilaya'),
    filterStatus: document.getElementById('filterStatus'),
    ordersList: document.getElementById('ordersList'),
    ordersSummary: document.getElementById('ordersSummary'),
    exportButton: document.getElementById('exportButton'),
    dashboardTab: document.getElementById('dashboardTab'),
    ordersTab: document.getElementById('ordersTab'),
    dashboardView: document.getElementById('dashboardView'),
    ordersView: document.getElementById('ordersView'),
    merchantName: document.getElementById('merchantName'),
    greetingText: document.getElementById('greetingText'),
    profileImage: document.getElementById('profileImage'),
    profileUpload: document.getElementById('profileUpload'),
    dailySalesValue: document.getElementById('dailySalesValue'),
    pendingOrdersValue: document.getElementById('pendingOrdersValue'),
    totalOrdersValue: document.getElementById('totalOrdersValue'),
    topProductsList: document.getElementById('topProductsList')
  };

  function t(key) {
    return (translations[currentLanguage] && translations[currentLanguage][key]) || key;
  }

  function statusText(status) {
    const statusMap = {
      Pending: t('pendingStatus'),
      Shipped: t('shippedStatus'),
      Delivered: t('deliveredStatus')
    };
    return statusMap[status] || status;
  }

  function safeParseJSON(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function getStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = safeParseJSON(raw);
    return Array.isArray(parsed) ? parsed : [];
  }

  function saveStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function createWilayaOptions(target) {
    const options = [`<option value="">${t('chooseWilaya')}</option>`];
    WILAYAS.forEach((wilaya) => {
      options.push(`<option value="${wilaya}">${wilaya}</option>`);
    });
    target.innerHTML = options.join('');
  }

  function populateFilters() {
    const filterOptions = [`<option value="all">${t('allWilayas')}</option>`];
    WILAYAS.forEach((wilaya) => {
      filterOptions.push(`<option value="${wilaya}">${wilaya}</option>`);
    });
    elements.filterWilaya.innerHTML = filterOptions.join('');
  }

  function formatPrice(value) {
    return Number(value || 0).toLocaleString('fr-DZ', { maximumFractionDigits: 0 }) + ' DZD';
  }

  function computeTotals(subtotal, wilaya, deliveryType) {
    const shippingFee = typeof window.calculateShipping === 'function' ? window.calculateShipping(wilaya, deliveryType) : 0;
    const total = Number(subtotal || 0) + Number(shippingFee || 0);

    elements.shippingFee.value = shippingFee;
    elements.total.value = total;
  }

  function readFormData() {
    return {
      id: crypto.randomUUID ? crypto.randomUUID() : `order-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      customerName: elements.customerName.value.trim(),
      phoneNumber: elements.phoneNumber.value.trim(),
      email: elements.email.value.trim(),
      address: elements.address.value.trim(),
      wilaya: elements.wilaya.value,
      commune: elements.commune.value.trim(),
      deliveryType: elements.deliveryType.value,
      subtotal: Number(elements.subtotal.value || 0),
      shippingFee: Number(elements.shippingFee.value || 0),
      total: Number(elements.total.value || 0),
      items: elements.itemsText.value.split(/[,;\n]+/).map((text) => text.trim()).filter(Boolean),
      status: elements.status.value,
      createdAt: new Date().toISOString()
    };
  }

  function getGreetingText(name) {
    const customerName = (name || '').trim() || (currentLanguage === 'ar' ? 'التاجر' : currentLanguage === 'en' ? 'Merchant' : 'Commerçant');
    if (currentLanguage === 'ar') {
      return `مرحبًا، ${customerName}`;
    }
    if (currentLanguage === 'en') {
      return `Hello, ${customerName}`;
    }
    return `Bonjour, ${customerName}`;
  }

  function applyTranslations() {
    document.title = t('title');
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (t(key)) {
        node.textContent = t(key);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      if (t(key)) {
        node.setAttribute('placeholder', t(key));
      }
    });

    elements.messageInput.placeholder = t('messagePlaceholder');
    elements.customerName.placeholder = t('customerNamePlaceholder');
    elements.phoneNumber.placeholder = t('phonePlaceholder');
    elements.commune.placeholder = t('communePlaceholder');
    elements.itemsText.placeholder = t('itemsPlaceholder');

    if (elements.email) {
      elements.email.placeholder = 'email@example.com';
    }
    if (elements.address) {
      elements.address.placeholder = 'Adresse complète';
    }

    const filterStatusOptions = {
      all: t('allStatuses'),
      Pending: t('pendingStatus'),
      Shipped: t('shippedStatus'),
      Delivered: t('deliveredStatus')
    };

    Array.from(elements.filterStatus.options).forEach((option) => {
      if (filterStatusOptions[option.value]) {
        option.textContent = filterStatusOptions[option.value];
      }
    });

    Array.from(elements.status.options).forEach((option) => {
      if (filterStatusOptions[option.value]) {
        option.textContent = filterStatusOptions[option.value];
      }
    });

    Array.from(elements.deliveryType.options).forEach((option) => {
      if (option.value === 'Home Delivery') option.textContent = t('homeDelivery');
      if (option.value === 'Stop Desk') option.textContent = t('stopDesk');
    });

    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === currentLanguage);
    });

    if (elements.greetingText) {
      elements.greetingText.textContent = getGreetingText(elements.merchantName.value);
    }

    renderOrders();
    renderDashboard();
  }

  function renderSummary(list) {
    const totalRevenue = list.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const pendingCount = list.filter((order) => order.status === 'Pending').length;
    const shippedCount = list.filter((order) => order.status === 'Shipped').length;
    const deliveredCount = list.filter((order) => order.status === 'Delivered').length;

    elements.ordersSummary.innerHTML = `
      <span class="summary-pill">${t('totalRevenue')} ${formatPrice(totalRevenue)}</span>
      <span class="summary-pill">${t('pendingCount')} ${pendingCount}</span>
      <span class="summary-pill">${t('shippedCount')} ${shippedCount}</span>
      <span class="summary-pill">${t('deliveredCount')} ${deliveredCount}</span>
    `;
  }

  function renderDashboard() {
    const today = new Date();
    const todayKey = today.toDateString();
    const dailySales = orders
      .filter((order) => order.createdAt && new Date(order.createdAt).toDateString() === todayKey)
      .reduce((sum, order) => sum + Number(order.total || 0), 0);

    const pendingOrders = orders.filter((order) => order.status === 'Pending').length;
    const productCounts = {};

    orders.forEach((order) => {
      (order.items || []).forEach((item) => {
        const cleaned = item.trim();
        if (!cleaned) return;
        productCounts[cleaned] = (productCounts[cleaned] || 0) + 1;
      });
    });

    const topProducts = Object.entries(productCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    elements.dailySalesValue.textContent = formatPrice(dailySales);
    elements.pendingOrdersValue.textContent = String(pendingOrders);
    elements.totalOrdersValue.textContent = String(orders.length);

    if (!topProducts.length) {
      elements.topProductsList.innerHTML = '<div class="empty-mini">Aucune vente enregistrée pour le moment.</div>';
      return;
    }

    const maxCount = topProducts[0][1];
    elements.topProductsList.innerHTML = topProducts.map(([product, count], index) => {
      const percent = Math.max((count / maxCount) * 100, 18);
      return `
        <div class="top-product-row">
          <div class="top-product-head">
            <span class="rank-badge">#${index + 1}</span>
            <span>${product}</span>
          </div>
          <div class="top-product-bar-wrap">
            <div class="top-product-bar" style="width: ${percent}%"></div>
          </div>
          <small>${count} ventes</small>
        </div>
      `;
    }).join('');
  }

  function getFilteredOrders() {
    const selectedWilaya = elements.filterWilaya.value;
    const selectedStatus = elements.filterStatus.value;

    return orders.filter((order) => {
      const matchWilaya = !selectedWilaya || selectedWilaya === 'all' || order.wilaya === selectedWilaya;
      const matchStatus = !selectedStatus || selectedStatus === 'all' || order.status === selectedStatus;
      return matchWilaya && matchStatus;
    });
  }

  function renderOrders() {
    const filtered = getFilteredOrders();
    renderSummary(filtered);

    if (!filtered.length) {
      elements.ordersList.innerHTML = `<div class="empty-state">${t('emptyOrderState')}</div>`;
      return;
    }

    elements.ordersList.innerHTML = filtered
      .map((order) => {
        const badgeClass = order.status.toLowerCase();
        return `
          <article class="order-card">
            <div class="order-top">
              <h3>${order.customerName || t('customer')}</h3>
              <span class="badge ${badgeClass}">${statusText(order.status)}</span>
            </div>

            <div class="meta">
              <div><strong>${t('phoneLabel')}</strong> ${order.phoneNumber || '—'}</div>
              <div><strong>${t('wilayaLabel')}</strong> ${order.wilaya || '—'}</div>
              <div><strong>${t('communeLabel')}</strong> ${order.commune || '—'}</div>
              <div><strong>${t('deliveryLabel')}</strong> ${order.deliveryType || t('homeDelivery')}</div>
              <div>${order.email ? `<strong>Email:</strong> ${order.email}` : '<strong>Email:</strong> —'}</div>
              <div>${order.address ? `<strong>Adresse:</strong> ${order.address}` : '<strong>Adresse:</strong> —'}</div>
            </div>

            <div class="meta">
              <div><strong>${t('articlesLabel')}</strong> ${(order.items || []).join(', ') || '—'}</div>
            </div>

            <div class="totals">
              <span>${t('feesLabel')} ${formatPrice(order.shippingFee)}</span>
              <span>${t('totalLabel')} ${formatPrice(order.total)}</span>
            </div>

            <label>
              <select class="status-select" data-order-id="${order.id}" aria-label="${t('statusSelect')}">
                <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>${t('pendingStatus')}</option>
                <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>${t('shippedStatus')}</option>
                <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>${t('deliveredStatus')}</option>
              </select>
            </label>
          </article>
        `;
      })
      .join('');

    document.querySelectorAll('.status-select').forEach((select) => {
      select.addEventListener('change', (event) => {
        const orderId = event.target.dataset.orderId;
        const order = orders.find((item) => item.id === orderId);
        if (!order) return;

        order.status = event.target.value;
        saveStorage(orders);
        renderOrders();
      });
    });
  }

  function exportCsv() {
    const rows = [[
      'Customer Name',
      'Email',
      'Phone Number',
      'Address',
      'Wilaya',
      'Commune',
      'Delivery Type',
      'Subtotal',
      'Shipping Fee',
      'Total',
      'Status',
      'Items'
    ]];

    orders.forEach((order) => {
      rows.push([
        order.customerName || '',
        order.email || '',
        order.phoneNumber || '',
        order.address || '',
        order.wilaya || '',
        order.commune || '',
        order.deliveryType || '',
        Number(order.subtotal || 0),
        Number(order.shippingFee || 0),
        Number(order.total || 0),
        statusText(order.status || 'Pending'),
        (order.items || []).join(' | ')
      ]);
    });

    const csv = '\uFEFF' + rows.map((row) => row.map((cell) => {
      const value = String(cell ?? '').replace(/\r|\n/g, ' ');
      return `"${value.replace(/"/g, '""')}"`;
    }).join(';')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'commandes-algerie.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function saveOrder(event) {
    event.preventDefault();

    const order = readFormData();
    if (!order.customerName || !order.phoneNumber || !order.wilaya || !order.commune) {
      alert(t('missingFieldsAlert'));
      return;
    }

    orders.unshift(order);
    saveStorage(orders);
    renderOrders();
    renderDashboard();
    elements.orderForm.reset();
    elements.status.value = DEFAULT_STATUS;
    elements.wilaya.value = '';
    elements.deliveryType.value = 'Home Delivery';
    elements.subtotal.value = '0';
    elements.shippingFee.value = '0';
    elements.total.value = '0';
    if (elements.email) elements.email.value = '';
    if (elements.address) elements.address.value = '';
  }

  function parseMessage() {
    const text = elements.messageInput.value.trim();
    if (!text) {
      alert(t('emptyMessageAlert'));
      return;
    }

    const parsed = typeof window.parseOrderMessage === 'function' ? window.parseOrderMessage(text) : {};
    if (!parsed) {
      return;
    }

    elements.customerName.value = parsed.customerName || '';
    elements.phoneNumber.value = parsed.phoneNumber || '';
    elements.commune.value = parsed.commune || '';
    elements.itemsText.value = Array.isArray(parsed.items) ? parsed.items.join(', ') : '';

    if (parsed.wilaya) {
      elements.wilaya.value = parsed.wilaya;
    }

    if (parsed.deliveryType) {
      elements.deliveryType.value = parsed.deliveryType;
    }

    const subtotal = Number(elements.subtotal.value || 0);
    computeTotals(subtotal, elements.wilaya.value, elements.deliveryType.value);

    if (parsed.confidence) {
      console.log('Extraction confidence:', parsed.confidence + '%');
    }
  }

  function resetDraft() {
    elements.messageInput.value = '';
    elements.orderForm.reset();
    elements.deliveryType.value = 'Home Delivery';
    elements.status.value = DEFAULT_STATUS;
    elements.subtotal.value = '0';
    elements.shippingFee.value = '0';
    elements.total.value = '0';
    if (elements.email) elements.email.value = '';
    if (elements.address) elements.address.value = '';
  }

  function loadDeliveryAnimation() {
    const container = document.getElementById('deliveryLottie');
    if (!container) return;

    container.innerHTML = `
      <svg class="delivery-svg" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="truckBody" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#1d4ed8"/>
            <stop offset="100%" stop-color="#60a5fa"/>
          </linearGradient>
        </defs>

        <path d="M40 210 L130 210 L150 170 L265 170 L290 210 L390 210 L390 235 L40 235 Z" fill="url(#truckBody)" opacity="0.92"/>
        <rect x="160" y="140" width="95" height="70" rx="12" fill="#dbeafe"/>
        <rect x="175" y="155" width="62" height="18" rx="4" fill="#93c5fd"/>
        <rect x="175" y="180" width="40" height="12" rx="4" fill="#bfdbfe"/>

        <path d="M330 150 L385 150 L410 175 L410 210 L330 210 Z" fill="#2563eb" opacity="0.9"/>
        <circle cx="150" cy="235" r="20" fill="#1f2937"/>
        <circle cx="150" cy="235" r="9" fill="#dfe7f5"/>
        <circle cx="335" cy="235" r="20" fill="#1f2937"/>
        <circle cx="335" cy="235" r="9" fill="#dfe7f5"/>

        <path d="M60 110 C110 70, 180 80, 210 110" fill="none" stroke="#16a34a" stroke-width="8" stroke-linecap="round" opacity="0.8" class="route-line"/>
        <path d="M210 110 C245 110, 260 98, 290 80" fill="none" stroke="#22c55e" stroke-width="8" stroke-linecap="round" opacity="0.8" class="route-line route-line-delay"/>

        <g class="marker-group">
          <circle cx="200" cy="108" r="9" fill="#22c55e"/>
          <circle cx="200" cy="108" r="16" fill="none" stroke="#22c55e" stroke-width="3" opacity="0.5"/>
        </g>
      </svg>
    `;
  }

  function setDashboardView(view) {
    const isDashboard = view === 'dashboard';
    elements.dashboardView.classList.toggle('hidden', !isDashboard);
    elements.ordersView.classList.toggle('hidden', isDashboard);
    elements.dashboardTab.classList.toggle('active', isDashboard);
    elements.ordersTab.classList.toggle('active', !isDashboard);
  }

  function hydrateProfile() {
    const savedName = localStorage.getItem(PROFILE_NAME_KEY);
    const savedImage = localStorage.getItem(PROFILE_IMAGE_KEY);
    const fallbackAvatar = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"%3E%3Crect width="120" height="120" rx="24" fill="%23dbeafe"/%3E%3Ccircle cx="60" cy="46" r="22" fill="%2393c5fd"/%3E%3Cpath d="M28 94c8-17 21-26 32-26s25 9 32 26" fill="%2364a5fa"/%3E%3C/svg%3E';

    elements.merchantName.value = savedName || 'Commerçant';
    elements.profileImage.src = savedImage || fallbackAvatar;
    elements.greetingText.textContent = getGreetingText(elements.merchantName.value);
  }

  function initialize() {
    createWilayaOptions(elements.wilaya);
    populateFilters();
    orders = getStorage();
    hydrateProfile();
    applyTranslations();
    loadDeliveryAnimation();
    setDashboardView('dashboard');

    elements.parseButton.addEventListener('click', parseMessage);
    elements.resetButton.addEventListener('click', resetDraft);
    elements.orderForm.addEventListener('submit', saveOrder);
    elements.exportButton.addEventListener('click', exportCsv);
    elements.filterWilaya.addEventListener('change', renderOrders);
    elements.filterStatus.addEventListener('change', renderOrders);

    elements.subtotal.addEventListener('input', () => {
      computeTotals(elements.subtotal.value, elements.wilaya.value, elements.deliveryType.value);
    });

    elements.deliveryType.addEventListener('change', () => {
      computeTotals(elements.subtotal.value, elements.wilaya.value, elements.deliveryType.value);
    });

    elements.wilaya.addEventListener('change', () => {
      computeTotals(elements.subtotal.value, elements.wilaya.value, elements.deliveryType.value);
    });

    elements.messageInput.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        parseMessage();
      }
    });

    elements.merchantName.addEventListener('input', () => {
      localStorage.setItem(PROFILE_NAME_KEY, elements.merchantName.value.trim());
      elements.greetingText.textContent = getGreetingText(elements.merchantName.value);
    });

    elements.profileUpload.addEventListener('change', (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        elements.profileImage.src = result;
        localStorage.setItem(PROFILE_IMAGE_KEY, result);
      };
      reader.readAsDataURL(file);
    });

    elements.dashboardTab.addEventListener('click', () => setDashboardView('dashboard'));
    elements.ordersTab.addEventListener('click', () => setDashboardView('orders'));

    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.addEventListener('click', () => {
        currentLanguage = button.dataset.lang;
        applyTranslations();
      });
    });

    elements.themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      document.body.dataset.theme = nextTheme;
      localStorage.setItem('order-app-theme', nextTheme);
      const themeIcon = elements.themeToggle.querySelector('.theme-icon');
      if (themeIcon) {
        themeIcon.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
      }
    });

    const savedTheme = localStorage.getItem('order-app-theme') || 'light';
    document.body.dataset.theme = savedTheme;
    const themeIcon = elements.themeToggle.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  initialize();
})();
