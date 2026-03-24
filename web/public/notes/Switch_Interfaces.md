# 9. CÁC GIAO DIỆN CỦA SWITCH (SWITCH INTERFACES)

![image](https://github.com/psaumur/CCNA/assets/106411237/5d0d80dc-74d1-4656-841c-fcaa2b89c760)


CISCO CLI CHO SWITCH

![image](https://github.com/psaumur/CCNA/assets/106411237/e3947ef5-9100-426f-8d62-fd4ce5224351)


// Vào chế độ Privileged EXEC

SW1>enable

// Hiển thị tóm tắt tất cả các giao diện của Switch 1.

SW# show ip interface brief

Lệnh này sẽ hiển thị các giao diện hiện có trên Switch 1. Nó có cấu trúc thông tin tương tự như trên Router Cisco.

Lưu ý các cột Trạng thái (Status - Lớp 1) và Giao thức (Protocol - Lớp 2) đang hiển thị "up/up".

Khác với ROUTER, các SWITCH mặc định KHÔNG ở trạng thái bị tắt (administrative down/down).

Các thiết bị chưa kết nối sẽ hiển thị là "down" và "down" (chưa kết nối với thiết bị khác).

![image](https://github.com/psaumur/CCNA/assets/106411237/e0fdc339-21d9-4313-b7d8-78303a7ba1ea)


// Hiển thị trạng thái của tất cả các giao diện trên SW1

SW1#show interfaces status

Lệnh này sẽ liệt kê:

- Ports (Cổng)
- Name (Tên - chính là mô tả/description)
- Status (Trạng thái kết nối)
- Vlan (Có thể dùng để chia nhỏ các mạng LAN) - Vlan 1 là mặc định.
- Duplex (Kết nối có thể gửi/nhận cùng lúc không?) - Mặc định là Auto (Tự động).
- Speed (Tốc độ tính bằng bps) - Mặc định là Auto.
- Type (Loại môi trường truyền dẫn, tốc độ giao diện).

---

![image](https://github.com/psaumur/CCNA/assets/106411237/12a33be7-795f-467a-87a4-42c5b218960b)


![image](https://github.com/psaumur/CCNA/assets/106411237/7b5953f7-77d3-4826-8efc-072498a7f9c0)


---

DẢI GIAO DIỆN (INTERFACE RANGE)

Các giao diện không sử dụng có thể gây ra rủi ro bảo mật, vì vậy bạn nên vô hiệu hóa chúng.

Tuy nhiên, nếu bạn có hơn 28 giao diện không sử dụng, bạn có phải thực hiện từng cái một không?

Trả lời: Không! Có một lệnh để áp dụng cấu hình cho một dải các giao diện.

Trong chế độ Cấu hình Toàn cầu (config t):

![image](https://github.com/psaumur/CCNA/assets/106411237/06e2e267-1e07-48a1-8c8c-8edbd5bd48ae)


SW1(config)#interface range f0/5 - 12   // Chọn tất cả các giao diện từ 0/5 đến 0/12

SW1(config-if-range)#description ## not in use ## (không sử dụng)

SW1(config-if-range)#shutdown

<< Lệnh này sẽ liệt kê tất cả các giao diện đang được chuyển sang trạng thái administratively down >>

Xác nhận bằng lệnh 'show interface status' trong chế độ Privileged EXEC hoặc nếu đang ở chế độ CONFIG, hãy dùng 'do show interface status'.

![image](https://github.com/psaumur/CCNA/assets/106411237/8d1d49d3-e000-4570-ab7e-b994b959ebd5)

---

SONG CÔNG TOÀN PHẦN / BÁN SONG CÔNG (FULL / HALF DUPLEX)

BÁN SONG CÔNG (HALF DUPLEX):

- Thiết bị không thể gửi và nhận dữ liệu cùng một lúc. Nếu nó đang nhận một khung tin, nó phải đợi trước khi gửi một khung tin khác.

SONG CÔNG TOÀN PHẦN (FULL DUPLEX):

- Thiết bị CÓ THỂ gửi và nhận dữ liệu cùng một lúc. Nó không cần phải chờ đợi.

Hầu hết các SWITCH hiện đại đều hỗ trợ SONG CÔNG TOÀN PHẦN.

---

Hệ thống BÁN SONG CÔNG được sử dụng ở đâu? Hầu như không còn ở đâu nữa.

Trong quá khứ, các thiết bị HUB sử dụng BÁN SONG CÔNG.

Khi HUB nhận được nhiều gói tin cùng lúc, nó chỉ đơn giản là đẩy tràn (flood) dữ liệu khung tin ra các kết nối, gây ra XUNG ĐỘT (COLLISION) trên giao diện, và các máy chủ sẽ không nhận được khung tin nguyên vẹn.

Tất cả các thiết bị kết nối vào một HUB được gọi là một MIỀN XUNG ĐỘT (COLLISION DOMAIN).

Để XỬ LÝ XUNG ĐỘT, các thiết bị Ethernet sử dụng một cơ chế gọi là CSMA/CD.

CSMA/CD = Carrier Sense Multiple Access with Collision Detection (Đa truy cập cảm biến sóng mang phát hiện xung đột).

- Trước khi gửi khung tin, các thiết bị 'lắng nghe' miền xung đột cho đến khi chúng phát hiện ra rằng các thiết bị khác không gửi dữ liệu.
- NẾU có xung đột xảy ra, thiết bị sẽ gửi một tín hiệu gây nhiễu (jamming signal) để thông báo cho các thiết bị khác rằng đã có xung đột bài viết.
- Mỗi thiết bị sẽ đợi một khoảng thời gian ngẫu nhiên trước khi gửi lại khung tin.
- Quy trình này lặp lại.

---

SWITCH tinh vi hơn HUB rất nhiều.

HUB là thiết bị Lớp 1 - Xung đột thường xuyên xảy ra và sử dụng CSMA/CD.
SWITCH là thiết bị Lớp 2 - Xung đột HIẾM KHI xảy ra.

---

![image](https://github.com/psaumur/CCNA/assets/106411237/feff3816-1449-4282-bc44-71575333a1e0)


TỰ ĐỘNG THƯƠNG LƯỢNG TỐC ĐỘ / CHẾ ĐỘ SONG CÔNG (SPEED / DUPLEX AUTONEGOTIATION)

- Các giao diện có thể hoạt động ở các tốc độ khác nhau (10/100 hoặc 10/100/1000) có cài đặt mặc định là SPEED AUTO và DUPLEX AUTO.
- Các giao diện 'quảng bá' khả năng của chúng tới thiết bị lân cận, và chúng thương lượng các cài đặt TỐC ĐỘ và CHẾ ĐỘ SONG CÔNG tốt nhất mà cả hai đều có khả năng đáp ứng.

Điều gì xảy ra nếu TỰ ĐỘNG THƯƠNG LƯỢNG bị VÔ HIỆU HÓA trên thiết bị kết nối với SWITCH?

![image](https://github.com/psaumur/CCNA/assets/106411237/30519cf7-0a79-4996-a8d8-dfac689f4005)


- TỐC ĐỘ (SPEED): SWITCH sẽ cố gắng gửi ở tốc độ mà thiết bị kia đang hoạt động.
Nếu thất bại trong việc xác định tốc độ, nó sẽ sử dụng tốc độ chậm nhất được hỗ trợ (ví dụ: 10 Mbps trên một giao diện 10/100/1000).
- CHẾ ĐỘ SONG CÔNG (DUPLEX): Nếu tốc độ là 10 hoặc 100 Mbps, SWITCH sẽ sử dụng BÁN SONG CÔNG (HALF DUPLEX).
Nếu tốc độ là 1000 Mbps hoặc cao hơn, nó sẽ sử dụng SONG CÔNG TOÀN PHẦN (FULL DUPLEX).

---

BỘ ĐẾM GIAO DIỆN VÀ LỖI (INTERFACE COUNTERS AND ERRORS)

Xem bằng cách dùng lệnh:

// Chế độ Privileged EXEC

SW1#show interfaces <tên giao diện>

Số liệu thống kê lỗi sẽ nằm ở phía dưới.

![image](https://github.com/psaumur/CCNA/assets/106411237/20d6affd-6014-427d-9ad9-c638ace358f8)


**Packets Received / Total bytes received**: Số gói tin đã nhận / Tổng số byte đã nhận.

**Runts**: Các khung tin nhỏ hơn kích thước khung hình tối thiểu (64 byte).

**Giants**: Các khung tin lớn hơn kích thước khung hình tối đa (1518 byte).

**CRC**: Các khung tin không vượt qua được kiểm tra CRC (trong phần đuôi Ethernet FCS).

**Frame**: Các khung tin có định dạng không chính xác (do lỗi).

**Input errors**: Tổng số các lỗi khác nhau, chẳng hạn như bốn lỗi kể trên.

**Output errors**: Các khung tin mà SWITCH cố gắng gửi đi nhưng thất bại do lỗi.
