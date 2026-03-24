# 55. CÁC NGUYÊN LÝ CƠ BẢN VỀ MẠNG KHÔNG DÂY (WIRELESS FUNDAMENTALS)

- Mặc dù chúng ta sẽ xem xét ngắn gọn các loại MẠNG KHÔNG DÂY khác, nhưng trong phần này của khóa học, chúng ta sẽ tập trung vào CÁC MẠNG LAN KHÔNG DÂY sử dụng WI-FI.
- CÁC TIÊU CHUẨN chúng ta sử dụng cho CÁC MẠNG LAN KHÔNG DÂY được định nghĩa trong IEEE 802.11.
- Thuật ngữ WI-FI là nhãn hiệu của LIÊN MINH WI-FI (WI-FI ALLIANCE), không liên quan trực tiếp đến IEEE.
- LIÊN MINH WI-FI kiểm tra và chứng nhận thiết bị tuân thủ các tiêu chuẩn 802.11.
- Tuy nhiên, WI-FI đã trở thành thuật ngữ phổ biến mà mọi người sử dụng để chỉ CÁC MẠNG LAN KHÔNG DÂY 802.11 và thuật ngữ đó sẽ được sử dụng xuyên suốt các video bài giảng của khóa học.

CÁC MẠNG KHÔNG DÂY

- CÁC MẠNG KHÔNG DÂY có một số vấn đề mà chúng ta cần giải quyết:

![image](https://github.com/psaumur/CCNA/assets/106411237/f1adc053-b4e7-4779-b497-d17fb8caa973)

1) TẤT CẢ CÁC THIẾT BỊ trong phạm vi phủ sóng đều nhận được TẤT CẢ CÁC KHUNG TIN, giống như CÁC THIẾT BỊ tham gia vào một ETHERNET HUB.

- Quyền riêng tư của DỮ LIỆU bên trong mạng LAN là một mối quan tâm lớn hơn.
- CSMA/CA (Đa truy cập cảm nhận sóng mang tránh va chạm - Carrier Sense Multiple Access with Collision Avoidance) được sử dụng để hỗ trợ các cuộc liên lạc BÁN SONG CÔNG (HALF-DUPLEX).
- CSMA / CD được sử dụng trong CÁC MẠNG CÓ DÂY để phát hiện và phục hồi sau CÁC VỤ VA CHẠM (COLLISIONS).
- CSMA / CA được sử dụng trong CÁC MẠNG KHÔNG DÂY để tránh XẢY RA CÁC VỤ VA CHẠM.

- Khi sử dụng CSMA / CA, một THIẾT BỊ sẽ đợi các THIẾT BỊ khác NGỪNG TRUYỀN dẫn trước khi nó tự mình TRUYỀN DỮ LIỆU.

![image](https://github.com/psaumur/CCNA/assets/106411237/7d266279-5342-478e-8001-0146a016296b)

2) CÁC CUỘC LIÊN LẠC KHÔNG DÂY được quy định bởi nhiều cơ quan QUỐC TẾ và QUỐC GIA khác nhau.

3) CẦN quan tâm đến KHU VỰC PHỦ SÓNG CỦA TÍN HIỆU KHÔNG DÂY.

- Phạm vi tín hiệu (Signal Range).
- Sự HẤP THỤ (ABSORPTION), PHẢN XẠ (REFLECTION), KHÚC XẠ (REFRACTION), NHIỄU XẠ (DIFFRACTION) và TÁN XẠ (SCATTERING) của tín hiệu.

---

SỰ HẤP THỤ TÍN HIỆU (SIGNAL ABSORPTION)

- HẤP THỤ xảy ra khi một TÍN HIỆU KHÔNG DÂY ĐI XUYÊN QUA một vật liệu và bị chuyển đổi thành NHIỆT, làm yếu đi TÍN HIỆU đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/9ef52c86-66ef-46fb-872e-cb76f0fb8d83)

