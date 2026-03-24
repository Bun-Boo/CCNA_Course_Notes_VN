# 24. ĐỊNH TUYẾN ĐỘNG (DYNAMIC ROUTING)

ĐỊNH TUYẾN ĐỘNG LÀ GÌ?

![image](https://github.com/psaumur/CCNA/assets/106411237/8acc17ee-5d4b-4725-b5e4-18dc5743340e)

- LỚP 3 (LỚP MẠNG)
- Liên quan đến việc cấu hình một GIAO THỨC ĐỊNH TUYẾN ĐỘNG (DYNAMIC ROUTING PROTOCOL) trên ROUTER và để ROUTER tự tìm ra các tuyến đường tốt nhất đến CÁC MẠNG ĐÍCH.
- Không cố định (sẽ tự điều chỉnh theo những thay đổi trong mạng LAN).

![image](https://github.com/psaumur/CCNA/assets/106411237/deb9abf6-6e21-4c94-a407-bfc501a1d739)


```
💡 TUYẾN ĐƯỜNG MẠNG (A NETWORK ROUTE): Một TUYẾN ĐƯỜNG tới một MẠNG hoặc MẠNG CON (Độ dài mặt nạ subnet < /32).
```

Ví dụ: **10.0.12.0/30** và **10.0.13.0/30** (ở trên) là CÁC TUYẾN ĐƯỜNG MẠNG.

```
💡 TUYẾN ĐƯỜNG MÁY CHỦ (A HOST ROUTE): Một TUYẾN ĐƯỜNG tới một MÁY CHỦ cụ thể (Mặt nạ subnet /32).
```

Ví dụ: **10.0.12.1/32** và **10.0.13.1/32** (ở trên) là CÁC TUYẾN ĐƯỜNG MÁY CHỦ.

Hai TUYẾN ĐƯỜNG này được TỰ ĐỘNG thêm vào các giao diện G0/0 và G1/0 của R1.

---

ĐỊNH TUYẾN ĐỘNG HOẠT ĐỘNG NHƯ THẾ NÀO?

![image](https://github.com/psaumur/CCNA/assets/106411237/9d2d7f88-a325-461f-99fd-0dc88ee23749)

(R4 QUẢNG BÁ tới R2, R2 QUẢNG BÁ tới R1, R1 QUẢNG BÁ tới R3 - Chúng thêm TUYẾN ĐƯỜNG MẠNG tới R4 vào BẢNG TUYẾN ĐƯỜNG của mình).

Nếu TUYẾN ĐƯỜNG MẠNG bị ngắt, tuyến đường đó sẽ bị XÓA KHỎI BẢNG ĐIỀU HƯỚNG một cách ĐỘNG.

![image](https://github.com/psaumur/CCNA/assets/106411237/a477d438-f6cb-4a09-b66d-e07826755bd1)

(R1 xóa TUYẾN ĐƯỜNG tới R4 khỏi BẢNG ĐIỀU HƯỚNG của nó).

Trong ĐỊA CHỈ TĨNH (STATIC ROUTING), một ROUTER bị hỏng vẫn sẽ có lưu lượng được truyền đến nó. CÁC BẢNG ĐỊNH TUYẾN không thay đổi.

![image](https://github.com/psaumur/CCNA/assets/106411237/e689a88a-7275-489c-80 b4-18894a7ce4c9)

(R1 có một TUYẾN ĐƯỜNG TĨNH tới R4 và truyền lưu lượng đến MẠNG của nó bất kể trạng thái của R4).

ĐỊNH TUYẾN ĐỘNG rất tốt nhưng vẫn cần TÍNH DỰ PHÒNG, vì vậy chúng ta thêm một kết nối khác giữa R3 và R4.

![image](https://github.com/psaumur/CCNA/assets/106411237/8a7cb9cb-beea-4522-87f7-7fd11df9f745)

(Tuyến đường ĐỘNG dự phòng được thêm từ R1 tới R4 thông qua R3. BẢNG ĐỊA CHỈ được cập nhật phù hợp).

Sự cố trên tuyến đường đi qua R2 tới giao diện G0/0 của R4 sẽ tự động chuyển hướng lưu lượng đi qua R3.

![image](https://github.com/psaumur/CCNA/assets/106411237/d4509ce2-07f1-4fb0-8e31-cf58c049c355)

Tại sao đường đi lại ưu tiên đi qua R2 thay vì R3?

Bởi vì CHI PHÍ (COST)! Điều này tương tự như cách GIAO THỨC CÂY KHUNG hoạt động (với các SWITCH).

---

GIỚI THIỆU VỀ CÁC GIAO THỨC ĐỊNH TUYẾN ĐỘNG

- Các ROUTER có thể sử dụng CÁC GIAO THỨC ĐỊNH TUYẾN ĐỘNG để QUẢNG BÁ thông tin về các TUYẾN ĐƯỜNG mà chúng biết tới CÁC ROUTER KHÁC.
- Chúng hình thành các 'MỐI QUAN HỆ LÁNG GIỀNG' (ADJACENCIES / NEIGHBOR RELATIONSHIPS / NEIGHBORSHIPS) với CÁC ROUTER LIỀN KỀ để trao đổi thông tin này.
- Nếu học được nhiều TUYẾN ĐƯỜNG tới cùng một ĐÍCH, ROUTER sẽ xác định tuyến đường nào ƯU THẾ HƠN và thêm nó vào BẢNG ĐỊNH TUYẾN. Nó sử dụng 'CHỈ SỐ' (METRIC) của tuyến đường để quyết định xem tuyến nào ưu thế hơn (chỉ số thấp hơn = ưu thế hơn).

---

CÁC LOẠI GIAO THỨC ĐỊNH TUYẾN ĐỘNG

CÁC GIAO THỨC ĐỊNH TUYẾN ĐỘNG có thể được chia thành HAI loại chính:

- IGP (Interior Gateway Protocol - Giao thức cổng nội bộ)
- EGP (Exterior Gateway Protocol - Giao thức cổng ngoại vi)

IGP

- Được sử dụng để CHIA SẺ CÁC TUYẾN ĐƯỜNG trong một *hệ thống tự trị* (AS) duy nhất, vốn là một tổ chức (ví dụ: một công ty).

![image](https://github.com/psaumur/CCNA/assets/106411237/06af6c77-3a03-44fa-8c55-9382347d3f5e)

EGP

- Được sử dụng để CHIA SẺ CÁC TUYẾN ĐƯỜNG *giữa* các *hệ thống tự trị (AS)* khác nhau.

![image](https://github.com/psaumur/CCNA/assets/106411237/37680a4b-caab-4e1d-ac64-00a799bd965f)

Các thuật toán được sử dụng cho IGP và EGP và giao thức tương ứng cho mỗi loại:

![image](https://github.com/psaumur/CCNA/assets/106411237/36729569-0e56-4eb2-91ee-e7cd25a8c234)

```
💡 BẠN PHẢI GHI NHỚ THUẬT TOÁN NÀO ĐƯỢC SỬ DỤNG CHO GIAO THỨC NÀO ĐỂ THI CCNA!
```

---

CÁC GIAO THỨC ĐỊNH TUYẾN VECTOR KHOẢNG CÁCH (DISTANCE VECTOR)

- Được gọi là VECTOR KHOẢNG CÁCH vì các ROUTER chỉ học được 'khoảng cách' (METRIC) và 'vector' (HƯỚNG, ROUTER KẾ TIẾP - NEXT-HOP) của mỗi TUYẾN ĐƯỜNG.

- GIAO THỨC VECTOR KHOẢNG CÁCH được phát minh trước GIAO THỨC TRẠNG THÁI LIÊN KẾT (LINK STATE).
- Các ví dụ sơ khai là RIPv1 và IGRP của Cisco (sau này được cập nhật thành EIGRP).
- CÁC GIAO THỨC VECTOR KHOẢNG CÁCH hoạt động bằng cách gửi những thông tin sau tới các láng giềng kết nối trực tiếp với chúng:
    - Các mạng ĐÍCH MÀ CHÚNG BIẾT.
    - CHỈ SỐ (METRIC) của chúng để tới được mạng ĐÍCH đó.
- PHƯƠNG PHÁP chia sẻ thông tin tuyến đường này thường được gọi là ***‘định tuyến theo tin đồn’*** (routing by rumor).
    - ***‘định tuyến theo tin đồn’*** = vì ROUTER không biết về MẠNG nằm ngoài các LÁNG GIỀNG của nó. Nó chỉ biết những thông tin mà các LÁNG GIỀNG kể cho nó nghe.

![image](https://github.com/psaumur/CCNA/assets/106411237/773eb20d-7983-4da4-ae66-e97e421e83ba)

---

CÁC CHỈ SỐ (METRIC) CỦA GIAO THỨC ĐỊNH TUYẾN ĐỘNG

- BẢNG ĐIỀU HƯỚNG của một ROUTER chứa TUYẾN ĐƯỜNG TỐT NHẤT tới mỗi MẠNG ĐÍCH mà nó biết.

Nếu một ROUTER sử dụng GIAO THỨC ĐỊNH TUYẾN ĐỘNG học được HAI tuyến đường khác nhau tới cùng một ĐÍCH, làm thế nào nó xác định được tuyến nào là **‘tốt nhất’**?

Nó sử dụng giá trị CHỈ SỐ (METRIC) của các TUYẾN ĐƯỜNG để xác định xem tuyến nào là TỐT NHẤT.

CHỈ SỐ thấp hơn = TỐT HƠN! (giống như STP).

MỖI GIAO THỨC ĐỊNH TUYẾN sử dụng một CHỈ SỐ khác nhau để xác định xem TUYẾN ĐƯỜNG nào là tốt nhất.

![image](https://github.com/psaumur/CCNA/assets/106411237/bf324652-f4b8-482e-af17-03da590ac85d)

Ví dụ trên chọn ĐƯỜNG MÀU ĐỎ vì “chi phí” (cost), sử dụng R3 F2/0 và R4 F2/0 (FastEthernet) CAO HƠN so với R2 G1/0 và R4 G0/0 (GigabyteEthernet).

Điều gì xảy ra nếu CẢ HAI kết nối đều là GigabyteEthernet? (tức là: có cùng giá trị METRIC).

![image](https://github.com/psaumur/CCNA/assets/106411237/3f8437cc-5b38-4f1e-b185-c5e9fce6c5f1)

CẢ HAI TUYẾN ĐƯỜNG đều được thêm vào BẢNG ĐỊA CHỈ.

Vì vậy…

```
💡 Nếu một ROUTER học được HAI (hoặc nhiều hơn) TUYẾN ĐƯỜNG thông qua cùng một GIAO THỨC ĐỊNH TUYẾN tới cùng một ĐÍCH (cùng địa chỉ mạng, cùng mặt nạ subnet) với cùng một CHỈ SỐ METRIC, cả hai sẽ được thêm vào bảng định tuyến. Lưu lượng sẽ được CÂN BẰNG TẢI trên cả hai TUYẾN ĐƯỜNG.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/79662f99-a847-457b-8080-76f77c25c5e6)

“O” = GIAO THỨC OSPF (cạnh các TUYẾN ĐƯỜNG).

[110/3] :

- Phần “3” là CHỈ SỐ (METRIC).
- Phần “110” là KHOẢNG CÁCH QUẢN TRỊ (ADMINISTRATIVE DISTANCE) (sẽ được đề cập sau).

```
💡 Vì CẢ HAI TUYẾN ĐƯỜNG đều có cùng CHỈ SỐ METRIC, điều này được gọi là ECMP (EQUAL COST MULTI-PATH - Đa đường truyền chi phí bằng nhau).
```

Bạn cũng có thể có ECMP với CÁC TUYẾN ĐƯỜNG TĨNH (mặc dù chúng không sử dụng METRIC).

---

TÓM TẮT CÁC CHỈ SỐ (METRIC) KHÁC NHAU

![image](https://github.com/psaumur/CCNA/assets/106411237/7b8390aa-46d4-49d3-83a4-03ba095bf927)

(IS-IS sẽ không được trình bày chi tiết).

VÍ DỤ:

![image](https://github.com/psaumur/CCNA/assets/106411237/d0c6c9f2-3526-46b2-b520-1f4b6b28ea8f)

Sử dụng RIP, cả hai TUYẾN ĐƯỜNG sẽ được đưa vào BẢNG ĐỊA CHỈ của R1.

Sử dụng OSPF, chỉ có TUYẾN ĐƯỜNG từ R1 > R2 > R4 mới được thêm vào BẢNG ĐỊA CHỈ của R1 vì TỔNG CHI PHÍ của mỗi liên kết.

Tuy nhiên, CẢ HAI CHỈ SỐ METRIC đều đang cố gắng đạt được cùng một điều:

Cho phép ROUTER chọn TUYẾN ĐƯỜNG TỐT NHẤT tới ĐÍCH.

---

KHOẢNG CÁCH QUẢN TRỊ (ADMINISTRATIVE DISTANCE)

- Trong HẦU HẾT các trường hợp, một công ty sẽ chỉ sử dụng một IGP duy nhất - thông thường là OSPF hoặc EIGRP.
- Tuy nhiên, trong một số trường hợp HIẾM HOI, họ có thể sử dụng HAI cái.
    - Ví dụ: Nếu HAI công ty kết nối mạng của họ để chia sẻ thông tin, HAI GIAO THỨC ĐỊNH TUYẾN khác nhau có thể đang được sử dụng.

- CHỈ SỐ (METRIC) được sử dụng để so sánh CÁC TUYẾN ĐƯỜNG được học qua cùng một GIAO THỨC ĐỊNH TUYẾN.

- Các GIAO THỨC ĐỊNH TUYẾN khác nhau sử dụng các METRIC hoàn toàn khác nhau, vì vậy chúng không thể so sánh trực tiếp được.
    - Một TUYẾN ĐƯỜNG OSPF tới 192.168.4.0/24 có thể có METRIC là 30, trong khi một TUYẾN ĐƯỜNG EIGRP tới cùng một ĐÍCH đó lại có METRIC là 33280. Tuyến nào tốt hơn? Tuyến nào nên được ROUTER đưa vào BẢNG ĐIỀU HƯỚNG?

- **KHOẢNG CÁCH QUẢN TRỊ (AD)** được sử dụng để xác định GIAO THỨC ĐỊNH TUYẾN nào được ưu tiên hơn.
    - Một giá trị AD THẤP HƠN sẽ được ưu tiên hơn, và nó chỉ ra rằng GIAO THỨC ĐỊNH TUYẾN đó được coi là ‘đáng tin cậy’ hơn (có nhiều khả năng chọn được TUYẾN ĐƯỜNG tốt hơn).

---

CÁC CON SỐ KHOẢNG CÁCH QUẢN TRỊ (AD NUMBERS)

![image](https://github.com/psaumur/CCNA/assets/106411237/0f5ea405-d321-41bc-b2c0-2185874d07db)

(HÃY SỬ DỤNG CÁC THẺ FLASHCARD ĐỂ GHI NHỚ NHỮNG CON SỐ NÀY).

```
💡 NẾU KHOẢNG CÁCH QUẢN TRỊ là 255, ROUTER sẽ không tin tưởng nguồn gốc của TUYẾN ĐƯỜNG đó và không đưa nó vào BẢNG ĐỊNH TUYẾN!
```

![image](https://github.com/psaumur/CCNA/assets/106411237/33dbbe2b-7471-4c17-ae27-4d363d115a4c)

METRIC được dùng để SO SÁNH CÁC TUYẾN ĐƯỜNG học được từ CÙNG MỘT GIAO THỨC ĐỊNH TUYẾN.

Tuy nhiên, trước khi so sánh METRICS, AD được sử dụng để chọn TUYẾN ĐƯỜNG TỐT NHẤT.

Do đó, TUYẾN ĐƯỜNG TỐT NHẤT là:

“next hop 192.168.3.1, learned via OSPF (AD thấp hơn RIP), metric 10”

- Bạn có thể THAY ĐỔI AD của một GIAO THỨC ĐỊNH TUYẾN (Điều này sẽ được minh họa trong bài giảng về CẤU HÌNH OSPF).
- Bạn cũng có thể thay đổi AD của một TUYẾN ĐƯỜNG TĨNH:

![image](https://github.com/psaumur/CCNA/assets/106411237/ec167f95-e5d7-49c8-aff7-1957e51934b1)

![image](https://github.com/psaumur/CCNA/assets/106411237/db6bef3b-ed82-49f0-b094-804c82f67f8d)

TẠI SAO BẠN MUỐN LÀM ĐIỀU NÀY?

CÁC TUYẾN ĐƯỜNG TĨNH DỰ PHÒNG (FLOATING STATIC ROUTES)

- Bằng cách THAY ĐỔI AD của một TUYẾN ĐƯỜNG TĨNH, bạn có thể khiến nó ít được ưu tiên hơn so với CÁC TUYẾN ĐƯỜNG được học bởi GIAO THỨC ĐỊNH TUYẾN ĐỘNG tới cùng một ĐÍCH (hãy đảm bảo giá trị AD đó CAO HƠN AD của GIAO THỨC ĐỊNH TUYẾN!).
- Loại TUYẾN ĐƯỜNG này được gọi là ‘TUYẾN ĐƯỜNG TĨNH DỰ PHÒNG’ (FLOATING STATIC ROUTE).
- Tuyến đường này sẽ ở trạng thái không hoạt động (không nằm trong BẢNG ĐỊNH TUYẾN) trừ khi tuyến đường học được bởi GIAO THỨC ĐỊNH TUYẾN ĐỘNG bị xóa bỏ.
    - **Ví dụ:** ROUTER từ xa vì lý do gì đó ngừng QUẢNG BÁ nó, hoặc một lỗi giao diện khiến MỐI QUAN HỆ LÁNG GIỀNG (ADJACENCY) bị mất.

---

CÁC GIAO THỨC ĐỊNH TUYẾN TRẠNG THÁI LIÊN KẾT (LINK STATE)

- Khi sử dụng GIAO THỨC ĐỊNH TUYẾN TRẠNG THÁI LIÊN KẾT, mỗi ROUTER sẽ tạo ra một ‘bản đồ kết nối’ cho toàn bộ MẠNG.
- Để làm được điều này, mỗi ROUTER QUẢNG BÁ thông tin về các GIAO DIỆN (các MẠNG được kết nối) của mình tới các LÁNG GIỀNG. Những QUẢNG BÁ này được truyền tiếp tới các ROUTER khác, cho đến khi tất cả các ROUTER trong MẠNG đều có chung một bản đồ về MẠNG đó.
- Mỗi ROUTER độc lập sử dụng BẢN ĐỒ này để tính toán CÁC TUYẾN ĐƯỜNG TỐT NHẤT tới mỗi ĐÍCH.
- GIAO THỨC TRẠNG THÁI LIÊN KẾT sử dụng nhiều tài nguyên (CPU) của ROUTER hơn, bởi vì NHIỀU thông tin được chia sẻ hơn.
- Tuy nhiên, GIAO THỨC TRẠNG THÁI LIÊN KẾT có xu hướng PHẢN ỨNG NHANH HƠN với NHỮNG THAY ĐỔI trong MẠNG so với CÁC GIAO THỨC VECTOR KHOẢNG CÁCH.
