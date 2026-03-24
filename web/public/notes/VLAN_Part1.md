# 16. MẠNG LAN ẢO (VLANS) : PHẦN 1

MẠNG LAN LÀ GÌ?

- Một mạng LAN là một **MIỀN QUẢNG BÁ (BROADCAST DOMAIN)** duy nhất, bao gồm tất cả các thiết bị trong miền quảng bá đó.

MIỀN QUẢNG BÁ (BROADCAST DOMAINS)

- Một MIỀN QUẢNG BÁ là một nhóm các thiết bị sẽ nhận được một **KHUNG TIN QUẢNG BÁ (BROADCAST FRAME)** (có địa chỉ MAC đích là : FFFF.FFFF.FFFF) được gửi bởi bất kỳ thành viên nào trong nhóm đó.

Hình ảnh của một mạng LAN với BỐN MIỀN QUẢNG BÁ (192.168.1.0 / 24):

![image](https://github.com/psaumur/CCNA/assets/106411237/de712483-e881-41f5-9525-576216186498)


Hiệu suất:

Nhiều lưu lượng QUẢNG BÁ không cần thiết có thể làm giảm hiệu suất mạng.

![image](https://github.com/psaumur/CCNA/assets/106411237/a807fdc5-27b9-4735-8b8d-51bdc0c91a8c)


Việc tràn ngập các KHUNG TIN QUẢNG BÁ khiến tất cả các mạng con của chúng ta bị quá tải bởi lưu lượng không cần thiết.

![image](https://github.com/psaumur/CCNA/assets/106411237/fcd03904-a193-4423-8940-09be1df1bd2c)


Bảo mật:

Ngay cả trong cùng một văn phòng, bạn vẫn muốn giới hạn ai có quyền truy cập vào cái gì. Bạn có thể áp dụng các chính sách bảo mật trên bộ định tuyến (ROUTER) hoặc tường lửa (FIREWALL). Vì đây là một mạng LAN duy nhất, các máy tính (PC) có thể kết nối trực tiếp với nhau mà không cần đi qua bộ định tuyến. Do đó, ngay cả khi bạn cấu hình các chính sách bảo mật trên router, chúng cũng sẽ không có tác dụng.

![image](https://github.com/psaumur/CCNA/assets/106411237/7bd562fc-7dff-4692-81d7-c026b007df8f)

---

VLAN LÀ GÌ?

VLAN (Virtual Local Area Network - Mạng LAN ảo):

- Giúp tách biệt các máy chủ đầu cuối (end-hosts) một cách logic ở LỚP 2.
- Được cấu hình trên các SWITCH Lớp 2 theo từng giao diện (per-interface).
- Bất kỳ MÁY CHỦ ĐẦU CUỐI nào kết nối vào giao diện đó sẽ là một phần của VLAN đó.

---

MỤC ĐÍCH CỦA VLAN:

Hiệu suất mạng:

- Giảm lưu lượng QUẢNG BÁ không cần thiết, giúp ngăn chặn tắc nghẽn mạng và cải thiện hiệu suất mạng.

Bảo mật mạng:

- Việc giới hạn lưu lượng QUẢNG BÁ và UNICAST chưa biết giúp cải thiện bảo mật mạng, vì các thông điệp sẽ không bị nhận bởi các thiết bị nằm ngoài VLAN đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/fae2f1ed-ffc3-4d91-adf7-16a67c2dc5aa)


Các SWITCH không chuyển tiếp lưu lượng trực tiếp giữa các MÁY CHỦ trong các VLAN khác nhau.

![image](https://github.com/psaumur/CCNA/assets/106411237/2e5834e9-9096-46eb-bb96-ba8459338107)


![image](https://github.com/psaumur/CCNA/assets/106411237/3046f727-fad4-421e-85ef-63a73e109f83)


Gửi các gói tin sang VLAN khác (Phải được định tuyến qua R1):

![image](https://github.com/psaumur/CCNA/assets/106411237/7090ef6d-ce8c-454f-b80d-f6dfd82745c8)


![image](https://github.com/psaumur/CCNA/assets/106411237/b7237602-5b46-4c31-bd75-2e50e0fb1017)

---

CÁCH CẤU HÌNH VLAN TRÊN SWITCH CISCO

#show vlan brief

![image](https://github.com/psaumur/CCNA/assets/106411237/13ce8382-6aea-484e-9580-d91c98189522)


Lệnh này hiển thị các VLAN hiện có trên SWITCH và những GIAO DIỆN nào thuộc về mỗi VLAN.

Các VLAN 1 (MẶC ĐỊNH), 1002-1005 tồn tại sẵn theo mặc định và **không thể bị xóa (tổng cộng 5 VLAN này)**.

---

CÁCH GÁN CÁC GIAO DIỆN VÀO MỘT VLAN

![image](https://github.com/psaumur/CCNA/assets/106411237/ed31145d-7949-4c68-b88a-97716beaf074)


1) Sử dụng lệnh “interface range” để chọn tất cả các giao diện cùng một lúc.

2) Sử dụng lệnh “switchport mode access” để thiết lập giao diện đó là một **CỔNG TRUY CẬP (ACCESS PORT)**.

---

CỔNG TRUY CẬP (ACCESS PORT) LÀ GÌ?

- Một CỔNG TRUY CẬP là một cổng trên switch thuộc về một VLAN duy nhất, và thường kết nối với các thiết bị đầu cuối như PC.

Các cổng trên switch mang theo lưu lượng của nhiều VLAN được gọi là **“CỔNG TRUNG KẾ” (TRUNK PORTS)** (thông tin chi tiết về TRUNK sẽ có ở chương sau).

3) Sử dụng lệnh “switchport access vlan <số>” để gán một VLAN cho một CỔNG.

![image](https://github.com/psaumur/CCNA/assets/106411237/b1bdb937-3707-496f-bc49-445df354d16b)


Sử dụng lênh “#vlan <số>” để vào **Chế độ Cấu hình** cho một VLAN nhất định (lệnh này cũng có thể dùng để tạo mới một VLAN).

Sử dụng lệnh “#name <tên>” để cấu hình TÊN cho VLAN của bạn.

Để kiểm tra cấu hình VLAN, sử dụng lệnh “#show vlan brief”.

![image](https://github.com/psaumur/CCNA/assets/106411237/2f7d26d8-9b2a-43a3-b213-fec4f984a309)


Kiểm tra VLAN 10:

Thực hiện lệnh Ping từ PC1 sử dụng địa chỉ 255.255.255.255 (FFFF:FFFF:FFFF) sẽ chỉ đẩy tràn các gói tin quảng bá tới R1 và các máy chủ thuộc VLAN 10.

![image](https://github.com/psaumur/CCNA/assets/106411237/5c64e485-f492-4436-9c1d-3a1ab20fbe05)
