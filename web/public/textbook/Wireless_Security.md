# 57. BẢO MẬT MẠNG KHÔNG DÂY (WIRELESS SECURITY)

GIỚI THIỆU VỀ BẢO MẬT MẠNG KHÔNG DÂY

- Mặc dù BẢO MẬT là quan trọng trong TẤT CẢ CÁC MẠNG, nó thậm chí còn thiết yếu hơn trong CÁC MẠNG KHÔNG DÂY.
- Bởi vì CÁC TÍN HIỆU KHÔNG DÂY không bị giới hạn bên trong một sợi dây cáp, bất kỳ THIẾT BỊ nào trong phạm vi của tín hiệu đều có thể nhận được lưu lượng.
- Trong CÁC MẠNG CÓ DÂY, lưu lượng thường chỉ được MÃ HÓA khi được gửi qua một MẠNG KHÔNG TIN CẬY chẳng hạn như INTERNET.
- Trong CÁC MẠNG KHÔNG DÂY, việc MÃ HÓA lưu lượng được gửi giữa CÁC MÁY KHÁCH KHÔNG DÂY và AP là CỰC KỲ quan trọng.

- Chúng ta sẽ tìm hiểu về BA KHÁI NIỆM CHÍNH:
    - XÁC THỰC (AUTHENTICATION).
    - MÃ HÓA (ENCRYPTION).
    - TÍNH TOÀN VẸN (INTEGRITY).

---

XÁC THỰC (AUTHENTICATION)

- Tất cả CÁC MÁY KHÁCH phải được XÁC THỰC trước khi chúng có thể liên kết với một AP.
- Trong môi trường công ty, chỉ CÁC NGƯỜI DÙNG / THIẾT BỊ ĐƯỢC TIN TƯỞNG mới được cấp QUYỀN TRUY CẬP vào MẠNG.
    - Trong môi trường doanh nghiệp, một SSID tách biệt không có QUYỀN TRUY CẬP vào MẠNG nội bộ có thể được cung cấp cho CÁC NGƯỜI DÙNG KHÁCH (GUEST USERS).
- Lý tưởng nhất là CÁC MÁY KHÁCH cũng nên XÁC THỰC AP để tránh liên kết với một AP độc hại.
- Có NHIỀU CÁCH ĐỂ XÁC THỰC:
    - MẬT KHẨU (PASSWORD).
    - TÊN NGƯỜI DÙNG / MẬT KHẨU (USERNAME / PASSWORD).
    - CÁC CHỨNG CHỈ (CERTIFICATES).

