# 43. FTP và TFTP

MỤC ĐÍCH CỦA FTP / TFTP

- FTP (File Transfer Protocol - Giao thức Truyền tệp) và TFTP (Trivial File Transfer Protocol - Giao thức Truyền tệp Đơn giản) là các GIAO THỨC TIÊU CHUẨN CÔNG NGHIỆP được sử dụng để TRUYỀN TẢI CÁC TỆP TIN qua MẠNG.
- CẢ HAI đều sử dụng mô hình MÁY KHÁCH - MÁY CHỦ (CLIENT-SERVER).
    - CÁC MÁY KHÁCH có thể sử dụng FTP / TFTP để SAO CHÉP các tệp TỪ một MÁY CHỦ.
    - CÁC MÁY KHÁCH có thể sử dụng FTP / TFTP để SAO CHÉP các tệp TỚI một MÁY CHỦ.
- Với tư cách là một KỸ SƯ MẠNG, công dụng phổ biến nhất của FTP / TFTP là trong quá trình NÂNG CẤP HỆ ĐIỀU HÀNH của một THIẾT BỊ MẠNG.
- Bạn có thể sử dụng FTP / TFTP để TẢI XUỐNG phiên bản IOS mới hơn từ MÁY CHỦ và sau đó KHỞI ĐỘNG LẠI THIẾT BỊ với hình ảnh IOS mới đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/c3f8288f-cc21-476b-ab36-685fa843f947)

---

CHỨC NĂNG VÀ SỰ KHÁC BIỆT GIỮA TFTP VÀ FTP

TFTP

- TFTP được tiêu chuẩn hóa lần đầu tiên vào năm 1981.
- Được gọi là “Trivial” (Đơn giản/Tầm thường) vì nó ĐƠN GIẢN và chỉ có các tính năng cơ bản so với FTP.
    - Chỉ cho phép MÁY KHÁCH SAO CHÉP CÁC TỆP TIN tới / từ một MÁY CHỦ.
- Được phát hành sau FTP, nhưng không phải là sự THAY THẾ cho FTP.
    - Nó là một công cụ khác để sử dụng khi SỰ ĐƠN GIẢN NHẸ NHÀNG quan trọng hơn TÍNH NĂNG.
- KHÔNG CÓ XÁC THỰC (Tên người dùng / Mật khẩu) nên CÁC MÁY CHỦ sẽ phản hồi TẤT CẢ CÁC YÊU CẦU FTP.
- KHÔNG CÓ MÃ HÓA. Tất cả DỮ LIỆU được gửi dưới dạng VĂN BẢN THUẦN TÚY.
- Tốt nhất nên dùng trong một môi trường ĐƯỢC KIỂM SOÁT để truyền các TỆP TIN NHỎ một cách nhanh chóng.
- CÁC MÁY CHỦ TFTP lắng nghe trên Cổng UDP 69.
- UDP là giao thức KHÔNG HƯỚNG KẾT NỐI và không cung cấp ĐỘ TIN CẬY bằng việc TRUYỀN LẠI.
- Tuy nhiên, bản thân giao thức TFTP CÓ CÁC TÍNH NĂNG tương tự được tích hợp sẵn.

ĐỘ TIN CẬY CỦA TFTP

- Mọi thông điệp DỮ LIỆU TFTP đều được XÁC NHẬN (ACKNOWLEDGED).
    - Nếu MÁY KHÁCH đang truyền một TỆP TIN TỚI MÁY CHỦ, MÁY CHỦ sẽ gửi các thông điệp ACK.
    - Nếu MÁY CHỦ đang truyền một TỆP TIN TỚI MÁY KHÁCH, MÁY KHÁCH sẽ gửi các thông điệp ACK.
- Các bộ đếm THỜI GIAN được sử dụng, và nếu một thông điệp mong đợi không được nhận kịp thời, thiết bị đang chờ sẽ GỬI LẠI thông điệp trước đó của nó.

