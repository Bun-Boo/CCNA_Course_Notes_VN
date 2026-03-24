# 29. CÁC GIAO THỨC DỰ PHÒNG BƯỚC NHẢY ĐẦU TIÊN (FIRST HOP REDUNDANCY PROTOCOLS)

MỤC ĐÍCH CỦA FHRPS

![image](https://github.com/psaumur/CCNA/assets/106411237/32c286ce-e042-4cda-9067-c232a210ec81)

Điều gì xảy ra khi CỔNG MẶC ĐỊNH (DEFAULT GATEWAY) được cấu hình cho các MÁY TRẠM (HOSTS) trong mạng bị hỏng?

Điều gì xảy ra với lưu lượng đang được định tuyến?

Làm cách nào chúng ta có thể định tuyến lưu lượng của mình tới CỔNG (GATEWAY) đang hoạt động tại R2 (.253)?

Đây chính là vấn đề mà GIAO THỨC DỰ PHÒNG BƯỚC NHẢY ĐẦU TIÊN (FIRST HOP REDUNDANCY PROTOCOL) được thiết kế để giải quyết.

---

GIAO THỨC DỰ PHÒNG BƯỚC NHẢY ĐẦU TIÊN (FHRP)

- Là một giao thức mạng máy tính.
- Được thiết kế để BẢO VỆ CỔNG MẶC ĐỊNH (DEFAULT GATEWAY) được sử dụng trên một MẠNG CON (SUBNET) bằng cách cho phép HAI hoặc NHIỀU ROUTER cung cấp khả năng DỰ PHÒNG cho ĐỊA CHỈ đó.
- Trong trường hợp ROUTER ĐANG HOẠT ĐỘNG (ACTIVE) bị LỖI, ROUTER DỰ PHÒNG (BACKUP) sẽ tiếp quản ĐỊA CHỈ đó (thường là trong vòng vài giây).

---

FHRP HOẠT ĐỘNG NHƯ THẾ NÀO?

- HAI (hoặc nhiều hơn) ROUTER chia sẻ một VIP (Địa chỉ IP ảo - Virtual IP Address).
- VIP NÀY được các MÁY TRẠM (HOSTS) sử dụng làm IP CỔNG MẶC ĐỊNH.
- Các ROUTER liên lạc với nhau bằng cách gửi các thông điệp “Hello”.
- Một ROUTER trở thành ROUTER ĐANG HOẠT ĐỘNG (ACTIVE ROUTER), (các) ROUTER còn lại ở trạng thái DỰ PHÒNG (STANDBY).
- Khi một MÁY TRẠM gửi lưu lượng đến một ĐỊA CHỈ bên ngoài MẠNG, nó sẽ gửi một YÊU CẦU ARP (ARP REQUEST - Broadcast Flood) tới VIP để tìm địa chỉ MAC của nó.
    - Spanning Tree giúp ngăn chặn CƠN BÃO QUẢNG BÁ (BROADCAST STORM) do quá trình tràn ngập gói tin quảng bá này.
- ROUTER ĐANG HOẠT ĐỘNG sẽ gửi PHẢN HỒI ARP (ARP REPLY) lại (địa chỉ MAC ẢO của nó) cho MÁY TRẠM.
- MÁY TRẠM hiện giờ gửi lưu lượng ra BÊN NGOÀI MẠNG với:
    - IP Nguồn (IP của MÁY TRẠM)
    - IP Đích (Địa chỉ IP bên ngoài)
    - MAC Nguồn (Địa chỉ MAC của MÁY TRẠM)
    - MAC Đích (Địa chỉ MAC ẢO của VIP CỔNG)

![image](https://github.com/psaumur/CCNA/assets/106411237/2a1c5df8-d4fa-44fa-b850-a8fd6bb69388)

NẾU R1 bị hỏng, R2 sẽ chuyển từ trạng thái DỰ PHÒNG sang ĐANG HOẠT ĐỘNG sau khi không nhận được các thông điệp “Hello” từ R1.

![image](https://github.com/psaumur/CCNA/assets/106411237/5e54ee53-09bd-42a7-b89e-69892590913d)

BẢNG ARP CỦA MÁY TRẠM không cần phải thay đổi vì ĐỊA CHỈ MAC của VIP đã được biết và lưu lượng sẽ truyền ra ngoài thông qua R2.

R2 CẦN phải cập nhật cho các SWITCH bằng một bản tin GRATUITOUS ARP.

- GRATUITOUS ARP là một PHẢN HỒI ARP được gửi đi mà không cần được YÊU CẦU (không nhận được YÊU CẦU ARP nào).
- GRATUITOUS ARP sử dụng QUẢNG BÁ (BROADCAST - FFFF.FFFF.FFFF) - Trong khi PHẢN HỒI ARP thông thường là Đơn hướng (Unicast).

![image](https://github.com/psaumur/CCNA/assets/106411237/6a47dc71-544e-4e33-99cd-b6a8db90f56f)

![image](https://github.com/psaumur/CCNA/assets/106411237/6f36cdf9-d002-48d6-ae5b-6fb899431b46)

Điều gì xảy ra nếu R1 HOẠT ĐỘNG TRỞ LẠI?

Nó sẽ trở thành một ROUTER DỰ PHÒNG (STANDBY ROUTER).

R2 vẫn tiếp tục là ROUTER ĐANG HOẠT ĐỘNG (ACTIVE ROUTER).

```
💡 Các FPRP có tính chất “không chiếm quyền” (non-preemptive). ROUTER hiện tại đang HOẠT ĐỘNG sẽ không tự động từ bỏ vai trò của mình, ngay cả khi ROUTER đang HOẠT ĐỘNG trước đó quay trở lại.

*** Bạn CÓ THỂ thay đổi cài đặt này để R1 ‘chiếm quyền’ (preempt) của R2 và lấy lại vai trò ĐANG HOẠT ĐỘNG của nó một cách tự động ***
```

---

HSRP (HOT STANDBY ROUTER PROTOCOL)

- **Độc quyền của Cisco**
- Một ROUTER ĐANG HOẠT ĐỘNG (ACTIVE) và một ROUTER DỰ PHÒNG (STANDBY) được bầu chọn.
- Có HAI PHIÊN BẢN:
    - phiên bản 1
    - phiên bản 2: *thêm hỗ trợ IPv6* và tăng số lượng *nhóm* (groups) có thể được cấu hình.

- CÁC ĐỊA CHỈ IPv4 Multicast:
    - **v1**: 224.0.0.2
    - **v2**: 224.0.0.102

- CÁC ĐỊA CHỈ MAC ẢO:
    - **v1**: 0000.0c07.acXX (XX = SỐ HIỆU NHÓM HSRP)
    - **v2**: 0000.0c9f.fXXX (XXX = SỐ HIỆU NHÓM HSRP)

- Trong tình huống có NHIỀU MẠNG CON / VLAN, bạn có thể cấu hình một ROUTER ĐANG HOẠT ĐỘNG KHÁC NHAU trong MỖI MẠNG CON / VLAN để CÂN BẰNG TẢI.

![image](https://github.com/psaumur/CCNA/assets/106411237/a5795fa0-d57b-4037-8945-a39da7fb2d15)

---

VRRP (VIRTUAL ROUTER REDUNDANCY PROTOCOL)

- Tiêu chuẩn mở (Open Standard).
- Một ROUTER CHÍNH (MASTER) và một ROUTER DỰ PHÒNG (BACKUP) được bầu chọn.

- CÁC ĐỊA CHỈ IPv4 Multicast:
    - 224.0.0.18

- CÁC ĐỊA CHỈ MAC ẢO:
    - 0000.5e00.01XX (XX = SỐ HIỆU NHÓM VRRP)
        - đối với CÁC SỐ HIỆU NHÓM > 99, bạn cần chuyển đổi số đó sang hệ HEX (thập lục phân).
        - Ví dụ: 200 = “c8” trong hệ Hex, vì vậy địa chỉ MAC sẽ là 0000.5e00.01c8.

- Trong tình huống có NHIỀU MẠNG CON / VLAN, bạn có thể cấu hình một ROUTER CHÍNH KHÁC NHAU trong MỖI MẠNG CON / VLAN để CÂN BẰNG TẢI.

![image](https://github.com/psaumur/CCNA/assets/106411237/4bd45dbc-fc51-4c45-818e-5274530accde)

---

GLBP (GATEWAY LOAD BALANCING PROTOCOL)

- Độc quyền của Cisco.
- CÂN BẰNG TẢI giữa NHIỀU ROUTER trong cùng MỘT MẠNG CON đơn lẻ.
- Một AVG (Cổng ảo đang hoạt động - Active Virtual Gateway) được bầu chọn.
- Có tới BỐN AVF (Thiết bị chuyển tiếp ảo đang hoạt động - Active Virtual Forwarders) được chỉ định BỞI AVG (AVG cũng có thể là một AVF).
- Mỗi AVF đóng vai trò là CỔNG MẶC ĐỊNH cho một phần các MÁY TRẠM trong MẠNG CON đó.

- CÁC ĐỊA CHỈ IPv4 Multicast:
    - 224.0.0.102

- CÁC ĐỊA CHỈ MAC ẢO:
    - 0007.b400.XXYY (XX = SỐ HIỆU NHÓM GLBP, YY = SỐ HIỆU AVF)

---

HÃY GHI NHỚ BIỂU ĐỒ NÀY và những điểm khác biệt giữa các FHRP

![image](https://github.com/psaumur/CCNA/assets/106411237/a5b5ee87-4c92-4b3e-9b98-3d0c09a1732d)

---

CẤU HÌNH HSRP CƠ BẢN

Cấu hình trên R1

![image](https://github.com/psaumur/CCNA/assets/106411237/028b13d4-b258-4551-96ae-068adb931356)

LƯU Ý: số hiệu nhóm phải trùng khớp trên TẤT CẢ ROUTER được cấu hình trong một MẠNG CON nhất định.

![image](https://github.com/psaumur/CCNA/assets/106411237/d2e5eb5f-d105-4788-a869-d9e65f53eca7)

Cấu hình trên R2

![image](https://github.com/psaumur/CCNA/assets/106411237/65b999f6-eed8-45c3-89fe-bff749f40f11)

LƯU Ý: các phiên bản HSRP không tương thích chéo với nhau. Tất cả các ROUTER phải sử dụng cùng một Phiên bản HSRP.

Kết quả của lệnh “show standby”

![image](https://github.com/psaumur/CCNA/assets/106411237/99107301-2619-4454-b104-8aed3780924d)
