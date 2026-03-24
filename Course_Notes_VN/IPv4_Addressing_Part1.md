# 7. ĐỊA CHỈ IPv4 : PHẦN 1

MÔ HÌNH OSI - LỚP MẠNG (Layer 3)

- Cung cấp kết nối giữa các máy chủ đầu cuối trên các mạng KHÁC NHAU (ví dụ: bên ngoài mạng LAN).
- Cung cấp địa chỉ logic (địa chỉ IP).
- Cung cấp việc lựa chọn đường đi giữa NGUỒN và ĐÍCH.
- **ROUTER** hoạt động ở LỚP 3.

ĐỊNH TUYẾN (ROUTING)

SWITCH (Thiết bị Lớp 2) không chia tách các mạng khác nhau. Chúng kết nối và MỞ RỘNG các mạng trong cùng một mạng LAN.

Tuy nhiên, bằng cách thêm một ROUTER vào giữa hai SWITCH, bạn tạo ra một sự CHIA TÁCH trong mạng; mỗi bên có địa chỉ IP mạng riêng.

Ví dụ:
192.168.1.0/24 (255.255.255.0)
192.168.2.0/24 (255.255.255.0)

![image](https://github.com/psaumur/CCNA/assets/106411237/3d414956-cb53-46f6-b386-3fc9bba11802)


ROUTER có các địa chỉ IP duy nhất cho MỖI giao diện kết nối của nó, tùy thuộc vào vị trí của chúng.

Địa chỉ IP cho giao diện G0/0 của ROUTER là:
192.168.1.254/24

Địa chỉ IP cho giao diện G0/1 của ROUTER là:
192.168.2.254/24

![image](https://github.com/psaumur/CCNA/assets/106411237/6e593774-4113-4493-89bb-4d394cb29e1d)


Địa chỉ IP phụ thuộc vào địa chỉ mạng của mạng LAN mà nó kết nối tới.

Phần MẠNG (NETWORK portion) của một địa chỉ IP nhất định sẽ giống nhau đối với tất cả các HOST trên một mạng LAN đó.

Ví dụ:

192.168.1.100
192.168.1.105
192.168.1.205

Tất cả các địa chỉ này đều thuộc cùng một mạng vì PHẦN MẠNG trong địa chỉ IP của chúng là giống nhau (192.168.1), trong khi phần HOST (100, 105, 205) là DUY NHẤT!

Khi một thông điệp QUẢNG BÁ (BROADCAST) chạm tới ROUTER, nó sẽ KHÔNG tiếp tục đi tiếp. Nó chỉ nằm trong phạm vi mạng LAN CỤC BỘ (Switch/Hosts).

---

TIÊU ĐỀ IPv4 (IPv4 HEADER)

![image](https://github.com/psaumur/CCNA/assets/106411237/4f4bd7da-1876-4000-8229-be4b8792a86d)


IP (Internet Protocol) là giao thức Lớp 3 chính được sử dụng ngày nay. Phiên bản 4 (IPv4) là phiên bản được sử dụng trong hầu hết các mạng.

Tiêu đề IPv4 chứa NHIỀU trường hơn so với tiêu đề ETHERNET.

Tiêu đề IPv4 chứa các trường ĐỊA CHỈ IP NGUỒN và ĐỊA CHỈ IP ĐÍCH.

TRƯỜNG này có độ dài 32 bit (4 byte) (từ 0-31).

192.168.1.254 (mỗi số thập phân đại diện cho 8 bit).

Chuyển sang hệ Nhị phân:

11000000 . 10101000 . 00000001 . 11111110

MỖI nhóm 8 bit này được gọi là một **OCTET (Bộ tám)**.

Vì hệ Nhị phân rất khó đọc đối với con người, chúng ta sử dụng định dạng Thập phân có dấu chấm (Dotted Decimal).

---

ÔN TẬP VỀ HỆ THẬP PHÂN VÀ THẬP LỤC PHÂN

![image](https://github.com/psaumur/CCNA/assets/106411237/e45f0ea9-a705-463b-bb9b-d81034cf130d)


Hệ Thập phân (Cơ số 10)

Ví dụ: 3294 = (3 * 1000) + (2 * 100) + (9 * 10) + (4 * 1)

Hệ Thập lục phân (Cơ số 16)

Ví dụ: 3294, sẽ là CDE
```
C (C * 256 / 12 * 256 = 3072) // vị trí hàng 256
D (D * 16 / D=13 nên 16*13 = 208) // vị trí hàng 16
E (E * 1 / E = 14)	// vị trí hàng 1
```
Cộng tất cả lại, chúng ta được 3294.

---

Vậy, làm thế nào để chuyển đổi một SỐ NHỊ PHÂN sang SỐ THẬP PHÂN?
Tương tự như cách chúng ta chuyển sang hệ Thập lục phân.

10001111

Ta có:
```
1 * 128 = 128
1 * 8 = 8
1 * 4 = 4
1 * 2 = 2
1 * 1 = 1
```
Cộng tất cả lại: 128 + 8 + 4 + 2 + 1 = 143.

Kết quả là 143.

---

Ví dụ khác:

01110110
```
1 * 64 = 64
1 * 32 = 32
1 * 16 = 16
1 * 4 = 4
1 * 2 = 2
```
Cộng tất cả lại: 64 + 32 + 16 + 4 + 2 = 118.

Kết quả là 118.

---

Ví dụ khác:

11101100
```
1 * 128 = 128
1 * 64 = 64
1 * 32 = 32
1 * 8 = 8
1 * 4 = 4
```
Cộng tất cả lại: 128 + 64 + 32 + 8 + 4 = 236.

Kết quả là 236.

---

Vậy, làm thế nào để chuyển đổi một SỐ THẬP PHÂN sang SỐ NHỊ PHÂN?

Lấy số 221.

Chúng ta có thể lấy số đó và bắt đầu trừ từ TRÁI sang PHẢI theo các vị trí Nhị phân.

221
```
221 - 128 = 93 nên ta đặt số 1 vào vị trí "128"
```
10000000
```
93 - 64 = 29 nên ta đặt tiếp số 1 vào vị trí "64"

29 - 32 không thực hiện được nên ta đặt số 0 vào vị trí "32"

29 - 16 = 13 nên ta đặt số 1 vào vị trí "16"

13 - 8 = 5 nên ta đặt số 1 vào vị trí "8"

5 - 4 = 1 nên ta đặt số 1 vào vị trí "4"

1 - 2 không thực hiện được nên ta đặt số 0 vào vị trí "2"

1 - 1 thực hiện được nên ta đặt số 1 vào vị trí "1"
```
Điều này cho phép chúng ta viết ra số NHỊ PHÂN của 221.

Đó là: 11011101

---

Ví dụ khác: 127
```
127 - 128 không thực hiện được nên đặt 0 vào "128"
127 - 64 thực hiện được nên đặt 1 vào "64"
63 - 32 thực hiện được nên đặt 1 vào "32"
31 - 16 thực hiện được nên đặt 1 vào "16"
15 - 8 thực hiện được nên đặt 1 vào "8"
7 - 4 thực hiện được nên đặt 1 vào "4"
3 - 2 thực hiện được nên đặt 1 vào "2"
1 thực hiện được nên đặt 1 vào "1"
```
Vì vậy 127 trong hệ NHỊ PHÂN là 0111 1111.

---

Ví dụ khác: 207

Cách khác, bạn có thể lấy số '255' (là 11111111) trừ đi số đó.
Phần dư sau đó có thể được sử dụng để "tìm" vị trí của các số 0 trong dãy nhị phân.

255 - 207 = 48 do đó ...

1 1 0 0 1 1 1 1 (32 + 16 = 48)

11001111 là câu trả lời đúng.

---

ĐỊA CHỈ IPv4

Bây giờ chúng ta đã biết địa chỉ IP là kết quả chuyển đổi từ một chuỗi các SỐ NHỊ PHÂN sang hệ Thập phân có dấu chấm (chia thành 4 OCTET) như sau:

192.168.1.254/24

Nhưng ký hiệu /24 có nghĩa là gì?

![image](https://github.com/psaumur/CCNA/assets/106411237/808fa7fa-0239-42fa-9706-79db87ea167e)


Nó có nghĩa là 24 BIT ĐẦU TIÊN của địa chỉ này đại diện cho phần MẠNG (NETWORK portion).

192.168.1 là PHẦN MẠNG (3 OCTET đầu tiên).

.254 là PHẦN HOST (OCTET cuối cùng).

![image](https://github.com/psaumur/CCNA/assets/106411237/2e7c64e1-5689-486a-bba0-9623f5e8de7d)


---

CHUYỂN ĐỔI số NHỊ PHÂN sau thành địa chỉ IPv4:

10011010010011100110111100100000

10011010 . 01001110 . 01101111 . 00100000

Các Octet:

1. 128 + 16 + 8 + 2 = 154
2. 64 + 8 + 4 + 2 = 78
3. 64 + 32 + 8 + 4 + 2 + 1 = 111
4. 32

Địa chỉ IPv4 là: 154.78.111.32/16

154.78 là PHẦN MẠNG
111.32 là PHẦN HOST

Ví dụ khác:

00001100100000001111101100010111

00001100 . 10000000 . 11111011 . 00010111

Các Octet:

1. 8 + 4 = 12
2. 128
3. 255 - 4 = 251
4. 16 + 4 + 2 + 1 = 23

Địa chỉ IPv4 là: 12.128.251.23/8

12 là PHẦN MẠNG
128.251.23 là PHẦN HOST

---

CÁC LỚP ĐỊA CHỈ IPv4 (IPv4 ADDRESS CLASSES)

Địa chỉ IPv4 được chia thành 5 'lớp' khác nhau.
Lớp của một địa chỉ IPv4 được xác định bởi OCTET ĐẦU TIÊN của địa chỉ đó.

LỚP 		OCTET ĐẦU TIÊN (Hệ nhị phân) 	DẢI SỐ CỦA OCTET ĐẦU TIÊN

A 			 0xxxxxxx 				0-126 + 127 'loopback'
B 			 10xxxxxx 				128-191
C 			 110xxxxx 				192-223
D 			 1110xxxx 				224-239
E 			 1111xxxx 				240-255

Từ bảng trên, nếu OCTET ĐẦU TIÊN BẮT ĐẦU bằng số 0, dải số thập phân có thể có của octet đầu tiên là từ 0-127.

Các LỚP mà chúng ta sẽ tập trung vào là LỚP A đến LỚP C.

![image](https://github.com/psaumur/CCNA/assets/106411237/7cc286bf-ce76-4eee-af52-062a63dac2b4)


LỚP D được dành riêng cho các địa chỉ 'MULTICAST' (Đa hướng).

LỚP E được dành riêng cho các địa chỉ 'EXPERIMENTAL' (Thực nghiệm).

---

LỚP A THƯỜNG có dải từ 1-126? TẠI SAO?

Bởi vì 127 thường được dành riêng cho 'địa chỉ loopback' (địa chỉ tự vòng).

Từ 127.0.0.0 đến 127.255.255.255 được sử dụng để kiểm tra mạng.

- Được sử dụng để kiểm tra 'Chồng giao thức mạng' (mô hình OSI & TCP/IP) trên chính thiết bị cục bộ.

---

![image](https://github.com/psaumur/CCNA/assets/106411237/25f7db1a-f934-4c73-9926-66bb207fd292)


ĐỘ DÀI TIỀN TỐ (PREFIX LENGTH) là ĐỘ DÀI của PHẦN MẠNG trong địa chỉ.

Từ các ví dụ trên:

12.128.251.23/8 là địa chỉ LỚP A.
154.78.111.32/16 là địa chỉ LỚP B.
192.168.1.254/24 là địa chỉ LỚP C.

Bởi vì phần MẠNG của LỚP A rất ngắn, điều đó có nghĩa là có RẤT NHIỀU địa chỉ Host tiềm năng.

Bởi vì phần MẠNG của LỚP C rất dài, điều đó có nghĩa là có ít địa chỉ Host tiềm năng hơn.

---

MẶT NẠ MẠNG (NETMASK)

![image](https://github.com/psaumur/CCNA/assets/106411237/874c022f-9b8c-4862-a495-597682b014a4)


Một NETMASK được viết giống như một địa chỉ IP Thập phân có dấu chấm.

LỚP A: /8 = 255.0.0.0

LỚP B: / 16 = 255.255.0.0

LỚP C: /24 = 255.255.255.0

---

ĐỊA CHỈ MẠNG (NETWORK ADDRESSES)

![image](https://github.com/psaumur/CCNA/assets/106411237/12178b46-2604-468b-a11c-2a94087b023d)


Nếu PHẦN HOST của một ĐỊA CHỈ IP TOÀN LÀ số 0, điều đó có nghĩa đó là ĐỊA CHỈ MẠNG = mã định danh của chính mạng đó.

Ví dụ: 192.168.1.0/24 = ĐÂY là một ĐỊA CHỈ MẠNG.

Một ĐỊA CHỈ MẠNG không thể được gán cho một HOST.
Một ĐỊA CHỈ MẠNG là ĐỊA CHỈ ĐẦU TIÊN.

![image](https://github.com/psaumur/CCNA/assets/106411237/53eafb43-2a6f-422c-af19-866946d78efa)


Nếu PHẦN HOST của một ĐỊA CHỈ IP TOÀN LÀ số 1, điều đó có nghĩa đó là ĐỊA CHỈ QUẢNG BÁ (BROADCAST ADDRESS) cho mạng đó.

Một ĐỊA CHỈ QUẢNG BÁ không thể được gán cho một HOST.

IP ĐÍCH : 192.168.1.255 (Địa chỉ IP Quảng bá)
MAC ĐÍCH : FFFF.FFFF.FFFF (Địa chỉ MAC Quảng bá)

Do có hai địa chỉ 'dành riêng', dải ĐỊA CHỈ HOST KHẢ DỤNG là từ 1 đến 254.
