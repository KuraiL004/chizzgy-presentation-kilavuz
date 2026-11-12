# CHIZZGY x KILAVUZ VISUAL SOLUTIONS - B2B TEKLİF & SUNUM LANDING PAGE SPESİFİKASYONU

> **Bu dosya tek gerçeklik kaynağıdır (Single Source of Truth).** Projedeki tüm metinler, fiyatlar, renkler ve bölüm yapısı buradan okunacaktır.

---

## 1. PROJE ÖZETİ VE AMACI

Bu web sitesi, **Chizzgy Creative & Strategy Agency** tarafından **Kılavuz Visual Solutions (Kilavuz.az)** yönetimine yapılacak kurumsal iş birliği sunumu için hazırlanmış özel, interaktif bir B2B teklif ve portfolyo landing page'dir.

- **Referans Tasarım:** `https://bynihad.com/` (Koyu tema, devasa cesur tipografi, Bento-grid kart mimarisi, akıcı scroll animasyonları, mikro etkileşimler, yüksek kontrastlı turuncu/bronz vurgular ve sinematik video vitrinleri).
- **Ana Satış Hedefi (Main Focus):**
  1. **FAZ 1 (Kurulum Paketi - 5.699 ₼):** Kurumsal Brandbook (2.500 ₼) + Medya & Motion Kılavuzu (1.000 ₼) + 11 Bölümlük Pazarlama Stratejisi (1.000 ₼) + **Özel İndirimli 4 Adet Premium Pilot Video Testi (Normalde 1.849 ₼ iken kurulum aşamasına özel 1.199 ₼)**.
  2. **FAZ 2 (Aylık Düzenli Prodüksiyon - 4.899 ₼ / Ay):** **Pro Paket (12 Reels - Premium Seviye)**.
- **İkincil Hedef:** Müşterinin toplantı esnasında diğer alternatifleri de görebilmesi için tüm aylık paketlerin (Start 4, Biznes 8, Pro 12, Lider 16) ve seviyelerin (Basic, Standart, Premium) interaktif bir tablo/seçici ile sunulması.

---

## 2. TASARIM SİSTEMİ, RENK PALETİ VE TİPOGRAFİ

### A. Tipografi
- **Ana Font:** `Poppins` (Google Fonts üzerinden `300`, `400`, `500`, `600`, `700`, `800` ağırlıkları yüklenecek).
- **Başlık Stili:** `font-bold` veya `font-extrabold`, sıkı harf aralığı (`tracking-tight`), büyük ve vurucu punto.

### B. Resmi Renk Paleti (Zorunlu Renk Kodları)
Tasarımın tamamında yalnızca aşağıdaki 5 ana renk ve bunların saydamlık (opacity/glassmorphism) varyasyonları kullanılacaktır:
- **Ana Arka Plan (Primary Dark Background):** `#161316` (Derin Sıcak Siyah / Koyu Antrasit)
- **İkincil Yüzey / Kart & Kenarlık Rengi (Warm Espresso / Deep Bronze):** `#453027`
  - *Kullanımı:* Bento kartlarının yüzey gradientlerinde (`rgba(69, 48, 39, 0.35)` ile `backdrop-blur-xl`), kart kenarlıklarında (`#453027`) ve arka plan ambiyans geçişlerinde kullanılacak.
- **Ana Vurgu Rengi (Primary Accent Orange):** `#FF6D29` (Canlı Chizzgy Turuncusu)
  - *Kullanımı:* CTA butonları, aktif sekmeler, önemli fiyat vurguları, "Önerilen Paket" çerçeveleri, ikonlar ve hover glow efektleri (`rgba(255, 109, 41, 0.25)`).
- **Ana Başlık ve Vurgu Metin Rengi (Pure White):** `#FFFFFF` (Saf Beyaz)
- **Gövde ve Açıklama Metin Rengi (Soft Silver Grey):** `#BABABA` (Yumuşak Gümüş Gri - Tüm alt başlıklar, liste açıklamaları ve ikincil metinler)

### C. Animasyon ve Etkileşim Kuralları (Framer Motion)
- Tüm bölümler ekrana girerken (viewport entry) yumuşak `fade-up` (`y: 30 -> 0`, `opacity: 0 -> 1`) ve `staggerChildren` (sıralı beliriş) animasyonu kullanacak.
- Bento kartları `#161316` ile `#453027` arasında sofistike bir cam (glassmorphism) dokusuna sahip olacak; mouse gezdirildiğinde hafif yukarı kalkma (`y: -4px`) ve `#FF6D29` turuncu kenarlık/radial parlama (glow) oluşacak.
- Sayısal verilerde (8.000 m², 1995, 100+ Marka vb.) ekrana gelince çalışan sayaç (counter) animasyonu bulunacak.

