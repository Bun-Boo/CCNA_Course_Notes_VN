# 4. GIỚI THIỆU VỀ GIAO DIỆN DÒNG LỆNH (CLI)

### CLI là gì?

- "Command-line Interface" - Giao diện dòng lệnh.
- Giao diện bạn sử dụng để cấu hình các thiết bị Cisco.

GUI là "Graphical User Interface" - Giao diện người dùng đồ họa.

### Làm thế nào để kết nối tới thiết bị Cisco?

- Cổng Console (Console Port): Khi bạn cấu hình thiết bị lần đầu, bạn phải kết nối qua Cổng Console.

Bạn có thể sử dụng cáp "Rollover": đầu nối DB9 sang RJ45 HOẶC đầu nối DB9 Serial sang USB.

![image](https://github.com/psaumur/CCNA/assets/106411237/0527c007-d607-4bef-8ce1-7b18a177614d)

### Làm thế nào để thực sự truy cập vào CLI?

- Bạn cần sử dụng một trình giả lập dòng lệnh (TERMINAL EMULATOR) (Ví dụ: PuTTy là một lựa chọn phổ biến) và kết nối qua cổng "Serial" (sử dụng cài đặt mặc định).

### Cài đặt mặc định của Cisco là:

Tốc độ (baud): 9600 bits/giây
Data bits: 8 data bits
Stop bits: 1 stop bit (được gửi sau khi 8 data bits được gửi đi)
Parity: None
Flow Control: None

---

Khi bạn mới vào CLI, theo mặc định bạn sẽ ở chế độ gọi là 'User EXEC'.

CHẾ ĐỘ USER EXEC (USER EXEC MODE):

(Hostname) >		// Dấu nhắc lệnh trông như THẾ NÀY //

- Chế độ User EXEC rất hạn chế.
- Người dùng có thể xem một vài thông tin nhưng KHÔNG THỂ thực hiện bất kỳ thay đổi nào đối với cấu hình.
- Còn được gọi là 'User Mode'.

Sử dụng lệnh 'enable' trong chế độ User EXEC để chuyển sang chế độ 'Privileged EXEC'.

---

CHẾ ĐỘ PRIVILEGED EXEC (PRIVILEGED EXEC MODE):

- Cung cấp quyền truy cập đầy đủ để xem cấu hình của thiết bị, khởi động lại thiết bị, v.v.
- Không thể thay đổi cấu hình hệ thống, nhưng có thể thay đổi thời gian trên thiết bị, lưu tệp cấu hình, v.v.

(Hostname)#		// Dấu nhắc lệnh trông như THẾ NÀY //

---

Sử dụng Dấu hỏi chấm (?) để xem các lệnh có sẵn trong BẤT KỲ chế độ nào. Kết hợp ? với một chữ cái hoặc một phần của lệnh sẽ liệt kê tất cả các lệnh bắt đầu bằng chữ cái đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/52454e6f-d5b1-45f0-9a50-e412d356f6d2)

Sử dụng phím TAB để hoàn thành tự động các lệnh đã nhập một phần NẾU lệnh đó tồn tại duy nhất.

---

### CHẾ ĐỘ CẤU HÌNH TOÀN CẦU (GLOBAL CONFIGURATION MODE):

Để vào Chế độ Cấu hình Toàn cầu, hãy nhập lệnh sau khi đang ở chế độ Privileged EXEC:

'configure terminal' (hoặc 'conf t')

Router# configure terminal

Lưu ý sự thay đổi của dấu nhắc lệnh:

Router(config) #		

Nhập 'exit' để quay trở lại chế độ 'Privileged EXEC'.

---

### Để đặt Mật khẩu cho chế độ User EXEC:

Router(config)# enable password (mật_khẩu)

- Mật khẩu CÓ phân biệt chữ hoa và chữ thường.

// Lệnh này mã hóa các mật khẩu dạng văn bản thuần túy (có thể thấy trong file cấu hình) bằng cách sử dụng mã hóa đơn giản.

Router(config)# service password-encryption

Nếu bạn bật 'service password-encryption':

- Các mật khẩu hiện tại SẼ được mã hóa.
- Các mật khẩu trong tương lai SẼ được mã hóa.
- Lệnh 'enable secret' SẼ KHÔNG bị ảnh hưởng.

