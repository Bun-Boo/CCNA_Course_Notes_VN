# 33. IPv6 : PHẦN 3

ĐÍNH CHÍNH CHO CÁC BÀI GIẢNG TRƯỚC:

Các yêu cầu của RFC về cách biểu diễn Địa chỉ IPv6

- CÁC SỐ 0 Ở ĐẦU BẮT BUỘC phải được loại bỏ
    - Đây - 2001 : 0db8 : 0000 : 0001 : 0f2a : 4fff : fea3 : 00b1
    - Trở thành - 2001 : db8 : 0 : 1 : f2a : 4fff : fea3 : b1
- :: BẮT BUỘC phải được sử dụng để rút gọn chuỗi dài nhất gồm các bộ tứ toàn số 0
    - Nếu chỉ có DUY NHẤT một bộ tứ toàn số 0, đừng dùng ‘::’
    - Đây - 2001 : 0000 : 0000 : 0000 : 0f2a : 0000 : 0000 : 00b1
    - Trở thành - 2001 :: f2a : 0 : 0 : b1
- Nếu có hai lựa chọn có độ dài bằng nhau cho dấu :: , hãy dùng :: để rút gọn chuỗi ở bên TÁI
    - Đây - 2001 : 0db8 : 0000 : 0000 : 0f2a : 0000 : 0000 : 00b1
    - Trở thành - 2001 : db8 :: f2a : 0 : 0 : b1
- Các ký tự thập lục phân ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, và ‘f’ BẮT BUỘC phải được viết dưới dạng chữ thường, KHÔNG ĐƯỢC viết chữ hoa A B C D E F.

---

HEADER CỦA IPv6

