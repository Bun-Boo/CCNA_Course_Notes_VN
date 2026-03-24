# 47. Chất lượng Dịch vụ (QoS - Quality of Service): PHẦN 2

PHÂN LOẠI / ĐÁNH DẤU (CLASSIFICATION / MARKING)

- Mục đích của QoS là ưu tiên cho một số loại LƯU LƯỢNG MẠNG nhất định so với các loại khác trong quá trình tắc nghẽn.
- PHÂN LOẠI (CLASSIFICATION) sắp xếp LƯU LƯỢNG mạng (CÁC GÓI TIN) vào CÁC LỚP LƯU LƯỢNG (CÁC DANH MỤC).
- PHÂN LOẠI là nền tảng của QoS.
    - Để ưu tiên (PRIORITY) cho một số loại LƯU LƯỢNG nhất định, bạn phải XÁC ĐỊNH được loại LƯU LƯỢNG nào cần được ưu tiên.
- Có NHIỀU phương pháp để PHÂN LOẠI LƯU LƯỢNG:
    - Một bản danh sách ACL: LƯU LƯỢNG được cho phép bởi ACL sẽ được xử lý theo một CÁCH nhất định, các LƯU LƯỢNG khác thì không.
    - NBAR (Network Based Application Recognition) thực hiện một việc *KIỂM TRA GÓI TIN CHUYÊN SÂU (DEEP PACKET INSPECTION),* nhìn xa hơn thông tin LỚP 3 và LỚP 4 lên tới LỚP 7 để xác định các loại LƯU LƯỢNG cụ thể.
    - Trong TIÊU ĐỀ LỚP 2 và LỚP 3 có các TRƯỜNG cụ thể được sử dụng cho mục đích này.
- TRƯỜNG PCP (PRIORITY CODE POINT) của thẻ 802.1Q (trong TIÊU ĐỀ ETHERNET) có thể được sử dụng để xác định LƯU LƯỢNG CÓ ĐỘ ƯU TIÊN CAO / THẤP.
    - ** CHỈ khi có thẻ dot1q!
- TRƯỜNG DSCP (DIFFERENTIATED SERVICES CODE POINT) của TIÊU ĐỀ IP cũng có thể được sử dụng để xác định LƯU LƯỢNG CÓ ĐỘ ƯU TIÊN CAO / THẤP.

---

PCP / CoS

