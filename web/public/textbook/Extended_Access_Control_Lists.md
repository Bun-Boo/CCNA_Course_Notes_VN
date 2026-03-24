# 35. DANH SÁCH KIỂM SOÁT TRUY CẬP MỞ RỘNG (EXTENDED ACL)

MỘT CÁCH KHÁC ĐỂ CẤU HÌNH CÁC ACL THEO SỐ HIỆU

- Trong NGÀY 34, bạn đã học rằng các ACL theo số hiệu được cấu hình trong chế độ Global Config:

![image](https://github.com/psaumur/CCNA/assets/106411237/d5bbb9d7-5499-43e0-9ac8-b173e5bb5c50)

- Bạn cũng đã học rằng các ACL theo tên được cấu hình bằng các câu lệnh con trong một chế độ cấu hình riêng biệt:

![image](https://github.com/psaumur/CCNA/assets/106411237/73104e31-0630-4b2a-a328-29adc5ceb418)

- Tuy nhiên, trong các bộ IOS hiện đại, bạn cũng có thể cấu hình các ACL theo số hiệu theo cách hoàn toàn giống như các ACL theo tên:

![image](https://github.com/psaumur/CCNA/assets/106411237/724638f3-1044-4476-96de-cda39fb51315)

![image](https://github.com/psaumur/CCNA/assets/106411237/a72df84e-262b-467c-a87e-b70699033076)

---

LỢI THẾ CỦA CHẾ ĐỘ CẤU HÌNH ACL THEO TÊN

- Bạn có thể dễ dàng XÓA các mục lẻ trong ACL mà KHÔNG cần dùng *entry-number*.
- Bạn có thể dễ dàng XÓA các mục lẻ trong ACL bằng *sequence-number* (số thứ tự).

![image](https://github.com/psaumur/CCNA/assets/106411237/f7f85684-6300-495d-bde9-1e1ffcead85e)

Việc này không hoạt động với các danh sách truy cập theo số hiệu thông thường (theo cách cũ).

![image](https://github.com/psaumur/CCNA/assets/106411237/8e27f6f1-794b-45be-ac67-20b3f563f551)

- Bạn có thể chèn CÁC mục MỚI vào giữa các mục khác bằng cách chỉ định SỐ THỨ TỰ (SEQUENCE NUMBER).

![image](https://github.com/psaumur/CCNA/assets/106411237/41fb1df8-b368-4349-b33a-ba0f8c768435)

---

THIẾT LẬP LẠI SỐ THỨ TỰ (RESEQUENCING) ACLs

- Có một chức năng gọi là *resequencing* (đánh mã lại số thứ tự) giúp ích cho việc chỉnh sửa các ACL.
- Câu lệnh là `R1(config)# ip access-list resequence <định-danh-acl> <số-bắt-đầu> <bước-nhảy>`

![image](https://github.com/psaumur/CCNA/assets/106411237/1c5e3f13-900a-4be4-99ba-db86b0128f57)

---

SỐ HIỆU VÀ TÊN CỦA ACL MỞ RỘNG (EXTENDED ACL)

- ACL MỞ RỘNG (EXTENDED ACL) hoạt động phần lớn giống như ACL TIÊU CHUẨN.
- Chúng có thể dùng SỐ HIỆU hoặc dùng TÊN, giống như ACL TIÊU CHUẨN.
    - ACL theo SỐ HIỆU sử dụng các dải số sau: **100 - 199, 2000 - 2699**.
- Được xử lý từ TRÊN xuống DƯỚI, giống như ACL TIÊU CHUẨN.
- Tuy nhiên, chúng có thể so khớp lưu lượng dựa trên NHIỀU THAM SỐ HƠN, vì vậy chúng CHÍNH XÁC hơn (và phức tạp hơn) so với ACL TIÊU CHUẨN.
- Chúng ta sẽ tập trung vào việc so khớp dựa trên các tham số chính sau:
    - **Giao thức / cổng LỚP 4**
    - **Địa chỉ Nguồn**
    - **Địa chỉ Đích**

---

ACL MỞ RỘNG THEO SỐ HIỆU (EXTENDED NUMBERED ACL)

```
💡 R1(config)# access-list <số_hiệu> {permit | deny} <giao_thức> <ip_nguồn> <ip_đích>
```

ACL MỞ RỘNG THEO TÊN (EXTENDED NAMED ACL)

```
💡 R1(config)# ip access-list extended {tên | số_hiệu}
```

```
💡 R1(config-ext-nacl)# [số_thứ_tự] {permit | deny} <giao_thức> <ip_nguồn> <ip_đích>
```

---

SO KHỚP GIAO THỨC (MATCHING THE PROTOCOL)

![image](https://github.com/psaumur/CCNA/assets/106411237/f6337620-5eb1-4ddc-837c-ae242a718f29)

Số hiệu Giao thức IP (IP Protocol Number) là con số được sử dụng trong trường Protocol của header IPv4.

Các ví dụ: (1) ICMP, (6) TCP, (17) UDP, (88) EIGRP, (89) OSPF.

SO KHỚP ĐỊA CHỈ IP NGUỒN / ĐÍCH

![image](https://github.com/psaumur/CCNA/assets/106411237/bbb38418-3276-485b-ba6b-5c4c7097d56f)

Lệnh này:

```
💡 R1(config-ext-nacl)# deny tcp any 10.0.0.0 0.0.0.255
```

Từ chối TẤT CẢ GÓI TIN có đóng gói một phân đoạn TCP từ BẤT KỲ nguồn nào tới ĐÍCH là mạng 10.0.0.0/24.

---

CÁC CÂU HỎI THỰC HÀNH:

1) CHO PHÉP TẤT CẢ LƯU LƯỢNG

`R1(config-ext-nacl)# permit ip any any` (ip được dùng để đại diện cho “tất cả các giao thức”).

2) NGĂN CHẶN mạng 10.0.0.0/16 GỬI lưu lượng UDP tới địa chỉ 192.168.1.1/32

`R1(config-ext-nacl)# deny udp 10.0.0.0 0.0.255.255 host 192.168.1.1`

3) NGĂN CHẶN máy 172.16.1.1/32 ping tới các máy trạm trong mạng 192.168.0.0/24

`R1(config-ext-nacl)# deny icmp host 172.16.1.1 192.168.0.0 0.0.0.255`

SO KHỚP CÁC SỐ HIỆU CỔNG TCP / UDP

- Khi so khớp TCP / UDP, bạn có thể lựa chọn chỉ định thêm các SỐ HIỆU CỔNG NGUỒN và/hoặc ĐÍCH để so khớp.

![image](https://github.com/psaumur/CCNA/assets/106411237/c059d148-b685-49b2-81e0-518a6d66c25b)

- eq = equal (bằng)
- gt = greater than (lớn hơn)
- lt = less than (nhỏ hơn)
- neq = not equal (khác/không bằng)
- range = dải các cổng

Bạn có thể sử dụng SỐ HIỆU CỔNG hoặc TÊN LOẠI cụ thể (đối với những cổng đã biết rõ).

![image](https://github.com/psaumur/CCNA/assets/106411237/03dd80be-1f0f-41ac-ae1a-bdb851579bb4)

![image](https://github.com/psaumur/CCNA/assets/106411237/f7a11d7b-aeb6-4528-b5cc-62ff515fe33c)

---

CÁC CÂU HỎI THỰC HÀNH 2:

1) CHO PHÉP lưu lượng từ mạng 10.0.0.0/16 truy cập vào máy chủ tại 2.2.2.2/32 bằng giao thức HTTPS

`R1(config-ext-nacl)# permit tcp 10.0.0.0 0.0.255.255 host 2.2.2.2 eq 443`

2) NGĂN CHẶN TẤT CẢ CÁC MÁY TRẠM sử dụng các CỔNG NGUỒN UDP từ 20000 đến 30000 truy cập vào máy chủ tại 3.3.3.3/32

`R1(config-ext-nacl)# deny udp any range 20000 30000 host 3.3.3.3`

3) CHO PHÉP CÁC MÁY TRẠM trong mạng 172.16.1.0/24 sử dụng một CỔNG NGUỒN TCP lớn hơn 9999 truy cập vào TẤT CẢ các cổng TCP trên máy chủ 4.4.4.4/32 NGOẠI TRỪ cổng 23

`R1(config-ext-nacl)# permit tcp 172.16.1.0 0.0.0.255 gt 9999 host 4.4.4.4 neq 23`

MẠNG VÍ DỤ

![image](https://github.com/psaumur/CCNA/assets/106411237/ddb40c27-b195-49fe-a12a-49e078166e30)

![image](https://github.com/psaumur/CCNA/assets/106411237/692f4a58-13d3-4c0a-8513-3dc76b014b65)

CÁC YÊU CẦU:

- Các máy trạm trong dải 192.168.1.0/24 không thể sử dụng HTTPS để truy cập SRV1.
- Các máy trạm trong dải 192.168.2.0/24 không thể truy cập mạng 10.0.2.0/24.
- KHÔNG MỘT máy trạm nào trong các dải 192.168.1.0/24 hoặc 192.168.2.0/24 có thể ping tới mạng 10.0.1.0/24 HOẶC 10.0.2.0/24.

ACL MỞ RỘNG #1 (Áp dụng tại giao diện G0/1 hướng VÀO - INBOUND của R1)

`R1(config)# ip access-list extended HTTP_SRV1`
`R1(config-ext-nacl)# deny tcp 192.168.1.0 0.0.0.255 host 10.0.1.100 eq 443`
`R1(config-ext-nacl)# permit ip any any`

`R1(config)# int g0/1`
`R1(config-if)# ip access-group HTTP_SRV1 in`

ACL MỞ RỘNG #2 (ÁP DỤNG tại giao diện G0/2 hướng VÀO - INBOUND của R1)

`R1(config)# ip access-list extended BLOCK_10.0.2.0`
`R1(config-ext-nacl)# deny ip 192.168.2.0 0.0.0.255 10.0.2.0 0.0.0.255`
`R1(config-ext-nacl)# permit ip any any`

`R1(config)# int g0/2`
`R1(config-if)# ip access-group BLOCK_10.0.2.0 in`

ACL MỞ RỘNG #3 (ÁP DỤNG tại giao diện G0/0 hướng RA - OUTBOUND của R1)

`R1(config)# ip access-list extended BLOCK_ICMP`
`R1(config-ext-nacl)# deny icmp 192.168.1.0 0.0.0.255 10.0.1.0 0.0.0.255`
`R1(config-ext-nacl)# deny icmp 192.168.1.0 0.0.0.255 10.0.2.0 0.0.0.255`
`R1(config-ext-nacl)# deny icmp 192.168.2.0 0.0.0.255 10.0.1.0 0.0.0.255`
`R1(config-ext-nacl)# permit ip any any`

`R1(config)# int g0/0`
`R1(config-if)# ip access-group BLOCK_ICMP out`

Hình ảnh các EXTENDED ACL trông như thế nào:

![image](https://github.com/psaumur/CCNA/assets/106411237/cda064f2-b1ce-45ee-a660-04cdceb3514b)

LÀM THẾ NÀO ĐỂ XEM CÁC EXTENDED ACL NÀO ĐƯỢC ÁP DỤNG VÀO MỘT GIAO DIỆN

![image](https://github.com/psaumur/CCNA/assets/106411237/f596bca6-c06a-445e-84a3-8f8eb0c6baaf)
