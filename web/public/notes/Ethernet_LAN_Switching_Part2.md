# 6. CHUYỂN MẠCH MẠNG LAN ETHERNET : PHẦN 2

Một KHUNG TIN ETHERNET (ETHERNET FRAME) trông như sau:

Tiêu đề Ethernet --- DỮ LIỆU (Gói tin) --- Phần đuôi Ethernet

![image](https://github.com/psaumur/CCNA/assets/106411237/27c1877f-57d7-44ea-8c64-b0ec2b308ad0)


Tiêu đề Ethernet (Ethernet Header) chứa 5 trường:

Preamble -- SFD -- Đích (Destination) -- Nguồn (Source) -- Loại/Độ dài (Type/Length)
7 byte   -- 1 byte -- 6 byte       -- 6 byte     -- 2 byte

Phần đuôi Ethernet chứa 1 trường:

FCS (Frame Check Sequence) = 4 byte

- PREAMBLE + SFD thường không được coi là một phần của TIÊU ĐỀ ETHERNET.

VÌ VẬY, kích thước của TIÊU ĐỀ ETHERNET + PHẦN ĐUÔI là 18 byte.

(6 + 6 + 2 + 4 byte cho trường FRAME CHECK SEQUENCE)

---

Kích thước TỐI THIỂU cho một KHUNG TIN ETHERNET (Header + Payload [GÓI TIN] + Trailer) là 64 BYTE.

64 BYTE - 18 BYTE (Kích thước Header + Trailer) = 46 BYTE.

VÌ VẬY, kích thước PHẦN TẢI DỮ LIỆU (PAYLOAD/PACKET) TỐI THIỂU là 46 BYTE!

NẾU PHẦN TẢI ít hơn 46 BYTE, thì các BYTE ĐỆM (PADDING) sẽ được thêm vào (byte đệm là một chuỗi các số 0) cho đến khi đạt đủ 46 BYTE.

---

Khi một PC muốn gửi một gói tin đến một đích với địa chỉ IP đã biết nhưng địa chỉ MAC chưa biết, trước tiên nó cần gửi một Yêu cầu ARP (ARP Request) để tìm hiểu địa chỉ MAC của đích đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/e2d0e5d2-7c98-4671-b356-903132fd7525)


- ARP là viết tắt của 'Address Resolution Protocol' (Giao thức phân giải địa chỉ).
- Nó được sử dụng để khám phá địa chỉ Lớp 2 (địa chỉ MAC) từ một địa chỉ Lớp 3 đã biết (địa chỉ IP).
- Bao gồm hai loại thông điệp:
    - ARP REQUEST (Yêu cầu ARP - từ nguồn)
    - ARP REPLY (Phản hồi ARP - từ đích)
- ARP REQUEST là thông điệp QUẢNG BÁ (BROADCAST) = được gửi đến tất cả các máy chủ trong mạng, ngoại trừ máy chủ đã gửi yêu cầu.

Một khung tin ARP REQUEST có:

- Địa chỉ IP nguồn
- Địa chỉ IP đích
- Địa chỉ MAC nguồn
- Địa chỉ MAC QUẢNG BÁ (BROADCAST) - FFFF.FFFF.FFFF

Một khung tin ARP REPLY có:

- Địa chỉ IP nguồn
- Địa chỉ IP đích
- Địa chỉ MAC nguồn
- Địa chỉ MAC đích

ARP REPLY là một khung tin UNICAST đã biết = Chỉ được gửi đến máy chủ đã gửi ARP REQUEST.

![image](https://github.com/psaumur/CCNA/assets/106411237/914cdf2a-c631-47e5-80f9-46e32ebed311)


---

PING

- Một công cụ mạng được sử dụng để kiểm tra khả năng kết nối (reachability).
- Đo lường thời gian vòng hồi (round-trip time).
- Sử dụng hai loại thông điệp:
    - ICMP Echo REQUEST (Yêu cầu ICMP Echo)
    - ICMP Echo REPLY (Phản hồi ICMP Echo)
- Là giao tiếp đơn hướng (UNICAST).
- Lệnh sử dụng ping:
    - ping <địa_chỉ_ip>

Theo mặc định, Cisco IOS gửi 5 yêu cầu/phản hồi ICMP.
(Kích thước mặc định là 100-byte).

- Dấu chấm (.) biểu thị ping thất bại.
- Dấu chấm than (!) biểu thị ping thành công.

---

CÁC LỆNH CISCO IOS HỮU ÍCH (từ chế độ Privileged EXEC)

PC1# show arp // hiển thị bảng ARP của máy chủ

![image](https://github.com/psaumur/CCNA/assets/106411237/da199d21-4f41-485e-8917-ca8e3d789617)


---

SW1#show mac address-table // hiển thị bảng địa chỉ MAC của switch

![image](https://github.com/psaumur/CCNA/assets/106411237/c1cd95dd-7742-4703-9487-946652c95485)


Sẽ hiển thị các cột:

Vlan --- MAC Address --- Type --- Ports (interfaces)

(Vlan = Virtual Local Area Network - Mạng LAN ảo)

---

![image](https://github.com/psaumur/CCNA/assets/106411237/657b054b-a90c-4e5f-8544-2a51082cb631)


SW1# clear mac address-table dynamic <địa chỉ MAC tùy chọn>

// Xóa toàn bộ bảng địa chỉ MAC động của switch.
// NẾU sử dụng địa chỉ MAC tùy chọn, nó sẽ chỉ xóa mục nhập cho địa chỉ MAC CỤ THỂ đó.

SW1# clear mac address-table dynamic interface <Giao diện tùy chọn>

// Xóa các mục trong bảng địa chỉ MAC của Switch dựa trên tên GIAO DIỆN (INTERFACE) của nó.
