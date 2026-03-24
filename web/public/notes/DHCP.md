# 39. DHCP (Giao thức Cấu hình Máy chủ Động - Dynamic Host Configuration Protocol)

MỤC ĐÍCH CỦA DHCP

- DHCP được sử dụng để cho phép CÁC MÁY TRẠM (HOSTS) tự động/động học được các khía cạnh khác nhau trong cấu hình MẠNG của chúng; mà không cần cấu hình THỦ CÔNG / TĨNH.
- Nó là một phần THIẾT YẾU của CÁC MẠNG hiện đại.
    - Khi bạn kết nối điện thoại / máy tính xách tay vào WiFi, bạn có hỏi quản trị viên MẠNG xem điện thoại / máy tính xách tay đó nên sử dụng ĐỊA CHỈ IP, SUBNET MASK, DEFAULT GATEWAY, v.v. nào không?
- Thường được sử dụng cho CÁC thiết bị KHÁCH (máy trạm, điện thoại, v.v.).
- CÁC THIẾT BỊ (như ROUTER, MÁY CHỦ, v.v.) thường được cấu hình THỦ CÔNG.
- Trong CÁC MẠNG nhỏ (như MẠNG gia đình), ROUTER thường đóng vai trò là MÁY CHỦ DHCP cho các MÁY TRẠM trong mạng LAN.
- Trong CÁC MẠNG LỚN, MÁY CHỦ DHCP thường là một MÁY CHỦ Windows / Linux.

---

CÁC CHỨC NĂNG CƠ BẢN CỦA DHCP

