# 38. DNS (Hệ thống Phân giải Tên miền - Domain Name System)

MỤC ĐÍCH CỦA DNS

- DNS được sử dụng để *phân giải* các tên máy tính mà con người có thể đọc được (ví dụ: google.com) thành CÁC ĐỊA CHỈ IP.
- Các máy móc như PC không sử dụng tên, chúng sử dụng CÁC ĐỊA CHỈ (ví dụ: IPv4/IPv6).
- Tên thì dễ sử dụng và ghi nhớ đối với con người chúng ta hơn mạng địa chỉ IP rất nhiều.
    - Địa chỉ IP của [youtube.com](http://youtube.com) là gì?
- Khi bạn nhập ‘youtube.com` vào trình duyệt web, thiết bị của bạn sẽ hỏi một MÁY CHỦ DNS về ĐỊA CHỈ IP của [youtube.com](http://youtube.com).
- (Các) MÁY CHỦ DNS mà THIẾT BỊ của bạn sử dụng có thể được cấu hình thủ công hoặc học được thông qua DHCP.

---

CÁC CHỨC NĂNG CƠ BẢN CỦA DNS

![image](https://github.com/psaumur/CCNA/assets/106411237/059c6fa4-674c-47ce-a08e-0714b21cb39e)

Lệnh `ipconfig /all` (Hiển thị cấu hình IP nội bộ trên THIẾT BỊ hiện tại)

![image](https://github.com/psaumur/CCNA/assets/106411237/b43b1d98-b510-4d05-be96-f706a3d090d1)

![image](https://github.com/psaumur/CCNA/assets/106411237/7f56b6f1-12c6-4096-9f73-28c9f8cfd570)

Lệnh `nslookup` (Hiển thị thông tin IP cho một mục DNS cụ thể)

![image](https://github.com/psaumur/CCNA/assets/106411237/71e5cd97-528c-435f-86d3-29d6ad2808b6)

BẢN GHI WIRESHARK của CÁC LỆNH trên

![image](https://github.com/psaumur/CCNA/assets/106411237/9d9cd65c-8a8b-45b3-8914-28a53013618f)

![image](https://github.com/psaumur/CCNA/assets/106411237/469431b3-e981-47cf-994d-642f737e79a0)

Lệnh `ipconfig /displaydns` (Hiển thị bộ nhớ đệm DNS - DNS cache)

![image](https://github.com/psaumur/CCNA/assets/106411237/da36bc07-d834-4c5e-b7ab-71da025b912f)

Lệnh `ipconfig /flushdns` (Xóa bộ nhớ đệm DNS)

![image](https://github.com/psaumur/CCNA/assets/106411237/f8608c2f-840c-477d-9284-7060838f1f3e)

CÁC tệp HOSTS

Vị trí của tệp HOSTS trên WINDOWS

![image](https://github.com/psaumur/CCNA/assets/106411237/771b6bd4-abe4-41b7-afc2-3984ccc23407)

![image](https://github.com/psaumur/CCNA/assets/106411237/ff56876a-3b80-482f-b73b-caa86e5d972f)

---

CẤU HÌNH DNS TRONG CISCO IOS

- Để CÁC MÁY TRẠM trong MẠNG sử dụng được DNS, bạn không nhất thiết phải cấu hình DNS trên CÁC ROUTER.
    - Chúng đơn giản là sẽ CHUYỂN TIẾP các thông điệp DNS giống như bất kỳ gói tin nào khác.
- Tuy nhiên, một ROUTER CISCO có thể được cấu hình để làm một MÁY CHỦ DNS, mặc dù trường hợp này hiếm gặp.
    - Nếu một MÁY CHỦ DNS NỘI BỘ được sử dụng, thông thường đó sẽ là một MÁY CHỦ WINDOWS hoặc LINUX.
- Một ROUTER CISCO cũng có thể được cấu hình như một MÁY KHÁCH DNS.

Lệnh `ip dns server` và `ip host <tên_máy> <địa_chỉ_ip>`

![image](https://github.com/psaumur/CCNA/assets/106411237/f65a4118-ae59-4db5-8fc4-c83d39c3072d)

![image](https://github.com/psaumur/CCNA/assets/106411237/59743697-6347-41de-9359-ca7ef327af01)

![image](https://github.com/psaumur/CCNA/assets/106411237/8e9c34c4-1a53-4ce4-a268-8a6d801d45e9)

Lệnh `show hosts`

![image](https://github.com/psaumur/CCNA/assets/106411237/306aa507-1523-43e5-ac48-251e8a75b5f8)

Lệnh `ip name-server` và `ip domain lookup`

![image](https://github.com/psaumur/CCNA/assets/106411237/cf0deb90-f8be-4f11-9373-2b7ef4715baf)

---

TỔNG ÔN CÁC LỆNH:

![image](https://github.com/psaumur/CCNA/assets/106411237/6c3e7873-04c4-407e-a851-cb74a9f78eb9)
