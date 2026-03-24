# 1. CÁC THIẾT BỊ MẠNG (NETWORKING DEVICES)

## Mạng máy tính là gì?

Mạng máy tính là một mạng viễn thông kỹ thuật số cho phép các NÚT (NODES) chia sẻ TÀI NGUYÊN (RESOURCES).

Một MÁY TRẠM (CLIENT) là một thiết bị truy cập vào dịch vụ được cung cấp bởi một MÁY CHỦ (SERVER).

Một MÁY CHỦ (SERVER) là một thiết bị cung cấp các chức năng hoặc dịch vụ cho các MÁY TRẠM (CLIENTS).

- Lưu ý : Cùng một thiết bị có thể đóng vai trò là MÁY TRẠM trong một số tình huống và là MÁY CHỦ trong các tình huống khác. Ví dụ: Mạng ngang hàng (Peer-to-Peer).

SWITCH (Thiết bị chuyển mạch - Lớp 2):

- Cung cấp kết nối cho các máy chủ (hosts) trong cùng một mạng LAN (Local Area Network)
- Có nhiều giao diện mạng/cổng (ports) để các Thiết bị cuối (End Hosts) kết nối vào.
- KHÔNG cung cấp kết nối giữa các mạng LAN hoặc qua Internet.

ROUTER (Thiết bị định tuyến - Lớp 3):

- Có ít giao diện mạng hơn so với switch.
- Được sử dụng để cung cấp kết nối GIỮA các mạng LAN.
- Được sử dụng để gửi dữ liệu qua Internet.

FIREWALL (Tường lửa - Có thể ở Lớp 3, 4 và 7):

- Tường lửa là các thiết bị bảo mật mạng phần cứng chuyên dụng giúp kiểm soát lưu lượng mạng khi vào/ra khỏi mạng của bạn.
- Có thể được đặt "bên trong" hoặc "bên ngoài" mạng.
- Giám sát và kiểm soát lưu lượng mạng dựa trên các quy tắc đã được cấu hình.
- Được gọi là "Tường lửa thế hệ mới" (Next-Generation Firewalls) khi chúng bao gồm các khả năng lọc hiện đại và nâng cao hơn.
- Tường lửa dựa trên máy chủ (Host-based firewalls) là các ứng dụng phần mềm giúp lọc lưu lượng vào và ra khỏi một máy chủ, chẳng hạn như PC.
