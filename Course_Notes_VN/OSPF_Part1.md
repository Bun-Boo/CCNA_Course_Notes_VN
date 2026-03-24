# 26. OSPF : PHẦN 1 (IGP : TRẠNG THÁI LIÊN KẾT)

![image](https://github.com/psaumur/CCNA/assets/106411237/f58477d1-f574-4195-8f6c-851823dedfbf)

CÁC GIAO THỨC ĐỊNH TUYẾN TRẠNG THÁI LIÊN KẾT (LINK STATE ROUTING PROTOCOLS)

- Khi sử dụng GIAO THỨC ĐỊNH TUYẾN TRẠNG THÁI LIÊN KẾT, mỗi ROUTER sẽ tạo ra một ‘bản đồ kết nối’ cho toàn bộ MẠNG.
- Để làm được điều này, mỗi ROUTER QUẢNG BÁ thông tin về các GIAO DIỆN (các MẠNG được kết nối) của mình tới các LÁNG GIỀNG. Những QUẢNG BÁ này được truyền tiếp tới các ROUTER khác, cho đến khi tất cả các ROUTER trong MẠNG đều phát triển chung một bản đồ về MẠNG đó.
- Mỗi ROUTER độc lập sử dụng BẢN ĐỒ này để tính toán CÁC TUYẾN ĐƯỜNG TỐT NHẤT tới mỗi ĐÍCH.
- GIAO THỨC TRẠNG THÁI LIÊN KẾT sử dụng nhiều tài nguyên (CPU) của ROUTER hơn, bởi vì NHIỀU thông tin được chia sẻ hơn.
- Tuy nhiên, GIAO THỨC TRẠNG THÁI LIÊN KẾT có xu hướng PHẢN ỨNG NHANH HƠN với NHỮNG THAY ĐỔI trong MẠNG so với CÁC GIAO THỨC VECTOR KHOẢNG CÁCH.

---

CÁC HOẠT ĐỘNG CƠ BẢN CỦA OSPF

- Là viết tắt của **Open Shortest Path First** (Mở đường ngắn nhất trước tiên).
- Sử dụng thuật toán **Shortest Path First** (Đường ngắn nhất trước tiên).
    - Được tạo ra bởi nhà khoa học máy tính người Hà Lan - Edsger Dijkstra.
    - Còn gọi là **Thuật toán Dijkstra** (Có thể có trong câu hỏi thi).

BA Phiên bản:

- OSPFv1 (1989): CŨ, hiện không còn được sử dụng.
- OSPFv2 (1998): Sử dụng cho IPv4.
- OSPFv3 (2008): Sử dụng cho IPv6 (có thể dùng cho IPv4, nhưng v2 thường được dùng hơn).

- Các Router lưu trữ thông tin về MẠNG trong các LSA (Link State Advertisements - Thông báo trạng thái liên kết), được sắp xếp trong một cấu trúc gọi là LSDB (Link State Database - Cơ sở dữ liệu trạng thái liên kết).
- Các Router sẽ **TRÀN NGẬP (FLOOD)** các gói tin LSA cho đến khi tất cả các ROUTER trong *vùng* (area) OSPF phát triển chung một bản đồ mạng (LSDB).

![image](https://github.com/psaumur/CCNA/assets/106411237/2a6a126b-74f1-49e2-96be-fc411c8812fd)

```
💡 Các LSA có một BỘ ĐẾM THỜI GIAN TUỔI mặc định là 30 Phút. Gói tin LSA sẽ được TRÀN NGẬP lại sau khi bộ đếm thời gian này hết hạn.
```

Trong OSPF, có BA BƯỚC CHÍNH trong quá trình chia sẻ LSAs và xác định TUYẾN ĐƯỜNG TỐT NHẤT tới mỗi ĐÍCH trong mạng:

1) **TRỞ THÀNH LÁNG GIỀNG (BECOME NEIGHBORS)** với các ROUTER khác kết nối vào cùng một ĐOẠN MẠNG (SEGMENT).

2) **TRAO ĐỔI LSAs (EXCHANGE LSAs)** với các ROUTER láng giềng.

3) **TÍNH TOÁN CÁC TUYẾN ĐƯỜNG TỐT NHẤT (CALCULATE THE BEST ROUTES)** tới mỗi ĐÍCH, và đưa chúng vào BẢNG ĐỊNH TUYẾN.

---

CÁC VÙNG OSPF (OSPF AREAS)

- OSPF sử dụng các **VÙNG (AREAS)** để phân chia MẠNG.
- CÁC MẠNG NHỎ có thể chỉ dùng *một vùng duy nhất* (single-area) mà không gây ảnh hưởng tiêu cực đến hiệu năng.
- Với CÁC MẠNG LỚN, thiết kế *một vùng duy nhất* có thể gây ra những tác động TIÊU CỰC:
    - THUẬT TOÁN SPF mất nhiều thời gian hơn để tính toán CÁC TUYẾN ĐƯỜNG.
    - THUẬT TOÁN SPF yêu cầu nhiều năng lượng xử lý hơn theo cấp số nhân trên CÁC ROUTER.
    - LSDB lớn hơn chiếm dụng nhiều BỘ NHỚ hơn trên CÁC ROUTER.
    - Những thay đổi nhỏ trong MẠNG khiến mọi ROUTER phải TRÀN NGẬP LSAs và chạy lại thuật toán SPF.
- Bằng cách chia một MẠNG OSPF lớn thành nhiều ***vùng*** NHỎ HƠN, bạn có thể tránh được các tác động TIÊU CỰC ở trên (nghe có vẻ giống như việc dùng VLAN để chia nhỏ miền quảng bá broadcast domain).

