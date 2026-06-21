import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Animation wrapper component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Nhà Xe Nam Hưng" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-extrabold text-maroon tracking-tight">Nhà Xe Nam Hưng</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-maroon font-semibold transition relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-maroon after:transition-transform after:scale-x-100">Trang chủ</a>
            <a href="#services" className="text-gray-700 hover:text-maroon font-semibold transition py-2">Dịch vụ</a>
            <a href="#pricing" className="text-gray-700 hover:text-maroon font-semibold transition py-2">Bảng giá</a>
            <a href="#contact" className="text-gray-700 hover:text-maroon font-semibold transition py-2">Liên hệ</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="tel:0338121289" className="flex items-center gap-2 bg-[#FAF7F2] border border-[#E6D3B6] text-maroon px-5 py-2.5 rounded-full font-bold hover:bg-[#F3EFE6] transition shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0338121289
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-maroon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-maroon font-semibold" onClick={() => setMobileMenuOpen(false)}>Trang chủ</a>
              <a href="#services" className="text-gray-700 hover:text-maroon font-semibold" onClick={() => setMobileMenuOpen(false)}>Dịch vụ</a>
              <a href="#pricing" className="text-gray-700 hover:text-maroon font-semibold" onClick={() => setMobileMenuOpen(false)}>Bảng giá</a>
              <a href="#contact" className="text-gray-700 hover:text-maroon font-semibold" onClick={() => setMobileMenuOpen(false)}>Liên hệ</a>
              <a href="tel:0338121289" className="flex items-center justify-center gap-2 bg-[#FAF7F2] border border-[#E6D3B6] text-maroon px-6 py-3 rounded-full font-bold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0338121289
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  const priceList = [
    { 
      route: "Hà Nội ⇄ Giao Thủy", 
      price: "250.000đ", 
      info: "Khởi hành: 05:00 - 18:00", 
      action: "Đặt ngay" 
    },
    { 
      route: "Hà Nội ⇄ Xuân Trường", 
      price: "250.000đ", 
      info: "Tần suất: 30 phút/chuyến", 
      action: "Đặt ngay" 
    }
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:py-24 overflow-hidden bg-white min-h-[85vh] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bus.png" 
          alt="Nhà xe Nam Hưng background" 
          className="w-full h-full object-cover object-[center_right] lg:object-center"
        />
        {/* Gradient overlay to ensure text contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/40 lg:from-white/95 lg:via-white/75 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-block bg-[#FDF8E8] text-[#C59B27] border border-[#F5E6BE] text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase">
                HÀNH TRÌNH ĐẲNG CẤP
              </span>
            </div>
            
            {/* Main Heading */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-[1.15] text-[#1e1e1e]">
                <span className="text-[#3A040E] block">Chuyến xe an toàn,</span>
                <span className="bg-gradient-to-r from-gold to-[#D4AF37] bg-clip-text text-transparent block mt-1">
                  Trải nghiệm thượng lưu
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-gray-800 leading-relaxed max-w-xl font-medium">
              Nhà xe Nam Hưng cam kết mang đến dịch vụ vận chuyển hành khách chuyên nghiệp, 
              uy tín với đội ngũ tài xế tận tâm và trang thiết bị hiện đại nhất.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="tel:0338121289" 
                className="flex items-center justify-center gap-3 bg-maroon hover:bg-maroon-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-maroon/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Gọi ngay: 0338121289</span>
              </a>
              
              <a 
                href="https://zalo.me/0338121289" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 bg-[#0084FF] hover:bg-[#0072DD] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <img 
                  src="/images/zalo_logo.png" 
                  alt="Zalo" 
                  className="w-5 h-5 flex-shrink-0"
                />
                <span>Zalo Tư Vấn</span>
              </a>
            </div>
          </div>

          {/* Right Content - Pricing card overlay */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="w-full max-w-[380px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-6 transition-all hover:shadow-maroon/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#FAF0D7] text-[#C59B27] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-gray-800 text-lg tracking-tight">Bảng giá tuyến xe</h3>
              </div>

              <div className="space-y-4">
                {priceList.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-gray-900 text-sm truncate">{item.route}</h4>
                        <span className="font-extrabold text-maroon text-sm flex-shrink-0">{item.price}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-gray-500 text-xs truncate">{item.info}</p>
                        <a href="tel:0338121289" className="text-maroon hover:text-maroon-light font-bold text-xs hover:underline flex-shrink-0">
                          {item.action}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom center 'Xem thêm' link */}
              <div className="mt-5 pt-3 border-t border-gray-100 text-center">
                <a 
                  href="#pricing" 
                  className="inline-flex items-center justify-center gap-1 text-maroon hover:text-maroon-light font-bold text-sm tracking-tight hover:underline transition"
                >
                  Xem thêm
                  <svg className="w-4 h-4 animate-bounce mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};


// Fleet Section - Đội Xe Hiện Đại
const FleetSection = () => {
  const fleetData = [
    {
      title: "Xe 4 chỗ cao cấp",
      description: "Phù hợp cho công tác, di chuyển cá nhân hoặc gia đình nhỏ với không gian riêng tư.",
      image: "/images/xe_4_cho.png",
      seats: "4 Ghế",
      luggage: "2 Vali"
    },
    {
      title: "Xe 7 chỗ đa dụng",
      description: "Không gian rộng rãi, linh hoạt, là lựa chọn số 1 cho các nhóm bạn hoặc gia đình đi du lịch.",
      image: "/images/xe_7_cho.png",
      seats: "7 Ghế",
      luggage: "4 Vali"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Fleet Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A040E]">Đội xe hiện đại</h2>
            <p className="text-gray-500 mt-2 text-sm lg:text-base">Sở hữu đa dạng các dòng xe đời mới, đáp ứng mọi nhu cầu di chuyển</p>
          </div>
          <a href="tel:0338121289" className="text-maroon hover:text-maroon-light font-bold text-sm flex items-center gap-1 group transition">
            Xem tất cả loại xe 
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {fleetData.map((car, idx) => (
            <AnimatedSection key={idx} delay={idx * 100} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
              {/* Car Image Container */}
              <div className="aspect-[4/3] w-full bg-gray-50 relative overflow-hidden group">
                <img 
                  src={car.image} 
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title & Tag */}
                <div className="flex justify-between items-center gap-2 mb-3">
                  <h3 className="font-extrabold text-gray-900 text-lg">{car.title}</h3>
                  <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded font-semibold">{car.type}</span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {car.description}
                </p>

                {/* Specs */}
                <div className="flex items-center gap-6 border-t border-gray-100 pt-4 mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span>{car.luggage}</span>
                  </div>
                </div>

                {/* CTA Phone Button */}
                <a 
                  href="tel:0338121289"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-maroon hover:bg-maroon-dark text-white rounded-xl font-bold transition shadow-md shadow-maroon/10 hover:shadow-maroon/20 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>0338121289</span>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "An toàn tuyệt đối",
      description: "Đội ngũ tài xế giàu kinh nghiệm, được đào tạo bài bản và xe luôn được kiểm định định kỳ.",
      icon: (
        <svg className="w-6 h-6 text-[#C59B27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Đúng giờ & Linh hoạt",
      description: "Lịch trình xuất bến liên tục, cam kết không bắt khách dọc đường, đảm bảo thời gian di chuyển.",
      icon: (
        <svg className="w-6 h-6 text-[#C59B27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Tiện nghi cao cấp",
      description: "Xe đời mới với ghế bọc da êm ái, wifi miễn phí, khăn lạnh và nước uống phục vụ suốt hành trình.",
      icon: (
        <svg className="w-6 h-6 text-[#C59B27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L11 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A040E] relative inline-block pb-4">
            Vì sao nên chọn Nam Hưng?
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gold to-[#D4AF37] rounded-full"></div>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 150} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col items-center text-center">
              {/* Icon badge */}
              <div className="w-14 h-14 rounded-full bg-[#FAF0D7] flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

// Detailed Pricing Section
const DetailedPricingSection = () => {
  const pricingData = [
    { route: "Hà Nội ⇄ Giao Thủy", info: "Dịch vụ đón trả tận nơi", price: "250.000 VNĐ" },
    { route: "Hà Nội ⇄ Xuân Trường", info: "Dịch vụ đón trả tận nơi", price: "250.000 VNĐ" },
    { route: "Hà Nội ⇄ Trực Ninh", info: "Dịch vụ đón trả tận nơi", price: "250.000 VNĐ" },
    { route: "Hà Nội ⇄ Nam Trực", info: "Dịch vụ đón trả tận nơi", price: "250.000 VNĐ" },
    { route: "Hà Nội ⇄ TP Nam Định", info: "Dịch vụ đón trả tận nơi", price: "250.000 VNĐ" },
    { route: "Sân bay Nội Bài ⇄ Nam Định", info: "Đón trả tận sảnh sân bay", price: "450.000 VNĐ" },
    { route: "Hà Nội ⇄ Nam Định", info: "Bao xe 5 chỗ riêng tư", price: "900.000 VNĐ" },
    { route: "Hà Nội ⇄ Nam Định", info: "Bao xe 7 chỗ riêng tư", price: "1.100.000 VNĐ" }
  ];

  return (
    <section id="pricing" className="py-16 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A040E] mb-3">
              Bảng giá chi tiết
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Cam kết giá niêm yết, không phát sinh chi phí ẩn.
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Table & Banner */}
        <div className="max-w-5xl mx-auto space-y-6">
          <AnimatedSection delay={150}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              
              {/* Table Header */}
              <div className="bg-maroon text-white px-6 py-5 md:px-8">
                <div className="grid grid-cols-12 gap-2 text-sm md:text-base font-bold">
                  <div className="col-span-8">Tuyến đường</div>
                  <div className="col-span-4 text-right">Giá vé</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-100">
                {pricingData.map((item, idx) => (
                  <div key={idx} className="px-6 py-5 md:px-8 hover:bg-gray-50/80 transition duration-150">
                    <div className="grid grid-cols-12 gap-2 items-center">
                      
                      {/* Route & Subtext */}
                      <div className="col-span-8">
                        <div className="font-extrabold text-gray-900 text-sm md:text-base">{item.route}</div>
                        <div className="text-gray-400 text-xs mt-1 font-medium">{item.info}</div>
                      </div>

                      {/* Price */}
                      <div className="col-span-4 text-right">
                        <span className="text-maroon font-extrabold text-sm md:text-lg">{item.price}</span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Gold Banner inside the Table Card */}
              <div className="bg-[#FDDE92]/20 border-t border-[#FCD34D]/40 px-6 py-5 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FDDE92]/40 text-[#C59B27] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-xs md:text-sm font-bold leading-snug max-w-xl">
                      Cần hỗ trợ đặt vé hoặc thuê xe riêng? Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
                    </p>
                  </div>
                  <a 
                    href="tel:0338121289" 
                    className="flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-maroon/10 hover:shadow-maroon/20 transition-all text-xs md:text-sm whitespace-nowrap"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Gọi ngay: 0338121289
                  </a>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Nhà Xe Nam Hưng" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold text-maroon-light">Nam Hưng</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Dịch vụ xe ghép và xe riêng cao cấp, kết nối Hà Nội - Nam Định
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:0338121289" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-maroon transition-all duration-300 group" 
                aria-label="Gọi điện thoại"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a 
                href="https://zalo.me/0338121289" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group" 
                aria-label="Zalo"
              >
                <img 
                  src="/images/zalo_logo.png" 
                  alt="Zalo" 
                  className="w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FAF7F2]">Liên Hệ</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0 text-maroon-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Hotline: 0338121289</span>
              </li>
              
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-maroon-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Văn phòng: Hà Nội & Nam Định</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FAF7F2]">Khu Vực Phục Vụ</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Hà Nội</li>
              <li>• Nam Định</li>
              <li>• Giao Thủy</li>
              <li>• Xuân Trường</li>
              <li>• Trực Ninh</li>
              <li>• Sân bay Nội Bài</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FAF7F2]">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-maroon transition">Trang chủ</a></li>
              <li><a href="#services" className="hover:text-maroon transition">Dịch vụ</a></li>
              <li><a href="#pricing" className="hover:text-maroon transition">Bảng giá</a></li>
              <li><a href="#contact" className="hover:text-maroon transition">Liên hệ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Nhà Xe Nam Hưng. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FleetSection />
      <WhyChooseUsSection />
      <DetailedPricingSection />
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Zalo Button */}
        <a
          href="https://zalo.me/0338121289"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '3s' }}
          aria-label="Chat Zalo"
        >
          <img 
            src="/images/zalo_logo.png" 
            alt="Zalo" 
            className="w-8 h-8"
          />
          <span className="absolute right-full mr-3 bg-navy text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            Chat Zalo
          </span>
        </a>

        {/* Phone Button */}
        <a
          href="tel:0338121289"
          className="group relative w-14 h-14 bg-gradient-to-br from-maroon to-maroon-dark hover:from-maroon-dark hover:to-maroon rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
          style={{ animationDuration: '2s' }}
          aria-label="Gọi điện"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="absolute right-full mr-3 bg-navy text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            0338 121 289
          </span>
        </a>
      </div>
    </div>
  );
}
