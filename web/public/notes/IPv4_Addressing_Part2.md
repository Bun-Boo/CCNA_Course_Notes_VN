# 8. ĐỊA CHỈ IPv4 : PHẦN 2

SỐ LƯỢNG HOST TỐI ĐA TRÊN MỖI MẠNG

Hãy lấy một mạng Lớp C:

192.168.1.0/24

(có dải từ 0 ---> 255)

Nói cách khác, phần HOST (số .0) tương đương với 8 bit, vì vậy...

Phần Host = 8 bit = 2^8 = 256

TUY NHIÊN, vì Địa chỉ mạng (Network ID):

192.168.1.0 đã được Dành riêng (Reserved)

VÀ

192.168.1.255 (ĐỊA CHỈ QUẢNG BÁ - BROADCAST ADDRESS) CŨNG được dành riêng.

Số lượng Host TỐI ĐA trên mỗi mạng = 2^8 - 2 = 254 host.

---

Còn mạng Lớp B thì sao?

172.16.0.0/16 ----> 172.16.255.255/16

Phần Host = 16 bit = 2^16 = 65,536

Số lượng host tối đa trên mỗi mạng = 2^16 - 2 = 65,534 host.

---

Còn mạng Lớp A thì sao?

10.0.0.0/8 -------------> 10.255.255.255/8

Phần Host = 24 bit = 2^24 = 16,777,216

Số lượng host tối đa trên mỗi mạng = 2^24 - 2 = 16,777,214 host.

---

DO ĐÓ:

Công thức để tính số lượng HOST trên một mạng là:

**2 ^ N - 2** (2 lũy thừa N trừ 2)

với N = số lượng bit dành cho phần HOST.

---

ĐỊA CHỈ KHẢ DỤNG ĐẦU TIÊN / CUỐI CÙNG

Mạng Lớp C:

192.168.1.0/24 (ĐỊA CHỈ MẠNG)

Cộng 1 vào phần Host (phần Host = 00000001):

192.168.1.1/24 = ĐỊA CHỈ KHẢ DỤNG ĐẦU TIÊN

---

192.168.1.255/24 (ĐỊA CHỈ QUẢNG BÁ)

Trừ 1 từ ĐỊA CHỈ QUẢNG BÁ (phần Host = 11111110):

192.168.1.254/24 = ĐỊA CHỈ KHẢ DỤNG CUỐI CÙNG

---

Mạng Lớp B:

172.16.0.0/16 (ĐỊA CHỈ MẠNG)

Cộng 1 vào phần Host (0000 0000 0000 0001):

172.16.0.1/16 là ĐỊA CHỈ KHẢ DỤNG ĐẦU TIÊN

---

172.16.255.255/16 (ĐỊA CHỈ QUẢNG BÁ)

Trừ 1 vào Địa chỉ Quảng bá (1111 1111 1111 1110):

172.16.255.254/16 là ĐỊA CHỈ KHẢ DỤNG CUỐI CÙNG

---

Mạng Lớp A:

10.0.0.0/8 (ĐỊA CHỈ MẠNG)

Cộng 1 vào phần Host (00000000 00000000 00000001):

10.0.0.1/8 là ĐỊA CHỈ KHẢ DỤNG ĐẦU TIÊN

---

10.255.255.255/8 (ĐỊA CHỈ QUẢNG BÁ)

Trừ 1 vào Địa chỉ Quảng bá (1111 1111 1111 1110):

10.255.255.254/8 là ĐỊA CHỈ KHẢ DỤNG CUỐI CÙNG

---

CẤU HÌNH THIẾT BỊ TRÊN CISCO CLI

R1> enable
R1# show ip interface brief

Liệt kê các Giao diện (Interfaces), Địa chỉ IP, Phương thức (Method), Trạng thái (Status) và Giao thức (Protocol).

Giao diện (Interfaces):
- Những cổng giao diện nào khả dụng/đã kết nối.

Địa chỉ IP:
- Địa chỉ IP nào được gán cho giao diện đó.

Phương thức (Method):
- Địa chỉ IP được gán bằng phương thức nào (thủ công hay cấu hình động)?

Trạng thái (Status - Trạng thái Lớp 1):
- Trạng thái hiện tại của giao diện.
- 'administratively down' = Giao diện đã bị vô hiệu hóa bằng lệnh 'shutdown'.

Mặc định các giao diện trên Router Cisco sẽ ở trạng thái **Administratively down**.

Các giao diện trên Switch Cisco thì mặc định KHÔNG ở trạng thái administratively down.

Giao thức (Protocol - Trạng thái Lớp 2):
- Không thể hoạt động nếu Trạng thái (Lớp 1) đang 'down'.

![image](https://github.com/psaumur/CCNA/assets/106411237/fa113ff0-a8ee-410b-ab3e-64684654cac6)


---

// Lệnh configure terminal

R1# conf t

// Lệnh này để vào chế độ cấu hình giao diện

R1(config)# interface gigabitethernet 0/0

Tên giao diện có thể viết tắt thành 'g0/0' như được liệt kê trong các sơ đồ mạng vật lý.

![image](https://github.com/psaumur/CCNA/assets/106411237/df83bf09-c391-45b7-b1b4-41db061b84f4)


// Lệnh này thiết lập ĐỊA CHỈ IP và MẶT NẠ MẠNG (SUBNET MASK) cho thiết bị

R1(config-if) #ip address 10.255.255.254 255.0.0.0

// Lệnh này kích hoạt giao diện thiết bị

R1(config-if) #no shutdown

---

Hai thông báo sẽ xuất hiện cho thấy trạng thái đã chuyển sang 'up' (Status). Thông báo thứ hai sẽ cho thấy giao thức đường truyền (line protocol) hiện đã 'up' (Protocol).

// Từ khóa 'do' cho phép bạn chạy một lệnh ở chế độ Privileged EXEC khi đang đứng ở chế độ khác.

R1(config-if) #do show ip interface brief

Rất tốt để xác nhận rằng thiết bị/giao diện bạn vừa cấu hình đã hoạt động.

---

Một số lệnh 'show' CLI khác

![image](https://github.com/psaumur/CCNA/assets/106411237/bdc1152e-1946-4ddb-ae72-1e23b9c9defa)


'show interfaces <tên_giao_diện>'

- Hiển thị thông tin Lớp 1 và Lớp 2 về giao diện và một số thông tin Lớp 3.
- Hiển thị Địa chỉ MAC (hoặc địa chỉ BIA).
- Địa chỉ IP.
- ... và nhiều thông tin khác nữa.

'show interfaces description'

- Hiển thị mô tả cho giao diện.

Ví dụ:

// Vào chế độ cấu hình cho giao diện Gigabit 0/0

R1(config) #int g0/0

R1(config) #description ## to SW1 ##

Lệnh này thiết lập cột 'Description' hiển thị:

Interface 				Description
Gi0/0                   ## to SW1 ##
