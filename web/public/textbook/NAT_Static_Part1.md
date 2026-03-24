# 44. NAT (TĨNH): PHẦN 1

CÁC ĐỊA CHỈ IPv4 RIÊNG (RFC 1918)

- IPv4 không cung cấp đủ ĐỊA CHỈ cho tất cả CÁC THIẾT BỊ cần có một địa chỉ IP trong thế giới hiện đại.
- Giải pháp lâu dài là chuyển sang IPv6.
- Có BA GIẢI PHÁP ngắn hạn chính:
    - CIDR.
    - ĐỊA CHỈ IPv4 RIÊNG (PRIVATE IPv4 ADDRESS).
    - NAT.
- Tiêu chuẩn RFC 1918 quy định các DẢI ĐỊA CHỈ IPv4 sau đây là RIÊNG (NỘI BỘ):
    
    ```
    10.0.0.0 /8       (10.0.0.0 đến 10.255.255.255)             LỚP A 
    172.16.0.0 /12    (172.16.0.0 đến 172.31.255.255)           LỚP B
    192.168.0.0 /16   (192.168.0.0 đến 192.168.255.255)         LỚP C
    ```
    
- Bạn có thể tự do sử dụng các ĐỊA CHỈ này trong MẠNG của mình. Chúng không cần phải là DUY NHẤT TRÊN TOÀN CẦU.

![image](https://github.com/psaumur/CCNA/assets/106411237/c774460a-0479-40ed-ac62-1e9820960943)

---

GIỚI THIỆU VỀ NAT

- BIÊN DỊCH ĐỊA CHỈ MẠNG (NAT - NETWORK ADDRESS TRANSLATION) được sử dụng để thay đổi ĐỊA CHỈ IP NGUỒN và/hoặc ĐÍCH của các gói tin.
- Có nhiều lý do khác nhau để sử dụng NAT, nhưng lý do phổ biến NHẤT là để CHO PHÉP CÁC MÁY TRẠM có ĐỊA CHỈ IP RIÊNG có thể liên lạc với các MÁY TRẠM khác qua INTERNET.
- Đối với kỳ thi CCNA, bạn phải hiểu rõ về NAT NGUỒN (SOURCE NAT) và cách cấu hình nó trên CÁC ROUTER CISCO.

![image](https://github.com/psaumur/CCNA/assets/106411237/11cbc222-4b2d-4283-9a8f-86cfff2e109d)

---

NAT TĨNH (STATIC NAT)

- NAT TĨNH bao gồm việc cấu hình thủ công các ÁNH XẠ MỘT-ĐỐI-MỘT giữa ĐỊA CHỈ IP RIÊNG và ĐỊA CHỈ CÔNG CỘNG.

![image](https://github.com/psaumur/CCNA/assets/106411237/40867b28-66ff-4182-be97-8495a4c2de23)

![image](https://github.com/psaumur/CCNA/assets/106411237/b77177cc-f6e3-434f-87e0-fb5d0fe14c90)

![image](https://github.com/psaumur/CCNA/assets/106411237/daac56f4-5af8-482c-9d1d-63a0fb3bdcb1)

MỘT ĐỊA CHỈ IP RIÊNG KHÔNG THỂ ĐƯỢC ÁNH XẠ TỚI CÙNG MỘT ĐỊA CHỈ IP TOÀN CẦU (PUBLIC).

ÁNH XẠ THỨ HAI SẼ BỊ TỪ CHỐI.

![image](https://github.com/psaumur/CCNA/assets/106411237/6dceb3c2-39d6-4299-b08d-90cbddb8d6b3)

---

CÁC CẤU HÌNH NAT TĨNH

![image](https://github.com/psaumur/CCNA/assets/106411237/1b0d6780-56d8-4ea0-870b-abb65d3a6e66)

![image](https://github.com/psaumur/CCNA/assets/106411237/add755f6-2d2c-4fe8-aae1-6d1aeecb6ea2)

Lệnh `clear ip nat translation`

![image](https://github.com/psaumur/CCNA/assets/106411237/4266d928-0970-4386-82d7-159cc2b02df6)

Lệnh `show ip nat statistics`

![image](https://github.com/psaumur/CCNA/assets/106411237/2e70576f-3879-4ba6-8ffa-307fd0c243c9)

---

TỔNG ÔN CÁC LỆNH

![image](https://github.com/psaumur/CCNA/assets/106411237/061f4c43-e755-41e8-b8b4-9e31e0723a19)
