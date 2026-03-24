# 30. TCP và UDP (CÁC GIAO THỨC LỚP 4)

NHỮNG KHÁI NIỆM CƠ BẢN VỀ LỚP 4

- Cung cấp việc truyền tải DỮ LIỆU trong suốt giữa CÁC MÁY CHỦ CUỐI (END HOSTS) (Giao tiếp giữa Máy chủ với Máy chủ).

![image](https://github.com/psaumur/CCNA/assets/106411237/b0309c1e-a283-428b-9d8b-c9c1568e6a58)

- Cung cấp (hoặc KHÔNG cung cấp) các DỊCH VỤ khác nhau cho CÁC ỨNG DỤNG:
    - Truyền DỮ LIỆU tin cậy.
    - Phục hồi lỗi (Error Recovery).
    - Sắp xếp thứ tự dữ liệu (Data Sequencing).
    - Kiểm soát luồng (Flow Control).
- Cung cấp ĐỊA CHỈ LỚP 4 (các số hiệu CỔNG - PORT numbers) - KHÔNG phải là các giao diện / cổng vật lý trên các thiết bị mạng.
    - XÁC ĐỊNH giao thức của LỚP ỨNG DỤNG (APPLICATION LAYER).
    - Cung cấp tính năng đa phân luồng PHIÊN (SESSION multiplexing).

---

PHIÊN (SESSION) LÀ GÌ?

- Một PHIÊN (SESSION) là một quá trình TRAO ĐỔI DỮ LIỆU giữa HAI hoặc NHIỀU THIẾT BỊ đang giao tiếp với nhau.

![image](https://github.com/psaumur/CCNA/assets/106411237/2d8c6c74-24e5-4574-b454-bc694f056bec)

CÁC dải số hiệu sau đây đã được chỉ định bởi IANA (Internet Assigned Numbers Authority):

- Các số hiệu cổng **Phổ biến (Well-Known)**: 0 - 1023.
- Các số hiệu cổng **Đã đăng ký (Registered)**: 1024 - 49151.
- Các số hiệu cổng **Tạm thời (Ephemeral)** / Riêng / Động: 49152 - 65535.

![image](https://github.com/psaumur/CCNA/assets/106411237/02d56940-33b6-40a8-8431-0a39c19bc66a)

---

TCP (TRANSMISSION CONTROL PROTOCOL - GIAO THỨC ĐIỀU KHIỂN TRUYỀN DẪN)

- Một giao thức HƯỚNG KẾT NỐI (CONNECTION-ORIENTED).
    - Trước khi thực sự GỬI DỮ LIỆU tới MÁY ĐÍCH, HAI MÁY CHỦ sẽ trao đổi để thiết lập một KẾT NỐI. Một khi KẾT NỐI đã được thiết lập, quá trình trao đổi DỮ LIỆU mới bắt đầu.

![image](https://github.com/psaumur/CCNA/assets/106411237/9fcb7294-da61-4fff-b483-c1da6a8d7b48)

![image](https://github.com/psaumur/CCNA/assets/106411237/1f5b0753-b625-463b-9d6f-79bf5b2454dc)

Thiết lập các kết nối

![image](https://github.com/psaumur/CCNA/assets/106411237/877a8e35-2e2d-4cf4-af65-1a1834308ba9)

Ngắt các kết nối

![image](https://github.com/psaumur/CCNA/assets/106411237/3a0a9cff-8bc4-4c1f-a9b0-941807cf6f40)

- TCP cung cấp sự giao tiếp TIN CẬY (RELIABLE).
    - MÁY ĐÍCH phải xác nhận rằng nó đã NHẬN ĐƯỢC mỗi PHÂN ĐOẠN (SEGMENT) TCP (Đơn vị dữ liệu PDU của Lớp 4).
    - Nếu một PHÂN ĐOẠN không được XÁC NHẬN (ACKNOWLEDGED), nó sẽ được gửi lại.

![image](https://github.com/psaumur/CCNA/assets/106411237/d8349049-7a5a-40a3-95fa-7ad86ec1049d)

- TCP cung cấp tính năng SẮP XẾP THỨ TỰ (SEQUENCING).
    - Các số hiệu thứ tự (SEQUENCE numbers) trong TCP HEADER cho phép CÁC MÁY ĐÍCH sắp xếp các PHÂN ĐOẠN theo đúng THỨ TỰ ngay cả khi chúng đến mạng không đúng thứ tự.

![image](https://github.com/psaumur/CCNA/assets/106411237/a1df1c41-df4f-4211-ac56-144280a2d3bf)

- TCP cung cấp khả năng KIỂM SOÁT LUỒNG (FLOW CONTROL).
    - MÁY ĐÍCH có thể yêu cầu MÁY NGUỒN tăng / giảm TỐC ĐỘ mà DỮ LIỆU được gửi đi.

![image](https://github.com/psaumur/CCNA/assets/106411237/f5f3f467-5b1f-4a30-9ef7-8a5c0de65139)

![image](https://github.com/psaumur/CCNA/assets/106411237/fafc82c7-21a2-46cf-b82b-702b2d8c1d52)

---

UDP (USER DATAGRAM PROTOCOL - GIAO THỨC GÓI NGƯỜI DÙNG)

![image](https://github.com/psaumur/CCNA/assets/106411237/773a7e94-50b1-4179-b2e6-0d45ec5c1b3d)

- UDP KHÔNG phải là một GIAO THỨC HƯỚNG KẾT NỐI.
    - MÁY NGUỒN KHÔNG thiết lập một KẾT NỐI với MÁY ĐÍCH trước khi gửi DỮ LIỆU. DỮ LIỆU đơn giản là được GỬI đi.

- UDP KHÔNG cung cấp sự giao tiếp tin cậy.
    - Khi sử dụng UDP, các bản tin XÁC NHẬN (ACKNOWLEDGEMENTS) KHÔNG ĐƯỢC GỬI cho các PHÂN ĐOẠN đã nhận.
    - Nếu một PHÂN ĐOẠN bị MẤT, UDP không có cơ chế để truyền LẠI (re-TRANSMIT) nó.
    - CÁC PHÂN ĐOẠN được gửi theo kiểu “nỗ lực hết mức” (best-effort) - không đảm bảo.

- UDP KHÔNG cung cấp tính năng SẮP XẾP THỨ TỰ.
    - KHÔNG có TRƯỜNG SỐ THỨ TỰ (SEQUENCE NUMBER) trong UDP header.
    - Nếu CÁC PHÂN ĐOẠN đến không đúng thứ tự, UDP không có CƠ CHẾ để sắp xếp chúng lại theo đúng THỨ TỰ.

- UDP KHÔNG cung cấp khả năng KIỂM SOÁT LUỒNG.
    - UDP KHÔNG có CƠ CHẾ giống như KÍCH THƯỚC CỬA SỔ (WINDOW SIZE) của TCP để kiểm soát luồng DỮ LIỆU.

- UDP CÓ cung cấp việc KIỂM TRA LỖI (thông qua CHECKSUM).

---

SO SÁNH TCP VÀ UDP

Số lượng các trường thông tin trong phần Headers của chúng:

![image](https://github.com/psaumur/CCNA/assets/106411237/90fb3d62-5011-4970-9cf6-167cccfe3449)

- TCP cung cấp NHIỀU TÍNH NĂNG HƠN UDP nhưng phải đánh đổi bằng CHI PHÍ BỔ SUNG (ADDITIONAL OVERHEAD).
- Đối với các ứng dụng yêu cầu giao tiếp TIN CẬY (ví dụ: tải xuống một tệp tin), TCP được ƯU TIÊN hơn.
- Đối với các ứng dụng như thoại (voice) và video thời gian thực, UDP được ưu tiên hơn.
- Có MỘT SỐ ứng dụng sử dụng UDP nhưng vẫn cung cấp tính TIN CẬY, v.v., bên trong chính bản thân ỨNG DỤNG đó.
- Một số ứng dụng sử dụng CẢ TCP và UDP, tùy thuộc vào tình huống cụ thể.

![image](https://github.com/psaumur/CCNA/assets/106411237/fcbef599-9277-4b06-8d59-2349ca70817a)

CÁC SỐ HIỆU CỔNG QUAN TRỌNG (IMPORTANT PORT NUMBERS)

![image](https://github.com/psaumur/CCNA/assets/106411237/9e1f0422-d027-4a06-a359-d47c5c39dba1)
