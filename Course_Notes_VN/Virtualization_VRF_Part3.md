# 54. ẢO HÓA (VRF): PHẦN 3

GIỚI THIỆU VỀ VRF

![image](https://github.com/psaumur/CCNA/assets/106411237/e122f3c6-290f-4f33-a31d-f308f12140a3)

- ĐỊNH TUYẾN VÀ CHUYỂN TIẾP ẢO (VRF - VIRTUAL ROUTING AND FORWARDING) được sử dụng để CHIA một ROUTER DUY NHẤT thành NHIỀU ROUTER ẢO.
    - Tương tự như cách các VLAN được sử dụng để chia một SWITCH (LAN) DUY NHẤT thành NHIỀU SWITCH ẢO (VLAN).
- Nó thực hiện điều này bằng cách cho phép một ROUTER xây dựng NHIỀU BẢNG ĐỊNH TUYẾN TÁCH BIỆT.
    - CÁC GIAO DIỆN (chỉ dành cho LỚP 3) và CÁC ROUTER được cấu hình để nằm trong một VRF cụ thể (còn gọi là *phiên bản VRF* - VRF INSTANCE).
    - CÁC GIAO DIỆN ROUTER, SVIs và CÁC CỔNG ĐƯỢC ĐỊNH TUYẾN (ROUTED PORTS) trên các SWITCH ĐA LỚP có thể được cấu hình trong một VRF.
- LƯU LƯỢNG trong một VRF không thể được chuyển tiếp ra khỏi một GIAO DIỆN nằm trong một VRF khác.
    - Tuy nhiên, như một trường hợp ngoại lệ, RÒ RỈ VRF (VRF LEAKING) có thể được cấu hình để cho phép lưu lượng đi qua GIỮA CÁC VRF.
- VRF thường được sử dụng để hỗ trợ MPLS (Chuyển mạch nhãn đa giao thức).
    - Loại VRF mà chúng ta đang nói đến ở đây là VRF-Lite (VRF không có MPLS).
- VRF thường được sử dụng bởi CÁC NHÀ CUNG CẤP DỊCH VỤ để cho phép MỘT THIẾT BỊ mang lưu lượng từ NHIỀU KHÁCH HÀNG khác nhau.
    - LƯU LƯỢNG CỦA MỖI KHÁCH HÀNG được cô lập với BÊN NGOÀI.
    - CÁC ĐỊA CHỈ IP CỦA KHÁCH HÀNG có thể trùng lặp mà không gặp vấn đề gì.

CẤU HÌNH VRF

![image](https://github.com/psaumur/CCNA/assets/106411237/fec7669b-8868-4529-81fa-6f52e07ff6e4)

Tạo và Cấu hình các VRF

![image](https://github.com/psaumur/CCNA/assets/106411237/624ebfc0-c7c0-498d-a00b-c19e2738585a)

Cách thực hiện lệnh `show ip route` cho các VRF

![image](https://github.com/psaumur/CCNA/assets/106411237/cbe724be-4497-4976-9927-18ff5c71a4c7)

Lệnh `ping` tới các VRF khác

![image](https://github.com/psaumur/CCNA/assets/106411237/f29dd935-0ec7-4756-b24a-fc44391254c0)
