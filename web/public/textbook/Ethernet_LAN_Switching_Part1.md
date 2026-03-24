# 5. CHUYỂN MẠCH MẠNG LAN ETHERNET : PHẦN 1

![image](https://github.com/psaumur/CCNA/assets/106411237/a40e81d9-c008-4fb4-8580-2eaf63003e63)

![image](https://github.com/psaumur/CCNA/assets/106411237/2db46525-98b8-4211-aeb3-efc34bd84222)


MẠNG LAN (LAN's)

- Mạng LAN là một mạng được giới hạn trong một khu vực tương đối nhỏ.
- Các Router được sử dụng để kết nối các mạng LAN riêng biệt.

![image](https://github.com/psaumur/CCNA/assets/106411237/2a4de9d4-3408-49b9-9492-42b7eb56fe27)


Một KHUNG TIN ETHERNET (ETHERNET FRAME) trông như sau:

![image](https://github.com/psaumur/CCNA/assets/106411237/ad579917-f9a0-4cd8-be25-351ecbfc87af)


Phần đuôi Ethernet --- GÓI TIN --- Tiêu đề Ethernet

Tiêu đề Ethernet (Ethernet Header) chứa 5 trường:

Preamble -- SFD -- Đích (Destination) -- Nguồn (Source) -- Loại (Type)
7 byte   -- 1 byte -- 6 byte       -- 6 byte     -- 2 byte

---

TIỀN MÃ (PREAMBLE):

- Độ dài: 7 byte (56 bit)
- Các bit 1 và 0 xen kẽ nhau: 10101010 * 7 lần
- Cho phép các thiết bị đồng bộ hóa xung nhịp bộ nhận của chúng.

SFD: ‘Start Frame Delimiter’ (Mã giới hạn bắt đầu khung tin)

- Độ dài: 1 byte (8 bit)
- 10101011
- Đánh dấu sự kết thúc của PREAMBLE và bắt đầu của phần còn lại của khung tin.

---

ĐÍCH (DESTINATION) VÀ NGUỒN (SOURCE)

- Địa chỉ Lớp 2.
- Chỉ định các thiết bị gửi / nhận khung tin.
- MAC = ’Media Access Control’ (Điều khiển truy cập môi trường).
- Là địa chỉ dài 6 byte (48-bit) của thiết bị vật lý.

---

LOẠI / ĐỘ DÀI (TYPE / LENGTH)

- Trường dài 2 byte (16-bit).
- Giá trị từ **1500 trở xuống** trong trường này biểu thị ĐỘ DÀI của gói tin được đóng gói (tính bằng byte).
- Giá trị từ **1536 trở lên** biểu thị LOẠI của gói tin được đóng gói (độ dài sẽ được xác định bằng các phương pháp khác).
- IPv4 = 0x0800 (hệ thập lục phân) = 2048 trong hệ thập phân.
- IPv6 = 0x86DD (hệ thập lục phân) = 34525 trong hệ thập phân.
- Giao thức Lớp 3 được sử dụng trong Gói tin đã đóng gói, hầu như luôn là Giao thức Internet (IP) phiên bản 4 hoặc phiên bản 6.

---

PHẦN ĐUÔI ETHERNET (ETHERNET TRAILER) chứa:

FCS: FRAME CHECK SEQUENCE (Chuỗi kiểm tra khung tin)

- Độ dài 4 byte (32 bit).
- Phát hiện dữ liệu bị hỏng bằng cách chạy thuật toán 'CRC' trên dữ liệu nhận được.
- CRC = "Cyclic Redundancy Check" (Kiểm tra vòng dư luận).

---

Tổng cộng, KHUNG TIN ETHERNET (Header + Trailer) = 26 byte.

![image](https://github.com/psaumur/CCNA/assets/106411237/c8c1a143-0675-4aa4-83bc-6031d10cc0b8)


---

ĐỊA CHỈ MAC (Dài 48 bit)

- Địa chỉ vật lý dài 6 byte (48 bit) được gán cho thiết bị khi nó được sản xuất.
- Còn được gọi là 'Địa chỉ được nạp sẵn' - Burned-In Address (BIA).
- Là duy nhất trên toàn cầu.
- 3 byte đầu tiên là OUI (Organizationally Unique Identifier - Mã định danh duy nhất của tổ chức), mã này được gán cho công ty sản xuất thiết bị.
- 3 byte cuối cùng là duy nhất cho chính thiết bị đó.
- Được viết dưới dạng 12 ký tự thập lục phân (hexadecimal).

Ví dụ:

E8:BA:70 // 11:28:74
OUI      // ID duy nhất của thiết bị

HỆ THẬP LỤC PHÂN (HEXADECIMAL)

![image](https://github.com/psaumur/CCNA/assets/106411237/65a5e84a-b8db-46f5-b288-518139e99453)


TÊN GIAO DIỆN (INTERFACE NAMES)

F0/1, F0/2, F0/3... Chữ F là viết tắt của "Fast Ethernet" hoặc các giao diện tốc độ 100 Mbps.

---

BẢNG ĐỊA CHỈ MAC (MAC ADDRESS TABLE)

Mỗi Switch lưu trữ một BẢNG ĐỊA CHỈ MAC ĐƯỢC HỌC CÁCH ĐỘNG, sử dụng ĐỊA CHỈ MAC NGUỒN của các khung tin mà nó nhận được.

![image](https://github.com/psaumur/CCNA/assets/106411237/582421a9-6351-4817-bfe1-c2153520920c)


Khi một Switch không biết ĐỊA CHỈ MAC ĐÍCH của một khung tin (GỌI LÀ KHUNG TIN UNICAST CHƯA BIẾT - UNKNOWN UNICAST FRAME), nó buộc phải **CHUYỂN TIẾP TRÀN (FLOOD)** khung tin đó - tức là gửi khung tin ra TẤT CẢ các giao diện của nó, ngoại trừ giao diện mà nó vừa nhận được gói tin.

Khi một Khung tin Unicast ĐÃ BIẾT (Địa chỉ MAC được nhận dạng bởi một mục trong BẢNG ĐỊA CHỈ MAC), khung tin sẽ được CHUYỂN TIẾP (FORWARD) như bình thường.

![image](https://github.com/psaumur/CCNA/assets/106411237/ff731ab3-fad2-4e10-9fa7-ce583a6a0bb2)

- Lưu ý: Các địa chỉ MAC động sẽ bị xóa khỏi BẢNG ĐỊA CHỈ MAC sau mỗi 5 phút nếu không có hoạt động.
