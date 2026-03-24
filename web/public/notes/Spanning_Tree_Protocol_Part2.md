# 21. GIAO THỨC CÂY KHUNG (STP) : PHẦN 2

CÁC TRẠNG THÁI CỦA STP (STP STATES)

![image](https://github.com/psaumur/CCNA/assets/106411237/5c9a17ff-b0d6-455c-8677-5144dd5a0048)


- CÁC CỔNG GỐC / CHỈ ĐỊNH (ROOT / DESIGNATED PORTS) duy trì ỔN ĐỊNH ở trạng thái CHUYỂN TIẾP (FORWARDING).
- CÁC CỔNG KHÔNG CHỈ ĐỊNH (NON-DESIGNATED PORTS) duy trì ỔN ĐỊNH ở trạng thái CHẶN (BLOCKING).
- LẮNG NGHE (LISTENING) và HỌC TẬP (LEARNING) là các trạng thái CHUYỂN TIẾP (TRANSITIONAL) mà giao diện sẽ đi qua khi nó được kích hoạt, hoặc khi một CỔNG ĐANG CHẶN phải chuyển sang trạng thái CHUYỂN TIẾP do có sự thay đổi trong cấu trúc mạng.

**1) CHẶN / ỔN ĐỊNH (BLOCKING / STABLE)**

- CÁC CỔNG KHÔNG CHỈ ĐỊNH ở trạng thái CHẶN.
- Các giao diện ở trạng thái CHẶN thực tế là bị vô hiệu hóa để ngăn chặn vòng lặp.
- Các giao diện ở trạng thái CHẶN KHÔNG Gửi/Nhận lưu lượng mạng thông thường.
- Các giao diện ở trạng thái CHẶN KHÔNG chuyển tiếp các gói tin STP BPDU.
- Các giao diện ở trạng thái CHẶN KHÔNG học các ĐỊA CHỈ MAC.

**2) LẮNG NGHE / CHUYỂN TIẾP (LISTENING / TRANSITIONAL)**

- Sau trạng thái CHẶN, các giao diện có vai trò CHỈ ĐỊNH hoặc GỐC sẽ bước vào trạng thái LẮNG NGHE.
- CHỈ CÁC CỔNG CHỈ ĐỊNH hoặc GỐC mới vào trạng thái LẮNG NGHE (CÁC CỔNG KHÔNG CHỈ ĐỊNH LUÔN Ở TRẠNG THÁI CHẶN).
- Theo mặc định, trạng thái LẮNG NGHE kéo dài 15 giây. Thời gian này được xác định bởi BỘ ĐẾM TRỄ CHUYỂN TIẾP (FORWARD DELAY TIMER).
- Các giao diện ở trạng thái LẮNG NGHE KHÔNG Gửi / Nhận lưu lượng mạng thông thường.
- Các giao diện ở trạng thái LẮNG NGHE CHỈ Chuyển tiếp/Nhận các gói tin STP BPDU.
- Các giao diện ở trạng thái LẮNG NGHE KHÔNG học các ĐỊA CHỈ MAC từ lưu lượng thông thường đến trên giao diện đó.

**3) HỌC TẬP / CHUYỂN TIẾP (LEARNING / TRANSITIONAL)**

- Sau trạng thái LẮNG NGHE, một cổng CHỈ ĐỊNH hoặc GỐC sẽ bước vào trạng thái HỌC TẬP.
- Theo mặc định, trạng thái HỌC TẬP kéo dài 15 giây. Thời gian này cũng được xác định bởi BỘ ĐẾM TRỄ CHUYỂN TIẾP (dùng chung cho cả trạng thái LẮNG NGHE và HỌC TẬP).
- Các giao diện ở trạng thái HỌC TẬP KHÔNG Gửi / Nhận lưu lượng mạng thông thường.
- Các giao diện ở trạng thái HỌC TẬP CHỈ Gửi/Nhận các gói tin STP BPDU.
- Các giao diện ở trạng thái HỌC TẬP **học** các ĐỊA CHỈ MAC từ lưu lượng thông thường đến trên giao diện đó.

**4) CHUYỂN TIẾP / ỔN ĐỊNH (FORWARDING / STABLE)**

- CÁC CỔNG GỐC và CHỈ ĐỊNH ở trạng thái CHUYỂN TIẾP.
- Một CỔNG ở trạng thái CHUYỂN TIẾP hoạt động BÌNH THƯỜNG.
- Một CỔNG ở trạng thái CHUYỂN TIẾP Gửi/Nhận lưu lượng mạng thông thường.
- Một CỔNG ở trạng thái CHUYỂN TIẾP Gửi/Nhận các gói tin STP BPDU.
- Một CỔNG ở trạng thái CHUYỂN TIẾP **học** các ĐỊA CHỈ MAC.

TÓM TẮT:

