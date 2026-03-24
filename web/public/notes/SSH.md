# 42. SSH (Vỏ bảo mật - Secure Shell)

BẢO MẬT CỔNG CONSOLE

- Theo MẶC ĐỊNH, không cần mật khẩu để truy cập vào CLI của một THIẾT BỊ CISCO IOS thông qua CỔNG CONSOLE.
- Bạn có thể CẤU HÌNH một MẬT KHẨU trên *đường console* (console line).
    - NGƯỜI DÙNG sẽ phải nhập MẬT KHẨU để TRUY CẬP vào CLI qua CỔNG CONSOLE.

![image](https://github.com/psaumur/CCNA/assets/106411237/9609b0af-0fb1-4563-89e4-82b58b29325e)

- Ngoài ra, bạn có thể cấu hình ĐƯỜNG CONSOLE yêu cầu NGƯỜI DÙNG ĐĂNG NHẬP bằng một trong các TÊN NGƯỜI DÙNG (USERNAMES) đã được cấu hình trên THIẾT BỊ.

![image](https://github.com/psaumur/CCNA/assets/106411237/04588b3a-3640-41af-b19e-41768f63b2bc)

---

IP QUẢN LÝ CỦA SWITCH LỚP 2

- CÁC SWITCH LỚP 2 không thực hiện ĐỊNH TUYẾN GÓI TIN và không xây dựng BẢNG ĐỊNH TUYẾN. Chúng KHÔNG nhận biết được việc ĐỊNH TUYẾN IP.
- Tuy nhiên, bạn CÓ THỂ gán một ĐỊA CHỈ IP cho một giao diện ảo SVI để cho phép CÁC KẾT NỐI TỪ XA tới CLI của SWITCH (sử dụng Telnet hoặc SSH).

![image](https://github.com/psaumur/CCNA/assets/106411237/64a9e983-f353-4670-8a99-1e22129eb661)

---

TELNET

- TELNET (Teletype Network) là một GIAO THỨC được sử dụng để TRUY CẬP TỪ XA vào CLI của một MÁY CHỦ TỪ XA.
- TELNET được phát triển vào năm 1969.
- TELNET phần lớn đã bị THAY THẾ bởi SSH, giao thức có tính BẢO MẬT CAO hơn.
- TELNET gửi dữ liệu dưới dạng VĂN BẢN THUẦN TÚY (PLAIN TEXT). KHÔNG CÓ MÃ HÓA(!).

```
💡 CÁC MÁY CHỦ TELNET lắng nghe lưu lượng Telnet trên Cổng TCP 23.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/9dffe7fb-4fa4-4ee9-90bf-d27461bb5190)

---

KIỂM TRA CẤU HÌNH TELNET

![image](https://github.com/psaumur/CCNA/assets/106411237/e077b5fd-3130-4fb0-9b17-d28bdef665df)

---

SSH

- SSH (Secure Shell) được phát triển vào năm 1995 để THAY THẾ CÁC GIAO THỨC KÉM BẢO MẬT HƠN, chẳng hạn như TELNET.
- SSHv2, một phiên bản sửa đổi lớn của SSHv1, được phát hành vào năm 2006.
- Nếu một THIẾT BỊ hỗ trợ cả v1 và v2, nó được cho là đang chạy ‘phiên bản 1.99’.
- Cung cấp các tính năng BẢO MẬT; chẳng hạn như MÃ HÓA DỮ LIỆU và XÁC THỰC.

KIỂM TRA KHẢ NĂNG HỖ TRỢ SSH

![image](https://github.com/psaumur/CCNA/assets/106411237/441c38b7-4b79-4c80-8eca-0463960124b6)

CÁC KHÓA RSA (RSA KEYS)

- Để KÍCH HOẠT và sử dụng SSH, trước tiên bạn phải tạo một CẶP KHÓA RSA CÔNG KHAI và BÍ MẬT.
- CÁC KHÓA được sử dụng để MÃ HÓA / GIẢI MÃ DỮ LIỆU, XÁC THỰC, v.v.

![image](https://github.com/psaumur/CCNA/assets/106411237/73bd5a86-32da-4ec6-b385-fe5425a72808)

CÁC ĐƯỜNG VTY (VTY LINES)

![image](https://github.com/psaumur/CCNA/assets/106411237/04e9072f-ccde-476d-a84d-3034e0b39d19)

---

TỔNG KẾT VỀ CÁC CẤU HÌNH SSH

![image](https://github.com/psaumur/CCNA/assets/106411237/bb6d358f-e742-434b-835c-5c7cd762abdb)

![image](https://github.com/psaumur/CCNA/assets/106411237/bb2e760b-90c3-42a7-93f6-0ccc7e472d00)
