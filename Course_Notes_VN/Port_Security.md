# 49. BẢO MẬT CỔNG (PORT SECURITY)

GIỚI THIỆU VỀ BẢO MẬT CỔNG

- BẢO MẬT CỔNG (PORT SECURITY) là một tính năng bảo mật của các SWITCH Cisco.
- Nó cho phép bạn kiểm soát (những) ĐỊA CHỈ MAC NGUỒN NÀO được phép đi vào CỔNG SWITCH (SWITCHPORT).
- Nếu một ĐỊA CHỈ MAC NGUỒN không được phép đi vào CỔNG, một HÀNH ĐỘNG sẽ được THỰC THI.
    - Hành động MẶC ĐỊNH là đưa GIAO DIỆN vào trạng thái “err-disabled” (bị vô hiệu hóa do lỗi).

![image](https://github.com/psaumur/CCNA/assets/106411237/92f4ce9b-8fb4-4d57-b200-f41c7d5236ee)

- Khi bạn kích hoạt BẢO MẬT CỔNG trên một GIAO DIỆN với các cài đặt MẶC ĐỊNH, một ĐỊA CHỈ MAC sẽ được phép.
    - Bạn có thể cấu hình ĐỊA CHỈ MAC ĐƯỢC PHÉP một cách thủ công.
    - Nếu bạn KHÔNG cấu hình thủ công, SWITCH sẽ cho phép ĐỊA CHỈ MAC NGUỒN đầu tiên đi vào GIAO DIỆN đó.
- Bạn có thể THAY ĐỔI số lượng ĐỊA CHỈ MAC TỐI ĐA (MAXIMUM) được phép.
- Có thể kết hợp giữa CÁC ĐỊA CHỈ MAC được cấu hình thủ công và CÁCH ĐỊA CHỈ ĐƯỢC HỌC MỘT CÁCH ĐỘNG (DYNAMICALLY LEARNED).

![image](https://github.com/psaumur/CCNA/assets/106411237/0b6e8053-6819-4e02-ae28-4699a5c9c92d)

---

TẠI SAO NÊN SỬ DỤNG BẢO MẬT CỔNG?

- BẢO MẬT CỔNG cho phép các quản trị viên MẠNG kiểm soát xem THIẾT BỊ nào được phép truy cập vào MẠNG.
- Tuy nhiên, GIẢ MẠO ĐỊA CHỈ MAC (MAC ADDRESS SPOOFING) là một công việc đơn giản.
    - Rất dễ để cấu hình một THIẾT BỊ gửi đi CÁC KHUNG TIN (FRAMES) với một ĐỊA CHỈ MAC NGUỒN khác.
- Thay vì chỉ định thủ công các ĐỊA CHỈ MAC được phép trên mỗi CỔNG, khả năng giới hạn số lượng ĐỊA CHỈ MAC được phép trên một GIAO DIỆN của BẢO MẬT CỔNG tỏ ra hữu ích hơn.
- Hãy nghĩ về cuộc TẤN CÔNG LÀM CẠN KIỆT DHCP (DHCP STARVATION ATTACK) (trong video LAB NGÀY 48).
    - KẺ TẤN CÔNG giả mạo hàng ngàn địa chỉ MAC giả.
    - MÁY CHỦ DHCP cấp các ĐỊA CHỈ IP cho các địa chỉ MAC giả này, làm cạn kiệt NHÓM ĐỊA CHỈ (POOL) DHCP.
    - Bảng địa chỉ MAC của SWITCH cũng có thể bị đầy do một cuộc tấn công như vậy.
- Việc giới hạn SỐ LƯỢNG (NUMBER) các địa chỉ MAC trên một GIAO DIỆN có thể bảo vệ chống lại những cuộc tấn công đó.

KÍCH HOẠT BẢO MẬT CỔNG

![image](https://github.com/psaumur/CCNA/assets/106411237/b00765c2-f3a1-45be-8ed4-0a8dab68e43e)

Lệnh `show port-security interface`

![image](https://github.com/psaumur/CCNA/assets/106411237/787959b1-ffad-451d-ac65-11ea9a99db2d)

![image](https://github.com/psaumur/CCNA/assets/106411237/9a6dd39d-130e-411b-be46-ecfe93420813)

![image](https://github.com/psaumur/CCNA/assets/106411237/f071f447-a6ef-4ee6-8a40-2bde94030993)

KÍCH HOẠT LẠI MỘT GIAO DIỆN (THỦ CÔNG)

![image](https://github.com/psaumur/CCNA/assets/106411237/706736d4-ee7c-42b2-b424-6cc30eb50905)

KÍCH HOẠT LẠI MỘT GIAO DIỆN (TỰ ĐỘNG PHỤC HỒI LỖI - ERR-DISABLE RECOVERY)

![image](https://github.com/psaumur/CCNA/assets/106411237/6eb0d808-a989-4261-9b39-1ac9e1bf1460)

![image](https://github.com/psaumur/CCNA/assets/106411237/41d54ef0-7391-473e-9b51-87f44b9e3f3c)

---

CÁC CHẾ ĐỘ VI PHẠM (VIOLATION MODES)

- Có BA CHẾ ĐỘ VI PHẠM KHÁC NHAU xác định xem SWITCH sẽ làm gì nếu một KHUNG TIN không được phép đi vào một GIAO DIỆN được cấu hình BẢO MẬT CỔNG.
    - SHUTDOWN (Tắt cổng)
        - Thực tế là tắt CỔNG bằng cách đưa nó vào trạng thái ‘err-disabled’.
        - Tạo ra một thông báo SYSLOG và / hoặc SNMP khi GIAO DIỆN bị ‘vô hiệu hóa’.
        - Bộ đếm VI PHẠM (VIOLATION counter) được đặt thành 1 khi GIAO DIỆN bị ‘vô hiệu hóa’.
    - RESTRICT (Giới hạn)
        - SWITCH loại bỏ lưu lượng từ các ĐỊA CHỈ MAC không được phép.
        - GIAO DIỆN KHÔNG bị vô hiệu hóa.
        - Tạo ra một thông báo SYSLOG và / hoặc SNMP mỗi khi phát hiện một địa chỉ MAC không được phép.
        - Bộ đếm VI PHẠM tăng thêm 1 cho mỗi KHUNG TIN không được phép.
    
    - PROTECT (Bảo vệ)
        - SWITCH loại bỏ lưu lượng từ các ĐỊA CHỈ MAC không được phép.
        - GIAO DIỆN KHÔNG bị vô hiệu hóa.
        - Nó KHÔNG tạo ra thông báo SYSLOG / SNMP cho lưu lượng không được phép.
        - Nó KHÔNG tăng bộ đếm VI PHẠM.
    
---

CHẾ ĐỘ VI PHẠM - RESTRICT

![image](https://github.com/psaumur/CCNA/assets/106411237/819f00b9-9694-442d-8459-8018f4277e45)


CHẾ ĐỘ VI PHẠM - PROTECT

![image](https://github.com/psaumur/CCNA/assets/106411237/20d17f97-056e-4e76-8566-bb49c10bb9e1)

---

THỜI GIAN HẾT HẠN CỦA ĐỊA CHỈ MAC BẢO MẬT (SECURE MAC ADDRESS AGING)

![image](https://github.com/psaumur/CCNA/assets/106411237/4454fedf-f942-4b0d-9b6f-074765de653d)

- Theo MẶC ĐỊNH, CÁC ĐỊA CHỈ MAC BẢO MẬT sẽ không ‘hết hạn’ (Aging Time : 0 phút).
    - Có thể được cấu hình bằng lệnh `switchport port-security aging time *số_phút*`.

- Loại Hết hạn (Aging Type) MẶC ĐỊNH là tuyệt đối (ABSOLUTE).
    - ABSOLUTE (Tuyệt đối)
        - Sau khi ĐỊA CHỈ MAC BẢO MẬT được học, BỘ ĐẾM HẾT HẠN bắt đầu chạy và địa chỉ MAC sẽ bị xóa sau khi BỘ ĐẾM hết giờ, ngay cả khi SWITCH vẫn tiếp tục nhận được CÁC KHUNG TIN từ ĐỊA CHỈ MAC NGUỒN đó.
    - INACTIVITY (Không hoạt động)
        - Sau khi ĐỊA CHỈ MAC BẢO MẬT được học, BỘ ĐẾM HẾT HẠN bắt đầu chạy nhưng sẽ bị ĐẶT LẠI (RESET) mỗi khi một KHUNG TIN từ ĐỊA CHỈ MAC NGUỒN đó được nhận trên GIAO DIỆN.
            - Loại hết hạn được cấu hình bằng lệnh: `switchport port-security aging type {absolute | inactivity}`
- Việc hết hạn ĐỊA CHỈ MAC Tĩnh Bảo mật (địa chỉ được cấu hình bằng lệnh `switchport port-security mac-address x.x.x`) bị VÔ HIỆU HÓA theo MẶC ĐỊNH.

![image](https://github.com/psaumur/CCNA/assets/106411237/93f11517-9d97-4e52-89ad-a0e590bca702)

---

ĐỊA CHỈ MAC BẢO MẬT DẠNG STICKY (STICKY SECURE MAC ADDRESSES)

- Việc học ĐỊA CHỈ MAC BẢO MẬT dạng ‘STICKY’ có thể được kích hoạt bằng câu lệnh sau:
    - `SW(config-if)# switchport port-security mac-address sticky`

- Khi được kích hoạt, các ĐỊA CHỈ MAC BẢO MẬT được học một cách động sẽ được thêm vào cấu hình đang chạy (running configuration), như thế này:
    - `switchport port-security mac-address sticky *địa-chỉ-mac*`

- CÁC ĐỊA CHỈ MAC BẢO MẬT dạng ‘STICKY’ sẽ KHÔNG BAO GIỜ hết hạn.
    - Bạn cần LƯU cấu hình từ `running-config` vào `startup-config` để làm cho chúng THỰC SỰ vĩnh viễn (nếu không chúng sẽ không được giữ lại nếu SWITCH khởi động lại).
- Khi bạn thực thi lệnh `switchport port-security mac-address sticky`, tất cả các địa chỉ MAC bảo mật hiện đang được học một cách động sẽ được chuyển đổi thành CÁC ĐỊA CHỈ MAC BẢO MẬT DẠNG STICKY.
- Nếu bạn thực thi lệnh `no switchport port-security mac-address sticky`, tất cả CÁC ĐỊA CHỈ MAC BẢO MẬT DẠNG STICKY hiện có sẽ được chuyển đổi về dạng địa chỉ MAC bảo mật được học động thông thường.

![image](https://github.com/psaumur/CCNA/assets/106411237/10d591f9-334c-4e3b-889e-16030c36c445)

---

BẢNG ĐỊA CHỈ MAC (MAC ADDRESS TABLE)

- CÁC ĐỊA CHỈ MAC BẢO MẬT sẽ được thêm vào BẢNG ĐỊA CHỈ MAC giống như bất kỳ địa chỉ MAC nào khác.
    - CÁC ĐỊA CHỈ MAC BẢO MẬT dạng STICKY và STATIC sẽ có loại là STATIC.
    - CÁC ĐỊA CHỈ MAC BẢO MẬT được học động (Dynamically-Learned) sẽ có loại là DYNAMIC.
    - Bạn có thể xem tất cả CÁC ĐỊA CHỈ MAC BẢO MẬT bằng lệnh `show mac address-table secure`.
    

![image](https://github.com/psaumur/CCNA/assets/106411237/c9123729-541c-4363-ba19-d8e49f75c6c5)

---

TỔNG ÔN CÁC LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/716ce91d-d1bb-4f12-a8fd-226b65f22569)
