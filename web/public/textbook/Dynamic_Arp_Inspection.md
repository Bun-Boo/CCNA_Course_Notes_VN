# 51. KIỂM TRA ARP ĐỘNG (DAI - DYNAMIC ARP INSPECTION)

KIỂM TRA ARP ĐỘNG (DAI) LÀ GÌ?

ÔN TẬP VỀ ARP

- ARP được sử dụng để học ĐỊA CHỈ MAC của một THIẾT BỊ khác khi đã biết ĐỊA CHỈ IP của nó.
    - Ví dụ, một PC sẽ sử dụng ARP để học ĐỊA CHỈ MAC của CỔNG MẶC ĐỊNH (DEFAULT GATEWAY) của nó để liên lạc với CÁC MẠNG bên ngoài.
- Thông thường, đó là một cuộc TRẢO ĐỔI HAI THÔNG ĐIỆP: ARP REQUEST (Yêu cầu) và ARP REPLY (Phản hồi).

ARP MIỄN PHÍ (GRATUITOUS ARP)

- Một THÔNG ĐIỆP GRATUITOUS ARP (GARP) là một phản hồi ARP REPLY được gửi đi mà không cần nhận được một yêu cầu ARP REQUEST nào trước đó.
- Nó được GỬI tới ĐỊA CHỈ MAC QUẢNG BÁ (BROADCAST).
- Nó cho phép CÁC THIẾT BỊ khác học được ĐỊA CHỈ MAC của thiết bị gửi mà không cần phải gửi các yêu cầu ARP REQUEST.
- Một số THIẾT BỊ tự động gửi các THÔNG ĐIỆP GARP khi một GIAO DIỆN được kích hoạt, địa chỉ IP bị thay đổi, địa chỉ MAC bị thay đổi, v.v.

KIỂM TRA ARP ĐỘNG (DYNAMIC ARP INSPECTION)

- DAI là một TÍNH NĂNG BẢO MẬT của CÁC SWITCH được sử dụng để lọc CÁC THÔNG ĐIỆP ARP nhận được trên *CÁC CỔNG KHÔNG TIN CẬY (UNTRUSTED PORTS)*.
- DAI chỉ lọc CÁC THÔNG ĐIỆP ARP. Các THÔNG ĐIỆP không phải ARP sẽ KHÔNG bị ảnh hưởng.
- TẤT CẢ CÁC CỔNG đều là *KHÔNG TIN CẬY (UNTRUSTED)*, theo MẶC ĐỊNH.
    - Thông thường, tất cả CÁC CỔNG được kết nối tới CÁC THIẾT BỊ MẠNG khác (SWITCHES, ROUTERS) nên được cấu hình là TIN CẬY (TRUSTED), trong khi CÁC GIAO DIỆN kết nối tới CÁC MÁY TRẠM (END HOSTS) nên giữ nguyên là KHÔNG TIN CẬY.

