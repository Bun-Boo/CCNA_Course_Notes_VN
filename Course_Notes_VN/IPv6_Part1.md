# 31. IPv6 : PHẦN 1

SỐ THẬP LỤC PHÂN (Ôn tập)

![image](https://github.com/psaumur/CCNA/assets/106411237/df3e0c7f-5325-4c4c-9d88-197b588cdfe4)

![image](https://github.com/psaumur/CCNA/assets/106411237/a23caee6-492b-4226-ba9f-7b3e44578fd4)

![image](https://github.com/psaumur/CCNA/assets/106411237/1a7e0af8-4f19-483d-b75c-27fa452ce8e9)

Còn chiều ngược lại (Thập lục phân sang Nhị phân) thì sao ???

![image](https://github.com/psaumur/CCNA/assets/106411237/ceced09e-175f-452d-87e8-5b10af7621a1)

---

TẠI SAO PHẢI CẦN IPv6?

- **LÝ DO CHÍNH** là vì đơn giản là không có đủ địa chỉ IPv4 còn trống.
- Có 2^32 địa chỉ IPv4 khả dụng (4,294,967,296).
- Khi IPv4 được thiết kế vào 30 năm trước, những người sáng tạo đã KHÔNG thể ngờ rằng Internet lại phát triển lớn mạnh như ngày nay.
- VLSM, CÁC ĐỊA CHỈ IPv4 Riêng (Private), và NAT đã được sử dụng để bảo tồn KHÔNG GIAN ĐỊA CHỈ IPv4.
    - Tuy nhiên, đây chỉ là những giải pháp ngắn hạn.
- Giải pháp DÀI HẠN là IPv6.

- Việc cấp phát ĐỊA CHỈ IPv4 được kiểm soát bởi IANA (Internet Assigned Number Authority).
- IANA phân phối không gian ĐỊA CHỈ IPv4 cho các RIR ( Regional Internet Registries - Các tổ chức đăng ký Internet khu vực) khác nhau, sau đó các tổ chức này sẽ cấp phát cho các công ty cần chúng.

![image](https://github.com/psaumur/CCNA/assets/106411237/98fdf256-dbbf-4884-825a-6124251da6a7)

- Vào ngày 24 tháng 9 năm 2015, ARIN đã tuyên bố cạn kiệt kho địa chỉ IPv4 của ARIN.
- Vào ngày 21 tháng 8 năm 2020, LACNIC thông báo rằng họ đã thực hiện đợt cấp phát IPv4 cuối cùng.

---

CƠ BẢN VỀ IPv6

- Một ĐỊA CHỈ IPv6 dài **128 bits (gồm 8 "nhóm", mỗi nhóm 16 bits. Các nhóm được ngăn cách bởi dấu ':')**.

![image](https://github.com/psaumur/CCNA/assets/106411237/3e6fe314-c87f-4116-bf37-7f3cfd8e17b4)

- Một ĐỊA CHỈ IPv6 sử dụng ký hiệu tiền tố / (prefix length).

RÚT GỌN (Viết tắt) ĐỊA CHỈ IPv6

![image](https://github.com/psaumur/CCNA/assets/106411237/7796f62c-5daa-4e3c-a029-2c42e8abfc6c)

![image](https://github.com/psaumur/CCNA/assets/106411237/ee734193-9708-44a8-8702-c0d9d07afaad)

![image](https://github.com/psaumur/CCNA/assets/106411237/a19192b2-fcd9-4280-95c4-281ef08ffa5e)

![image](https://github.com/psaumur/CCNA/assets/106411237/07c413b6-1577-47c3-963c-4ccca8e20820)

![image](https://github.com/psaumur/CCNA/assets/106411237/ea5f5e40-1b4f-4fd8-942c-c17ca2535e35)

MỞ RỘNG (Viết đầy đủ) ĐỊA CHỈ IPv6

![image](https://github.com/psaumur/CCNA/assets/106411237/934a089e-6ec1-4297-b0da-154b8240af35)

TÌM tiền tố (Prefix) IPv6 (Dành cho CÁC ĐỊA CHỈ UNICAST TOÀN CẦU)

- Thông thường, một Doanh nghiệp yêu cầu CÁC ĐỊA CHỈ IPv6 từ ISP của họ sẽ nhận được một KHỐI (BLOCK) địa chỉ /48.
- Thông thường, CÁC MẠNG CON IPv6 sử dụng ĐỘ DÀI TIỀN TỐ (PREFIX LENGTH) là /64.
- Điều đó có nghĩa là một Doanh nghiệp có 16 bits để sử dụng nhằm tạo ra CÁC MẠNG CON.
- 64 bits còn lại có thể được sử dụng cho CÁC MÁY TRẠM (HOSTS).

![image](https://github.com/psaumur/CCNA/assets/106411237/12448711-2636-4133-bed9-d655bedbd418)

![image](https://github.com/psaumur/CCNA/assets/106411237/fa872c5a-4d39-4519-9248-f4f552539bb8)

(Mỗi chữ số là 4 bits / mỗi khối 4 chữ số là 16 bits)

**HÃY NHỚ**: Bạn chỉ có thể loại bỏ CÁC SỐ 0 Ở ĐẦU !!!

2001 : 0DB8 : 8B00 : 0001 : FB89 : 017B : 0020 : 0011 /93

Bởi vì số 93 nằm ở giữa một số 4 bit, chúng ta cần chuyển chữ số cuối cùng sang nhị phân và mượn một “bit” từ chữ số nhị phân đầu tiên.

:: 017 [B] :: B = 11 (thập phân) = 1011 (nhị phân) = 1000 (nhị phân) (bit đầu tiên được mượn, phần còn lại trở thành 0)

![image](https://github.com/psaumur/CCNA/assets/106411237/1703e18d-da7a-4ee9-850e-d4e4a59ec72a)

![image](https://github.com/psaumur/CCNA/assets/106411237/c7e6fcec-ec8c-40df-86b6-72486e2a3165)

---

CẤU HÌNH CÁC ĐỊA CHỈ IPv6

![image](https://github.com/psaumur/CCNA/assets/106411237/7ee88c71-617f-4bfc-8220-a4ef5bbe89e3)

Lệnh này cho phép ROUTER thực hiện ĐỊNH TUYẾN IPv6 (IPv6 ROUTING)

```
💡 R1(config)# ipv6 unicast-routing
```

Cấu hình một GIAO DIỆN với một Địa chỉ IPv6

```
💡 R1(config)# int g0/0
R1(config-if)# ipv6 address 2001:db8:0:0::1/64
R1(config-if)# no shutdown
```

Bạn cũng có thể nhập đầy đủ địa chỉ (nếu cần thiết)

![image](https://github.com/psaumur/CCNA/assets/106411237/c83977d3-678f-4922-9be2-f52c6a679d64)

LƯU Ý CÁC ĐỊA CHỈ IPv6 ĐƯỢC HIỂN THỊ DƯỚI DẠNG RÚT GỌN

CÁC ĐỊA CHỈ LINK-LOCAL được tự động thêm vào khi tạo một GIAO DIỆN IPv6 (Sẽ được trình bày trong bài giảng IPv6 - PHẦN 2)
