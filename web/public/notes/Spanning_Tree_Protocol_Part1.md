# 20. GIAO THỨC CÂY KHUNG (STP) : PHẦN 1

TÍNH DỰ PHÒNG TRONG MẠNG (REDUNDANCY)

- Là yếu tố thiết yếu trong thiết kế mạng.
- Các mạng hiện đại được kỳ vọng hoạt động 24/7/365; ngay cả một khoảng thời gian ngừng hoạt động ngắn cũng có thể gây thảm họa cho doanh nghiệp.
- Nếu một thành phần mạng bị hỏng, bạn phải đảm bảo rằng các thành phần khác sẽ tiếp quản với ít hoặc không có thời gian gián đoạn.
- Trong khả năng có thể, bạn phải triển khai TÍNH DỰ PHÒNG (REDUNDANCY) tại mọi điểm có thể trong mạng.

MỘT VÍ DỤ VỀ THIẾT KẾ MẠNG KÉM

![image](https://github.com/psaumur/CCNA/assets/106411237/b3b76af5-11e6-495b-8c40-40eb5800704b)


Lưu ý nhiều điểm lỗi đơn lẻ (single-point failures) có thể xảy ra (các kết nối đơn).

THIẾT KẾ MẠNG TỐT HƠN

![image](https://github.com/psaumur/CCNA/assets/106411237/01c20d92-2cf6-4d1f-a193-ded7753aeb38)


KHÔNG MAY THAY:

- Hầu hết các máy tính (PC) chỉ có một card mạng (NIC) duy nhất, vì vậy chúng chỉ có thể cắm vào một SWITCH duy nhất. Tuy nhiên, các MÁY CHỦ (SERVERS) quan trọng thường có nhiều NIC, vì vậy chúng có thể được cắm vào nhiều SWITCH để dự phòng!

Vậy tại sao tính dự phòng này lại có thể là một điều XẤU?

BÃO QUẢNG BÁ (BROADCAST STORMS)

![image](https://github.com/psaumur/CCNA/assets/106411237/a0bf91be-a463-45df-bfc5-df471d0544b5)


![image](https://github.com/psaumur/CCNA/assets/106411237/d13b6ab5-5298-4166-bdfa-3315f05a2961)


![image](https://github.com/psaumur/CCNA/assets/106411237/f719de69-df9e-4549-b3cb-914d7c5aabc4)


TRÀN NGẬP CÁC YÊU CẦU ARP (Màu đỏ = Vòng lặp theo chiều kim đồng hồ // Màu tím = Vòng lặp ngược chiều kim đồng hồ).

Tắc nghẽn mạng không phải là vấn đề duy nhất.

Mỗi khi một KHUNG TIN (FRAME) đến một cổng SWITCHPORT, SWITCH sẽ sử dụng trường ĐỊA CHỈ MAC NGUỒN để “học” ĐỊA CHỈ MAC và cập nhật BẢNG ĐỊA CHỈ MAC của nó.

Khi các khung tin có cùng ĐỊA CHỈ MAC NGUỒN liên tục đến trên các giao diện khác nhau, SWITCH sẽ liên tục cập nhật giao diện trong BẢNG ĐỊA CHỈ MAC.

Hiện tượng này được gọi là **NHẢY ĐỊA CHỈ MAC (MAC ADDRESS FLAPPING)**.

Vậy làm thế nào để chúng ta thiết kế một mạng có các đường dự phòng mà không dẫn đến CÁC VÒNG LẶP LỚP 2 (LAYER 2 LOOPS).

GIAO THỨC CÂY KHUNG (SPANNING TREE PROTOCOL) là một giải pháp.

---

STP (SPANNING TREE PROTOCOL) : 802.1D

- “Giao thức Cây khung cổ điển” là tiêu chuẩn IEEE **802.1D**.
- Các SWITCH từ TẤT CẢ các hãng đều chạy STP theo mặc định.
- STP ngăn chặn các vòng lặp Lớp 2 bằng cách đặt các CỔNG dự phòng vào trạng thái CHẶN (BLOCKING), về cơ bản là vô hiệu hóa GIAO DIỆN đó.
- Các GIAO DIỆN này đóng vai trò là các bản dự phòng có thể chuyển sang trạng thái CHUYỂN TIẾP (FORWARDING) nếu một GIAO DIỆN đang hoạt động bị hỏng.
- Các GIAO DIỆN ở trạng thái CHẶN chỉ gửi hoặc nhận các thông điệp STP (gọi là BPDUs = Bridge Protocol Data Units - Đơn vị dữ liệu giao thức cầu).

```
💡 GIAO THỨC CÂY KHUNG vẫn sử dụng thuật ngữ “CẦU” (BRIDGE). Tuy nhiên, khi sử dụng thuật ngữ này, ý chúng ta thực sự muốn nói đến là “SWITCH”. CẦU (BRIDGES) không còn được sử dụng trong các mạng hiện đại.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/f253770d-22fa-4e3f-91b0-8f2b4c2f1a61)


GIAO DIỆN MÀU CAM bị “CHẶN” gây ra sự ngắt quãng trong các vòng lặp.

![image](https://github.com/psaumur/CCNA/assets/106411237/45125471-da23-4753-b5b1-16c23a2bfeff)


Nếu có thay đổi xảy ra trong các kết nối, lưu lượng sẽ điều chỉnh lại cấu trúc liên kết (topology).

- Bằng cách chọn CỔNG nào ở trạng thái CHUYỂN TIẾP (FORWARDING) và cổng nào ở trạng thái CHẶN (BLOCKING), STP tạo ra một đường đi duy nhất ĐẾN / TỪ mỗi điểm trong MẠNG. Điều này ngăn chặn các Vòng lặp Lớp 2.
- Có một quy trình thiết lập sẵn mà STP sử dụng để xác định cổng nào nên CHUYỂN TIẾP và cổng nào nên CHẶN.
- Các SWITCH đã bật STP sẽ gửi / nhận “Hello BPDUs” ra khỏi tất cả các GIAO DIỆN.
    - Bộ đếm thời gian mặc định là: 2 GIÂY một lần cho mỗi GIAO DIỆN!
- Nếu một SWITCH nhận được một “Hello BPDU” trên một GIAO DIỆN, nó biết rằng GIAO DIỆN đó được kết nối với một SWITCH khác (ROUTER, PC, v.v. không sử dụng STP nên không gửi “Hello BPDUs”).

---

BPDUs ĐƯỢC DÙNG ĐỂ LÀM GÌ?

- Các SWITCH sử dụng một trường trong STP BPDU, đó là trường BRIDGE ID (Mã định danh cầu), để bầu chọn một **CẦU GỐC (ROOT BRIDGE)** cho MẠNG.
- SWITCH có BRIDGE ID thấp nhất sẽ trở thành CẦU GỐC (ROOT BRIDGE).
- TẤT CẢ CÁC CỔNG trên CẦU GỐC đều được đặt ở trạng thái CHUYỂN TIẾP, và các SWITCH khác trong cấu trúc liên kết phải có một đường dẫn để tới được CẦU GỐC.

![image](https://github.com/psaumur/CCNA/assets/106411237/05177f47-882e-47ea-8bec-22e073392e1c)

![image](https://github.com/psaumur/CCNA/assets/106411237/17f921f6-0583-4070-9493-5f5d80ad4866)

![image](https://github.com/psaumur/CCNA/assets/106411237/bb49a034-9f6d-4e92-9ea0-8bc71c4f2ec8)


Để GIẢM ĐỘ ƯU TIÊN CẦU (BRIDGE PRIORITY), chúng ta chỉ có thể thay đổi nó theo các bội số của 4096!

![image](https://github.com/psaumur/CCNA/assets/106411237/39fe6239-1217-4885-b07b-8f368dad0e28)


Trong CẤU TRÚC LIÊN KẾT NÀY, SW1 trở thành CẦU GỐC (ROOT BRIDGE) do ĐỊA CHỈ MAC của nó là THẤP NHẤT.

(Hệ Hexa “A” = 10)

![image](https://github.com/psaumur/CCNA/assets/106411237/b1e1a69d-4b9c-46bf-9b77-f30b9f7c3933)


TẤT CẢ GIAO DIỆN trên CẦU GỐC đều là **CỔNG CHỈ ĐỊNH (DESIGNATED PORTS)**.

CỔNG CHỈ ĐỊNH LUÔN Ở TRẠNG THÁI CHUYỂN TIẾP (FORWARDING STATE)!

CẦU GỐC (ROOT BRIDGE)

- Khi một SWITCH được bật nguồn, nó tự coi mình là CẦU GỐC.
- Nó chỉ từ bỏ vị trí của mình nếu nhận được một BPDU “ƯU THẾ HƠN” (SUPERIOR BPDU - có BRIDGE ID thấp hơn).
- Một khi cấu trúc liên kết đã hội tụ và tất cả các SWITCH đều đồng ý về CẦU GỐC, chỉ có CẦU GỐC mới được gửi BPDUs.
- Các SWITCH khác trong mạng sẽ chuyển tiếp các BPDUs này, nhưng sẽ không tự tạo ra các BPDUs gốc của riêng mình.

---

CÁC BƯỚC CỦA GIAO THỨC CÂY KHUNG

1) Một SWITCH được bầu làm **CẦU GỐC (ROOT BRIDGE)**. Tất cả các CỔNG trên CẦU GỐC là **CỔNG CHỈ ĐỊNH (DESIGNATED PORTS)** (TRẠNG THÁI CHUYỂN TIẾP).

- Thứ tự bầu chọn CẦU GỐC:
    - 1) BRIDGE ID thấp nhất.
    - 2) Địa chỉ MAC thấp nhất (trong trường hợp Bridge ID bằng nhau).

2) Mỗi SWITCH còn lại sẽ chọn MỘT trong các GIAO DIỆN của nó để làm **CỔNG GỐC (ROOT PORT)** (TRẠNG THÁI CHUYỂN TIẾP). Các CỔNG đối diện với CỔNG GỐC luôn là CỔNG CHỈ ĐỊNH.

- Thứ tự bầu chọn CỔNG GỐC:
    - 1) CHI PHÍ ĐẾN GỐC THẤP NHẤT (LOWEST ROOT COST) (xem BẢNG CHI PHÍ STP).
    - 2) BRIDGE ID CỦA LÁNG GIỀNG THẤP NHẤT.
    - 3) PORT ID CỦA LÁNG GIỀNG THẤP NHẤT.

3) Mỗi MIỀN XUNG ĐỘT (COLLISION DOMAIN) còn lại sẽ chọn MỘT GIAO DIỆN làm CỔNG CHỈ ĐỊNH (TRẠNG THÁI CHUYỂN TIẾP). CỔNG còn lại trong MIỀN XUNG ĐỘT đó sẽ là **KHÔNG CHỈ ĐỊNH (NON-DESIGNATED/BLOCKING)**.

- BẦU CHỌN CỔNG CHỈ ĐỊNH:
    - 1) GIAO DIỆN trên SWITCH có CHI PHÍ ĐẾN GỐC THẤP NHẤT.
    - 2) GIAO DIỆN trên SWITCH có BRIDGE ID THẤP NHẤT.

---

BẢNG CHI PHÍ STP (STP COST CHART)

```
💡 Chỉ những GIAO DIỆN ĐI RA (OUTGOING) hướng về CẦU GỐC mới có CHI PHÍ STP; các GIAO DIỆN NHẬN (RECEIVING) thì không. Hãy cộng tất cả các chi phí cổng ĐI RA cho đến khi bạn chạm tới CẦU GỐC.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/0ee95883-aed8-42a3-ba82-11209ef8cd40)


SW1 là CẦU GỐC nên có CHI PHÍ STP là 0 trên TẤT CẢ GIAO DIỆN.

![image](https://github.com/psaumur/CCNA/assets/106411237/35037ae9-3430-44ac-be6d-c8d2a2a42c24)


Các CỔNG kết nối tới CỔNG GỐC của một switch khác PHẢI là CỔNG CHỈ ĐỊNH (D).

Bởi vì CỔNG GỐC là đường đi của SWITCH tới CẦU GỐC, nên một switch khác không được phép chặn nó.

STP PORT ID (trong trường hợp cần phân định khi bằng nhau):

![image](https://github.com/psaumur/CCNA/assets/106411237/63d2fb87-31fa-4b57-a2c3-a203feded8ba)


PORT ID CỦA SWITCH LÁNG GIỀNG (trong trường hợp cần phân định):

(D) = DESIGNATED PORT (Cổng chỉ định)

(R) = ROOT PORT (Cổng gốc)

![image](https://github.com/psaumur/CCNA/assets/106411237/c3fcc32b-e95f-4d4b-a241-f9f3080e858f)


LÀM THẾ NÀO ĐỂ XÁC ĐỊNH CỔNG NÀO SẼ BỊ CHẶN ĐỂ NGĂN CHẶN CÁC VÒNG LẶP LỚP 2:

![image](https://github.com/psaumur/CCNA/assets/106411237/1b69a092-4150-44c3-b605-5916fdea91d6)

---

CÂU HỎI KIỂM TRA (QUIZ)

Hãy xác định CẦU GỐC và VAI TRÒ của MỖI GIAO DIỆN trên MẠNG (GỐC / CHỈ ĐỊNH / KHÔNG CHỈ ĐỊNH).

#1

![image](https://github.com/psaumur/CCNA/assets/106411237/62bcf349-dd89-48be-92f6-d6a184edeb6f)


TẤT CẢ CÁC SWITCH đều có cùng SỐ ĐỘ ƯU TIÊN (32769).

Phân định bằng ĐỊA CHỈ MAC THẤP NHẤT.

SW3 có Mac thấp nhất nên nó là CẦU GỐC và TẤT CẢ GIAO DIỆN của nó trở thành CHỈ ĐỊNH.

Các kết nối từ SW1 (G0/1) và S4 (G0/0) tới SW3 trở thành GIAO DIỆN GỐC (ROOT INTERFACES).

Vì SW2 có HAI kết nối tới SW1, cả hai giao diện ĐẾN của SW1 đều trở thành CHỈ ĐỊNH.

Giao diện G0/2 của SW2 trở thành GIAO DIỆN GỐC vì giao diện G0/0 của SW1 thấp hơn giao diện G0/2 của nó.

Các giao diện còn lại trên SW2 trở thành KHÔNG CHỈ ĐỊNH (NON-DESIGNATED) vì nó có CHI PHÍ ĐẾN GỐC CAO NHẤT (12 = 4x kết nối 1 GB). Các giao diện mà chúng kết nối tới trên các switch khác trở thành CHỈ ĐỊNH.

#2

![image](https://github.com/psaumur/CCNA/assets/106411237/ae382ec2-9c0f-4673-94b5-5d1411c8db6b)


SW4 có Số Độ ưu tiên Thấp nhất nên nó được chỉ định là CẦU GỐC.

Tất cả các giao diện của SW4 trở thành CHỈ ĐỊNH.

SW2 G0/0 trở thành CỔNG GỐC vì kết nối SW4 G0/0 là số THẤP HƠN G0/1.

SW3 G0/1 trở thành CỔNG GỐC.

SW1 G0/1 trở thành CỔNG GỐC vì chi phí G0/1 thấp hơn so với Fa1/0 và 2/0.

MỖI CỔNG còn lại sẽ là CHỈ ĐỊNH hoặc KHÔNG CHỈ ĐỊNH.

SW1 Fa1/0 và 2/0 trở thành KHÔNG CHỈ ĐỊNH vì chúng có CHI PHÍ STP CAO HƠN (38) so với các cổng đi ra của SW2 (8), khiến cho SW2 Fa1/0 và 2/0 trở thành CHỈ ĐỊNH.

Kết nối còn lại của SW2, G0/1, là KHÔNG CHỈ ĐỊNH.