---

## 3. SİTEDE YER ALACAK TAM METİNLER VE VERİLER (BÖLÜM BÖLÜM)

### BÖLÜM 1: NAVBAR & HERO SECTION
- **Navbar:**
  - Sol: Chizzgy Logo Alanı (`CHIZZGY` + "Creative & Strategy Agency" alt yazısı) `×` Kılavuz Visual Solutions Logo Alanı (`KILAVUZ` + "Visual Solutions").
  - Orta Linkler: `Strateji` | `Portfolyo` | `Faz 1: Kurulum` | `Faz 2: Paketler` | `Yol Haritası`
  - Sağ Buton (CTA): `Yatırım Planı (Teklif)` (`#FF6D29` turuncu parlak buton)
- **Hero Üst Rozet (Badge):** `KURUMSAL İŞ BİRLİĞİ VE DİJİTAL DÖNÜŞÜM SUNUMU`
- **Hero Ana Başlık:** `1995'ten Günümüze Ulaşan Endüstriyel Üretim Gücünün Global ve Dijital Standartlara Taşınması`
- **Hero Açıklama Metni:** `1995 yılında İstanbul Çağlayan'da başlayan, günlük 5.000 m² kumaş baskı ve 3.000 m² dijital baskı (Solvent, UV) kapasitesine ulaşan, ISO 9001 (Meyer TÜRKAK onaylı) kalite standartlarına sahip ve Türkiye'den sonra Azerbaycan (Bakü) ile Avrupa'ya (Danimarka, İspanya, Almanya) açılan Kılavuz Visual Solutions, sıradan bir işletme değil, uluslararası bir endüstri devidir.`
- **Hero İstatistik Bento Kartları (4 Adet):**
  1. `1995` -> "İstanbul Çağlayan'dan Başlayan Endüstriyel Miras"
  2. `8.000 m²` -> "Günlük Üretim (5.000 m² Kumaş + 3.000 m² UV/Solvent Baskı)"
  3. `100+ Marka` -> "Global Markanın Resmi Tedarikçisi ve Çözüm Ortağı"
  4. `TR • AZ • EU` -> "İstanbul, Bakü, Danimarka, İspanya ve Almanya Operasyonları"

### BÖLÜM 2: REFERANS MARKALAR & LOGOLAR (MARQUEE BANDI)
- **Başlık:** `GÜVENİLEN PRODÜKSİYON VE STRATEJİ ORTAĞI`
- **Alt Metin:** `Chizzgy ekibinin görsel dünyasını, CGI ve prodüksiyon süreçlerini yönettiği markalar ve iş ortakları:`
- **Logo Placeholder Kutuları (Sonsuz Kayan Marquee):** `Kılavuz Visual Solutions`, `Pasha Capital`, `De Muscle Club`, `Cinema Club Academy`, `Relay AI`, `Pasha Kapital Football` + yeni logo eklenebilir modüler yapı.

### BÖLÜM 3: STRATEJİK YAKLAŞIM (NEDEN ÖNCE BRANDBOOK?)
- **Bölüm Başlığı:** `Neden Doğrudan Çekime Başlamıyoruz?`
- **Vurgu Metni:** `100'den fazla global markanın resmi tedarikçisi olan böyle büyük bir yapının Kilavuz.az Instagram sayfası ve dijital vitrini yönetilirken, doğrudan rastgele video çekimlerine ve post paylaşımlarına başlamak kurumsal kimliğe zarar verir. Çekimlere başlamadan önce kurumsal itibarınızı koruyacak ve prodüksiyon ekibimize net bir kılavuz olacak Kurumsal Brandbook ve Pazarlama Stratejisi inşa edilmelidir.`
- **3 Ana Stratejik Sütun (Bento Kartları):**
  1. **01 / Sıfır Karmaşa ve Hız:** `Belirlenen renk, font, LUT ve kurgu standartları sayesinde her videoda "bu nasıl olsun?" tartışması yaşanmaz, revizyon süreçleri minimuma iner.`
  2. **02 / Global Tutarlılık:** `İstanbul, Bakü ve Kopenhag operasyonlarının tamamında aynı kurumsal dil ve görsel kalite konuşulur.`
  3. **03 / B2B Güven İnşası:** `Sayfaya giren kurumsal satın almacılar ve global partnerler, rastgele videolar değil; birbiriyle renk, ton ve kapak uyumu içinde olan prestijli bir fabrika vitrini görür.`

