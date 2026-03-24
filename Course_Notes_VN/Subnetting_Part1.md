# 13. CHIA MẠNG CON (SUBNETTING) : PHẦN 1

![image](https://github.com/psaumur/CCNA/assets/106411237/a475e909-59b8-4615-a0b9-8a3c1fbdc313)


TUY NHIÊN, chỉ có các địa chỉ Lớp A, B, C mới có thể được gán cho một thiết bị dưới dạng địa chỉ IP.

LỚP 		ĐỘ DÀI TIỀN TỐ (PREFIX LENGTH)

A 			/8
B 			/16
C 			/24

![image](https://github.com/psaumur/CCNA/assets/106411237/f0836136-c4a9-475b-b6c2-d1c550b8cfdd)


Tổ chức IANA (Internet Assigned Numbers Authority) cấp phát các địa chỉ/mạng IPv4 cho các công ty dựa trên quy mô của họ.

Vấn đề của việc cấp phát theo lớp (**'CLASSFUL'**) là nó dẫn đến sự lãng phí địa chỉ IP.

Ví dụ: Một công ty chỉ cần 5000 địa chỉ nhưng lại được cấp một IP LỚP B, dẫn đến hơn 60.000 địa chỉ không được sử dụng.

---

Tổ chức IETF (Internet Engineering Task Force) đã giới thiệu CIDR vào năm 1993 để thay thế hệ thống địa chỉ "phân lớp" (classful).

CIDR (Classless Inter-Domain Routing - Định tuyến liên miền không phân lớp) đã loại bỏ các yêu cầu về quy mô của các Lớp A, B và C.

- Điều này cho phép các mạng lớn được chia thành các mạng nhỏ hơn, giúp tăng hiệu quả sử dụng.
- Những mạng nhỏ hơn này được gọi là "MẠNG CON" (**SUB-NETWORKS** hoặc **SUBNETS**).

---

CÓ BAO NHIÊU ĐỊA CHỈ KHẢ DỤNG TRONG MỖI MẠNG?

GHI NHỚ:

**2^n - 2** = Số địa chỉ khả dụng
n = số lượng bit dành cho phần host

THỰC HÀNH CIDR!

203.0.113.0/25

/25 có nghĩa là phần bit Mạng con (Subnetwork) là 25 bit.

203 . 0 . 113 . 0 được viết dưới dạng nhị phân là:

1100 1011 . 0000 0000 . 0111 0001 . 0 | 000 0000

(Tiền tố mạng con là 25 bit đầu tiên)

Chuyển tất cả các bit mạng thành số 1, chúng ta nhận được MẶT NẠ MẠNG CON (SUBNET MASK) cho /25:

1111 1111 . 1111 1111 . 1111 1111 . 1 | 000 0000

tương đương với:

255.255.255.128 (vì octet cuối cùng là 1000 0000 = 128 trong hệ nhị phân)

VẬY - dựa trên định nghĩa trước đó về ĐỊA CHỈ KHẢ DỤNG, số lượng host cho mạng 203.0.113.0 /25 là:

2^(7 bit) hay (128) - 2 = 126 host.

---

Còn /28 thì sao?

203 . 0 . 113 . 0 được viết dưới dạng nhị phân là:

1100 1011 . 0000 0000 . 0111 0001 . 0000 | 0000

(Tiền tố mạng con là 28 bit đầu tiên)

Chuyển tất cả các bit mạng thành số 1, ta được MẶT NẠ MẠNG CON cho /28:

1111 1111 . 1111 1111 . 1111 1111 . 1111 | 0000

tương đương với:

255.255.255.240 (vì octet cuối cùng là 1111 0000 = 128+64+32+16 = 240)

MẶT NẠ MẠNG CON cho /28 là 255.255.255.240.
Mạng này có 16 địa chỉ trong mỗi nhóm (2^4 bit = 16) - trừ đi 2 IP dành riêng cho Mạng và Quảng bá.

---

BẢNG GHI NHỚ CHIA SUBNET (SUBNETTING CHEATSHEET):

| Kích thước nhóm | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mặt nạ mạng con | 128 | 192 | 224 | 240 | 248 | 252 | 254 | 255 |
| CIDR | /25 | /26 | /27 | /28 | /29 | /30 | /31 | /32 |
| Octet thứ 3 | /17 | /18 | /19 | /20 | /21 | /22 | /23 | /24 |
| Octet thứ 2 | /9 | /10 | /11 | /12 | /13 | /14 | /15 | /16 |
| Octet thứ 1 | /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 |

---

1. Sử dụng một chỉ số CIDR/Mặt nạ được cho để tìm cột trên Bảng ghi nhớ.
    
    a) CIDR và Mặt nạ mạng con tương ứng với nhau.
    
    b) Xác định Kích thước nhóm (Group Size).
    
    c) Tăng dần theo Kích thước nhóm cho đến khi bạn VƯỢT QUA chỉ số IP mục tiêu (không được nhỏ hơn hoặc bằng!).
    
    d) Nếu việc cộng thêm Kích thước nhóm vượt quá 256, hãy tăng giá trị của Octet PHÍA TRƯỚC nó lên 1 đơn vị và Octet hiện tại trở về 0 (NẾU CẦN THIẾT).
    
    Ví dụ: 10.2.2.256 → 10.2.3.0