![image](https://github.com/psaumur/CCNA/assets/106411237/f4cea5ca-b90a-423e-9160-f206b8b1621d)

---

CÁC BỘ ĐẾM THỜI GIAN CỦA STP (STP TIMERS)

![image](https://github.com/psaumur/CCNA/assets/106411237/a174469f-9e75-4645-aff8-d4bfe46fb207)

```
💡 Các SWITCH KHÔNG chuyển tiếp BPDUs ra khỏi CỔNG GỐC và CÁC CỔNG KHÔNG CHỈ ĐỊNH của chúng - MÀ CHỈ THỰC HIỆN QUA CÁC CỔNG CHỈ ĐỊNH !!!
```

BỘ ĐẾM TUỔI TỐI ĐA (MAX AGE TIMER):

- Nếu một BPDU khác được nhận TRƯỚC KHI BỘ ĐẾM TUỔI TỐI ĐA đếm ngược về 0, THOÌ GIAN sẽ ĐẶT LẠI về 20 Giây và không có thay đổi nào xảy ra.
- Nếu không nhận được BPDU nào khác, BỘ ĐẾM TUỔI TỐI ĐA sẽ đếm ngược về 0 và SWITCH sẽ đánh giá lại các lựa chọn STP của nó, bao gồm CẦU GỐC, CỔNG GỐC CỤC BỘ, CỔNG CHỈ ĐỊNH và KHÔNG CHỈ ĐỊNH.
- Nếu một CỔNG KHÔNG CHỈ ĐỊNH được chọn để trở thành CỔNG CHỈ ĐỊNH hoặc CỔNG GỐC, nó sẽ chuyển từ trạng thái CHẶN sang trạng thái LẮNG NGHE (15 Giây), trạng thái HỌC TẬP (15 Giây), và cuối cùng là trạng thái CHUYỂN TIẾP.
    - Như vậy... có thể mất tới 50 Giây để một giao diện ĐANG CHẶN chuyển sang CHUYỂN TIẾP! (20s MAX AGE + (15s LẮNG NGHE + 15s HỌC TẬP)).
- Các BỘ ĐẾM THỜI GIAN và CÁC TRẠNG THÁI CHUYỂN TIẾP này nhằm đảm bảo rằng các VÒNG LẶP không vô tình được tạo ra do một GIAO DIỆN chuyển sang TRẠNG THÁI CHUYỂN TIẾP quá sớm.

TUY NHIÊN...

```
💡 Một giao diện đang CHUYỂN TIẾP có thể chuyển TRỰC TIẾP sang trạng thái CHẶN (không phải lo lắng về việc tạo ra vòng lặp).

💡 Một giao diện đang CHẶN KHÔNG THỂ chuyển TRỰC TIẾP sang trạng thái CHUYỂN TIẾP. Nó BẮT BUỘC phải đi qua các trạng thái LẮNG NGHE và HỌC TẬP trước!
```

---

STP BPDU (BRIDGE PROTOCOL DATA UNIT)

Tiêu đề Ethernet của một gói tin BPDU:

![image](https://github.com/psaumur/CCNA/assets/106411237/0e68839f-c4ec-448b-8876-791212462009)

```
💡 PVST+ sử dụng ĐỊA CHỈ MAC: 
01 : 00 : 0c : cc : cc : cd

PVST = CHỈ dùng kiểu đóng gói Trunk ISL.
PVST+ = Hỗ trợ 802.1Q.

💡 STP thông thường (không phải PVST+ của Cisco) sử dụng ĐỊA CHỈ MAC: 
01 : 80 : c2 : 00 : 00 : 00

💡 Các BỘ ĐẾM GIỜ STP trên CẦU GỐC sẽ quyết định TẤT CẢ CÁC BỘ ĐẾM GIỜ STP cho toàn bộ mạng!
```

---

CÁC TÍNH NĂNG TÙY CHỌN CỦA STP (STP TOOLKIT)

PORTFAST:

- Có thể được Bật trên các GIAO DIỆN đang được kết nối với CÁC THIẾT BỊ ĐẦU CUỐI (END HOSTS).

```
💡 PORTFAST cho phép một CỔNG chuyển ngay lập tức sang trạng thái CHUYỂN TIẾP, bỏ qua giai đoạn LẮNG NGHE và HỌC TẬP.
```

- Nếu sử dụng, nó CHỈ ĐƯỢC PHÉP BẬT trên các CỔNG kết nối tới CÁC THIẾT BỊ ĐẦU CUỐI.
- Nếu BẬT trên một CỔNG kết nối với một SWITCH khác, nó có thể gây ra VÒNG LẶP LỚP 2.

![image](https://github.com/psaumur/CCNA/assets/106411237/43c91f09-0d9f-4b81-b5a2-f02003e25b88)


Bạn cũng có thể BẬT PORTFAST bằng lệnh sau:

```
💡 SW1(config)# spanning-tree portfast default
```

Lệnh này BẬT PORTFAST trên TẤT CẢ CÁC CỔNG TRUY CẬP (ACCESS PORTS - không phải cổng TRUNK).

BPDU GUARD (Bảo vệ BPDU):

- Nếu một GIAO DIỆN đã BẬT BPDU GUARD mà nhận được một gói tin BPDU từ một SWITCH khác, GIAO DIỆN đó sẽ bị ĐÓNG (SHUT DOWN) để ngăn chặn việc hình thành vòng lặp.

![image](https://github.com/psaumur/CCNA/assets/106411237/00c61767-72 b4-4d51-b964-f76b6f4f6ae9)


Bạn cũng có thể BẬT BPDU GUARD bằng lệnh sau:

```
💡 SW1(config)# spanning-tree portfast bpduguard default
```

Lệnh này BẬT BPDU GUARD trên tất cả các GIAO DIỆN đã được bật PORTFAST.

ROOT GUARD / LOOP GUARD (Bảo vệ Gốc / Bảo vệ Vòng lặp):

![image](https://github.com/psaumur/CCNA/assets/106411237/bb38aedc-df38-4d76-b6cb-30319e74ecc1)


Có thể bạn không cần phải biết các tính năng tùy chọn này của STP (hoặc các tính năng khác như UplinkFast, Backbone Fast, v.v.) cho kỳ thi CCNA.

NHƯNG…

```
💡 Hãy chắc chắn rằng bạn hiểu rõ về PORTFAST và BPDU GUARD.
```

---

CẤU HÌNH STP

Lệnh để CẤU HÌNH chế độ Cây khung trên một SWITCH:

![image](https://github.com/psaumur/CCNA/assets/106411237/f29e2f41-3fac-463c-ab14-bb2d2f49816d)


Các SWITCH Cisco hiện đại mặc định chạy **rapid-pvst**.

---

CẤU HÌNH CẦU GỐC CHÍNH (PRIMARY ROOT BRIDGE)

Lệnh để CẤU HÌNH CẦU GỐC CHÍNH Spanning-Tree trên một SWITCH:

![image](https://github.com/psaumur/CCNA/assets/106411237/e90f16ad-c85c-4868-bbf4-9095c0abd581)


Xác nhận bằng lệnh “(do) show spanning-tree”.

Có thể thấy trong ví dụ trên, SW3 đã trở thành “root”.

- Lệnh “spanning-tree vlan <số-vlan> root primary” thiết lập ĐỘ ƯU TIÊN STP thành 24576. Nếu một SWITCH khác đã có số độ ưu tiên thấp hơn 24576, nó sẽ thiết lập độ ưu tiên của SWITCH này THẤP HƠN 4096 ĐƠN VỊ so với độ ưu tiên của SWITCH kia (hãy nhớ bài giảng STP PHẦN 1).

---

CẦU GỐC PHỤ (SECONDARY ROOT BRIGE - Cầu gốc dự phòng)

Lệnh để CẤU HÌNH CẦU GỐC PHỤ Spanning-Tree trên một SWITCH:

![image](https://github.com/psaumur/CCNA/assets/106411237/7d28f782-4673-4bc8-9aae-999aeac90685)


- Lệnh “spanning-tree vlan <số-vlan> root secondary” thiết lập ĐỘ ƯU TIÊN STP thành 28672 (cao hơn chính xác 4096 đơn vị so với 24576).

---

CẤU TRÚC LIÊN KẾT VLAN 1 chạy PVST+

![image](https://github.com/psaumur/CCNA/assets/106411237/880a4cc7-e472-4764-a68b-a62288066796)


SW1 TRƯỚC ĐÂY là CẦU GỐC CHÍNH nhưng:

- Chúng ta đã cấu hình SW3 làm CHÍNH (PRIMARY).
- Chúng ta đã cấu hình SW2 làm PHỤ (SECONDARY).

Tuy nhiên, cấu trúc liên kết cho VLAN 2 sẽ không thay đổi. Nó vẫn sẽ là Cấu trúc cũ.

![image](https://github.com/psaumur/CCNA/assets/106411237/2cedeb36-27f1-4984-96e7-28ab70957c51)


TẠI SAO?
Bởi vì chúng ta CHỈ thực hiện các thay đổi đối với CẤU TRÚC LIÊN KẾT nằm trong VLAN 1 (hãy xem các lệnh chúng ta đã dùng).

---

CẤU HÌNH CÁC CÀI ĐẶT CỔNG STP (STP PORT SETTINGS)

![image](https://github.com/psaumur/CCNA/assets/106411237/58af0a8d-eeb4-4c34-8b54-6b8ff511695c)


“cost” = “ROOT COST” (Chi phí đến gốc).

“port-priority” = “PORT PRIORITY” (Độ ưu tiên của cổng).
