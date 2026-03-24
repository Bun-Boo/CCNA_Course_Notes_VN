# 46. QoS (VLAN cho Thoại): PHẦN 1

ĐIỆN THOẠI IP / VLAN CHO THOẠI (VOICE VLANS)

- Các điện thoại truyền thống hoạt động qua *mạng điện thoại chuyển mạch công cộng* (PSTN).
    - Đôi khi, mạng này được gọi là POTS (Plain Old Telephone System - Hệ thống điện thoại cũ đơn thuần).
- ĐIỆN THOẠI IP sử dụng các công nghệ VoIP (Voice Over IP - Thoại qua IP) để thực hiện các cuộc gọi điện thoại qua một MẠNG IP, chẳng hạn như INTERNET.
- ĐIỆN THOẠI IP được kết nối tới một SWITCH, giống như bất kỳ MÁY TRẠM (HOST) đầu cuối nào khác.

ĐIỆN THOẠI IP

- Có một SWITCH nội bộ 3 CỔNG:
    - 1 CỔNG là “UPLINK” (Đường lên) kết nối tới SWITCH BÊN NGOÀI.
    - 1 CỔNG là “DOWNLINK” (Đường xuống) kết nối tới PC.
    - 1 CỔNG kết nối nội bộ tới chính chiếc ĐIỆN THOẠI.

