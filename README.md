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

Roadmap Bước 11
11.1	Tạo calculateUtils.js	✅
11.2	Tách HistoryList	✅
11.3	Tách ClearHistoryButton	✅
11.4	Tách HistoryLoader	✅
11.5	Refactor addToHistory	✅
11.6	Kết nối History vào calculation	✅
11.7	Kiểm tra History	✅
11.8	Kiểm tra Clear History	✅
11.9	Refactor executeCalculation	✅
11.10	Refactor handleCalculate	✅
11.11	Tách CircleCalculator	✅
11.12	Tách RectangleCalculator	✅
11.13	Tách TriangleCalculator	✅
11.14	Tách SquareCalculator	✅
11.15	Dọn và hoàn thiện App.jsx ✅