SỰ PHẢN XẠ TÍN HIỆU (SIGNAL REFLECTION)

- PHẢN XẠ xảy ra khi một TÍN HIỆU BỊ DỘI LẠI (BOUNCES) từ một vật liệu (như kim loại).
    - Đây là lý do tại sao tín hiệu WI-FI thường KÉM trong thang máy. TÍN HIỆU dội lại từ kim loại và rất ít tín hiệu xuyên qua được vào bên trong thang máy.

![image](https://github.com/psaumur/CCNA/assets/106411237/d57a94df-4e82-46f2-8045-de01f7a293f1)

SỰ KHÚC XẠ TÍN HIỆU (SIGNAL REFRACTION)

- KHÚC XẠ xảy ra khi một SÓNG BỊ BẺ CONG (BENT) khi đi vào một môi trường mà ở đó TÍN HIỆU di chuyển với tốc độ khác.
    - Ví dụ, thủy tinh và nước có thể khúc xạ sóng.

![image](https://github.com/psaumur/CCNA/assets/106411237/9c807832-6feb-40ed-81aa-f9d7337da241)

SỰ NHIỄU XẠ TÍN HIỆU (SIGNAL DIFFRACTION)

- NHIỄU XẠ xảy ra khi một SÓNG gặp một VẬT CẢN và nó VÒNG QUA (travels AROUND) vật cản đó.
    - Điều này có thể dẫn đến các “ĐIỂM MÙ” (BLIND SPOTS) nằm phía sau vật cản.

![image](https://github.com/psaumur/CCNA/assets/106411237/abd44fc3-ec6f-484c-8c81-a2de38c26999)

SỰ TÁN XẠ TÍN HIỆU (SIGNAL SCATTERING)

- TÁN XẠ xảy ra khi một vật liệu khiến TÍN HIỆU BỊ PHÁT TÁN (SCATTER) ra mọi hướng.
    - Bụi, khói bụi, các bề mặt không bằng phẳng, v.v. có thể gây ra hiện tượng tán xạ.

![image](https://github.com/psaumur/CCNA/assets/106411237/9474adb8-3fc0-44ac-b480-c846cec21e9a)

---

4) Các THIẾT BỊ khác sử dụng CÙNG CÁC KÊNH (CHANNELS) có thể gây ra hiện tượng NHIỄU (INTERFERENCE).

- Ví dụ: một MẠNG LAN KHÔNG DÂY ở nhà / căn hộ của người hàng xóm.

---

TẦN SỐ VÔ TUYẾN (RF - RADIO FREQUENCY)

- Để gửi CÁC TÍN HIỆU KHÔNG DÂY, BÊN GỬI áp dụng một DÒNG ĐIỆN XOAY CHIỀU vào một ăng-ten.
    - Việc này tạo ra CÁC SÓNG ĐIỆN TỪ lan truyền ra ngoài dưới dạng CÁC SÓNG.
- CÁC SÓNG ĐIỆN TỪ có thể được đo lường bằng nhiều cách - ví dụ BIÊN ĐỘ (AMPLITUDE) và TẦN SỐ (FREQUENCY).
- BIÊN ĐỘ là CƯỜNG ĐỘ TỐI ĐA của CÁC ĐIỆN TRƯỜNG và TỪ TRƯỜNG.

![image](https://github.com/psaumur/CCNA/assets/106411237/f7daa2ac-16a7-41f2-8ba4-a7c214c7e96b)

- TẦN SỐ đo lường số lượng CÁC CHU KỲ LÊN / XUỐNG trong một ĐƠN VỊ THỜI GIAN NHẤT ĐỊNH.
- Đơn vị đo lường TẦN SỐ PHỔ BIẾN nhất là HERTZ.
    - Hz (HERTZ) = số chu kỳ trên giây.
    - kHz (KILOHERZ) = 1.000 chu kỳ trên giây.
    - MHz (MEGAHERZ) = 1.000.000 chu kỳ trên giây.
    - GHz (GIGAHERTZ) = 1.000.000.000 chu kỳ trên giây.
    - THz (TERAHERTZ) = 1.000.000.000.000 chu kỳ trên giây.
    

4 CHU KỲ trong 1 GIÂY = 4 HERTZ

![image](https://github.com/psaumur/CCNA/assets/106411237/448e6f45-6ef1-4c53-abf7-dd843e8d7a84)

![image](https://github.com/psaumur/CCNA/assets/106411237/28ea49c0-c2ef-40f3-a703-884c612c16f7)

- Một thuật ngữ quan trọng khác là CHU KỲ (PERIOD), tức là lượng THỜI GIAN của MỘT VÒNG lặp lại.
    - Nếu TẦN SỐ là 4 Hz, CHU KỲ là 0,25 GIÂY.

![image](https://github.com/psaumur/CCNA/assets/106411237/9ddcffd6-c623-4d75-bee0-d4f01d871085)

- PHẠM VI TẦN SỐ KHẢ KIẾN là ~400 THz đến 790 THz.
- PHẠM VI TẦN SỐ VÔ TUYẾN là từ 30 Hz đến 300 GHz và được sử dụng cho nhiều mục đích khác nhau.

![image](https://github.com/psaumur/CCNA/assets/106411237/caf70e36-75b2-4fe5-a2e2-2641fad4d7e0)

---

CÁC BĂNG TẦN VÔ TUYẾN (RADIO FREQUENCY BANDS)

- WI-FI sử dụng HAI BĂNG TẦN CHÍNH (CÁC PHẠM VI TẦN SỐ).
- Băng tần 2.4 GHz.
    - Phạm vi là 2.400 - 2.4835 GHz.
- Băng tần 5 GHz.
    - Phạm vi là 5.150 - 5.825 GHz.
    - Được chia thành BỐN BĂNG TẦN NHỎ HƠN:
        - 5.150 - 5.250 GHz.
        - 5.250 - 5.350 GHz.
        - 5.470 - 5.725 GHz.
        - 5.725 - 5.825 GHz.

- Băng tần 2.4 GHz thường mang lại KHẢ NĂNG TIẾP CẬN XA HƠN trong không gian mở và XUYÊN THẤU tốt hơn qua các vật cản như tường.
    - TUY NHIÊN, nhiều THIẾT BỊ có xu hướng sử dụng BĂNG TẦN 2.4 GHz nên hiện tượng NHIỄU có thể là một VẤN ĐỀ LỚN HƠN so với 5GHz.

** WI-FI 6 (802.11ax) đã MỞ RỘNG phạm vi phổ tần bao gồm một băng tần trong PHẠM VI 6 GHz.

---

CÁC KÊNH (CHANNELS)

- Mỗi BĂNG TẦN được chia ra thành NHIỀU “KÊNH”.
    - CÁC THIẾT BỊ được cấu hình để TRUYỀN và NHẬN lưu lượng trên một (hoặc nhiều hơn) các KÊNH này.
- BĂNG TẦN 2.4 GHz được chia thành nhiều KÊNH, mỗi kênh có phạm vi 22 MHz.
- Trong một MẠNG LAN KHÔNG DÂY NHỎ chỉ với một ĐIỂM TRUY CẬP (AP) duy nhất, bạn có thể sử dụng BẤT KỲ kênh nào.
- Tuy nhiên, trong các mạng WLAN lớn hơn với nhiều AP, điều quan trọng là các AP liền kề không nên sử dụng CÁC KÊNH CHỒNG LẤN NHAU (OVERLAPPING CHANNELS). Điều này giúp tránh bị NHIỄU.
- Ở BĂNG TẦN 2.4 GHz, khuyến nghị nên sử dụng CÁC KÊNH 1, 6 và 11.

![image](https://github.com/psaumur/CCNA/assets/106411237/005d246e-d2d2-491e-8d1e-f2fb5afbb664)

- BĂNG TẦN 5 GHz bao gồm các kênh KHÔNG CHỒNG LẤN NHAU (NON-OVERLAPPING channels) nên DỄ DÀNG tránh được hiện tượng NHIỄU giữa các AP nằm cạnh nhau hơn nhiều.

- Sử dụng CÁC KÊNH 1, 6, 11, bạn có thể đặt các AP theo mô hình “TỔ ONG” (HONEYCOMB) để cung cấp vùng phủ sóng HOÀN TOÀN cho một khu vực mà không bị NHIỄU giữa CÁC KÊNH.

![image](https://github.com/psaumur/CCNA/assets/106411237/8bce5d9c-6261-4180-a25c-20007a27f433)

---

CÁC TIÊU CHUẨN WI-FI (802.11)

![image](https://github.com/psaumur/CCNA/assets/106411237/424d3b31-2bbe-454d-973c-fdf1534adfdd)

---

CÁC BỘ DỊCH VỤ (SERVICE SETS)

- 802.11 định nghĩa các loại BỘ DỊCH VỤ khác nhau, là những nhóm các THIẾT BỊ MẠNG KHÔNG DÂY.
- Có BA LOẠI CHÍNH:
    - ĐỘC LẬP (INDEPENDENT).
    - HẠ TẦNG (INFRASTRUCTURE).
    - DẠNG LƯỚI (MESH).
- TẤT CẢ CÁC THIẾT BỊ trong một BỘ DỊCH VỤ chia sẻ cùng một mã định danh SSID (Service Set Identifier).
- SSID là một TÊN DÀNH CHO CON NGƯỜI ĐỌC ĐƯỢC để nhận diện BỘ DỊCH VỤ.
- SSID KHÔNG nhất thiết phải là DUY NHẤT.

CÁC BỘ DỊCH VỤ : IBSS

- Một IBSS (BỘ DỊCH VỤ CƠ BẢN ĐỘC LẬP - INDEPENDENT BASIC SERVICE SET) là một mạng không dây trong đó HAI hoặc NHIỀU THIẾT BỊ KHÔNG DÂY kết nối trực tiếp với nhau mà không sử dụng một AP (ĐIỂM TRUY CẬP).
- Còn được gọi là MẠNG AD HOC.
- Có thể được sử dụng để CHUYỂN TẬP TIN (ví dụ: AirDrop).
- Khả năng mở rộng kém, chỉ phù hợp cho một vài THIẾT BỊ.

![image](https://github.com/psaumur/CCNA/assets/106411237/5fe65388-0045-4f35-bd8b-5325e2779ab2)

CÁC BỘ DỊCH VỤ : BSS

- Một BSS (BỘ DỊCH VỤ CƠ BẢN - BASIC SERVICE SET) là một loại bộ dịch vụ hạ tầng trong đó CÁC MÁY KHÁCH kết nối với nhau thông qua một AP (ĐIỂM TRUY CẬP) chứ không phải TRỰC TIẾP với nhau.
- Một BSSID (BASIC SERVICE SET ID) được sử dụng để định danh duy nhất cho AP.
    - Các AP khác có thể sử dụng CÙNG MỘT SSID nhưng KHÔNG THỂ CÓ CÙNG BSSID.
    - BSSID chính là địa chỉ MAC của RADIO trên AP.
- CÁC THIẾT BỊ KHÔNG DÂY yêu cầu được *liên kết* (associate) với BSS.
- CÁC THIẾT BỊ KHÔNG DÂY đã liên kết với BSS được gọi là “CÁC MÁY KHÁCH” (CLIENTS) hoặc “CÁC TRẠM” (STATIONS).
- KHU VỰC xung quanh một AP mà TÍN HIỆU của nó có thể sử dụng được gọi là một BSA (KHU VỰC DỊCH VỤ CƠ BẢN - BASIC SERVICE AREA).

![image](https://github.com/psaumur/CCNA/assets/106411237/ef259f45-ead1-45f3-8ad3-5f343a763988)

CÁC BỘ DỊCH VỤ: ESS

- Để tạo ra CÁC MẠNG LAN KHÔNG DÂY LỚN HƠN vượt xa phạm vi của một AP DUY NHẤT, chúng ta sử dụng một ESS (BỘ DỊCH VỤ MỞ RỘNG - EXTENDED SERVICE SET).
- CÁC AP với BSS riêng của chúng được kết nối với nhau bởi một MẠNG CÓ DÂY.
    - Mỗi BSS sử dụng CÙNG MỘT SSID.
    - Mỗi BSS có một BSSID DUY NHẤT.
    - Mỗi BSS sử dụng một kênh KHÁC NHAU để tránh bị NHIỄU.
- CÁC MÁY KHÁCH có thể di chuyển qua lại giữa các AP mà không cần phải KẾT NỐI LẠI, mang lại trải nghiệm WI-FI LIỀN MẠCH khi di chuyển giữa các AP.
    - Việc này được gọi là CHUYỂN VÙNG (ROAMING).
- CÁC BSA nên chồng lấn nhau khoảng 10-15%.

![image](https://github.com/psaumur/CCNA/assets/106411237/4a2ccc9e-c3c2-43db-b0b2-c704d5da223e)

CÁC BỘ DỊCH VỤ: MBSS

- Một MBSS (BỘ DỊCH VỤ CƠ BẢN DẠNG LƯỚI - MESH BASIC SERVICE SET) có thể được sử dụng trong các tình huống khó có thể chạy một kết nối ETHERNET tới mọi AP.
- Các AP dạng LƯỚI (MESH APs) sử dụng HAI BỘ PHÁT RADIO:
    - MỘT bộ cung cấp BSS cho CÁC MÁY KHÁCH KHÔNG DÂY.
    - MỘT bộ tạo ra một “MẠNG KẾT NỐI CHẶNG VỀ” (BACKHAUL NETWORK) được dùng để làm cầu nối (BRIDGE) lưu lượng từ AP này sang AP khác.
- Ít nhất CÓ MỘT AP được kết nối tới MẠNG CÓ DÂY và nó được gọi là RAP (ĐIỂM TRUY CẬP GỐC - ROOT ACCESS POINT).
- CÁC AP CÒN LẠI được gọi là các MAP (CÁC ĐIỂM TRUY CẬP DẠNG LƯỚI - MESH ACCESS POINTS).
- Một GIAO THỨC được sử dụng để xác định ĐƯỜNG ĐI TỐT NHẤT xuyên qua lưới (tương tự như cách CÁC GIAO THỨC ĐỊNH TUYẾN ĐỘNG được dùng để xác định ĐƯỜNG ĐI TỐT NHẤT tới một ĐÍCH đến).

![image](https://github.com/psaumur/CCNA/assets/106411237/1604f0ea-8a93-4922-a78d-fe55e836ba9a)

---

HỆ THỐNG PHÂN PHỐI (DISTRIBUTION SYSTEM)

- Hầu hết CÁC MẠNG KHÔNG DÂY không phải là CÁC MẠNG ĐỘC LẬP.
    - Thay vào đó, chúng là một cách để CÁC MÁY KHÁCH KHÔNG DÂY kết nối vào HẠ TẦNG MẠNG CÓ DÂY.
- Trong tiêu chuẩn 802.11, MẠNG CÓ DÂY PHÍA TRÊN (UPSTREAM) được gọi là DS (HỆ THỐNG PHÂN PHỐI - DISTRIBUTION SYSTEM).
- Mỗi BSS hoặc ESS không dây được ánh xạ tới một VLAN trong MẠNG CÓ DÂY.

![image](https://github.com/psaumur/CCNA/assets/106411237/adf9deae-693c-4f1b-8d6d-c4fbfc356418)

- Một AP có thể cung cấp NHIỀU MẠNG LAN KHÔNG DÂY, mỗi mạng có một SSID riêng biệt.
- Mỗi WLAN được ánh xạ tới một VLAN tách biệt và được kết nối tới MẠNG CÓ DÂY thông qua một đường TRUNK.
- Mỗi WLAN sử dụng một BSSID DUY NHẤT, thường là bằng cách TĂNG chữ số CUỐI CÙNG của BSSID lên một đơn vị.

![image](https://github.com/psaumur/CCNA/assets/106411237/5667abba-dc3f-4571-a11a-43b3e8cf4304)

---

CÁC CHẾ ĐỘ HOẠT ĐỘNG BỔ SUNG CỦA AP

- CÁC AP có thể hoạt động ở CÁC CHẾ ĐỘ BỔ SUNG bên cạnh những chế độ mà chúng ta đã tìm hiểu cho đến nay.

- Một AP ở CHẾ ĐỘ LẶP (REPEATER MODE) có thể được sử dụng để MỞ RỘNG PHẠM VI của một BSS.

- BỘ LẶP (REPEATER) sẽ truyền lại BẤT KỲ TÍN HIỆU nào mà nó nhận được từ AP.
    - Một BỘ LẶP chỉ với một RADIO duy nhất phải hoạt động trên CÙNG MỘT KÊNH với AP, nhưng điều này có thể làm giảm đáng kể TỐC ĐỘ (THROUGHPUT) tổng thể trên KÊNH đó.
    - Một BỘ LẶP với HAI RADIO có thể nhận tín hiệu trên MỘT KÊNH và sau đó truyền lại trên MỘT KÊNH KHÁC.

![image](https://github.com/psaumur/CCNA/assets/106411237/7973107f-7f2a-47de-9272-186040b038b5)

- Một CẦU NỐI NHÓM LÀM VIỆC (WGB - WORKGROUP BRIDGE) hoạt động như một MÁY KHÁCH KHÔNG DÂY của một AP khác và có thể được sử dụng để KẾT NỐI CÁC THIẾT BỊ CÓ DÂY vào MẠNG KHÔNG DÂY.
- Trong ví dụ bên dưới, PC1 KHÔNG CÓ KHẢ NĂNG KẾT NỐI KHÔNG DÂY, và cũng KHÔNG THỂ TIẾP CẬN ĐƯỢC CÁC KẾT NỐI CÓ DÂY tới SW1.
- PC1 có một KẾT NỐI CÓ DÂY tới WGB, thiết bị này sau đó có một KẾT NỐI KHÔNG DÂY tới AP.

![image](https://github.com/psaumur/CCNA/assets/106411237/85cffc3f-3e76-4a55-9810-254135162a82)

- MỘT CẦU NỐI NGOÀI TRỜI (OUTDOOR BRIDGE) có thể được sử dụng để kết nối CÁC MẠNG trên CÁC KHOẢNG CÁCH DÀI mà không cần có CÁP VẬT LÝ kết nối chúng.
- CÁC AP sẽ sử dụng CÁC ĂNG-TEN ĐẶC BIỆT tập trung hầu hết NĂNG LƯỢNG TÍN HIỆU vào một hướng, điều này cho phép KẾT NỐI KHÔNG DÂY được thực hiện trên CÁC KHOẢNG CÁCH XA HƠN bình thường.
- KẾT NỐI có thể là ĐIỂM-TỚI-ĐIỂM như trong sơ đồ bên dưới, hoặc ĐIỂM-TỚI-ĐA-ĐIỂM trong đó NHIỀU CHI NHÁNH connect tới một CHI NHÁNH TRUNG TÂM.

![image](https://github.com/psaumur/CCNA/assets/106411237/36b421fd-ba81-4230-8c67-72b0b88aae8a)

---

TỔNG KẾT
![image](https://github.com/psaumur/CCNA/assets/106411237/7bac6988-f3af-4ee3-8046-7d926069934c)
