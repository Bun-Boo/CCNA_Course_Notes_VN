# 27. OSPF : PHẦN 2 (IGP : TRẠNG THÁI LIÊN KẾT)

CHỈ SỐ METRIC CỦA OSPF (Cost)

- CHỈ SỐ (METRIC) của OSPF được gọi là **CHI PHÍ (COST)**.
- Nó được tính toán tự động dựa trên băng thông (TỐC ĐỘ) của GIAO DIỆN.
- Nó được tính bằng cách CHIA một giá trị BĂNG THÔNG THAM CHIẾU cho băng thông thực tế của GIAO DIỆN.
- BĂNG THÔNG THAM CHIẾU MẶC ĐỊNH là 100 Mbps.
    - THAM CHIẾU: 100 Mbps / GIAO DIỆN: 10 Mbps = COST (10).
    - THAM CHIẾU: 100 Mbps / GIAO DIỆN: 100 Mbps = COST (1).
    - THAM CHIẾU: 100 Mbps / GIAO DIỆN: 1000 Mbps = COST (1).
    - THAM CHIẾU: 100 Mbps / GIAO DIỆN: 10000 Mbps = COST (1).
- TẤT CẢ các giá trị COST nhỏ hơn 1 sẽ được CHUYỂN ĐỔI thành 1.
- Do đó FastEthernet (100 Mbps), Gigabit Ethernet (1000 Mbps), 10 Gig Ethernet, v.v., đều tương đương và đều có giá trị COST là 1.

CHI PHÍ (COST) của FastEthernet