![image](https://github.com/psaumur/CCNA/assets/106411237/02da32ef-654c-4755-abcd-ea8230df4029)

![image](https://github.com/psaumur/CCNA/assets/106411237/29744383-746e-47be-8220-ba1a641a7a11)

![image](https://github.com/psaumur/CCNA/assets/106411237/6848c2b5-e866-4023-9ad9-c18f63aa6bb5)

---

ĐẦU ĐỘC ARP (ARP POISONING - Tấn công Xen giữa)

- Tương tự như ĐẦU ĐỘC DHCP, ĐẦU ĐỘC ARP liên quan đến việc KẺ TẤN CÔNG thao túng CÁC BẢNG ARP của MỤC TIÊU để LƯU LƯỢNG được gửi tới KẺ TẤN CÔNG.
- Để làm điều này, KẺ TẤN CÔNG có thể gửi các THÔNG ĐIỆP GRATUITOUS ARP sử dụng ĐỊA CHỈ IP của một THIẾT BỊ khác.
- CÁC THIẾT BỊ khác trong MẠNG sẽ nhận được gói GARP đó và cập nhật CÁC BẢNG ARP của chúng, khiến chúng gửi LƯU LƯỢNG tới KẺ TẤN CÔNG thay vì tới ĐÍCH hợp lệ.

![image](https://github.com/psaumur/CCNA/assets/106411237/aae80c8f-2673-4c04-a206-9b646f5c1f08)

CÁCH THỨC HOẠT ĐỘNG CỦA KIỂM TRA ARP ĐỘNG

- DAI kiểm tra các trường SENDER MAC (MAC người gửi) và SENDER IP (IP người gửi) của CÁC THÔNG ĐIỆP ARP nhận được trên CÁC CỔNG KHÔNG TIN CẬY và kiểm tra xem có mục nhập tương ứng nào trong BẢNG LIÊN KẾT GIÁM SÁT DHCP (DHCP SNOOPING BINDING TABLE) hay không.
    - Nếu có một SỰ KHỚP NHAU (MATCH), THÔNG ĐIỆP ARP sẽ được CHUYỂN TIẾP.
    - Nếu KHÔNG CÓ SỰ KHỚP NHAU (NO MATCH), THÔNG ĐIỆP ARP sẽ bị LOẠI BỎ.

![image](https://github.com/psaumur/CCNA/assets/106411237/060f3d3a-b2fd-46a1-8b3c-7a6839985c87)

- DAI không kiểm tra các thông điệp nhận được trên CÁC CỔNG TIN CẬY. Chúng sẽ được CHUYỂN TIẾP như bình thường.

- CÁC ACL ARP có thể được cấu hình thủ công để ánh xạ CÁC ĐỊA CHỈ IP / ĐỊA CHỈ MAC cho DAI kiểm tra.
    - Hữu ích cho CÁC MÁY TRẠM không sử dụng DHCP.
    
- DAI cũng có thể được cấu hình để thực hiện các bước kiểm tra chuyên sâu hơn - nhưng đây là những tùy chọn không bắt buộc.

- Giống như DHCP SNOOPING, DAI cũng hỗ trợ GIỚI HẠN TỐC ĐỘ (RATE-LIMITING) để ngăn chặn KẺ TẤN CÔNG làm quá tải SWITCH bằng CÁC THÔNG ĐIỆP ARP.
    - DHCP SNOOPING và DAI đều yêu cầu CPU của SWITCH phải xử lý.
    - Ngay cả khi các thông điệp của KẺ TẤN CÔNG bị CHẶN, chúng vẫn có thể làm QUÁ TẢI CPU của SWITCH với các THÔNG ĐIỆP ARP.

---

CẤU HÌNH KIỂM TRA ARP ĐỘNG

![image](https://github.com/psaumur/CCNA/assets/106411237/4a91bd7b-626a-4d64-b69a-308d65bbdda4)

![image](https://github.com/psaumur/CCNA/assets/106411237/774765fa-4918-4cd9-bb64-57130968c359)

Lệnh : `show ip arp inspection interfaces`

![image](https://github.com/psaumur/CCNA/assets/106411237/e64a568e-e5c6-442b-98f7-4fe829ff7519)

GIỚI HẠN TỐC ĐỘ DAI (RATE LIMITING)

![image](https://github.com/psaumur/CCNA/assets/106411237/6400e059-2c8c-4369-827d-7774fddd57eb)

CÁC BƯỚC KIỂM TRA TÙY CHỌN CỦA DAI

![image](https://github.com/psaumur/CCNA/assets/106411237/0e6b780a-16ef-466a-bfd3-8dd2cdace4ad)

![image](https://github.com/psaumur/CCNA/assets/106411237/1f109b81-9c9b-4acd-9557-0b652ba29b8d)

![image](https://github.com/psaumur/CCNA/assets/106411237/dd78740a-4f41-43aa-8ed2-3fa574acc0f9)

CÁC ACL ARP (Vượt ngoài phạm vi CCNA)

TẠO MỘT BẢN ACL ARP CHO SRV1

![image](https://github.com/psaumur/CCNA/assets/106411237/cf121a75-45b2-4e2d-a35f-320e3f5491fa)

SAU KHI ÁP DỤNG NÓ CHO SWITCH 2, SRV1 có thể gửi ARP REQUEST tới R1

![image](https://github.com/psaumur/CCNA/assets/106411237/582feed0-1915-4f59-b3b9-9db37854c6e1)

Lệnh: `show ip arp inspection`

Hiển thị một tóm tắt về cấu hình DAI và các số liệu thống kê.

![image](https://github.com/psaumur/CCNA/assets/106411237/684e694a-5b0a-4f85-b135-b288a8c4c6ec)

---

TỔNG ÔN CÁC LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/4cb7dc28-b09d-4a98-8d43-aca2cdf6180b)
