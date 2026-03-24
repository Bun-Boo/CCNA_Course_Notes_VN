# 58. CẤU HÌNH MẠNG KHÔNG DÂY (WIRELESS CONFIGURATION)

GIỚI THIỆU SƠ ĐỒ MẠNG (TOPOLOGY)

![image](https://github.com/psaumur/CCNA/assets/106411237/1e8ed6b8-1183-42e7-9584-d5504c52987a)

PC NỘI BỘ (VLAN 100) TRUY CẬP GATEWAY MẶC ĐỊNH thông qua đường hầm CAPWAP nội bộ

![image](https://github.com/psaumur/CCNA/assets/106411237/4dec4c60-945e-4f2c-b7db-3028269ec441)

TRUY CẬP PC KHÁCH BÊN NGOÀI thông qua GATEWAY MẶC ĐỊNH + Các đường hầm CAPWAP nội bộ và bên ngoài

![image](https://github.com/psaumur/CCNA/assets/106411237/3b1c79a6-f8c5-496b-a0b8-d561ff87880f)

---

CẤU HÌNH SWITCH LỚP 3 (SW1)

![image](https://github.com/psaumur/CCNA/assets/106411237/eae43f12-aa95-41a3-8a5d-26ffc5e83262)

PHẦN 2 của cấu hình

Lưu ý DHCP “Option 43”

![image](https://github.com/psaumur/CCNA/assets/106411237/ade4dc29-3017-4d79-99d2-d895968bf741)

THIẾT LẬP WLC (WLC SETUP)

Phần này giúp thiết lập WLC để cho phép cấu hình qua giao diện đồ họa GUI

![image](https://github.com/psaumur/CCNA/assets/106411237/3a2c00c0-eda3-4b72-af07-b07e820365c5)

![image](https://github.com/psaumur/CCNA/assets/106411237/313e030b-add3-4384-bdf0-96306e3663b1)

Tại sao Jeremy chọn PHÁP (FRANCE) cho Mã Quốc gia (liên quan đến miền quy định của thiết bị)

![image](https://github.com/psaumur/CCNA/assets/106411237/c3a21043-c4fc-47fb-9294-953700fbd8ed)

![image](https://github.com/psaumur/CCNA/assets/106411237/80dce78b-3a7e-4c93-a5f1-47eefb6e28b0)

---

TRUY CẬP GIAO DIỆN GUI CỦA WLC

![image](https://github.com/psaumur/CCNA/assets/106411237/a5b44611-af07-4bf6-94b3-957ee342bb24)

![image](https://github.com/psaumur/CCNA/assets/106411237/7924d814-35f2-40d0-ac3c-a2f8022df2bc)

![image](https://github.com/psaumur/CCNA/assets/106411237/45432356-9b45-43dd-99c7-701984d541c1)

![image](https://github.com/psaumur/CCNA/assets/106411237/f097e29c-c7f6-4045-9451-9fdd5035b4b4)

![image](https://github.com/psaumur/CCNA/assets/106411237/b6ec70b7-d628-422b-b693-d9f0af9d1e78)

---

CẤU HÌNH WLC (WLC CONFIGURATION)

![image](https://github.com/psaumur/CCNA/assets/106411237/fbc3b9fd-c0db-48f3-9ce8-270812e00008)

CÁC CỔNG CỦA WLC (WLC PORTS)

- CÁC CỔNG WLC là CÁC CỔNG VẬT LÝ để cắm cáp vào.
- CÁC GIAO DIỆN WLC (WLC INTERFACES) là các giao diện logic bên trong WLC (tương tự SVIs trên một SWITCH).
- WLC có một vài loại CỔNG khác nhau:
    - CỔNG DỊCH VỤ (SERVICE PORT)
        - Một CỔNG QUẢN LÝ chuyên dụng.
        - Được sử dụng for quản lý NGOÀI BĂNG (OUT-OF-BAND).
        - Phải kết nối tới một CỔNG ACCESS của SWITCH vì nó chỉ hỗ trợ một VLAN.
        - CỔNG này có thể được dùng để kết nối tới THIẾT BỊ khi nó đang khởi động, thực hiện khôi phục hệ thống, v.v.
    - CỔNG HỆ THỐNG PHÂN PHỐI (DISTRIBUTION SYSTEM PORT)
        - Đây là các CỔNG MẠNG tiêu chuẩn kết nối tới “HỆ THỐNG PHÂN PHỐI” (MẠNG CÓ DÂY) và được dùng cho lưu lượng DỮ LIỆU.
        - Các CỔNG này thường kết nối tới CÁC CỔNG TRUNK của SWITCH, và nếu nhiều CỔNG phân phối được sử dụng, chúng có thể tạo thành một nhóm LAG.
    - CỔNG CONSOLE
        - Đây là CỔNG CONSOLE tiêu chuẩn, có thể là RJ45 hoặc USB.
    - CỔNG DỰ PHÒNG (REDUNDANCY PORT)
        - CỔNG này được dùng để kết nối tới một WLC khác nhằm tạo thành một cặp có ĐỘ KHẢ DỤNG CAO (HA - HIGH AVAILABILITY).

![image](https://github.com/psaumur/CCNA/assets/106411237/cec94d93-d58b-43b1-8e5e-f4c07ee430fd)

---

CÁC GIAO DIỆN WLC (WLC INTERFACES)

- GIAO DIỆN QUẢN LÝ (MANAGEMENT INTERFACES)
    - Được dùng cho lưu lượng quản lý chẳng hạn như TELNET, SSH, HTTP, HTTPS, xác thực RADIUS, NTP, SYSLOG, v.v.
    - CÁC ĐƯỜNG HẦM CAPWAP cũng được hình thành tới / từ GIAO DIỆN quản lý của WLC.
- GIAO DIỆN QUẢN LÝ DỰ PHÒNG (REDUNDANCY MANAGEMENT INTERFACE)
    - Khi HAI WLC được kết nối qua CÁC CỔNG DỰ PHÒNG của chúng, một WLC sẽ là “ACTIVE” (Hoạt động) và cái còn lại là “STANDBY” (Dự phòng).
    - GIAO DIỆN này có thể được dùng để kết nối và quản lý WLC “STANDBY”.

- GIAO DIỆN ẢO (VIRTUAL INTERFACE)
    - GIAO DIỆN này được dùng khi giao tiếp với CÁC MÁY KHÁCH KHÔNG DÂY để chuyển tiếp các yêu cầu DHCP, thực hiện XÁC THỰC WEB CHO MÁY KHÁCH, v.v.

- GIAO DIỆN CỔNG DỊCH VỤ (SERVICE PORT INTERFACE)
    - Nếu CỔNG DỊCH VỤ được sử dụng, GIAO DIỆN này sẽ được liên kết với nó và dùng cho QUẢN LÝ NGOÀI BĂNG.

- GIAO DIỆN ĐỘNG (DYNAMIC INTERFACE)
    - Đây là CÁC GIAO DIỆN được dùng để ánh xạ một mạng WLAN tới một VLAN.
    - Ví dụ :
        - LƯU LƯỢNG từ mạng WLAN “INTERNAL” (Nội bộ) sẽ được gửi tới MẠNG CÓ DÂY từ GIAO DIỆN ĐỘNG “INTERNAL” của WLC.

---

CẤU HÌNH WLAN

Nhấp vào “NEW”

![image](https://github.com/psaumur/CCNA/assets/106411237/b20dbb39-fac6-4cf3-926b-869e75c04e15)

Điền chi tiết của giao diện và nhấp vào “APPLY”

![image](https://github.com/psaumur/CCNA/assets/106411237/48a4810d-a56c-4aef-8cfd-d2474d42cbb1)

Điền vào các chi tiết (IP, Netmask, Gateway…) và sau đó nhấp vào “APPLY”

![image](https://github.com/psaumur/CCNA/assets/106411237/6d11036b-3d82-4c2f-a20a-4367eb18ca8a)

Giao diện INTERNAL hiện đã được tạo

![image](https://github.com/psaumur/CCNA/assets/106411237/80a91b22-c4fa-43e2-b035-05ac6199c6f3)

Bây giờ, lặp lại các bước trên for giao diện GUEST (Khách)

![image](https://github.com/psaumur/CCNA/assets/106411237/80d5a300-a3ef-4e46-ae1a-7b7afb6a5078)

Điền vào các chi tiết (IP, Netmask, Gateway…) và sau đó nhấp vào “APPLY”

![image](https://github.com/psaumur/CCNA/assets/106411237/43f70936-4b10-4647-8f57-a086e3f0b7bc)

![image](https://github.com/psaumur/CCNA/assets/106411237/3a98ae1c-13a4-4bde-ab8c-398f8d16da43)

Sau khi tất cả CÁC GIAO DIỆN đã được tạo, chúng ta có thể bắt đầu CẤU HÌNH WLAN

![image](https://github.com/psaumur/CCNA/assets/106411237/d80eff95-41c7-43c6-a31e-0ebde3a7cd81)

![image](https://github.com/psaumur/CCNA/assets/106411237/960f24e5-efb9-4a15-9f5f-2a8e45b2d425)

WLAN INTERNAL đang được đặt là “MANAGEMENT”, nó cần phải được đổi thành “INTERNAL”

![image](https://github.com/psaumur/CCNA/assets/106411237/a3cb544c-3ce4-43b5-b054-e52e8388ab83)

BẢO MẬT (SECURITY) cũng sẽ cần được đổi từ [WPA2] thành [WPA2 PSK]

![image](https://github.com/psaumur/CCNA/assets/106411237/4cb2783e-26db-4584-8daa-feba124e9966)

(Cần ĐÁNH DẤU vào ô “Enable” của PSK ở phía dưới)

Thay đổi ĐỊNH DẠNG PSK thành “ASCII” và nhập MẬT KHẨU (độ dài ít nhất 8 ký tự)

![image](https://github.com/psaumur/CCNA/assets/106411237/220202e1-222f-4966-81a6-aafa81727c33)

![image](https://github.com/psaumur/CCNA/assets/106411237/8cd2c63a-aa10-48c3-b826-fe107d04666d)

- XÁC THỰC WEB (WEB AUTHENTICATION)
    - Sau khi CÁC MÁY KHÁCH KHÔNG DÂY nhận được một ĐỊA CHỈ IP và cố gắng truy cập một TRANG WEB, họ sẽ phải nhập TÊN NGƯỜI DÙNG và MẬT KHẨU để XÁC THỰC.

- WEB PASSTHROUGH
    - Tương tự như trên, nhưng KHÔNG yêu cầu TÊN NGƯỜI DÙNG hay MẬT KHẨU.
    - Một cảnh báo hoặc thông báo được hiển thị và MÁY KHÁCH chỉ cần đồng ý để có quyền truy cập INTERNET.
    
- CÁC TÙY CHỌN chuyển hướng web CONDITIONAL và SPLASH PAGE cũng tương tự nhưng yêu cầu thêm XÁC THỰC LỚP 2 802.1x.

---

QoS

![image](https://github.com/psaumur/CCNA/assets/106411237/957336a3-d81c-4914-b35f-99925a316ad3)

Thiết lập QoS mặc định là “SILVER” (Best Effort - Nỗ lực tối đa). Điều này có thể được thay đổi tùy thuộc vào loại lưu lượng đang được gửi qua mạng WLAN.

---

CÁC THIẾT LẬP NÂNG CAO (ADVANCED SETTINGS)

![image](https://github.com/psaumur/CCNA/assets/106411237/ed70b1b9-b0b6-4b37-b4a5-4492a0cb9120)

![image](https://github.com/psaumur/CCNA/assets/106411237/12bcb065-78af-47b9-810c-fbe7ad739260)

---

CẤU HÌNH MỘT MẠNG WLAN MỚI (GUEST)

![image](https://github.com/psaumur/CCNA/assets/106411237/4782e82e-4545-458e-917c-42d40e08748d)

Thay đổi TRẠNG THÁI (STATUS) thành “ENABLED” và NHÓM GIAO TIẾP thành “GUEST”

![image](https://github.com/psaumur/CCNA/assets/106411237/7a84ce73-0250-404b-896c-695ac5b9d05a)

![image](https://github.com/psaumur/CCNA/assets/106411237/2ca8357b-7564-4ef9-8f36-cb730a4b415f)

Bây giờ, chúng ta cần đổi CHÍNH SÁCH BẢO MẬT thành [WPA2][Auth(PSK)]

Quay lại phần GIÁM SÁT (MONITORING), chúng ta có thể thấy những thay đổi đã thực hiện trong phần CẤU HÌNH

![image](https://github.com/psaumur/CCNA/assets/106411237/5a06ae8b-cad0-46ec-bf34-adab0960fc41)

Số lượng MÁY KHÁCH hiện tại đang là 0. Bằng cách kết nối vào các mạng WLAN, những con số này sẽ thay đổi.
Để XEM danh sách CÁC MÁY KHÁCH đang kết nối, nhấp vào tab “CLIENTS” ở phía bên tay trái.

![image](https://github.com/psaumur/CCNA/assets/106411237/b6eefbd8-f79e-4dc6-90e6-95a8c0c17849)

![image](https://github.com/psaumur/CCNA/assets/106411237/75d359fe-dc41-4d87-9351-e1da0ebbb8c7)

---

CÁC TÍNH NĂNG BỔ SUNG CỦA WLC

Tab WIRELESS hiển thị danh sách các AP hiện có trong MẠNG

![image](https://github.com/psaumur/CCNA/assets/106411237/29f5608e-9edb-4c6e-9382-998deedd4c72)

Nhấp vào một AP sẽ hiển thị thông tin và các thiết lập cấu hình cho nó

![image](https://github.com/psaumur/CCNA/assets/106411237/7d87bbcc-ed95-47b6-b966-fb95f5bb7f29)

---

Tab MANAGEMENT (QUẢN LÝ) cho phép bạn thay đổi cách MANAGE bộ WLC

Nhấp vào “Mgmt Via Wireless” cho phép bạn thay đổi xem có thể truy cập QUẢN LÝ qua WI-FI hay không

![image](https://github.com/psaumur/CCNA/assets/106411237/605361a0-c8da-47fc-bca3-af09751838dd)

![image](https://github.com/psaumur/CCNA/assets/106411237/e13bdcea-cb87-4e38-9dd4-711079761987)

---

Tab SECURITY có thể cho phép chúng ta tạo danh sách CÁC DANH SÁCH TRUY CẬP (ACCESS LISTS - ACL)

![image](https://github.com/psaumur/CCNA/assets/106411237/7eddccfb-07cd-4ba9-914e-54161a4b10f3)

Đầu tiên, ĐẶT TÊN cho ACL và loại ĐỊA CHỈ IP mà nó dành cho

![image](https://github.com/psaumur/CCNA/assets/106411237/e9f303bc-9078-4ff2-be86-f63fb9877008)

NHẤP “Add New Rule” để chỉ định các quy tắc ACL (Lưu lượng nào được phép đi qua)

![image](https://github.com/psaumur/CCNA/assets/106411237/4637053c-042d-4afc-acf8-27e914698c00)

![image](https://github.com/psaumur/CCNA/assets/106411237/c9d26aa3-c277-45ac-8f74-1dbd11e1bda5)

![image](https://github.com/psaumur/CCNA/assets/106411237/afbdb580-5383-4f32-9713-708f0a4ebb7e)

Bây giờ chúng ta cần ÁP DỤNG (APPLY) ACL (giống như áp dụng nó cho một GIAO DIỆN trên một ROUTER)

Nhấp vào “CPU ACL” từ menu bên tay trái

![image](https://github.com/psaumur/CCNA/assets/106411237/3eeee534-2071-47df-97f6-639e46d54b94)

Chọn ACL mới từ danh sách thả xuống và sau đó nhấp vào “APPLY”

![image](https://github.com/psaumur/CCNA/assets/106411237/7c18a89c-cad3-4f54-b6e5-6d5956edbd37)

![image](https://github.com/psaumur/CCNA/assets/106411237/6319e0ad-4c65-418d-920b-3c1f43ae4b55)
