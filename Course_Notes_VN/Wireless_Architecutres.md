# 56. CÁC KIẾN TRÚC MẠNG KHÔNG DÂY (WIRELESS ARCHITECTURES)

ĐỊNH DẠNG THÔNG ĐIỆP / KHUNG TIN 802.11

![image](https://github.com/psaumur/CCNA/assets/106411237/7b459483-7156-44cf-9ee7-f9391e476636)

- CÁC KHUNG TIN 802.11 có định dạng khác với CÁC KHUNG TIN ETHERNET 802.3.
- Đối với kỳ thi CCNA, bạn không cần phải học chi tiết về nó như cách học CÁC TIÊU ĐỀ ETHERNET và IP.
- Tùy thuộc vào PHIÊN BẢN 802.11 và LOẠI THÔNG ĐIỆP, một số trường có thể không xuất hiện trong KHUNG TIN.
    - Ví dụ: Không phải TẤT CẢ các thông điệp đều sử dụng cả 4 TRƯỜNG ĐỊA CHỈ.
- FRAME CONTROL (Kiểm soát khung)
    - Cung cấp thông tin như LOẠI THÔNG ĐIỆP (MESSAGE TYPE) và LOẠI PHỤ (SUBTYPE).
    - Cho biết liệu đó có phải là một khung tin QUẢN LÝ (MANAGEMENT frame) hay không.
- DURATION / ID (Thời gian / Định danh)
    - Tùy thuộc vào LOẠI THÔNG ĐIỆP, trường này có thể cho biết:
        - THỜI GIAN (tính bằng micro giây) mà KÊNH sẽ được dành riêng để truyền dẫn KHUNG TIN đó.
        - Định danh cho mối LIÊN KẾT (ASSOCIATION) (kết nối).
    
- ADDRESSES (Địa chỉ)
    - Có thể có tối đa BỐN ĐỊA CHỈ trong một KHUNG TIN 802.11.
    - ĐỊA CHỈ nào hiện diện, và THỨ TỰ của chúng, phụ thuộc vào LOẠI THÔNG ĐIỆP:
        - ĐỊA CHỈ ĐÍCH (DA - DESTINATION ADDRESS) : Người NHẬN cuối cùng của KHUNG TIN.
        - ĐỊA CHỈ NGUỒN (SA - SOURCE ADDRESS) : Người GỬI ban đầu của KHUNG TIN.
        - ĐỊA CHỈ NGƯỜI NHẬN (RA - RECEIVER ADDRESS) : Người NHẬN trực tiếp của KHUNG TIN.
        - ĐỊA CHỈ NGƯỜI TRUYỀN (TA - TRANSMITTER ADDRESS) : Người GỬI trực tiếp của KHUNG TIN.
    
- SEQUENCE CONTROL (Kiểm soát trình tự)
    - Được sử dụng để ráp lại các MẢNH (FRAGMENTS) và loại bỏ CÁC KHUNG TIN TRÙNG LẶP.

- QoS CONTROL (Kiểm soát QoS)
    - Được sử dụng trong QoS để ƯU TIÊN một số loại lưu lượng nhất định.
- HT (High Throughput) CONTROL (Kiểm soát Thông lượng Cao)
    - Được thêm vào trong 802.11n để KÍCH HOẠT các hoạt động Thông lượng Cao.
    - 802.11n còn được gọi là WI-FI “THÔNG LƯỢNG CAO” (HT - HIGH THROUGHPUT).
    - 802.11ac còn được gọi là WI-FI “THÔNG LƯỢNG RẤT CAO” (VHT - VERY HIGH THROUGHPUT).

- FCS (FRAME CHECK SEQUENCE - Chuỗi kiểm tra khung)
    - Tương tự như trong một KHUNG TIN ETHERNET, được dùng để kiểm tra lỗi.

---

QUY TRÌNH LIÊN KẾT 802.11 (802.11 ASSOCIATION PROCESS)

- CÁC ĐIỂM TRUY CẬP (ACCESS POINTS) đóng vai trò là cầu nối lưu lượng giữa CÁC TRẠM KHÔNG DÂY (WIRELESS STATIONS) và các THIẾT BỊ khác.
- Để một TRẠM có thể gửi lưu lượng qua AP, nó phải được liên kết (associated) với AP đó.
- Có BA TRẠNG THÁI KẾT NỐI 802.11:
    - CHƯA XÁC THỰC, CHƯA LIÊN KẾT (NOT AUTHENTICATED, NOT ASSOCIATED).
    - ĐÃ XÁC THỰC, CHƯA LIÊN KẾT (AUTHENTICATED, NOT ASSOCIATED).
    - ĐÃ XÁC THỰC VÀ ĐÃ LIÊN KẾT (AUTHENTICATED and ASSOCIATED).

- TRẠM phải được XÁC THỰC và LIÊN KẾT với AP để có thể gửi lưu lượng qua thiết bị đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/568d795d-41ee-4afd-908d-858297e89c6c)

