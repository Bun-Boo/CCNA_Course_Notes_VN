# 53. CÁC KIẾN TRÚC MẠNG WAN (WAN ARCHITECTURES)

GIỚI THIỆU VỀ MẠNG WAN

- WAN là viết tắt của MẠNG DIỆN RỘNG (WIDE AREA NETWORK).
- MẠNG WAN là một MẠNG mở rộng trên một khu vực địa lý lớn.
- MẠNG WAN được sử dụng để kết nối các mạng LAN tách biệt về mặt địa lý.
- Mặc dù Internet có thể được coi là một mạng WAN, nhưng thuật ngữ “WAN” thường được sử dụng để chỉ các kết nối riêng của một doanh nghiệp nhằm kết nối các văn phòng, trung tâm dữ liệu và các địa điểm khác của họ lại với nhau.
- Qua các mạng công cộng/chia sẻ như Internet, các mạng riêng ảo - VPN (Virtual Private Networks) có thể được sử dụng để tạo ra các kết nối WAN riêng tư.
- Có nhiều công nghệ WAN khác nhau đã xuất hiện qua nhiều năm. Tùy thuộc vào vị trí, một số công nghệ sẽ có sẵn và một số thì không.
- Những công nghệ được coi là “di sản” (lỗi thời) ở một quốc gia này, có thể vẫn đang được sử dụng ở các quốc gia khác.

---

WAN TRÊN KẾT NỐI CHUYÊN DỤNG (ĐƯỜNG THUÊ RIÊNG - LEASED LINE)

Sơ đồ TRỤC-VÀ-NAN HOA (HUB-and-SPOKE)

