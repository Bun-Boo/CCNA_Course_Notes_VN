# 62. MẠNG XÁC ĐỊNH BẰNG PHẦN MỀM (SDN)

ÔN TẬP VỀ SDN

- MẠNG XÁC ĐỊNH BẰNG PHẦN MỀM (SDN) là một cách tiếp cận mạng tập trung hóa mặt phẳng điều khiển vào một ứng dụng được gọi là *bộ điều khiển (controller)*.
- Các mặt phẳng điều khiển truyền thống sử dụng kiến trúc phân tán.
- Một bộ điều khiển SDN tập trung hóa các chức năng của mặt phẳng điều khiển như việc tính toán các tuyến đường.
- Bộ điều khiển có thể tương tác theo lập trình với các thiết bị mạng bằng cách sử dụng các API.
- SBI (South Bound Interface - Giao diện hướng nam) được sử dụng để liên lạc giữa bộ điều khiển và thiết bị mạng mà nó điều khiển.
- NBI (North Bound Interface - Giao diện hướng bắc) là thứ cho phép chúng ta tương tác với bộ điều khiển bằng các kịch bản và ứng dụng của mình.

KIẾN TRÚC SDN

![image](https://github.com/psaumur/CCNA/assets/106411237/9d7e1a89-3537-48cc-a410-cef352b6a2cb)

---

CISCO SD-ACCESS

- Cisco SD-ACCESS là giải pháp SDN của Cisco để tự động hóa các mạng LAN nội bộ (campus LANs).
    - ACI (Application Centric Infrastructure) là giải pháp SDN của họ để tự động hóa các mạng trung tâm dữ liệu.
    - SD-WAN là giải pháp SDN của họ để tự động hóa các mạng diện rộng (WAN).
- Cisco DNA (Digital Network Architecture) Center là bộ điều khiển nằm ở trung tâm của SD-Access.

![image](https://github.com/psaumur/CCNA/assets/106411237/4c1662ee-490c-4eee-8970-550ca60feabb)

- LỚP DƯỚI (UNDERLAY) là mạng vật lý cơ sở gồm các thiết bị và kết nối (bao gồm cả có dây và không dây) cung cấp khả năng kết nối IP (ví dụ: sử dụng IS-IS).
    - Các Switch Đa lớp (Multilayer Switches) và các kết nối của chúng.

![image](https://github.com/psaumur/CCNA/assets/106411237/41bb11dd-31c9-493e-9fec-af847f0732dc)

- LỚP TRÊN (OVERLAY) là mạng ảo được xây dựng trên nền của mạng vật lý (underlay).

![image](https://github.com/psaumur/CCNA/assets/106411237/99f48b9e-ed68-4c11-b456-d0f6ccf13fed)

- FABRIC (Cấu trúc mạng) là sự kết hợp của lớp OVERLAY và UNDERLAY; là toàn bộ mạng vật lý và ảo nói chung.

![image](https://github.com/psaumur/CCNA/assets/106411237/35cf981c-337d-4117-9124-9f210e85bff3)

---

SD-ACCESS UNDERLAY (LỚP DƯỚI SD-ACCESS)

- Mục đích của UNDERLAY là hỗ trợ các đường hầm VXLAN của lớp OVERLAY.
- Có BA VAI TRÒ khác nhau cho các switch trong SD-ACCESS:
    - EDGE NODES (Nút biên): Kết nối tới các thiết bị đầu cuối (End HOSTS).
    - BORDER NODES (Nút ranh giới): Kết nối tới các thiết bị bên ngoài miền SD-ACCESS; ví dụ: các router WAN.
    - CONTROL NODES (Nút điều khiển): Sử dụng LISP (Locator ID Separation Protocol) để thực hiện các chức năng khác nhau của mặt phẳng điều khiển.
    
- Bạn có thể thêm SD-ACCESS lên trên mạng hiện có (*brownfield deployment*) nếu phần cứng và phần mềm mạng của bạn hỗ trợ.
    - Hãy tìm kiếm ‘Cisco SD-ACCESS compatibility matrix’ trên Google nếu bạn tò mò.
    - Trong trường hợp này, DNA CENTER sẽ không cấu hình lớp UNDERLAY.

- Một triển khai MỚI (*greenfield deployment)* sẽ được DNA CENTER cấu hình để sử dụng lớp SD-ACCESS UNDERLAY tối ưu:
    - TẤT CẢ các Switch đều là LỚP 3 và sử dụng IS-IS làm GIAO THỨC ĐỊNH TUYẾN của chúng.
    - Tất cả các liên kết giữa các Switch đều là CÁC CỔNG ĐỊNH TUYẾN (ROUTED PORTS). Điều này có nghĩa là không cần đến STP.
    - CÁC EDGE NODES (SWITCH TRUY CẬP) đóng vai trò là GATEWAY MẶC ĐỊNH cho CÁC THIẾT BỊ ĐẦU CUỐI *(Lớp Truy cập Định tuyến - Routed Access Layer)*.

![image](https://github.com/psaumur/CCNA/assets/106411237/0315f1e5-d9c6-47ce-acf2-1de6f14ac89c)

![image](https://github.com/psaumur/CCNA/assets/106411237/84d48992-30f9-45cf-856a-089ce00d0641)

---

SD-ACCESS OVERLAY (LỚP TRÊN SD-ACCESS)

- LISP (Locator ID Separation Protocol) cung cấp mặt phẳng điều khiển cho SD-ACCESS.
    - Một danh sách các ánh xạ giữa EIDs (endpoint identifiers - định danh thiết bị đầu cuối) và RLOCs (routing locators - định vị định tuyến) được duy trì.
    - EIDs định danh CÁC THIẾT BỊ ĐẦU CUỐI kết nối tới CÁC SWITCH BIÊN (EDGE SWITCHES).
    - RLOCS định danh SWITCH BIÊN có thể được sử dụng để tiếp cận THIẾT BỊ ĐẦU CUỐI.
    - Có RẤT NHIỀU chi tiết khác về LISP nhưng tôi nghĩ bạn có thể thấy nó khác với MẶT PHẲNG ĐIỀU KHIỂN truyền thống như thế nào.
    
- Cisco TrustSec (CTS) cung cấp kiểm soát chính sách (QoS, Chính sách Bảo mật, v.v.).

- VXLAN cung cấp MẶT PHẲNG DỮ LIỆU của SD-ACCESS.

![image](https://github.com/psaumur/CCNA/assets/106411237/8fd0bb65-31df-4db5-a79c-044c68c37b01)

![image](https://github.com/psaumur/CCNA/assets/106411237/b4c017b1-cc59-4305-9924-f25a5445a36b)

![image](https://github.com/psaumur/CCNA/assets/106411237/5adcaf16-4caf-4de2-9b8f-3e777c841bc6)

---

CISCO DNA CENTER

- Cisco DNA Center có HAI VAI TRÒ CHÍNH:
    - Là Bộ điều khiển SDN trong SD-ACCESS.
    - Là trình quản lý mạng trong một mạng truyền thống (không phải SD-ACCESS).
- DNA Center là một ứng dụng được cài đặt trên phần cứng máy chủ Cisco UCS.
- Nó có một REST API có thể được sử dụng để tương tác với DNA Center.
- SBI hỗ trợ các giao thức như NETCONF và RESTCONF (cũng như các giao thức truyền thống như Telnet, SSH và SNMP).
- DNA Center cho phép *Mạng Dựa trên Ý định* (Intent-Based Networking - IBN).
    - Mục tiêu là cho phép kỹ sư truyền đạt ý định của họ về hành vi mạng tới DNA Center, và sau đó DNA Center sẽ lo các chi tiết về cấu hình và chính sách thực tế trên các thiết bị.

- Các chính sách bảo mật truyền thống sử dụng ACL có thể trở nên RẤT rườm rà.
    - ACL có thể có hàng ngàn mục nhập.
    - Ý định của các mục nhập bị quên lãng theo thời gian khi các kỹ sư rời đi và các kỹ sư mới tiếp quản.

- DNA Center cho phép kỹ sư chỉ định ý định của chính sách.
    - Ví dụ :
        - Nhóm người dùng NÀY không thể giao tiếp với nhóm người dùng KIA.
        - Nhóm NÀY có thể truy cập máy chủ NÀY nhưng không được truy cập máy chủ KIA.
    - DNA CENTER sẽ lo các chi tiết chính xác của việc thực thi chính sách này.

![image](https://github.com/psaumur/CCNA/assets/106411237/30773f46-3564-4d66-a175-20962d1569dd)

---

>Để biết thêm chi tiết, bạn có thể xem tại [sandboxdnac.cisco.com](http://sandboxdnac.cisco.com) (Tên người dùng: devnetuser, Mật khẩu: Cisco123!)

---

QUẢN LÝ MẠNG BẰNG DNA CENTER VS TRUYỀN THỐNG

Quản lý Truyền thống (Traditional Management) :

- CÁC THIẾT BỊ được cấu hình từng cái một qua kết nối SSH hoặc Console.
- CÁC THIẾT BỊ được cấu hình thủ công qua kết nối Console trước khi được triển khai.
- Cấu hình và chính sách được quản lý theo từng thiết bị.
- Triển khai mạng mới có thể mất nhiều thời gian do yêu cầu lao động thủ công.
- Lỗi và sai hỏng dễ xảy ra hơn do nỗ lực thủ công tăng lên.

Quản lý Mạng dựa trên DNA CENTER :

- CÁC THIẾT BỊ được quản lý và giám sát tập trung từ giao diện GUI của DNA CENTER hoặc các ứng dụng khác sử dụng REST API của nó.
- Quản trị viên truyền đạt hành vi mạng mong muốn của mình tới DNA CENTER, sau đó DNA CENTER sẽ chuyển đổi những ý định đó thành cấu hình trên các thiết bị mạng được quản lý.
- Cấu hình và chính sách được quản lý tập trung.
- Các phiên bản phần mềm cũng được quản lý tập trung. DNA CENTER có thể giám sát các máy chủ đám mây để tìm các phiên bản mới và sau đó cập nhật cho các thiết bị được quản lý.
- Triển khai mạng mới nhanh hơn nhiều. Các thiết bị mới có thể tự động nhận cấu hình từ DNA CENTER mà không cần cấu hình thủ công.

![image](https://github.com/psaumur/CCNA/assets/106411237/cb9e0184-6b45-4dcc-85ae-cef3245c1629)
