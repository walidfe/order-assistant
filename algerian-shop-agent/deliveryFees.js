(function () {
  const WILAYA_DELIVERY_FEES = {
    adrar: { home: 950, stopDesk: 700 },
    chlef: { home: 650, stopDesk: 420 },
    laghouat: { home: 700, stopDesk: 480 },
    'oum el bouaghi': { home: 620, stopDesk: 400 },
    batna: { home: 640, stopDesk: 420 },
    bejaia: { home: 560, stopDesk: 300 },
    biskra: { home: 700, stopDesk: 470 },
    bechar: { home: 820, stopDesk: 600 },
    blida: { home: 480, stopDesk: 260 },
    bouira: { home: 500, stopDesk: 290 },
    tamanrasset: { home: 980, stopDesk: 740 },
    tebessa: { home: 620, stopDesk: 420 },
    tlemcen: { home: 700, stopDesk: 480 },
    tiaret: { home: 580, stopDesk: 340 },
    'tizi ouzou': { home: 520, stopDesk: 310 },
    alger: { home: 420, stopDesk: 220 },
    djelfa: { home: 600, stopDesk: 360 },
    jijel: { home: 560, stopDesk: 320 },
    setif: { home: 520, stopDesk: 310 },
    saida: { home: 700, stopDesk: 470 },
    skikda: { home: 540, stopDesk: 310 },
    'sidi bel abbes': { home: 680, stopDesk: 420 },
    annaba: { home: 520, stopDesk: 300 },
    guelma: { home: 560, stopDesk: 330 },
    constantine: { home: 520, stopDesk: 320 },
    medea: { home: 500, stopDesk: 290 },
    mostaganem: { home: 590, stopDesk: 340 },
    "m'sila": { home: 600, stopDesk: 360 },
    mascara: { home: 650, stopDesk: 430 },
    ouargla: { home: 760, stopDesk: 520 },
    oran: { home: 660, stopDesk: 380 },
    'el bayadh': { home: 720, stopDesk: 500 },
    illizi: { home: 950, stopDesk: 700 },
    'bordj bou areridj': { home: 560, stopDesk: 340 },
    boumerdes: { home: 500, stopDesk: 260 },
    'el tarf': { home: 560, stopDesk: 350 },
    tindouf: { home: 960, stopDesk: 700 },
    tissemsilt: { home: 560, stopDesk: 330 },
    'el oued': { home: 760, stopDesk: 520 },
    khenchela: { home: 630, stopDesk: 390 },
    'souk ahras': { home: 620, stopDesk: 380 },
    tipaza: { home: 470, stopDesk: 240 },
    mila: { home: 550, stopDesk: 320 },
    'ain defla': { home: 520, stopDesk: 300 },
    naama: { home: 780, stopDesk: 560 },
    'ain temouchent': { home: 680, stopDesk: 440 },
    ghardaia: { home: 790, stopDesk: 540 },
    relizane: { home: 590, stopDesk: 350 },
    timimoun: { home: 900, stopDesk: 660 },
    'bordj baji mokhtar': { home: 990, stopDesk: 720 },
    'ouled djellal': { home: 700, stopDesk: 480 },
    'beni abbes': { home: 820, stopDesk: 600 },
    'in guezzam': { home: 1050, stopDesk: 770 },
    'in salah': { home: 980, stopDesk: 720 },
    djanet: { home: 1020, stopDesk: 760 },
    "el m'ghair": { home: 820, stopDesk: 600 },
    'el meniaa': { home: 750, stopDesk: 520 },
    'el meghaier': { home: 830, stopDesk: 620 }
  };

  const normalizeWilayaKey = (value) => {
    if (!value) return '';
    return String(value)
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[’']/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const getWilayaFee = (wilaya) => {
    const key = normalizeWilayaKey(wilaya);
    if (WILAYA_DELIVERY_FEES[key]) {
      return WILAYA_DELIVERY_FEES[key];
    }

    const fallbackKey = key.replace(/\s+/g, '');
    const found = Object.keys(WILAYA_DELIVERY_FEES).find((entryKey) => entryKey.replace(/\s+/g, '') === fallbackKey);
    return found ? WILAYA_DELIVERY_FEES[found] : { home: 550, stopDesk: 320 };
  };

  const calculateShipping = (wilaya, deliveryType) => {
    const feeProfile = getWilayaFee(wilaya);
    const normalizedType = String(deliveryType || '').trim().toLowerCase();
    if (normalizedType.includes('stop') || normalizedType.includes('bureau') || normalizedType.includes('desk')) {
      return feeProfile.stopDesk;
    }
    return feeProfile.home;
  };

  window.calculateShipping = calculateShipping;
})();
