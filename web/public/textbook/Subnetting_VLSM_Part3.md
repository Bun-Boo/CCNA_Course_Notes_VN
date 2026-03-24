# 15. CHIA MẠNG CON (VLSM) : PHẦN 3

Quá trình chia mạng con cho các Lớp A, B và C là giống hệt nhau.

CHIA MẠNG CON CHO LỚP A

Cho một mạng 10.0.0.0/8, bạn phải tạo ra 2000 mạng con để phân phối cho các doanh nghiệp khác nhau. Bạn phải sử dụng độ dài tiền tố (prefix length) nào?

2^10 = 1024 nên 2^11 = 2048. Chúng ta phải "mượn" 11 bit (từ trái sang phải) để có đủ số mạng con.

0000 1010 . 0000 0000 . 000 | 00000 . 0000 0000

8 bit + 8 bit + 3 = 19 bit

0000 1010 . 0000 0000 . 000 | 00000 . 0000 0000
1111 1111 . 1111 1111 . 111 | 00000 . 0000 0000

255.255.224.0 là mặt nạ mạng con (Subnet mask).

Câu trả lời là **/19** (/8 + /11 = /19).

Có bao nhiêu host trên mỗi mạng con? Có 13 bit dành cho host còn lại, vì vậy:

2^13 - 2 = 8190 host mỗi mạng con.

---

MẶT NẠ MẠNG CON CÓ ĐỘ DÀI BIẾN ĐỔI (VARIABLE-LENGTH SUBNET MASKS - VLSM)

- Cho đến nay, chúng ta đã thực hành chia mạng con bằng FLSM (Fixed-Length Subnet Masks - Mặt nạ mạng con có độ dài cố định).
- Điều này có nghĩa là tất cả các mạng con đều sử dụng chung một độ dài tiền tố (ví dụ: Chia một mạng Lớp C thành 4 mạng con đều sử dụng /26).
- VLSM (Variable-Length Subnet Masks) là quá trình tạo ra các mạng con với các kích thước khác nhau, nhằm mục đích sử dụng các địa chỉ mạng một cách hiệu quả hơn.
- VLSM phức tạp hơn FLSM một chút, NHƯNG nó sẽ dễ dàng nếu bạn tuân thủ đúng các bước.