---

CÁC LOẠI THÔNG ĐIỆP 802.11

- Có BA LOẠI THÔNG ĐIỆP 802.11 CHÍNH
    - QUẢN LÝ (MANAGEMENT).
    - KIỂM SOÁT (CONTROL).
    - DỮ LIỆU (DATA).

- QUẢN LÝ (MANAGEMENT)
    - Được sử dụng để quản lý BSS:
        - BEACON (Khung tin quảng bá sự hiện diện).
        - PROBE REQUEST / PROBE RESPONSE (Yêu cầu dò tìm / Phản hồi dò tìm).
        - AUTHENTICATION (Xác thực).
        - ASSOCIATION REQUEST / ASSOCIATION RESPONSE (Yêu cầu liên kết / Phản hồi liên kết).

- KIỂM SOÁT (CONTROL)
    - Được sử dụng để kiểm soát truy cập vào môi trường truyền dẫn (TẦN SỐ VÔ TUYẾN).
    - Hỗ trợ việc phân phối CÁC KHUNG TIN QUẢN LÝ và DỮ LIỆU:
        - RTS (YÊU CẦU GỬI - REQUEST TO SEND).
        - CTS (SẴN SÀNG ĐỂ GỬI - CLEAR TO SEND).
        - ACK (Xác nhận).

- DỮ LIỆU (DATA)
    - Được sử dụng để gửi CÁC GÓI DỮ LIỆU thực tế.

---

CÁC AP ĐỘC LẬP (AUTONOMOUS APs)

- CÁC AP ĐỘC LẬP (AUTONOMOUS APs) là các HỆ THỐNG tự vận hành và KHÔNG DỰA VÀO một bộ điều khiển WLC.
- CÁC AP ĐỘC LẬP được cấu hình riêng lẻ từng cái một:
    - Có thể được cấu hình bằng cáp CONSOLE (giao diện CLI).
    - Có thể được cấu hình bằng TELNET (CLI).
    - Có thể được cấu hình bằng kết nối Web HTTP / HTTPS (giao diện đồ họa GUI).
    - Một ĐỊA CHỈ IP dành cho QUẢN LÝ TỪ XA nên được cấu hình.
    - CÁC THAM SỐ RF phải được cấu hình thủ công (Công suất truyền, Kênh, v.v.).
    - CÁC CHÍNH SÁCH BẢO MẬT được xử lý riêng biệt bởi từng AP.
    - CÁC QUY TẮC QoS v.v. được cấu hình riêng lẻ trên từng AP.

- KHÔNG có việc THEO DÕI hay QUẢN LÝ TẬP TRUNG cho các AP này.

