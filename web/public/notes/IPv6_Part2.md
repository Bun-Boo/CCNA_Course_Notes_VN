# 32. IPv6 : PHẦN 2

CẤU HÌNH ĐỊA CHỈ IPv6 (EUI-64)

- EUI là viết tắt của Extended Unique Identifier (Định danh duy nhất mở rộng).
- EUI-64 (đã sửa đổi) là một phương pháp chuyển đổi địa chỉ MAC (48-bits) thành một định danh GIAO DIỆN 64-bit (64-bit interface identifier).
- Định danh GIAO DIỆN này sau đó có thể trở thành “phần HOST” của một ĐỊA CHỈ IPv6 /64.

![image](https://github.com/psaumur/CCNA/assets/106411237/bee8f7bf-3877-4307-9ca7-863af19aae6c)

THỰC HÀNH EUI-64:
```
782B CBAC 0867 >>> 782B CB  ||  AC 0867

782B CBFF  FEAC 0867 

8 là bit thứ 7 nên 1000 khi được đảo ngược sẽ trở thành 1010 = A trong hệ thập lục phân

vì vậy Interface Identifier EUI-64 là: 7A2B CBFF FEAC 0867
```

![image](https://github.com/psaumur/CCNA/assets/106411237/d4e90146-8c71-4c6c-b5aa-a9077bde2caf)

---
CẤU HÌNH CÁC ĐỊA CHỈ IPv6 VỚI EUI-64

![image](https://github.com/psaumur/CCNA/assets/106411237/e6c6da0b-def4-4764-a0a1-3f64855f319f)

![image](https://github.com/psaumur/CCNA/assets/106411237/bff1b2bc-9944-451a-972a-f8b3bd5f7ea0)

![image](https://github.com/psaumur/CCNA/assets/106411237/4c69d97a-a611-4a94-9e11-9016ec456819)

LƯU Ý địa chỉ “2001:DB8…” có chữ “E” được đổi thành “c”. Đây là kết quả của việc bit thứ 7 bị đảo ngược (1110 chuyển thành 1100 = 12 = chữ ‘C’ trong hệ thập lục phân).

---

TẠI SAO PHẢI ĐẢO NGƯỢC BIT THỨ 7 ? 

- Địa chỉ MAC có thể được chia thành HAI LOẠI:
    - UAA (Universally Administered Address - Địa chỉ quản trị toàn cầu)
        - Được gán duy nhất cho thiết bị của nhà sản xuất.
    - LAA (Locally Administered Address - Địa chỉ quản trị cục bộ)
        - Được gán thủ công bởi Quản trị viên (bằng lệnh mac-address trên GIAO DIỆN) hoặc bởi một giao thức. Không nhất thiết phải là duy nhất trên toàn cầu.
- Bạn có thể XÁC ĐỊNH một địa chỉ là UAA hay LAA bằng bit thứ 7 của ĐỊA CHỈ MAC, được gọi là bit U/L (Universal/Local bit).
    - Bit U/L được đặt thành 0 = UAA.
    - Bit U/L được đặt thành 1 = LAA.
- Trong ngữ cảnh của địa chỉ IPv6/EUI-64, ý nghĩa của bit U/L bị đảo ngược:
    - Bit U/L được đặt thành 0 = Địa chỉ MAC mà Interface ID EUI-64 được tạo ra từ đó là một địa chỉ LAA.
    - Bit U/L được đặt thành 1 = Địa chỉ MAC mà Interface ID EUI-64 được tạo ra từ đó là một địa chỉ UAA.

---

CÁC LOẠI ĐỊA CHỈ IPv6

1) CÁC ĐỊA CHỈ UNICAST TOÀN CẦU (GLOBAL UNICAST ADDRESSES)

- **Global Unicast** là CÁC ĐỊA CHỈ IPv6 CÔNG CỘNG (PUBLIC ADDRESSES) có thể được sử dụng qua INTERNET.
- Phải ĐĂNG KÝ để sử dụng chúng.
- Chúng là CÁC ĐỊA CHỈ CÔNG CỘNG nên cần phải là DUY NHẤT TRÊN TOÀN CẦU.

```
💡 Ban đầu được định nghĩa là khối 2000 :: /3
(2000:: tới 3FFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF)
```

- HIỆN NAY được định nghĩa là TẤT CẢ CÁC ĐỊA CHỈ không được DỰ PHÒNG cho các mục đích khác.

HÃY NHỚ BA PHẦN NÀY của một ĐỊA CHỈ UNICAST TOÀN CẦU

![image](https://github.com/psaumur/CCNA/assets/106411237/c5552f0e-eca2-4069-a656-611b5c196402)

---

2) CÁC ĐỊA CHỈ CỤC BỘ DUY NHẤT (UNIQUE LOCAL ADDRESSES)

- **Unique Local** là CÁC ĐỊA CHỈ IPv6 RIÊNG (PRIVATE ADDRESSES) không thể được sử dụng qua internet.
- Bạn KHÔNG cần phải ĐĂNG KÝ để sử dụng chúng.
- Có thể được sử dụng TỰ DO trong CÁC MẠNG NỘI BỘ.
- KHÔNG cần phải DUY NHẤT TRÊN TOÀN CẦU (*).
- KHÔNG THỂ được ĐỊNH TUYẾN qua INTERNET.

```
💡 Sử dụng khối ĐỊA CHỈ FC00 ::/7
(FC00:: tới FDFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF)
```

- Một bản CẬP NHẬT sau đó yêu cầu bit thứ 8 phải được đặt thành 1, vì vậy HAI CHỮ SỐ ĐẦU TIÊN phải là FD.

(*) Global ID (Định danh toàn cầu) nên là DUY NHẤT để các ĐỊA CHỈ không bị chồng chéo khi các công ty SÁP NHẬP.

![image](https://github.com/psaumur/CCNA/assets/106411237/6e6f8af9-ee53-4e0d-90ec-9e137b10c851)

---

3) CÁC ĐỊA CHỈ LINK-LOCAL (LINK-LOCAL ADDRESSES)

- **Link-Local** là CÁC ĐỊA CHỈ IPv6 được TỰ ĐỘNG tạo ra trên các GIAO DIỆN đã kích hoạt IPv6.
- Sử dụng lệnh `R1(config-if)# ipv6 enable` trên một giao diện để kích hoạt IPv6 trên một GIAO DIỆN đó.

```
💡 Sử dụng khối ĐỊA CHỈ FE80::/10
(FE80:: tới FEBF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF)
```

- TIÊU CHUẨN quy định rằng 54-bits SAU FE80/10 nên là TẤT CẢ SỐ 0, vì vậy bạn sẽ không thấy các ĐỊA CHỈ Link-Local bắt đầu bằng FE9, FEA, hay FEB - CHỈ CÓ FE8(!).
- Interface ID được tạo ra bằng cách sử dụng các quy tắc EUI-64.
- Link-Local có nghĩa là các địa chỉ này được sử dụng để liên lạc trong một liên kết (MẠNG CON) duy nhất.
    - ROUTER sẽ không định tuyến CÁC GÓI TIN có ĐỊA CHỈ IPv6 ĐÍCH là Link-Local.
- Các công dụng phổ biến của Địa chỉ Link-Local:
    - Thiết lập láng giềng cho các Giao thức định tuyến (OSPFv3 sử dụng Địa chỉ Link-Local cho các mối quan hệ láng giềng kề hiệp).
    - ĐỊA CHỈ BƯỚC NHẢY KẾ TIẾP (NEXT-HOP ADDRESS) cho CÁC TUYẾN ĐƯỜNG TĨNH.
    - Giao thức Phát hiện Láng giềng (Neighbor Discovery Protocol - NDP, sự thay thế của IPv6 cho ARP) sử dụng CÁC ĐỊA CHỈ Link-Local để hoạt động.
    
    Mạng đang sử dụng các Địa chỉ Link-Local cho việc định tuyến “bước nhảy kế tiếp” (next-hop)
    
![image](https://github.com/psaumur/CCNA/assets/106411237/7d74c4fb-ef52-4436-8285-77ab571f2964)
    

---

4) CÁC ĐỊA CHỈ MULTICAST (MULTICAST ADDRESSES)

- **Các địa chỉ Unicast** là truyền tải một-đối-một.
    - MỘT NGUỒN tới MỘT ĐÍCH.
- ***Các địa chỉ Broadcast*** (Quảng bá) là truyền tải một-tới-tất cả.
    - MỘT NGUỒN tới TẤT CẢ CÁC ĐÍCH (trong mạng con).
- **Các địa chỉ Multicast** (Đa hướng) là truyền tải một-tới-nhiều.
    - MỘT NGUỒN tới NHIỀU ĐÍCH (những máy đã tham gia vào ***nhóm multicast*** cụ thể đó).

```
💡 IPv6 sử dụng dải FF00::/8 cho multicast
(FF00:: tới FFFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF)
```

- **IPv6 không sử dụng Broadcast** (KHÔNG CÓ “Địa chỉ Broadcast” trong IPv6!).

BẠN PHẢI BIẾT ĐỊA CHỈ MULTICAST CHO MỖI LOẠI ROUTER

LƯU Ý rằng các Địa chỉ IPv6 và IPv4 này có chung chữ số cuối cùng.

![image](https://github.com/psaumur/CCNA/assets/106411237/e5efcdd7-5d7d-4020-a179-07ba267bf5ab)

PHẠM VI CỦA ĐỊA CHỈ MULTICAST (MULTICAST ADDRESS SCOPES)

- IPv6 định nghĩa nhiều ‘phạm vi’ (scopes) cho MULTICAST để chỉ ra GÓI TIN nên được chuyển tiếp đi bao xa.
- Các ĐỊA CHỈ trong slide trước đó đều sử dụng phạm vi ‘link-local’ (FF02), tức là chỉ nằm trong MẠNG CON CỤC BỘ.

**Các loại Phạm vi Multicast của IPv6:**

- **Interface-Local (FF01)**
    - GÓI TIN không rời khỏi thiết bị CỤC BỘ.
    - Có thể được sử dụng để GỬI lưu lượng tới một DỊCH VỤ bên trong chính thiết bị CỤC BỘ đó.
    
- **Link-Local (FF02)**
    - GÓI TIN nằm lại trong MẠNG CON CỤC BỘ.
    - CÁC ROUTER sẽ không định tuyến GÓI TIN giữa CÁC MẠNG CON.

- **Site-Local (FF05)**
    - GÓI TIN có thể được chuyển tiếp bởi CÁC ROUTER.
    - Nên bị giới hạn trong một VỊ TRÍ VẬT LÝ DUY NHẤT (không được chuyển tiếp qua mạng WAN).
- **Organization-Local (FF08)**
    - Phạm vi rộng hơn Site-Local (toàn bộ một công ty / TỔ CHỨC).
- **Global (FF0E)**
    - Không có biên giới.
    - Có khả năng được ĐỊNH TUYẾN qua INTERNET.

![image](https://github.com/psaumur/CCNA/assets/106411237/5d5f2d6e-3e21-4ab7-bf8e-dec5d12b6eed)

5) ĐỊA CHỈ ANYCAST (ANYCAST ADDRESS)

- **ANYCAST là một tính năng MỚI của IPv6.**
- ANYCAST là truyền tải ‘một-đối-một-trong-số-nhiều’.
- Nhiều ROUTER được cấu hình với CÙNG MỘT ĐỊA CHỈ IPv6.
    - Chúng sử dụng một GIAO THỨC ĐỊNH TUYẾN để quảng bá địa chỉ đó.
    - Khi CÁC MÁY TRẠM gửi CÁC GÓI TIN tới ĐỊA CHỈ ĐÍCH đó, CÁC ROUTER sẽ chuyển tiếp nó tới ROUTER GẦN NHẤT được cấu hình với ĐỊA CHỈ IP ĐÓ (dựa trên CHỈ SỐ ĐỊNH TUYẾN - METRIC).
- KHÔNG có dải địa chỉ CỤ THỂ nào dành cho CÁC ĐỊA CHỈ ANYCAST.
    - Sử dụng một địa chỉ UNICAST thông thường (Global Unicast, Unique Local) và chỉ định NÓ là một ĐỊA CHỈ ANYCAST.
    - `R1(config-if)# ipv6 address 2001:db8:1:1::99/128 anycast`

![image](https://github.com/psaumur/CCNA/assets/106411237/71729af9-6c02-49bd-b290-af7f5009bd6e)

6) CÁC ĐỊA CHỈ IPv6 KHÁC

- Địa chỉ :: = ĐỊA CHỈ IPv6 *chưa xác định* (unspecified).
    - Có thể được sử dụng khi một THIẾT BỊ chưa biết ĐỊA CHỈ IPv6 của nó.
    - CÁC TUYẾN ĐƯỜNG MẶC ĐỊNH (DEFAULT ROUTES) của IPv6 được cấu hình là ::/0.
    - Tương đương trong IPv4: 0.0.0.0.
- Địa chỉ ::1 = Địa chỉ Lặp (Loopback Address).
    - Được sử dụng để kiểm tra CHỒNG GIAO THỨC (PROTOCOL STACK) trên THIẾT BỊ CỤC BỘ.
    - CÁC thông điệp được gửi tới ĐỊA CHỈ NÀY được xử lý bên trong THIẾT BỊ CỤC BỘ nhưng không được GỬI tới các THIẾT BỊ khác.
    - Tương đương trong IPv4: dải địa chỉ 127.0.0.0 /8.
