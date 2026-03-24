# 52. CÁC KIẾN TRÚC MẠNG LAN (LAN ARCHITECTURES)

- Bạn đã học về nhiều công nghệ MẠNG khác nhau: ĐỊNH TUYẾN (ROUTING), CHUYỂN MẠCH (SWITCHING), STP, ETHERCHANNEL, OSPF, FHRPs, CÁC TÍNH NĂNG BẢO MẬT SWITCH, v.v.
    - Bây giờ, hãy cùng xem xét một số THIẾT KẾ / KIẾN TRÚC MẠNG CƠ BẢN.
- Có những tiêu chuẩn “THỰC HÀNH TỐT NHẤT” (BEST PRACTICES) cho THIẾT KẾ MẠNG.
    - Tuy nhiên, có rất ít “CÂU TRẢ LỜI ĐÚNG” mang tính PHỔ QUÁT.
    - Câu trả lời cho HẦU HẾT các câu hỏi chung về THIẾT KẾ MẠNG là “TÙY TRƯỜNG HỢP” (IT DEPENDS).
- Trong giai đoạn đầu của sự nghiệp MẠNG, có lẽ bạn sẽ không được yêu cầu tự mình THIẾT KẾ MẠNG.
- Tuy nhiên, để hiểu về các MẠNG mà bạn sẽ CẤU HÌNH và XỬ LÝ SỰ CỐ, việc nắm vững một số KIẾN THỨC CƠ BẢN về THIẾT KẾ MẠNG là rất quan trọng.

---

CÁC THUẬT NGỮ PHỔ BIẾN

- SƠ ĐỒ HÌNH SAO (STAR)
    - Khi nhiều THIẾT BỊ đều kết nối tới MỘT THIẾT BỊ TRUNG TÂM, chúng ta có thể vẽ chúng theo hình “NGÔI SAO” như bên dưới, vì vậy nó thường được gọi là “SƠ ĐỒ HÌNH SAO” (STAR TOPOLOGY).

