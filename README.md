# Geometry Calculator
## 1. Backend: (Chạy npm run dev tại /backend)
### 1.1. Thư mục *controllers*:
---
#### 1.1.1. File *calculationController.js*:
Hàm calculateCircleController: Nếu bán kính < 0, hiển thị message: Invalid radius. Please provide a positive number
---
### 1.2. Thư mục *routes*:
---
#### 1.2.1. File *calculationRoutes.js*:
---
### 1.3. Thư mục *services*:
---
#### 1.3.1. File *geometryService.js*:
---
### 1.4. Thư mục *validators*:
---
#### 1.4.1. File *geometryValidator.js*
---
### 1.5. File *server.js*:
---
### Test API Postman:
Vào Postman -> New -> HTTP -> POST:
1. Test Circle API: URL: http://localhost:3000/api/calculations/calculate/circle -> Chọn raw body JSON
2. Test Rectangle API: URL: http://localhost:3000/api/calculations/calculate/rectangle -> Chọn raw body JSON
3. Test Triangle API: URL: http://localhost:3000/api/calculations/calculate/triangle -> Chọn raw body JSON