### BÖLÜM 4: CHIZZGY PORTFOLYO & ÖRNEK VİDEO VİTRİNİ
- **Bölüm Başlığı:** `Sinematik Üretim Gücümüz (Örnek Prodüksiyon & VFX Vitrini)`
- **Alt Başlık:** `Sony FX3 / A7 IV sinema kameraları, profesyonel Godox ışık altyapısı, özel LUT renk bilimi ve üst düzey kurgu/CGI standartlarımız.`
- **Ana Vitrin (16:9 Showreel):** Geniş ekran "Hero / Portfolio Amiral Gemisi Kurgu Örneği" video oynatıcı alanı.
- **Reels Vitrini (4 Adet 9:16 Dikey Video Kartı):**
  1. `Endüstriyel & Kurumsal Hero Kurgu` (Fabrika, makine parkuru ve yüksek tempo)
  2. `CGI, 3D & VFX Entegrasyonu` (Unreal Engine 5, Blender ve Nuke compositing gücü)
  3. `Dinamik Marka & Ürün Vitrin Reels` (Özel geçiş presetleri ve ses tasarımı)
  4. `Custom LUT & Sinematik Renk Dünyası` (Çiğ fabrika ışıklarını kurumsal renklere dönüştürme)

### BÖLÜM 5: FAZ 1 - KURUMSAL BRANDBOOK, STRATEJİ VE PİLOT PRODÜKSİYON (KURULUM PAKETİ)
- **Üst Başlık:** `FAZ 1: TEMEL İNŞA VE SİSTEM KURULUMU`
- **Ana Başlık:** `Kurumsal Brandbook, Pazarlama Stratejisi ve 4 Video Pilot Prodüksiyon`
- **Açıklama:** `Prodüksiyon aşamasına geçmeden önce markanın tüm fiziksel ve dijital varlıklarını tek bir standart altına alacak olan kurulum paketimizdir.`

#### Faz 1 - Bölüm A: Kurumsal Kimlik, Basılı Materyal ve Promosyon Kılavuzu (Brandbook) -> `2.500 ₼ (Tek Seferlik)`
- Logo Sistemi ve Mimarisi: Ana logo, ülke bazlı alt marka kullanımları (Kilavuz Azerbaijan, Denmark vb.), güvenlik alanı ve doğru/yanlış kullanım kuralları.
- Renk (Color) ve Tipografi Sistemi: Dijital (HEX, RGB) ve endüstriyel baskı (CMYK, Pantone) renk kodları; başlık, gövde metni ve sunum font hiyerarşisi.
- Resmi Kurumsal Evraklar: Kartvizitler (Vizitkalar), personel yaka kartları (Badgeler), resmi sözleşme (Contract) kağıtları, sunum dosyası ve fatura şablonu.
- Ambalaj ve Paketleme Tasarımları: Müşterilere gönderilen bayrak ve baskı ürünlerinin kurumsal kutu, koli ve paketleme tasarımları.
- Kurumsal Tekstil ve Promosyon (Merchandise): Fabrika ve saha personeli üniforma/tişört tasarımları, kalem, defter, kupa, termos ve bez çanta tasarımları.
- Filo ve Araç Giydirme Tasarımları: Şirket sevkiyat ve binek araçlarının kurumsal kimliğe uygun dış cephe giydirme tasarımları.

#### Faz 1 - Bölüm B: Medya, Fotoğrafçılık ve Video Prodüksiyon Kılavuzu (Visual & Motion Guidelines) -> `1.000 ₼ (Tek Seferlik)`
- Fotoğrafçılık ve Videography Stili: Makine parkuru, UV/kumaş baskı detayları ve tesis çekimlerinde kullanılacak ışık, kadraj ve kamera hareketi kuralları.
- Özel Renk Profilleri (Custom LUTs): Fabrika ortamındaki çiğ ışıkları Kılavuz'un kurumsal renk dünyasına dönüştüren, fotoğraf ve videolara özel geliştirilmiş LUT paketleri.
- Video Kurgu Stilleri ve Presetler: Videolarda kullanılacak standart yazı (Text) presetleri, kurumsal geçiş (Transition) presetleri ve alt bant animasyonları.
- Kapak Fotoğrafı (Cover) ve Grid Stilleri: Reels kapak tasarımları, tipografi yerleşimi ve profilin genel bütünlüğünü koruyan şablon sistemi.