![image](https://github.com/psaumur/CCNA/assets/106411237/453258a2-e724-4bf5-b07c-6c533dcef46c)

CHI PHÍ (COST) của Gigabit Ethernet

![image](https://github.com/psaumur/CCNA/assets/106411237/17adfd0e-8944-4016-93bd-98b82ceb8a66)

Bạn có thể (và NÊN) thay đổi BĂNG THÔNG THAM CHIẾU bằng lệnh sau:

```
💡 R1(config-router)# auto-cost reference-bandwidth megabits-per-second
```

Lệnh này được nhập với đơn vị “megabits per second” (MẶC ĐỊNH là “100”).

Ví dụ: sử dụng giá trị “100000”.

- 100000 / 100 = COST là 1000 cho FastEthernet.
- 100000 / 1000 = COST là 100 cho Gig Ethernet.

Bạn nên cấu hình một băng thông tham chiếu LỚN HƠN các liên kết NHANH NHẤT trong MẠNG của mình (để dự phòng cho các nâng cấp trong tương lai).

Việc thay đổi BĂNG THÔNG THAM CHIẾU cần được thực hiện trên TẤT CẢ CÁC ROUTER OSPF trong MẠNG.

---

CHI PHÍ OSPF tới một ĐÍCH là TỔNG CHI PHÍ của các ‘giao diện đi ra (exit interfaces)’.

CÁC GIAO DIỆN LẶP (LOOPBACK INTERFACES) có giá trị COST là 1.

![image](https://github.com/psaumur/CCNA/assets/106411237/ef8de0f8-c22d-4259-bf4c-6fc9894bae29)

Để THAY ĐỔI CHI PHÍ OSPF của một GIAO DIỆN, bạn sử dụng câu lệnh:

```
💡 R1(config-if)# ip ospf cost <giá trị cost>
```

VIỆC CẤU HÌNH CHI PHÍ THỦ CÔNG có mức ưu tiên cao hơn CHI PHÍ ĐƯỢC TÍNH TOÁN TỰ ĐỘNG.

Một lựa chọn khác để thay đổi CHI PHÍ OSPF của một GIAO DIỆN là thay đổi BĂNG THÔNG của GIAO DIỆN đó bằng lệnh **“bandwidth”**.

CÔNG THỨC ĐỂ TÍNH CHI PHÍ OSPF LÀ:

```
💡 băng thông tham chiếu / băng thông giao diện
```

- Mặc dù BĂNG THÔNG trù khớp với TỐC ĐỘ GIAO DIỆN (theo MẶC ĐỊNH), nhưng việc thay đổi BĂNG THÔNG GIAO DIỆN **không thực sự làm thay đổi tốc độ hoạt động của GIAO DIỆN**.
- BĂNG THÔNG chỉ là một GIÁ TRỊ được sử dụng để tính toán CHI PHÍ OSPF, METRIC của EIGRP, v.v.
- Để THAY ĐỔI TỐC ĐỘ mà GIAO DIỆN hoạt động, hãy sử dụng lệnh **“speed”**.
- Bởi vì GIÁ TRỊ BĂNG THÔNG được sử dụng trong các phép tính khác, nên KHÔNG được khuyến khích thay đổi GIÁ TRỊ này để điều chỉnh CHI PHÍ OSPF của GIAO DIỆN.

ĐƯỢC KHUYẾN NGHỊ rằng bạn nên THAY ĐỔI BĂNG THÔNG THAM CHIẾU.

SAU ĐÓ sử dụng lệnh **“ip ospf cost”** để thay đổi CHI PHÍ của từng GIAO DIỆN đơn lẻ, nếu bạn muốn.

![image](https://github.com/psaumur/CCNA/assets/106411237/00196380-4452-4ec9-8cd9-b1949665a5d8)

---

TÓM TẮT:

BA CÁCH để sửa đổi CHI PHÍ OSPF:

1) Thay đổi ***băng thông tham chiếu (reference bandwidth)***:

```
💡 R1(config-router)# auto-cost reference-bandwidth megabits-per-second
```

2) Cấu hình thủ công:

```
💡 R1(config-if)# ip ospf cost <giá trị cost>
```

3) Thay đổi ***băng thông giao diện (interface bandwidth)***:

```
💡 R1(config-if)# bandwidth <kilobits-per-second>
```

![image](https://github.com/psaumur/CCNA/assets/106411237/aba02fbc-174c-41a1-a8e3-0ffdda3a6cbd)

---

TRỞ THÀNH LÁNG GIỀNG OSPF (BECOMING OSPF NEIGHBORS)

- Việc đảm bảo các ROUTER trở thành LÁNG GIỀNG OSPF thành công là nhiệm vụ CHÍNH trong việc cấu hình và khắc phục sự cố OSPF.
- Một khi các ROUTER đã trở thành LÁNG GIỀNG, chúng sẽ TỰ ĐỘNG thực hiện các công việc chia sẻ thông tin MẠNG, tính toán các tuyến đường, v.v.
- Khi OSPF được kích hoạt trên một GIAO DIỆN, ROUTER sẽ bắt đầu gửi các thông điệp **“hello”** OSPF ra ngoài GIAO DIỆN đó theo các khoảng thời gian đều đặn (được xác định bởi **“hello timer”).** Những thông điệp này được sử dụng để giới thiệu ROUTER đó với các LÁNG GIỀNG OSPF tiềm năng.
- Khoảng thời gian MẶC ĐỊNH của “**hello timer**” là **10 GIÂY** trên một kết nối Ethernet.
- Các thông điệp **Hello** được gửi đa hướng (MULTICAST) tới địa chỉ **224.0.0.5** (địa chỉ multicast cho TẤT CẢ ROUTER OSPF).
- Các thông điệp OSPF được đóng gói trong một IP HEADER, với **giá trị “89”** trong trường PROTOCOL.

TRẠNG THÁI DOWN (DOWN STATE)

- OSPF được kích hoạt trên GIAO DIỆN G0/0 của R1.
- Nó gửi một thông điệp “hello” OSPF tới địa chỉ 224.0.0.5.
- Nó chưa biết về bất kỳ láng giềng OSPF nào, vì vậy trạng thái láng giềng hiện tại là DOWN.

![image](https://github.com/psaumur/CCNA/assets/106411237/fa9b91da-e0c3-42d9-8c0a-eb47991b1894)

TRẠNG THÁI INIT (INIT STATE)

- Khi R2 nhận được gói tin “hello”, nó sẽ thêm một mục cho R1 vào bảng láng giềng OSPF của mình.
- Trong bảng láng giềng của R2, mối quan hệ với R1 giờ đây ở trạng thái INIT.
- Trạng thái INIT = gói tin “hello” đã nhận được, nhưng ROUTER ID của chính mình không có trong gói tin “hello” đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/70f3474f-f4bf-4194-b479-d7a65ad82505)

TRẠNG THÁI 2-WAY (2-WAY STATE)

- R2 sẽ gửi một gói tin “hello” chứa RID của CẢ HAI ROUTER.
- R1 sẽ chèn R2 vào bảng láng giềng OSPF của nó ở trạng thái 2-WAY.
- R1 sẽ gửi một thông điệp “hello” khác, lần này chứa RID của R2.
- Cả hai ROUTER hiện giờ đang ở trạng thái 2-WAY.

![image](https://github.com/psaumur/CCNA/assets/106411237/4d5e5310-4680-4176-94ab-2d8015032d18)

- Trạng thái 2-WAY có nghĩa là ROUTER đã nhận được một gói tin “hello” có chứa RID của chính nó trong đó.
- Nếu cả hai ROUTER đều đạt đến trạng thái 2-WAY, điều đó có nghĩa là TẤT CẢ các điều kiện đã được thỏa mãn để chúng trở thành láng giềng OSPF.
- Bây giờ chúng đã SẴN SÀNG để CHIA SẺ các LSA nhằm xây dựng một LSDB chung.
- Ở MỘT SỐ loại MẠNG, một DR (Bộ định tuyến chỉ định - Designated Router) và BDR (Bộ định tuyến chỉ định dự phòng - Backup Designated Router) sẽ được bầu chọn tại thời điểm này (Các loại mạng OSPF và việc bầu chọn DR/BDR sẽ được thảo luận trong Ngày 28).

TRẠNG THÁI EXSTART (EXSTART STATE)

- HAI ROUTER hiện giờ sẽ chuẩn bị trao đổi thông tin về LSDB của chúng.
- Trước đó, chúng phải chọn ra ROUTER nào sẽ BẮT ĐẦU quá trình trao đổi.
- Chúng thực hiện ĐIỀU NÀY ở trạng thái EXSTART.
    - ROUTER nào có RID cao hơn sẽ trở thành MASTER (Chủ) và khởi xướng việc trao đổi.
    - ROUTER có RID thấp hơn sẽ trở thành SLAVE (Tớ).
- Để quyết định MASTER và SLAVE, chúng trao đổi các gói tin DBD (Database Description - Mô tả Cơ sở dữ liệu).

![image](https://github.com/psaumur/CCNA/assets/106411237/34fa7cca-f837-432b-9296-d1be69a8869c)

TRẠNG THÁI EXCHANGE (EXCHANGE STATE)

- Ở trạng thái EXCHANGE, các ROUTER trao đổi các gói tin DBD có chứa một DANH SÁCH các LSA trong bản LSDB của chúng.
- Các gói tin DBD này KHÔNG bao gồm thông tin chi tiết về các LSA, chỉ là THÔNG TIN CƠ BẢN.
- Các ROUTER so sánh thông tin trong gói DBD mà chúng nhận được với thông tin trong LSDB của CHÍNH MÌNH để xác định những LSA nào chúng cần phải nhận từ láng giềng.

![image](https://github.com/psaumur/CCNA/assets/106411237/600722df-4737-4a69-867e-662c03a6b4b4)

TRẠNG THÁI LOADING (LOADING STATE)

- Ở trạng thái LOADING, các ROUTER gửi các thông điệp **Yêu cầu trạng thái liên kết (Link State Request - LSR)** để yêu cầu láng giềng GỬI cho chúng bất kỳ LSA nào mà chúng chưa có.
- Các LSA được gửi trong các thông điệp **Cập nhật trạng thái liên kết (Link State Update - LSU)**.
- Các ROUTER gửi các bản tin **LSAck** để xác nhận rằng chúng đã nhận được các LSA đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/4fc0fc23-ce00-4381-afef-259091b8f8ef)

TRẠNG THÁI FULL (FULL STATE)

- Ở trạng thái FULL, các ROUTER đã thiết lập đầy đủ quan hệ kề hiệp (OSPF adjacency) và có các bản LSDB giống hệt nhau.
- Chúng tiếp tục GỬI và LẮNG NGHE các gói tin “hello” (mặc định 10 giây một lần) để duy trì quan hệ láng giềng kề hiệp.
- Mỗi lần nhận được một gói tin “hello”, bộ đếm thời gian “CHẾT” (DEAD timer - mặc định 40 giây) sẽ được đặt lại (reset).
- Nếu bộ đếm thời gian CHẾT đếm ngược về 0 mà không nhận được thông điệp “hello” nào, láng giềng đó sẽ bị XÓA BỎ.
- Các ROUTER sẽ tiếp tục chia sẻ các LSA khi mạng có thay đổi để đảm bảo mỗi ROUTER đều có một bản đồ mạng HOÀN CHỈNH và CHÍNH XÁC (LSDB).

![image](https://github.com/psaumur/CCNA/assets/106411237/daaa3a7b-ddd0-4ad0-ace7-056cbf2fbe32)

---

TÓM TẮT CÁC TRẠNG THÁI LÁNG GIỀNG OSPF:

![image](https://github.com/psaumur/CCNA/assets/106411237/0d9f9d7e-04fd-472c-8449-a4f12172c055)

1) TRỞ THÀNH LÁNG GIỀNG (BECOME NEIGHBORS)

- TRẠNG THÁI DOWN
- TRẠNG THÁI INIT
- TRẠNG THÁI 2-WAY
- (BẦU CHỌN DR/BDR)

2) TRAO ĐỔI LSAs (EXCHANGE LSAs)

- TRẠNG THÁI EXSTART
- TRẠNG THÁI EXCHANGE
- TRẠNG THÁI LOADING

---

TÓM TẮT CÁC LOẠI THÔNG ĐIỆP OSPF

![image](https://github.com/psaumur/CCNA/assets/106411237/05b6d3ee-8fdb-4f25-9214-557eeb9a53a6)

---

CÁC CẤU HÌNH OSPF KHÁC

Kích hoạt OSPF TRỰC TIẾP trên một GIAO DIỆN bằng lệnh sau:

```
💡 R1(config-if)# ip ospf process-id area area-id
```

![image](https://github.com/psaumur/CCNA/assets/106411237/ad7aafd6-9cd8-4259-bd32-aff7b5893b46)

Cấu hình TẤT CẢ CÁC GIAO DIỆN là Giao diện thụ động (OSPF Passive Interfaces):

```
💡 R1(config-router)# passive-interface default
```

![image](https://github.com/psaumur/CCNA/assets/106411237/e953696d-283f-4676-8df2-9aff0418d78d)

Sau đó có thể LOẠI BỎ các GIAO DIỆN cụ thể khỏi trạng thái thụ động bằng cách dùng:

```
💡 R1(config-router)# no passive-interface interface-id
```

Việc kích hoạt OSPF TRỰC TIẾP trên CÁC GIAO DIỆN sẽ hiển thị một kết quả khác trong lệnh “show ip protocols”.

![image](https://github.com/psaumur/CCNA/assets/106411237/915e31ee-4fee-455b-a947-229e0af4b182)

Chúng sẽ xuất hiện dưới mục “Routing on Interfaces Configured Explicitly (Area #) :” (như trên).

Hiển thị LSDB OSPF của một thiết bị:

![image](https://github.com/psaumur/CCNA/assets/106411237/75c941ca-b6bd-45f0-9a85-c7e5baff4654)
