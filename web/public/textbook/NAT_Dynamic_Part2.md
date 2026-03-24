# 45. NAT (ĐỘNG): PHẦN 2

THÊM THÔNG TIN VỀ NAT TĨNH

- NAT TĨNH (STATIC NAT) bao gồm việc cấu hình thủ công các ánh xạ một-đối-một từ CÁC ĐỊA CHỈ IP RIÊNG sang CÁC ĐỊA CHỈ IP CÔNG CỘNG.
- Khi lưu lượng từ MÁY TRẠM NỘI BỘ được gửi tới MẠNG BÊN NGOÀI, ROUTER sẽ biên dịch ĐỊA CHỈ NGUỒN.

![image](https://github.com/psaumur/CCNA/assets/106411237/60ba15dd-ee70-4bd9-b9a7-febf3ebbcd10)

- TUY NHIÊN, việc ánh xạ một-đối-một này cũng cho phép CÁC MÁY TRẠM BÊN NGOÀI có thể truy cập vào MÁY TRẠM NỘI BỘ thông qua ĐỊA CHỈ NỘI BỘ TOÀN CẦU (INSIDE GLOBAL ADDRESS).

![image](https://github.com/psaumur/CCNA/assets/106411237/09de8e06-249c-4185-9d09-ca5fc1435f5a)

---

NAT ĐỘNG (DYNAMIC NAT)

- Trong NAT ĐỘNG, ROUTER sẽ ánh xạ một cách động các ĐỊA CHỈ NỘI BỘ CỤC BỘ (INSIDE LOCAL ADDRESSES) sang các ĐỊA CHỈ NỘI BỘ TOÀN CẦU (INSIDE GLOBAL ADDRESSES) khi cần thiết.
- Một bản danh sách ACL được sử dụng để xác định lưu lượng NÀO sẽ được biên dịch.
    - Nếu IP NGUỒN được CHO PHÉP (PERMITTED); IP NGUỒN đó sẽ được biên dịch.
    - Nếu IP NGUỒN bị TỪ CHỐI (DENIED); IP NGUỒN đó sẽ KHÔNG được biên dịch.
        
        ```
        💡 Tuy nhiên, lưu lượng Gói tin sẽ KHÔNG bị hủy bỏ (dropped).
        ```
        
- Một NHÓM NAT (NAT POOL) được sử dụng để định nghĩa CÁC ĐỊA CHỈ NỘI BỘ TOÀN CẦU hiện có.

![image](https://github.com/psaumur/CCNA/assets/106411237/98fe2d7d-345c-4d6b-9772-4b152f9bd7a3)

- Mặc dù chúng được gán một cách động, nhưng các ánh xạ vẫn là một-đối-một (một ĐỊA CHỈ IP NỘI BỘ CỤC BỘ trên mỗi ĐỊA CHỈ IP NỘI BỘ TOÀN CẦU).
- Nếu KHÔNG có đủ ĐỊA CHỈ IP NỘI BỘ TOÀN CẦU khả dụng (=TẤT CẢ đều đang được sử dụng), tình trạng này được gọi là ‘CẠN KIỆT NHÓM NAT’ (NAT POOL EXHAUSTION).
    - Nếu một GÓI TIN từ một MÁY TRẠM NỘI BỘ khác đến và cần NAT nhưng không còn ĐỊA CHỈ TRỐNG nào, ROUTER sẽ hủy bỏ GÓI TIN đó.
    - MÁY TRẠM đó sẽ không thể truy cập CÁC MẠNG BÊN NGOÀI cho đến khi một trong các ĐỊA CHỈ IP NỘI BỘ TOÀN CẦU trở nên trống.
    - Các mục NAT ĐỘNG sẽ tự động hết hạn (time out) nếu không được sử dụng, hoặc bạn có thể xóa chúng thủ công.

SỰ CẠN KIỆT NHÓM NAT (NAT POOL EXHAUSTION)

![image](https://github.com/psaumur/CCNA/assets/106411237/59c01575-b42f-475b-9502-2f9ed490ca8d)

Địa chỉ 192.168.0.167 HẾT HẠN (TIMES OUT) và 192.168.0.98 được gán IP NGUỒN ĐÃ ĐƯỢC BIÊN DỊCH của nó.

![image](https://github.com/psaumur/CCNA/assets/106411237/59e68f3b-8acc-4d7e-8d8e-f930dec3be5f)

CẤU HÌNH NAT ĐỘNG

![image](https://github.com/psaumur/CCNA/assets/106411237/6694689a-4880-497c-a1f6-838003810f0c)

`show ip nat translations`

![image](https://github.com/psaumur/CCNA/assets/106411237/5b656147-f61c-4313-9a7e-34bec3ae6fbf)

![image](https://github.com/psaumur/CCNA/assets/106411237/04951fde-f130-43f8-b2ce-05eba6382329)

![image](https://github.com/psaumur/CCNA/assets/106411237/99bb39f3-2ea7-44d2-929e-223755726882)

---

PAT ĐỘNG (NAT OVERLOAD)

- PAT (NAT OVERLOAD) biên dịch CẢ ĐỊA CHỈ IP và SỐ HIỆU CỔNG (nếu cần thiết).
- Bằng cách sử dụng một SỐ HIỆU CỔNG duy nhất cho mỗi luồng giao tiếp, một ĐỊA CHỈ IP CÔNG CỘNG duy nhất có thể được sử dụng bởi nhiều MÁY TRẠM NỘI BỘ khác nhau.
    - CÁC SỐ HIỆU CỔNG dài 16 bits = hơn 65.000 số hiệu cổng khả dụng.
- ROUTER sẽ theo dõi xem ĐỊA CHỈ NỘI BỘ CỤC BỘ nào đang sử dụng ĐỊA CHỈ NỘI BỘ TOÀN CẦU và CỔNG nào.

![image](https://github.com/psaumur/CCNA/assets/106411237/8f720b58-9700-4908-bd8d-a1846191854b)

CẤU HÌNH PAT (SỬ DỤNG NHÓM - POOL)

![image](https://github.com/psaumur/CCNA/assets/106411237/2a1acc30-658c-4479-9984-9c620b5e6ce3)

`show ip nat translations`

![image](https://github.com/psaumur/CCNA/assets/106411237/088db6f4-a695-4765-b435-2f20a5e16c9e)

CẤU HÌNH PAT (SỬ DỤNG GIAO DIỆN - INTERFACE)

![image](https://github.com/psaumur/CCNA/assets/106411237/8a3990ff-c58e-44a9-928d-e534f0cff690)

![image](https://github.com/psaumur/CCNA/assets/106411237/557d0217-80d2-4423-ba6a-041703568e13)

`show ip nat translations`

![image](https://github.com/psaumur/CCNA/assets/106411237/cae56ec7-38b5-4053-beda-ff670083718e)

---

TỔNG ÔN CÁC LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/fe0655bb-4020-4ddc-bec4-b2fb198e2314)
