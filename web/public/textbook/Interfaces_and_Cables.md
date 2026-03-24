# 2. CỔNG KẾT NỐI VÀ CÁP (INTERFACES AND CABLES)

SWITCH cung cấp nhiều CỔNG (PORTS) để kết nối (thường là 24 cổng).

Các CỔNG này thường là loại cổng RJ-45 (Registered Jack).

---

ETHERNET LÀ GÌ?

- Ethernet là một tập hợp các giao thức/tiêu chuẩn mạng.

Tại sao chúng ta cần các giao thức và tiêu chuẩn mạng?

- Cung cấp các tiêu chuẩn giao tiếp chung trên mạng.
- Cung cấp các tiêu chuẩn phần cứng chung để cho phép kết nối giữa các thiết bị.

Các kết nối giữa các thiết bị hoạt động ở một tốc độ nhất định.

Tốc độ này được đo bằng "bit trên giây" (bits per second - bps).

Một bit có giá trị là "0" hoặc "1".
Một byte bằng 8 bit (các số 0 và 1).

| Kích thước | Số lượng Bit |
| --- | --- |
| 1 kilobit (Kb) | 1,000 |
| 1 megabit (Mb) | 1,000,000 |
| 1 gigabit (Gb) | 1,000,000,000 |
| 1 terabit (Tb) | 1,000,000,000,000 |

Các tiêu chuẩn Ethernet là:

- Được định nghĩa trong tiêu chuẩn IEEE 802.3 năm 1983.
- IEEE = Viện Kỹ nghệ Điện và Điện tử (Institute of Electrical and Electronics Engineers).

TIÊU CHUẨN ETHERNET (CÁP ĐỒNG)

| Tốc độ | Tên thông dụng | Tiêu chuẩn | Loại cáp | Khoảng cách truyền tối đa |
| --- | --- | --- | --- | --- |
| 10 Mbps | Ethernet | 802.3i | 10BASE-T | Tối đa 100m |
| 100 Mbps | Fast Ethernet | 802.3u | 100BASE-T | Tối đa 100m |
| 1 Gbps | Gigabit Ethernet | 802.3ab | 1000BASE-T | Tối đa 100m |
| 10 Gbps | 10 Gigabit Ethernet | 802.3an | 10GBASE-T | Tối đa 100m |

BASE = đề cập đến Truyền dẫn băng thông cơ sở (Baseband Signaling).

T = Cặp dây xoắn (Twisted Pair).

Hầu hết Ethernet sử dụng cáp đồng.

UTP hay Cặp dây xoắn không bọc giáp (Unshielded Twisted Pair).
(không có lớp bọc kim loại).
Việc xoắn dây giúp chống nhiễu điện từ (EMI - Electromagnetic Interference).

Hầu hết sử dụng 8 dây (4 cặp) tuy nhiên ...

10/100BASE-T = 2 cặp (4 dây).

