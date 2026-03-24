# 48. CÁC NGUYÊN LÝ CƠ BẢN VỀ BẢO MẬT (SECURITY FUNDAMENTALS)

CÁC KHÁI NIỆM BẢO MẬT CHÍNH

TẠI SAO CẦN BẢO MẬT?

Mục đích / mục tiêu của VIỆC BẢO MẬT trong một DOANH NGHIỆP là gì?

- Các nguyên tắc của MÔ HÌNH CIA (CIA TRIAD) tạo nên NỀN TẢNG của BẢO MẬT:
    - TÍNH BẢO MẬT (CONFIDENTIALITY)
        - Chỉ NHỮNG NGƯỜI DÙNG ĐƯỢC ỦY QUYỀN mới có thể TRUY CẬP DỮ LIỆU.
        - Một số THÔNG TIN / DỮ LIỆU là CÔNG KHAI và bất kỳ ai cũng có thể truy cập.
        - Một số THÔNG TIN / DỮ LIỆU là BÍ MẬT và chỉ những người CỤ THỂ mới được phép truy cập.
    - TÍNH TOÀN VẸN (INTEGRITY)
        - DỮ LIỆU không bị thay đổi (chỉnh sửa) bởi những NGƯỜI DÙNG không được ủy quyền.
        - DỮ LIỆU phải CHÍNH XÁC và ĐÁNG TIN CẬY (AUTHENTIC).
    - TÍNH KHẢ DỤNG (AVAILABILITY)
        - MẠNG LƯỚI / HỆ THỐNG BẢO MẬT phải luôn HOẠT ĐỘNG và CÓ THỂ TRUY CẬP được đối với những NGƯỜI DÙNG ĐƯỢC ỦY QUYỀN.

NHỮNG KẺ TẤN CÔNG có thể đe dọa TÍNH BẢO MẬT, TÍNH TOÀN VẸN và TÍNH KHẢ DỤNG của CÁC HỆ THỐNG và THÔNG TIN trong doanh nghiệp.

---

LỖ HỔNG, KHAI THÁC, MỐI ĐE DỌA, GIẢM THIỂU (VULNERABILITY, EXPLOIT, THREAT, MITIGATION)

- MỘT LỖ HỔNG (VULNERABILITY) là bất kỳ điểm yếu tiềm tàng nào có thể làm tổn hại đến mô hình CIA của một HỆ THỐNG / THÔNG TIN.
    - Một điểm yếu tiềm tàng tự thân nó không phải là một vấn đề.
- VIỆC KHAI THÁC (AN EXPLOIT) là một thứ gì đó có khả năng được sử dụng để lợi dụng lỗ hổng bảo mật.
    - Một thứ có *tiềm năng* được dùng để khai thác tự thân nó không phải là một vấn đề.

- MỘT MỐI ĐE DỌA (A THREAT) là khả năng một LỖ HỔNG bị KHAI THÁC.
    - Một hacker KHAI THÁC một LỖ HỔNG trong hệ thống của bạn chính là một MỐI ĐE DỌA.

- MỘT KỸ THUẬT GIẢM THIỂU (A MITIGATION TECHNIQUE) là một phương pháp có thể bảo vệ chống lại các mối đe dọa.
    - Nên được triển khai ở mọi nơi mà một LỖ HỔNG có thể bị KHAI THÁC:
        - Các thiết bị khách (Client Devices).
        - Máy chủ, Switch, Router, Tường lửa (Firewalls).
        - v.v.

```
💡 KHÔNG CÓ HỆ THỐNG NÀO LÀ BẢO MẬT TUYỆT ĐỐI!
```

---

CÁC KIỂU TẤN CÔNG PHỔ BIẾN

- Tấn công DoS (Từ chối dịch vụ - Denial of Service).
- Tấn công Giả mạo (Spoofing).
- Tấn công Phản xạ / Khuếch đại (Reflection / Amplification).
- Tấn công Xen giữa (Man-in-the-Middle).
- Tấn công Trinh sát (Reconnaissance).
- Phần mềm độc hại (Malware).
- Tấn công Phi kỹ thuật (Social Engineering).
- Các cuộc tấn công liên quan đến Mật khẩu.

Tấn công DoS (Từ chối dịch vụ - Denial of Service)