![image](https://github.com/psaumur/CCNA/assets/106411237/57575fad-883d-4999-a56d-a77fa1542976)

![image](https://github.com/psaumur/CCNA/assets/106411237/cfc23064-a133-445a-b854-e044828eca7d)

KẾT NỐI WAN QUA ETHERNET (CÁP QUANG)

![image](https://github.com/psaumur/CCNA/assets/106411237/022ccdbd-7ce9-41fd-9f99-9e9c6dcb9f76)

WAN TRÊN HẠ TẦNG CHIA SẺ (INTERNET VPN)

![image](https://github.com/psaumur/CCNA/assets/106411237/38eff264-7ed4-43fd-943b-47e9e1ce995e)

---

CÁC ĐƯỜNG THUÊ RIÊNG (LEASED LINES)

- MỘT ĐƯỜNG THUÊ RIÊNG (LEASED LINE) là một liên kết vật lý chuyên dụng, thường kết nối hai địa điểm.
- CÁC ĐƯỜNG THUÊ RIÊNG sử dụng các kết nối nối tiếp (đóng gói PPP hoặc HDLC).
- Có nhiều tiêu chuẩn khác nhau cung cấp các tốc độ khác nhau và các tiêu chuẩn khác nhau có sẵn ở các quốc gia khác nhau.
- Do chi phí CAO hơn, thời gian lắp đặt LÂU hơn và tốc độ CHẬM hơn của CÁC ĐƯỜNG THUÊ RIÊNG, công nghệ Ethernet WAN đang trở nên PHỔ BIẾN HƠN.

![image](https://github.com/psaumur/CCNA/assets/106411237/77dd5503-8b29-4919-8747-6dd80eec28fa)

VPN TRÊN NỀN MPLS (MPLS VPNs)

- MPLS là viết tắt của “Chuyển mạch nhãn đa giao thức” (Multi Protocol Label Switching).
- Tương tự như Internet, MẠNG MPLS của các nhà cung cấp dịch vụ là hạ tầng chia sẻ vì nhiều doanh nghiệp khách hàng cùng kết nối và chia sẻ chung một hạ tầng để tạo các kết nối WAN.
- Tuy nhiên, phần “chuyển mạch nhãn” (label switching) trong tên gọi MPLS cho phép tạo ra các mạng riêng ảo (VPN) trên hạ tầng MPLS thông qua việc sử dụng CÁC NHÃN (LABELS).
- CÁC THUẬT NGỮ quan trọng:
    - CE ROUTER = ROUTER tại biên khách hàng (Customer Edge ROUTER).
    - PE ROUTER = ROUTER tại biên nhà cung cấp (Provider Edge ROUTER).
    - P ROUTER = ROUTER tại lõi nhà cung cấp (Provider Core ROUTER).

![image](https://github.com/psaumur/CCNA/assets/106411237/166bff5b-d977-48dc-9a74-b9a523b91e1b)

- Khi các PE ROUTER nhận được CÁC KHUNG TIN (FRAMES) từ các CE ROUTER, chúng sẽ thêm một NHÃN vào KHUNG TIN.
- CÁC NHÃN này được sử dụng để đưa ra các quyết định chuyển tiếp bên trong MẠNG NHÀ CUNG CẤP DỊCH VỤ - CHỨ KHÔNG PHẢI ĐỊA CHỈ IP ĐÍCH.
- Các CE ROUTER KHÔNG SỬ DỤNG MPLS, nó chỉ được sử dụng bởi các PE/P ROUTER.
- Khi sử dụng một VPN MPLS LỚP 3, các ROUTER CE và PE thiết lập quan hệ láng giềng (peering) bằng OSPF, chẳng hạn, để chia sẻ thông tin ĐỊNH TUYẾN.

VÍ DỤ: 

CE của VĂN PHÒNG A sẽ thiết lập peering với một PE.

CE của VĂN PHÒNG B sẽ thiết lập peering với một PE khác.

CE của VĂN PHÒNG A sẽ học về CÁC TUYẾN ĐƯỜNG của VĂN PHÒNG B thông qua quan hệ peering OSPF này.

CE của VĂN PHÒNG B cũng sẽ học về CÁC TUYẾN ĐƯỜNG của VĂN PHÒNG A.

![image](https://github.com/psaumur/CCNA/assets/106411237/2b3d8d6e-3501-4d54-a6f8-5a05c9140d24)

- Khi sử dụng một VPN MPLS LỚP 2, các ROUTER CE và PE KHÔNG thiết lập quan hệ láng giềng (PEERINGS).
- MẠNG NHÀ CUNG CẤP DỊCH VỤ hoàn toàn *trong suốt* (transparent) đối với các ROUTER CE.
- Hiệu quả là giống như việc HAI ROUTER CE được kết nối trực tiếp với nhau.
    - CÁC GIAO DIỆN WAN của chúng sẽ nằm trong CÙNG MỘT SUBNET.
- Nếu một giao thức ĐỊNH TUYẾN được sử dụng, HAI ROUTER CE sẽ thiết lập quan hệ peering trực tiếp với nhau.

CÁC ROUTER CE được kết nối qua VPN MPLS LỚP 2

![image](https://github.com/psaumur/CCNA/assets/106411237/b0b19dfd-e417-40ce-ac36-ce0ace8484cc)

![image](https://github.com/psaumur/CCNA/assets/106411237/cc5c9508-a2 b0-4fe7-9c83-6c03e7d2d861)

---

MPLS 

- Nhiều công nghệ khác nhau có thể được sử dụng để kết nối tới MẠNG MPLS của một NHÀ CUNG CẤP DỊCH VỤ cho dịch vụ WAN.

![image](https://github.com/psaumur/CCNA/assets/106411237/c6e6e60d-2a96-415e-82a2-a090c38a68a3)

KHẢ NĂNG KẾT NỐI INTERNET

- Có vô số cách để một doanh nghiệp kết nối với INTERNET.
- Ví dụ, các công nghệ WAN RIÊNG TƯ như CÁC ĐƯỜNG THUÊ RIÊNG và CÁC VPN MPLS có thể được sử dụng để kết nối tới hạ tầng INTERNET của một NHÀ CUNG CẤP DỊCH VỤ.
- Ngoài ra, các công nghệ như CATV và DSL vốn thường được người tiêu dùng sử dụng (Truy cập Internet tại gia) cũng có thể được sử dụng bởi một doanh nghiệp.
- Ngày nay, đối với cả việc truy cập INTERNET của doanh nghiệp và người tiêu dùng, các kết nối ETHERNET CÁP QUANG đang ngày càng trở nên phổ biến do tốc độ cao mà chúng cung cấp trên những khoảng cách dài.
- Hãy cùng xem xét ngắn gọn HAI công nghệ truy cập INTERNET được đề cập ở trên:
    - CÁP TRUYỀN HÌNH (CATV)
    - DSL (Đường dây thuê bao số)

---

ĐƯỜNG DÂY THUÊ BAO SỐ (DSL)

- DSL cung cấp khả năng kết nối INTERNET cho khách hàng thông qua các đường dây điện thoại và có thể chia sẻ chính đường dây điện thoại đã được lắp đặt sẵn trong hầu hết các gia đình.
- Cần có một DSL MODEM (Bộ điều chế / Giải điều chế) để chuyển đổi DỮ LIỆU thành định dạng phù hợp để gửi qua các đường dây điện thoại.
    - MODEM có thể là một THIẾT BỊ riêng biệt hoặc nó có thể được tích hợp vào một “ROUTER GIA ĐÌNH”.

![image](https://github.com/psaumur/CCNA/assets/106411237/a708b6b4-6de5-4a72-8c77-13f569f4c2d5)

INTERNET QUA CÁP (CABLE INTERNET)

- CÁP INTERNET cung cấp KHẢ NĂNG TRUY CẬP INTERNET thông qua chính các đường dây CATV (Cáp truyền hình) được sử dụng cho dịch vụ TV.
- Giống như DLS, cần có một CABLE MODEM để chuyển đổi DỮ LIỆU thành định dạng phù hợp để gửi qua CÁC CÁP CATV.
    - Giống như một modem DSL, đây có thể là một thiết bị riêng biệt hoặc được xây dựng tích hợp sẵn vào ROUTER GIA ĐÌNH.

![image](https://github.com/psaumur/CCNA/assets/106411237/a33bb999-83bc-49a8-ad37-e7ca91fcb954)

---

CÁC KẾT NỐI INTERNET DỰ PHÒNG (REDUNDANT INTERNET CONNECTIONS)

![image](https://github.com/psaumur/CCNA/assets/106411237/af770f82-a55c-4af5-af7b-5708b39833c4)

---

CÁC VPN TRÊN NỀN INTERNET (INTERNET VPNs)

- CÁC DỊCH VỤ WAN RIÊNG TƯ như CÁC ĐƯỜNG THUÊ RIÊNG và MPLS cung cấp tính bảo mật vì lưu lượng của mỗi khách hàng được tách biệt bằng cách sử dụng các kết nối vật lý chuyên dụng (ĐƯỜNG THUÊ RIÊNG) hoặc bằng CÁC THẺ (TAGS) MPLS.
- Khi sử dụng INTERNET như một mạng WAN để kết nối CÁC CHI NHÁNH với nhau, theo MẶC ĐỊNH sẽ không có tính năng bảo mật tích hợp sẵn.
- Để cung cấp thông tin liên lạc an toàn qua Internet, các mạng riêng ảo - VPN (Virtual Private Networks) được sử dụng.
- Chúng ta sẽ tìm hiểu về hai loại VPN trên Internet:
    - SITE-TO-SITE VPNS (VPN giữa các chi nhánh) sử dụng IPSec.
    - REMOTE-ACCESS VPNs (VPN truy cập từ xa) sử dụng TLS.

SITE-TO-SITE VPNs (IPSec)

- Một VPN “SITE-TO-SITE” là một VPN giữa hai THIẾT BỊ và được sử dụng để kết nối HAI CHI NHÁNH lại với nhau qua INTERNET.
- Một “ĐƯỜNG HẦM” (TUNNEL) VPN được tạo ra giữa HAI THIẾT BỊ bằng cách ĐÓNG GÓI (ENCAPSULATING) gói tin IP gốc bằng một TIÊU ĐỀ (HEADER) VPN và một tiêu đề IP mới.
    - Khi sử dụng IPSec, gói tin gốc được mã hóa trước khi nó được ĐÓNG GÓI với TIÊU ĐỀ mới.

![image](https://github.com/psaumur/CCNA/assets/106411237/b17c6149-90b2-4bc7-beb7-c53698d588a0)

![image](https://github.com/psaumur/CCNA/assets/106411237/d41295a9-af54-4cd5-acc8-4b60c39c40c2)

TÓM TẮT QUY TRÌNH:

1) THIẾT BỊ GỬI kết hợp gói tin gốc và KHÓA PHIÊN (SESSION KEY - KHÓA MÃ HÓA) rồi chạy chúng qua một CÔNG THỨC MÃ HÓA.

2) THIẾT BỊ GỬI đóng gói GÓI TIN ĐÃ MÃ HÓA bằng một TIÊU ĐỀ VPN và một tiêu đề IP mới.

3) THIẾT BỊ GỬI gửi GÓI TIN MỚI tới THIẾT BỊ ở phía bên kia của ĐƯỜNG HẦM.

4) THIẾT BỊ NHẬN giải mã DỮ LIỆU để lấy lại gói tin gốc và sau đó chuyển tiếp gói tin gốc tới ĐÍCH của nó.

- Trong một VPN “SITE-TO-SITE”, một ĐƯỜNG HẦM chỉ được hình thành giữa HAI ĐIỂM CUỐI ĐƯỜNG HẦM (ví dụ, HAI ROUTER kết nối tới INTERNET).
- Tất cả CÁC THIẾT BỊ KHÁC trong mỗi chi nhánh KHÔNG cần phải tự tạo VPN cho mình. Chúng có thể gửi DỮ LIỆU không mã hóa tới ROUTER tại chi nhánh của mình, thiết bị này sẽ thực hiện MÃ HÓA nó và CHUYỂN TIẾP nó vào ĐƯỜNG HẦM như mô tả ở trên.

---

CÁC HẠN CHẾ CỦA IPSec TIÊU CHUẨN

1) IPSec không hỗ trợ lưu lượng QUẢNG BÁ (BROADCAST) hoặc ĐA HƯỚNG (MULTICAST), chỉ hỗ trợ ĐƠN HƯỚNG (UNICAST).

- Điều này có nghĩa là CÁC GIAO THỨC ĐỊNH TUYẾN như OSPF không thể được sử dụng qua các ĐƯỜNG HẦM vì chúng dựa vào lưu lượng ĐA HƯỚNG.
    - Điều này có thể được GIẢI QUYẾT bằng “GRE over IPSec”.

2) Việc cấu hình một mạng lưới ĐƯỜNG HẦM toàn phần (full mesh) giữa nhiều chi nhánh là một công việc tốn nhiều công sức.

Hãy cùng xem xét từng GIẢI PHÁP ở trên.

---

GRE over IPSec

- GRE (GENERIC ROUTING ENCAPSULATION - Đóng gói định tuyến chung) tạo ra các ĐƯỜNG HẦM giống như IPSec, tuy nhiên nó không MÃ HÓA gói tin gốc, vì vậy nó KHÔNG AN TOÀN.
- Tuy nhiên, nó có ưu điểm là có thể đóng gói rất NHIỀU loại CÁC GIAO THỨC LỚP 3 cũng như các thông điệp QUẢNG BÁ và ĐA HƯỚNG.
- Để có được sự LINH HOẠT của GRE cùng với tính BẢO MẬT của IPSec, “GRE over IPSec” có thể được sử dụng.
- Gói tin gốc sẽ được ĐÓNG GÓI bởi một TIÊU ĐỀ GRE và một tiêu đề IP mới, và sau đó GÓI TIN GRE sẽ được MÃ HÓA và ĐÓNG GÓI bên trong một tiêu đề VPN IPSec và một tiêu đề IP MỚI.

![image](https://github.com/psaumur/CCNA/assets/106411237/09c7da0c-debe-453e-822c-b97c0b8658ef)

![image](https://github.com/psaumur/CCNA/assets/106411237/3dfd6b86-28bb-489d-931b-5cc74669c1ac)

![image](https://github.com/psaumur/CCNA/assets/106411237/939ce5af-5ffc-44da-96fc-def2ca99ecae)

---

DMVPN

- DMVPN (Dynamic Multipoint VPN - VPN đa điểm động) là một giải pháp do Cisco phát triển cho phép các ROUTER tạo ra một mạng lưới ĐƯỜNG HẦM IPSec toàn phần (FULL MESH) một cách linh hoạt mà KHÔNG cần phải cấu hình thủ công từng ĐƯỜNG HẦM RIÊNG LẺ.

1) CẤU HÌNH CÁC ĐƯỜNG HẦM IPSec tới một TRẠM TRUNG TÂM (HUB SITE).

![image](https://github.com/psaumur/CCNA/assets/106411237/00c33e7f-2b28-4a33-908d-7aceff1e4092)

2) ROUTER TRUNG TÂM cung cấp cho mỗi ROUTER thông tin về CÁCH để hình thành một ĐƯỜNG HẦM IPSec với các ROUTER KHÁC.

![image](https://github.com/psaumur/CCNA/assets/106411237/7a621160-10d4-4e14-868b-3c23f6bb0a64)

DMVPN cung cấp sự đơn giản trong cấu hình của mô hình TRỤC-VÀ-NAN HOA (mỗi ROUTER NHÁNH chỉ cần cấu hình một ĐƯỜNG HẦM) và sự hiệu quả của việc liên lạc trực tiếp từ NHÁNH-TỚI-NHÁNH (CÁC ROUTER NHÁNH có thể liên lạc trực tiếp với nhau mà không cần LƯU LƯỢNG đi qua TRẠM TRUNG TÂM).

---

CÁC VPN TRUY CẬP TỪ XA (REMOTE-ACCESS VPNs)

- Trong khi các VPN SITE-TO-SITE được sử dụng để tạo kết nối ĐIỂM-TỚI-ĐIỂM giữa HAI CHI NHÁNH qua INTERNET, thì các VPN TRUY CẬP TỪ XA (REMOTE-ACCESS VPNs) được sử dụng để cho phép CÁC THIẾT BỊ ĐẦU CUỐI (PC, Điện thoại di động) TRUY CẬP các tài nguyên nội bộ của công ty một cách an toàn qua INTERNET.
- CÁC VPN TRUY CẬP TỪ XA thường sử dụng TLS (BẢO VỆ LỚP TRUYỀN TẢI - TRANSPORT LAYER SECURITY).
    - TLS cũng chính là thứ cung cấp tính bảo mật cho HTTPS (HTTP BẢO MẬT).
    - TLS trước đây được gọi là SSL (Secure Socket Layer) và được phát triển bởi Netscape, nhưng nó đã được đổi tên thành TLS khi được IETF tiêu chuẩn hóa.
- Phần mềm máy khách VPN (ví dụ: Cisco AnyConnect) được cài đặt trên CÁC THIẾT BỊ ĐẦU CUỐI (ví dụ: máy tính xách tay do công ty cung cấp mà nhân viên sử dụng để làm việc tại nhà).
- Các THIẾT BỊ ĐẦU CUỐI này sau đó hình thành các ĐƯỜNG HẦM BẢO MẬT tới một trong các ROUTER / FIREWALL của công ty đóng vai trò là MÁY CHỦ TLS.
- Điều này cho phép CÁC NGƯỜI DÙNG ĐẦU CUỐI truy cập các TÀI NGUYÊN trên MẠNG NỘI BỘ của công ty một cách an toàn mà không cần kết nối trực tiếp vào MẠNG công ty.

![image](https://github.com/psaumur/CCNA/assets/106411237/f4a77cb7-9d42-4daa-9a25-630c0fb260cf)

---

SO SÁNH SITE-TO-SITE VPN VỚI REMOTE-ACCESS VPN

- CÁC VPN SITE-TO-SITE thường sử dụng IPSec.
- CÁC VPN TRUY CẬP TỪ XA thường sử dụng TLS.
- CÁC VPN SITE-TO-SITE cung cấp DỊCH VỤ cho nhiều THIẾT BỊ bên trong các CHI NHÁNH mà chúng đang kết nối.
- CÁC VPN TRUY CẬP TỪ XA cung cấp DỊCH VỤ cho MỘT THIẾT BỊ ĐẦU CUỐI duy nhất được cài đặt PHẦN MỀM MÁY KHÁCH VPN.

- CÁC VPN SITE-TO-SITE thường được sử dụng để kết nối vĩnh viễn HAI CHI NHÁNH qua INTERNET.
- CÁC VPN TRUY CẬP TỪ XA thường được sử dụng để cung cấp KHẢ NĂNG TRUY CẬP THEO YÊU CẦU cho CÁC THIẾT BỊ ĐẦU CUỐI muốn TRUY CẬP an toàn các tài nguyên của công ty trong khi đang kết nối vào một MẠNG không AN TOÀN.

---

CÁC LỆNH TRONG LAB

Tạo giao diện Tunnel

`R1(config)#int tunnel <số_hiệu_tunnel>`

Lệnh này chuyển sang chế độ cấu hình Giao diện Tunnel.

Giao diện thoát (exit interface) cho tunnel:

`tunnel source <giao_diện>` 

IP của Giao diện Đích của Tunnel:

`tunnel destination <địa_chỉ_ip_đích>`

Đặt IP cho Giao diện Tunnel Nguồn (từ bước 1):

`ip address <IP_tunnel> <netmask>`

Cấu hình một Tuyến đường Mặc định (Default Route) tới Mạng của Nhà cung cấp dịch vụ:

`R1(config)#ip route 0.0.0.0 0.0.0.0 <giao_diện_bước_tiếp_theo>`

Thao tác này sẽ đưa Giao diện Tunnel lên trạng thái Administratively Up / Up.

================================================

Bây giờ bạn cần thiết lập CÁC ROUTER TUNNEL làm Láng giềng OSPF cho Mạng của Nhà cung cấp dịch vụ để chúng có thể chia sẻ các tuyến đường:

`R1(config)router ospf <process_ID_ospf>`

Lệnh này chuyển sang chế độ cấu hình OSPF Router.

`network <địa_chỉ_IP_giao_diện_tunnel> <wildcard_mask> area <số_area>`

Vì tunnel là một HOST duy nhất, bạn sẽ sử dụng 0.0.0.0 cho Wildcard Mask.

`network <địa_chỉ_IP_gateway_router> <wildcard_mask> area <số_area>`

Vì gateway router cũng là một HOST duy nhất, bạn sẽ sử dụng 0.0.0.0 cho Wildcard Mask.

`passive-interface <giao_diện_IP_gateway_router>`

Lệnh này loại bỏ việc quảng bá OSPF của Router Gateway qua OSPF.
