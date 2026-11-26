/**
 * Portfel videoları üçün konfiqurasiya (hamısı 9:16 şaquli).
 *
 * Hər `src` üçün iki növ link qəbul olunur:
 *  - Birbaşa video faylı (.mp4 / .webm): məs. "https://xxxx.public.blob.vercel-storage.com/video-01.mp4"
 *    və ya layihə daxilində "/videos/video-01.mp4" (public/videos/ qovluğuna qoyulmalıdır)
 *  - Vimeo / YouTube embed linki: məs. "https://player.vimeo.com/video/123456789"
 *
 * Boş saxlanılan (`""`) yerlərdə sayt yer tutucu (placeholder) görünüşünü saxlayır.
 * `title` və `desc` sonradan doldurulacaq.
 */

export type PortfolioVideo = {
  src: string;
  poster?: string;
  title?: string;
  desc?: string;
};

/** Yuxarıdakı 16:9 panel: altdakı 3 miniatürdən hansı seçilsə, üstdəki böyük pleyerdə o oynayır */
export const showreelVideos: PortfolioVideo[] = [
  {
    // Pasha_Kapital — 56s; açar kadrlar arasında 8s-ə qədər boşluq var idi, timeline üçün ki_0.5
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto,ki_0.5/v1795652610/Pasha_Kapital_23.06.2026_phpe9o.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795652610/Pasha_Kapital_23.06.2026_phpe9o.jpg",
    title: "Paşa Kapital",
  },
  {
    // Pasha_Capital_Vfx_Master_File — 33s
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto,ki_0.5/v1795652612/Pasha_Capital_Vfx_Master_File_rg0bqf.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795652612/Pasha_Capital_Vfx_Master_File_rg0bqf.jpg",
    title: "Paşa Kapital - VFX",
  },
  {
    // Farid_Michael_Jackson — 28s
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto,ki_0.5/v1795652611/Farid_Michael_Jackson_pnywnn.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795652611/Farid_Michael_Jackson_pnywnn.jpg",
    title: "Paşa Kapital - Backstage",
  },
];

/** Aşağıdakı 9:16 karusel */
export const reelVideos: PortfolioVideo[] = [
  {
    // Zyro_1 — q_auto: Cloudinary keyfiyyəti saxlayaraq sıxır (5.8MB → 1.9MB); poster: videonun ilk kadrı (so_0)
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto/v1795646526/Zyro_1.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795646526/Zyro_1.jpg",
    title: "Xüsusi LUT və Kinematik Rəng Dünyası",
    desc: "Zavod işıqlarını korporativ rənglərə çevirmə",
  },
  {
    // Zyro_2 — q_auto: 14.9MB → 5.2MB
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto/v1795647947/Zyro_2.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795647947/Zyro_2.jpg",
    title: "Toplantıdan Nəticəyə: Sənaye Profili",
    desc: "Fabrik, avadanlıq parkı və yüksək dinamika",
  },
  {
    // Avenue_Reels_V5_Prob3 — 60fps, açar kadrlar seyrək idi (2.6s-ə qədər): ki_0.5 hər 0.5s açar kadr qoyur, timeline-da axtarış rəvan olur
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto,ki_0.5/v1795649149/Avenue_Reels_V5_Prob3.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795649149/Avenue_Reels_V5_Prob3.jpg",
    title: "Dinamik Brend ve Mehsul Vitrini",
    desc: "Xüsusi keçid presetləri və səs dizayni",
  },
  {
    // Avenue_Mebel_V6_Prob3 — 60fps, seyrək açar kadrlar: ki_0.5 (4.0MB → 5.3MB)
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto,ki_0.5/v1795648583/Avenue_Mebel_V6_Prob3.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795648583/Avenue_Mebel_V6_Prob3.jpg",
    title: "Lüks Kampaniya və Atmosfer Rejissorluğu",
    desc: "Low-key işıq, model və məhsulun kinematik dialoqu",
  },
  {
    // Vfx_CGI_Video — 4s, cəmi 1 açar kadr var idi: ki_0.5 (1.8MB → 3.3MB)
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto,ki_0.5/v1795648605/Vfx_CGI_Video.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795648605/Vfx_CGI_Video.jpg",
    title: "CGI, 3D və VFX İnteqrasiyası",
    desc: "Unreal Engine 5, Blender və Nuke kompozisiya gücü",
  },
  {
    // Instagram_6_Prob4 — 30.8s, 30fps: ki_0.5 (5.0MB → 6.5MB)
    src: "https://res.cloudinary.com/jd9bb9vz/video/upload/q_auto,ki_0.5/v1795651669/Instagram_6_Prob4.mp4",
    poster: "https://res.cloudinary.com/jd9bb9vz/video/upload/so_0/v1795651669/Instagram_6_Prob4.jpg",
    title: "Reels üçün Motion Dizayn Dili",
    desc: "Nitqə sinxron animasiyalar, premium Reels formatı",
  },
];
