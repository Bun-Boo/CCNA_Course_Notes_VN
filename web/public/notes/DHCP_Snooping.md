# 50. GIÁM SÁT DHCP (DHCP SNOOPING - LỚP 2)

DHCP SNOOPING LÀ GÌ?

- GIÁM SÁT DHCP (DHCP SNOOPING) là một tính năng bảo mật của CÁC SWITCH được sử dụng để lọc các thông điệp DHCP nhận được trên CÁC CỔNG KHÔNG TIN CẬY (UNTRUSTED PORTS).
- DHCP SNOOPING chỉ lọc CÁC THÔNG ĐIỆP DHCP.
    - Các THÔNG ĐIỆP không phải DHCP sẽ không bị ảnh hưởng.
- TẤT CẢ CÁC CỔNG đều là KHÔNG TIN CẬY (UNTRUSTED), theo MẶC ĐỊNH.
    - Thông thường, CÁC CỔNG ĐƯỜNG LÊN (UPLINK PORTS) được cấu hình là CÁC CỔNG TIN CẬY, và CÁC CỔNG ĐƯỜNG XUỐNG (DOWNLINK PORTS) vẫn giữ nguyên là KHÔNG TIN CẬY.
    

![image](https://github.com/psaumur/CCNA/assets/106411237/9ed71d09-d94c-4fc9-ad87-1b31acfdd132)

![image](https://github.com/psaumur/CCNA/assets/106411237/9d7d23a6-9d54-4234-a07e-a5caea136c94)

---

CÁC CUỘC TẤN CÔNG VÀO DHCP

LÀM CẠN KIỆT DHCP (DHCP STARVATION)

- Một ví dụ về cuộc TẤN CÔNG dựa trên DHCP là TẤN CÔNG LÀM CẠN KIỆT DHCP.
- KẺ TẤN CÔNG sử dụng các địa chỉ MAC giả mạo để làm tràn ngập các thông điệp DHCP DISCOVER.
- NHÓM ĐỊA CHỈ (POOL) DHCP của máy chủ mục tiêu bị lấp đầy, dẫn đến tình trạng Từ chối dịch vụ (DoS) đối với CÁC THIẾT BỊ khác.

![image](https://github.com/psaumur/CCNA/assets/106411237/33dfbb8b-2b78-4700-b4ab-0dd95fc03eed)

ĐẦU ĐỘC DHCP (DHCP POISONING - Tấn công Xen giữa)

- Tương tự như ĐẦU ĐỘC ARP, ĐẦU ĐỘC DHCP có thể được sử dụng để thực hiện cuộc tấn công Xen giữa (Man-in-the-Middle).
- Một *máy chủ DHCP giả mạo (spurious DHCP SERVER)* trả lời các thông điệp DHCP Discover của MÁY KHÁCH và gán cho chúng các ĐỊA CHỈ IP nhưng bắt CÁC MÁY KHÁCH sử dụng *IP của máy chủ GIẢ MẠO* làm CỔNG MẶC ĐỊNH (DEFAULT GATEWAY).

```
💡 CÁC MÁY KHÁCH thường chấp nhận thông điệp DHCP OFFER đầu tiên mà chúng nhận được.
```

- Điều này sẽ khiến MÁY KHÁCH gửi LƯU LƯỢNG tới KẺ TẤN CÔNG thay vì tới CỔNG MẶC ĐỊNH hợp lệ.
- KẺ TẤN CÔNG sau đó có thể kiểm tra / chỉnh sửa LƯU LƯỢNG trước khi chuyển tiếp nó tới CỔNG MẶC ĐỊNH hợp lệ.

![image](https://github.com/psaumur/CCNA/assets/106411237/d0cd7a5c-9ff4-4edec4ea2646)

![image](https://github.com/psaumur/CCNA/assets/106411237/1573bcb7-6fa8-46d7-8cb8-46e30bac559d)

---

CÁC THÔNG ĐIỆP DHCP

- Khi DHCP SNOOPING lọc các thông điệp, nó phân biệt giữa thông điệp của MÁY CHỦ DHCP và thông điệp của MÁY KHÁCH DHCP.

- Các thông điệp được gửi bởi MÁY CHỦ DHCP:
    - OFFER.
    - ACK.
    - NAK = Ngược lại với ACK - được sử dụng để TỪ CHỐI một YÊU CẦU CỦA MÁY KHÁCH.
- Các thông điệp được gửi bởi MÁY KHÁCH DHCP:
    - DISCOVER.
    - REQUEST.
    - RELEASE = Được sử dụng để báo cho MÁY CHỦ rằng MÁY KHÁCH không còn cần địa chỉ IP của nó nữa.
    - DECLINE = Được sử dụng để TỪ CHỐI địa chỉ IP được đề nghị bởi một MÁY CHỦ DHCP.

---

NÓ HOẠT ĐỘNG NHƯ THẾ NÀO?

- Nếu một THÔNG ĐIỆP DHCP được nhận trên một CỔNG TIN CẬY (TRUSTED PORT), hãy chuyển tiếp nó như bình thường mà không cần kiểm tra.
- Nếu một THÔNG ĐIỆP DHCP được nhận trên một CỔNG KHÔNG TIN CẬY (UNTRUSTED PORT), hãy kiểm tra nó và hành động như sau:
    - Nếu đó là thông điệp của MÁY CHỦ DHCP, hãy loại bỏ nó.
    - Nếu đó là thông điệp của MÁY KHÁCH DHCP, hãy thực hiện các bước kiểm tra sau:
        - Đối với các thông điệp DISCOVER / REQUEST :
            - Kiểm tra xem ĐỊA CHỈ MAC NGUỒN CỦA KHUNG TIN và TRƯỜNG CHADDR CỦA THÔNG ĐIỆP DHCP có khớp nhau không.
                - KHỚP = CHUYỂN TIẾP.
                - KHÔNG KHỚP = LOẠI BỎ.
        - Đối với các thông điệp RELEASE / DECLINE:
            - Kiểm tra xem ĐỊA CHỈ IP NGUỒN CỦA GÓI TIN và GIAO DIỆN nhận tin có khớp với mục nhập trong *BẢNG LIÊN KẾT GIÁM SÁT DHCP (DHCP SNOOPING BINDING TABLE)* hay không.
                - KHỚP = CHUYỂN TIẾP.
                - KHÔNG KHỚP = LOẠI BỎ.
    
- Khi một MÁY KHÁCH thuê thành công một ĐỊA CHỈ IP từ một MÁY CHỦ, hãy tạo một mục nhập mới trong *BẢNG LIÊN KẾT GIÁM SÁT DHCP*.

---

CẤU HÌNH DHCP SNOOPING

![image](https://github.com/psaumur/CCNA/assets/106411237/729466dc-9432-47d2-8799-652fa064b058)

CẤU HÌNH CỦA SWITCH 2

![image](https://github.com/psaumur/CCNA/assets/106411237/8d6cacb8-ffd8-4bd9-be96-fe9978377989)

CẤU HÌNH CỦA SWITCH 1

![image](https://github.com/psaumur/CCNA/assets/106411237/bb11e4fd-a340-4dd3-a6f5-3cd280fc5a13)

GIỚI HẠN TỐC ĐỘ DHCP SNOOPING (RATE-LIMITING)

- DHCP SNOOPING có thể giới hạn TỐC ĐỘ (RATE) mà các thông điệp DHCP được phép đi vào một GIAO DIỆN.
- Nếu TỐC ĐỘ của các thông điệp DHCP vượt quá GIỚI HẠN đã cấu hình, GIAO DIỆN sẽ bị đưa vào trạng thái `err-disabled`.
- Giống như với BẢO MẬT CỔNG, giao diện có thể được kích hoạt lại thủ công, hoặc tự động kích hoạt lại bằng lệnh `errdisable recovery`.

![image](https://github.com/psaumur/CCNA/assets/106411237/6586df19-5a58-4ca3-a316-bd0aeb2ce67c)

- Bạn sẽ không đặt giới hạn tốc độ là 1 vì nó quá thấp, nó sẽ đóng cổng ngay lập tức nhưng điều này cho thấy cách thức hoạt động của VIỆC GIỚI HẠN TỐC ĐỘ (RATE-LIMITING).

`errdisable recovery cause dhcp-rate-limit`

![image](https://github.com/psaumur/CCNA/assets/106411237/83c324aa-baa0-4ae1-82ac-157e503e048a)

DHCP OPTION 82 (TÙY CHỌN THÔNG TIN)

- OPTION 82, còn được gọi là ‘TÙY CHỌN THÔNG TIN ĐẠI LÝ CHUYỂN TIẾP DHCP’ (DHCP RELAY AGENT INFOMRATION OPTION) là một trong NHIỀU TÙY CHỌN của DHCP.
- Nó cung cấp thông tin bổ sung về việc đại lý chuyển tiếp DHCP nào đã nhận được thông điệp của MÁY KHÁCH, trên GIAO DIỆN nào, trong VLAN nào, v.v.
- CÁC ĐẠI LÝ CHUYỂN TIẾP DHCP có thể thêm OPTION 82 vào thông điệp mà chúng chuyển tiếp tới MÁY CHỦ DHCP từ xa.
- Khi DHCP SNOOPING được bật, theo mặc định CÁC SWITCH Cisco sẽ thêm OPTION 82 vào các thông điệp DHCP mà chúng nhận được từ CÁC MÁY KHÁCH, ngay cả khi SWITCH không đóng vai trò là một ĐẠI LÝ CHUYỂN TIẾP DHCP.
- Theo MẶC ĐỊNH, CÁC SWITCH Cisco sẽ loại bỏ CÁC THÔNG ĐIỆP DHCP có OPTION 82 được nhận trên một CỔNG KHÔNG TIN CẬY.

![image](https://github.com/psaumur/CCNA/assets/106411237/2efc6edd-21fd-4c1a-bb11-9c1f761e1d32)

CÂU LỆNH này vô hiệu hóa OPTION 82 cho SW1 nhưng KHÔNG vô hiệu hóa cho SW2 

![image](https://github.com/psaumur/CCNA/assets/106411237/84f1c3f2-9ad1-4367-97f3-95dab053b30c)

LƯU LƯỢNG được chuyển tới R1 và bị LOẠI BỎ vì “thông tin chuyển tiếp không nhất quán” (inconsistent relay information - gói tin chứa OPTION 82 nhưng đã không bị loại bỏ bởi SW2).

![image](https://github.com/psaumur/CCNA/assets/106411237/5c4b547e-c588-4d62-8098-76902199a131)

Bằng cách KÍCH HOẠT OPTION 82 trên cả hai SWITCH…

![image](https://github.com/psaumur/CCNA/assets/106411237/dda50cf6-ae86-47ec-9b4f-104669697f64)

Thông điệp DHCP DISCOVER của PC1 được chuyển qua SW1 và SW2, tới R1.
R1 phản hồi bằng một thông điệp DHCP OFFER, như bình thường.

![image](https://github.com/psaumur/CCNA/assets/106411237/7e59cc5a-bf8e-482d-848d-5bfa0540c74b)

---

TỔNG ÔN CÁC LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/308e32fa-52bd-4ee4-9356-f14e65416e17)
