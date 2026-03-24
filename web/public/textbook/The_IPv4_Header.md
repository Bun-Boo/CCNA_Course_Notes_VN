# 10. TIÊU ĐỀ IPv4 (THE IPv4 HEADER)

TIÊU ĐỀ GIAO THỨC INTERNET PHIÊN BẢN 4 (IPv4 HEADER)

TIÊU ĐỀ (HEADER) được sử dụng ở LỚP 3 để giúp gửi dữ liệu giữa các thiết bị trên các mạng riêng biệt, ngay cả ở những nơi khác nhau trên thế giới thông qua Internet.

Quá trình này được gọi là **ĐỊNH TUYẾN (ROUTING)**.

TIÊU ĐỀ IPv4 được sử dụng để **ĐÓNG GÓI (ENCAPSULATE)** một Phân đoạn (Segment) TCP hoặc UDP.

Ôn tập lại:

![image](https://github.com/psaumur/CCNA/assets/106411237/64906e3c-0bae-4c2c-96ca-4e6850f3844a)


---

CÁC TRƯỜNG TRONG TIÊU ĐỀ IPv4

![image](https://github.com/psaumur/CCNA/assets/106411237/f2667488-2769-4e62-bee7-eddbf9e00058)


| TRƯỜNG | SỐ BIT |
| --- | --- |
| PHIÊN BẢN (VERSION) | 4 |
| ĐỘ DÀI TIÊU ĐỀ (IHL) | 4 |
| DSCP | 6 |
| ECN | 2 |
| TỔNG ĐỘ DÀI (TOTAL LENGTH) | 16 |
| MÃ ĐỊNH DANH (IDENTIFICATION) | 16 |
| CÁC CỜ (FLAGS) | 3 |
| ĐỘ LỆCH PHÂN ĐOẠN (FRAGMENT OFFSET) | 13 |
| THỜI GIAN SỐNG (TIME TO LIVE) | 8 |
| GIAO THỨC (PROTOCOL) | 8 |
| TỔNG KIỂM TIÊU ĐỀ (HEADER CHECKSUM) | 16 |
| ĐỊA CHỈ NGUỒN (SOURCE ADDRESS) | 32 |
| ĐỊA CHỈ ĐÍCH (DESTINATION ADDRESS) | 32 |
| TÙY CHỌN (OPTIONS) | Tối đa 320 |

---

PHIÊN BẢN (VERSION):

- Độ dài là 4 bit.
- Xác định phiên bản IP được sử dụng (IPv4 hoặc IPv6).
    - IPv4 = 0100 trong hệ Nhị phân (Thập phân là 4).
    - IPv6 = 0110 trong hệ Nhị phân (Thập phân là 6).

---

ĐỘ DÀI TIÊU ĐỀ INTERNET (IHL):

- Độ dài là 4 bit.
- Trường cuối cùng của Tiêu đề IPv4 (Options) có độ dài thay đổi, vì vậy trường này là cần thiết để chỉ ra tổng độ dài của tiêu đề.
- Xác định độ dài của tiêu đề theo các BỘ 4-BYTE (4-BYTE INCREMENTS).
- Giá trị TỐI THIỂU là 5 (5 * 4 byte = 20 byte) - Khi trường OPTIONS trống.
- Giá trị TỐI ĐA là 15 (15 * 4 byte = 60 byte).

ĐỘ DÀI TIÊU ĐỀ IPv4 TỐI THIỂU = 20 Byte!
ĐỘ DÀI TIÊU ĐỀ IPv4 TỐI ĐA = 60 Byte!

---

DSCP (Differentiated Services Code Point):

- Độ dài là 6 bit.
- Được sử dụng cho QoS (Quality of Service - Chất lượng dịch vụ).
- Được sử dụng để ưu tiên các dữ liệu nhạy cảm với độ trễ (như thoại trực tuyến, video, v.v.).

---

ECN (Explicit Congestion Notification):

- Độ dài là 2 bit.
- Cung cấp thông báo đầu-cuối (giữa hai điểm cuối) về tắc nghẽn mạng MÀ KHÔNG cần loại bỏ gói tin.
- Đây là tính năng tùy chọn yêu cầu cả hai điểm cuối cũng như cơ sở hạ tầng mạng bên dưới hỗ trợ.

---

TỔNG ĐỘ DÀI (TOTAL LENGTH):

- Độ dài là 16 bit.
- Chỉ ra TỔNG độ dài của gói tin (Tiêu đề L3 + Phân đoạn L4).
- Được đo bằng byte (không phải bộ 4 byte như IHL).
- Giá trị tối thiểu là 20 Byte (Tiêu đề IPv4 KHÔNG có dữ liệu đóng gói).
- Giá trị tối đa là 65,535 (giá trị 16-bit LỚN NHẤT) = 2^16.

---

MÃ ĐỊNH DANH (IDENTIFICATION):

- Độ dài là 16 bit.
- Nếu một gói tin bị phân mảnh do quá lớn, trường này được sử dụng để xác định mảnh đó thuộc về gói tin nào.
- Tất cả các mảnh của cùng một gói tin sẽ có tiêu đề IPv4 riêng với cùng một giá trị trong trường này.
- Các gói tin bị phân mảnh nếu lớn hơn MTU (Maximum Transmission Unit - Đơn vị truyền tải tối đa).
- MTU thường là 1500 byte (kích thước tối đa của một khung Ethernet).
- Các mảnh sẽ được lắp ghép lại bởi máy chủ nhận.

---

CÁC CỜ (FLAGS):

- Độ dài là 3 bit.
- Được sử dụng để kiểm soát/xác định các mảnh phân đoạn.
- Bit 0: Dự phòng, luôn đặt là 0.
- Bit 1: Không phân mảnh (DF bit - Don't Fragment), được sử dụng để chỉ ra rằng gói tin không nên bị phân mảnh.
- Bit 2: Còn mảnh tiếp theo (MF bit - More Fragments), được đặt là 1 nếu vẫn còn các mảnh khác của gói tin, đặt là 0 cho mảnh cuối cùng hoặc khi KHÔNG có phân mảnh.

---

ĐỘ LỆCH PHÂN ĐOẠN (FRAGMENT OFFSET):

- Độ dài là 13 bit.
- Được sử dụng để chỉ ra vị trí của mảnh đó trong gói tin IP gốc chưa phân mảnh.
- Cho phép các gói tin bị phân mảnh được lắp ghép lại ngay cả khi các mảnh đến không theo thứ tự.

---

THỜI GIAN SỐNG (TIME TO LIVE - TTL):

- Độ dài là 8 bit.
- Một router sẽ loại bỏ gói tin nếu có chỉ số TTL bằng 0.
- Được sử dụng để ngăn chặn các vòng lặp vô tận (infinite loops).
- Ban đầu được thiết kế để chỉ ra thời gian sống tối đa của gói tin tính bằng giây.
- Trong thực tế, nó chỉ ra 'số bước nhảy' (hop count): mỗi khi gói tin đi qua một router, router đó sẽ giảm TTL đi 1.
- TTL mặc định được khuyến nghị là 64.

---

GIAO THỨC (PROTOCOL):

- Độ dài là 8 bit.
- Chỉ ra giao thức của PDU Lớp 4 được đóng gói bên trong.
- Giá trị là 1: ICMP
- Giá trị là 6: TCP
- Giá trị là 17: UDP
- Giá trị là 89: OSPF (Giao thức định tuyến động)
- Danh sách các số hiệu giao thức có trên Wikipedia: List of IP Protocol Numbers.

---

TỔNG KIỂM TIÊU ĐỀ (HEADER CHECKSUM):

- Độ dài là 16 bit.
- Một giá trị tổng kiểm được tính toán để kiểm tra lỗi trong tiêu đề IPv4.
- Khi một router nhận được một gói tin, nó sẽ tính toán lại tổng kiểm của tiêu đề và so sánh với giá trị trong trường này.
- Nếu chúng không khớp nhau, router sẽ loại bỏ gói tin đó.
- Chỉ được sử dụng để kiểm tra LỖI trong Tiêu đề IPv4.
- IP dựa vào giao thức được đóng gói bên trong để phát hiện lỗi trong phần dữ liệu.
- Cả TCP và UDP đều có các trường tổng kiểm riêng để phát hiện lỗi trong dữ liệu được đóng gói.

---

NGUỒN VÀ ĐÍCH (SOURCE and DESTINATION):

- Độ dài là 32 bit cho mỗi trường.
- IP NGUỒN = Địa chỉ IPv4 của người gửi gói tin.
- IP ĐÍCH = Địa chỉ IPv4 của người nhận gói tin theo dự định.

---

TÙY CHỌN (OPTIONS):

- Độ dài từ 0-320 bit.
- Tùy chọn / Hiếm khi được sử dụng.
- Nếu trường IHL lớn hơn 5, điều đó có nghĩa là có sự xuất hiện của các Tùy chọn.
