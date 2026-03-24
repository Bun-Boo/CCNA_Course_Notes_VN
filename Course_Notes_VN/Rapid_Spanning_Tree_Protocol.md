# 22. GIAO THỨC CÂY KHUNG NHANH (RAPID SPANNING TREE PROTOCOL - RSTP)

*SO SÁNH CÁC PHIÊN BẢN STP (Tiêu chuẩn vs. Cisco)*

![image](https://github.com/psaumur/CCNA/assets/106411237/ca5ff85c-842e-4ed3-9b6a-f9d6ed546a78)


Chúng ta chủ yếu quan tâm đến chuẩn 802.1w cho HẦU HẾT các trường hợp sử dụng.

MSTP (802.1s) hữu ích hơn cho các mạng CỰC KỲ LỚN.

RAPID PER-VLAN SPANNING TREE PLUS LÀ GÌ?

> RSTP không phải là một thuật toán cây khung dựa trên thời gian như 802.1D. Do đó, RSTP mang lại sự cải tiến đáng kể so với khoảng 30 giây hoặc hơn mà 802.1D cần để chuyển một liên kết sang trạng thái chuyển tiếp. Cốt lõi của giao thức này là một cơ chế bắt tay mới giữa các switch (bridge), cho phép các cổng chuyển trực tiếp sang trạng thái chuyển tiếp.

---

SỰ GIỐNG NHAU GIỮA STP VÀ RSTP:

- RSTP phục vụ cùng một mục đích như STP: chặn các CỔNG cụ thể để ngăn chặn VÒNG LẶP LỚP 2.
- RSTP bầu chọn CẦU GỐC (ROOT BRIDGE) với các quy tắc tương tự STP.
- RSTP bầu chọn CỔNG GỐC (ROOT PORTS) với các quy tắc tương tự STP.
- RSTP bầu chọn CỔNG CHỈ ĐỊNH (DESIGNATED PORTS) với các quy tắc tương tự STP.

---

SỰ KHÁC BIỆT GIỮA STP VÀ RSTP:

**CHI PHÍ CỔNG (PORT COSTS)**

![image](https://github.com/psaumur/CCNA/assets/106411237/b250c6da-2579-4576-8e93-5a8f8e66d873)


(HÃY HỌC THUỘC LÒNG CHI PHÍ CỔNG CỦA STP VÀ RSTP)

CÁC TRẠNG THÁI CỔNG RSTP (RSTP PORT STATES)

![image](https://github.com/psaumur/CCNA/assets/106411237/054d5037-a60e-478e-986b-6f43825a0d1a)

- Nếu một CỔNG đã bị vô hiệu hóa bởi người quản trị (dùng lệnh ”shutdown”) = TRẠNG THÁI LOẠI BỎ (DISCARDING STATE).
- Nếu một CỔNG đã được bật nhưng đang bị CHẶN lưu lượng để ngăn vòng lặp Lớp 2 = TRẠNG THÁI LOẠI BỎ (DISCARDING STATE).

---

CÁC VAI TRÒ CỦA CỔNG TRONG RSTP (RSTP ROLES)

- Vai trò CỔNG GỐC (ROOT PORT) không thay đổi trong RSTP.
    - CỔNG gần với CẦU GỐC nhất sẽ trở thành CỔNG GỐC của SWITCH đó.
    - CẦU GỐC là switch duy nhất không có CỔNG GỐC.
- Vai trò CỔNG CHỈ ĐỊNH (DESIGNATED PORT) không thay đổi trong RSTP.
    - CỔNG trên một đoạn mạng (Miền xung đột) gửi gói tin BPDU tốt nhất là CỔNG CHỈ ĐỊNH của đoạn mạng đó (chỉ có một cổng duy nhất cho mỗi đoạn!).
- Vai trò CỔNG KHÔNG CHỈ ĐỊNH được chia thành HAI vai trò riêng biệt trong RSTP:
    - Vai trò CỔNG THAY THẾ (**ALTERNATE PORT**).
    - Vai trò CỔNG DỰ PHÒNG (**BACKUP PORT**).

**RSTP : VAI TRÒ CỔNG THAY THẾ (ALTERNATE PORT ROLE)**

- VAI TRÒ CỔNG THAY THẾ trong RSTP là một CỔNG ĐANG LOẠI BỎ (DISCARDING) nhận được một BPDU ưu thế hơn từ một SWITCH khác.
- Điều này tương đương với những gì bạn đã học về CÁC CỔNG ĐANG CHẶN (BLOCKING PORTS) trong STP cổ điển.

![image](https://github.com/psaumur/CCNA/assets/106411237/7d81e70c-3b31-4448-9d45-9aadb738c74d)

- Một CỔNG THAY THẾ (kí hiệu là “A” ở trên) đóng vai trò là một dự phòng cho CỔNG GỐC.
- Nếu CỔNG GỐC bị hỏng, SWITCH có thể ngay lập tức chuyển cổng thay thế tốt nhất của nó sang trạng thái CHUYỂN TIẾP (FORWARDING).

![image](https://github.com/psaumur/CCNA/assets/106411237/41f3be85-6225-4749-83b4-f76952c5756a)

```
💡 Việc chuyển ngay lập tức sang trạng thái CHUYỂN TIẾP này hoạt động giống như một tính năng tùy chọn của STP cổ điển gọi là UplinkFast. Vì nó được tích hợp sẵn trong RSTP, nên bạn không cần phải kích hoạt UplinkFast khi sử dụng RSTP/Rapid PVST+.
```

Một tính năng tùy chọn khác của STP cũng được tích hợp vào RSTP là **BackboneFast**.

![image](https://github.com/psaumur/CCNA/assets/106411237/c4cea7b7-599f-4ec8-b9d3-a5acba71a5f5)

- **BackboneFast** cho phép SW3 làm hết hạn các BỘ ĐẾM TUỔI TỐI ĐA trên giao diện của nó và nhanh chóng CHUYỂN TIẾP các BPDUs ưu thế tới SW2.
- CHỨC NĂNG này đã được tích hợp sẵn trong RSTP, nên không cần cấu hình.

UPLINKFAST và BACKBONE FAST (TÓM TẮT)

```
💡 UplinkFast và BackboneFast là hai tính năng tùy chọn trong STP Cổ điển. Chúng phải được cấu hình để hoạt động trên SWITCH (không nhất thiết phải biết cho CCNA).
```

- Cả hai tính năng này đều được tích hợp sẵn trong RSTP, vì vậy bạn KHÔNG cần phải cấu hình chúng. Chúng hoạt động theo MẶC ĐỊNH.
- Bạn không cần phải hiểu chi tiết về chúng cho kỳ thi CCNA. Chỉ cần biết tên và mục đích CƠ BẢN của chúng (giúp các CỔNG ĐANG CHẶN / LOẠI BỎ nhanh chóng chuyển sang trạng thái CHUYỂN TIẾP).

---

**RSTP : VAI TRÒ CỔNG DỰ PHÒNG (BACKUP PORT ROLE)**

- VAI TRÒ CỔNG DỰ PHÒNG trong RSTP là một CỔNG ĐANG LOẠI BỎ nhận được một BPDU ưu thế từ một GIAO DIỆN khác trên CÙNG MỘT SWITCH.
- Điều này chỉ xảy ra khi HAI GIAO DIỆN được kết nối vào CÙNG MỘT MIỀN XUNG ĐỘT (thông qua một cái HUB).
- HUB không còn được sử dụng trong các mạng hiện đại, nên có lẽ bạn sẽ KHÔNG gặp phải CỔNG DỰ PHÒNG RSTP trong thực tế.
- Nó đóng vai trò là DỰ PHÒNG cho một CỔNG CHỈ ĐỊNH.

```
💡 GIAO DIỆN có PORT ID THẤP HƠN sẽ được chọn làm CỔNG CHỈ ĐỊNH, và cổng kia sẽ là cổng DỰ PHÒNG (backup).
```

![image](https://github.com/psaumur/CCNA/assets/106411237/61aefc04-b3a9-484a-bbfa-1efe792c73c7)

Switch nào sẽ là CẦU GỐC (ROOT BRIDGE)?
Còn CÁC cổng khác thì sao?

![image](https://github.com/psaumur/CCNA/assets/106411237/be4d404d-829d-41ab-ba39-34e918ed7ea9)

![image](https://github.com/psaumur/CCNA/assets/106411237/b5dec396-d5fc-486b-9110-5dcc2c4dc4aa)

![image](https://github.com/psaumur/CCNA/assets/106411237/1930a17b-6c74-4756-b89d-4148008f586b)

```
💡 RAPID STP tương thích với STP CỔ ĐIỂN.
💡 Các GIAO DIỆN trên SWITCH đã bật RAPID STP khi kết nối với một SWITCH chỉ chạy STP CỔ ĐIỂN sẽ hoạt động ở CHẾ ĐỘ STP CỔ ĐIỂN (các bộ đếm thời gian, CHẶN >>> LẮNG NGHE >>> HỌC TẬP >>> CHUYỂN TIẾP, v.v.).
```

---

DẢI GÓI TIN RAPID STP BPDU (RAPID STP BPDU)

STP CỔ ĐIỂN (BÊN TRÁI) so với RAPID STP BPDU (BÊN PHẢI)

![image](https://github.com/psaumur/CCNA/assets/106411237/2d2deb45-3f81-4c60-b9fa-0f6c3fe7c060)

```
💡 LƯU Ý:

BPDU của STP Cổ điển có trường “Protocol Version Identifier: Spanning Tree (0)”.
BPDU Type: Configuration (0x00).
BPDU flags: 0x00.

BPDU của RAPID STP có trường “Protocol Version Identifier: Spanning Tree (2)”.
BPDU Type: Configuration (0x02).
BPDU flags: 0x3c.
```

Trong STP CỔ ĐIỂN, chỉ có CẦU GỐC mới là nơi khởi tạo các BPDUs, và các SWITCH khác chỉ thực hiện CHUYỂN TIẾP các BPDUs mà chúng nhận được.

Trong RAPID STP, TẤT CẢ CÁC SWITCH đều khởi tạo và gửi các BPDUs của riêng mình từ các CỔNG CHỈ ĐỊNH của chúng.

---

GIAO THỨC CÂY KHUNG NHANH (RAPID SPANNING TREE PROTOCOL)

- TẤT CẢ CÁC SWITCH đang chạy RAPID STP đều gửi BPDUs của riêng mình sau mỗi khoảng thời gian “hello” (2 Giây).
- Các SWITCH làm “lạc hậu” (age) thông tin BPDU nhanh hơn nhiều.
    - Trong STP CỔ ĐIỂN, một SWITCH chờ đợi 10 khoảng “hello” (20 giây).
    - Trong RAPID STP, một SWITCH coi như đã mất láng giềng nếu nó bỏ lỡ 3 gói tin BPDUs (6 giây). Sau đó nó sẽ “xóa sạch” (flush) TẤT CẢ ĐỊA CHỈ MAC đã học được trên giao diện đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/c03d2645-42d8-4d95-b486-999e82ac12a8)

---

CÁC LOẠI LIÊN KẾT TRONG RSTP (RSTP LINK TYPES)

![image](https://github.com/psaumur/CCNA/assets/106411237/e837a271-ad13-4d6a-a800-434a0eff2576)

```
<E> = EDGE (BIÊN)
<P> = POINT-TO-POINT (ĐIỂM ĐỐI ĐIỂM)
<S> = SHARED (CHIA SẺ)
```

RSTP phân biệt giữa BA “loại liên kết” khác nhau: **EDGE**, **POINT-TO-POINT**, và **SHARED**.

CÁC CỔNG BIÊN (EDGE PORTS)

- Được kết nối tới CÁC THIẾT BỊ ĐẦU CUỐI (END HOSTS).
- Vì KHÔNG CÓ RỦI RO tạo ra VÒNG LẶP, chúng có thể chuyển thẳng sang trạng thái CHUYỂN TIẾP (FORWARDING) mà không cần quy trình thương lượng!
- Chúng hoạt động giống như một CỔNG STP CỔ ĐIỂN đã được BẬT PORTFAST.

```
💡 SW1(config-if)# spanning-tree portfast
```

---

CÁC CỔNG ĐIỂM ĐỐI ĐIỂM (POINT-TO-POINT PORTS)

- Kết nối trực tiếp với một SWITCH khác.
- Chúng hoạt động ở chế độ FULL-DUPLEX (Song công toàn phần).
- Bạn không cần phải cấu hình GIAO DIỆN là POINT-TO-POINT (nó sẽ được tự động phát hiện).

```
💡 SW1(config-if)# spanning-tree link-type point-to-point
```

---

CÁC CỔNG CHIA SẺ (SHARED PORTS)

- Kết nối tới một SWITCH khác (hoặc nhiều SWITCH) thông qua một cái HUB.
- Chúng hoạt động ở chế độ HALF-DUPLEX (Bán song công).
- Bạn không cần phải cấu hình GIAO DIỆN là SHARED (nó sẽ được tự động phát hiện).

```
💡 SW1(config-if)# spanning-tree link-type shared
```

---

CÂU HỎI KIỂM TRA (QUIZ):

![image](https://github.com/psaumur/CCNA/assets/106411237/a7314f6f-55f0-4e62-bd24-b311b090afe8)

SW1:
- **CẦU GỐC (ROOT BRIDGE)**
- G0/0 - 0/3 = CỔNG CHỈ ĐỊNH (DESIGNATED)

SW2:
- G0/0 = CỔNG GỐC (ROOT PORT)
- G0/1 = CỔNG CHỈ ĐỊNH (DESIGNATED PORT)
- G0/2 = CỔNG DỰ PHÒNG (BACKUP PORT)
- G0/3 = CỔNG CHỈ ĐỊNH (DESIGNATED PORT)

SW3:
- G0/0 = CỔNG CHỈ ĐỊNH (DESIGNATED PORT)
- G0/1 = CỔNG THAY THẾ (ALTERNATE PORT)
- G0/2 = CỔNG GỐC (ROOT PORT)
- G0/3 = CỔNG CHỈ ĐỊNH (DESIGNATED PORT)

SW4:
- G0/0 = CỔNG GỐC (ROOT)
- G0/1 = CỔNG THAY THẾ (ALTERNATE PORT)
- G0/2 = CỔNG CHỈ ĐỊNH (DESIGNATED PORT)

Kết nối giữa SW1 G0/0 và SW2 G0/0 = POINT-TO-POINT.
Kết nối giữa SW3 G0/0 và SW4 G0/0 = POINT-TO-POINT.
Kết nối giữa SW1 G0/1 và G0/2 tới SW3 G0/1 và G0/2 = POINT-TO-POINT.
Kết nối tới tất cả CÁC THIẾT BỊ ĐẦU CUỐI = EDGE (BIÊN).
Kết nối từ SW4 tới HUB = SHARED (CHIA SẺ).
Kết nối từ SW2 tới HUB = SHARED (CHIA SẺ).

TRẢ LỜI:

![image](https://github.com/psaumur/CCNA/assets/106411237/b76eb7be-897a-4617-990e-f399ceaea5f2)