Nếu bạn tắt 'service password-encryption':

- Các mật khẩu hiện tại SẼ KHÔNG được giải mã.
- Các mật khẩu trong tương lai SẼ KHÔNG được mã hóa.
- Lệnh 'enable secret' SẼ KHÔNG bị ảnh hưởng.

// Lệnh này kích hoạt mật khẩu cho chế độ Privileged EXEC.

Router(config)# enable secret (mật_khẩu)

// enable secret sẽ LUÔN LUÔN được mã hóa (ở mức độ 5)

---

Có HAI tệp cấu hình riêng biệt được lưu giữ trên thiết bị cùng lúc.

Running-config (Cấu hình đang chạy):

- Là tệp cấu hình hiện tại đang HOẠT ĐỘNG trên thiết bị. Khi bạn nhập các lệnh trong CLI, bạn đang chỉnh sửa cấu hình đang hoạt động này.

Startup-config (Cấu hình khởi động):

- Là tệp cấu hình sẽ được tải khi KHỞI ĐỘNG LẠI thiết bị.

Để xem các tệp cấu hình, sử dụng các lệnh sau trong chế độ 'Privileged EXEC':

Router# show running-config // để xem cấu hình đang chạy //

HOẶC

Router# show startup-config // để xem cấu hình khởi động //

---

Để LƯU tệp cấu hình Running vào Startup, bạn có thể dùng:

Router# write
Building configuration...
[OK]

Router# write memory
Building configuration...
[OK]

Router# copy running-config startup-config

Destination filename [startup-config]?

Building configuration...
[OK]

---

Để mã hóa mật khẩu:

Router# conf t

Router(config)# service password-encryption

Điều này làm cho tất cả các mật khẩu hiện tại được *mã hóa*.

Các mật khẩu trong tương lai CŨNG sẽ được *mã hóa*.

“Enable secret” sẽ không bị ảnh hưởng (vì nó LUÔN LUÔN được mã hóa).

![image](https://github.com/psaumur/CCNA/assets/106411237/09c841fe-b5c0-4683-9082-baf060e24c03)

Bây giờ bạn sẽ thấy mật khẩu không còn ở dạng văn bản thuần túy nữa.

Số “7” đề cập đến loại mã hóa được sử dụng cho mật khẩu. Trong trường hợp này, “7” sử dụng mã hóa độc quyền của Cisco.

Mã hóa “7” khá dễ bị bẻ khóa vì nó là mã hóa yếu.

Để có mã hóa TỐT HƠN / MẠNH HƠN, hãy sử dụng “enable secret”.

![image](https://github.com/psaumur/CCNA/assets/106411237/346f3015-9211-47a9-888f-4e02a013a728)

Số “5” đề cập đến mã hóa MD5.

Mặc dù vẫn có thể bị bẻ khóa nhưng nó mạnh hơn rất nhiều.

Một khi bạn sử dụng lệnh “enable secret”, nó sẽ ghi đè lên lệnh “enable password”.

---

Để HỦY hoặc xóa một lệnh bạn đã nhập, hãy sử dụng từ khóa “no”.

![image](https://github.com/psaumur/CCNA/assets/106411237/2978d101-08d4-4ee3-8995-f36aa1c47d15)

Trong trường hợp này, khi vô hiệu hóa “service password-encryption”:

- Các mật khẩu hiện tại sẽ KHÔNG được giải mã (không thay đổi).
- Các mật khẩu trong tương lai sẽ KHÔNG được mã hóa.
- “Enable secret” sẽ không bị ảnh hưởng.

---

![image](https://github.com/psaumur/CCNA/assets/106411237/e16966a3-674a-4376-bdab-2c06e3659e5f)

![image](https://github.com/psaumur/CCNA/assets/106411237/e449e074-bf4c-40f1-a61e-0442ad83f284)

![image](https://github.com/psaumur/CCNA/assets/106411237/4c1bdf58-7de6-4074-8189-1573a174474c)

![image](https://github.com/psaumur/CCNA/assets/106411237/e7771e65-5ed5-406d-9751-76520713210c)

![image](https://github.com/psaumur/CCNA/assets/106411237/5f7357d4-f44b-4a61-a24c-86f3368f30f7)