- CÁC cuộc tấn công DoS đe dọa TÍNH KHẢ DỤNG của HỆ THỐNG.
- Một kiểu tấn công DoS phổ biến là TCP SYN Flood.
    - Bắt tay ba bước TCP (TCP Three-Way Handshake) : SYN | SYN-ACK | ACK.
    - KẺ TẤN CÔNG gửi vô số thông điệp TCP SYN tới MỤC TIÊU.
    - MỤC TIÊU gửi lại thông điệp SYN-ACK để phản hồi cho mỗi gói SYN nó nhận được.
    - KẺ TẤN CÔNG không bao giờ trả lời bằng gói ACK cuối cùng của quy trình Bắt tay ba bước TCP.
    - Các kết nối chưa hoàn tất sẽ làm đầy bảng kết nối TCP của MỤC TIÊU.
    - KẺ TẤN CÔNG tiếp tục gửi các thông điệp SYN.
    - MỤC TIÊU không còn khả năng thực hiện các kết nối TCP hợp lệ nữa.

![image](https://github.com/psaumur/CCNA/assets/106411237/5b04eea4-c53a-48b7-9683-952c9b27c9db)

- Trong một cuộc tấn công DDoS (Từ chối dịch vụ phân tán - Distributed Denial of Service), KẺ TẤN CÔNG lây nhiễm PHẦN MỀM ĐỘC HẠI lên nhiều máy tính và sử dụng chúng để khởi xướng một cuộc tấn công Từ chối dịch vụ.
- Nhóm máy tính bị lây nhiễm này được gọi là một MẠNG MÁY TÍNH MA (BOTNET).

Ví dụ: Một cuộc tấn công TCP SYN Flood

![image](https://github.com/psaumur/CCNA/assets/106411237/fc394c8d-33f4-4fd4-84a0-3e49caa9c158)

---

CÁC CUỘC TẤN CÔNG GIẢ MẠO (SPOOFING ATTACKS)

- GIẢ MẠO (SPOOF) một ĐỊA CHỈ là sử dụng một ĐỊA CHỈ NGUỒN GIẢ (IP hoặc MAC).
- Rất nhiều cuộc tấn công liên quan đến việc giả mạo; nó không phải là một kiểu tấn công DUY NHẤT.
- Một ví dụ là cuộc tấn công CẠN KIỆT DHCP (DHCP EXHAUSTION).
- KẺ TẤN CÔNG sử dụng CÁC ĐỊA CHỈ MAC giả mạo để làm tràn ngập các thông điệp DHCP Discover.
- NHÓM ĐỊA CHỈ (POOL) DHCP của máy chủ mục tiêu bị lấp đầy, dẫn đến việc Từ chối dịch vụ đối với CÁC THIẾT BỊ khác.

![image](https://github.com/psaumur/CCNA/assets/106411237/c539c50b-1be0-42f9-8ce3-fbeb47ea2034)

---

TẤN CÔNG PHẢN XẠ / KHUẾCH ĐẠI (REFLECTION / AMPLIFICATION ATTACKS)

- Trong một cuộc tấn công PHẢN XẠ, KẺ TẤN CÔNG gửi lưu lượng tới một *vật phản xạ (reflector)*, và giả mạo NGUỒN của GÓI TIN bằng ĐỊA CHỈ IP CỦA MỤC TIÊU.
- *Vật phản xạ* (ví dụ: một Máy chủ DNS) gửi phản hồi tới ĐỊA CHỈ IP CỦA MỤC TIÊU.
- Nếu lượng lưu lượng được gửi tới MỤC TIÊU đủ lớn, điều này có thể dẫn đến việc Từ chối dịch vụ.

- Một cuộc tấn công PHẢN XẠ trở thành tấn công KHUẾCH ĐẠI khi lượng lưu lượng do KẺ TẤN CÔNG gửi đi là nhỏ nhưng nó kích hoạt một lượng lưu lượng LỚN được gửi từ *vật phản xạ* tới MỤC TIÊU.

![image](https://github.com/psaumur/CCNA/assets/106411237/34ca977d-9884-4aeb-b99a-9f3677ba17fa)

---

TẤN CÔNG XEN GIỮA (MAN-IN-THE-MIDDLE ATTACKS)

- Trong một cuộc tấn công XEN GIỮA, KẺ TẤN CÔNG tự đặt mình vào giữa NGUỒN và ĐÍCH để nghe lén các cuộc liên lạc, hoặc để chỉnh sửa lưu lượng trước khi nó tới được ĐÍCH.
- Một ví dụ phổ biến là GIẢ MẠO ARP (ARP SPOOFING), còn được gọi là ĐẦU ĐỘC ARP (ARP POISONING).
- Một MÁY TRẠM gửi một yêu cầu ARP REQUEST, hỏi về ĐỊA CHỈ MAC của một THIẾT BỊ khác.
- MỤC TIÊU của yêu cầu gửi lại một phản hồi ARP REPLY, thông báo cho người yêu cầu về ĐỊA CHỈ MAC của nó.
- KẺ TẤN CÔNG chờ đợi và gửi một phản hồi ARP REPLY khác sau phản hồi hợp lệ kia.

![image](https://github.com/psaumur/CCNA/assets/106411237/86cee6cd-845a-4732-bfec-4cfe18101322)

- Trong bảng ARP của PC1, mục nhập cho địa chỉ 10.0.0.1 sẽ chứa ĐỊA CHỈ MAC CỦA KẺ TẤN CÔNG.
- Khi PC1 cố gắng gửi lưu lượng tới SRV1, nó sẽ bị chuyển tiếp tới KẺ TẤN CÔNG thay thế.
- KẺ TẤN CÔNG có thể kiểm tra các thông điệp, và sau đó chuyển tiếp chúng tới SRV1.
- KẺ TẤN CÔNG cũng có thể chỉnh sửa các thông điệp trước khi chuyển tiếp chúng tới SRV1.
- Điều này làm tổn hại TÍNH BẢO MẬT và TÍNH TOÀN VẸN của cuộc liên lạc giữa PC1 và SRV1.

![image](https://github.com/psaumur/CCNA/assets/106411237/07ebfebd-0686-436a-8990-853e3fee4377)

---

CÁC CUỘC TẤN CÔNG TRINH SÁT (RECONNAISSANCE ATTACKS)

- CÁC CUỘC TẤN CÔNG TRINH SÁT tự thân nó không phải là các cuộc tấn công nhưng chúng được sử dụng để thu thập thông tin về một MỤC TIÊU nhằm phục vụ cho một cuộc tấn công trong tương lai.
- Đây thường là những thông tin công khai có sẵn.
- Ví dụ: dùng lệnh `nslookup` để biết ĐỊA CHỈ IP của một trang web.

![image](https://github.com/psaumur/CCNA/assets/106411237/6e63b09d-a768-4cb3-ac06-87ad41d45c38)

- Hoặc một truy vấn WHOIS để biết các địa chỉ email, số điện thoại, địa chỉ vật lý, v.v.

---

PHẦN MỀM ĐỘC HẠI (MALWARE)

- MALWARE (MALICIOUS SOFTWARE - Phần mềm độc hại) đề cập đến nhiều loại chương trình gây hại có thể lây nhiễm vào máy tính.
- VIRUS lây nhiễm vào các phần mềm khác (một ‘chương trình vật chủ’).
    - VIRUS lây lan khi phần mềm đó được chia sẻ bởi NGƯỜI DÙNG. Thông thường, chúng LÀM HỎNG hoặc CHỈNH SỬA các tệp tin trên máy tính MỤC TIÊU.
- SÂU MÁY TÍNH (WORMS) không yêu cầu chương trình vật chủ. Chúng là phần mềm độc hại độc lập và có khả năng tự lây lan mà không cần sự tương tác của người dùng. Sự lây lan của SÂU MÁY TÍNH có thể làm tắc nghẽn MẠNG LƯỚI nhưng ‘payload’ (mã độc) của một con SÂU có thể gây thêm tác hại cho CÁC THIẾT BỊ MỤC TIÊU.

- NGỰA TROJAN (TROJAN HORSES) là phần mềm gây hại được ngụy trang dưới dạng phần mềm HỢP LỆ. Chúng lây lan thông qua tương tác của người dùng như mở các tệp đính kèm email, tải xuống một tệp tin từ Internet.

Các loại PHẦN MỀM ĐỘC HẠI trên có thể khai thác nhiều LỖ HỔNG khác nhau để đe dọa bất kỳ thành phần nào trong mô hình CIA của một THIẾT BỊ MỤC TIÊU.

** Có RẤT NHIỀU loại PHẦN MỀM ĐỘC HẠI khác nhau.

---

TẤN CÔNG PHI KỸ THUẬT (SOCIAL ENGINEERING ATTACKS)

- CÁC CUỘC TẤN CÔNG PHI KỸ THUẬT nhắm vào phần dễ bị tổn thương nhất của BẤT KỲ hệ thống nào - CON NGƯỜI!
- Chúng liên quan đến việc thao túng tâm lý để khiến MỤC TIÊU tiết lộ thông tin bí mật hoặc thực hiện một hành động nào đó.

- PHISHING (Lừa đảo qua mạng) thường liên quan đến các email giả mạo trông giống như đến từ một doanh nghiệp hợp pháp (Amazon, ngân hàng, công ty thẻ tín dụng, v.v.) và chứa các liên kết đến một trang web giả mạo trông có vẻ như thật. Người dùng được yêu cầu đăng nhập vào trang web giả mạo đó, từ đó cung cấp thông tin đăng nhập cho kẻ tấn công.
    - SPEAR PHISHING (Lừa đảo có mục tiêu) là một dạng phishing tập trung hơn, ví dụ: nhắm vào nhân viên của một công ty cụ thể.
    - WHALING (Tấn công cá lớn) là một cuộc tấn công phishing nhắm vào các cá nhân cấp cao, ví dụ: chủ tịch công ty.
- VISHING (Thoại lừa đảo - Voice Phishing) là hành vi lừa đảo được thực hiện qua điện thoại.

- SMISHING (SMS Phishing) là hành vi lừa đảo sử dụng tin nhắn văn bản SMS.

- Tấn công WATERING HOLE (Hố nước) làm tổn hại các trang web mà nạn nhân MỤC TIÊU thường xuyên truy cập. Nếu một liên kết độc hại được đặt trên một trang web mà MỤC TIÊU tin tưởng, họ có thể sẽ không ngần ngại mà nhấp vào nó.
- Tấn công TAILGATING (Đi theo đuôi) liên quan đến việc đi vào các khu vực hạn chế, được bảo vệ bằng cách đơn giản là đi bộ ngay sau một người được ủy quyền khi họ đi vào. Thường thì MỤC TIÊU sẽ giữ cửa mở cho KẺ TẤN CÔNG vì lịch sự, giả định rằng KẺ TẤN CÔNG cũng được phép đi vào.

---

CÁC CUỘC TẤN CÔNG LIÊN QUAN ĐẾN MẬT KHẨU

- Hầu hết các hệ thống sử dụng kết hợp TÊN ĐĂNG NHẬP / MẬT KHẨU (USERNAME / PASSWORD) để XÁC THỰC người dùng.
- TÊN ĐĂNG NHẬP thường đơn giản / dễ đoán (ví dụ: địa chỉ email của người dùng) và người ta trông chờ vào độ mạnh cũng như tính bí mật của mật khẩu để cung cấp sự bảo mật cần thiết.
- NHỮNG KẺ TẤN CÔNG có thể biết được mật khẩu của người dùng thông qua nhiều phương pháp:
    - Đoán (Guessing).
    - TẤN CÔNG TỪ ĐIỂN (DICTIONARY ATTACK):
        - Một chương trình chạy qua một ‘từ điển’ hoặc danh sách các từ / mật khẩu phổ biến để tìm ra mật khẩu của MỤC TIÊU.
    - TẤN CÔNG VÉT CẠN (BRUTE FORCE ATTACK):
        - Một chương trình thử mọi tổ hợp có thể của các chữ cái, con số và ký tự đặc biệt để tìm ra mật khẩu của MỤC TIÊU.

- CÁC MẬT KHẨU MẠNH nên bao gồm:
    - Ít NHẤT 8 ký tự (tốt nhất là nhiều hơn).
    - Một sự pha trộn giữa chữ HOA và chữ thường.
    - Một sự pha trộn giữa CHỮ CÁI và CON SỐ.
    - Một hoặc nhiều KÝ TỰ ĐẶC BIỆT (# @ ! ? v.v.).
    - Nên được THAY ĐỔI THƯỜNG XUYÊN.

---

MẬT KHẨU / XÁC THỰC ĐA YẾU TỐ (MFA - MULTI-FACTOR AUTHENTICATION)

- XÁC THỰC ĐA YẾU TỐ liên quan đến việc cung cấp nhiều thứ hơn là chỉ một TÊN ĐĂNG NHẬP / MẬT KHẨU để chứng minh danh tính của bạn.
- Nó thường liên quan đến việc cung cấp HAI trong số những điều sau đây (= Xác thực hai yếu tố - Two-Factor Authentication):
    - ĐIỀU BẠN BIẾT (SOMETHING YOU KNOW):
        - Một sự kết hợp TÊN ĐĂNG NHẬP / MẬT KHẨU, một mã PIN, v.v.
        
    - ĐIỀU BẠN CÓ (SOMETHING YOU HAVE):
        - Nhấn vào một thông báo xuất hiện trên điện thoại của bạn, một thẻ nhân viên được quét, v.v.
    
    - ĐIỀU THUỘC VỀ BẠN / CON NGƯỜI BẠN (SOMETHING YOU ARE):
        - Sinh trắc học như quét khuôn mặt, quét lòng bàn tay, quét dấu vân tay, quét võng mạc, v.v.

- Yêu cầu nhiều yếu tố XÁC THỰC sẽ làm tăng đáng kể tính bảo mật. Ngay cả khi KẺ TẤN CÔNG biết được MẬT KHẨU của MỤC TIÊU (ĐIỀU BẠN BIẾT), họ vẫn sẽ không thể đăng nhập vào tài khoản của MỤC TIÊU.

---

CHỨNG CHỈ SỐ (DIGITAL CERTIFICATES)

- CHỨNG CHỈ SỐ là một hình thức XÁC THỰC khác được sử dụng để chứng minh danh tính của người giữ chứng chỉ.
- chúng được sử dụng cho các trang web để xác minh rằng trang web đang được truy cập là hợp pháp.
- Các thực thể muốn có chứng chỉ để chứng minh danh tính của mình sẽ gửi một yêu cầu CSR (Yêu cầu ký chứng chỉ - CERTIFICATE SIGNING REQUEST) tới một CA (Cơ quan chứng thực - CERTIFICATE AUTHORITY), nơi sẽ tạo và ký chứng chỉ đó.

---

KIỂM SOÁT VÀ THEO DÕI NGƯỜI DÙNG VỚI AAA

- AAA (Triple-A) đại diện cho XÁC THỰC (AUTHENTICATION), ỦY QUYỀN (AUTHORIZATION), và GHI CHÉP/KIỂM TOÁN (ACCOUNTING).
- Nó là một khung công việc để kiểm soát và theo dõi người dùng của một hệ thống máy tính (ví dụ: một mạng lưới).

- XÁC THỰC (AUTHENTICATION)
    - Quy trình xác minh danh tính của một người dùng.
    - Đăng nhập = XÁC THỰC.
- ỦY QUYỀN (AUTHORIZATION)
    - Quy trình cấp cho người dùng quyền truy cập và các quyền hạn phù hợp.
    - Cấp cho người dùng quyền truy cập vào một số tệp tin / dịch vụ, hạn chế truy cập vào các tệp tin / dịch vụ khác = ỦY QUYỀN.

- GHI CHÉP / KIỂM TOÁN (ACCOUNTING)
    - Quy trình ghi lại các hoạt động của người dùng trên hệ thống.
    - Việc ghi lại nhật ký khi một người dùng thực hiện thay đổi đối với một tệp tin = GHI CHÉP.

- Các doanh nghiệp thường sử dụng một máy chủ AAA để cung cấp các dịch vụ AAA.
    - ISE (Identity Services Engine) là máy chủ AAA của Cisco.

- Các Máy chủ AAA thường hỗ trợ HAI Giao thức AAA sau đây:
    - RADIUS: Giao thức tiêu chuẩn mở.
        - Sử dụng CÁC CỔNG UDP 1812 và 1813.
        
    - TACACS+: Giao thức độc quyền của Cisco.
        - Sử dụng CỔNG TCP 49.

```
💡 ĐỐI VỚI KỲ THI CCNA, HÃY CẦN BIẾT SỰ KHÁC BIỆT GIỮA XÁC THỰC, ỦY QUYỀN VÀ GHI CHÉP.
```

---

CÁC THÀNH PHẦN CỦA CHƯƠNG TRÌNH BẢO MẬT

- CÁC CHƯƠNG TRÌNH NÂNG CAO NHẬN THỨC NGƯỜI DÙNG (USER AWARENESS PROGRAMS) được thiết kế để giúp nhân viên nhận thức được các rủi ro và mối đe dọa bảo mật tiềm tàng.
- CÁC CHƯƠNG TRÌNH ĐÀO TẠO NGƯỜI DÙNG (USER TRAINING PROGRAMS) mang tính chính thức hơn so với các CHƯƠNG TRÌNH NÂNG CAO NHẬN THỨC.
- KIỂM SOÁT TRUY CẬP VẬT LÝ (PHYSICAL ACCESS CONTROL) bảo vệ thiết bị và dữ liệu khỏi những kẻ tấn công tiềm tàng bằng cách chỉ cho phép những người dùng được ủy quyền đi vào các khu vực được bảo vệ như PHÒNG THIẾT BỊ MẠNG (NETWORK CLOSETS) hoặc CÁC TẦNG TRUNG TÂM DỮ LIỆU.