![image](https://github.com/psaumur/CCNA/assets/106411237/57faecbb-36a6-424d-b019-52994a5740db)

- CÁC AP ĐỘC LẬP kết nối tới MẠNG CÓ DÂY bằng một liên kết TRUNK.
- Lưu lượng DỮ LIỆU từ CÁC MÁY KHÁCH KHÔNG DÂY có ĐƯỜNG ĐI rất trực tiếp tới MẠNG CÓ DÂY hoặc tới các MÁY KHÁCH KHÔNG DÂY khác đang liên kết với cùng một AP đó.
- Mỗi VLAN phải được KÉO DÀI (STRETCH) ra toàn bộ MẠNG. Điều này được coi là một cách làm TỒI:
    - Tạo ra các Miền Quảng bá (Broadcast Domains) lớn.
    - Spanning Tree sẽ vô hiệu hóa các liên kết.
    - Việc Thêm / Xóa các VLAN RẤT tốn công sức.
- CÁC AP ĐỘC LẬP có thể được sử dụng trong CÁC MẠNG NHỎ nhưng chúng không khả thi trong CÁC MẠNG VỪA và LỚN.
    - CÁC MẠNG LỚN có thể có hàng ngàn AP.

- CÁC AP ĐỘC LẬP cũng có thể hoạt động trong các chế độ đã được đề cập trong video trước:
    - REPEATER (Bộ lặp).
    - OUTDOOR BRIDGE (Cầu nối ngoài trời).
    - WORKGROUP BRIDGE (Cầu nối nhóm làm việc).

---

CÁC AP TRỌNG LƯỢNG NHẸ (LIGHTWEIGHT APs)

- Các chức năng của một AP có thể được chia ra giữa AP và một BỘ ĐIỀU KHIỂN MẠNG LAN KHÔNG DÂY (WLC - WIRELESS LAN CONTROLLER).
- Đây là cái được gọi là KIẾN TRÚC CHIA TÁCH MAC (SPLIT-MAC ARCHITECTURE).

- CÁC AP TRỌNG LƯỢNG NHẸ (LIGHTWEIGHT APs) xử lý các hoạt động **“thời gian thực”** (real-time) như:
    - TRUYỀN / NHẬN LƯU LƯỢNG RF.
    - MÃ HÓA / GIẢI MÃ LƯU LƯỢNG.
    - GỬI ĐI CÁC GÓI BEACONS / PROBES.
    - ƯU TIÊN GÓI TIN (PACKET PRIORITIZATION).
    - v.v…
- Các chức năng của WLC (không phụ thuộc vào thời gian):
    - QUẢN LÝ SÓNG RF.
    - QUẢN LÝ BẢO MẬT / QoS.
    - XÁC THỰC MÁY KHÁCH.
    - QUẢN LÝ LIÊN KẾT / CHUYỂN VÙNG (ROAMING) CỦA MÁY KHÁCH.
    - PHÂN BỔ TÀI NGUYÊN.
    - v.v…
    
- WLC cũng được sử dụng để cấu hình tập trung cho các AP trọng lượng nhẹ.
- WLC có thể nằm trong CÙNG MỘT SUBNET / VLAN với các AP trọng lượng nhẹ mà nó quản lý HOẶC nằm trong một SUBNET / VLAN KHÁC.
- WLC và các AP trọng lượng nhẹ XÁC THỰC lẫn nhau bằng việc sử dụng CÁC CHỨNG CHỈ SỐ (DIGITAL CERTIFICATES) được cài đặt trên mỗi THIẾT BỊ (CÁC CHỨNG CHỈ TIÊU CHUẨN X.509).
    - Điều này đảm bảo rằng chỉ CÁC AP ĐƯỢC ỦY QUYỀN mới có thể gia nhập MẠNG.

![image](https://github.com/psaumur/CCNA/assets/106411237/c154bcad-ae81-4fb8-9acf-56913dffaf04)

- WLC và các AP trọng lượng nhẹ sử dụng một GIAO THỨC gọi là CAPWAP (KIỂM SOÁT VÀ CUNG CẤP CÁC ĐIỂM TRUY CẬP KHÔNG DÂY - CONTROL AND PROVISIONING OF WIRELESS ACCESS POINTS) để liên lạc.
    - Dựa trên một GIAO THỨC cũ hơn gọi là LWAPP (LIGHTWEIGHT ACCESS POINT PROTOCOL).

- HAI ĐƯỜNG HẦM (TUNNELS) được tạo ra giữa mỗi AP và WLC :
    - ĐƯỜNG HẦM KIỂM SOÁT (CONTROL TUNNEL) (Cổng UDP 5246):
        - ĐƯỜNG HẦM này được sử dụng để cấu hình các AP và kiểm soát cũng như quản lý các hoạt động.
        - Tất cả lưu lượng trong ĐƯỜNG HẦM này đều được MÃ HÓA theo mặc định.
    - ĐƯỜNG HẦM DỮ LIỆU (DATA TUNNEL) (Cổng UDP 5247):
        - Tất cả lưu lượng từ CÁC MÁY KHÁCH KHÔNG DÂY được gửi qua ĐƯỜNG HẦM này tới WLC.
        - NÓ KHÔNG ĐI TRỰC TIẾP VÀO MẠNG CÓ DÂY !

- Lưu lượng trong ĐƯỜNG HẦM này không được MÃ HÓA theo mặc định nhưng bạn có thể cấu hình nó để được MÃ HÓA với DTLS (BẢO MẬT LỚP TRUYỀN TẢI DATAGRAM - DATAGRAM TRANSPORT LAYER SECURITY).

- Bởi vì TẤT CẢ lưu lượng từ MÁY KHÁCH KHÔNG DÂY đều được truyền qua ĐƯỜNG HẦM tới WLC bằng CAPWAP, các AP kết nối tới CÁC CỔNG TRUY CẬP (ACCESS PORTS) trên SWITCH - CHỨ KHÔNG PHẢI CÁC CỔNG TRUNK.

![image](https://github.com/psaumur/CCNA/assets/106411237/10917a40-468a-4ea6-8253-bf229d612af1)

---

***  (Không bắt buộc phải GHI NHỚ cho kỳ thi CCNA) ***

Có một số LỢI ÍCH CHÍNH của KIẾN TRÚC CHIA TÁCH MAC (SPLIT-MAC ARCHITECTURE):

- KHẢ NĂNG MỞ RỘNG (SCALABILITY):
    - Với một bộ WLC (hoặc nhiều hơn), việc xây dựng và hỗ trợ một MẠNG với hàng ngàn AP trở nên ĐƠN GIẢN hơn nhiều.
- GÁN KÊNH ĐỘNG (DYNAMIC CHANNEL ASSIGNMENT):
    - WLC có thể tự động chọn kênh mà mỗi AP nên sử dụng.
- TỐI ƯU HÓA CÔNG SUẤT TRUYỀN:
    - WLC có thể tự động đặt công suất truyền phù hợp cho mỗi AP.
- TỰ PHỤC HỒI VÙNG PHỦ SÓNG KHÔNG DÂY (SELF-HEALING):
    - Khi một AP ngừng hoạt động, WLC có thể tăng công suất truyền của các AP lân cận để tránh tạo ra các lỗ hổng vùng phủ sóng.
- CHUYỂN VÙNG LIỀN MẠCH (SEAMLESS ROAMING):
    - CÁC MÁY KHÁCH có thể di chuyển giữa các AP mà không gặp phải tình trạng trễ đáng kể nào.
- CÂN BẰNG TẢI MÁY KHÁCH (CLIENT LOAD BALANCING):
    - Nếu một MÁY KHÁCH nằm trong phạm vi của HAI AP, WLC có thể liên kết MÁY KHÁCH với AP ít người dùng nhất, nhằm cân bằng tải giữa các AP.
- QUẢN LÝ BẢO MẬT / QoS:
    - Việc quản lý tập trung các chính sách BẢO MẬT và QoS đảm bảo tính nhất quán trên toàn bộ MẠNG.

---

- CÁC AP TRỌNG LƯỢNG NHẸ có thể được cấu hình để hoạt động ở NHIỀU CHẾ ĐỘ KHÁC NHAU:
    - LOCAL (Cục bộ):
        - Đây là chế độ MẶC ĐỊNH, tại đó AP cung cấp một BSS (hoặc nhiều BSS) để CÁC MÁY KHÁCH liên kết vào.
        
    - FLEXCONNECT:
        - Giống như một AP trọng lượng nhẹ ở chế độ LOCAL, nó cung cấp MỘT hoặc NHIỀU BSS để CÁC MÁY KHÁCH liên kết vào.
        - TUY NHIÊN, FLEXCONNECT cho phép AP thực hiện CHUYỂN MẠCH (SWITCH) lưu lượng tại chỗ giữa MẠNG CÓ DÂY (TRUNK) và MẠNG KHÔNG DÂY (ACCESS) nếu CÁC ĐƯỜNG HẦM tới WLC bị ngắt kết nối.
    
![image](https://github.com/psaumur/CCNA/assets/106411237/aa2d7d98-2d6f-46b6-ab38-7acc96c8dc52)
    

- SNIFFER (Đánh hơi gói tin):
    - AP sẽ KHÔNG CUNG CẤP dịch vụ BSS cho CÁC MÁY KHÁCH.
    - Nó dành riêng cho việc BẮT CÁC KHUNG TIN 802.11 và GỬI chúng tới một THIẾT BỊ đang chạy phần mềm như WIRESHARK.

- MONITOR (Giám sát):
    - AP sẽ KHÔNG CUNG CẤP dịch vụ BSS cho CÁC MÁY KHÁCH.
    - Nó dành riêng for việc NHẬN CÁC KHUNG TIN 802.11 để phát hiện CÁC THIẾT BỊ LẬU (ROGUE DEVICES).
    - Nếu một MÁY KHÁCH bị phát hiện là thiết bị LẬU, một AP có thể gửi CÁC THÔNG ĐIỆP HỦY XÁC THỰC (DE-AUTHENTICATION MESSAGES) để ngắt liên kết giữa thiết bị lậu đó và AP.

- ROGUE DETECTOR (Phát hiện thiết bị lậu):
    - AP thậm chí còn không SỬ DỤNG bộ phát RADIO của mình.
    - Nó chỉ LẮNG NGHE lưu lượng trên MẠNG CÓ DÂY, nhưng nó nhận được một danh sách CÁC MÁY KHÁCH LẬU và CÁC ĐỊA CHỈ MAC của AP bị nghi ngờ từ WLC.
    - Bằng cách LẮNG NGHE các thông điệp ARP trên MẠNG CÓ DÂY và đối chiếu nó với thông tin nhận được từ WLC, nó có thể PHÁT HIỆN CÁC THIẾT BỊ LẬU.

- SE-CONNECT (SPECTRUM EXPERT CONNECT):
    - AP sẽ KHÔNG CUNG CẤP dịch vụ BSS for CÁC MÁY KHÁCH.
    - Nó dành riêng cho việc PHÂN TÍCH PHỔ RF trên TẤT CẢ CÁC KÊNH.
    - Nó có thể gửi thông tin tới một phần mềm như Cisco Spectrum Expert trên một chiếc PC để THU THẬP và PHÂN TÍCH DỮ LIỆU.

- BRIDGE / MESH (Cầu nối / Lưới):
    - Giống như chế độ *OUTDOOR BRIDGE* của các AP ĐỘC LẬP, AP trọng lượng nhẹ có thể là một CẦU NỐI CHUYÊN DỤNG giữa CÁC CHI NHÁNH (Ví dụ: qua CÁC KHOẢNG CÁCH XA).
    - Một mạng LƯỚI (MESH) có thể được hình thành giữa CÁC ĐIỂM TRUY CẬP.

- FLEX PLUS BRIDGE:
    - Thêm chức năng FLEXCONNECT vào chế độ BRIDGE / MESH.
    - Cho phép CÁC ĐIỂM TRUY CẬP KHÔNG DÂY chuyển tiếp lưu lượng tại chỗ ngay cả khi mất kết nối tới WLC.
    

![image](https://github.com/psaumur/CCNA/assets/106411237/940a414b-208f-408c-a3e2-37e3bfbb0d32)

---

CÁC AP DỰA TRÊN ĐÁM MÂY (CLOUD-BASED APs)

- Kiến trúc AP DỰA TRÊN ĐÁM MÂY nằm ở giữa kiểu AP ĐỘC LẬP và KIẾN TRÚC CHIA TÁCH MAC.
    - Đó là CÁC AP ĐỘC LẬP nhưng được quản lý tập trung trên ĐÁM MÂY.
- CISCO MERAKI là một giải pháp WI-FI DỰA TRÊN ĐÁM MÂY phổ biến.
- Trang quản trị (dashboard) của MERAKI có thể được sử dụng để cấu hình các AP, theo dõi MẠNG, tạo báo cáo hiệu năng, v.v.
    - MERAKI cũng chỉ định cho mỗi AP nên dùng KÊNH nào, công suất truyền là bao nhiêu, v.v.
- Tuy nhiên, LƯU LƯỢNG DỮ LIỆU không được gửi lên ĐÁM MÂY. Nó được gửi trực tiếp vào MẠNG CÓ DÂY giống như khi sử dụng các AP ĐỘC LẬP.
    - Chỉ có lưu lượng quản lý / kiểm soát mới được gửi lên ĐÁM MÂY.

![image](https://github.com/psaumur/CCNA/assets/106411237/8bd00a94-f965-4257-af46-82be67850feb)

![image](https://github.com/psaumur/CCNA/assets/106411237/93e62771-c2d5-4003-9ade-0d5be855ea66)

---

CÁC HÌNH THỨC TRIỂN KHAI BỘ ĐIỀU KHIỂN LAN KHÔNG DÂY (WLC)

- Trong một KIẾN TRÚC CHIA TÁCH MAC, có BỐN CHẾ ĐỘ TRIỂN KHAI WLC CHÍNH:
    - UNIFIED (Hợp nhất):
        - WLC là một THIẾT BỊ PHẦN CỨNG chuyên dụng đặt tại một vị trí trung tâm của MẠNG.
    - CLOUD-BASED (Dựa trên đám mây):
        - WLC là một máy ảo VM chạy trên một MÁY CHỦ, thường là trong một ĐÁM MÂY RIÊNG tại một TRUNG TÂM DỮ LIỆU.
        - Đây KHÔNG phải là kiến trúc AP DỰA TRÊN ĐÁM MÂY đã thảo luận ở trên.
    - EMBEDDED (Tích hợp):
        - WLC được tích hợp ngay bên trong một SWITCH.
    - MOBILITY EXPRESS:
        - WLC được tích hợp ngay bên trong một AP.

---

WLC HỢP NHẤT (UNIFIED WLC)

- WLC là một THIẾT BỊ PHẦN CỨNG chuyên dụng đặt tại một vị trí trung tâm của MẠNG.
- Một bộ WLC HỢP NHẤT có thể hỗ trợ tối đa khoảng 6000 AP.
- Nếu cần nhiều hơn 6000 AP, các bộ WLC bổ sung có thể được thêm vào MẠNG.

![image](https://github.com/psaumur/CCNA/assets/106411237/922eac1f-6c62-4926-89bb-a447f8be2edd)

---

CLOUD-BASED (DỰA TRÊN ĐÁM MÂY)

- WLC là một máy ảo VM chạy trên một MÁY CHỦ, thường là trong một ĐÁM MÂY RIÊNG tại một TRUNG TÂM DỮ LIỆU.
- CÁC WLC DỰA TRÊN ĐÁM MÂY thường có thể hỗ trợ tối đa khoảng 3000 AP.
- Nếu cần nhiều hơn 3000 AP, nhiều máy ảo WLC hơn có thể được triển khai.

![image](https://github.com/psaumur/CCNA/assets/106411237/9d87546c-6397-48d2-941c-007f5e6440aa)

---

EMBEDDED WLC (WLC TÍCH HỢP)

- WLC được tích hợp ngay bên trong một SWITCH.
- Một bộ WLC TÍCH HỢP có thể hỗ trợ tối đa khoảng 200 AP.
- Nếu cần nhiều hơn 200 AP, có thể thêm vào nhiều SWITCH hơn có tính năng WLC TÍCH HỢP.

![image](https://github.com/psaumur/CCNA/assets/106411237/fc6a79f2-a7b5-4b5a-99d6-b94238362e8e)

---

CISCO MOBILITY EXPRESS WLC

- WLC được tích hợp ngay bên trong một AP.
- Một bộ WLC MOBILITY EXPRESS có thể hỗ trợ tối đa khoảng 100 AP.
- Nếu cần nhiều hơn 100 AP, có thể thêm vào nhiều AP hơn có tính năng WLC MOBILITY EXPRESS.

![image](https://github.com/psaumur/CCNA/assets/106411237/4ff02aee-83c9-4a56-8a71-a14e20e8bf3c)
