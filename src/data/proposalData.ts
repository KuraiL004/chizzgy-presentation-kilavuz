/**
 * CHIZZGY x KILAVUZ VISUAL SOLUTIONS
 * Central Single Source of Truth Proposal Data
 * Based 100% on PROJECT_SPEC.md
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value?: number;
  suffix?: string;
  prefix?: string;
  text?: string;
  label: string;
  sublabel: string;
}

export interface StrategicPillar {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface PortfolioShowreel {
  title: string;
  subtitle: string;
  aspectRatio: string;
  videoPlaceholder: string;
}

export interface ReelsItem {
  id: number;
  title: string;
  description: string;
  tag: string;
  aspectRatio: string;
}

export interface Faz1SubSection {
  id: string;
  letter: string;
  title: string;
  price: string;
  priceNote: string;
  originalPrice?: string;
  discountNote?: string;
  description: string;
  features: {
    title?: string;
    description: string;
  }[];
  isSpecialOffer?: boolean;
}

export interface Faz2PricingTier {
  tierName: string;
  badge?: string;
  isRecommended?: boolean;
  reelsCount: number;
  prices: {
    basic: string;
    standart: string;
    premium: string;
  };
  features: string[];
}

export interface ProposalDataType {
  meta: {
    agencyName: string;
    agencyTagline: string;
    clientName: string;
    clientTagline: string;
    clientDomain: string;
  };
  navigation: {
    links: NavLink[];
    ctaButton: {
      text: string;
      href: string;
    };
  };
  hero: {
    badge: string;
    title: {
      highlight1: string;
      normal1: string;
      highlight2: string;
      normal2: string;
    };
    description: string;
    stats: StatItem[];
    ctaPrimary: {
      text: string;
      href: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
  };
  marquee: {
    title: string;
    subtitle: string;
    brands: string[];
  };
  strategicApproach: {
    badge: string;
    title: string;
    highlightBox: string;
    pillars: StrategicPillar[];
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    gearTags: string[];
    showreel: PortfolioShowreel;
    reels: ReelsItem[];
  };
  faz1: {
    badge: string;
    title: string;
    description: string;
    sections: Faz1SubSection[];
    total: {
      normalPrice: string;
      specialPrice: string;
      badge: string;
      description: string;
      ctaText: string;
    };
  };
  faz2: {
    badge: string;
    title: string;
    heroCard: {
      badge: string;
      title: string;
      level: string;
      price: string;
      period: string;
      description: string;
      deliverables: {
        title: string;
        description: string;
      }[];
    };
    comparisonMatrix: {
      title: string;
      subtitle: string;
      levels: ("Basic" | "Standart" | "Premium")[];
      revisionNote: string;
      tiers: Faz2PricingTier[];
    };
  };
  investmentSummary: {
    badge: string;
    title: string;
    items: {
      phase: string;
      name: string;
      price: string;
      note: string;
      strikethrough?: string;
    }[];
    totals: {
      faz1Total: string;
      faz1Label: string;
      faz2Total: string;
      faz2Label: string;
    };
    roadmap: {
      stepNumber: string;
      title: string;
      description: string;
    }[];
    finalCta: {
      title: string;
      description: string;
      primaryButton: {
        text: string;
        href: string;
      };
      secondaryButton: {
        text: string;
        href: string;
      };
    };
  };
  footer: {
    agencyName: string;
    agencySubtext: string;
    clientName: string;
    clientSubtext: string;
    copyright: string;
    confidentiality: string;
  };
}

export const proposalData: ProposalDataType = {
  meta: {
    agencyName: "CHIZZGY",
    agencyTagline: "Creative & Strategy Agency",
    clientName: "KILAVUZ",
    clientTagline: "Visual Solutions",
    clientDomain: "Kilavuz.az",
  },
  navigation: {
    links: [
      { label: "Strateji", href: "#strateji" },
      { label: "Portfolyo", href: "#portfolyo" },
      { label: "Faz 1: Kurulum", href: "#faz1" },
      { label: "Faz 2: Paketler", href: "#faz2" },
      { label: "Yol Haritası", href: "#yolharitasi" },
    ],
    ctaButton: {
      text: "Yatırım Planı (Teklif)",
      href: "#yatirim",
    },
  },
  hero: {
    badge: "KURUMSAL İŞ BİRLİĞİ VE DİJİTAL DÖNÜŞÜM SUNUMU",
    title: {
      normal1: "1995'ten Günümüze Ulaşan ",
      highlight1: "Endüstriyel Üretim Gücünün",
      normal2: " Global ve Dijital ",
      highlight2: "Standartlara Taşınması",
    },
    description:
      "1995 yılında İstanbul Çağlayan'da başlayan, günlük 5.000 m² kumaş baskı ve 3.000 m² dijital baskı (Solvent, UV) kapasitesine ulaşan, ISO 9001 (Meyer TÜRKAK onaylı) kalite standartlarına sahip ve Türkiye'den sonra Azerbaycan (Bakü) ile Avrupa'ya (Danimarka, İspanya, Almanya) açılan Kılavuz Visual Solutions, sıradan bir işletme değil, uluslararası bir endüstri devidir.",
    stats: [
      {
        id: "stat-1",
        value: 1995,
        label: "İstanbul Çağlayan'dan",
        sublabel: "Başlayan Endüstriyel Miras",
      },
      {
        id: "stat-2",
        value: 8000,
        suffix: " m²",
        label: "Günlük Üretim",
        sublabel: "(5.000 m² Kumaş + 3.000 m² UV/Solvent Baskı)",
      },
      {
        id: "stat-3",
        value: 100,
        suffix: "+",
        label: "Global Markanın",
        sublabel: "Resmi Tedarikçisi ve Çözüm Ortağı",
      },
      {
        id: "stat-4",
        text: "TR • AZ • EU",
        label: "İstanbul, Bakü, Danimarka",
        sublabel: "İspanya ve Almanya Operasyonları",
      },
    ],
    ctaPrimary: {
      text: "Faz 1 Kurulum Paketini İncele",
      href: "#faz1",
    },
    ctaSecondary: {
      text: "Portfolyo ve Referanslar",
      href: "#portfolyo",
    },
  },
  marquee: {
    title: "GÜVENİLEN PRODÜKSİYON VE STRATEJİ ORTAĞI",
    subtitle:
      "Chizzgy ekibinin görsel dünyasını, CGI ve prodüksiyon süreçlerini yönettiği markalar ve iş ortakları:",
    brands: [
      "Kılavuz Visual Solutions",
      "Pasha Capital",
      "De Muscle Club",
      "Cinema Club Academy",
      "Relay AI",
      "Pasha Kapital Football",
      "Kilavuz Denmark",
      "Kilavuz Baku",
    ],
  },
  strategicApproach: {
    badge: "STRATEJİK YAKLAŞIM",
    title: "Neden Doğrudan Çekime Başlamıyoruz?",
    highlightBox:
      "100'den fazla global markanın resmi tedarikçisi olan böyle büyük bir yapının Kilavuz.az Instagram sayfası ve dijital vitrini yönetilirken, doğrudan rastgele video çekimlerine ve post paylaşımlarına başlamak kurumsal kimliğe zarar verir. Çekimlere başlamadan önce kurumsal itibarınızı koruyacak ve prodüksiyon ekibimize net bir kılavuz olacak Kurumsal Brandbook ve Pazarlama Stratejisi inşa edilmelidir.",
    pillars: [
      {
        number: "01",
        title: "Sıfır Karmaşa ve Hız",
        badge: "Operasyonel Verimlilik",
        description:
          'Belirlenen renk, font, LUT ve kurgu standartları sayesinde her videoda "bu nasıl olsun?" tartışması yaşanmaz, revizyon süreçleri minimuma iner.',
      },
      {
        number: "02",
        title: "Global Tutarlılık",
        badge: "Çok Uluslu Kimlik",
        description:
          "İstanbul, Bakü ve Kopenhag operasyonlarının tamamında aynı kurumsal dil ve görsel kalite konuşulur.",
      },
      {
        number: "03",
        title: "B2B Güven İnşası",
        badge: "Prestij & Satış",
        description:
          "Sayfaya giren kurumsal satın almacılar ve global partnerler, rastgele videolar değil; birbiriyle renk, ton ve kapak uyumu içinde olan prestijli bir fabrika vitrini görür.",
      },
    ],
  },
  portfolio: {
    badge: "CHIZZGY PORTFOLYO & VİTRİN",
    title: "Sinematik Üretim Gücümüz",
    subtitle:
      "Sony FX3 / A7 IV sinema kameraları, profesyonel Godox ışık altyapısı, özel LUT renk bilimi ve üst düzey kurgu/CGI standartlarımız.",
    gearTags: [
      "Sony FX3 Cinema Line",
      "Sony A7 IV",
      "Godox Profesyonel Işık Parkuru",
      "Özel Endüstriyel LUTs",
      "Unreal Engine 5",
      "Blender 3D",
      "Nuke Compositing",
      "DaVinci Resolve Studio",
    ],
    showreel: {
      title: "Hero / Portfolio Amiral Gemisi Kurgu Örneği",
      subtitle: "Fabrika, Yüksek Teknoloji Makine Parkuru & Kurumsal Dinamizm",
      aspectRatio: "16:9",
      videoPlaceholder: "SHOWREEL_16_9",
    },
    reels: [
      {
        id: 1,
        title: "Endüstriyel & Kurumsal Hero Kurgu",
        description: "Fabrika, makine parkuru ve yüksek tempo kurgu ritmi",
        tag: "Fabrika & Kapasite",
        aspectRatio: "9:16",
      },
      {
        id: 2,
        title: "CGI, 3D & VFX Entegrasyonu",
        description: "Unreal Engine 5, Blender ve Nuke compositing görsel gücü",
        tag: "CGI & Motion VFX",
        aspectRatio: "9:16",
      },
      {
        id: 3,
        title: "Dinamik Marka & Ürün Vitrin Reels",
        description: "Özel geçiş presetleri, ses tasarımı ve ritmik montaj",
        tag: "Ürün & Baskı Detay",
        aspectRatio: "9:16",
      },
      {
        id: 4,
        title: "Custom LUT & Sinematik Renk Dünyası",
        description: "Çiğ fabrika ışıklarını kurumsal bronz/turuncu renklere dönüştürme",
        tag: "Color Grading",
        aspectRatio: "9:16",
      },
    ],
  },
  faz1: {
    badge: "FAZ 1: TEMEL İNŞA VE SİSTEM KURULUMU",
    title: "Kurumsal Brandbook, Pazarlama Stratejisi ve 4 Video Pilot Prodüksiyon",
    description:
      "Prodüksiyon aşamasına geçmeden önce markanın tüm fiziksel ve dijital varlıklarını tek bir standart altına alacak olan kurulum paketimizdir.",
    sections: [
      {
        id: "faz1-a",
        letter: "A",
        title: "Kurumsal Kimlik, Basılı Materyal ve Promosyon Kılavuzu (Brandbook)",
        price: "2.500 ₼",
        priceNote: "Tek Seferlik Kurulum",
        description:
          "Baskı ve açıkhava reklamcılığı sektöründe lider olan Kılavuz Visual Solutions'ın kendi kurumsal materyallerinde kusursuz görünmesini sağlayacak tasarım sistemidir:",
        features: [
          {
            title: "Logo Sistemi ve Mimarisi",
            description:
              "Ana logo, ülke bazlı alt marka kullanımları (Kilavuz Azerbaijan, Denmark vb.), güvenlik alanı ve doğru/yanlış kullanım kuralları.",
          },
          {
            title: "Renk ve Tipografi Sistemi",
            description:
              "Dijital (HEX, RGB) ve endüstriyel baskı (CMYK, Pantone) renk kodları; başlık, gövde metni ve sunum font hiyerarşisi.",
          },
          {
            title: "Resmi Kurumsal Evraklar",
            description:
              "Kartvizitler (Vizitkalar), personel yaka kartları (Badgeler), resmi sözleşme (Contract) kağıtları, sunum dosyası ve fatura şablonu.",
          },
          {
            title: "Ambalaj ve Paketleme Tasarımları",
            description:
              "Müşterilere gönderilen bayrak ve baskı ürünlerinin kurumsal kutu, koli ve paketleme tasarımları.",
          },
          {
            title: "Kurumsal Tekstil ve Promosyon (Merchandise)",
            description:
              "Fabrika ve saha personeli üniforma/tişört tasarımları, kalem, defter, kupa, termos ve bez çanta tasarımları.",
          },
          {
            title: "Filo ve Araç Giydirme Tasarımları",
            description:
              "Şirket sevkiyat ve binek araçlarının kurumsal kimliğe uygun dış cephe giydirme tasarımları.",
          },
        ],
      },
      {
        id: "faz1-b",
        letter: "B",
        title: "Medya, Fotoğrafçılık ve Video Prodüksiyon Kılavuzu (Visual & Motion Guidelines)",
        price: "1.000 ₼",
        priceNote: "Tek Seferlik Kurulum",
        description:
          "Kilavuz.az Instagram sayfasına girildiğinde tüm fotoğraf ve videoların tek bir sinematik evrenden çıkmış gibi birbiriyle kusursuz uyum içinde görünmesini sağlayan prodüksiyon standartlarıdır:",
        features: [
          {
            title: "Fotoğrafçılık ve Videography Stili",
            description:
              "Makine parkuru, UV/kumaş baskı detayları ve tesis çekimlerinde kullanılacak ışık, kadraj ve kamera hareketi kuralları.",
          },
          {
            title: "Özel Renk Profilleri (Custom LUTs)",
            description:
              "Fabrika ortamındaki çiğ ışıkları Kılavuz'un kurumsal renk dünyasına dönüştüren, fotoğraf ve videolara özel geliştirilmiş LUT paketleri.",
          },
          {
            title: "Video Kurgu Stilleri ve Presetler",
            description:
              "Videolarda kullanılacak standart yazı (Text) presetleri, kurumsal geçiş (Transition) presetleri ve alt bant animasyonları.",
          },
          {
            title: "Kapak Fotoğrafı (Cover) ve Grid Stilleri",
            description:
              "Reels kapak tasarımları, tipografi yerleşimi ve profilin genel bütünlüğünü koruyan şablon sistemi.",
          },
        ],
      },
      {
        id: "faz1-c",
        letter: "C",
        title: "Sosyal Medya Pazarlama Stratejisi (11 Temel Bölüm Kompakt Strateji Senedi)",
        price: "1.000 ₼",
        priceNote: "Tek Seferlik Kurulum",
        description:
          "Üretilecek içeriklerin hangi hedef kitleye, hangi mesajla ve hangi ticari amaçla sunulacağını belirleyen 11 adımlı yol haritası:",
        features: [
          {
            title: "01 | Brand Overview",
            description:
              "Markanın 1995'ten gelen mirası, ISO 9001 kalitesi ve 8.000 m² günlük kapasitesinin dijital konumlandırması.",
          },
          {
            title: "02 | Target Audience",
            description:
              "Azerbaycan ve global pazardaki B2B karar vericiler, kurumsal satın almacılar ve etkinlik ajanslarının analizi.",
          },
          {
            title: "03 | Competitor Analysis",
            description:
              "Yerel ve bölgesel rakiplerin dijital varlıklarının incelenmesi ve Kılavuz'un ayrışma noktalarının tespiti.",
          },
          {
            title: "04 | Social Media Objectives",
            description:
              "Marka bilinirliği, kurumsal prestij ve B2B müşteri talebi (lead) oluşturma hedeflerinin netleştirilmesi.",
          },
          {
            title: "05 | Platform Strategy",
            description:
              "Kilavuz.az Instagram hesabı başta olmak üzere dijital kanalların optimizasyonu ve vitrin mimarisi.",
          },
          {
            title: "06 | Content Strategy",
            description:
              "Üretim gücü, makine teknolojisi, global referanslar ve teslimat hızını öne çıkaran içerik kurgusu.",
          },
          {
            title: "07 | Content Pillars",
            description:
              "Ana içerik sütunlarının belirlenmesi (Üretim & Teknoloji, Kurumsal Çözümler, Global Vizyon, Kalite Standartları).",
          },
          {
            title: "08 | Brand Communication & Tone of Voice",
            description:
              "Güven veren, uzman, B2B odaklı ve kurumsal iletişim dilinin ve metin yazarlığı kurallarının belirlenmesi.",
          },
          {
            title: "09 | Visual Direction",
            description:
              "Brandbook ile entegre görsel yönelim, sayfa estetiği ve renk psikolojisi uygulaması.",
          },
          {
            title: "10 | Content Calendar & Publishing Plan",
            description:
              "Aylık paylaşım sıklığı, içerik dağılım takvimi ve ideal yayınlanma zamanlamaları.",
          },
          {
            title: "11 | KPI & Performance Tracking",
            description:
              "Erişim, etkileşim, profil ziyaretleri ve gelen kurumsal taleplerin başarı ölçüm metrikleri.",
          },
        ],
      },
      {
        id: "faz1-d",
        letter: "D",
        title: "Pilot Prodüksiyon Testi (4 Adet Premium Video)",
        price: "1.199 ₼",
        priceNote: "Tek Seferlik Kurulum Özel Fiyatı",
        originalPrice: "1.849 ₼",
        discountNote: "650 ₼ Kurulum Avantajı",
        isSpecialOffer: true,
        description:
          "Oluşturulan kurumsal görsel çerçevenin pratiğe dökülmesi ve profilin ilk standartlarının oturtulması için 4 adet Premium Reels konsept videosunun ve kapak/post tasarımlarının çekilip teslim edilmesi.",
        features: [
          {
            title: "4 Adet Premium Seviye Reels",
            description: "Bakü tesislerinde profesyonel ekipmanlarla çekim ve post-prodüksiyon.",
          },
          {
            title: "Özel LUT & Tasarım Şablonları",
            description: "Brandbook standartlarına birebir sadık kalınmış renk profilleri ve kurgu stili.",
          },
          {
            title: "4 Adet Özel Kapak Tasarımı",
            description: "Instagram profil ızgarasında kusursuz kurumsal düzen.",
          },
          {
            title: "Reel Senaryoları & Yayın Planı",
            description: "B2B etkileşim odaklı kurgulanmış çekim ve yayın takvimi.",
          },
        ],
      },
    ],
    total: {
      normalPrice: "6.349 ₼",
      specialPrice: "5.699 ₼",
      badge: "Kılavuz Visual Solutions Özel Kurulum Paketi",
      description: "Tek Seferlik Kurulum: Brandbook + Medya Kılavuzu + Strateji + 4 Pilot Video",
      ctaText: "Faz 1 Kurulumunu Başlat",
    },
  },
  faz2: {
    badge: "FAZ 2: AYLIK DİJİTAL PRODÜKSİYON VE YÖNETİM",
    title: "Aylık Düzenli Prodüksiyon Paketleri",
    heroCard: {
      badge: "KILAVUZ.AZ İÇİN ÖNERİLEN ANA PRODÜKSİYON PAKETİ",
      title: "PRO PAKET (12 REELS)",
      level: "Premium Seviye",
      price: "4.899 ₼",
      period: "/ Ay",
      description:
        "Faz 1'deki Brandbook ve Strateji onaylandıktan hemen sonra, hazırlanan kılavuzlara %100 sadık kalınarak Kilavuz.az hesabını sektörde lider konuma taşıyacak aylık düzenli prodüksiyon sürecimiz:",
      deliverables: [
        {
          title: "12 Adet Premium Reels Video Prodüksiyonu",
          description:
            "Profesyonel kamera ve ışık ekipmanlarıyla Bakü tesislerinde ve sahada gerçekleştirilen çekimler, Brandbook'a özel LUT ve presetlerle yapılan üst düzey kurgular.",
        },
        {
          title: '1 Adet "Hero / Portfolio" Özel Kurgu',
          description:
            "Aylık 12 videonun 1 tanesi, Kılavuz Visual Solutions'ın endüstriyel gücünü ve vizyonunu en üst seviyede sergileyen yüksek prodüksiyonlu amiral gemisi (Hero) film olarak kurgulanır.",
        },
        {
          title: "12 Adet Özel Reels Kapak (Cover) Tasarımı",
          description:
            "Her videoya özel, Instagram grid bütünlüğünü sağlayan profesyonel kapak tasarımları.",
        },
        {
          title: "6 Adet Premium Post / Gönderi Tasarımı",
          description:
            "Kurumsal duyurular, ürün/hizmet detayları ve teknik kapasiteyi anlatan statik/carousel grafik tasarımlar.",
        },
        {
          title: "Senaryo Yazımı ve Aylık İçerik Planı",
          description:
            "Tüm videoların çekim öncesi senaryolarının yazılması ve aylık yayın takviminin yönetilmesi.",
        },
        {
          title: "Süreç ve Revizyon Standartları",
          description:
            "Hazırlanan Brandbook sayesinde sürprizlere yer bırakılmaz. Her içerik için 2 ücretsiz revizyon hakkı sunulur (3. ve sonraki ekstra revizyon talepleri standart premium videolarda 50 ₼, özel Hero kurgularda 100 ₼ olarak ücretlendirilir).",
        },
      ],
    },
    comparisonMatrix: {
      title: "Tüm Aylık Paketler ve Seviyeler Matrisi",
      subtitle:
        "Toplantı esnasında farklı bütçe ve hacim hedeflerine göre tüm alternatifleri inceleyebilirsiniz.",
      levels: ["Basic", "Standart", "Premium"],
      revisionNote:
        "Ekstra Revizyon Notu (3. revizyon ve sonrası): Basic Paket 20 ₼/video | Standart Paket 35 ₼/video | Premium Paket 50 ₼/video | Hero Edit 100 ₼/video.",
      tiers: [
        {
          tierName: "Start (4 Reels)",
          reelsCount: 4,
          prices: {
            basic: "699 ₼",
            standart: "1.199 ₼",
            premium: "1.849 ₼ (Faz 1 Pilot'ta 1.199 ₼)",
          },
          features: [
            "4 Reels Video Prodüksiyonu",
            "4 Adet Özel Kapak Tasarımı",
            "2 Adet Statik / Carousel Post Tasarımı",
            "Temel Senaryo ve Paylaşım Desteği",
          ],
        },
        {
          tierName: "Biznes (8 Reels)",
          reelsCount: 8,
          prices: {
            basic: "1.349 ₼",
            standart: "2.299 ₼",
            premium: "3.449 ₼",
          },
          features: [
            "8 Reels Video Prodüksiyonu",
            "1 Adet Hero / Amiral Gemisi Kurgu Dahil",
            "8 Adet Özel Kapak Tasarımı",
            "4 Adet Premium Post Tasarımı",
            "Senaryo Yazımı ve İçerik Takvimi",
          ],
        },
        {
          tierName: "Pro (12 Reels)",
          badge: "ÖNERİLEN",
          isRecommended: true,
          reelsCount: 12,
          prices: {
            basic: "1.899 ₼",
            standart: "3.199 ₼",
            premium: "4.899 ₼ (Önerilen)",
          },
          features: [
            "12 Reels Video Prodüksiyonu",
            "1 Adet Amiral Gemisi (Hero) Kurgu Dahil",
            "12 Adet Özel Kapak Tasarımı",
            "6 Adet Premium Post Tasarımı",
            "Senaryo Yazımı & Aylık Yayın Planı",
            "Öncelikli Revizyon & Destek",
          ],
        },
        {
          tierName: "Lider (16 Reels)",
          reelsCount: 16,
          prices: {
            basic: "2.499 ₼",
            standart: "4.149 ₼",
            premium: "6.299 ₼",
          },
          features: [
            "16 Reels Video Prodüksiyonu",
            "1 Adet Hero Kurgu Dahil",
            "16 Adet Özel Kapak Tasarımı",
            "8 Adet Premium Post Tasarımı",
            "Tam Kapsamlı Senaryo & İçerik Planı",
            "Özel Proje Koordinatörü & Sürekli Saha Çekimi",
          ],
        },
      ],
    },
  },
  investmentSummary: {
    badge: "YATIRIM ÖZETİ & YOL HARİTASI",
    title: "Net Yatırım Planı ve İki Adımlı Uygulama Süreci",
    items: [
      {
        phase: "FAZ 1 (Bölüm A)",
        name: "Kurumsal Brandbook",
        price: "2.500 ₼",
        note: "Tek Seferlik Kurulum",
      },
      {
        phase: "FAZ 1 (Bölüm B)",
        name: "Medya & Motion Kılavuzu",
        price: "1.000 ₼",
        note: "Tek Seferlik Kurulum",
      },
      {
        phase: "FAZ 1 (Bölüm C)",
        name: "Marketing Strategy (11 Bölüm)",
        price: "1.000 ₼",
        note: "Tek Seferlik Kurulum",
      },
      {
        phase: "FAZ 1 (Bölüm D)",
        name: "Pilot Prodüksiyon Testi (4 Premium Video)",
        price: "1.199 ₼",
        note: "Tek Seferlik Destek Fiyatı",
        strikethrough: "1.849 ₼",
      },
    ],
    totals: {
      faz1Total: "5.699 ₼",
      faz1Label: "FAZ 1 TOPLAM KURULUM YATIRIMI (Tek Seferlik)",
      faz2Total: "4.899 ₼ / Ay",
      faz2Label: "FAZ 2 AYLIK DÜZENLİ PRODÜKSİYON (Pro - 12 Premium)",
    },
    roadmap: [
      {
        stepNumber: "01",
        title: "Adım 1 - Kurulum Başlangıcı (Faz 1)",
        description:
          "Sözleşme onayı ile birlikte Kılavuz Visual Solutions'ın mevcut kurumsal materyalleri incelenir; Brandbook, özel LUT/Preset altyapısı ve 11 bölümlük Pazarlama Stratejisi hazırlanarak yönetimin onayına sunulur.",
      },
      {
        stepNumber: "02",
        title: "Adım 2 - Prodüksiyon ve Büyüme (Faz 2)",
        description:
          "Onaylanan marka anayasası ve strateji doğrultusunda senaryolar yazılır, Bakü tesislerinde çekim günleri planlanır ve Kilavuz.az hesabı kurumsal standartlarda yeniden inşa edilir.",
      },
    ],
    finalCta: {
      title: "Kılavuz Visual Solutions ile Geleceği Birlikte Üretelim",
      description:
        "1995'ten günümüze gelen endüstriyel devliği, global dijital standartlarda sinematik bir prestije dönüştürmek için hazırız.",
      primaryButton: {
        text: "Projeyi Başlatalım",
        href: "mailto:contact@chizzgy.com?subject=Kilavuz%20Visual%20Solutions%20B2B%20Teklif%20Onayi",
      },
      secondaryButton: {
        text: "Faz 1 Detaylarına Dön",
        href: "#faz1",
      },
    },
  },
  footer: {
    agencyName: "CHIZZGY",
    agencySubtext: "Creative & Strategy Agency",
    clientName: "KILAVUZ",
    clientSubtext: "Visual Solutions (Kilavuz.az)",
    copyright: "© 2024 Chizzgy Creative & Strategy Agency. Tüm hakları saklıdır.",
    confidentiality:
      "Bu teklif ve sunum dokümanı, Kılavuz Visual Solutions yönetimine özel olarak hazırlanmış olup gizlilik esasına tabidir.",
  },
};