#### Faz 1 - Bölüm C: Sosyal Medya Pazarlama Stratejisi (11 Temel Bölüm Kompakt Strateji Senedi) -> `1.000 ₼ (Tek Seferlik)`
- `01 | Brand Overview`: Markanın 1995'ten gelen mirası, ISO 9001 kalitesi ve 8.000 m² günlük kapasitesinin dijital konumlandırması.
- `02 | Target Audience`: Azerbaycan ve global pazardaki B2B karar vericiler, kurumsal satın almacılar ve etkinlik ajanslarının analizi.
- `03 | Competitor Analysis`: Yerel ve bölgesel rakiplerin dijital varlıklarının incelenmesi ve Kılavuz'un ayrışma noktalarının tespiti.
- `04 | Social Media Objectives`: Marka bilinirliği, kurumsal prestij ve B2B müşteri talebi (lead) oluşturma hedeflerinin netleştirilmesi.
- `05 | Platform Strategy`: Kilavuz.az Instagram hesabı başta olmak üzere dijital kanalların optimizasyonu ve vitrin mimarisi.
- `06 | Content Strategy`: Üretim gücü, makine teknolojisi, global referanslar ve teslimat hızını öne çıkaran içerik kurgusu.
- `07 | Content Pillars`: Ana içerik sütunlarının belirlenmesi (Üretim & Teknoloji, Kurumsal Çözümler, Global Vizyon, Kalite Standartları).
- `08 | Brand Communication & Tone of Voice`: Güven veren, uzman, B2B odaklı ve kurumsal iletişim dilinin ve metin yazarlığı kurallarının belirlenmesi.
- `09 | Visual Direction`: Brandbook ile entegre görsel yönelim, sayfa estetiği ve renk psikolojisi uygulaması.
- `10 | Content Calendar & Publishing Plan`: Aylık paylaşım sıklığı, içerik dağılım takvimi ve ideal yayınlanma zamanlamaları.
- `11 | KPI & Performance Tracking`: Erişim, etkileşim, profil ziyaretleri ve gelen kurumsal taleplerin başarı ölçüm metrikleri.

#### Faz 1 - Bölüm D (ÖZEL TEKLİF VURGUSU): Pilot Prodüksiyon Testi (4 Adet Premium Video) -> `1.199 ₼ (Tek Seferlik Özel Fiyat)`
- **Normal Bedeli:** ~~`1.849 ₼`~~ (Start Paketi - Premium Seviye Normal Satış Fiyatı)
- **Kılavuz'a Özel Kurulum Desteği Fiyatı:** `1.199 ₼` (**650 ₼ Kurulum Avantajı**)
- **Açıklama:** Oluşturulan kurumsal görsel çerçevenin pratiğe dökülmesi ve profilin ilk standartlarının oturtulması için 4 adet Premium Reels konsept videosunun ve kapak/post tasarımlarının çekilip teslim edilmesi.

#### FAZ 1 TOPLAM YATIRIM BEDELİ:
- Normal Toplam: ~~`6.349 ₼`~~
- **Kılavuz Visual Solutions Özel Faz 1 Toplamı:** **`5.699 ₼`** (Tek Seferlik Kurulum, Brandbook, Strateji ve 4 Pilot Video)

---

### BÖLÜM 6: FAZ 2 - AYLIK DİJİTAL PRODÜKSİYON VE YÖNETİM (ANA ODAK: PRO 12 PREMIUM + TÜM PAKETLER)

#### A. Ana Önerilen Paket (Hero Pricing Card): PRO PAKET (12 REELS - PREMIUM SEVİYE) -> `4.899 ₼ / Ay`
- **Rozet:** `KILAVUZ.AZ İÇİN ÖNERİLEN ANA PRODÜKSİYON PAKETİ`
- **Açıklama:** Faz 1'deki Brandbook ve Strateji onaylandıktan hemen sonra, hazırlanan kılavuzlara %100 sadık kalınarak Kilavuz.az hesabını sektörde lider konuma taşıyacak aylık düzenli prodüksiyon sürecimiz.
- **Paket Teslimatları:**
  - **12 Adet Premium Reels Video Prodüksiyonu:** Profesyonel kamera ve ışık ekipmanlarıyla Bakü tesislerinde ve sahada gerçekleştirilen çekimler.
  - **1 Adet "Hero / Portfolio" Özel Kurgu:** Aylık 12 videonun 1 tanesi, amiral gemisi (Hero) film olarak kurgulanır.
  - **12 Adet Özel Reels Kapak (Cover) Tasarımı:** Her videoya özel, Instagram grid bütünlüğünü sağlayan profesyonel kapak tasarımları.
  - **6 Adet Premium Post / Gönderi Tasarımı:** Kurumsal duyurular ve teknik kapasiteyi anlatan statik/carousel grafik tasarımlar.
  - **Senaryo Yazımı ve Aylık İçerik Planı:** Tüm videoların senaryolarının yazılması ve yayın takviminin yönetilmesi.
  - **Süreç ve Revizyon Standartları:** Her içerik için **2 ücretsiz revizyon hakkı** (3. ve sonraki: standart 50 ₼, Hero 100 ₼).

