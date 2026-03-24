# 41. SYSLOG

TỔNG QUAN VỀ SYSLOG

- SYSLOG là một GIAO THỨC TIÊU CHUẨN CÔNG NGHIỆP để ghi nhật ký thông báo (message logging).
- Trên CÁC THIẾT BỊ MẠNG, SYSLOG có thể được sử dụng để GHI LẠI CÁC SỰ KIỆN.
    - Thay đổi trạng thái GIAO DIỆN (UP / DOWN).
    - Thay đổi TRẠNG THÁI LÁNG GIỀNG OSPF (UP / DOWN).
    - Các lần Khởi động lại Hệ thống.
    - v.v…
- Các thông báo có thể được hiển thị trong CLI, được lưu vào bộ nhớ RAM của THIẾT BỊ hoặc được gửi tới một MÁY CHỦ SYSLOG bên ngoài.

![image](https://github.com/psaumur/CCNA/assets/106411237/44a405e5-6cb1-41e3-b408-470afcaccd7e)

- Nhật ký là thiết yếu khi xử lý các sự cố, kiểm tra nguyên nhân của các vụ việc, v.v.
- SYSLOG và SNMP đều được sử dụng để THEO DÕI và XỬ LÝ SỰ CỐ của CÁC THIẾT BỊ. Chúng bổ trợ cho nhau, nhưng chức năng của chúng là khác nhau.

---

ĐỊNH DẠNG THÔNG BÁO SYSLOG

`seq: time stamp: %facility-severity-MNEMONIC:description`

```
💡 HAI TRƯỜNG NÀY có thể có hoặc không được hiển thị, tùy thuộc vào cấu hình của THIẾT BỊ.
```

`seq` = Một SỐ THỨ TỰ cho biết thứ tự của các thông điệp.

`time stamp` = Một NHÃN THỜI GIAN cho biết thời điểm thông điệp được tạo ra.

`facility` = Một GIÁ TRỊ cho biết tiến trình nào trên THIẾT BỊ đã tạo ra thông điệp đó.

`severity` = Một CON SỐ cho biết mức độ nghiêm trọng của một sự kiện được ghi lại.

RFC chính thức cho các mức độ nghiêm trọng của SYSLOG:

```
💡 CÁC CẤP ĐỘ (LEVELS) và CÁC TỪ KHÓA (KEYWORDS) cần phải được HỌC THUỘC LÒNG cho kỳ thi CCNA.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/9ce46c98-a2b8-462b-ac6f-9bf13bfb3a99)

```
💡 Mẹo ghi nhớ (Dành cho tiếng Anh): 
(E)very (A)wesome (C)isco (E)ngineer (W)ill (N)eed (I)ce cream (D)aily
```

`MNEMONIC` = Một MÃ NGẮN GỌN cho thông điệp, cho biết điều gì đã xảy ra.

`description` = Thông tin chi tiết về SỰ KIỆN đang được báo cáo.

![image](https://github.com/psaumur/CCNA/assets/106411237/35413630-9194-4e63-8600-5847153e210e)

CÁC VỊ TRÍ LƯU TRỮ NHẬT KÝ SYSLOG

- **ĐƯỜNG CONSOLE (CONSOLE LINE)**
    - Các thông báo SYSLOG sẽ được hiển thị trong CLI khi được kết nối tới THIẾT BỊ qua cổng CONSOLE. Theo MẶC ĐỊNH, tất cả các thông báo (Cấp độ 0-7) đều được hiển thị.
- **BỘ ĐỆM (BUFFER)**
    - Các thông báo Syslog sẽ được lưu vào RAM. Theo mặc định, TẤT CẢ các thông báo (Cấp độ 0-7) đều được hiển thị (lưu trữ).
- **CÁC ĐƯỜNG VTY (VTY LINES)**
    - Các thông báo SYSLOG sẽ được hiển thị trong CLI khi được kết nối tới THIẾT BỊ qua Telnet/SSH. Bị tắt theo mặc định.

- **MÁY CHỦ BÊN NGOÀI (EXTERNAL SERVER)**
    - Bạn có thể cấu hình THIẾT BỊ để gửi các thông báo SYSLOG tới một máy chủ bên ngoài.

** CÁC MÁY CHỦ SYSLOG sẽ lắng nghe các thông điệp trên Cổng UDP 514 **

---

CẤU HÌNH SYSLOG

![image](https://github.com/psaumur/CCNA/assets/106411237/a5321bcf-d149-4a3d-82a2-197426cf484a)

`level` (cấp độ) hoạt động từ cấp độ đã chọn và đi ngược lên Cấp độ 0 (KHẨN CẤP - EMERGENCY).

`level` (số hiệu) hoặc `keyword` (từ khóa) từ Bảng Mức độ nghiêm trọng đều dùng được khi lựa chọn một cấp độ.

THEO DÕI TRÊN TERMINAL (TERMINAL MONITOR)

- Ngay cả khi `logging monitor level` được bật, theo mặc định các thông báo SYSLOG vẫn sẽ không được hiển thị khi kết nối qua Telnet hoặc SSH.
- Để các thông báo được hiển thị, bạn phải sử dụng câu lệnh sau:
    - `R1# terminal monitor`
- Câu lệnh này phải được sử dụng **mỗi khi bạn kết nối tới THIẾT BỊ qua Telnet hoặc SSH.**

GHI NHẬT KÝ ĐỒNG BỘ (LOGGING SYNCHRONOUS)

- Theo mặc định, các thông báo nhật ký hiển thị trong CLI khi bạn đang gõ một lệnh sẽ dẫn đến kết quả trông giống thế này:

![image](https://github.com/psaumur/CCNA/assets/106411237/bf0ed51a-c8b4-4c96-806a-ba90f829edd0)

- Để ngăn chặn điều này, bạn nên sử dụng `logging synchronous` trên *dòng (line)* tương ứng.

![image](https://github.com/psaumur/CCNA/assets/106411237/350b34e5-8c87-417a-9e8d-fee7d3e57814)

- Điều này sẽ khiến một dòng mới được in ra nếu việc gõ lệnh của bạn bị ngắt quãng bởi một thông báo.

![image](https://github.com/psaumur/CCNA/assets/106411237/09acecd5-b25b-4585-80da-950d69e284ad)

CÁC DỊCH VỤ NHÃN THỜI GIAN VÀ SỐ THỨ TỰ (SERVICE TIMESTAMPS VÀ SERVICE SEQUENCE-NUMBERS)

![image](https://github.com/psaumur/CCNA/assets/106411237/e1f9a979-eb27-47a7-af19-6496c74a4476)

---

SYSLOG so với SNMP

- SYSLOG và SNMP đều được sử dụng để THEO DÕI và XỬ LÝ SỰ CỐ của CÁC THIẾT BỊ. Chúng BỔ TRỢ cho nhau, nhưng CHỨC NĂNG của chúng là khác nhau.

- SYSLOG
    - Được sử dụng để GHI NHẬT KÝ THÔNG BÁO.
    - Các sự kiện xảy ra bên trong hệ thống được phân loại dựa trên TIẾN TRÌNH (FACILITY) / MỨC ĐỘ NGHIÊM TRỌNG (SEVERITY) và được GHI LẠI.
    - Được sử dụng để QUẢN LÝ, PHÂN TÍCH và XỬ LÝ SỰ CỐ CỦA HỆ THỐNG.
    - Các thông điệp được gửi từ CÁC THIẾT BỊ tới MÁY CHỦ.
        - MÁY CHỦ không thể chủ động lấy thông tin từ THIẾT BỊ (như lệnh ‘get’ của SNMP) hoặc thay đổi các biến số (như lệnh ‘set’ của SNMP).
- SNMP
    - Được sử dụng để truy xuất và sắp xếp thông tin về CÁC THIẾT BỊ được quản lý bằng SNMP.
        - ĐỊA CHỈ IP.
        - Trạng thái GIAO DIỆN hiện tại.
        - Nhiệt độ.
        - Sử dụng CPU.
        - v.v…
    - CÁC MÁY CHỦ SNMP có thể sử dụng lệnh `Get` để truy vấn CÁC MÁY KHÁCH và lệnh `Set` để THAY ĐỔI các biến số trên CÁC MÁY KHÁCH.