![image](https://github.com/psaumur/CCNA/assets/106411237/5bba7262-60aa-4348-9b7a-55dc354f4ed3)

Độ dài LUÔN LUÔN là 40 bytes (Header Cố định)

Phiên bản (Version - 4 bits)

- Cho biết phiên bản IP được sử dụng.
- Giá trị cố định là ‘6’ (0b0110) để chỉ định IPv6.

Lớp Lưu lượng (Traffic Class - 8 bits)

- Được sử dụng cho QoS (Quality of Service - Chất lượng Dịch vụ) để chỉ định lưu lượng có độ ưu tiên cao.
- Ví dụ: lưu lượng điện thoại IP, các cuộc gọi video trực tiếp, v.v.

Nhãn Luồng (Flow Label - 20 bits)

- Xác định các “luồng” (flows) lưu lượng cụ thể (sự liên lạc giữa Nguồn và Đích).

Độ dài Phần tải (Payload Length - 16 bits)

- Cho biết ĐỘ DÀI của PHẦN TẢI (PAYLOAD - phân đoạn LỚP 4 được đóng gói) **tính bằng bytes**.
- Độ dài của chính header IPv6 không được bao gồm, vì nó LUÔN LUÔN là 40 bytes.

Header Kế tiếp (Next Header - 8 bits)

- Cho biết LOẠI của ‘header kế tiếp’ (header của PHÂN ĐOẠN được đóng gói).
    - Ví dụ: TCP hoặc UDP.
- Có chức năng tương tự như trường ‘Protocol’ của header IPv4.

Giới hạn Bước nhảy (Hop Limit - 8 bits)

- Giá trị trong trường này giảm đi 1 mỗi khi một ROUTER chuyển tiếp nó. Nếu nó chạm mức ‘0’, GÓI TIN sẽ bị hủy bỏ (tương tự như trường TTL trong IPv4).

Địa chỉ Nguồn (Source Address - 128 bits)

- Địa chỉ NGUỒN của gói tin.

Địa chỉ Đích (Destination Address - 128 bits)

- Địa chỉ ĐÍCH của gói tin.

---

ĐỊA CHỈ MULTICAST NÚT ĐƯỢC YÊU CẦU (SOLICITED-NODE MULTICAST ADDRESS)

- Một địa chỉ Multicast Solicited-Node của IPv6 được tính toán từ một ĐỊA CHỈ UNICAST.

Cách tạo ra một Địa chỉ Multicast SOLICITED-NODE

![image](https://github.com/psaumur/CCNA/assets/106411237/eef6815b-405b-485d-884d-ff08bbbf16d3)

Lưu ý các địa chỉ nhóm được tham gia tự động cho Giao diện IPv6 này

![image](https://github.com/psaumur/CCNA/assets/106411237/4f981645-7488-4f0c-8ec5-d7c1b878acba)

---

GIAO THỨC PHÁT HIỆN LÁNG GIỀNG (NEIGHBOR DISCOVERY PROTOCOL - NDP)

- GIAO THỨC PHÁT HIỆN LÁNG GIỀNG (NDP) là một GIAO THỨC được sử dụng với IPv6.
- Nó có nhiều chức năng khác nhau và một trong số đó là để thay thế ARP, vốn không còn được sử dụng trong IPv6.
- Chức năng giống như ARP của NDP sử dụng ICMPv6 và các Địa chỉ Multicast SOLICITED-NODE để học ĐỊA CHỈ MAC của CÁC MÁY TRẠM khác (ARP trong IPv4 sử dụng các Thông điệp Quảng bá - Broadcast).

- HAI LOẠI THÔNG ĐIỆP được sử dụng:
    - 1) YÊU CẦU LÁNG GIỀNG (NEIGHBOR SOLICITATION - NS)
        - ICMPv6 Loại 135
    
    - 2) QUẢNG BÁ LÁNG GIỀNG (NEIGHBOR ADVERTISEMENT - NA)
        - ICMPv6 Loại 136

![image](https://github.com/psaumur/CCNA/assets/106411237/88b9dde5-bc94-49ce-ba4a-b38c47f4670d)

![image](https://github.com/psaumur/CCNA/assets/106411237/cc9010cb-eb67-4fcb-8c6a-7a0aa11c7057)

BẢNG LÁNG GIỀNG IPv6

![image](https://github.com/psaumur/CCNA/assets/106411237/085bb9df-8015-4c2f-bfc8-2d6336436fe2)

- Một chức năng khác của NDP cho phép CÁC MÁY TRẠM tự động phát hiện CÁC ROUTER trên MẠNG NỘI BỘ.

- HAI THÔNG ĐIỆP được sử dụng cho quá trình này:
  
    - YÊU CẦU BỘ ĐỊNH TUYẾN (ROUTER SOLICITATION - RS)
        - ICMPv6 Loại 133.
        - Được gửi tới địa chỉ Multicast `FF02::2` (Tất cả Router).
        - Yêu cầu TẤT CẢ ROUTER trên liên kết nội bộ tự nhận diện chính mình.
        - Được gửi khi một INTERFACE được kích hoạt / MÁY TRẠM được kết nối vào MẠNG.
        
    - QUẢNG BÁ BỘ ĐỊNH TUYẾN (ROUTER ADVERTISEMENT - RA)
        - ICMPv6 Loại 134.
        - Được gửi tới địa chỉ Multicast `FF02::1` (Tất cả các Nút).
        - ROUTER thông báo về sự hiện diện của mình, cũng như các thông tin khác về liên kết.
        - Những thông điệp này được gửi để phản hồi cho các thông điệp RS.
        - Chúng cũng được gửi định kỳ, ngay cả khi ROUTER không nhận được một bản tin RS nào.
        
    
![image](https://github.com/psaumur/CCNA/assets/106411237/f7861fda-e893-4fd1-b5c3-5deed57de2f0)
    

---

SLAAC

- Viết tắt của **STATELESS ADDRESS AUTO-CONFIGURATION** (Tự động cấu hình địa chỉ không trạng thái).
- CÁC MÁY TRẠM sử dụng các thông điệp RS / RA để học Tiền tố IPv6 của LIÊN KẾT NỘI BỘ (ví dụ: 2001:db8:: /64) và sau đó tự động tạo ra một Địa chỉ IPv6.
- Sử dụng lệnh `ipv6 address prefix / prefix-length eui-64`, bạn cần phải nhập tiền tố một cách thủ công.
- Sử dụng lệnh `ipv6 address autoconfig`, bạn KHÔNG cần phải nhập tiền tố. Thiết bị sử dụng NDP để học tiền tố đang được sử dụng trên liên kết nội bộ đó.
- Thiết bị sẽ sử dụng EUI-64 để tạo ra ĐỊNH DANH GIAO GIỀNG (INTERFACE ID) hoặc nó sẽ được tạo ngẫu nhiên (tùy thuộc vào thiết bị / nhà sản xuất).

![image](https://github.com/psaumur/CCNA/assets/106411237/e1cc9b26-1a81-48fb-8538-77f97d456eff)

---

PHÁT HIỆN TRÙNG LẶP ĐỊA CHỈ (DUPLICATE ADDRESS DETECTION - DAD)

- Một điểm cuối cùng về NDP!
- Phát hiện trùng lặp địa chỉ (DAD) cho phép CÁC MÁY TRẠM kiểm tra xem các thiết bị khác trên Liên kết Nội bộ có đang sử dụng cùng một địa chỉ IPv6 hay không.
- Bất cứ khi nào một giao diện đã kích hoạt IPv6 được khởi tạo (lệnh `no shutdown`) hoặc một ĐỊA CHỈ IPv6 được cấu hình trên một GIAO DIỆN (bằng bất kỳ phương pháp nào: thủ công, SLAAC, v.v.), nó đều thực hiện DAD.
- DAD sử dụng HAI THÔNG ĐIỆP mà bạn đã học trước đó: NS và NA.
- MÁY TRẠM sẽ gửi một bản tin NS tới ĐỊA CHỈ IPv6 của chính nó.
    - Nếu nó không nhận được phản hồi, nó BIẾT rằng ĐỊA CHỈ đó là duy nhất.
    - Nếu nó CÓ nhận được phản hồi, điều đó có nghĩa là MỘT MÁY TRẠM KHÁC trên MẠNG đã đang sử dụng địa chỉ đó rồi.

---

ĐỊNH TUYẾN TĨNH IPv6 (IPv6 STATIC ROUTING)

- ĐỊNH TUYẾN IPv6 hoạt động tương tự như ĐỊNH TUYẾN IPv4.
- Tuy nhiên, HAI quy trình này là riêng biệt trên ROUTER, và HAI bảng định tuyến cũng riêng biệt.
- ĐỊNH TUYẾN IPv4 được bật THEO MẶC ĐỊNH.
- ĐỊNH TUYẾN IPv6 bị tắt THEO MẶC ĐỊNH.
    - PHẢI ĐƯỢC KÍCH HOẠT bằng lệnh `ipv6 unicast-routing`.
- Nếu ĐỊNH TUYẾN IPv6 bị tắt, ROUTER sẽ có thể GỬI và NHẬN lưu lượng IPv6, nhưng sẽ không mang tính chất *định tuyến* lưu lượng IPv6 (tức là: sẽ KHÔNG CHUYỂN TIẾP nó giữa CÁC MẠNG).

![image](https://github.com/psaumur/CCNA/assets/106411237/e082920f-3a76-438d-b43d-8eac968dcd55)

![image](https://github.com/psaumur/CCNA/assets/106411237/90acb6ca-2703-47d1-907f-1878490c78f6)

- Một TUYẾN ĐƯỜNG MẠNG KẾT NỐI (CONNECTED NETWORK ROUTE) được tự động thêm vào cho MỖI MẠNG ĐƯỢC KẾT NỐI.
- Một TUYẾN ĐƯỜNG MÁY TRẠM CỤC BỘ (LOCAL HOST ROUTE) được tự động thêm vào cho mỗi ĐỊA CHỈ được cấu hình trên ROUTER.
- Các tuyến đường cho các ĐỊA CHỈ Link-Local không được thêm vào BẢNG ĐỊNH TUYẾN.

![image](https://github.com/psaumur/CCNA/assets/106411237/d01849d3-c031-45a0-8e31-efd9dba61df6)

Mọi thứ được cấu hình tương tự như các tuyến tĩnh thông thường trong IPv4

[AD] = Administrative Distance (Độ tin cậy hành chính). Bạn CẦN giá trị này để cấu hình một TUYẾN ĐƯỜNG TĨNH.

Tuyến tĩnh KẾT NỐI TRỰC TIẾP (DIRECTLY ATTACHED Static Route):

- Chỉ có GIAO DIỆN ĐẦU RA (EXIT INTERFACE) được chỉ định.
- `ipv6 route destination / prefix-length exit-interface`
- Ví dụ: `R1(config)# ipv6 route 2001:db8:0:3:: /64 g0/0`

```
💡 Trong IPv6, bạn KHÔNG THỂ sử dụng CÁC TUYẾN ĐƯỜNG TĨNH KẾT NỐI TRỰC TIẾP nếu GIAO DIỆN đó là GIAO DIỆN ETHERNET.
```

Tuyến tĩnh ĐỆ QUY (RECURSIVE Static Route):

- Chỉ có Bước nhảy kế tiếp (Next-Hop) được chỉ định.
- `ipv6 route destination / prefix-length next-hop`
- Ví dụ: `R1(config)# ipv6 route 2001:db8:0:3::/64 2001:db8:0:12::2`

Tuyến tĩnh CHỈ ĐỊNH ĐẦY ĐỦ (FULLY SPECIFIED Static Route):

- Cả Giao diện đầu ra và Bước nhảy kế tiếp đều được chỉ định.
- `ipv6 route destination / prefix-length exit-interface next-hop`
- Ví dụ: `R1(config)# ipv6 route 2001:db8:0:3::/64 g0/0 2001:db8:0:12::2`

---

(LƯU Ý RẰNG CÁC TUYẾN ĐƯỜNG NÀY ĐỀU LÀ ĐỆ QUY: Chúng chỉ định Bước nhảy kế tiếp)

TUYẾN ĐƯỜNG MẠNG (NETWORK ROUTE):

`R1(config)# ipv6 route 2001:db8:0::/64 2001:db8:0:12::2`

Đây là tuyến đường tới MẠNG R3/PC2 thông qua GIAO DIỆN G0/0 của R2.

(Chúng ta đã thực hiện việc này trong bài Lab Ngày 32)

TUYẾN ĐƯỜNG MÁY TRẠM (HOST ROUTE):

`R2(config)# ipv6 route 2001:db8:0:1::100/128 2001:db8:0:12::1`

`R2(config)# ipv6 route 2001:db8:0:3::100/128 2001:db8:0:23::2`

Đây là tuyến đường từ R2 tới PC1 và PC2 sử dụng CÁC ĐỊA CHỈ “bước nhảy kế tiếp” của các giao diện G0/0 trên R1 và R3.

Lưu ý tiền tố /128. Đây là cách CÁC ĐỊA CHỈ IPv6 CỤ THỂ được viết.

TUYẾN ĐƯỜNG MẶC ĐỊNH (DEFAULT ROUTE):

`R3(config)# ipv6 route ::/0 2001:db8:0:23::1`

::/0 là tương đương trong IPv6 của 0.0.0.0/0 trong IPv4.

TUYẾN ĐƯỜNG TĨNH DỰ PHÒNG (FLOATING STATIC ROUTES):

- Yêu cầu bạn phải tăng giá trị số [AD] lên CAO HƠN giá trị AD của giao thức định tuyến động IGP đang được sử dụng.

CÁC BƯỚC NHẢY KẾ TIẾP LÀ LINK-LOCAL (LINK-LOCAL NEXT HOPS):

![image](https://github.com/psaumur/CCNA/assets/106411237/52cf09e2-2b37-4319-a2b9-15213524530c)

Bạn PHẢI chỉ định tên GIAO DIỆN khi sử dụng các Bước nhảy kế tiếp là Link-Local.

Điều này CHÍNH XÁC giống như một TUYẾN ĐƯỜNG TĨNH CHỈ ĐỊNH ĐẦY ĐỦ.
