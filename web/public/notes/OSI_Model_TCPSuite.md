# 3. MÔ HÌNH OSI & BỘ GIAO THỨC TCP/IP (OSI MODEL & TCP/IP SUITE)

## Mô hình mạng là gì?

Các mô hình mạng giúp phân loại và cung cấp một cấu trúc cho các giao thức và tiêu chuẩn mạng.

(Giao thức là một tập hợp các quy tắc logic xác định cách các thiết bị mạng và phần mềm hoạt động)

## MÔ HÌNH OSI

- Mô hình kết nối các hệ thống mở (Open Systems Interconnection Model).
- Mô hình khái niệm giúp phân loại và tiêu chuẩn hóa các chức năng khác nhau trong một mạng.
- Được tạo ra bởi "Tổ chức Tiêu chuẩn hóa Quốc tế" (ISO).
- Các chức năng được chia thành 7 "Lớp" (Layers).
- Các lớp này làm việc cùng nhau để giúp mạng hoạt động.

![image](https://github.com/psaumur/CCNA/assets/106411237/bbf46de2-e025-4ddd-b52b-614b280598da)

Khi dữ liệu di chuyển từ lớp trên cùng xuống dưới, quy trình này được gọi là **“đóng gói” (encapsulation)**.

Khi dữ liệu di chuyển từ lớp dưới cùng lên trên, quy trình này được gọi là **“mở gói” (de-encapsulation)**.

Khi các tương tác xảy ra trên cùng một lớp, nó được gọi là **“tương tác cùng lớp” (same-layer interaction)**.

![image](https://github.com/psaumur/CCNA/assets/106411237/b7cf4900-993c-49f0-b6ea-70f4f0719633)

Câu thần chú (Mnemonic) giúp ghi nhớ tên và thứ tự của các lớp dữ liệu:

![image](https://github.com/psaumur/CCNA/assets/106411237/01f532f6-b636-4b7c-99d0-a67f7e483a99)

### Các lớp bao gồm:

### 7 - ỨNG DỤNG (APPLICATION)

- Lớp này gần với người dùng cuối nhất.
- Tương tác với các ứng dụng phần mềm.
- HTTP và HTTPS là các giao thức lớp 7.

Các chức năng của Lớp 7 bao gồm:

- Xác định đối tác giao tiếp.
- Đồng bộ hóa giao tiếp.

---

### 6 - TRÌNH DIỄN (PRESENTATION)

- Biên dịch dữ liệu sang định dạng phù hợp (giữa định dạng Ứng dụng và định dạng Mạng) để gửi qua mạng.

---

### 5 - PHIÊN (SESSION)

- Kiểm soát các cuộc hội thoại (phiên) giữa các máy chủ đang giao tiếp.
- Thiết lập, quản lý và kết thúc các kết nối giữa ứng dụng cục bộ và ứng dụng từ xa.

---

Các kỹ sư mạng thường không làm việc trực tiếp với 3 lớp trên cùng.
Các nhà phát triển ứng dụng làm việc với các lớp trên của mô hình OSI để kết nối ứng dụng của họ qua mạng.

---

### 4 - GIAO VẬN (TRANSPORT)

- Phân đoạn và tái lắp ghép dữ liệu để giao tiếp giữa các máy chủ đầu cuối.
- Chia các mảng dữ liệu lớn thành các đoạn (segments) nhỏ hơn để có thể gửi qua mạng dễ dàng hơn và ít gây ra lỗi truyền dẫn hơn.
- Cung cấp giao tiếp kiểu HOST-TO-HOST (đầu cuối đến đầu cuối).

Khi dữ liệu từ Lớp 7-5 chuyển xuống, nó sẽ nhận được một Tiêu đề Lớp 4 (L4 Header) tại lớp Giao vận.

<< DỮ LIỆU + L4 Header >>

Dữ liệu này được gọi là **PHÂN ĐOẠN (SEGMENT)**.

---

### 3 - MẠNG (NETWORK)

- Cung cấp kết nối giữa các máy chủ đầu cuối trên các mạng khác nhau (ví dụ: bên ngoài mạng LAN).
- Cung cấp địa chỉ logic (Địa chỉ IP).
- Cung cấp việc lựa chọn đường đi giữa nguồn và đích.
- **ROUTER** hoạt động ở Lớp 3.

Khi Dữ liệu và Tiêu đề Lớp 4 chuyển xuống Lớp Mạng, nó sẽ nhận thêm Tiêu đề Lớp 3 (L3 Header).

<< DỮ LIỆU + L4 Header + L3 Header >>

Dữ liệu này được gọi là **GÓI TIN (PACKET)**.

---

### 2 - LIÊN KẾT DỮ LIỆU (DATA LINK)

- Cung cấp kết nối và truyền tải dữ liệu giữa các nút (NODE-TO-NODE) (Ví dụ: PC đến Switch, Switch đến Router, Router đến Router).
- Xác định cách dữ liệu được định dạng để truyền qua môi trường vật lý (ví dụ: cáp đồng UTP).
- Phát hiện và (có thể) sửa các lỗi Vật lý (Lớp 1).
- Sử dụng địa chỉ Lớp 2, tách biệt với địa chỉ Lớp 3.
- **SWITCH** hoạt động ở Lớp 2.

Khi Gói tin lớp 3 chuyển xuống, một Tiêu đề (Header) và Phần đuôi (Trailer) Lớp 2 sẽ được thêm vào.

<< L2 Trailer + DỮ LIỆU + L4 Header + L3 Header + L2 Header >>

Dữ liệu này được gọi là **KHUNG TIN (FRAME)**.

Tất cả các bước dẫn đến quá trình truyền tải được gọi là ĐÓNG GÓI (ENCAPSULATION).
Khi khung tin được gửi đến người nhận, nó sẽ trải qua quá trình ngược lại là MỞ GÓI (DE-ENCAPSULATION), loại bỏ các lớp khi di chuyển từ Lớp 1 lên Lớp 7 của mô hình OSI.

---

### 1 - VẬT LÝ (PHYSICAL)

- Xác định các đặc tính vật lý của môi trường được sử dụng để truyền dữ liệu giữa các thiết bị. Ví dụ: mức điện áp, khoảng cách truyền tối đa, các đầu nối vật lý, thông số kỹ thuật cáp.
- Các bit kỹ thuật số được chuyển đổi thành tín hiệu điện (đối với kết nối có dây) hoặc tín hiệu vô tuyến (đối với kết nối không dây).
- Tất cả thông tin trong PHẦN 1 (THIẾT BỊ MẠNG) đều liên quan đến Lớp Vật lý.

---

### MÔ HÌNH OSI - PDU (Protocol Data Unit)

![image](https://github.com/psaumur/CCNA/assets/106411237/9b885a51-91cd-4fe6-b1be-e7fa7aa220b5)

PDU là Đơn vị Dữ liệu Giao thức. Mỗi bước của quy trình là một PDU.

| LỚP OSI # | TÊN PDU | GIAO THỨC DỮ LIỆU ĐƯỢC THÊM |
| --- | --- | --- |
| 7-5 | DATA (Dữ liệu) | Dữ liệu |
| 4 | SEGMENT (Phân đoạn) | Thêm Tiêu đề Lớp 4 (L4 Header) |
| 3 | PACKET (Gói tin) | Thêm Tiêu đề Lớp 3 (L3 Header) |
| 2 | FRAME (Khung tin) | Thêm Tiêu đề và Phần đuôi Lớp 2 |
| 1 | BIT | Truyền tải các số 0 và 1 |

<< L2 Trailer + DỮ LIỆU + L4 Header + L3 Header + L2 Header >>

---

### Bộ giao thức TCP/IP (TCP/IP Suite)

- Mô hình khái niệm và tập hợp các giao thức truyền thông được sử dụng trên Internet và các mạng khác.
- Được gọi là TCP/IP vì đó là hai trong số các giao thức nền tảng trong bộ này.
- Được phát triển bởi Bộ Quốc phòng Hoa Kỳ thông qua DARPA.
- Cấu trúc tương tự mô hình OSI, nhưng ít lớp hơn.
- ĐÂY là mô hình thực sự được sử dụng trong các mạng hiện đại.
- * Lưu ý: Mô hình OSI vẫn ảnh hưởng đến cách các kỹ sư mạng suy nghĩ và thảo luận về mạng.

![image](https://github.com/psaumur/CCNA/assets/106411237/e9593c06-46a3-4ff9-aa01-863e0aeb5df3)

---

### Tương tác giữa các lớp

![image](https://github.com/psaumur/CCNA/assets/106411237/372c45a0-bb3e-4342-af2b-79d3606384ec)

Tương tác giữa các lớp lân cận (Adjacent-Layer Interactions):

- Tương tác giữa các lớp khác nhau của mô hình OSI trên cùng một máy chủ.

Ví dụ:
Các Lớp 5-7 gửi Dữ liệu đến Lớp 4, lớp này sau đó thêm tiêu đề Lớp 4 (tạo thành một PHÂN ĐOẠN).

Tương tác cùng lớp (Same-Layer Interactions):

- Tương tác giữa cùng một Lớp trên các máy chủ khác nhau.
- Khái niệm tương tác cùng lớp cho phép bạn bỏ qua các lớp khác liên quan và chỉ tập trung vào các tương tác giữa một lớp duy nhất trên các thiết bị khác nhau.

Ví dụ:
Lớp Ứng dụng của máy chủ web YouTube và trình duyệt trên PC của bạn.
