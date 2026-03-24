# 36. CDP và LLDP (Giao thức Phát hiện Lớp 2)

GIỚI THIỆU VỀ CÁC GIAO THỨC PHÁT HIỆN LỚP 2

- GIAO THỨC PHÁT HIỆN LỚP 2, chẳng hạn như CDP và LLDP, chia sẻ thông tin VỚI các thiết bị láng giềng (được kết nối trực tiếp) và PHÁT HIỆN thông tin về chúng.

- CÁC THÔNG TIN ĐƯỢC CHIA SẺ bao gồm:
    - Tên máy (Hostname).
    - Địa chỉ IP.
    - Loại thiết bị.
    - vân vân.

- **CDP** là một Giao thức Độc quyền của Cisco.
- **LLDP** là một Giao thức Tiêu chuẩn Công nghiệp (IEEE 802.1AB).

- Bởi vì chúng CHIA SẺ THÔNG TIN về các THIẾT BỊ trong MẠNG, chúng có thể bị xem là một rủi ro bảo mật và thường KHÔNG được sử dụng. Việc quyết định có sử dụng chúng trong MẠNG hay không là tùy thuộc vào KỸ SƯ MẠNG / QUẢN TRỊ VIÊN.

![image](https://github.com/psaumur/CCNA/assets/106411237/65f39e9f-ae1a-42c6-8afb-5e79f939fe5d)

---

GIAO THỨC PHÁT HIỆN CỦA CISCO (CDP - CISCO DISCOVERY PROTOCOL)

- CDP là một giao thức độc quyền của Cisco.
- Nó được bật THEO MẶC ĐỊNH trên các thiết bị Cisco (router, switch, firewall, điện thoại IP, v.v.).

```
💡 Các thông điệp CDP được gửi định kỳ tới địa chỉ MAC Multicast 0100.0CCC.CCCC.
```

- Khi một THIẾT BỊ nhận được một thông điệp CDP, nó sẽ XỬ LÝ và HỦY BỎ thông điệp đó. Nó KHÔNG chuyển tiếp thông điệp đó tới các thiết bị khác.
- THEO MẶC ĐỊNH, các thông điệp CDP được gửi mỗi **60 giây** một lần.
- THEO MẶC ĐỊNH, thời gian duy trì (CDP hold-time) là **180 giây.** Nếu không nhận được thông điệp nào từ láng giềng trong vòng 180 giây, láng giềng đó sẽ bị XÓA khỏi Bảng Láng giềng CDP.
- Các thông điệp CDPv2 được gửi THEO MẶC ĐỊNH.

![image](https://github.com/psaumur/CCNA/assets/106411237/8a0552be-dbc7-4c7b-b011-e32dff75a57e)

![image](https://github.com/psaumur/CCNA/assets/106411237/26e180ec-da08-44d2-bb55-325fdc0c234f)

---

BẢNG LÁNG GIỀNG CDP (CDP NEIGHBOR TABLES)

![image](https://github.com/psaumur/CCNA/assets/106411237/00cd814e-0255-4fac-ac71-3e50054f813c)

“Device ID” = Các thiết bị nào đã được CDP PHÁT HIỆN.

“Local Interface” = Giao diện cục bộ nào của thiết bị đang kết nối với láng giềng.

“Holdtime” = Đồng hồ đếm ngược thời gian duy trì tính bằng giây (0 = thiết bị bị xóa khỏi bảng).

“Capabilities” = Đề cập đến bảng Mã Khả năng (nằm phía trên kết quả hiển thị).

“Platform” = Hiển thị MODEL của Thiết bị Láng giềng.

“Port ID” = Cổng của láng giềng mà thiết bị CỤC BỘ đang kết nối tới.

---

HIỂN THỊ KẾT QUẢ CHI TIẾT HƠN

![image](https://github.com/psaumur/CCNA/assets/106411237/cd4fbedb-c12f-4e1e-8582-8db16985121f)

“Version” = hiển thị phiên bản hệ điều hành Cisco IOS đang chạy trên thiết bị.

---

HIỂN THỊ MỘT MỤC LÁNG GIỀNG CDP CỤ THỂ

![image](https://github.com/psaumur/CCNA/assets/106411237/83ef9488-e82c-4453-ae6e-02575039d0f9)

---

CÁC LỆNH CẤU HÌNH CDP

![image](https://github.com/psaumur/CCNA/assets/106411237/393b2680-2304-4c8e-9180-88cc5fefbfd8)

- CDP được BẬT TOÀN CỤC, theo MẶC ĐỊNH.
- CDP cũng được BẬT trên mỗi GIAO DIỆN, theo MẶC ĐỊNH.
- Để BẬT / TẮT CDP toàn cục: `R1(config)# [no] cdp run`
- Để BẬT / TẮT CDP trên các giao diện cụ thể: `R1(config-if)# [no] cdp enable`
- Cấu hình bộ đếm thời gian CDP: `R1(config)# cdp time <giây>`
- Cấu hình thời gian duy trì CDP: `R1(config)# cdp holdtime <giây>`
- BẬT / TẮT CDPv2: `R1(config)# [no] cdp advertise-v2`

---

GIAO THỨC PHÁT HIỆN LIÊN KẾT DỮ LIỆU (LLDP - LINK LAYER DISCOVERY PROTOCOL)

- LLDP là một GIAO THỨC TIÊU CHUẨN CÔNG NGHIỆP (IEEE 802.1AB).
- Nó thường bị TẮT trên các thiết bị Cisco THEO MẶC ĐỊNH, vì vậy phải được BẬT thủ công.
- Một thiết bị có thể chạy cả CDP và LLDP cùng một lúc.

```
💡 Các thông điệp LLDP được gửi định kỳ tới địa chỉ MAC Multicast 0180.c200.000E.
```

- Khi một THIẾT BỊ nhận được một thông điệp LLDP, nó sẽ XỬ LÝ và HỦY BỎ thông điệp đó. Nó KHÔNG chuyển tiếp thông điệp đó tới CÁC THIẾT BỊ KHÁC.
- THEO MẶC ĐỊNH, các thông điệp LLDP được gửi mỗi **30 giây** một lần.
- THEO MẶC ĐỊNH, thời gian duy trì LLDP là **120 giây.**
- LLDP có thêm một bộ đếm thời gian gọi là ‘reinitialization delay’ (độ trễ tái khởi tạo).
    - Nếu LLDP được BẬT (Toàn cục hoặc trên một GIAO DIỆN), BỘ ĐẾM này sẽ TRÌ HOÃN việc khởi tạo thực sự của LLDP (**2 giây**, theo MẶC ĐỊNH).

---

CÁC LỆNH CẤU HÌNH LLDP

- LLDP thường bị TẮT TOÀN CỤC theo MẶC ĐỊNH.
- LLDP cũng bị TẮT trên mỗi GIAO DIỆN theo MẶC ĐỊNH.

- Để BẬT LLDP TOÀN CỤC: `R1(config)# lldp run`

- Để BẬT LLDP trên các GIAO DIỆN cụ thể (truyền đi): `R1(config-if)# lldp transmit`
- Để BẬT LLDP trên các GIAO DIỆN cụ thể (nhận về): `R1(config-if)# lldp receive`

BẠN CẦN BẬT CẢ HAI ĐỂ GỬI VÀ NHẬN (Trừ khi bạn chỉ muốn bật GỬI hoặc NHẬN các thông điệp LLDP).

- Cấu hình bộ đếm thời gian LLDP: `R1(config)# lldp timer <giây>`
- Cấu hình thời gian duy trì LLDP: `R1(config)# lldp holdtime <giây>`
- Cấu hình bộ đếm tái khởi tạo LLDP (reinit): `R1(config)# lldp reinit <giây>`

![image](https://github.com/psaumur/CCNA/assets/106411237/25afc5ad-4d82-4472-b282-31ed2a65eae7)

![image](https://github.com/psaumur/CCNA/assets/106411237/78fab926-9fda-4c83-91eb-eda4bf4ec005)

HIỂN THỊ TRẠNG THÁI LLDP

![image](https://github.com/psaumur/CCNA/assets/106411237/32b11d7b-4050-422e-afd4-bec23e8db3a1)

HIỂN THỊ TẤT CẢ CÁC LÁNG GIỀNG LLDP

![image](https://github.com/psaumur/CCNA/assets/106411237/85a46d24-5574-4400-bc03-6b0568294940)

HIỂN THỊ CHI TIẾT CÁC LÁNG GIỀNG LLDP

![image](https://github.com/psaumur/CCNA/assets/106411237/26751ca8-ed54-4e5c-9927-8c6eb0e2e3f7)

HIỂN THỊ MỘT MỤC THIẾT BỊ LLDP CỤ THỂ

![image](https://github.com/psaumur/CCNA/assets/106411237/b5332838-d112-4556-bee0-c3716a3d4f89)

![image](https://github.com/psaumur/CCNA/assets/106411237/2dd16e33-75a9-4e11-91aa-b507ed490e9b)
