# 40. SNMP (Giao thức Quản lý Mạng Đơn giản - Simple Network Management Protocol)

TỔNG QUAN VỀ SNMP

- SNMP là một KHUNG CÔNG VIỆC (FRAMEWORK) và GIAO THỨC TIÊU CHUẨN CÔNG NGHIỆP được phát hành lần đầu vào năm 1988.

Những RFC tạo nên SNMPv1 (Không cần phải học thuộc lòng):

```
RFC 1065 - Cấu trúc và định danh thông tin quản lý cho các mạng internet dựa trên TCP/IP
RFC 1066 - Cơ sở thông tin quản lý để quản lý mạng của các mạng internet dựa trên TCP/IP
RFC 1067 - Một giao thức quản lý mạng đơn giản
```

- Đừng để từ ‘Đơn giản’ (Simple) trong cái tên đánh lừa bạn!
- SNMP có thể được sử dụng để theo dõi TRẠNG THÁI của CÁC THIẾT BỊ, thực hiện CÁC THAY ĐỔI TRONG CẤU HÌNH, v.v.
- Có HAI LOẠI THIẾT BỊ CHÍNH trong SNMP:
    - CÁC THIẾT BỊ ĐƯỢC QUẢN LÝ (MANAGED DEVICES):
        - Đây là các THIẾT BỊ đang được quản lý bằng SNMP.
            - Ví dụ: ROUTERS, SWITCHES.
    - TRẠM QUẢN LÝ MẠNG (NMS - NETWORK MANAGEMENT STATION):
        - (Các) THIẾT BỊ thực hiện quản lý CÁC THIẾT BỊ ĐƯỢC QUẢN LÝ.
        - ĐÂY chính là ‘MÁY CHỦ’ SNMP.

---

CÁC HOẠT ĐỘNG CỦA SNMP

![image](https://github.com/psaumur/CCNA/assets/106411237/bfa13793-5bc7-4344-8592-f38ef3a64784)

---

CÁC THÀNH PHẦN CỦA SNMP

TỔNG QUAN

![image](https://github.com/psaumur/CCNA/assets/106411237/632a83c5-27c8-4adc-8b08-079030c5f52c)

NMS

![image](https://github.com/psaumur/CCNA/assets/106411237/aa59534d-01d5-404c-bdf6-e0fd92cf9d98)

CÁC THIẾT BỊ ĐƯỢC QUẢN LÝ

![image](https://github.com/psaumur/CCNA/assets/106411237/656e27b1-86a4-42c7-a1a1-94309aa19610)

CÁC CHỈ SỐ OID CỦA SNMP

- Các mã định danh đối tượng (Object IDs - OIDs) của SNMP được TỔ CHỨC theo một CẤU TRÚC PHÂN CẤP.

![image](https://github.com/psaumur/CCNA/assets/106411237/79180299-7d9a-4607-a592-7e7d8d090cd1)

---

CÁC PHIÊN BẢN SNMP

- Nhiều phiên bản SNMP đã được đề xuất/phát triển, tuy nhiên, chỉ có ba phiên bản chính đạt được sự sử dụng rộng rãi:

- **SNMPv1**
    - Phiên bản ĐẦU TIÊN của SNMP.
- **SNMPv2c**
    - Cho phép NMS lấy một LƯỢNG LỚN thông tin trong một YÊU CẦU DUY NHẤT, vì vậy nó hiệu quả hơn.
    - ‘c’ đề cập đến ‘community strings’ (chuỗi cộng đồng) được sử dụng làm MẬT KHẨU trong SNMPv1, bị loại bỏ khỏi SNMPv2, và sau đó được thêm TRỞ LẠI cho SNMPv2c.
- **SNMPv3**
    - Một phiên bản BẢO MẬT hơn nhiều của SNMP, hỗ trợ MÃ HÓA MẠNH và XÁC THỰC.
        
        ```
        💡 BẤT CỨ KHI NÀO CÓ THỂ, phiên bản này nên được sử dụng!
        ```
        

---

CÁC THÔNG ĐIỆP SNMP

![image](https://github.com/psaumur/CCNA/assets/106411237/25b15c81-931a-41a6-8033-dff07bfb5f15)

1) SNMP ĐỌC (READ)

![image](https://github.com/psaumur/CCNA/assets/106411237/e7d671f6-f2b0-468a-95a2-6678a52945c4)

2) SNMP GHI (WRITE)

![image](https://github.com/psaumur/CCNA/assets/106411237/d8679ff7-5103-4e01-8f2e-25bb1bd25734)

3) THÔNG BÁO SNMP (NOTIFICATION)

![image](https://github.com/psaumur/CCNA/assets/106411237/fe9266fc-12b8-41d3-8d8f-95f3f7b52ef6)

CÁC SNMP AGENT lắng nghe CÁC THÔNG ĐIỆP trên Cổng UDP 161.

CÁC SNMP MANAGER lắng nghe CÁC THÔNG ĐIỆP trên Cổng UDP 162.

![image](https://github.com/psaumur/CCNA/assets/106411237/23e6fd0a-ed1e-441b-b7b0-457a4e55f645)

---

CẤU HÌNH SNMPv2c (Cơ bản)

![image](https://github.com/psaumur/CCNA/assets/106411237/caf4624e-9ca2-4c8e-82fe-53db2499a38f)

ĐIỀU GÌ XẢY RA KHI GIAO DIỆN G0/1 CỦA R1 BỊ HỎNG?

![image](https://github.com/psaumur/CCNA/assets/106411237/96341ab3-1ed3-4dd4-903c-fa57ab1f83be)

LƯU Ý:

Thông điệp UDP được gửi tới Cổng Đích 162 (SNMP Manager).

“version” (phiên bản) được đặt là v2c.

community (chuỗi cộng đồng) là “Jeremy1” (Read Only - chỉ đọc, không có thông điệp Set).

snmpV2-trap : thông điệp bẫy (trap) được gửi do giao diện G0/1 bị hỏng.

variable-bindings : chứa mã OID được gửi để xác định sự cố.

---

TỔNG KẾT SNMP

- SNMP giúp QUẢN LÝ CÁC THIẾT BỊ qua một MẠNG LƯỚI.
- THIẾT BỊ ĐƯỢC QUẢN LÝ (MANAGED DEVICES) là các thiết bị đang được quản lý bằng SNMP (như ROUTERS, SWITCHES, FIREWALLS).
- TRẠM QUẢN LÝ MẠNG (NMS) là các “máy chủ” SNMP quản lý các thiết bị đó.
    - NMS nhận các thông báo từ các Thiết bị được quản lý.
    - NMS thay đổi các cài đặt trên các Thiết bị được quản lý.
    - NMS kiểm tra trạng thái của các Thiết bị được quản lý.
    
- Các biến số, chẳng hạn như Trạng thái giao diện, Nhiệt độ, Tải lượng lưu lượng, Tên máy, v.v. được LƯU TRỮ trong CƠ SỞ THÔNG TIN QUẢN LÝ (MIB) và được xác định bằng các mã định danh đối tượng (OIDs).

Các phiên bản SNMP chính: SNMPv1, SNMPv2c, SNMPv3.

```
CÁC THÔNG ĐIỆP SNMP: 
* Get / GetNext / GetBulk
* Set
* Trap
* Inform
* Response
```