1. Số NGAY TRƯỚC IP mục tiêu là NETWORK ID (Địa chỉ mạng).
2. Số NGAY SAU IP mục tiêu là NEXT NETWORK (Mạng tiếp theo).
3. Địa chỉ IP ngay TRƯỚC Mạng tiếp theo là BROADCAST (Địa chỉ quảng bá).
4. Địa chỉ IP ngay SAU Network ID là First Host (Host đầu tiên).
5. Địa chỉ IP ngay TRƯỚC địa chỉ Broadcast là Last Host (Host cuối cùng).
6. Kích thước nhóm là tổng số lượng địa chỉ IP.
    - Đừng quên trừ đi 2 để có con số KHẢ DỤNG.

---

Giải bài toán CIDR/Subnet cho các IP ở Octet thứ 3:

Mọi số bên TRÁI của Octet thứ 3 đều là 255. Mọi số bên PHẢI của Octet thứ 3 đều là 0.

Ví dụ: 10.4.77.188 / 19 → Subnet : 255.255.224.0

Bạn sử dụng quy trình GIỐNG như trên, ngoại trừ việc khi tìm IP mục tiêu, bạn sử dụng Octet thứ 3 làm mục tiêu của mình.

Ví dụ: 10.4.77.188 /19 → Subnet : 255.255.224.0

256 - 224 = 32 vì vậy...

Sử dụng bước nhảy 32, chúng ta đi qua các khối địa chỉ 0, 32, 64, và 96.
Vì 77 nằm giữa 64 và 96, đó chính là dải chúng ta cần tìm.

Mạng: 10.4.64.0 (Bắt đầu / Khối đầu tiên)

Tiếp theo: 10.4.96.0 (Khối thứ hai)
...

Số lượng địa chỉ IP là: 2^(32-CIDR). Trong ví dụ này là 2^13 = 8192.

Giải cho Octet thứ 2 và thứ 1 cũng tương tự như trên, hãy lưu ý cột Octet được DÙNG để kiểm tra số Mục tiêu của một địa chỉ cho trước.

---
Phương pháp thay thế cho "Bảng ghi nhớ"

![image](https://github.com/user-attachments/assets/d1e103b8-142a-44cc-8ab4-f5337268c9de)

1. Tìm "octet ma thuật" (magic octet) nơi địa chỉ IP/Tiền tố đó nằm, dựa trên biểu đồ bit được hiển thị.
2. Đếm số bit mạng (từ trái sang phải) trong octet đó và đếm tương tự trên biểu đồ khe bit màu đỏ. Đây sẽ là kích thước nhóm địa chỉ của bạn.
3. Lấy 256 trừ đi số đó để tìm chỉ số Mặt nạ mạng con được sử dụng trong "octet ma thuật" (mọi octet bên TRÁI của "octet ma thuật" sẽ là 255, mọi thứ bên PHẢI octet đó sẽ là 0).
4. Chia giá trị IP trong "octet ma thuật" cho kích thước nhóm địa chỉ.
  - Nếu có số dư, nhân phần nguyên với kích thước nhóm địa chỉ - đó chính là Địa chỉ mạng cơ bản của bạn, với mọi octet bên phải nó đều bằng 0.
  - Nếu KHÔNG có số dư, chính giá trị IP trong "octet ma thuật" ĐÓ LÀ Địa chỉ mạng cơ bản, với mọi octet bên phải nó đều bằng 0.
5. Chỉ số Quảng bá cơ bản sẽ là Địa chỉ mạng cơ bản + Kích thước nhóm - 1 trong "octet ma thuật", mọi giá trị bên phải octet đó sẽ là 255.
6. Số lượng mạng con là (2 lũy thừa số bit mạng trong "octet ma thuật"). ** 2^8 hay 256 tương đương với 0 **.
7. Tổng số Host khả dụng là (2 lũy thừa (32 - Độ dài tiền tố) - 2).
---
Ví dụ 1:
```
154 . 219 . 154 . 180 /20

Octet thứ ba = Magic

Kích thước nhóm địa chỉ = 16 (Số bit mạng trong octet này là 4)
256 - 16 = 240, do đó Mặt nạ mạng con là 255.255.240.0

Chia giá trị octet thứ 3 / Kích thước nhóm (16)
154 / 16 = 9 (dư 10)
9 * 16 = 144 (Số mạng cơ bản)

Mạng : 154 . 219 . 144 . 0

Chỉ số quảng bá cơ bản = 144 + 16 - 1 = 159

Quảng bá : 154 . 219 . 159 . 255

Mạng con = 2^4 bit mạng = 16
Tổng số Host = (2^(32 - 20)) - 2 = 4094
```
---
Ví dụ 2:
```
84 . 75 . 21 . 6 /10

Octet thứ hai = Magic

Kích thước nhóm địa chỉ = 64
256 - 64 = 192

Subnet = 255.192.0.0

75 / 64 = 1 (dư 11)
1 * 64 = 64 (Số mạng cơ bản)

Mạng : 84.64.0.0

Chỉ số quảng bá cơ bản = 64 + 64 - 1 = 127

Quảng bá : 84.127.255.255

Mạng con : 2^2 = 4 Mạng con
Tổng số Host = (2^(32-10)) - 2 = 4.194.302
```