![image](https://github.com/psaumur/CCNA/assets/106411237/00d34740-8da7-428d-8b36-f8998ec2f0cd)

---

MÃ HÓA (ENCRYPTION)

- Lưu lượng được gửi giữa CÁC MÁY KHÁCH và CÁC AP nên được MÃ HÓA để không ai có thể đọc được ngoại trừ AP và MÁY KHÁCH đó.
- Có nhiều GIAO THỨC khả thi có thể được sử dụng để MÃ HÓA lưu lượng.
- Tất cả CÁC THIẾT BỊ trên mạng WLAN sẽ dùng chung một GIAO THỨC, tuy nhiên mỗi MÁY KHÁCH sẽ sử dụng một KHÓA MÃ HÓA / GIẢI MÃ (ENCRYPTION / DECRYPTION KEY) duy nhất để các THIẾT BỊ khác không thể đọc được lưu lượng của nó.
- Một “KHÓA NHÓM” (GROUP KEY) được AP sử dụng để MÃ HÓA lưu lượng mà nó muốn gửi tới tất cả các máy khách của mình.
    - Tất cả CÁC MÁY KHÁCH liên kết với AP đều giữ khóa đó để có thể GIẢI MÃ lưu lượng.

---

TÍNH TOÀN VẸN (INTEGRITY)

- Như đã giải thích trong video “CÁC NGUYÊN LÝ BẢO MẬT” của khóa học, TÍNH TOÀN VẸN đảm bảo rằng thông điệp không bị sửa đổi bởi một bên thứ ba.
- Thông điệp được gửi bởi MÁY CHỦ NGUỒN phải giống hệt với thông điệp được nhận bởi MÁY CHỦ ĐÍCH.
- Một mã MIC (Kiểm tra tính toàn vẹn của thông điệp - Message Integrity Check) được thêm vào thông điệp để giúp bảo vệ TÍNH TOÀN VẸN của chúng.

![image](https://github.com/psaumur/CCNA/assets/106411237/b632c321-36e5-4a03-b08c-d0a2c2e215da)

---

CÁC PHƯƠNG THỨC XÁC THỰC

Tiêu chuẩn 802.11 ban đầu bao gồm HAI TÙY CHỌN để XÁC THỰC:

- XÁC THỰC MỞ (OPEN AUTHENTICATION):
    - MÁY KHÁCH gửi một yêu cầu XÁC THỰC và AP chỉ đơn giản là chấp nhận nó.
    - Đây rõ ràng KHÔNG phải là một phương thức XÁC THỰC AN TOÀN.
    - Sau khi MÁY KHÁCH được XÁC THỰC và liên kết với AP, ta có thể yêu cầu NGƯỜI DÙNG XÁC THỰC qua các phương thức khác trước khi được cấp QUYỀN TRUY CẬP vào MẠNG (ví dụ: Wi-Fi của Starbucks).
- WEP (Wired Equivalent Privacy - Bảo mật tương đương mạng dây):
    - WEP được sử dụng để cung cấp cả XÁC THỰC và MÃ HÓA cho lưu lượng KHÔNG DÂY.
    - Để MÃ HÓA, WEP sử dụng THUẬT TOÁN RC4.
    - WEP là một GIAO THỨC “KHÓA CHIA SẺ” (SHARED-KEY), yêu cầu BÊN GỬI và BÊN NHẬN phải có cùng một KHÓA.
    - CÁC KHÓA WEP có thể có độ dài 40 bit hoặc 104 bit.
    - CÁC KHÓA trên được kết hợp với một mã “IV” (Véc-tơ khởi tạo - INITIALIZATION VECTOR) 24-bit để nâng tổng độ dài lên 64 bit hoặc 128 bit.
    - MÃ HÓA WEP KHÔNG AN TOÀN và có thể dễ dàng bị bẻ khóa.
    - WEP có thể được dùng để XÁC THỰC như sau:
    

![image](https://github.com/psaumur/CCNA/assets/106411237/86e4f243-1692-41a6-9b15-6b2e99942e50)

---

EAP (Extensible Authentication Protocol - Giao thức xác thực mở rộng)

- EAP là một KHUNG XÁC THỰC (AUTHENTICATION FRAMEWORK).
- Nó định nghĩa một BỘ CÁC CHỨC NĂNG XÁC THỰC TIÊU CHUẨN được sử dụng bởi các *PHƯƠNG THỨC EAP* khác nhau.
- Chúng ta sẽ xem xét BỐN PHƯƠNG THỨC EAP:
    - LEAP.
    - EAP-FAST.
    - PEAP.
    - EAP-TLS.
- EAP được tích hợp with **802.1X**, cung cấp hình thức *KIỂM SOÁT TRUY CẬP MẠNG DỰA TRÊN CỔNG* (PORT-BASED NETWORK ACCESS CONTROL).

**802.1X** được sử dụng để giới hạn QUYỀN TRUY CẬP MẠNG cho CÁC MÁY KHÁCH kết nối vào một mạng LAN hoặc WLAN cho đến khi chúng thực hiện XÁC THỰC.

Có **BA THỰC THỂ CHÍNH** trong 802.1X:

- SUPPLICANT (Bên yêu cầu xác thực): THIẾT BỊ muốn kết nối vào MẠNG.
- AUTHENTICATOR (Bên xác thực): THIẾT BỊ cung cấp quyền truy cập vào MẠNG.
- AUTHENTICATION SERVER (Máy chủ xác thực) (AS): THIẾT BỊ nhận thông tin định danh của MÁY KHÁCH và CHO PHÉP / TỪ CHỐI TRUY CẬP.

![image](https://github.com/psaumur/CCNA/assets/106411237/5565e646-696f-4245-b1e5-d728fe0e3380)

- LEAP (Lightweight EAP):
    - LEAP được phát triển bởi Cisco như một sự cải tiến so với WEP.
    - CÁC MÁY KHÁCH phải cung cấp TÊN NGƯỜI DÙNG và MẬT KHẨU để XÁC THỰC.
    - Thêm vào đó, việc *XÁC THỰC LẪN NHAU* (MUTUAL AUTHENTICATION) được cung cấp bởi cả MÁY KHÁCH và MÁY CHỦ thông qua việc gửi một cụm từ thử thách (challenge phrase) cho nhau.
    - CÁC KHÓA WEP ĐỘNG được sử dụng, nghĩa là CÁC KHÓA WEP được thay đổi thường xuyên.
    - Giống như WEP, LEAP bị coi là có lỗ hổng và không nên được sử dụng nữa.

![image](https://github.com/psaumur/CCNA/assets/106411237/0b9ecce2-4219-42d0-8275-086b92134cda)

- EAP-FAST (EAP FLEXIBLE AUTHENTICATION via SECURE TUNNELING - Xác thực linh hoạt qua đường hầm bảo mật):
    - EAP-FAST cũng được phát triển bởi Cisco.
    - Bao gồm BA GIAI ĐOẠN:
        - Một mã PAC (Thông tin xác thực truy cập được bảo vệ - PROTECTED ACCESS CREDENTIAL) được tạo ra và chuyển từ MÁY CHỦ tới MÁY KHÁCH.
        - Một ĐƯỜNG HẦM TLS BẢO MẬT được thiết lập giữa MÁY KHÁCH và MÁY CHỦ XÁC THỰC.
        - Bên trong ĐƯỜNG HẦM TLS BẢO MẬT (ĐÃ ĐƯỢC MÃ HÓA), MÁY KHÁCH và MÁY CHỦ liên lạc sâu hơn để XÁC THỰC / ỦY QUYỀN cho MÁY KHÁCH.
    

![image](https://github.com/psaumur/CCNA/assets/106411237/f17d6f7b-9f87-4cb2-be24-5d8c95dc0cfc)

- PEAP (PROTECTED EAP - EAP được bảo vệ):
    - Giống như EAP-FAST, PEAP liên quan đến việc thiết lập một ĐƯỜNG HẦM TLS BẢO MẬT giữa MÁY KHÁCH và MÁY CHỦ.
    - Thay vì dùng PAC, MÁY CHỦ có một CHỨNG CHỈ SỐ (DIGITAL CERTIFICATE).
    - MÁY KHÁCH sử dụng CHỨNG CHỈ SỐ này để XÁC THỰC MÁY CHỦ.
    - CHỨNG CHỈ này cũng được dùng để thiết lập một ĐƯỜNG HẦM TLS.
    - Bởi vì chỉ có MÁY CHỦ cung cấp CHỨNG CHỈ để xác thực, MÁY KHÁCH vẫn phải được XÁC THỰC bên trong ĐƯỜNG HẦM BẢO MẬT đó.
        - Ví dụ: MS-CHAP (Giao thức xác thực thử thách-bắt tay của Microsoft).

![image](https://github.com/psaumur/CCNA/assets/106411237/0f9babe7-d86f-49c8-b732-20f31ea26437)

- EAP-TLS (EAP TRANSPORT LAYER SECURITY - Bảo mật lớp truyền tải EAP):
    - Trong khi PEAP chỉ yêu cầu AS có một CHỨNG CHỈ, EAP-TLS yêu cầu một CHỨNG CHỈ trên AS và trên mỗi một MÁY KHÁCH duy nhất.
    - EAP-TLS là phương thức XÁC THỰC KHÔNG DÂY AN TOÀN NHẤT, nhưng nó khó triển khai hơn PEAP vì mọi THIẾT BỊ MÁY KHÁCH đều cần một CHỨNG CHỈ.
    - Bởi vì MÁY KHÁCH và MÁY CHỦ XÁC THỰC lẫn nhau bằng CÁC CHỨNG CHỈ SỐ, nên không cần phải XÁC THỰC MÁY KHÁCH bên trong ĐƯỜNG HẦM TLS nữa.
    - ĐƯỜNG HẦM TLS vẫn được sử dụng để trao đổi thông tin KHÓA MÃ HÓA (các phương thức mã hóa sẽ được thảo luận tiếp theo).

![image](https://github.com/psaumur/CCNA/assets/106411237/c6c57595-fd75-4761-8760-29fab8dbf698)

---

CÁC PHƯƠNG THỨC MÃ HÓA / TOÀN VẸN (ENCRYPTION / INTEGRITY METHODS)

- TKIP (Temporal Key Integrity Protocol - Giao thức tính toàn vẹn khóa tạm thời):
    - WEP đã bị phát hiện là có lỗ hổng, nhưng phần cứng KHÔNG DÂY vào thời điểm đó được chế tạo để dùng WEP.
    - Một giải pháp tạm thời đã được đưa ra cho đến khi một TIÊU CHUẨN mới được tạo ra và PHẦN CỨNG mới được chế tạo.
    - TKIP bổ sung thêm nhiều TÍNH NĂNG BẢO MẬT khác nhau:
        - Một mã MIC (Kiểm tra tính toàn vẹn của thông điệp) được thêm vào để bảo vệ tính toàn vẹn của các thông điệp.
        - Một THUẬT TOÁN TRỘN KHÓA (KEY MIXING ALGORITHM) được sử dụng để tạo ra một khóa WEP duy nhất cho mỗi khung tin.
        - Véc-tơ khởi tạo (INITIALIZATION VECTOR) được tăng gấp đôi độ dài từ 24 bit lên 48 bit, khiến các cuộc tấn công VÉT CẠN (BRUTE-FORCE) trở nên khó khăn hơn nhiều.
        - Mã MIC bao gồm ĐỊA CHỈ MAC CỦA NGƯỜI GỬI để định danh người gửi KHUNG TIN.
        - Một DẤU THỜI GIAN (TIMESTAMP) được thêm vào MIC để ngăn chặn các cuộc tấn công phát lại (replay attacks). Tấn công phát lại liên quan đến việc gửi lại một KHUNG TIN đã được truyền đi trước đó.
        - Một SỐ THỨ TỰ (SEQUENCE NUMBER) TKIP được dùng để theo dõi CÁC KHUNG TIN được gửi từ mỗi ĐỊA CHỈ MAC NGUỒN. Việc này cũng giúp chống lại CÁC CUỘC TẤN CÔNG PHÁT LẠI.

** Bạn có lẽ không cần phải ghi nhớ TẤT CẢ các tính năng trên.

** TKIP được sử dụng trong WPA phiên bản 1, sẽ được thảo luận ở phần tiếp theo.

- CCMP (Counter / CBC-MAC Protocol):
    - CCMP được phát triển sau TKIP và AN TOÀN hơn.
    - Nó được sử dụng trong chuẩn WPA2.
    - Để sử dụng CCMP, nó phải được hỗ trợ bởi phần cứng của THIẾT BỊ.
    - Phần cứng cũ chỉ được chế tạo để dùng WEP / TKIP sẽ không thể dùng được CCMP.
    - CCMP bao gồm HAI THUẬT TOÁN khác nhau để cung cấp việc MÃ HÓA và MIC :
        - MÃ HÓA CHẾ ĐỘ ĐẾM (COUNTER MODE) AES (Advanced Encryption Standard).
            - AES là GIAO THỨC MÃ HÓA AN TOÀN NHẤT hiện nay.
            - Được sử dụng rộng rãi trên toàn thế giới.
            - Có nhiều CHẾ ĐỘ hoạt động for AES.
            - CCMP sử dụng “CHẾ ĐỘ ĐẾM” (COUNTER MODE).
        - CBC-MAC (CIPHER BLOCK CHAINING MESSAGE AUTHENTICATION CODE - Mã xác thực thông điệp chuỗi khối mã hóa).
            - Được dùng làm MIC để ĐẢM BẢO TÍNH TOÀN VẸN CỦA CÁC THÔNG ĐIỆP.

- GCMP (GALOIS / COUNTER MODE PROTOCOL):
    - GCMP AN TOÀN và HIỆU QUẢ hơn so với CCMP.
    - Hiệu suất tăng lên của nó cho phép thông lượng dữ liệu cao hơn so với CCMP.
    - Nó được sử dụng trong chuẩn WPA3.
    - GCMP bao gồm HAI THUẬT TOÁN:
        - MÃ HÓA CHẾ ĐỘ ĐẾM AES.
        - GMAC (GALOIS MESSAGE AUTHENTICATION CODE - Mã xác thực thông điệp Galois).
            - Được dùng làm MIC để ĐẢM BẢO TÍNH TOÀN VẸN CỦA THÔNG ĐIỆP.

---

TRUY CẬP ĐƯỢC BẢO VỆ WI-FI (WPA - WI-FI PROTECTED ACCESS)

- Liên minh WI-FI đã phát triển BA CHỨNG NHẬN WPA cho CÁC THIẾT BỊ KHÔNG DÂY:
    - WPA.
    - WPA2.
    - WPA3.
- Để được CẤP CHỨNG NHẬN WPA, THIẾT BỊ phải được KIỂM TRA tại các phòng thí nghiệm kiểm tra được ủy quyền.
- Tất cả các chuẩn trên đều hỗ trợ HAI CHẾ ĐỘ XÁC THỰC:
    - CHẾ ĐỘ CÁ NHÂN (PERSONAL MODE):
        - Một KHÓA CHIA SẺ TRƯỚC (PSK - PRE-SHARED KEY) được dùng để XÁC THỰC.
        - Khi bạn kết nối vào một MẠNG WI-FI tại nhà, nhập MẬT KHẨU và được XÁC THỰC, đó chính là CHẾ ĐỘ CÁ NHÂN.
        - Cách này phổ biến trong CÁC MẠNG nhỏ.
        - Bản thân mã PSK KHÔNG được gửi qua sóng vô tuyến.
        - Một quy trình BẮT TAY BỐN BƯỚC (FOUR-WAY HANDSHAKE) được dùng để XÁC THỰC và mã PSK được dùng để TẠO RA CÁC KHÓA MÃ HÓA.
    - CHẾ ĐỘ DOANH NGHIỆP (ENTERPRISE MODE):
        - 802.1X được sử dụng với một MÁY CHỦ XÁC THỰC (RADIUS SERVER).
        - Không có PHƯƠNG THỨC EAP cụ thể nào được quy định, nên tất cả đều được hỗ trợ (PEAP, EAP-TLS, v.v.).
    
    WPA
    
    - CHỨNG NHẬN WPA được phát triển sau khi WEP bị chứng minh là có lỗ hổng và bao gồm các GIAO THỨC sau:
        - TKIP (dựa trên WEP) cung cấp MÃ HÓA / MIC.
        - XÁC THỰC 802.1X (CHẾ ĐỘ DOANH NGHIỆP) hoặc PSK (CHẾ ĐỘ CÁ NHÂN).
    
    WPA2
    
    - Được phát hành vào năm 2004 và bao gồm các GIAO THỨC sau:
        - CCMP cung cấp MÃ HÓA / MIC.
        - XÁC THỰC 802.1X (CHẾ ĐỘ DOANH ENTRERPRISE) hoặc PSK (CHẾ ĐỘ CÁ NHÂN).
    
    WPA3
    
    - Được phát hành vào năm 2018 và bao gồm các GIAO THỨC sau:
        - GCMP cung cấp MÃ HÓA / MIC.
        - XÁC THỰC 802.1X (CHẾ ĐỘ DOANH NGHIỆP) hoặc PSK (CHẾ ĐỘ CÁ NHÂN).
        
        - WPA3 cũng cung cấp một số tính năng bảo mật bổ sung:
            - PMF (CÁC KHUNG TIN QUẢN LÝ ĐƯỢC BẢO VỆ - PROTECTED MANAGEMENT FRAMES).
                - Bảo vệ CÁC KHUNG TIN QUẢN LÝ 802.11 khỏi bị nghe lén / giả mạo.
            - SAE (XÁC THỰC ĐỒNG THỜI CÁC THỰC THỂ TƯƠNG ĐƯƠNG - SIMULTANEOUS AUTHENTICATION OF EQUALS).
                - Bảo vệ quy trình bắt tay bốn bước khi sử dụng XÁC THỰC CHẾ ĐỘ CÁ NHÂN.
            - TÍNH BÍ MẬT TIẾN SAU (FORWARD SECRECY).
                - Ngăn chặn DỮ LIỆU bị GIẢI MÃ sau khi nó đã được truyền qua sóng vô tuyến để kẻ TẤN CÔNG không thể bắt CÁC KHUNG TIN KHÔNG DÂY rồi sau đó cố gắng GIẢI MÃ chúng sau này.