![image](https://github.com/psaumur/CCNA/assets/106411237/6b8f914e-0d8f-4cfd-bbbb-3552b5cebb3e)

“KẾT NỐI” TFTP

![image](https://github.com/psaumur/CCNA/assets/106411237/d6634813-5132-4fd8-a712-7bc7b4ea21db)

TFTP TID (Không có trong kỳ thi CCNA)

- Khi MÁY KHÁCH gửi thông điệp ĐẦU TIÊN tới MÁY CHỦ, Cổng ĐÍCH là UDP 69 và Cổng NGUỒN là một CỔNG TẠM THỜI (EPHEMERAL PORT) ngẫu nhiên.
- “Cổng ngẫu nhiên” này được gọi là “ĐỊNH DANH TRUYỀN TẢI” (TRANSFER IDENTIFIER - TID) và nó xác định quá trình TRUYỀN DỮ LIỆU.
- MÁY CHỦ sau đó cũng chọn một TID NGẪU NHIÊN để sử dụng làm CỔNG NGUỒN khi phản hồi, CHỨ KHÔNG PHẢI là Cổng UDP 69.
- Khi MÁY KHÁCH gửi thông điệp TIẾP THEO, Cổng ĐÍCH sẽ là TID CỦA MÁY CHỦ, CHỨ KHÔNG PHẢI là Cổng UDP 69.

Cổng UDP 69 (TFTP) chỉ được sử dụng ở thông điệp yêu cầu ban đầu.

![image](https://github.com/psaumur/CCNA/assets/106411237/5976c631-4cba-4449-a2b4-912f90cb66e1)

--- 

FTP

- FTP được tiêu chuẩn hóa lần đầu tiên vào năm 1971.
- FTP sử dụng các Cổng TCP 20 và 21.
- TÊN NGƯỜI DÙNG và MẬT KHẨU được sử dụng để XÁC THỰC, tuy nhiên KHÔNG có MÃ HÓA.
- Để bảo mật CAO HƠN, có thể sử dụng FTPS (FTP qua SSL / TLS) (Bản nâng cấp cho FTP).
- Giao thức Truyền tệp SSH (SFTP) cũng có thể được sử dụng để có bảo mật CAO HƠN (Giao thức mới).
- FTP phức tạp HƠN TFTP và không chỉ cho phép TRUYỀN TỆP mà CÁC MÁY KHÁCH còn có thể:
    - Điều hướng các THƯ MỤC TỆP TIN.
    - THÊM / XÓA CÁC TỆP TIN.
    - LIỆT KÊ CÁC TỆP TIN.
    - v.v…
- MÁY KHÁCH gửi các *lệnh (commands)* FTP tới MÁY CHỦ để thực hiện các chức năng này.

CÁC KẾT NỐI ĐIỀU KHIỂN FTP

- FTP sử dụng HAI LOẠI kết nối:
    - Một kết nối ĐIỀU KHIỂN FTP (TCP 21) được thiết lập và sử dụng để gửi các lệnh và phản hồi FTP.
    - Khi CÁC TỆP TIN hoặc DỮ LIỆU chuẩn bị được truyền đi, các kết nối DỮ LIỆU FTP (TCP 20) riêng biệt sẽ được thiết lập và ngắt đi khi cần thiết.

![image](https://github.com/psaumur/CCNA/assets/106411237/8ff1d9a5-785b-4fb4-86a4-766c1107812f)

CÁC KẾT NỐI DỮ LIỆU FTP Ở CHẾ ĐỘ CHỦ ĐỘNG (ACTIVE MODE)

- Phương pháp mặc định để thiết lập các kết nối DỮ LIỆU FTP là CHẾ ĐỘ CHỦ ĐỘNG (ACTIVE MODE), trong đó MÁY CHỦ sẽ khởi tạo kết nối TCP.

![image](https://github.com/psaumur/CCNA/assets/106411237/49909dbc-1ed5-425b-8958-03fcaf5b9eab)

- Ở CHẾ ĐỘ BỊ ĐỘNG (PASSIVE MODE), MÁY KHÁCH sẽ khởi tạo kết nối DỮ LIỆU.
    - Điều này thường cần thiết khi MÁY KHÁCH nằm sau một TƯỜNG LỬA (FIREWALL), vốn có thể CHẶN KẾT NỐI ĐI VÀO từ MÁY CHỦ.

![image](https://github.com/psaumur/CCNA/assets/106411237/5872df1c-b97f-4f61-b0da-6a06e7f69f1a)

SO SÁNH FTP VỚI TFTP

![image](https://github.com/psaumur/CCNA/assets/106411237/e7c11655-61be-40f0-943c-8c51998dc2e2)

---

HỆ THỐNG TỆP TIN CỦA IOS (IOS FILE SYSTEMS)

- Một HỆ THỐNG TỆP TIN là một cách kiểm soát cách DỮ LIỆU được LƯU TRỮ và TRUY XUẤT.
- Bạn có thể XEM HỆ THỐNG TỆP TIN của một thiết bị Cisco IOS bằng lệnh `show file systems`.

![image](https://github.com/psaumur/CCNA/assets/106411237/eb6e12b6-3c34-4e05-93cb-e4368764da74)

---

SỬ DỤNG FTP / TFTP TRONG IOS

- Bạn có thể XEM phiên bản IOS hiện tại bằng lệnh `show version`.

![image](https://github.com/psaumur/CCNA/assets/106411237/746859c5-d89d-42f5-b198-d0cba7f3682d)

- Bạn có thể XEM nội dung của bộ nhớ flash bằng lệnh `show flash`.

![image](https://github.com/psaumur/CCNA/assets/106411237/d131b08c-572d-46b3-8910-0d423b85dc94)

---

SAO CHÉP TỆP TIN BẰNG TFTP

BƯỚC 1

![image](https://github.com/psaumur/CCNA/assets/106411237/f0ce7ea9-115e-4db8-9baf-55ee1bf0d548)

BƯỚC 2

![image](https://github.com/psaumur/CCNA/assets/106411237/9be3610d-3e22-476f-ab90-117ba7d93cf0)

BƯỚC 3

![image](https://github.com/psaumur/CCNA/assets/106411237/604528f7-af5d-44a4-a877-c9d82d7910d1)

---

SAO CHÉP TỆP TIN BẰNG FTP

BƯỚC 1

![image](https://github.com/psaumur/CCNA/assets/106411237/0e9c1dc5-0dce-4cbb-b584-0509c2119f63)

BƯỚC 2 và 3 giống hệt như TFTP phía trên

---

TỔNG KẾT CÁC CÂU LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/e5f525cd-6e98-4501-9e7c-1c1f4af1d23e)
