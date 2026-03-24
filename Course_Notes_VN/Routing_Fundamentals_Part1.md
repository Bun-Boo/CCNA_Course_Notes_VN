# 11. KIẾN THỨC CƠ BẢN VỀ ĐỊNH TUYẾN : PHẦN 1

### ĐỊNH TUYẾN LÀ GÌ?

ĐỊNH TUYẾN (ROUTING) là quá trình mà các bộ định tuyến (router) sử dụng để xác định đường đi mà các gói tin IP nên đi qua mạng để đến được đích của chúng.

- Các ROUTER lưu trữ các tuyến đường (routes) đến tất cả các đích mà chúng biết trong một **BẢNG ĐỊNH TUYẾN (ROUTING TABLE)**.
- Khi ROUTER nhận được các GÓI TIN (PACKETS), chúng sẽ tra cứu trong BẢNG ĐỊNH TUYẾN để tìm ra tuyến đường tốt nhất để chuyển tiếp gói tin đó.

Có hai phương pháp định tuyến chính (cách mà router học các tuyến đường):

- ĐỊNH TUYẾN ĐỘNG (DYNAMIC ROUTING): Các ROUTER sử dụng các Giao thức Định tuyến Động (ví dụ: OSPF) để tự động chia sẻ thông tin định tuyến với nhau và xây dựng bảng định tuyến của chúng.
- ĐỊNH TUYẾN TĨNH (STATIC ROUTING): Kỹ sư mạng hoặc người quản trị sẽ cấu hình các tuyến đường trên router một cách thủ công.

Một TUYẾN ĐƯỜNG (ROUTE) sẽ chỉ dẫn cho ROUTER:

- Để gửi gói tin đến Đích X, bạn nên gửi gói tin đến ***bước nhảy tiếp theo (next-hop)*** Y.
- Hoặc nếu Đích được kết nối trực tiếp với router, *hãy gửi gói tin trực tiếp đến đích đó.*
- Hoặc nếu Đích chính là địa chỉ IP của router, *hãy nhận gói tin cho chính mình (đừng chuyển tiếp nó).*

![image](https://github.com/psaumur/CCNA/assets/106411237/8ceefb10-d70d-4530-969d-40347ed34297)


WAN (Wide Area Network) = Mạng diện rộng, là mạng mở rộng trên một khu vực địa lý lớn.

![image](https://github.com/psaumur/CCNA/assets/106411237/b3555fdd-37a4-4bc8-b998-76e0b5455bb1)

![image](https://github.com/psaumur/CCNA/assets/106411237/99e75230-de1c-4f48-acd0-3482bba256af)

![image](https://github.com/psaumur/CCNA/assets/106411237/13a77d5c-497d-49ca-9717-ea3bb4a560d0)

![image](https://github.com/psaumur/CCNA/assets/106411237/6e3a2b3b-1590-4625-9bcf-cdaed95738d2)

![image](https://github.com/psaumur/CCNA/assets/106411237/891fcfbe-7dc5-4fb2-9b02-c6905236761e)
