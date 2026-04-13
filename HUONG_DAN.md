# Hướng Dẫn Sử Dụng Landing Page Nhà Xe Tú Linh

## 🚀 Chạy Dự Án

### Bước 1: Cài đặt dependencies
```bash
npm install
```

### Bước 2: Chạy development server
```bash
npm start
```

Website sẽ tự động mở tại: http://localhost:3000

### Bước 3: Build production
```bash
npm run build
```

Thư mục `build` sẽ chứa file production sẵn sàng deploy.

## 📝 Tùy Chỉnh Nội Dung

### 1. Cập nhật Bảng Giá

Mở file `src/App.js`, tìm component `HeroSection`, sửa mảng `priceList`:

```javascript
const priceList = [
  { route: "Hà Nội ⇄ Giao Thủy", price: "250.000" },
  { route: "Hà Nội ⇄ Xuân Trường", price: "250.000" },
  // Thêm hoặc sửa tuyến đường tại đây
];
```

### 2. Thay Đổi Số Điện Thoại

Tìm kiếm `tel:0123456789` trong file `src/App.js` và thay bằng số điện thoại thực:

```javascript
<a href="tel:0987654321" className="...">
```

### 3. Cập Nhật Link Zalo

Tìm `https://zalo.me/` và thay bằng link Zalo của bạn:

```javascript
<a href="https://zalo.me/0987654321" target="_blank" rel="noopener noreferrer">
```

### 4. Thay Đổi Hình Ảnh

Các hình ảnh hiện đang dùng từ Unsplash. Để thay đổi:

**Cách 1: Dùng URL hình ảnh online**
```javascript
<img src="https://your-image-url.com/image.jpg" alt="Mô tả" />
```

**Cách 2: Dùng hình ảnh local**
1. Đặt hình vào thư mục `public/images/`
2. Sử dụng:
```javascript
<img src="/images/your-image.jpg" alt="Mô tả" />
```

### 5. Sửa Thông Tin Footer

Trong component `Footer`, cập nhật:
- Email
- Địa chỉ văn phòng
- Khu vực phục vụ
- Link mạng xã hội

### 6. Thay Đổi Màu Sắc

Mở file `tailwind.config.js`:

```javascript
colors: {
  navy: {
    DEFAULT: '#0A2647',  // Màu xanh navy chính
    dark: '#051729',     // Màu tối hơn
    light: '#144272',    // Màu sáng hơn
  },
  accent: {
    red: '#E63946',      // Màu đỏ nhấn
    orange: '#F77F00',   // Màu cam
  }
}
```

### 7. Cập Nhật Đội Xe

Trong component `FleetSection`, sửa object `fleets`:

```javascript
const fleets = {
  sedan: [
    {
      name: "Tên xe",
      description: "Mô tả xe",
      image: "URL hình ảnh"
    },
    // Thêm xe mới tại đây
  ],
  suv: [
    // Tương tự
  ]
};
```

### 8. Thay Đổi Testimonial

Trong component `TestimonialSection`, sửa nội dung đánh giá và thông tin khách hàng.

## 🎨 Tùy Chỉnh Giao Diện

### Thay Đổi Font Chữ

Trong file `src/index.css`, thay đổi Google Font:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
```

Sau đó cập nhật trong `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

### Điều Chỉnh Khoảng Cách

Các section có padding mặc định `py-20 lg:py-28`. Bạn có thể thay đổi:
- `py-16` - Khoảng cách nhỏ hơn
- `py-32` - Khoảng cách lớn hơn

### Bo Góc Card

Thay đổi `rounded-3xl` thành:
- `rounded-xl` - Bo góc nhỏ hơn
- `rounded-2xl` - Bo góc vừa
- `rounded-3xl` - Bo góc lớn (mặc định)

## 📱 Responsive

Website đã được tối ưu cho:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Các breakpoint TailwindCSS:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## 🚢 Deploy

### Deploy lên Vercel
```bash
npm install -g vercel
vercel
```

### Deploy lên Netlify
```bash
npm run build
# Kéo thả thư mục build vào Netlify
```

### Deploy lên GitHub Pages
1. Thêm vào `package.json`:
```json
"homepage": "https://username.github.io/repo-name"
```

2. Cài đặt gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Thêm scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 🔧 Troubleshooting

### Lỗi: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Lỗi: Port 3000 đã được sử dụng
```bash
# Chạy trên port khác
PORT=3001 npm start
```

### Lỗi build TailwindCSS
```bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer
```

## 📞 Hỗ Trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra console log trong trình duyệt (F12)
2. Đọc lại hướng dẫn
3. Kiểm tra phiên bản Node.js (khuyến nghị >= 14.x)

## 📄 License

© 2024 Nhà Xe Tú Linh. All rights reserved.