![image](https://github.com/psaumur/CCNA/assets/106411237/00b27997-a78a-4e81-a878-7f8ab7e3279e)

---

Làm thế nào các thiết bị giao tiếp thông qua các kết nối của chúng?

Mỗi cáp Ethernet có một đầu cắm RJ-45 với 8 chân (pins) ở các đầu.

![image](https://github.com/psaumur/CCNA/assets/106411237/323930c9-3387-4bf9-aae1-f61db0fd9c04)

- PC Truyền (TX) dữ liệu trên các Chân số 1-2.
- Switch Nhận (RX) dữ liệu trên các Chân số 1-2.
- PC Nhận (RX) dữ liệu trên các Chân số 3,6.
- Switch Truyền (TX) dữ liệu trên các Chân số 3,6.

Điều này cho phép truyền dữ liệu Song công toàn phần (Full-Duplex).

---

Nếu kết nối giữa Router và Switch thì sao?

![image](https://github.com/psaumur/CCNA/assets/106411237/907259d9-1837-4d53-8f45-a42934fb66f2)

- Router Truyền (TX) dữ liệu trên các Chân số 1-2.
- Router Nhận (RX) dữ liệu trên các Chân số 3,6.
- Switch Truyền (TX) dữ liệu trên các Chân số 3,6.
- Switch Nhận (RX) dữ liệu trên các Chân số 1-2.

Router và PC kết nối với Switch theo cùng một cách.

Cáp được sử dụng để kết nối này được gọi là cáp "Thẳng" (Straight-Through).

---

Nếu chúng ta muốn kết nối các thiết bị giống nhau với nhau thì sao?

Chúng ta KHÔNG THỂ sử dụng cáp "Thẳng".
Chúng ta PHẢI sử dụng cáp "Chéo" (Crossover).

Cáp này hoán đổi các chân ở một đầu để cho phép kết nối hoạt động.

![image](https://github.com/psaumur/CCNA/assets/106411237/d98646ad-366f-4e96-8c6f-f6b5f32f9bdc)

CHÂN #1 -----> CHÂN #3
CHÂN #2 -----> CHÂN #6

CHÂN #3 -----> CHÂN #1
CHÂN #6 -----> CHÂN #2

---

| LOẠI THIẾT BỊ | CÁC CHÂN TRUYỀN (TX) | CÁC CHÂN NHẬN (RX) |
| --- | --- | --- |
| ROUTER | 1 và 2 | 3 và 6 |
| FIREWALL | 1 và 2 | 3 và 6 |
| PC | 1 and 2 | 3 and 6 |
| SWITCH | 3 and 6 | 1 and 2 |

---

Hầu hết các thiết bị hiện đại ngày nay đều có tính năng AUTO MDI-X, giúp **tự động phát hiện** chân nào thiết bị lân cận đang truyền và điều chỉnh các chân mà chúng nhận dữ liệu.

1000BASE-T/10GBASE-T = 4 cặp (8 dây).

Mỗi cặp dây là **hai chiều (bidirectional)** nên có thể truyền/nhận nhanh hơn nhiều so với 10/100BASE-T.

![image](https://github.com/psaumur/CCNA/assets/106411237/763c841a-d7b5-4e87-8500-b54d623af620)

---

Kết nối Cáp quang (Fiber-Optic):

- Được định nghĩa trong tiêu chuẩn IEEE 802.3ae.

Module quang SFP (Small Form-Factor Pluggable) cho phép cáp quang kết nối vào switch/router.

- Có các sợi cáp riêng biệt để truyền / nhận.

Cáp quang gồm 4 phần chính.

![image](https://github.com/psaumur/CCNA/assets/106411237/70b81cde-265f-413b-815b-3e7184ea0586)

Có HAI loại cáp quang chính:

Chế độ đơn (Single-Mode):

![image](https://github.com/psaumur/CCNA/assets/106411237/d9a4b633-44c2-491d-92e4-329dd3b9074b)

- Lõi hẹp hơn so với cáp đa mốt.
- Ánh sáng đi vào ở một góc duy nhất (mode) từ bộ phát laser.
- Cho phép chiều dài cáp dài hơn cả cáp UTP và cáp quang đa mốt.
- Đắt hơn cáp đa mốt (do bộ phát SFP dựa trên laser đắt tiền hơn).

Đa mốt (Multimode):

![image](https://github.com/psaumur/CCNA/assets/106411237/e73ec4d0-9aa1-4a75-848c-3af70e770dce)

- Lõi rộng hơn so với cáp đơn mốt.
- Cho phép nhiều góc độ (modes) sóng ánh sáng đi vào lõi.
- Cho phép chiều dài cáp dài hơn cáp UTP nhưng ngắn hơn cáp đơn mốt.
- Rẻ hơn cáp đơn mốt (do bộ phát SFP dựa trên LED rẻ hơn).

---

Tiêu chuẩn Cáp quang:

| Tốc độ | Tiêu chuẩn | Tốc độ kết nối | Hỗ trợ Chế độ (Mode) | Khoảng cách truyền tối đa |
| --- | --- | --- | --- | --- |
| 1000BASE-LX | 802.3z | 1 Gbps | Đa mốt / Đơn mốt | 550 mét (Đa mốt) / 5km (Đơn mốt) |
| 10GBASE-SR | 802.3ae | 10 Gbps | Đa mốt | 400 mét |
| 10GBASE-LR | 802.3ae | 10 Gbps | Đơn mốt | 10 km |
| 10GBASE-ER | 802.3ae | 10 Gbps | Đơn mốt | 30 km |

---

So sánh cáp UTP và cáp quang:

Cáp UTP:

- Chi phí thấp hơn cáp quang.
- Khoảng cách tối đa ngắn hơn cáp quang (~100m).
- Có thể bị ảnh hưởng bởi nhiễu điện từ (EMI).
- Cổng RJ45 dùng với UTP rẻ hơn cổng SFP.
- Phát xạ (rò rỉ) tín hiệu yếu ra ngoài cáp, có thể bị sao chép (nguy cơ bảo mật).

Cáp quang:

- Chi phí cao hơn UTP.
- Khoảng cách tối đa dài hơn UTP.
- Không bị ảnh hưởng bởi nhiễu điện từ (EMI).
- Cổng SFP đắt hơn cổng RJ45 (đơn mốt đắt hơn đa mốt).
- Không phát xạ bất kỳ tín hiệu nào ra ngoài cáp (không có nguy cơ bảo mật).
