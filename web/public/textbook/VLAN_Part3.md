# 18. MẠNG LAN ẢO (VLANS) : PHẦN 3

VLAN BẢN ĐỊA TRÊN BỘ ĐỊNH TUYẾN (ROAS)

![image](https://github.com/psaumur/CCNA/assets/106411237/838b9835-d17d-4d57-bac1-52f7e3adfd77)

Các khung tin không được gắn thẻ của VLAN bản địa (Native VLAN) sẽ nhanh hơn và hiệu quả hơn (kích thước nhỏ hơn) so với các khung tin được gắn thẻ.

Hãy đặt lại tất cả các SWITCH (SW1 và SW2) về vlan bản địa là 10.

![image](https://github.com/psaumur/CCNA/assets/106411237/1e903c1b-b814-40b5-aaea-1ba9f3f192c8)


Có **HAI phương pháp** để cấu hình VLAN bản địa trên một bộ định tuyến:

- Sử dụng lệnh “encapsulation dot1q <vlan-id> native” trên một Giao diện phụ (Sub-Interface).

![image](https://github.com/psaumur/CCNA/assets/106411237/2ea65208-6b2a-4cac-a463-982a731c9e24)


HOẶC

- Cấu hình địa chỉ IP cho VLAN bản địa trên giao diện vật lý của bộ định tuyến (lệnh “**encapsulation dot1q** <vlan-id> native” là không cần thiết).

![image](https://github.com/psaumur/CCNA/assets/106411237/dabcc3b4-13c3-4d60-abe2-c7cbb5edd4c2)


Đầu ra của lệnh “show running-config” của Giao diện G0/0:

![image](https://github.com/psaumur/CCNA/assets/106411237/37ce4f0f-0ac0-45ce-802f-5fd11057f69d)

---

SWITCH LỚP 3 (ĐA LỚP - MULTILAYER SWITCHES)

VẺ NGOÀI CỦA BIỂU TƯỢNG

![image](https://github.com/psaumur/CCNA/assets/106411237/0d63f5f9-5efe-4c61-a8e6-3cd6a1161d2a)


- Một SWITCH ĐA LỚP có khả năng thực hiện cả CHUYỂN MẠCH (SWITCHING) và ĐỊNH TUYẾN (ROUTING).
- Nó có khả năng nhận biết LỚP 3 (LAYER 3 AWARE).
- Bạn có thể gán địa chỉ IP cho Giao diện ảo lớp 3 của nó, giống như một bộ định tuyến.
- Bạn có thể tạo các Giao diện ảo cho mỗi VLAN và gán địa chỉ IP cho những giao diện đó.
- Bạn có thể cấu hình các tuyến đường trên đó, giống như một ROUTER.
- Nó có thể được sử dụng để định tuyến giữa các VLAN (Inter-VLAN routing).

![image](https://github.com/psaumur/CCNA/assets/106411237/af59481b-d0cb-41d7-9eba-7c8d47131c28)


SW2 được thay thế bằng một Switch Lớp 3.

Các kết nối đa VLAN tới R1 được gỡ bỏ và thay thế bằng một kết nối Lớp 3 điểm đối điểm (point-to-point).

![image](https://github.com/psaumur/CCNA/assets/106411237/8f3ad167-d774-4fcb-96a5-66e568edead8)


- SVIs (Switch Virtual Interfaces - Giao diện ảo của Switch) là các giao diện ảo mà bạn có thể gán địa chỉ IP vào trong một SWITCH ĐA LỚP.
- Cấu hình mỗi MÁY CHỦ (HOST) sử dụng SVI đó (KHÔNG phải bộ định tuyến R1) làm địa chỉ Cổng mặc định (Gateway Address).
- Để gửi lưu lượng tới các MẠNG CON / VLAN khác nhau, các máy tính sẽ gửi lưu lượng tới SWITCH, và SWITCH sẽ thực hiện định tuyến lưu lượng đó.

![image](https://github.com/psaumur/CCNA/assets/106411237/5409b2cc-f876-4754-afe3-33298930fd7a)


![image](https://github.com/psaumur/CCNA/assets/106411237/953372de-579a-4803-9418-0bd1aeef229d)


Xóa cấu hình của R1 để thiết lập hoạt động với kết nối Lớp 3 Điểm-đối-Điểm:

![image](https://github.com/psaumur/CCNA/assets/106411237/40354cbe-df39-4a78-97cd-bbb0bc10549c)


#no interface <id_giao_diện_phụ> : gỡ bỏ giao diện VLAN đó.

#default interface g0/0 : thiết lập lại giao diện g0/0 về các cài đặt mặc định của nó.

Sau đó cấu hình địa chỉ IP cho giao diện G0/0 mặc định của R1 là : 192.168.1.194 (theo sơ đồ mạng).

Cấu hình SW2 để sử dụng SVI và kết nối Lớp 3 Điểm-đối-Điểm với R1:

![image](https://github.com/psaumur/CCNA/assets/106411237/24d64087-f98c-4a1e-a07f-3f93f06f93a9)


“default interface <id-giao-diện>” : thiết lập lại các cài đặt trên giao diện được chỉ định về mặc định.

“ip routing” : lệnh **QUAN TRỌNG** để kích hoạt tính năng định tuyến Lớp 3 trên SWITCH.

“no switchport” : cấu hình giao diện từ một cổng switch Lớp 2 thành một “cổng định tuyến” (routed port) Lớp 3.

Lệnh này thiết lập Tuyến đường mặc định (Default Route) tới R1 (192.168.1.194) để tất cả lưu lượng đi ra ngoài mạng đều được định tuyến qua Gateway mặc định của R1.

![image](https://github.com/psaumur/CCNA/assets/106411237/7a682a2f-3ae3-420b-8f68-9e1050dd82c6)


![image](https://github.com/psaumur/CCNA/assets/106411237/c0b544b7-8f32-49ae-9a46-d09390a3d08c)


CẤU HÌNH SVI TRÊN SW2 (CÁC GIAO DIỆN ĐỊNH TUYẾN LỚP 3 ẢO)

![image](https://github.com/psaumur/CCNA/assets/106411237/7c1710fb-40d7-44a4-8336-b037e1c2ea77)


Các SVI bị **tắt (shut down)** theo mặc định, vì vậy hãy nhớ sử dụng lệnh “no shutdown”.

![image](https://github.com/psaumur/CCNA/assets/106411237/2b5b13c3-1364-4296-886c-0bd9b00b4167)


Tạo một SVI chưa xác định (VLAN 40) và trạng thái là “down/down”.

Các điều kiện để một SVI ở trạng thái “up/up” là gì?

- VLAN đó phải tồn tại trên SWITCH.
- SWITCH phải có ít nhất MỘT cổng truy cập (access port) thuộc VLAN đó ở trạng thái “up/up” VÀ/HOẶC một cổng trung kế (trunk port) cho phép VLAN đó ở trạng thái “up/up”.
- VLAN đó phải không bị tắt (bạn có thể dùng lệnh “shutdown” để vô hiệu hóa một VLAN).
- Chính SVI đó phải không bị tắt (các SVI bị vô hiệu hóa theo mặc định).

![image](https://github.com/psaumur/CCNA/assets/106411237/558ef418-5902-42d0-b4a5-cce14b56b77e)


Đường trung kế VLAN đã được thay thế thành công bằng một SVI của SWITCH Lớp 3.

Tất cả các máy chủ có thể kết nối được với nhau (đã kiểm tra bằng lệnh “ping”) cũng như truy cập được internet bên ngoài (thông qua biểu tượng Đám mây gắn với R1).