![image](https://github.com/psaumur/CCNA/assets/106411237/8aeb545d-3cc0-44bf-a01e-b7e5d47deaf2)

- MẠNG LƯỚI TOÀN PHẦN (FULL MESH)
    - Khi mỗi THIẾT BỊ đều được kết nối tới TẤT CẢ các THIẾT BỊ KHÁC.

![image](https://github.com/psaumur/CCNA/assets/106411237/cb2d12af-cf17-4ffe-a637-148014d20753)

- MẠNG LƯỚI TỪNG PHẦN (PARTIAL MESH)
    - Khi MỘT SỐ THIẾT BỊ được kết nối với nhau nhưng không phải TẤT CẢ.

![image](https://github.com/psaumur/CCNA/assets/106411237/01ed7fe5-317b-45c7-8baa-0cc74e502433)

---

KIẾN TRÚC LAN 2 LỚP VÀ 3 LỚP

- THIẾT KẾ LAN HAI LỚP (TWO-TIER) bao gồm HAI Lớp Phân cấp:
    - LỚP TRUY CẬP (ACCESS LAYER)
    - LỚP PHÂN PHỐI (DISTRIBUTION LAYER)
- Còn được gọi là thiết kế “LÕI THU GỌN” (COLLAPSED CORE) vì nó lược bỏ một lớp thường thấy trong THIẾT KẾ BA LỚP: LỚP LÕI (CORE LAYER).
- LỚP TRUY CẬP (ACCESS LAYER)
    - Là LỚP mà các MÁY TRẠM (END HOSTS) kết nối tới (PC, Máy in, Camera, v.v.).
    - Thông thường, các SWITCH LỚP TRUY CẬP có rất nhiều CỔNG (PORTS) để các MÁY TRẠM kết nối.
    - Việc ĐÁNH DẤU QoS thường được thực hiện ở đây.
    - Các dịch vụ bảo mật như BẢO MẬT CỔNG (PORT SECURITY), DAI, v.v. thường được thực hiện ở đây.
    - Các CỔNG SWITCH (SWITCHPORTS) có thể được hỗ trợ PoE cho các AP không dây, Điện thoại IP, v.v.
- LỚP PHÂN PHỐI (DISTRIBUTION LAYER)
    - Gom nhóm các kết nối từ các SWITCH LỚP TRUY CẬP.
    - Thường là ranh giới giữa LỚP 2 và LỚP 3.
    - Kết nối tới các dịch vụ như Internet, WAN, v.v.
    - Đôi khi được gọi là LỚP GOM NHÓM (AGGREGATION LAYER).

![image](https://github.com/psaumur/CCNA/assets/106411237/4592f4d8-5550-4428-923c-c805d2ca476f)

![image](https://github.com/psaumur/CCNA/assets/106411237/4fa26aec-536a-4ad8-8f39-e94dacc4cb3c)

![image](https://github.com/psaumur/CCNA/assets/106411237/72018e4f-113e-4921-8dc4-05079c590ee1)

![image](https://github.com/psaumur/CCNA/assets/106411237/c8326214-80e0-4702-a1c3-6dd2fbafb6e9)

---

THIẾT KẾ LAN CƠ SỞ BA LỚP (THREE-TIER CAMPUS LAN DESIGN)

- Trong các MẠNG lớn với nhiều SWITCH LỚP PHÂN PHỐI (ví dụ: ở các tòa nhà riêng biệt), số lượng kết nối cần thiết giữa các SWITCH LỚP PHÂN PHỐI tăng lên nhanh chóng.

![image](https://github.com/psaumur/CCNA/assets/106411237/8b94c8e9-813b-40e0-bcd1-b27d73da31e8)

- Để giúp MỞ RỘNG (SCALE) các MẠNG LAN lớn, bạn có thể thêm vào một LỚP LÕI (CORE LAYER).

```
💡 Cisco khuyến nghị thêm một LỚP LÕI nếu có nhiều hơn BA LỚP PHÂN PHỐI tại một địa điểm duy nhất.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/d5c1a677-38ff-425f-b91a-65a8fa37c377)

- THIẾT KẾ LAN BA LỚP bao gồm BA LỚP PHÂN CẤP:
    - LỚP TRUY CẬP (ACCESS LAYER)
    - LỚP PHÂN PHỐI (DISTRIBUTION LAYER)
    - LỚP LÕI (CORE LAYER)

- LỚP LÕI (CORE LAYER):
    - Kết nối các LỚP PHÂN PHỐI với nhau trong các MẠNG LAN lớn.
    - Trọng tâm là TỐC ĐỘ (”VẬN CHUYỂN NHANH - FAST TRANSPORT”).
    - NÊN TRÁNH các THAO TÁC CHIẾM NHIỀU CPU, như BẢO MẬT, Đánh dấu / Phân loại QoS, v.v. ở LỚP này.
    - Tất cả các kết nối đều là LỚP 3. KHÔNG CÓ SPANNING-TREE!
    - Phải duy trì khả năng kết nối trong toàn bộ mạng LAN ngay cả khi CÁC THIẾT BỊ GẶP SỰ CỐ.
    
![image](https://github.com/psaumur/CCNA/assets/106411237/633cee0a-8952-4b27-91a3-8653bb8e353c)
    

---

KIẾN TRÚC SPINE-LEAF (TRUNG TÂM DỮ LIỆU)

- KIẾN TRÚC CISCO ACI (Application Centric Infrastructure) sử dụng kiến trúc này.
- TRUNG TÂM DỮ LIỆU (DATA CENTERS) là các không gian / tòa nhà chuyên dụng được sử dụng để LƯU TRỮ CÁC HỆ THỐNG MÁY TÍNH như CÁC MÁY CHỦ và CÁC THIẾT BỊ MẠNG.
- Các thiết kế TRUNG TÂM DỮ LIỆU truyền thống thường sử dụng KIẾN TRÚC BA LỚP (TRUY CẬP-PHÂN PHỐI-LÕI) như chúng ta vừa tìm hiểu.
- Điều này hoạt động tốt khi hầu hết LƯU LƯỢNG (TRAFFIC) trong TRUNG TÂM DỮ LIỆU là BẮC-NAM (NORTH-SOUTH).

![image](https://github.com/psaumur/CCNA/assets/106411237/7e2ff784-d16f-4606-a186-c73223bf5582)

- Với sự phổ biến của CÁC MÁY CHỦ ẢO, các ứng dụng thường được triển khai theo cách PHÂN TÁN (trên nhiều MÁY CHỦ vật lý khác nhau), điều này làm tăng lượng LƯU LƯỢNG ĐÔNG-TÂY (EAST-WEST) trong TRUNG TÂM DỮ LIỆU.
- KIẾN TRÚC BA LỚP truyền thống dẫn đến các nút thắt cổ chai về BĂNG THÔNG cũng như sự BIẾN ĐỘNG trong độ trễ giữa CÁC MÁY CHỦ (SERVER-TO-SERVER latency) tùy thuộc vào ĐƯỜNG ĐI của LƯU LƯỢNG.
- Để GIẢI QUYẾT vấn đề này, KIẾN TRÚC SPINE-LEAF (Xương sống - Lá) (còn gọi là KIẾN TRÚC CLOS) đã trở nên nổi bật trong các TRUNG TÂM DỮ LIỆU.

CÁC QUY TẮC CỦA KIẾN TRÚC SPINE-LEAF

- Mọi SWITCH LÁ (LEAF SWITCH) đều được kết nối tới mọi SWITCH XƯƠNG SỐNG (SPINE SWITCH).
- Mọi SWITCH XƯƠNG SỐNG đều được kết nối tới mọi SWITCH LÁ.
- CÁC SWITCH LÁ KHÔNG kết nối với CÁC SWITCH LÁ khác.
- CÁC SWITCH XƯƠNG SỐNG KHÔNG kết nối với CÁC SWITCH XƯƠNG SỐNG khác.
- CÁC MÁY TRẠM (Máy chủ, v.v.) CHỈ kết nối tới CÁC SWITCH LÁ.

![image](https://github.com/psaumur/CCNA/assets/106411237/73cbe190-f589-4307-8ce4-e3de8af2f1d5)

- ĐƯỜNG ĐI của LƯU LƯỢNG được chọn ngẫu nhiên để cân bằng TẢI LƯU LƯỢNG giữa CÁC SWITCH XƯƠNG SỐNG.
- Mỗi MÁY CHỦ được tách biệt bởi cùng một số lượng “BƯỚC NHẢY” (HOPS) (ngoại trừ những máy chủ kết nối tới cùng một SWITCH LÁ), cung cấp ĐỘ TRỄ NHẤT QUÁN cho LƯU LƯỢNG ĐÔNG-TÂY.

---

SOHO (VĂN PHÒNG NHỎ / VĂN PHÒNG TẠI GIA)

- SOHO (SMALL OFFICE / HOME OFFICE) đề cập đến văn phòng của một công ty nhỏ, hoặc một văn phòng tại gia nhỏ với ít THIẾT BỊ.
    - Không nhất thiết phải là một “văn phòng” tại nhà thực thụ; nếu ngôi nhà của bạn có một MẠNG kết nối tới INTERNET thì nó được coi là một MẠNG SOHO.

- CÁC MẠNG SOHO không có nhu cầu phức tạp, vì vậy tất cả các chức năng MẠNG thường được cung cấp bởi một THIẾT BỊ DUY NHẤT, thường được gọi là “ROUTER GIA ĐÌNH” (HOME ROUTER) hoặc “ROUTER KHÔNG DÂY” (WIRELESS ROUTER).
- Thiết bị duy nhất đó có thể đóng vai trò là:
    - ROUTER (Bộ định tuyến)
    - SWITCH (Bộ chuyển mạch)
    - FIREWALL (Tường lửa)
    - WIRELESS ACCESS POINT (Điểm truy cập không dây)
    - MODEM

![image](https://github.com/psaumur/CCNA/assets/106411237/c9edf179-f333-4fec-9e95-ee291b5eb84c)

![image](https://github.com/psaumur/CCNA/assets/106411237/7d606552-8939-41c1-ad85-13face1d27f5)