![image](https://github.com/psaumur/CCNA/assets/106411237/0bba51c0-af57-49e4-ae29-fca2a1079a34)

- Điều này cho phép PC và ĐIỆN THOẠI IP chia sẻ cùng một CỔNG TRÊN SWITCH. Lưu lượng từ PC đi qua ĐIỆN THOẠI IP để tới SWITCH.
- KHUYẾN NGHỊ nên tách biệt lưu lượng “THOẠI” (từ ĐIỆN THOẠI IP) và “LƯU LƯỢNG DỮ LIỆU” (từ PC) bằng cách đặt chúng vào CÁC VLAN RIÊNG BIỆT (!).
    - Điều này có thể được thực hiện bằng cách sử dụng một VLAN CHO THOẠI (VOICE VLAN).
    - Lưu lượng từ PC sẽ KHÔNG ĐƯỢC GẮN THẺ (UNTAGGED) - nhưng lưu lượng từ ĐIỆN THOẠI sẽ được GẮN THẺ (TAGGED) với một mã VLAN ID.

![image](https://github.com/psaumur/CCNA/assets/106411237/12a1bfa5-036a-4eb6-b165-23fc8209a1f8)

![image](https://github.com/psaumur/CCNA/assets/106411237/b7c5b7e6-fa79-4405-b72f-b609ab56f216)

![image](https://github.com/psaumur/CCNA/assets/106411237/fc26e9dd-e19e-43cc-9f2a-4022b47f98b4)

---

CẤP NGUỒN QUA DÂY ETHERNET (PoE - POWER OVER ETHERNET)

- PoE cho phép Thiết bị Cấp nguồn (PSE - Power Sourcing Equipment) cung cấp NGUỒN ĐIỆN cho Thiết bị Nhận nguồn (PD - Powered Devices) qua một dây cáp ETHERNET.
- Thông thường, PSE là một SWITCH và các PD là ĐIỆN THOẠI IP, CAMERA IP, ĐIỂM TRUY CẬP KHÔNG DÂY (WAP), v.v.
- PSE nhận NGUỒN AC từ ổ cắm, chuyển đổi nó thành NGUỒN DC, và cung cấp NGUỒN DC đó cho các PD.

![image](https://github.com/psaumur/CCNA/assets/106411237/4229e398-a50e-487c-adf3-66b235ea9189)

- Dòng điện QUÁ lớn có thể làm hỏng CÁC THIẾT BỊ điện.
- PoE có một quy trình để xác định xem một THIẾT BỊ ĐƯỢC KẾT NỐI có cần nguồn điện hay không và cần bao nhiêu.
    - Khi một THIẾT BỊ được kết nối tới một CỔNG Hỗ trợ PoE, PSE (SWITCH) sẽ gửi CÁC TÍN HIỆU CÔNG SUẤT THẤP, theo dõi phản hồi và xác định xem PD cần bao nhiêu nguồn điện.
    - Nếu THIẾT BỊ cần NGUỒN ĐIỆN, PSE sẽ cung cấp NGUỒN ĐIỆN để cho phép PD khởi động.
    - PSE tiếp tục theo dõi PD và CUNG CẤP lượng NGUỒN ĐIỆN cần thiết (nhưng không được quá nhiều!).
- *GIÁM SÁT NGUỒN ĐIỆN (POWER POLICING)* có thể được cấu hình để ngăn chặn một PD tiêu thụ QUÁ nhiều ĐIỆN NĂNG.
    - `power inline police` cấu hình giám sát nguồn điện với các cài đặt mặc định: tắt CỔNG và gửi thông báo SYSLOG nếu một PD tiêu thụ quá nhiều điện.
        - Tương đương với lệnh `power inline police action err-disable`.
        - GIAO DIỆN sẽ bị đưa vào trạng thái ‘error-disabled’ và có thể được kích hoạt lại bằng lệnh `shutdown` sau đó là `no shutdown`.
    
    ![image](https://github.com/psaumur/CCNA/assets/106411237/59914c0d-2c0e-4952-a4af-1f7ada02002d)
    -  `power inline police action log` KHÔNG tắt GIAO DIỆN nếu PD tiêu thụ quá nhiều điện. Nó SẼ khởi động lại GIAO DIỆN và gửi một thông báo SYSLOG.
    
    ![image](https://github.com/psaumur/CCNA/assets/106411237/9717fb1e-9129-41f9-90bb-613c2bdee460)
    
    ![image](https://github.com/psaumur/CCNA/assets/106411237/8fe2eb15-49be-4f63-9f6f-79c0d5fe052f)
    

---

GIỚI THIỆU VỀ CHẤT LƯỢNG DỊCH VỤ (QoS - QUALITY OF SERVICE)

- Lưu lượng THOẠI và lưu lượng DỮ LIỆU trước đây thường sử dụng CÁC MẠNG hoàn toàn riêng biệt.
    - LƯU LƯỢNG THOẠI sử dụng mạng PSTN.
    - LƯU LƯỢNG DỮ LIỆU sử dụng MẠNG IP (Enterprise WAN, Internet, v.v.).
- QoS đã không cần thiết vì các loại LƯU LƯỢNG khác nhau không cạnh tranh BĂNG THÔNG với nhau.

![image](https://github.com/psaumur/CCNA/assets/106411237/8a21a767-5a93-42bd-a8d4-52453f8a7341)

- CÁC MẠNG hiện đại thường là *mạng hội tụ* (converged networks), trong đó ĐIỆN THOẠI IP, LƯU LƯỢNG VIDEO, LƯU LƯỢNG THÔNG THƯỜNG, v.v. đều chia sẻ chung một MẠNG IP.
- Điều này cho phép TIẾT KIỆM CHI PHÍ cũng như cung cấp các TÍNH NĂNG TIÊN TIẾN hơn cho lưu lượng THOẠI và VIDEO (Ví dụ: Các phần mềm cộng tác như Cisco WebEx, MS Teams, v.v.).
- TUY NHIÊN, giờ đây các loại LƯU LƯỢNG khác nhau phải cạnh tranh BĂNG THÔNG với nhau.
- **QoS** là một bộ CÁC CÔNG CỤ được sử dụng bởi CÁC THIẾT BỊ MẠNG để áp dụng CÁC CÁCH XỬ LÝ khác nhau cho các GÓI TIN khác nhau.

![image](https://github.com/psaumur/CCNA/assets/106411237/8909efdb-bbbd-4f50-b412-7abe12a3bcef)

CHẤT LƯỢNG DỊCH VỤ (QoS)

- QoS được sử dụng để quản lý các đặc tính sau của LƯU LƯỢNG MẠNG:
    - BĂNG THÔNG (BANDWIDTH):
        - Tổng dung lượng của LIÊN KẾT (được đo bằng *số bit trên mỗi giây*).
        - CÁC CÔNG CỤ QoS cho phép bạn DỰ TRỮ một lượng BĂNG THÔNG nhất định trên liên kết cho các loại lưu lượng cụ thể.
    - ĐỘ TRỄ (DELAY):
        - Độ trễ một chiều = Thời gian lưu lượng đi từ NGUỒN đến ĐÍCH.
        - Độ trễ hai chiều = Thời gian lưu lượng đi từ NGUỒN đến ĐÍCH và quay trở lại.
        
![image](https://github.com/psaumur/CCNA/assets/106411237/29ed6306-a6aa-46ba-af2f-5ebcd383d1d7)
        
    
    - BIẾN ĐỘNG ĐỘ TRỄ (JITTER):
        - Sự thay đổi trong ĐỘ TRỄ MỘT CHIỀU giữa CÁC GÓI TIN ĐƯỢC GỬI bởi cùng một ỨNG DỤNG.
        - ĐIỆN THOẠI IP có một ‘jitter buffer’ (bộ đệm biến động độ trễ) để tạo ra một ĐỘ TRỄ CỐ ĐỊNH cho các GÓI TIN âm thanh.
    - MẤT GÓI (LOSS):
        - Tỷ lệ % CÁC GÓI TIN đã gửi mà KHÔNG tới được ĐÍCH.
        - Có thể do CÁP BỊ HỎNG.
        - Cũng có thể xảy ra khi CÁC HÀNG ĐỢI GÓI TIN (PACKET QUEUES) của THIẾT BỊ bị đầy và THIẾT BỊ bắt đầu loại bỏ CÁC GÓI TIN.
    
- CÁC TIÊU CHUẨN SAU ĐÂY được khuyến nghị để có chất lượng âm thanh tương tác CHẤP NHẬN ĐƯỢC:
    - ĐỘ TRỄ MỘT CHIỀU : 150 mili giây hoặc ít hơn.
    - BIẾN ĐỘNG ĐỘ TRỄ (JITTER) : 30 mili giây hoặc ít hơn.
    - MẤT GÓI (LOSS) : 1% hoặc ít hơn.
    
- Nếu các TIÊU CHUẨN này không được đáp ứng, có thể nhận thấy sự sụt giảm rõ rệt về CHẤT LƯỢNG của cuộc gọi điện thoại.
    
    

XẾP HÀNG QoS (QoS QUEUING)

- Nếu một THIẾT BỊ MẠNG nhận được các thông báo NHANH HƠN mức nó có thể CHUYỂN TIẾP chúng ra khỏi GIAO DIỆN phù hợp, CÁC THÔNG BÁO sẽ được đưa vào HÀNG ĐỢI (QUEUE).
- Theo mặc định, CÁC THÔNG BÁO TRONG HÀNG ĐỢI sẽ được CHUYỂN TIẾP theo quy tắc VÀO TRƯỚC RA TRƯỚC (FIFO - FIRST IN FIRST OUT).
    - Thông báo sẽ được GỬI theo THỨ TỰ chúng được NHẬN.
- Nếu HÀNG ĐỢI ĐẦY, các GÓI TIN mới sẽ bị HỦY RỜI.
- Tình trạng này được gọi là *tail drop* (hủy gói ở cuối hàng).

![image](https://github.com/psaumur/CCNA/assets/106411237/15de2fcd-5711-4014-8185-9975b2ce8a0d)

- TAIL DROP gây hại vì nó có thể dẫn đến SỰ ĐỒNG BỘ HÓA TCP TOÀN CẦU (TCP GLOBAL SYNCHRONIZATION).

![image](https://github.com/psaumur/CCNA/assets/106411237/1d22afa7-91aa-4e86-9c5f-ad9506dcb44c)

- Khi HÀNG ĐỢI bị đầy và TAIL DROP xảy ra, TẤT CẢ các MÁY TRẠM TCP đang gửi lưu lượng sẽ GIẢM TỐC ĐỘ mà chúng GỬI LƯU LƯỢNG.
- Sau đó, TẤT CẢ chúng sẽ cùng TĂNG TỐC ĐỘ mà chúng gửi LƯU LƯỢNG, điều này nhanh chóng dẫn đến TÌNH TRẠNG TẮC NGHẼN NHIỀU HƠN, các GÓI TIN bị hủy, và quy trình này LẶP LẠI…

![image](https://github.com/psaumur/CCNA/assets/106411237/b75c2cac-043c-4df6-a1d6-f26d9110630a)

- Một GIẢI PHÁP để ngăn chặn TAIL DROP và SỰ ĐỒNG BỘ HÓA TCP TOÀN CẦU là PHÁT HIỆN SỚM NGẪU NHIÊN (RED - RANDOM EARLY DETECTION).

- Khi lượng LƯU LƯỢNG trong HÀNG ĐỢI đạt đến một NGƯỠNG (THRESHOLD) nhất định, THIẾT BỊ sẽ bắt đầu hủy NGẪU NHIÊN các GÓI TIN từ các LUỒNG TCP (TCP FLOWS) đã chọn.
- Những LUỒNG TCP bị hủy gói tin đó sẽ giảm TỐC ĐỘ gửi LƯU LƯỢNG, nhưng bạn sẽ tránh được SỰ ĐỒNG BỘ HÓA TCP TOÀN CẦU, trong đó TẤT CẢ các LUỒNG TCP cùng giảm và sau đó tăng tốc độ truyền cùng một lúc, theo từng đợt sóng.
- Trong RED TIÊU CHUẨN, tất cả các loại LƯU LƯỢNG đều được xử lý NHƯ NHAU.
- PHÁT HIỆN SỚM NGẪU NHIÊN CÓ TRỌNG SỐ (WRED - WEIGHTED RANDOM EARLY DETECTION) - một phiên bản cải tiến của RED, cho phép bạn kiểm soát GÓI TIN nào bị hủy tùy thuộc vào LỚP LƯU LƯỢNG (TRAFFIC CLASS).

** CÁC LỚP LƯU LƯỢNG và chi tiết về cách thức hoạt động của QoS sẽ được trình bày trong NGÀY 47 **
