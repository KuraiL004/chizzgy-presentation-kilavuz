
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Lokal Development Cheat Sheet

### 1. Layiheni birinci defe hazirlayin

```powershell
cd "C:\Kilavuz\chizzgy-presentation-kilavuz"
npm install
```

### 2. Sayti lokal olaraq acin

```powershell
npm run dev
```

Brauzerde acin:

- `http://localhost:3000`
- `http://127.0.0.1:3000`

Serveri dayandirmaq ucun terminalda `Ctrl+C` basin.

### 3. Deyisikliklerin harada edilmesi

- `app/page.tsx`: sehifenin bolmelerinin sirasi.
- `app/layout.tsx`: font, metadata ve umumi HTML qurulusu.
- `app/globals.css`: rengler, font ve qlobal CSS stilleri.
- `app/components/`: Hero, Navbar, Portfolyo, Faz 1, Faz 2, Yatirim ve Footer komponentleri.
- `components/ui/`: fon animasiyasi, interaktiv grid, chart ve umumi UI komponentleri.
- `public/`: logo ve diger statik fayllar.
- `src/data/`: layihe melumatlari ve teklif datası.
- `PROJECT_SPEC.md`: metnlerin, renglerin, paketlerin ve dizayn qaydalarinin esas menbesi.

Fayli deyisdikden sonra brauzeri yenilememeniz bele ola biler; Next.js deyisikliyi oz-ozune gorur.

### 4. Frontend koduna suretli kecid

```powershell
code app/page.tsx
code app/components/HeroSection.tsx
code app/components/Faz1Section.tsx
code app/components/Faz2Section.tsx
code app/globals.css
```

### 5. Backend movqeyi

Bu layihede hələ ayri Express/FastAPI backend ve API route-u yoxdur. Backend emeliyyati lazim olanda Next.js API route asagidaki formada yaradilır:

```text
app/api/hello/route.ts
```

Nümune API:

```ts
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "API isleyir" });
}
```

Sonra brauzerde `http://localhost:3000/api/hello` unvanini aça bilersiniz.

- Fayl: `app/api/`
- Format: `route.ts`
- Metodlar: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

### 6. Kodun yoxlanmasi

```powershell
npm run lint
npm run build
npm start
```

- `npm run lint`: kodun lint problemlerini yoxlayir.
- `npm run build`: tetbiqi production ucun yigir.
- `npm start`: yalniz build sonrası production serverini ise salir.

### 7. Faydalı emrler

```powershell
code .
Get-ChildItem
git status
git pull
npm run dev
```
