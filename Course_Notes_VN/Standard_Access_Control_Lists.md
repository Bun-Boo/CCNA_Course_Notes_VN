# 34. DANH SÁCH KIỂM SOÁT TRUY CẬP TIÊU CHUẨN (STANDARD ACL)

ACL LÀ GÌ?

- ACL (Access Control Lists - Danh sách Kiểm soát Truy cập) có nhiều công dụng khác nhau.
- Trong NGÀY 34 và NGÀY 35, chúng ta sẽ tập trung vào ACL từ góc độ bảo mật.
- ACL hoạt động như một “bộ lọc gói tin” (packet filter) - chỉ thị cho ROUTER CHO PHÉP (ALLOW) hoặc TỪ CHỐI (DENY) các loại lưu lượng cụ thể.
- ACL có thể lọc lưu lượng dựa trên:
    - ĐỊA CHỈ IP NGUỒN / ĐÍCH.
    - SỐ HIỆU CỔNG LỚP 4 NGUỒN / ĐÍCH.
    - v.v.

---

CÁCH THỨC HOẠT ĐỘNG CỦA ACL

![image](https://github.com/psaumur/CCNA/assets/106411237/92d663ec-33a8-4ba4-b0a7-5d3942a9b67e)

```
💡 CÁC YÊU CẦU:

- Các máy trạm trong dải 192.168.1.0/24 NÊN có quyền TRUY CẬP vào MẠNG 10.0.1.0/24.
- Các máy trạm trong dải 192.168.2.0/24 KHÔNG NÊN có quyền TRUY CẬP vào MẠNG 10.0.1.0/24.
```

ACL được cấu hình TOÀN CỤC trên ROUTER (Chế độ Cấu hình Toàn cục - Global Config Mode)

- Chúng là một chuỗi có thứ tự gồm các ACE (Access Control Entries - Mục Kiểm soát Truy cập).

![image](https://github.com/psaumur/CCNA/assets/106411237/2eb0c042-21d0-4a40-ade3-9715bd2b3bcb)

- Việc cấu hình một ACL trong Chế độ Toàn cục sẽ không làm ACL đó có hiệu lực ngay lập tức.
- ACL phải được áp dụng vào một giao diện (interface).
    - ACL được áp dụng theo hướng VÀO (INBOUND) hoặc hướng RA (OUTBOUND).
- ACL được cấu thành từ một hoặc nhiều ACE.
- Khi một ROUTER kiểm tra một GÓI TIN đối chiếu với ACL, nó sẽ xử lý các ACE theo thứ tự, từ trên xuống dưới.
- Nếu GÓI TIN khớp với một trong các ACE trong ACL, ROUTER sẽ thực hiện hành động (cho phép hoặc từ chối) và dừng việc xử lý ACL đó. Tất cả các mục bên dưới mục đã khớp sẽ bị bỏ qua.

![image](https://github.com/psaumur/CCNA/assets/106411237/a4a86a8e-f73c-476b-b0e5-15bfb4f4748d)

![image](https://github.com/psaumur/CCNA/assets/106411237/6e4148e0-e908-4a44-9f23-358c9d7ade11)

---

LỆNH TỪ CHỐI NGẦM ĐỊNH (IMPLICIT DENY)

- Điều gì sẽ xảy ra nếu một GÓI TIN không khớp với bất kỳ mục nào trong ACL?
- Có một lệnh TỪ CHỐI NGẦM ĐỊNH (IMPLICIT DENY) ở cuối TẤT CẢ các ACL.
- Lệnh TỪ CHỐI NGẦM ĐỊNH này chỉ thị cho ROUTER TỪ CHỐI TẤT CẢ LƯU LƯỢNG không khớp với BẤT KỲ mục nào đã được cấu hình trong ACL.

---

CÁC LOẠI ACL

![image](https://github.com/psaumur/CCNA/assets/106411237/4856845e-80b2-45dc-b30c-cc3b170db69c)

---

ACL TIÊU CHUẨN THEO SỐ HIỆU (STANDARD NUMBERED ACLS)

- So khớp lưu lượng chỉ dựa trên ĐỊA CHỈ IP NGUỒN của GÓI TIN.
- ACL theo số hiệu được định danh bằng một con số (ví dụ: ACL 1, ACL 2, v.v.).
- Các LOẠI ACL khác nhau có các dải số khác nhau có thể sử dụng.
    
    ```
    💡 ACL TIÊU CHUẨN có thể sử dụng các số từ 1-99 và 1300-1999.
    ```
    

- Câu lệnh cơ bản để cấu hình một ACL TIÊU CHUẨN THEO SỐ HIỆU:
    - `R1(config)# access-list <số_hiệu> {deny | permit} <ip_nguồn> <wildcard-mask>`
    
    Đây là một ví dụ về việc từ chối lưu lượng từ một máy trạm NHẤT ĐỊNH:
    
    HÃY NHỚ: wildcard 0.0.0.0 tương đương với 255.255.255.255 hay một máy trạm đơn lẻ /32.
    
    - Ví dụ: `R1(config)# access-list 1 deny 1.1.1.1 0.0.0.0`
    - Ví dụ: `R1(config)# access-list 1 deny 1.1.1.1` (giống hệt như trên)
    - Ví dụ: `R1(config)# access-list 1 deny host 1.1.1.1`
    
    Nếu bạn muốn cho phép BẤT KỲ lưu lượng nào từ BẤT KỲ nguồn nào:
    
    - Ví dụ: `R1(config)# access-list 1 permit any`
    - Ví dụ: `R1(config)# access-list 1 permit 0.0.0.0 255.255.255.255`
    
    Nếu bạn muốn tạo một ghi chú (description) cho một ACL cụ thể:
    
    - Ví dụ: `R1(config)# access-list 1 remark ## CHẶN BOB TỪ PHÒNG KẾ TOÁN ##`

![image](https://github.com/psaumur/CCNA/assets/106411237/3e20e40c-6755-4638-9ef3-15fa747f93b6)

Thứ tự rất quan trọng. Các Số hiệu Thấp hơn được xử lý TRƯỚC.

---

ĐỂ ÁP DỤNG MỘT ACL VÀO MỘT GIAO DIỆN

`R1(config-if)# ip access-group <số_hiệu> {in | out}`

![image](https://github.com/psaumur/CCNA/assets/106411237/eed38afa-f067-4153-80bb-b07c52a21e53)

TẠI SAO quy tắc này lại được đặt trên giao diện G0/2 hướng RA (OUT)?

```
💡 ACL TIÊU CHUẨN nên được áp dụng ở vị trí CÀNG GẦN ĐÍCH nhất có thể!
```

---

ACL TIÊU CHUẨN THEO TÊN (STANDARD NAMED ACLS)

- ACL Tiêu chuẩn so khớp lưu lượng chỉ dựa trên ĐỊA CHỈ IP NGUỒN của GÓI TIN.
- ACL theo tên được định danh bằng một CÁI TÊN (ví dụ: ‘BLOCK_BOB’).
- ACL TIÊU CHUẨN THEO TÊN được cấu hình bằng cách truy cập vào ‘chế độ cấu hình ACL tiêu chuẩn theo tên’, sau đó cấu hình TỪNG mục ACE bên trong chế độ đó.
    - `R1(config)# ip access-list standard <tên_acl>`
    - `R1(config-std-nacl)# [<số_thứ_tự>] {deny | permit} <ip_nguồn> <wildcard-mask>`

![image](https://github.com/psaumur/CCNA/assets/106411237/94e9b58d-07f6-4ad6-9c92-b00c01ce311d)

![image](https://github.com/psaumur/CCNA/assets/106411237/a8a10f5f-8e5c-4e19-981f-862bf94b2788)

![image](https://github.com/psaumur/CCNA/assets/106411237/3b641f99-4c99-4d5f-a32b-1a626d1a02b4)

![image](https://github.com/psaumur/CCNA/assets/106411237/17a7d767-1052-4bc0-8a04-7278f16caeb6)

Dưới đây là các cấu hình cho những ví dụ trên:

![image](https://github.com/psaumur/CCNA/assets/106411237/bbdcff70-1fd4-46a4-a4c2-5d5485fe5695)

Tuy nhiên, hãy lưu ý thứ tự hiển thị khi xem các ACL:

![image](https://github.com/psaumur/CCNA/assets/106411237/74ad9dd4-d56f-4845-83b1-44366b4b94f6)

TẠI SAO LẠI CÓ SỰ SẮP XẾP LẠI THỨ TỰ NÀY?

![image](https://github.com/psaumur/CCNA/assets/106411237/e5ed273d-1c24-4b78-884f-712e1cf6922a)

Tuy nhiên, phần mềm Cisco Packet Tracer không thực hiện việc sắp xếp lại thứ tự này.
