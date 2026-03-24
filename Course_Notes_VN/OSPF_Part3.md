# 28. OSPF : PHẦN 3 (IGP: TRẠNG THÁI LIÊN KẾT)

CÁC GIAO DIỆN LẶP (LOOPBACK INTERFACES)

- Một GIAO DIỆN LẶP (LOOPBACK INTERFACE) là một giao diện ảo bên trong ROUTER.
- Nó LUÔN LUÔN ở trạng thái UP/UP - trừ khi bạn tắt nó đi một cách thủ công.
- Nó KHÔNG phụ thuộc vào một GIAO DIỆN VẬT LÝ nào.
- Vì vậy, nó cung cấp một ĐỊA CHỈ IP nhất quán có thể được sử dụng để TRUY CẬP / ĐỊNH DANH một ROUTER.

![image](https://github.com/psaumur/CCNA/assets/106411237/697e7d43-b428-4fe3-a270-5fc1c9ad13d0)

---

CÁC LOẠI CẤU TRÚC MẠNG OSPF (OSPF NETWORK TYPES)

- “LOẠI CẤU TRÚC MẠNG” (NETWORK TYPE) OSPF đề cập đến CÁC LOẠI kết nối giữa các láng giềng OSPF (Ethernet, v.v.).

- Có BA LOẠI CẤU TRÚC MẠNG OSPF CHÍNH:

- QUẢNG BÁ (BROADCAST):
    - Được kích hoạt theo MẶC ĐỊNH trên các giao diện **ETHERNET** và **FDDI** (Fiber Distributed Data Interfaces).

- ĐIỂM TỚI ĐIỂM (POINT TO POINT):
    - Được kích hoạt theo MẶC ĐỊNH trên các giao diện **PPP** (Point-to-Point) và **HDLC** (High-Level Data Link Control).

- KHÔNG QUẢNG BÁ (NON-BROADCAST):
    - Được kích hoạt theo MẶC ĐỊNH trên các giao diện **FRAME RELAY** và **X.25**.

```
💡 Kỳ thi CCNA tập trung vào các loại QUẢNG BÁ và ĐIỂM TỚI ĐIỂM.
```

---

LOẠI CẤU TRÚC MẠNG QUẢNG BÁ OSPF (OSPF BROADCAST NETWORK TYPE)

![image](https://github.com/psaumur/CCNA/assets/106411237/8f99053d-3501-4d1d-86a2-f859c62c160d)

- Được kích hoạt trên các giao diện ETHERNET và FDDI theo MẶC ĐỊNH.
- Các ROUTER *tự động phát hiện* láng giềng bằng cách GỬI / LẮNG NGHE các thông điệp “Hello” OSPF sử dụng địa chỉ multicast 224.0.0.5.
- Một **DR (BỘ ĐỊNH TUYẾN CHỈ ĐỊNH - DESIGNATED ROUTER)** và **BDR (BỘ ĐỊNH TUYẾN CHỈ ĐỊNH DỰ PHÒNG - BACKUP DESIGNATED ROUTER)** phải được bầu chọn trên mỗi mạng con (chỉ bầu chọn DR nếu không có láng giềng OSPF nào, ví dụ: GIAO DIỆN G1/0 của R1).
- Các ROUTER không phải là DR hoặc BDR sẽ trở thành một **DROther**.

![image](https://github.com/psaumur/CCNA/assets/106411237/1ba5b6e1-dd4a-4277-8f33-f806e21302bc)

Thứ tự ưu tiên bầu chọn DR / BDR:

1) ƯU TIÊN GIAO DIỆN OSPF (OSPF INTERFACE PRIORITY) cao nhất.

2) ĐỊNH DANH ROUTER OSPF (OSPF ROUTER ID) cao nhất.

“Hạng Nhất” sẽ trở thành DR cho MẠNG CON đó.

“Hạng Nhì” trở thành BDR.

```
💡 ƯU TIÊN GIAO DIỆN OSPF MẶC ĐỊNH là “1” trên TẤT CẢ CÁC GIAO DIỆN!
```

Lệnh để thay đổi ĐỘ ƯU TIÊN OSPF của một giao diện là:

```
💡 R2(config-if)# ip ospf priority <số độ ưu tiên>
```

![image](https://github.com/psaumur/CCNA/assets/106411237/cd98b06f-3730-4b2d-8dfe-a6387fdb66a1)

```
💡 NẾU ĐỘ ƯU TIÊN OSPF được đặt thành “0”, ROUTER đó KHÔNG THỂ làm DR / BDR cho MẠNG CON đó!
```

Việc BẦU CHỌN DR / BDR là “không chiếm quyền” (non-preemptive).

Một khi DR / BDR đã được chọn, chúng sẽ giữ nguyên vai trò của mình cho đến khi OSPF bị:

- Khởi động lại (Reset).
- Giao diện bị lỗi.
- Bị tắt đi (shut down).
- v.v.

![image](https://github.com/psaumur/CCNA/assets/106411237/e59e6217-0404-476d-9 bcf-49e82c380b84)

![image](https://github.com/psaumur/CCNA/assets/106411237/82eb1f11-4aed-456b-b2b1-1679cae06743)

```
💡 Trong LOẠI CẤU TRÚC MẠNG QUẢNG BÁ, các ROUTER sẽ chỉ thiết lập quan hệ kề hiệp đầy đủ (FULL OSPF ADJACENCY) với DR và BDR của ĐOẠN MẠNG đó!
```

Do đó, các ROUTER chỉ trao đổi các LSA với DR và BDR.

Các DROther sẽ KHÔNG trao đổi các LSA với nhau.

TẤT CẢ CÁC ROUTER vẫn sẽ có cùng một bản LSDB giống nhau nhưng việc này làm giảm lượng LSA tràn ngập trong MẠNG.

```
💡 Các thông điệp gửi tới DR / BDR được MULTICAST tới địa chỉ 224.0.0.6.
```

DR và BDR sẽ thiết lập QUAN HỆ KỀ HIỆP ĐẦY ĐỦ (FULL ADJACENCY) với TẤT CẢ ROUTER trong MẠNG CON đó.

DROthers sẽ chỉ thiết lập QUAN HỆ KỀ HIỆP ĐẦY ĐỦ với duy nhất DR / BDR!

![image](https://github.com/psaumur/CCNA/assets/106411237/61e1c230-3926-40ae-917a-55fcf76caf64)

---

LOẠI CẤU TRÚC MẠNG ĐIỂM TỚI ĐIỂM OSPF (OSPF POINT-TO-POINT NETWORK TYPE)

![image](https://github.com/psaumur/CCNA/assets/106411237/51d7d486-a810-4a69-8be2-804f667fca03)

- Được KÍCH HOẠT trên các giao diện **SERIAL** (Nối tiếp) sử dụng các loại đóng gói **PPP** và **HDLC** theo MẶC ĐỊNH.
- Các ROUTER tự động phát hiện láng giềng bằng cách GỬI / LẮNG NGHE các thông điệp “Hello” OSPF sử dụng địa chỉ multicast 224.0.0.5.
- DR và BDR KHÔNG được bầu chọn.
- Các kiểu ĐÓNG GÓI này được sử dụng cho các kết nối “Điểm tới Điểm” (Point-To-Point).
    - Do đó, việc bầu chọn một DR và DBR là không cần thiết.
    - HAI ROUTER sẽ thiết lập một QUAN HỆ KỀ HIỆP ĐẦY ĐỦ (FULL ADJACENCY) với nhau.

---

(BÀI ĐỌC THÊM)

GIAO DIỆN NỐI TIẾP (SERIAL INTERFACES)

![image](https://github.com/psaumur/CCNA/assets/106411237/02f6f3a8-dcbb-46cd-bb2e-47ceb84d10cc)

- Một đầu của KẾT NỐI NỐI TIẾP đóng vai trò là DCE (Data Communications Equipment - Thiết bị truyền dẫn dữ liệu).
- Đầu CÒN LẠI đóng vai trò là DTE (Data Terminal Equipment - Thiết bị đầu cuối dữ liệu).
- CHỈ CÓ đầu DCE mới cần chỉ định *tốc độ đồng bộ* (clock rate - tốc độ) của kết nối.

CÁC GIAO DIỆN ETHERNET sử dụng lệnh “speed” để cấu hình tốc độ hoạt động.

CÁC GIAO DIỆN NỐI TIẾP sử dụng lệnh “clock rate”.

![image](https://github.com/psaumur/CCNA/assets/106411237/c32af4a3-105c-451a-9641-0f7fc26e7 f42)

Nếu bạn thay đổi kiểu ĐÓNG GÓI (ENCAPSULATION), nó phải TRÙNG KHỚP ở CẢ HAI ĐẦU, nếu không GIAO DIỆN sẽ bị ngắt (down).

![image](https://github.com/psaumur/CCNA/assets/106411237/8a448ef2-96f2-4371-bef1-520572ba5224)

R1 và R2 dùng chung CÙNG MỘT Kiểu Đóng gói.

![image](https://github.com/psaumur/CCNA/assets/106411237/6f934097-30fb-4605-935d-08a29e53a476)


TÓM TẮT VỀ GIAO DIỆN NỐI TIẾP (SERIAL INTERFACES SUMMARY)

- Kiểu đóng gói MẶC ĐỊNH là HDLC.
- Bạn có thể cấu hình kiểu đóng gói PPP bằng lệnh:
    
    ```
    💡 R1(config-if)# encapsulation ppp
    ```
    
- Một bên là DCE, bên kia là DTE.
- Xác định bên nào là DCE / DTE:
    
    ```
    💡 R1# show controllers interface-id
    ```
    
- Bạn phải cấu hình GIÁ TRỊ CLOCK RATE ở phía đầu DCE:
    
    ```
    💡 R1(config-if)# clock rate bits-per-second
    ```
    

---

![image](https://github.com/psaumur/CCNA/assets/106411237/bc5a756e-c65d-4585-ad3f-c0e29682c0eb)

![image](https://github.com/psaumur/CCNA/assets/106411237/232c8658-d129-49f4-9a37-76139ebe857e)

- Bạn có thể cấu hình LOẠI CẤU TRÚC MẠNG OSPF trên một GIAO DIỆN bằng:

```
💡 R1(config-if)# ip ospf network <loại cấu trúc mạng>
```

Ví dụ, nếu HAI ROUTER được kết nối trực tiếp bằng một liên kết ETHERNET, thì không cần thiết phải có một DR / DBR. Bạn có thể cấu hình loại mạng POINT-TO-POINT trong trường hợp này.

LƯU Ý: Không phải tất cả các LOẠI CẤU TRÚC MẠNG đều hoạt động trên TẤT CẢ CÁC KIỂU LIÊN KẾT (ví dụ: một liên kết nối tiếp không thể sử dụng loại mạng QUẢNG BÁ - BROADCAST).

![image](https://github.com/psaumur/CCNA/assets/106411237/8688e7ef-d166-4433-9f65-b918917 f385f)

```
💡 Các bộ đếm thời gian mặc định của loại mạng KHÔNG QUẢNG BÁ (NON-BROADCAST): Hello 30, Dead 120.
```

---

CÁC YÊU CẦU ĐỂ THIẾT LẬP LÁNG GIỀNG / QUAN HỆ KỀ HIỆP OSPF

1) SỐ HIỆU VÙNG (AREA NUMBER) PHẢI TRÙNG KHỚP.

2) CÁC GIAO DIỆN phải nằm trong CÙNG MỘT MẠNG CON (SUBNET).

3) TIẾN TRÌNH OSPF không được ở trong tình trạng **ĐANG TẮT (SHUTDOWN)**.

![image](https://github.com/psaumur/CCNA/assets/106411237/80b626ac-f368-4d86-85f4-dc80e3be5259)

4) ĐỊNH DANH ROUTER OSPF (OSPF ROUTER ID) phải là duy nhất.

![image](https://github.com/psaumur/CCNA/assets/106411237/8f089c68-96e9-4cbf-a9c0-c93f74de4888)

5) Các bộ đếm HELLO và DEAD phải TRÙNG KHỚP.

6) Các cài đặt XÁC THỰC (AUTHENTICATION) phải TRÙNG KHỚP.

![image](https://github.com/psaumur/CCNA/assets/106411237/06cab926-a458-4978-b754-b2253ee74762)

*** CÁC YÊU CẦU ĐẶC BIỆT *** 

7) Cài đặt IP MTU phải TRÙNG KHỚP.

- IP MTU: Kích thước tối đa của một Gói tin IP có thể được gửi từ một GIAO DIỆN.
- Nếu các cài đặt KHÔNG trùng khớp, vẫn có thể trở thành Hàng xóm OSPF nhưng OSPF SẼ KHÔNG hoạt động bình thường.

8) LOẠI CẤU TRÚC MẠNG OSPF phải trùng khớp.

- sẽ có vẻ như vẫn đang hoạt động nhưng LÁNG GIỀNG sẽ không xuất hiện trong thông tin ĐỊNH TUYẾN (ROUTING).

---

CÁC LOẠI OSPF LSA (OSPF LSA TYPES)

- Bản LSDB OSPF được tạo thành từ các LSA.
- Có 11 loại LSA nhưng chỉ có 3 loại bạn nên biết để thi CCNA:
    - Loại 1 (Router LSA)
    - Loại 2 (Network LSA)
    - Loại 5 (AS External LSA)

LOẠI 1 (Router LSA)

- Mọi ROUTER OSPF đều tạo ra loại LSA này.
- Nó xác định ROUTER bằng cách sử dụng ĐỊNH DANH ROUTER (ROUTER ID) của nó.
- Nó cũng liệt kê CÁC MẠNG được gắn vào CÁC GIAO DIỆN đã kích hoạt OSPF của ROUTER đó.

LOẠI 2 (Network LSA)

- Được tạo ra bởi DR của MỖI mạng “đa truy nhập” (multi-access) (ví dụ: loại mạng QUẢNG BÁ - BROADCAST).
- Liệt kê các ROUTER được kết nối với mạng đa truy nhập đó.

LOẠI 5 (AS-External LSA)

- Được tạo ra bởi các ASBR để mô tả CÁC TUYẾN ĐƯỜNG tới CÁC ĐÍCH bên ngoài AS (Miền OSPF).
