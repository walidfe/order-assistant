(function () {
  const WILAYAS = [
    'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira',
    'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda',
    'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'M\'Sila', 'Mascara',
    'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt',
    'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa',
    'Relizane', 'Timimoun', 'Bordj Baji Mokhtar', 'Ouled Djellal', 'Béni Abbès', 'In Guezzam', 'In Salah', 'Djanet',
    'El M\'Ghair', 'El Meniaa', 'El Meghaier'
  ];

  const WILAYA_BY_CODE = {
    1: 'Adrar', 2: 'Chlef', 3: 'Laghouat', 4: 'Oum El Bouaghi', 5: 'Batna', 6: 'Béjaïa', 7: 'Biskra', 8: 'Béchar',
    9: 'Blida', 10: 'Bouira', 11: 'Tamanrasset', 12: 'Tébessa', 13: 'Tlemcen', 14: 'Tiaret', 15: 'Tizi Ouzou', 16: 'Alger',
    17: 'Djelfa', 18: 'Jijel', 19: 'Sétif', 20: 'Saïda', 21: 'Skikda', 22: 'Sidi Bel Abbès', 23: 'Annaba', 24: 'Guelma',
    25: 'Constantine', 26: 'Médéa', 27: 'Mostaganem', 28: 'M\'Sila', 29: 'Mascara', 30: 'Ouargla', 31: 'Oran', 32: 'El Bayadh',
    33: 'Illizi', 34: 'Bordj Bou Arréridj', 35: 'Boumerdès', 36: 'El Tarf', 37: 'Tindouf', 38: 'Tissemsilt', 39: 'El Oued',
    40: 'Khenchela', 41: 'Souk Ahras', 42: 'Tipaza', 43: 'Mila', 44: 'Aïn Defla', 45: 'Naâma', 46: 'Aïn Témouchent',
    47: 'Ghardaïa', 48: 'Relizane', 49: 'Timimoun', 50: 'Bordj Baji Mokhtar', 51: 'Ouled Djellal', 52: 'Béni Abbès',
    53: 'In Guezzam', 54: 'In Salah', 55: 'Djanet', 56: 'El M\'Ghair', 57: 'El Meniaa', 58: 'El Meghaier'
  };

  const WILAYA_ALIASES = {
    alger: 'Alger', algiers: 'Alger', algiersfr: 'Alger',
    bejaia: 'Béjaïa', bejaiaa: 'Béjaïa', bjaia: 'Béjaïa',
    biskra: 'Biskra',
    blida: 'Blida',
    bouira: 'Bouira',
    batna: 'Batna',
    oran: 'Oran',
    constantine: 'Constantine',
    setif: 'Sétif',
    tiziouzou: 'Tizi Ouzou', tizi: 'Tizi Ouzou',
    tlemcen: 'Tlemcen',
    sidi: 'Sidi Bel Abbès', 'sidi bel abbes': 'Sidi Bel Abbès',
    annaba: 'Annaba',
    ouargla: 'Ouargla',
    djelfa: 'Djelfa',
    skikda: 'Skikda',
    laghouat: 'Laghouat',
    chlef: 'Chlef',
    mostaganem: 'Mostaganem',
    mila: 'Mila',
    naama: 'Naâma',
    'el bayadh': 'El Bayadh',
    'el oued': 'El Oued',
    'el tarf': 'El Tarf',
    ghardaia: 'Ghardaïa',
    relizane: 'Relizane',
    timimoun: 'Timimoun',
    'el meghaier': 'El Meghaier',
    'el meniaa': 'El Meniaa', 'el menia': 'El Meniaa',
    'el mghair': 'El M\'Ghair', 'mghair': 'El M\'Ghair',
    'ain temouchent': 'Aïn Témouchent', 'temouchent': 'Aïn Témouchent',
    'ain defla': 'Aïn Defla',
    'm sila': 'M\'Sila', msila: 'M\'Sila',
    'el bayadh': 'El Bayadh',
    'boumerdes': 'Boumerdès',
    'bordj bou areridj': 'Bordj Bou Arréridj', 'bordj bou arreridj': 'Bordj Bou Arréridj',
    'bordj baji mokhtar': 'Bordj Baji Mokhtar',
    'beni abbes': 'Béni Abbès',
    'ouled djellal': 'Ouled Djellal',
    'in guezzam': 'In Guezzam',
    'in salah': 'In Salah',
    'djanet': 'Djanet',
    'tindouf': 'Tindouf',
    'tissemsilt': 'Tissemsilt',
    'khenchela': 'Khenchela',
    'souk ahras': 'Souk Ahras',
    'tipaza': 'Tipaza',
    'tebessa': 'Tébessa',
    'tamanrasset': 'Tamanrasset',
    'adrar': 'Adrar',
    'bechar': 'Béchar',
    'el meghaier': 'El Meghaier',
    'saaida': 'Saïda', 'saida': 'Saïda',
    'mascara': 'Mascara',
    'béjaïa': 'Béjaïa', 'bejaia': 'Béjaïa'
  };

  const normalizeForSearch = (value) => {
    if (!value) return '';
    return String(value)
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/['’]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const extractPhone = (text) => {
    const phoneRegex = /(?:\+213|213|0)(5|6|7)[0-9\s-]{8,12}/g;
    const matches = text.match(phoneRegex) || [];

    for (const match of matches) {
      const digits = match.replace(/\D/g, '');
      if (digits.length >= 10) {
        return digits.startsWith('213') ? `0${digits.slice(3)}` : digits;
      }
    }

    const simpleMatch = text.match(/\b(05|06|07)[0-9\s-]{8,10}\b/);
    if (simpleMatch) {
      return simpleMatch[0].replace(/\D/g, '');
    }

    return '';
  };

  const extractCustomerName = (text) => {
    const patterns = [
      /(?:nom|esmi|name|customer|client|prenom|prénom)\s*[:\-]?\s*([A-ZÀ-ÖØ-Ýa-zà-öø-ý\u00C0-\u024F' .-]{2,50})/i,
      /(?:je\s+suis|salam|salut|bonjour)\s+([A-ZÀ-ÖØ-Ýa-zà-öø-ý\u00C0-\u024F' .-]{2,50})/i,
      /(?:esmi|nom)\s+([A-ZÀ-ÖØ-Ýa-zà-öø-ý\u00C0-\u024F' .-]{2,50})/i
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1] && match[1].trim().length > 1) {
        return match[1].trim().replace(/\s+/g, ' ');
      }
    }

    const fallback = text.match(/(?:\b[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]+(?:\s+[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]+){1,3}\b)/);
    if (fallback) {
      const candidate = fallback[0].trim();
      if (!/^(Bonjour|Salut|Merci|Svp|SVP|Bonjour|Habib|Chere|Chéri|Mon|Je|Jai)$/i.test(candidate)) {
        return candidate;
      }
    }

    return '';
  };

  const extractWilaya = (text) => {
    const normalizedText = normalizeForSearch(text);
    const directMatch = Object.keys(WILAYA_ALIASES).find((alias) => normalizedText.includes(alias));
    if (directMatch) {
      return WILAYA_ALIASES[directMatch];
    }

    for (const wilaya of WILAYAS) {
      const normalizedWilaya = normalizeForSearch(wilaya);
      if (normalizedText.includes(normalizedWilaya)) {
        return wilaya;
      }
    }

    const codeMatch = normalizedText.match(/(?:wilaya|wilya|wil)\s*[:\-]?\s*(\d{1,2})/i);
    if (codeMatch) {
      const code = Number(codeMatch[1]);
      if (WILAYA_BY_CODE[code]) {
        return WILAYA_BY_CODE[code];
      }
    }

    return '';
  };

  const extractCommune = (text) => {
    const patterns = [
      /(?:commune|ville|quartier|adresse|adresse exacte|lieu|maison)\s*[:\-]?\s*([A-ZÀ-ÖØ-Ýa-zà-öø-ý0-9\u00C0-\u024F' .-]{2,60})/i,
      /(?:à|de|dans)\s+([A-ZÀ-ÖØ-Ýa-zà-öø-ý0-9\u00C0-\u024F' .-]{2,60})(?:,|\.|\s+(?:tel|telephone|phone|wilaya))/i
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const value = match[1].trim().replace(/[\s,.;]+$/g, '');
        if (value && !/^(de|à|dans|adresse|commune|ville|quartier)$/i.test(value)) {
          return value;
        }
      }
    }

    return '';
  };

  const extractItems = (text) => {
    const cleaned = text.replace(/\s+/g, ' ').trim();
    if (!cleaned) return [];

    const itemPattern = /(\d+\s*(?:kisan|kg|pack|boite|paquet|piece|pièce|article|produit|sachet|bouteille|carton|g)|(?:[A-Za-zÀ-ÖØ-Ýà-öø-ý\u00C0-\u024F]+\s*(?:[A-Za-zÀ-ÖØ-Ýà-öø-ý\u00C0-\u024F]+){0,2}))/gi;
    const matches = cleaned.match(itemPattern) || [];

    return matches
      .map((item) => item.replace(/\s+/g, ' ').trim())
      .filter((item) => item.length > 2 && !/^(bonjour|salut|merci|svp|esmi|nom|tel|telephone|adresse|wilaya|commune)$/i.test(item))
      .slice(0, 12);
  };

  const parseOrderMessage = (rawText) => {
    const text = String(rawText || '').trim();

    if (!text) {
      return {
        customerName: '',
        phoneNumber: '',
        wilaya: '',
        commune: '',
        deliveryType: 'Home Delivery',
        items: [],
        rawText: text,
        confidence: 0
      };
    }

    const customerName = extractCustomerName(text);
    const phoneNumber = extractPhone(text);
    const wilaya = extractWilaya(text);
    const commune = extractCommune(text);
    const items = extractItems(text);

    let deliveryType = 'Home Delivery';
    if (/(bureau|stop desk|stopdesk|point de retrait|yalidine bureau|bureau de poste|point relais)/i.test(text)) {
      deliveryType = 'Stop Desk';
    }

    const detected = [customerName, phoneNumber, wilaya, commune].filter(Boolean).length;
    const confidence = Math.min(100, Math.round((detected / 4) * 100));

    return {
      customerName,
      phoneNumber,
      wilaya,
      commune,
      deliveryType,
      items,
      rawText: text,
      confidence
    };
  };

  window.parseOrderMessage = parseOrderMessage;
  window.WILAYAS = WILAYAS;
})();
