# 25. RIP và EIGRP (IGP : VECTOR KHOẢNG CÁCH)

GIAO THỨC THÔNG TIN ĐỊNH TUYẾN (ROUTING INFORMATION PROTOCOL - RIP)

- Giao thức thông tin định tuyến (Tiêu chuẩn công nghiệp).
- Là một giao thức cổng nội bộ (IGP) dạng VECTOR KHOẢNG CÁCH.
    - Sử dụng cơ chế logic "Định tuyến theo tin đồn" (Routing-By-Rumor) để học/chia sẻ các tuyến đường.
- Sử dụng SỐ BƯỚC NHẢY (HOP COUNT) làm CHỈ SỐ METRIC (Một Router = Một bước nhảy). Băng thông là không liên quan.
- SỐ BƯỚC NHẢY TỐI ĐA là 15 (bất cứ giá trị nào lớn hơn đều được coi là không thể tới được).
- Có BA PHIÊN BẢN:
    - RIPv1 và RIPv2: dùng cho IPv4.
    - RIPng (RIP Next Generation): dùng cho IPv6.
- Sử dụng HAI LOẠI THÔNG ĐIỆP:
    - YÊU CẦU (REQUEST):
        - Để yêu cầu các ROUTER láng giềng đã bật RIP gửi BẢNG ĐIỀU HƯỚNG của chúng.
    - PHẢN HỒI (RESPONSE):
        - Để GỬI BẢNG ĐIỀU HƯỚNG của router đó tới các ROUTER láng giềng.

Theo MẶC ĐỊNH, các ROUTER đã bật RIP sẽ chia sẻ BẢNG ĐIỀU HƯỚNG của chúng sau mỗi 30 giây.

RIPv1 và RIPv2

RIPv1:

- Chỉ quảng bá *địa chỉ theo lớp* (Classful addresses - Lớp A, Lớp B, Lớp C).
- Không hỗ trợ VLSM, CIDR.
- Không bao gồm thông tin MẶT NẠ MẠNG CON (SUBNET MASK) trong các QUẢNG BÁ (các thông điệp RESPONSE).
    - Ví dụ:
        - 10.1.1.0/24 sẽ trở thành 10.0.0.0 (Địa chỉ lớp A, nên được giả định là /8).
        - 172.16.192.0/18 sẽ trở thành 172.16.0.0 (Địa chỉ lớp B, nên được giả định là /16).
        - 192.168.1.40/30 sẽ trở thành 192.168.1.0 (Địa chỉ lớp C, nên được giả định là /24).
- Các thông điệp được QUẢNG BÁ (BROADCAST) tới địa chỉ 255.255.255.255.

RIPv2:

- Hỗ trợ VLSM, CIDR.
- Có bao gồm thông tin MẶT NẠ MẠNG CON trong các bản tin QUẢNG BÁ.
- Các thông điệp được gửi dưới dạng **đa địa chỉ (multicast)** tới 224.0.0.9.
    - Các thông điệp Quảng bá (Broadcast) được gửi tới TẤT CẢ các thiết bị trong mạng nội bộ.
    - Các thông điệp Đa hướng (Multicast) chỉ được gửi tới các thiết bị đã tham gia vào ***nhóm multicast*** cụ thể đó.

---

CẤU HÌNH RIP

