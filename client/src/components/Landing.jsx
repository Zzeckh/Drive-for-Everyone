import { useState } from 'react'

export default function Landing({ onEnter }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (e) => {
    e.preventDefault()
    onEnter()
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-4 md:px-8 py-3 md:py-4 bg-background border-b-4 border-on-background">
        <div className="flex items-center gap-4 md:gap-8 w-full max-w-7xl mx-auto">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-white neo-border-thick neo-shadow-sm active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>

          <span className="font-display-lg text-lg md:text-2xl font-black tracking-tighter uppercase">CDN Images</span>

          <div className="hidden md:flex items-center gap-6 ml-8">
            <a className="font-label-bold text-sm text-on-background hover:text-primary transition-colors uppercase" href="#">Home</a>
            <a className="font-label-bold text-sm text-on-background hover:text-primary transition-colors uppercase" href="#">Features</a>
            <a className="font-label-bold text-sm text-on-background hover:text-primary transition-colors uppercase" href="#">Documentation</a>
          </div>

          <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center bg-white neo-border-thick neo-shadow-sm px-4 py-2">
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none font-bold" placeholder="Search..." type="text" />
              <span className="material-symbols-outlined text-black">search</span>
            </div>
            <a
              href="#"
              onClick={go}
              className="bg-[#c6ff00] text-black font-label-bold text-xs md:text-sm px-4 md:px-6 py-2 neo-border-thick neo-shadow-sm hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all uppercase whitespace-nowrap"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu fixed inset-0 z-40 md:hidden ${menuOpen ? 'open' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)}></div>
        <div className="absolute left-0 top-0 bottom-0 w-64 bg-background border-r-4 border-black p-6 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="self-end w-10 h-10 flex items-center justify-center bg-white neo-border-thick neo-shadow-sm mb-4"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <a className="font-label-bold text-base text-on-background hover:text-primary transition-colors uppercase py-2 border-b-2 border-gray-200" href="#">Home</a>
          <a className="font-label-bold text-base text-on-background hover:text-primary transition-colors uppercase py-2 border-b-2 border-gray-200" href="#">Features</a>
          <a className="font-label-bold text-base text-on-background hover:text-primary transition-colors uppercase py-2 border-b-2 border-gray-200" href="#">Documentation</a>
          <div className="mt-4 flex items-center bg-white neo-border-thick neo-shadow-sm px-4 py-3">
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none font-bold" placeholder="Search..." type="text" />
            <span className="material-symbols-outlined text-black">search</span>
          </div>
        </div>
      </div>

      {/* Main Content Canvas */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-8 md:py-12 flex flex-col gap-12 md:gap-24">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden min-h-[400px] md:h-[600px] flex items-center justify-center bg-on-background neo-border-thick neo-shadow">
          <img
            alt="Fast Image Delivery"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO2xv9ZY6fWyX1fUy7esW5WIlk6Qpr7JQ9UrerEdFbpYN80llA28JsiVple46dDwMnb04qOrHjFClkvq1GG83-DpQR9kjJw3l4A7tnNQvwvn7Tpvvc9fy1LeZQWD-HS0fX9CWZAGxirQBQYm6klb6jFzfTsE2-OR53gbLwzJ_o-6VgmJvFh3l84mG6FXzgYIHM6KsS75Hwsq0bCjZz5vHCU60AzkBPDrIbFv5nuNtfOZh08oI9zxwP"
          />
          <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-4xl py-12 md:py-0">
            <h1 className="font-display-lg text-4xl md:text-7xl lg:text-[120px] font-black text-white leading-none tracking-tighter mb-4 md:mb-6 uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              Kirim Gambar
            </h1>
            <p className="font-body-lg text-base md:text-xl text-white max-w-2xl mb-6 md:mb-8 font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              Optimasi otomatis, pengiriman instan. Jangan biarkan gambar besar memperlambat website Anda.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 w-full sm:w-auto">
              <a
                href="#"
                onClick={go}
                className="bg-[#c6ff00] text-black font-label-bold px-6 md:px-8 py-3 neo-border-thick neo-shadow-sm hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all uppercase text-sm md:text-base"
              >
                Coba Gratis
              </a>
              <a
                href="#"
                className="bg-white text-black font-label-bold px-6 md:px-8 py-3 neo-border-thick neo-shadow-sm hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all uppercase text-sm md:text-base"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full md:w-1/3 flex flex-col gap-4 md:gap-6">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-black uppercase tracking-tight">Mengapa Memilih Kami?</h2>
            <p className="font-body-sm text-black font-bold text-sm md:text-base">
              Dari optimasi otomatis hingga keamanan tingkat tinggi, kami membuat pengiriman aset digital Anda lebih cepat, aman, dan efisien dengan dukungan penuh waktu.
            </p>
            <div className="flex gap-3 md:gap-4">
              <span className="material-symbols-outlined bg-[#c6ff00] neo-border-thick neo-shadow-sm p-2 md:p-3 cursor-pointer hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all text-xl md:text-2xl">bolt</span>
              <span className="material-symbols-outlined bg-[#ffade2] neo-border-thick neo-shadow-sm p-2 md:p-3 cursor-pointer hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all text-xl md:text-2xl">shield</span>
              <span className="material-symbols-outlined bg-[#9cf0ff] neo-border-thick neo-shadow-sm p-2 md:p-3 cursor-pointer hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all text-xl md:text-2xl">support_agent</span>
            </div>
            <div className="flex gap-6 md:gap-8 mt-6 md:mt-8 border-t-4 border-black pt-6 md:pt-8">
              <div className="text-center">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-1 md:mb-2">speed</span>
                <div className="font-black text-xl md:text-2xl">99%</div>
                <div className="text-[10px] md:text-xs font-bold uppercase mt-1">Uptime Rate</div>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-1 md:mb-2">globe</span>
                <div className="font-black text-xl md:text-2xl">50+</div>
                <div className="text-[10px] md:text-xs font-bold uppercase mt-1">Global Nodes</div>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-1 md:mb-2">timer</span>
                <div className="font-black text-xl md:text-2xl">&lt;50ms</div>
                <div className="text-[10px] md:text-xs font-bold uppercase mt-1">Latency</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-6">
            <div className="bg-[#c6ff00] text-black neo-border-thick neo-shadow p-4 md:p-6 flex gap-4 md:gap-6 items-center hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white neo-border-thick neo-shadow-sm flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl md:text-4xl">bolt</span>
              </div>
              <div>
                <h3 className="font-black text-lg md:text-2xl mb-1 md:mb-2 uppercase">Optimasi Otomatis</h3>
                <p className="text-xs md:text-sm font-bold">Gambar Anda dikompresi dan dikonversi ke format WebP secara otomatis tanpa kehilangan kualitas visual.</p>
              </div>
            </div>

            <div className="bg-[#ffade2] text-black neo-border-thick neo-shadow p-4 md:p-6 flex gap-4 md:gap-6 items-center hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white neo-border-thick neo-shadow-sm flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl md:text-4xl">shield</span>
              </div>
              <div>
                <h3 className="font-black text-lg md:text-2xl mb-1 md:mb-2 uppercase">Keamanan Terjamin</h3>
                <p className="text-xs md:text-sm font-bold">Proteksi hotlinking dan enkripsi end-to-end memastikan aset digital Anda aman dari pencurian bandwidth.</p>
              </div>
            </div>

            <div className="bg-[#9cf0ff] text-black neo-border-thick neo-shadow p-4 md:p-6 flex gap-4 md:gap-6 items-center hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white neo-border-thick neo-shadow-sm flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl md:text-4xl">support_agent</span>
              </div>
              <div>
                <h3 className="font-black text-lg md:text-2xl mb-1 md:mb-2 uppercase">Dukungan 24/7</h3>
                <p className="text-xs md:text-sm font-bold">Tim ahli kami selalu siap membantu Anda mengatasi masalah teknis kapan pun dibutuhkan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services/Use Cases Section */}
        <section className="bg-white neo-border-thick neo-shadow p-4 md:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-4 md:gap-6">
            <div>
              <h2 className="font-headline-lg text-2xl md:text-4xl font-black uppercase tracking-tight">Layanan Unggulan</h2>
              <p className="font-body-sm text-black font-bold max-w-sm mt-2 text-xs md:text-sm">
                Solusi sempurna untuk berbagai kebutuhan digital Anda, dari website kecil hingga aplikasi skala enterprise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="group relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden cursor-pointer neo-border-thick neo-shadow-sm bg-black">
              <img alt="E-commerce" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9HsZfQi157yozVjMw1riA_EozzRKJ0dRW79_dLkQzLyLd8e54L47KmmRsutx49h3RIysuyuz0vm6-bU3SQYJ2cVZ8it9Er4e0K0_fQjfwEXEqy5QMNVdUuHXrAaZu_vv1yIv-arcCj5FkB3NAPJVg3Jv76xV4ur3OVgcCUWruvOZvaamoDm_robENlTXhHfI3GPmxXYRh1OJmm7PCHGsSybwwRMTVFCcKB9f9h5uBQujJgz3-1sbM" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h4 className="text-white font-black text-xl md:text-2xl mb-1 md:mb-2 uppercase">E-commerce</h4>
                <p className="text-[#c6ff00] font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase">High Res Delivery</p>
                <div className="flex items-center text-white text-xs md:text-sm font-bold bg-black w-max px-3 py-1 neo-border-thick">
                  <span>Lihat Detail</span>
                </div>
              </div>
            </div>

            <div className="group relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden cursor-pointer neo-border-thick neo-shadow-sm bg-black">
              <img alt="Portofolio Digital" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFY9D7JFD_vUBR5i6ZGQvL9gv__jSQsUYnyOGs8ToIXre90IMZPcVenBsD2L_0OFe-Tja21sZoUx_KXW2B_cR_pRq616H5ozQkZ8BzRQ_DLAmtSRHfhQz_Nzlq1uRkRPzDjox5Qk-aqpxnv-S5yl_HZgukV5XO6pKcfGKxVD5gFiRsDrBNpHm8Y4f_HTfh3tvuaDPy41nlmHVSwDOz9Gy2nR8GFeavDhXE2X-tzJKW0G3f2zrp-joH" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h4 className="text-white font-black text-xl md:text-2xl mb-1 md:mb-2 uppercase">Portofolio Digital</h4>
                <p className="text-[#ffade2] font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase">Fast Load Optimized</p>
              </div>
            </div>

            <div className="group relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden cursor-pointer neo-border-thick neo-shadow-sm bg-black">
              <img alt="Aplikasi Mobile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFYfXLd60P9hMb8NHx3JAkIgweaqWjOwlDlJ3SqsBhnTgMTZspR4b12rFsfTNRVdHv6BsnRSAt-KbM96Jo7t4bju4yuUKI2ZZkTW06j4XL3msMGhGQpe8pHwBjS4TAAdnrSIJniZ-P4bfz0WSUarqZap6pVhaZuzGMFSSBUN6sqY23Mr74CY8oCvIhBCQrm0hyWnhjHVr3hh9utEhNBz0GEUs5ljB0L7ABwZVl718MhvqRS-6gwerQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h4 className="text-white font-black text-xl md:text-2xl mb-1 md:mb-2 uppercase">Aplikasi Mobile</h4>
                <p className="text-[#9cf0ff] font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase">Lightweight Assets</p>
              </div>
            </div>

            <div className="group relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden cursor-pointer neo-border-thick neo-shadow-sm bg-black">
              <img alt="Portal Berita" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWep5EtFM7p7HrRgD8uiI7wS2yMfSsNG8gdwbtYw7H1BcOgDJ5usXECVOPdo3FRxEIll7B_qRqlWagD0cyJcIP-70JPly4xh15zJ9FZXuv4WiN1V8SRM9BhfhtaPPV_cgzBXmlOV8jvfwMEAGZCR7BKKTtd5Kd5cTskHgenfa5b7B9hEUYeVs0aep5ejoe8kKAx3KB-SvIMYakoAeXzOWkRQEoz1nS1AQNi85BW4-5AnqjXM8ODXwi" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h4 className="text-white font-black text-xl md:text-2xl mb-1 md:mb-2 uppercase">Portal Berita</h4>
                <p className="text-[#c6ff00] font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase">Global CDN Edge</p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <a className="bg-[#c6ff00] text-black font-label-bold px-6 md:px-8 py-2 md:py-3 neo-border-thick neo-shadow-sm uppercase hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all text-sm md:text-base" href="#">Lihat Semua</a>
            <div className="flex gap-3 md:gap-4">
              <button type="button" className="w-10 h-10 md:w-12 md:h-12 bg-white neo-border-thick neo-shadow-sm flex items-center justify-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
                <span className="material-symbols-outlined text-xl md:text-2xl">chevron_left</span>
              </button>
              <button type="button" className="w-10 h-10 md:w-12 md:h-12 bg-white neo-border-thick neo-shadow-sm flex items-center justify-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
                <span className="material-symbols-outlined text-xl md:text-2xl">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t-4 border-black flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 md:py-8 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="font-display-lg text-base md:text-xl font-black text-on-background uppercase">CDN Images</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-body-sm text-xs md:text-sm font-bold uppercase mb-4 md:mb-0">
          <a className="text-black hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-black hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-black hover:text-primary transition-colors" href="#">Status</a>
          <a className="text-black hover:text-primary transition-colors" href="#">Twitter</a>
        </div>
        <div className="font-body-sm text-xs md:text-sm text-black font-bold uppercase text-center md:text-right">
          © 2024 CDN Images. Built for speed.
        </div>
      </footer>

      {/* Bottom Navigation for Mobile */}
      <nav className="bottom-nav md:hidden bg-white border-t-4 border-black flex justify-around items-center px-4 py-3">
        <a href="#" className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </a>
        <a href="#" onClick={go} className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-xl">image</span>
          <span className="text-[10px] font-bold uppercase">Upload</span>
        </a>
        <a href="#" onClick={go} className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-xl">folder</span>
          <span className="text-[10px] font-bold uppercase">Files</span>
        </a>
        <a href="#" onClick={go} className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-xl">person</span>
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </a>
      </nav>
    </div>
  )
}