VÙNG OSPF (OSPF AREA) LÀ GÌ?

![image](https://github.com/psaumur/CCNA/assets/106411237/0f5084fe-f7fb-4b33-a8d0-2ed0155d7502)

- Một **VÙNG (AREA)** là một tập hợp các ROUTER và CÁC LIÊN KẾT có chung một LSDB.
- **VÙNG XƯƠNG SỐNG (BACKBONE AREA)** (Vùng 0) là VÙNG mà tất cả các VÙNG khác phải kết nối vào.
- CÁC ROUTER có TẤT CẢ GIAO DIỆN nằm trong CÙNG MỘT VÙNG được gọi là CÁC BỘ ĐỊNH TUYẾN NỘI BỘ (INTERNAL ROUTERS).
- CÁC ROUTER có CÁC GIAO DIỆN nằm trong NHIỀU VÙNG được gọi là **BỘ ĐỊNH TUYẾN BIÊN VÙNG (AREA BORDER ROUTERS - ABRs)**.

```
💡 Các ABR duy trì một bản LSDB RIÊNG BIỆT cho mỗi VÙNG mà chúng kết nối vào.

💡 Bạn được khuyến nghị chỉ nên kết nối một ABR tới TỐI ĐA HAI VÙNG.

💡 Việc kết nối một ABR tới 3 vùng trở lên có thể làm ROUTER quá tải.
```

- CÁC ROUTER kết nối tới VÙNG XƯƠNG SỐNG (Vùng 0) được gọi là **CÁC BỘ ĐỊNH TUYẾN XƯƠNG SỐNG (BACKBONE ROUTERS)**.
- Một **TUYẾN ĐƯỜNG NỘI VÙNG (INTRA-AREA ROUTE)** là một TUYẾN ĐƯỜNG tới một ĐÍCH nằm trong cùng một VÙNG OSPF.
- Một TUYẾN ĐƯỜNG LIÊN VÙNG (INTER-AREA ROUTE) là một TUYẾN ĐƯỜNG tới một ĐÍCH nằm ở một VÙNG OSPF KHÁC.

---

CÁC QUY TẮC CỦA OSPF (OSPF RULES)

- CÁC VÙNG OSPF phải LIÊN TỤC (không được chia cắt các VÙNG).
- Tất cả các VÙNG OSPF phải có *ít nhất* MỘT ABR kết nối tới VÙNG XƯƠNG SỐNG.
- CÁC GIAO DIỆN OSPF trong CÙNG MỘT MẠNG CON *phải* nằm trong CÙNG MỘT VÙNG.

---

CẤU HÌNH OSPF CƠ BẢN

VÙNG OSPF 0 (AREA 0)

![image](https://github.com/psaumur/CCNA/assets/106411237/ad9648f4-736a-43b5-96de-8a30f6f800c8)

Các lệnh để cấu hình OSPF:

![image](https://github.com/psaumur/CCNA/assets/106411237/38fcce32-8d15-4db0-9a0c-170d6083a534)

- OSPF **định danh tiến trình (Process ID)** có **ý nghĩa cục bộ.** Các ROUTER có Process ID khác nhau vẫn có thể trở thành Láng giềng OSPF của nhau.
- Lệnh “network” của OSPF yêu cầu bạn phải chỉ định VÙNG (AREA) (trong trường hợp này là “area 0”).
- Đối với kỳ thi CCNA, bạn chỉ cần cấu hình OSPF vùng đơn (VÙNG 0).

Lệnh “network” chỉ thị cho OSPF:

- Tìm BẤT KỲ GIAO DIỆN NÀO có ĐỊA CHỈ IP nằm trong DẢI được chỉ định trong lệnh “network”.
- Kích hoạt OSPF trên GIAO DIỆN đó trong VÙNG được chỉ định.
- ROUTER sau đó sẽ cố gắng trở thành láng giềng OSPF với các ROUTER láng giềng khác cũng đã kích hoạt OSPF.

![image](https://github.com/psaumur/CCNA/assets/106411237/41da3fe8-f24a-468c-beeb-91cc12066c70)

- Hãy nhớ lệnh này từ phần RIP và EIGRP.
- Lệnh “passive-interface” chỉ thị cho CÁC ROUTER ngừng gửi các thông điệp ‘hello’ OSPF ra khỏi GIAO DIỆN đó.
- Tuy nhiên, ROUTER sẽ vẫn tiếp tục gửi các LSA thông báo cho các láng giềng của nó về MẠNG CON được cấu hình trên GIAO DIỆN đó.
- Bạn nên LUÔN SỬ DỤNG lệnh này trên các giao diện không có bất kỳ láng giềng OSPF nào.

![image](https://github.com/psaumur/CCNA/assets/106411237/a0422f88-dbd9-4965-8c73-16cfd438b05e)

![image](https://github.com/psaumur/CCNA/assets/106411237/aaa1daaa-8ab7-441a-bec2-9f0391a82ecc)

“show ip protocols”

![image](https://github.com/psaumur/CCNA/assets/106411237/f02c3838-c9ad-4836-8e93-ecad42e205b2)

LƯU Ý chữ "no" trong ngoặc vuông - điều này chỉ ra rằng đó là lựa chọn MẶC ĐỊNH.

![image](https://github.com/psaumur/CCNA/assets/106411237/c222d290-4d10-4e63-b7d5-8317ae5ccdfc)

KHOẢNG CÁCH QUẢN TRỊ (AD) đối với OSPF là 110 (MẶC ĐỊNH) nhưng có thể được thay đổi bằng lệnh “distance”.

![image](https://github.com/psaumur/CCNA/assets/106411237/849a7fd3-457e-4310-be08-b4c8b4c8a8a2)