![image](https://github.com/psaumur/CCNA/assets/106411237/2d2037b6-6992-4758-a1cb-5df0f939b153)

- PCP cũng được biết đến với tên gọi CoS (CLASS OF SERVICE - LỚP DỊCH VỤ).
- Việc sử dụng nó được định nghĩa bởi tiêu chuẩn IEEE 802.1p.
- 3 bits = 8 giá trị khả thi (2^3 = 8).

![image](https://github.com/psaumur/CCNA/assets/106411237/af191e31-082d-43c0-ab76-225d4dd2e354)

- GIÁ TRỊ PCP 0:
    - Chuyển phát “NỖ LỰC TỐI ĐA” (BEST EFFORT) nghĩa là không có sự đảm bảo rằng dữ liệu sẽ được chuyển đến hoặc đáp ứng BẤT KỲ Tiêu chuẩn QoS nào. Đây là LƯU LƯỢNG THÔNG THƯỜNG - KHÔNG PHẢI ƯU TIÊN CAO.

- GIÁ TRỊ PCP 3 và 5:
    - CÁC ĐIỆN THOẠI IP ĐÁNH DẤU lưu lượng báo hiệu cuộc gọi (được sử dụng để thiết lập cuộc gọi) là PCP3.
        - Chúng ĐÁNH DẤU lưu lượng THOẠI thực tế là PCP5.

- Bởi vì PCP nằm trong tiêu đề dot1q, nó chỉ có thể được sử dụng qua các loại kết nối sau:
    - CÁC LIÊN KẾT TRUNK (TRUNK LINKS).
    - CÁC LIÊN KẾT TRUY CẬP (ACCESS LINKS) có VLAN CHO THOẠI.
    
- Trong sơ đồ bên dưới, LƯU LƯỢNG giữa R1 và R2, hoặc giữa R2 và CÁC ĐÍCH BÊN NGOÀI sẽ không có thẻ dot1q. Vì vậy, lưu lượng qua các liên kết đó không thể được đánh dấu bằng giá trị PCP.

![image](https://github.com/psaumur/CCNA/assets/106411237/07a1cbb3-d034-4a9b-accc-59e7f738452f)

---

BYTE IP ToS

![image](https://github.com/psaumur/CCNA/assets/106411237/3323ff23-96a5-45f4-abde-893d72a4021f)

![image](https://github.com/psaumur/CCNA/assets/106411237/ffec398b-7b0a-47a1-9758-a7a14daf6aa0)

(6 bits dành cho DSCP và 2 bits dành cho ECN)

---

IP PRECEDENCE (ĐỘ ƯU TIÊN IP - CŨ)

![image](https://github.com/psaumur/CCNA/assets/106411237/1b0ca3ca-fc8d-4225-9368-64c8ff9587da)

- Các nhãn IPP tiêu chuẩn tương tự như PCP:
    - 6 và 7 được dự trữ cho ‘lưu lượng điều khiển mạng’ (ví dụ: Các thông điệp OSPF giữa CÁC ROUTER).
    - 5 = THOẠI (VOICE).
    - 4 = VIDEO.
    - 3 = BÁO HIỆU THOẠI (VOICE SIGNALLING).
    - 0 = NỖ LỰC TỐI ĐA (BEST EFFORT).
- Với 6 và 7 đã được dự trữ, còn lại 6 giá trị khả thi.
- Mặc dù 6 giá trị là đủ cho nhiều MẠNG, nhưng CÁC YÊU CẦU QoS của một số MẠNG đòi hỏi sự linh hoạt hơn.

---

DSCP (HIỆN TẠI)

![image](https://github.com/psaumur/CCNA/assets/106411237/48a63948-81b9-43d5-a108-34525a381533)

- RFC 2474 (năm 1998) định nghĩa trường DSCP, và các RFC ‘DiffServ’ khác giải thích chi tiết về việc sử dụng nó.
- Khi IPP được cập nhật lên DSCP, CÁC NHÃN TIÊU CHUẨN (STANDARD MARKINGS) mới đã phải được quyết định.
    - Bằng cách có CÁC NHÃN TIÊU CHUẨN được thống nhất chung cho CÁC LOẠI LƯU LƯỢNG KHÁC NHAU:
        - Việc THIẾT KẾ và TRIỂN KHAI QoS được đơn giản hóa.
        - QoS hoạt động tốt hơn giữa các ISP và CÁC DOANH NGHIỆP.
        - v.v.

- Bạn nên BIẾT về CÁC NHÃN TIÊU CHUẨN SAU ĐÂY:
    - DEFAULT FORWARDING (DF) - Chuyển tiếp Mặc định: Lưu lượng Nỗ lực tối đa.
    - EXPEDITED FORWARDING (EF) - Chuyển tiếp Nhanh: Lưu lượng có Độ mất gói / Độ trễ / Biến động độ trễ thấp (thường là thoại).
    - ASSURED FORWARDING (AF) - Chuyển tiếp Đảm bảo: Một bộ gồm 12 GIÁ TRỊ TIÊU CHUẨN.
    - CLASS SELECTOR (CS) - Bộ chọn lớp: Một bộ gồm 8 GIÁ TRỊ TIÊU CHUẨN, cung cấp khả năng tương thích ngược với IPP.

---

DF / EF

CHUYỂN TIẾP MẶC ĐỊNH (DF - DEFAULT FORWARDING)

![image](https://github.com/psaumur/CCNA/assets/106411237/26f6bc76-6b33-40f0-9327-022b4816d280)

- Được sử dụng cho LƯU LƯỢNG NỖ LỰC TỐI ĐA (BEST EFFORT).
- Nhãn DSCP cho DF là 0.

CHUYỂN TIẾP NHANH (EF - EXPEDITED FORWARDING)

![image](https://github.com/psaumur/CCNA/assets/106411237/12cf77c0-f139-494c-ab8b-d765a73a92f4)

- EF được sử dụng cho LƯU LƯỢNG yêu cầu Độ mất gói / Độ trễ / Biến động độ trễ thấp.
- Nhãn DSCP cho EF là 46.

---

CHUYỂN TIẾP ĐẢM BẢO (AF - ASSURED FORWARDING)

- Định nghĩa BỐN LỚP LƯU LƯỢNG (TRAFFIC CLASSES).
- TẤT CẢ GÓI TIN trong một LỚP đều có cùng ĐỘ ƯU TIÊN.
- Bên trong mỗi LỚP, có BA MỨC ĐỘ ƯU TIÊN HỦY GÓI (DROP PRECEDENCE).
    - ƯU TIÊN HỦY GÓI CAO HƠN = Có nhiều khả năng HỦY GÓI TIN hơn trong quá trình TẮC NGHẼN.
    

![image](https://github.com/psaumur/CCNA/assets/106411237/407ab29c-678d-4a38-8e8e-2a6f904b4d94)

CÁC VÍ DỤ:

![image](https://github.com/psaumur/CCNA/assets/106411237/d6b2dac7-fefc-409b-8136-f34df165dd23)

![image](https://github.com/psaumur/CCNA/assets/106411237/6543afb5-9aba-4d91-9d61-233c2c67958d)

![image](https://github.com/psaumur/CCNA/assets/106411237/fae89ed7-7229-4632-b3de-5415a36ad267)

![image](https://github.com/psaumur/CCNA/assets/106411237/a7440ed0-70d8-48c2-b83d-dcb4e169fade)

![image](https://github.com/psaumur/CCNA/assets/106411237/0d2d9ba8-fecc-47a8-9cee-02ae5a7a30e9)

![image](https://github.com/psaumur/CCNA/assets/106411237/05fa1552-e305-4e2d-b6aa-db0c8cbed3f7)

![image](https://github.com/psaumur/CCNA/assets/106411237/be10edd7-a4e3-4df6-a94f-b9e1b1c9e304)

- AF41 nhận được CÁCH XỬ LÝ TỐT NHẤT (Độ ưu tiên cao nhất / Khả năng hủy thấp nhất).
- AF13 nhận được CÁCH XỬ LÝ TỆ NHẤT (Độ ưu tiên thấp nhất / Khả năng hủy cao nhất).

---

BỘ CHỌN LỚP (CS - CLASS SELECTOR)

- Định nghĩa TÁM giá trị DSCP để tương thích ngược với IPP.
- BA BITS được thêm vào cho DSCP được đặt thành 0, và các bit IPP ban đầu được sử dụng để tạo ra 8 giá trị.

![image](https://github.com/psaumur/CCNA/assets/106411237/d7619e44-1ffd-4613-bbad-f2ff19ff6d2a)

---

RFC 4954

- RFC 4954 được phát triển với sự trợ giúp của Cisco để đưa TẤT CẢ các GIÁ TRỊ này lại với nhau và TIÊU CHUẨN HÓA việc sử dụng chúng.

- RFC này đưa ra NHIỀU khuyến nghị cụ thể, nhưng đây là một vài khuyến nghị CHÍNH:
    - LƯU LƯỢNG THOẠI (VOICE TRAFFIC) : EF.
    - VIDEO TƯƠNG TÁC (INTERACTIVE VIDEO) : AF4x.
    - VIDEO PHÁT TRỰC TUYẾN (STREAMING VIDEO) : AF3x.
    - DỮ LIỆU ĐỘ ƯU TIÊN CAO (HIGH PRIORITY DATA) : AF2x.
    - NỖ LỰC TỐI ĐA (BEST EFFORT) : DF.

---

RANH GIỚI TIN CẬY (TRUST BOUNDARIES)

- RANH GIỚI TIN CẬY của một MẠNG xác định nơi mà THIẾT BỊ TIN TƯỞNG / KHÔNG TIN TƯỞNG vào các NHÃN QoS của các thông điệp nhận được.
- Nếu các NHÃN ĐƯỢC TIN TƯỞNG:
    - THIẾT BỊ sẽ chuyển tiếp thông điệp mà không thay đổi các NHÃN đó.
- Nếu các NHÃN KHÔNG ĐƯỢC TIN TƯỞNG:
    - THIẾT BỊ sẽ thay đổi các NHÃN theo CHÍNH SÁCH đã được cấu hình.

![image](https://github.com/psaumur/CCNA/assets/106411237/cdcdc302-9dbe-4dd8-9184-72d1f501bc1a)

- Nếu một ĐIỆN THOẠI IP được kết nối tới CỔNG SWITCH, KHUYẾN NGHỊ nên chuyển RANH GIỚI TIN CẬY tới CÁC ĐIỆN THOẠI IP.
- Việc này được thực hiện thông qua CẤU HÌNH trên CỔNG SWITCH được kết nối với ĐIỆN THOẠI IP.
- Nếu một người dùng TỰ ĐÁNH DẤU LƯU LƯỢNG trên PC của họ với ĐỘ ƯU TIÊN CAO, NHÃN đó sẽ bị THAY ĐỔI (không được tin tưởng).

![image](https://github.com/psaumur/CCNA/assets/106411237/606ad681-fad4-4f23-96bf-bd7dde91eaf4)

---

XẾP HÀNG / QUẢN LÝ TẮC NGHẼN (QUEUING / CONGESTION MANAGEMENT)

- Khi một THIẾT BỊ MẠNG nhận được LƯU LƯỢNG với TỐC ĐỘ NHANH HƠN mức nó có thể CHUYỂN TIẾP ra khỏi GIAO DIỆN phù hợp, CÁC GÓI TIN sẽ được đưa vào HÀNG ĐỢI của GIAO DIỆN đó trong khi chờ được CHUYỂN TIẾP.
- Khi một HÀNG ĐỢI trở nên ĐẦY, CÁC GÓI TIN không THỂ CHỨA VỪA trong hàng đợi sẽ bị hủy bỏ (Tail Drop).
- RED và WRED HỦY CÁC GÓI TIN sớm để tránh hiện tượng TAIL DROP.

![image](https://github.com/psaumur/CCNA/assets/106411237/5dbfd417-097c-4107-a5e1-b5476f423b15)

- Một phần thiết yếu của QoS là việc sử dụng NHIỀU HÀNG ĐỢI.
    - Đây là nơi mà PHÂN LOẠI (CLASSIFICATION) phát huy vai trò.
    - THIẾT BỊ có thể khớp LƯU LƯỢNG dựa trên các yếu tố khác nhau (như các NHÃN DSCP trong TIÊU ĐỀ IP) và sau đó đưa nó vào HÀNG ĐỢI phù hợp.

- TUY NHIÊN, THIẾT BỊ chỉ có thể chuyển tiếp một KHUNG TIN ra khỏi một GIAO DIỆN tại một thời điểm NÊN một *BỘ LẬP LỊCH (SCHEDULER)*, được sử dụng để quyết định xem LƯU LƯỢNG từ HÀNG ĐỢI nào sẽ được CHUYỂN TIẾP tiếp theo.
    - *SỰ ƯU TIÊN HÓA (PRIORITZATION)* cho phép BỘ LẬP LỊCH dành cho một số HÀNG ĐỢI nhiều ĐỘ ƯU TIÊN hơn những hàng đợi khác.

![image](https://github.com/psaumur/CCNA/assets/106411237/56bfe184-5bdf-4b8f-8851-756766456bf9)

- Một phương pháp lập lịch PHỔ BIẾN là *VÒNG TRÒN CÓ TRỌNG SỐ (WEIGHTED ROUND-ROBIN)*.
    - VÒNG TRÒN (ROUND-ROBIN):
        - CÁC GÓI TIN được lấy ra từ mỗi HÀNG ĐỢI theo thứ tự, tuần hoàn.
    - CÓ TRỌNG SỐ (WEIGHTED):
        - Nhiều DỮ LIỆU hơn được lấy ra từ CÁC HÀNG ĐỢI ƯU TIÊN CAO mỗi khi BỘ LẬP LỊCH chạm tới hàng đợi đó.

---

- CBWFQ (XẾP HÀNG CÔNG BẰNG CÓ TRỌNG SỐ DỰA TRÊN LỚP - CLASS BASED WEIGHED FAIR QUEUING)
    - Phương pháp LẬP LỊCH phổ biến.
    - Sử dụng BỘ LẬP LỊCH VÒNG TRÒN CÓ TRỌNG SỐ trong khi vẫn đảm bảo cho mỗi HÀNG ĐỢI một TỶ LỆ PHẦN TRĂM nhất định trong băng thông của GIAO DIỆN trong quá trình TẮC NGHẼN.
    

![image](https://github.com/psaumur/CCNA/assets/106411237/eee24cef-c67a-42de-9fa0-9351cab56354)

- LẬP LỊCH VÒNG TRÒN (ROUND-ROBIN) KHÔNG PHẢI LÀ LÝ TƯỞNG cho lưu lượng THOẠI / VIDEO.
    - Ngay cả khi lưu lượng THOẠI / VIDEO nhận được một lượng BĂNG THÔNG tối thiểu được đảm bảo, VÒNG TRÒN vẫn có thể gây thêm ĐỘ TRỄ và BIẾN ĐỘNG ĐỘ TRỄ (JITTER) bởi vì ngay cả CÁC HÀNG ĐỢI ƯU TIÊN CAO cũng phải chờ đến lượt mình trong BỘ LẬP LỊCH.

---

- LLQ (XẾP HÀNG ĐỘ TRỄ THẤP - LOW LATENCY QUEUING)
    - Chỉ định MỘT (hoặc nhiều hơn) HÀNG ĐỢI làm *các hàng đợi ưu tiên nghiêm ngặt (strict priority queues)*.
    - Điều này có nghĩa là nếu có LƯU LƯỢNG trong HÀNG ĐỢI đó, BỘ LẬP LỊCH sẽ LUÔN LUÔN lấy GÓI TIN tiếp theo từ hàng đợi đó cho đến khi nó TRỐNG RỖNG.
    - Điều này RẤT HIỆU QUẢ trong việc giảm ĐỘ TRỄ và BIẾN ĐỘNG ĐỘ TRỄ của lưu lượng THOẠI / VIDEO.
    - TUY NHIÊN, LLQ có một NHƯỢC ĐIỂM là có khả năng làm cạn kiệt các HÀNG ĐỢI khác nếu có lưu lượng liên tục trong *HÀNG ĐỢI ƯU TIÊN NGHIÊM NGẶT* ĐÃ CHỈ ĐỊNH.
        - Lệnh GIÁM SÁT (POLICING) có thể kiểm soát LƯỢNG LƯU LƯỢNG được phép trong *HÀNG ĐỢI ƯU TIÊN NGHIÊM NGẶT* để nó không thể chiếm toàn bộ BĂNG THÔNG của liên kết.
    

![image](https://github.com/psaumur/CCNA/assets/106411237/2b544243-3a2e-4721-bf1f-4636ec4085a7)

 

---

ĐIỀU TIẾT / GIÁM SÁT (SHAPING / POLICING)

- ĐIỀU TIẾT LƯU LƯỢNG (TRAFFIC SHAPING) và GIÁM SÁT (POLICING) đều được sử dụng để kiểm soát TỐC ĐỘ của LƯU LƯỢNG.
- ĐIỀU TIẾT (SHAPING):
    - Đưa LƯU LƯỢNG vào bộ đệm trong một HÀNG ĐỢI nếu TỐC ĐỘ LƯU LƯỢNG vượt quá TỐC ĐỘ ĐÃ CẤU HÌNH.

- GIÁM SÁT (POLICING):
    - HỦY LƯU LƯỢNG nếu TỐC ĐỘ LƯU LƯỢNG vượt quá TỐC ĐỘ ĐÃ CẤU HÌNH.
        - GIÁM SÁT cũng có tùy chọn ĐÁNH DẤU LẠI (RE-MARKING) lưu lượng, thay vì HỦY BỎ.
    - Lưu lượng “BÙNG PHÁT” (BURST) vượt quá TỐC ĐỘ ĐÃ CẤU HÌNH được cho phép trong một khoảng thời gian ngắn.
    - Điều này phù hợp với CÁC ỨNG DỤNG DỮ LIỆU vốn thường có tính chất “bùng phát” (tức là không phải dòng dữ liệu liên tục).
    - Lượng LƯU LƯỢNG BÙNG PHÁT được phép là có thể cấu hình được.
    
- Trong CẢ HAI trường hợp, PHÂN LOẠI (CLASSIFICATION) có thể được sử dụng để CHO PHÉP CÁC TỐC ĐỘ khác nhau cho CÁC LOẠI LƯU LƯỢNG khác nhau.
- TẠI SAO bạn lại muốn GIỚI HẠN TỐC ĐỘ mà LƯU LƯỢNG được GỬI / NHẬN?

![image](https://github.com/psaumur/CCNA/assets/106411237/09771d78-4570-4300-97e1-adba77fe28b4)
