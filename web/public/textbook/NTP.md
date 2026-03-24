# 37. NTP (Network Time Protocol)

TẠI SAO THỜI GIAN LẠI QUAN TRỌNG ĐỐI VỚI CÁC THIẾT BỊ MẠNG?

- Tất cả CÁC THIẾT BỊ đều có một ĐỒNG HỒ NỘI BỘ (ROUTERS, SWITCHES, PCs, v.v.).
- Trong CISCO IOS, bạn có thể xem thời gian bằng lệnh `show clock`.

![image](https://github.com/psaumur/CCNA/assets/106411237/0afc355a-a982-4caa-a470-e09070e9c74f)

- Nếu bạn sử dụng lệnh `show clock detail`, bạn có thể thấy NGUỒN THỜI GIAN (TIME SOURCE).

![image](https://github.com/psaumur/CCNA/assets/106411237/a49cc147-ddba-405d-8e70-745ae7434e5a)

- ĐỒNG HỒ PHẦN CỨNG NỘI BỘ của một thiết bị sẽ bị “lệch” (drift) theo thời gian, vì vậy nó KHÔNG phải là nguồn thời gian lý tưởng.
- Từ góc độ CCNA, lý do quan trọng nhất để có thời gian chính xác trên một THIẾT BỊ là để có các bản nhật ký (logs) CHÍNH XÁC phục vụ việc xử lý sự cố.

- **Syslog**, giao thức được sử dụng để lưu nhật ký thiết bị, sẽ được trình bày trong một video sau.

Câu lệnh: `show logging`

![image](https://github.com/psaumur/CCNA/assets/106411237/33632e20-a4e9-40fd-aba0-527498cfb886)

Lưu ý: nhãn thời gian của R3 hoàn toàn khác với của R2 !!!

![image](https://github.com/psaumur/CCNA/assets/106411237/7d0464c2-1abe-460a-93fb-dd4368c905a7)

---

CẤU HÌNH THỜI GIAN THỦ CÔNG

- Bạn có thể cấu hình THỜI GIAN trên THIẾT BỊ một cách thủ công bằng lệnh `clock set`.

![image](https://github.com/psaumur/CCNA/assets/106411237/fa5d40c2-bccb-48e2-9f6b-c85ad721f37f)

- Mặc dù LỊCH PHẦN CỨNG (HARDWARE CALENDAR - đồng hồ tích hợp) là nguồn thời gian MẶC ĐỊNH, nhưng ĐỒNG HỒ PHẦN CỨNG và ĐỒNG HỒ PHẦN MỀM là riêng biệt và có thể được cấu hình riêng.

---

CẤU HÌNH ĐỒNG HỒ PHẦN CỨNG (CALENDAR)

- Bạn có thể cấu hình ĐỒNG HỒ PHẦN CỨNG một cách THỦ CÔNG bằng lệnh `calendar set`.

![image](https://github.com/psaumur/CCNA/assets/106411237/b72c898a-4746-49de-86db-c519964b3916)

- Thông thường, bạn sẽ muốn ĐỒNG BỘ HÓA ‘clock’ (đồng hồ phần mềm) và ‘calendar’ (lịch phần cứng).
- Sử dụng lệnh `clock update-calendar` để đồng bộ lịch phần cứng theo thời gian của đồng hồ phần mềm.
- Sử dụng lệnh `clock read-calendar` để đồng bộ đồng hồ phần mềm theo thời gian của lịch phần cứng.

![image](https://github.com/psaumur/CCNA/assets/106411237/c9d24bfd-25b1-4c5d-a426-f2a8a2db108c)

![image](https://github.com/psaumur/CCNA/assets/106411237/104a5e27-0d5f-40fc-aea8-dbcf46c3e195)

---

CẤU HÌNH MÚI GIỜ (TIME ZONE)

- Bạn có thể cấu hình múi giờ bằng lệnh `clock timezone`.

![image](https://github.com/psaumur/CCNA/assets/106411237/d9ef5a95-a102-4306-bc3d-269fc5fd1d9e)

CHẾ ĐỘ GIỜ TIẾT KIỆM ÁNH SÁNG (DAYLIGHT SAVING TIME / SUMMER TIME)

![image](https://github.com/psaumur/CCNA/assets/106411237/591491d1-a5bd-4f99-b518-02e722f41e1a)

![image](https://github.com/psaumur/CCNA/assets/106411237/3319f4c0-fb72-4486-b14c-4648c2be7338)

Câu lệnh đầy đủ:

`R1(config)# clock summer-time EDT recurring 2 Sunday March 02:00 1 Sunday November 02:00`

Lệnh này bao gồm thời điểm BẮT ĐẦU và thời điểm KẾT THÚC của giờ Tiết kiệm ánh sáng.

---

TỔNG HỢP CÁC CÂU LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/33557221-c045-4063-8ca0-9e8fb045ce52)

---

CƠ BẢN VỀ NTP

- Cấu hình thời gian thủ công trên CÁC THIẾT BỊ là cách làm KHÔNG thể mở rộng (Not Scalable).
- Các đồng hồ được cấu hình thủ công sẽ bị “lệch” (drift), dẫn đến thời gian không chính xác.
- NTP (Network Time Protocol - Giao thức Thời gian Mạng) cho phép TỰ ĐỘNG đồng bộ hóa THỜI GIAN qua một MẠNG LƯỚI.
- Các MÁY KHÁCH NTP (NTP CLIENTS) yêu cầu thời gian từ các MÁY CHỦ NTP (NTP SERVERS).
- Một THIẾT BỊ có thể vừa là MÁY CHỦ NTP vừa là MÁY KHÁCH NTP cùng một lúc.
- NTP cho phép độ chính xác về THỜI GIAN vào khoảng ~1 mili giây nếu MÁY CHỦ NTP nằm trong cùng mạng LAN - HOẶC trong khoảng ~50 mili giây nếu kết nối tới MÁY CHỦ NTP qua mạng WAN / INTERNET.
- Một số MÁY CHỦ NTP ‘tốt’ hơn những máy khác. ‘Khoảng cách’ của một MÁY CHỦ NTP so với **đồng hồ gốc tham chiếu** được gọi là **stratum** (tầng).

```
💡 NTP sử dụng cổng UDP 123 để liên lạc.
```

ĐỒNG HỒ THAM CHIẾU (REFERENCE CLOCK)

- Một ĐỒNG HỒ THAM CHIẾU thường là một thiết bị thời gian cực kỳ chính xác như ĐỒNG HỒ NGUYÊN TỬ hoặc ĐỒNG HỒ GPS.
- CÁC ĐỒNG HỒ THAM CHIẾU là **stratum 0** trong hệ thống cấp bậc NTP.
- CÁC MÁY CHỦ NTP kết nối trực tiếp với ĐỒNG HỒ THAM CHIẾU là **stratum 1**.

![image](https://github.com/psaumur/CCNA/assets/106411237/003bf28a-03fe-49a8-954c-728f8e79dbd9)

(Việc kết nối ngang hàng giữa các thiết bị được gọi là …)

![image](https://github.com/psaumur/CCNA/assets/106411237/e2b91988-9be4-419b-b0b3-ad4ac32ae5cc)

- Một MÁY KHÁCH NTP có thể ĐỒNG BỘ với NHIỀU MÁY CHỦ NTP.

![image](https://github.com/psaumur/CCNA/assets/106411237/32146173-fa80-4926-9524-ad66de3f9a6b)

---

CẤU HÌNH NTP

![image](https://github.com/psaumur/CCNA/assets/106411237/6ee32d55-a33d-419c-9286-d1683f250d37)

![image](https://github.com/psaumur/CCNA/assets/106411237/453bd559-d88f-46c8-b4c9-cea958ef216d)

![image](https://github.com/psaumur/CCNA/assets/106411237/6adb6092-0290-4ae9-961d-55d25ec1d3c7)

Sử dụng tham số “prefer” sẽ biến một máy chủ nhất định thành MÁY CHỦ ĐƯỢC ƯU TIÊN (PREFERRED SERVER).

(Để hiển thị các máy chủ đã cấu hình)

![image](https://github.com/psaumur/CCNA/assets/106411237/aabee138-5cb3-4316-8411-8da38d6dd2d5)

`sys.peer` = Đây là MÁY CHỦ mà ROUTER hiện tại (R1) đang được đồng bộ hóa theo.

`st` = Tầng (Stratum Tier).

(Để hiển thị Trạng thái NTP)

![image](https://github.com/psaumur/CCNA/assets/106411237/4501f436-3e52-48c4-b22c-a733547b8b98)

`stratum 2` vì nó đang đồng bộ từ Google (stratum 1).

(Để hiển thị chi tiết đồng hồ NTP)

![image](https://github.com/psaumur/CCNA/assets/106411237/bde14525-17e6-4d63-9d0b-b992c3dd7725)

Lệnh này cấu hình ROUTER cập nhật ĐỒNG HỒ PHẦN CỨNG (Lịch) theo thời gian học được qua NTP:

`R1(config)# ntp update-calendar` 

ĐỒNG HỒ PHẦN CỨNG theo dõi NGÀY và GIỜ trên THIẾT BỊ - ngay cả khi thiết bị khởi động lại, mất điện, v.v.

Khi CƠ CHẾ HỆ THỐNG được khởi động lại, ĐỒNG HỒ PHẦN CỨNG sẽ được sử dụng để KHỞI TẠO ĐỒNG HỒ PHẦN MỀM.

---

CẤU HÌNH GIAO DIỆN LOOPBACK CHO MỘT MÁY CHỦ NTP

![image](https://github.com/psaumur/CCNA/assets/106411237/21cac8d8-7c7f-41e1-8f0a-bfb6418c6085)

Tại sao lại cấu hình một THIẾT BỊ LOOPBACK trên R1 cho NTP?

Nếu một trong các GIAO DIỆN VẬT LÝ của R1 bị hỏng, nó vẫn có thể được truy cập thông qua đường ĐỊNH TUYẾN của R3.

![image](https://github.com/psaumur/CCNA/assets/106411237/9ead84f6-8645-489c-a30d-0b3c7ebf6ba1)

THIẾT LẬP MÁY CHỦ NTP cho R2 bằng cách sử dụng GIAO DIỆN LOOPBACK trên R1

![image](https://github.com/psaumur/CCNA/assets/106411237/8a05e16e-cab9-429c-836e-e74a1007cbcb)

THIẾT LẬP CÁC MÁY CHỦ NGUỒN NTP CHO R3 bằng cách sử dụng R1 và R2

![image](https://github.com/psaumur/CCNA/assets/106411237/bcbd2426-1745-437a-9ebd-fe80dce6b527)

LƯU Ý: R1 được ƯU TIÊN (PREFERENCE) vì TẦNG STRATUM của nó CAO HƠN (nhỏ hơn về số) so với R2.

---

CẤU HÌNH CHẾ ĐỘ MÁY CHỦ NTP (NTP SERVER MODE)

![image](https://github.com/psaumur/CCNA/assets/106411237/038c5e31-587e-4a54-ae80-cc290a0ff805)

![image](https://github.com/psaumur/CCNA/assets/106411237/903a6aba-e99d-4ee6-a9c5-e077eed0592a)

![image](https://github.com/psaumur/CCNA/assets/106411237/0b5928d9-6594-4f3d-8663-8f4f19d3245b)

![image](https://github.com/psaumur/CCNA/assets/106411237/0aad6e81-5b7b-41ad-82b1-6c98690a9a4c)

![image](https://github.com/psaumur/CCNA/assets/106411237/e68f0ab9-25f5-4e65-8e80-f07b15878f69)

---

CẤU HÌNH CHẾ ĐỘ ĐỐI XỨNG CHỦ ĐỘNG (NTP SYMMETRIC ACTIVE MODE)

Lệnh để cấu hình CHẾ ĐỘ ĐỐI XỨNG NTP:
`R2(config)# ntp peer <địa_chỉ_ip_đối_tác>`

![image](https://github.com/psaumur/CCNA/assets/106411237/a0c27863-86d7-40e4-a935-6c73fce39439)

![image](https://github.com/psaumur/CCNA/assets/106411237/d430e372-8480-4378-92e4-5e5ca06f2ac1)

---

CẤU HÌNH XÁC THỰC NTP (NTP AUTHENTICATION)

- XÁC THỰC NTP có thể được cấu hình, mặc dù đây là tùy chọn KHÔNG BẮT BUỘC.
- Nó cho phép các MÁY KHÁCH NTP đảm bảo rằng chúng chỉ đồng bộ với các MÁY CHỦ dự kiến.
- Để CẤU HÌNH XÁC THỰC NTP:
    - `ntp authenticate` (Bật XÁC THỰC NTP).
    - `ntp authenticate-key <số_hiệu_khóa> md5 <khóa>` (Tạo (các) Khóa XÁC THỰC NTP).
    - `ntp trusted-key <số_hiệu_khóa>` (Chỉ định (các) Khóa Tin cậy).
    - `ntp server <địa-chỉ-ip> key <số-hiệu-khóa>` (Chỉ định khóa nào sẽ được sử dụng cho máy chủ đó).

CÁC CẤU HÌNH VÍ DỤ

![image](https://github.com/psaumur/CCNA/assets/106411237/d8f54d79-8975-4dfe-b0c0-e4e2b44f7b31)

---

TỔNG ÔN CÁC LỆNH NTP

![image](https://github.com/psaumur/CCNA/assets/106411237/2888ef4e-f53a-4ca3-ad34-0b04742edfd9)