![image](https://github.com/psaumur/CCNA/assets/106411237/30a08f93-796a-4fe9-854e-58af0bcbd69b)

![image](https://github.com/psaumur/CCNA/assets/106411237/ad7d7ac0-5e00-4662-8192-f7f9db86f1d9)

![image](https://github.com/psaumur/CCNA/assets/106411237/dc006342-4bd9-40 d4-b1c5-9ac7a670ed96)


Thứ tự ưu tiên (chia từ mạng lớn nhất đến bé nhất):
```
TOKYO LAN A (110 HOSTS)
TORONTO LAN B (45 HOSTS)
TORONTO LAN A (29 HOSTS)
TOKYO LAN B (8 HOSTS)
và
KẾT NỐI ĐIỂM ĐỐI ĐIỂM - POINT TO POINT (giữa hai ROUTER)
```
Mạng gốc: 192.168.1.0 / 24

1000 0000 . 1010 1000 . 0000 0001 | 0000 0000 (octet cuối là host = 254 host khả dụng)

Dịch sang TRÁI - chúng ta GẤP ĐÔI số lượng host.
Dịch sang PHẢI - chúng ta CHIA ĐÔI số lượng host.

TOKYO LAN A (chúng ta cần mượn 1 bit host, dịch sang PHẢI, để lại đủ cho 2^7 hoặc 128 địa chỉ. Quá đủ cho 110 host của TOKYO A).

Vậy là:
```
192.168.1.0/25 (Địa chỉ mạng)
1000 0000 . 1010 1000 . 0000 0001 . 0 | 000 0000

Chuyển các bit Host còn lại thành số 1:
0111 1111, ta được 127, vậy:

192.168.1.127/25 là Địa chỉ Quảng bá
```
---
TOKYO LAN A
```
ĐỊA CHỈ MẠNG: 192.168.1.0/25
ĐỊA CHỈ QUẢNG BÁ: 192.168.1.127/25
ĐỊA CHỈ ĐẦU TIÊN: 192.168.1.1/25
ĐỊA CHỈ CUỐI CÙNG: 192.168.1.126/25
TỔNG SỐ HOST KHẢ DỤNG: 126 (2^7 - 2)

Vì địa chỉ cuối của TOKYO LAN A là 192.168.1.127, nên mạng con tiếp theo (TORONTO LAN B) sẽ bắt đầu từ 192.168.1.128 (Địa chỉ mạng).
```
---
TORONTO LAN B
```
ĐỊA CHỈ MẠNG: 192.168.1.128 / 26
ĐỊA CHỈ QUẢNG BÁ: 192.168.1.191 / 26
ĐỊA CHỈ ĐẦU TIÊN: 192.168.1.129 / 26
ĐỊA CHỈ CUỐI CÙNG: 192.168.1.190 / 26
TỔNG SỐ HOST KHẢ DỤNG: 62 (2^6 - 2)
```
Chúng ta cần mượn bit để có đủ cho 45 host.

|128|64|32|16|8|4|2|1|
|---|--|--|--|-|-|-|-|
|x  |x | 0| 0|0|0|0|0|
```
1000 0000 . 1010 1000 . 0000 0001 . 10 | 00 0000
192 . 168 . 1 . 128

1000 0000 . 1010 1000 . 0000 0001 . 10 | 11 1111
192 . 168 . 1 . 191 (Địa chỉ Quảng bá)
```
---

TORONTO LAN A

Chúng ta cần mượn bit để có đủ cho 29 host.

|128|64|32|16|8|4|2|1|
|---|--|--|--|-|-|-|-|
|x  |x | x| 0|0|0|0|0|
```
1000 0000 . 1010 1000 . 0000 0001 . 110 | 0 0000
192.168.1.192 (Địa chỉ mạng)

1000 0000 . 1010 1000 . 0000 0001 . 110 | 1 1111
192.168.1.223 (Địa chỉ Quảng bá)

ĐỊA CHỈ MẠNG: 192.168.1.192 / 27
ĐỊA CHỈ QUẢNG BÁ: 192.168.1.223 / 27
ĐỊA CHỈ ĐẦU TIÊN: 192.168.1.193 / 27
ĐỊA CHỈ CUỐI CÙNG: 192.168.1.222 / 27
TỔNG SỐ HOST KHẢ DỤNG: 30 host (2^5 - 2)
```
---

TOKYO LAN B
Chúng ta cần mượn bit để có đủ cho 8 host (lưu ý số host khả dụng bằng x - 2).

|128|64|32|16|8|4|2|1|
|---|--|--|--|-|-|-|-|
|x  |x | x| x|0|0|0|0|
```
1000 0000 . 1010 1000 . 0000 0001 . 1110 | 0000
192.168.1.224 (Địa chỉ mạng)

1000 0000 . 1010 1000 . 0000 0001 . 1110 | 1111
192.168.1.239 (Địa chỉ Quảng bá)

ĐỊA CHỈ MẠNG: 192.168.1.224 / 28
ĐỊA CHỈ QUẢNG BÁ: 192.168.1.239 / 28
ĐỊA CHỈ ĐẦU TIÊN: 192.168.1.225 / 28
ĐỊA CHỈ CUỐI CÙNG: 192.168.1.238 / 28
TỔNG SỐ HOST KHẢ DỤNG: 14 host (2^4 - 2)
```
---

KẾT NỐI ĐIỂM ĐỐI ĐIỂM (POINT TO POINT CONNECTIONS)

Chúng ta cần mượn bit để có đủ cho 2 địa chỉ IP (dành cho 2 router).

|128|64|32|16|8|4|2|1|
|---|--|--|--|-|-|-|-|
|x  |x | x| x|x|x|0|0|
```
1000 0000 . 1010 1000 . 0000 0001 . 1111 00 | 00
192.168.1.240 (Địa chỉ mạng)

1000 0000 . 1010 1000 . 0000 0001 . 1111 00 | 11
192.168.1.243 (Địa chỉ Quảng bá)

ĐỊA CHỈ MẠNG: 192.168.1.240 / 30
ĐỊA CHỈ QUẢNG BÁ: 192.168.1.243 / 30
ĐỊA CHỈ ĐẦU TIÊN: 192.168.1.241 / 30
ĐỊA CHỈ CUỐI CÙNG: 192.168.1.242 / 30
TỔNG SỐ HOST KHẢ DỤNG: 2 host (2^2 - 2)
```
---

CÁC TRANG WEB THỰC HÀNH CHIA SUBNET THÊM:

[http://www.subnettingquestions.com](http://www.subnettingquestions.com/)
[http://subnetting.org](http://subnetting.org/)
[https://subnettingpractice.com](https://subnettingpractice.com/) *** Trang web được khuyên dùng ***