![image](https://github.com/psaumur/CCNA/assets/106411237/81b1e260-d669-4944-aa7b-5b7e6a505233)

![image](https://github.com/psaumur/CCNA/assets/106411237/8e7ff968-f47f-4877-88ec-451a9828905e)

![image](https://github.com/psaumur/CCNA/assets/106411237/ca9253f6-3e97-42d8-9293-7b271488be78)

![image](https://github.com/psaumur/CCNA/assets/106411237/b4659586-9e8b-482e-a492-fab9f979aa40)

![image](https://github.com/psaumur/CCNA/assets/106411237/bd292766-0a22-4c0a-ac96-0262ba03d720)

Lưu ý: TẤT CẢ các địa chỉ IP đều giống nhau vì đây là ROUTER gia đình của Jeremy (nó cung cấp tất cả các dịch vụ này).

Lệnh `ipconfig /release`

![image](https://github.com/psaumur/CCNA/assets/106411237/13c9528b-8ecb-43e3-a3be-9993c03e1fa5)

![image](https://github.com/psaumur/CCNA/assets/106411237/46821c80-1fa1-435c-b71f-f2a81a2a415a)

Bản ghi Wireshark của cơ chế `ipconfig /release`

![image](https://github.com/psaumur/CCNA/assets/106411237/f9eb66a1-9c7e-4b5c-9393-9005f51ad172)

![image](https://github.com/psaumur/CCNA/assets/106411237/16e2b443-6ab6-49c4-bfde-2083c7b2185e)

---

Lệnh `ipconfig /renew`

![image](https://github.com/psaumur/CCNA/assets/106411237/de06e7a3-b011-48eb-a5c6-8a6295258fbc)

Quá trình làm mới (Renewing) có BỐN thông điệp:

![image](https://github.com/psaumur/CCNA/assets/106411237/94febcd6-cd2b-4f6d-97db-69e33b1c1c4d)

1) DHCP DISCOVER

- Có bất kỳ Máy chủ DHCP nào trong MẠNG này không? Tôi cần một ĐỊA CHỈ IP?

![image](https://github.com/psaumur/CCNA/assets/106411237/70f7fc01-3222-4fec-8bd3-8b96cfbc086f)

LƯU Ý việc sử dụng các Cổng Dự phòng của DHCP là 67 và 68.

2) DHCP OFFER:

- Địa chỉ IP NÀY thì sao?

![image](https://github.com/psaumur/CCNA/assets/106411237/0f6e38bc-5eb0-4538-b0d1-e5795ee3af3a)

- Thông điệp DHCP OFFER có thể là QUẢNG BÁ (BROADCAST) hoặc ĐƠN HƯỚNG (UNICAST).
- LƯU Ý các TÙY CHỌN (OPTIONS) ở phía dưới: Loại thông điệp, ID máy chủ, Thời gian thuê, Mạng con, v.v.

3) DHCP REQUEST

- Tôi muốn sử dụng ĐỊA CHỈ IP đã được đề nghị.

![image](https://github.com/psaumur/CCNA/assets/106411237/3023a977-2477-42ec-8890-283ef326bad1)

4) DHCP ACK

- Được rồi! Bạn có thể sử dụng ĐỊA CHỈ ĐÓ.

![image](https://github.com/psaumur/CCNA/assets/106411237/543c77e8-326b-45c6-a149-2f3668dac3ff)

---

TỔNG KẾT QUÁ TRÌNH DHCP RENEW

![image](https://github.com/psaumur/CCNA/assets/106411237/a2f5cc4e-c949-4a8d-a985-29c6631c635e)

---

DHCP RELAY (CHUYỂN TIẾP DHCP)

- Một số kỹ sư MẠNG có thể chọn cấu hình mỗi ROUTER đóng vai trò là MÁY CHỦ DHCP cho các mạng LAN được kết nối với nó.
- Tuy nhiên, các doanh nghiệp lớn thường chọn sử dụng một MÁY CHỦ DHCP TẬP TRUNG.
- Nếu MÁY CHỦ được đặt tập trung, nó sẽ không nhận được các thông điệp DHCP Quảng bá từ CÁC MÁY KHÁCH DHCP.
- Để KHẮC PHỤC điều này, bạn có thể cấu hình một ROUTER đóng vai trò là một ĐẠI LÝ CHUYỂN TIẾP DHCP (DHCP RELAY AGENT).
- ROUTER sẽ chuyển tiếp các thông điệp DHCP Quảng bá của máy khách tới MÁY CHỦ DHCP từ xa dưới dạng các thông điệp Đơn hướng (Unicast).

![image](https://github.com/psaumur/CCNA/assets/106411237/3c0b188e-a120-499e-b089-18740d0d4559)

![image](https://github.com/psaumur/CCNA/assets/106411237/04c380f4-e1b4-46f3-89ab-1c89f16eed7a)

---

CẤU HÌNH DHCP TRONG CISCO IOS

Các câu lệnh để cấu hình MÁY CHỦ DHCP trong Cisco IOS

![image](https://github.com/psaumur/CCNA/assets/106411237/5cac378b-2769-4da2-bd46-1bd93dd5d144)

Lệnh `show ip dhcp binding`

![image](https://github.com/psaumur/CCNA/assets/106411237/2cb89226-c24f-4cac-86f0-5cfb5ba16575)

![image](https://github.com/psaumur/CCNA/assets/106411237/4e10257e-2ca8-466f-96fc-f4a02ab319a4)

---

CẤU HÌNH ĐẠI LÝ CHUYỂN TIẾP DHCP (DHCP RELAY AGENT) TRONG IOS

![image](https://github.com/psaumur/CCNA/assets/106411237/d1e1df72-85ef-4323-87f4-26cf14132bda)

ĐẠI LÝ CHUYỂN TIẾP PHẢI CÓ KHẢ NĂNG KẾT NỐI VỚI MÁY CHỦ DHCP.

---

CẤU HÌNH MÁY KHÁCH DHCP TRONG IOS

![image](https://github.com/psaumur/CCNA/assets/106411237/353e553c-b4a5-4f18-818f-3d7a395491b3)

---

TỔNG KẾT CÁC CÂU LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/41e4ab84-7d5d-42e6-93d7-4b982976dd16)