![image](https://github.com/psaumur/CCNA/assets/106411237/1d14ec8b-121c-4666-b608-1e5d1889424c)

Lệnh **“network”** chỉ thị cho router:

- Tìm các GIAO DIỆN có ĐỊA CHỈ IP nằm trong DẢI cụ thể đó.
- KÍCH HOẠT RIP trên các GIAO DIỆN nằm trong DẢI đó.
- Hình thành CÁC QUAN HỆ LÁNG GIỀNG với các láng giềng RIP được kết nối.
- Quảng bá **TIỀN TỐ MẠNG (NETWORK PREFIX) CỦA GIAO DIỆN** (CHỨ CHƯA PHẢI tiền tố trong lệnh “network”).

Các lệnh **“network”** của OSPF và EIGRP cũng hoạt động theo cách tương tự.

Vì lệnh “network” của RIP tuân theo quy tắc ĐỊA CHỈ THEO LỚP (CLASSFUL), nên nó sẽ tự động chuyển đổi sang các mạng theo lớp:

- 10.0.0.0 được giả định là 10.0.0.0/8.
- R1 sẽ tìm BẤT KỲ GIAO DIỆN NÀO có ĐỊA CHỈ IP khớp với 10.0.0.0/8 (vì là /8 nên nó chỉ cần khớp với 8 bit ĐẦU TIÊN).
- 10.0.12.1 và 10.0.13.1 đều khớp, VÌ VẬY RIP được KÍCH HOẠT trên G0/0 và G0/1.
- R1 sau đó hình thành các MỐI QUAN HỆ LÁNG GIỀNG với các láng giềng của nó là R2 và R3.
- R1 QUẢNG BÁ 10.0.12.0/30 và 10.0.13.0/30 (CHỨ KHÔNG PHẢI 10.0.0.0/8) tới các láng giềng RIP của nó.

![image](https://github.com/psaumur/CCNA/assets/106411237/2a9452f0-b48f-499d-938f-0a3db5ff6587)

- Vì lệnh “network” tuân theo địa chỉ theo lớp, 172.16.0.0 được giả định là 172.16.0.0/16.
- R1 sẽ tìm BẤT KỲ GIAO DIỆN NÀO khớp với 172.16.0.0/16.
- 172.16.1.14 khớp, vì vậy R1 sẽ KÍCH HOẠT RIP trên G2/0.
- KHÔNG có láng giềng RIP nào kết nối tới G2/0 nên không có QUAN HỆ LÁNG GIỀNG mới nào được hình thành.
    - Mặc dù KHÔNG có láng giềng RIP, R1 vẫn sẽ gửi bản tin QUẢNG BÁ ra khỏi G2/0.
    - Đây là lưu lượng không cần thiết, vì vậy G2/0 nên được cấu hình là một **giao diện thụ động (passive interface)**.

![image](https://github.com/psaumur/CCNA/assets/106411237/634f4c6b-291c-4a21-8ae2-c8283044efce)

- Lệnh “passive-interface” chỉ thị cho ROUTER ngừng gửi các bản tin quảng bá RIP ra khỏi giao diện được chỉ định (G2/0).
- Tuy nhiên, ROUTER vẫn sẽ tiếp tục QUẢNG BÁ tiền tố mạng của giao diện đó (172.16.1.0/28) tới các láng giềng RIP của nó (R2, R3).
- Bạn nên LUÔN LUÔN sử dụng lệnh này trên CÁC GIAO DIỆN không có bất kỳ láng giềng RIP nào.
- EIGRP và OSPF cũng có cùng chức năng giao diện thụ động này, sử dụng cùng một câu lệnh.

---

CÁCH QUẢNG BÁ MỘT TUYẾN ĐƯỜNG MẶC ĐỊNH (DEFAULT ROUTE) VÀO RIP

![image](https://github.com/psaumur/CCNA/assets/106411237/57de003e-0e8e-48c7-bb72-fbe25208d847)

![image](https://github.com/psaumur/CCNA/assets/106411237/1c500efd-e96b-4e49-b1f4-f99c54b0e877)

Để CHIA SẺ TUYẾN ĐƯỜNG MẶC ĐỊNH này với các láng giềng RIP của R1, hãy sử dụng lệnh sau:

![image](https://github.com/psaumur/CCNA/assets/106411237/799d818a-06cc-4f29-8c74-c67639c9d014)

RIP không quan tâm đến chi phí AD của giao diện (AD của RIP là 120), nó chỉ quan tâm đến “số bước nhảy”.

Vì cả hai đều có số lượng “bước nhảy” bằng nhau, nên cả hai đường dẫn đều xuất hiện trong TUYẾN ĐƯỜNG MẶC ĐỊNH (Gateway of Last Resort).

![image](https://github.com/psaumur/CCNA/assets/106411237/1deccb54-02e0-4d3b-b203-277d656504b3)

---

“show ip protocols” (đối với RIP)

![image](https://github.com/psaumur/CCNA/assets/106411237/b7ab4046-b6eb-4e19-b7eb-2c5d2889293a)

“Maximum path: 4” là giá trị MẶC ĐỊNH nhưng có thể được thay đổi bằng lệnh sau:

![image](https://github.com/psaumur/CCNA/assets/106411237/35d524bd-055d-4c5e-a84b-f507a87738e0)

“Distance” (AD) có thể được thay đổi bằng lệnh này (MẶC ĐỊNH là 120):

![image](https://github.com/psaumur/CCNA/assets/106411237/5247942b-1d6b-419f-a4c7-75bfcca43fe6)

---

GIAO THỨC ĐỊNH TUYẾN CỔNG NỘI BỘ NÂNG CAO (ENHANCED INTERIOR GATEWAY ROUTING PROTOCOL - EIGRP)

- Enhanced Interior Gateway Routing Protocol.
- Là một giao thức cổng nội bộ (IGP) dạng VECTOR KHOẢNG CÁCH.
- Từng là giao thức độc quyền của Cisco, nhưng hiện Cisco đã công bố công khai để các nhà sản xuất khác có thể triển khai trên thiết bị của họ.
- Được coi là một GIAO THỨC ĐỊNH TUYẾN VECTOR KHOẢNG CÁCH “tiên tiến” / “lai” (hybrid).
- Phản ứng với các thay đổi trong MẠNG nhanh hơn RIP rất nhiều.
- KHÔNG có giới hạn 15 'bước nhảy' như của RIP.
- Gửi các thông điệp bằng ĐỊA CHỈ MULTICAST **224.0.0.10 (Hãy ghi nhớ con số này)**.
- Là IGP DUY NHẤT có thể thực hiện cân bằng tải chi phí **không bằng nhau** (Theo MẶC ĐỊNH, nó thực hiện cân bằng tải ECMP qua 4 đường giống như RIP).

---

CẤU HÌNH EIGRP

![image](https://github.com/psaumur/CCNA/assets/106411237/f2b42631-bcb9-4f62-afe9-b7bb1e7e0d7e)

“router eigrp <số định danh hệ tự trị Autonomous System>”

- Số hiệu AS (Autonomous System) PHẢI TRÙNG KHỚP giữa các ROUTER, nếu không chúng sẽ KHÔNG hình thành QUAN HỆ LÁNG GIỀNG và không chia sẻ thông tin TUYẾN ĐƯỜNG.
- Tính năng tự động tóm tắt địa chỉ (Auto-summary) có thể được BẬT hoặc TẮT theo MẶC ĐỊNH, tùy thuộc vào phiên bản ROUTER/IOS. Nếu nó đang BẬT, hãy TẮT nó đi.
- Lệnh **“network”** sẽ giả định một ĐỊA CHỈ THEO LỚP, nếu bạn không chỉ định MẶT NẠ MẠNG CON (SUBNET MASK).
- EIGRP sử dụng một *mặt nạ đại diện* (wildcard mask) thay vì mặt nạ mạng con thông thường.

MẶT NẠ ĐẠI DIỆN (WILDCARD MASK) là một MẶT NẠ MẠNG CON “đảo ngược”.

- Tất cả các số 1 trong MẶT NẠ MẠNG CON sẽ là số 0 trong MẶT NẠ ĐẠI DIỆN tương ứng.
- Tất cả các số 0 trong MẶT NẠ MẠNG CON sẽ là số 1 trong MẶT NẠ ĐẠI DIỆN tương ứng.

![image](https://github.com/psaumur/CCNA/assets/106411237/f64e06d3-75ad-4f4f-b7d6-26f27ffae541)

“0” trong MẶT NẠ ĐẠI DIỆN = CÁC BIT PHẢI TRÙNG KHỚP!

“1” trong MẶT NẠ ĐẠI DIỆN = Không bắt buộc phải trùng khớp.

![image](https://github.com/psaumur/CCNA/assets/106411237/13130e3c-de62-4f80-9c7d-256a2ed47e74)

![image](https://github.com/psaumur/CCNA/assets/106411237/1aa2cd2c-397f-4f3b-86ed-81eddf2677a6)

![image](https://github.com/psaumur/CCNA/assets/106411237/500ac3b0-5d83-4691-ab94-06fd330a9111)

---

“show ip protocols” (đối với EIGRP)

![image](https://github.com/psaumur/CCNA/assets/106411237/f3f169da-d733-4da9-8d8a-c90e2077d8a7)

“Router ID” (Mã định danh Router)

Thứ tự ưu tiên của ROUTER ID:

- Cấu hình thủ công.
- ĐỊA CHỈ IP cao nhất trên một GIAO DIỆN LẶP (LOOPBACK INTERFACE).
- ĐỊA CHỈ IP cao nhất trên một GIAO DIỆN VẬT LÝ.

![image](https://github.com/psaumur/CCNA/assets/106411237/29757624-9e79-4878-8724-36d5da43f39b)

“Distance” (KHOẢNG CÁCH QUẢN TRỊ - AD)

EIGRP có HAI GIÁ TRỊ:

- Nội bộ (Internal) = 90.
- Ngoại vi (External) = 170.

HÃY GHI NHỚ NHỮNG GIÁ TRỊ NÀY!

“show ip route” (đối với EIGRP)

![image](https://github.com/psaumur/CCNA/assets/106411237/8216ceb6-0d3f-42e7-8e5b-46e810097fb8)

LƯU Ý những con số METRIC rất lớn. Đây là một mặt hạn chế của EIGRP - ngay cả trên các mạng nhỏ!

---

CHỈ SỐ METRIC CỦA EIGRP

- Theo MẶC ĐỊNH, EIGRP sử dụng BĂNG THÔNG (BANDWIDTH) và ĐỘ TRỄ (DELAY) để tính toán METRIC.
- Các giá trị “K” mặc định là:
    - K1 = 1, K2 = 0, K3 = 1, K4 = 0, K5 = 0.

```
💡 Tính toán đơn giản hóa: METRIC = BĂNG THÔNG (Liên kết chậm nhất) + ĐỘ TRỄ (của TẤT CẢ CÁC LIÊN KẾT).
```

---

CÁC THUẬT NGỮ CỦA EIGRP

- **Feasible Distance (FD)** (Khoảng cách khả thi) = Giá trị METRIC của ROUTER HIỆN TẠI để tới được ĐÍCH của TUYẾN ĐƯỜNG.
- **Reported Distance (RD)** (Khoảng cách báo cáo) (còn gọi là **Advertised Distance**) = Giá trị METRIC của router LÁNG GIỀNG để tới được ĐÍCH của TUYẾN ĐƯỜNG.

![image](https://github.com/psaumur/CCNA/assets/106411237/436ba2c2-43e7-4fea-a527-f88a8e4460bc)

- **Successor** (Tuyến đường tối ưu) = TUYẾN ĐƯỜNG có METRIC THẤP NHẤT tới ĐÍCH (tuyến đường tốt nhất).
- **Feasible Successor** (Tuyến đường dự phòng khả thi) = Một TUYẾN ĐƯỜNG thay thế tới ĐÍCH (không phải tuyến tốt nhất) nhưng thỏa mãn *điều kiện khả thi*.

**ĐIỀU KIỆN KHẢ THI (FEASIBILITY CONDITION)**: Một TUYẾN ĐƯỜNG được coi là một ***Feasible Successor*** nếu giá trị ***Reported Distance*** của nó THẤP HƠN giá trị ***Feasible distance*** của tuyến Successor.

![image](https://github.com/psaumur/CCNA/assets/106411237/206db633-3a7e-4d11-bb80-029ea8107503)

---

EIGRP : CÂN BẰNG TẢI CHI PHÍ KHÔNG BẰNG NHAU (UNEQUAL-COST LOAD-BALANCED)

![image](https://github.com/psaumur/CCNA/assets/106411237/23a2045b-a925-4f75-b0f8-78cbae2aa1e2)

“maximum metric variance 1” = giá trị MẶC ĐỊNH.

Variance 1 = chỉ thực hiện cân bằng tải ECMP (Equal-Cost Multiple Path).

![image](https://github.com/psaumur/CCNA/assets/106411237/824dac1d-38dc-4e7e-bb48-b382918230ff)

Variance 2 = các tuyến ***feasible successor*** có giá trị FD lên tới gấp 2 lần FD của tuyến ***successor*** có thể được sử dụng để cân bằng tải.

```
💡 EIGRP sẽ chỉ thực hiện CÂN BẰNG TẢI CHI PHÍ KHÔNG BẰNG NHAU trên CÁC TUYẾN ĐƯỜNG là feasible successor. Nếu một TUYẾN ĐƯỜNG không thỏa mãn điều kiện khả thi, nó sẽ KHÔNG BAO GIỜ được chọn để cân bằng tải, bất kể giá trị variance là bao nhiêu.
```
