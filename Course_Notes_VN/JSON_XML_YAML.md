# 60. JSON, XML, VÀ YAML

TUẦN TỰ HÓA DỮ LIỆU (DATA SERIALIZATION)

- TUẦN TỰ HÓA DỮ LIỆU là quá trình chuyển đổi DỮ LIỆU thành một định dạng/cấu trúc tiêu chuẩn để có thể lưu trữ (trong một tệp) hoặc truyền tải (qua mạng) và tái cấu trúc lại sau đó (ví dụ: bởi một ứng dụng khác).
    - Điều này cho phép DỮ LIỆU được truyền đạt giữa các ứng dụng theo cách mà cả hai ỨNG DỤNG đều hiểu được.

- Các ngôn ngữ TUẦN TỰ HÓA DỮ LIỆU cho phép chúng ta biểu diễn các *biến* (variables) bằng văn bản.

![image](https://github.com/psaumur/CCNA/assets/106411237/f09eeeba-7779-40c8-af18-f1227bf0cf47)

---

JSON (JAVASCRIPT OBJECT NOTATION)

- JSON (JAVASCRIPT OBJECT NOTATION) **là một ĐỊNH DẠNG TÊP tiêu chuẩn mở và ĐỊNH DẠNG TRAO ĐỔI DỮ LIỆU sử dụng văn bản mà con người có thể đọc được để lưu trữ và truyền tải các đối tượng dữ liệu.

- Nó được tiêu chuẩn hóa trong RFC 8259 (https://datatracker.ietf.org/doc/html/rfc8259).
- Nó được bắt nguồn từ JavaScript, nhưng nó độc lập với ngôn ngữ lập trình và nhiều ngôn ngữ lập trình hiện đại có thể tạo và đọc dữ liệu JSON.
    - CÁC REST API thường sử dụng JSON.
- *Khoảng trắng* (Whitespace) là không quan trọng.

- JSON có thể biểu diễn BỐN loại DỮ LIỆU “nguyên thủy” (primitive):
    - Chuỗi (String)
    - Số (Number)
    - Boole (Boolean)
    - Trống (Null)

- JSON cũng có HAI loại DỮ LIỆU “có cấu trúc”:
    - Đối tượng (Object)
    - Mảng (Array)

---

CÁC LOẠI DỮ LIỆU NGUYÊN THỦY TRONG JSON:

- Một CHUỖI (STRING) là một giá trị văn bản. Nó được bao quanh bởi dấu ngoặc kép “ “.
    - “Hello”
    - “Five”
    - “5”

- Một SỐ (NUMBER) là một giá trị số. Nó KHÔNG được bao quanh bởi dấu ngoặc kép.
    - 5
    - 100
    
- Một BOOLEAN là một loại DỮ LIỆU chỉ có HAI giá trị có thể xảy ra, không được bao quanh bởi dấu ngoặc kép.
    - true
    - false

- Một giá trị NULL (TRỐNG) đại diện cho sự vắng mặt có ý định của bất kỳ giá trị đối tượng nào. Nó không được bao quanh bởi dấu ngoặc kép.
    - null

---

CÁC LOẠI DỮ LIỆU CÓ CẤU TRÚC TRONG JSON:

- Một ĐỐI TƯỢNG (OBJECT) là một danh sách không thứ tự của các *cặp khóa-giá trị* (key-value pairs) (các biến).
    - Đôi khi được gọi là một TỪ ĐIỂN (DICTIONARY).
    - CÁC ĐỐI TƯỢNG được bao quanh bởi dấu ngoặc nhọn {}.
    - *Khóa* (key) là một CHUỖI (STRING).
    - *Giá trị* (value) là bất kỳ loại DỮ LIỆU JSON hợp lệ nào (chuỗi, số, boolean, null, đối tượng, mảng).
    - *Khóa* và *giá trị* được ngăn cách bởi dấu hai chấm :.
    - Nếu có nhiều cặp khóa-giá trị, mỗi cặp được ngăn cách bởi dấu phẩy.

![image](https://github.com/psaumur/CCNA/assets/106411237/24a15571-bb9f-43b4-889f-69f23ffb91bc)

![image](https://github.com/psaumur/CCNA/assets/106411237/b66f041d-2449-43f0-8a04-2c0da5391411)

![image](https://github.com/psaumur/CCNA/assets/106411237/54d69eed-4369-4ef6-a437-6b5ecce14586)

- Một MẢNG (ARRAY) là một chuỗi các *giá trị* được ngăn cách bởi dấu phẩy.
    - Không phải các *cặp khóa-giá trị*.
    - Các giá trị KHÔNG nhất thiết phải cùng một loại DỮ LIỆU.

![image](https://github.com/psaumur/CCNA/assets/106411237/3212f472-f966-49e5-9b9a-7bedcfe47487)

![image](https://github.com/psaumur/CCNA/assets/106411237/f8075e93-2be7-4b2e-a2af-968961bbc5a7)

---

XML (EXTENSIBLE MARKUP LANGUAGE)

- XML (NGÔN NGỮ ĐÁNH DẤU MỞ RỘNG) được phát triển như một ngôn ngữ ĐÁNH DẤU (MARKUP), nhưng hiện nay được sử dụng như một ngôn ngữ tuần tự hóa dữ liệu chung.
    - Các ngôn ngữ đánh dấu (ví dụ: HTML) được sử dụng để định dạng văn bản (phông chữ, kích thước, màu sắc, tiêu đề, v.v.).
    - XML thường khó đọc hơn JSON đối với con người.
    - Khoảng trắng là không quan trọng.
    - Thường được sử dụng bởi các REST API.
    - <khóa> giá trị </khóa> (tương tự như HTML).

![image](https://github.com/psaumur/CCNA/assets/106411237/f954b0ef-f563-4536-94c8-334b6d8f97c6)

![image](https://github.com/psaumur/CCNA/assets/106411237/948dae9e-b59b-4607-8e6d-b39837baba70)

---

YAML (YAML AIN’T MARKUP LANGUAGE)

- YAML ban đầu có nghĩa là *YET ANOTHER MARKUP LANGUAGE* (Lại một ngôn ngữ đánh dấu nữa) nhưng để phân biệt mục đích của nó là một ngôn ngữ tuần tự hóa dữ liệu thay vì một ngôn ngữ đánh dấu, nó đã được đặt lại thành *YAML AINT MARKUP LANGUAGE* (YAML không phải là ngôn ngữ đánh dấu).
- YAML được sử dụng bởi công cụ tự động hóa mạng ANSIBLE (được đề cập sau trong khóa học).
- YAML RẤT dễ đọc đối với con người.
- Khoảng trắng **là quan trọng** (không giống như JSON và XML).
    - Việc thụt đầu dòng (indentation) là rất quan trọng.
- Các tệp YAML bắt đầu bằng - - - (ba dấu gạch ngang).
- Dấu gạch ngang - được sử dụng để chỉ định một danh sách.
- Các Khóa và Giá trị được biểu diễn dưới dạng khóa : giá trị.

![image](https://github.com/psaumur/CCNA/assets/106411237/ecfa3659-4bc3-4596-9f11-10d2644eac1a)

SO SÁNH GIỮA JSON VÀ YAML SỬ DỤNG CÙNG MỘT BỘ DỮ LIỆU

![image](https://github.com/psaumur/CCNA/assets/106411237/16e0e98b-5653-4f8a-a388-1706f91a30d4)