#### B. Tüm Aylık Paketler ve Seviyeler Matrisi

| Paket Tipi | Basic Seviye | Standart Seviye | Premium Seviye | İçerik ve Teslimat Detayı |
| :--- | :--- | :--- | :--- | :--- |
| **Start (4 Reels)** | `699 ₼` | `1.199 ₼` | `1.849 ₼` *(Faz 1 Pilot'ta 1.199 ₼)* | 4 Reels Video, 4 Kapak, 2 Post Tasarımı |
| **Biznes (8 Reels)** | `1.349 ₼` | `2.299 ₼` | `3.449 ₼` | 8 Reels Video (1 Adet Hero Kurgu Dahil), 8 Kapak, 4 Post, Senaryo Yazımı |
| **Pro (12 Reels)** ⭐ | `1.899 ₼` | `3.199 ₼` | **`4.899 ₼` (Önerilen)** | 12 Reels Video (1 Adet Hero Kurgu Dahil), 12 Kapak, 6 Post, Senaryo, Aylık İçerik Planı |
| **Lider (16 Reels)** | `2.499 ₼` | `4.149 ₼` | `6.299 ₼` | 16 Reels Video (1 Adet Hero Kurgu Dahil), 16 Kapak, 8 Post, Senaryo, İçerik Planı, Özel Proje Koordinatörü |

*Ekstra Revizyon Notu (3. revizyon ve sonrası): Basic Paket 20 ₼/video | Standart Paket 35 ₼/video | Premium Paket 50 ₼/video | Hero Edit 100 ₼/video.*

---

### BÖLÜM 7: YATIRIM TABLOSU ÖZETİ & İŞLEYİŞ YOL HARİTASI (NEXT STEPS)
- **Yatırım Özeti Tablosu:**
  1. `FAZ 1 (Bölüm A) - Kurumsal Brandbook`: `2.500 ₼` (Tek Seferlik)
  2. `FAZ 1 (Bölüm B) - Medya & Motion Kılavuzu`: `1.000 ₼` (Tek Seferlik)
  3. `FAZ 1 (Bölüm C) - Marketing Strategy (11 Bölüm)`: `1.000 ₼` (Tek Seferlik)
  4. `FAZ 1 (Bölüm D) - Pilot Prodüksiyon Testi (4 Premium Video)`: ~~`1.849 ₼`~~ -> `1.199 ₼` (Tek Seferlik Destek Fiyatı)
  - **FAZ 1 TOPLAM KURULUM YATIRIMI:** **`5.699 ₼`**
  - **FAZ 2 AYLIK DÜZENLİ PRODÜKSİYON (PRO - 12 PREMIUM):** **`4.899 ₼ / Ay`**
- **2 Adımlı Yol Haritası:**
  - **Adım 1 - Kurulum Başlangıcı (Faz 1):** Sözleşme onayı ile birlikte Kılavuz Visual Solutions'ın mevcut kurumsal materyalleri incelenir; Brandbook, özel LUT/Preset altyapısı ve 11 bölümlük Pazarlama Stratejisi hazırlanarak yönetimin onayına sunulur.
  - **Adım 2 - Prodüksiyon ve Büyüme (Faz 2):** Onaylanan marka anayasası ve strateji doğrultusunda senaryolar yazılır, Bakü tesislerinde çekim günleri planlanır ve Kilavuz.az hesabı kurumsal standartlarda yeniden inşa edilir.

---

## 4. TEKNİK STACK

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animasyon:** Framer Motion
- **İkonlar:** Lucide React
- **Font:** Poppins (Google Fonts via next/font/google)
- **Renk Sistemi:** 5 zorunlu brand rengi (bkz. Bölüm 2B)

