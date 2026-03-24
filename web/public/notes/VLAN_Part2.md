# 17. MẠNG LAN ẢO (VLANS) : PHẦN 2

Sơ đồ VLAN cơ bản từ PHẦN 1:

![image](https://github.com/psaumur/CCNA/assets/106411237/f6df37e0-d494-4e46-b6e8-6d2ba0cd0ff6)


Còn sơ đồ mạng DƯỚI ĐÂY thì sao?

![image](https://github.com/psaumur/CCNA/assets/106411237/e6aff877-3792-469f-8955-0f3e17c6f1ed)


Lưu ý rằng sơ đồ này có HAI Switch (SW1 và SW2) và bộ phận KỸ THUẬT (VLAN 10) nằm ở hai vị trí khác nhau trong mạng.

---

CỔNG TRUNG KẾ (TRUNK PORTS)

- Trong một mạng nhỏ với ít VLAN, ta có thể sử dụng một giao diện riêng cho MỖI VLAN khi kết nối giữa các SWITCH với nhau, hoặc giữa SWITCH và ROUTER.

- TUY NHIÊN, khi số lượng VLAN tăng lên, phương án này không còn khả thi. Nó sẽ gây lãng phí giao diện, và thông thường các ROUTER sẽ không có đủ GIAO DIỆN cho mỗi VLAN.

- Bạn có thể sử dụng **CỔNG TRUNG KẾ (TRUNK PORTS)** để truyền tải lưu lượng của nhiều VLAN trên một giao diện duy nhất.

Một CỔNG TRUNG KẾ mang theo nhiều kết nối VLAN trên một giao diện:

![image](https://github.com/psaumur/CCNA/assets/106411237/5cb7c933-689a-499b-9f30-51fe63d8b059)


![image](https://github.com/psaumur/CCNA/assets/106411237/8ea9a799-cf0d-4b1d-9706-db002772fe6d)


Làm thế nào một gói tin biết được nó thuộc về VLAN NÀO khi đi qua CỔNG TRUNG KẾ?

**CÁC THẺ GẮN VLAN (VLAN TAGS)!**

Các SWITCH sẽ “gắn thẻ” (tag) cho tất cả các khung tin mà chúng gửi qua một ĐƯỜNG TRUNG KẾ (TRUNK LINK). Điều này cho phép SWITCH nhận biết được khung tin đó thuộc về VLAN nào.

CỔNG TRUNG KẾ (TRUNK PORT) = Các cổng “Được gắn thẻ” (Tagged ports).

CỔNG TRUY CẬP (ACCESS PORT) = Các cổng “Không được gắn thẻ” (Untagged ports).

---

GẮN THẺ VLAN (VLAN TAGGING)

- Có HAI giao thức TRUNK chính:
    - ISL (Inter-Switch Link)
    - IEEE 802.1Q (còn được gọi là “dot1q”)

ISL là một giao thức độc quyền cũ của Cisco được tạo ra trước khi có tiêu chuẩn chung IEEE 802.1Q.

IEEE 802.1Q là một giao thức tiêu chuẩn công nghiệp được tạo ra bởi IEEE (Viện Kỹ nghệ Điện và Điện tử).

Có lẽ bạn sẽ KHÔNG BAO GIỜ sử dụng ISL trong thực tế; ngay cả các thiết bị Cisco hiện đại cũng không còn sử dụng nó.

Đối với chứng chỉ CCNA, bạn chỉ cần học về 802.1Q.

---

TIÊU ĐỀ ETHERNET VỚI 802.1Q (ETHERNET HEADER with 802.1Q)

![image](https://github.com/psaumur/CCNA/assets/106411237/00e817cd-1cac-44c5-a5f6-5459d383236d)


- THẺ (TAG) 802.1Q được chèn vào giữa các trường NGUỒN (SOURCE) và LOẠI/ĐỘ DÀI (TYPE/LENGTH) trong KHUNG TIN ETHERNET.
- THẺ này có độ dài 4 byte (32 bit).
- THẺ bao gồm HAI trường chính:
    - Tag Protocol Identifier (TPID - Mã định danh giao thức thẻ)
    - Tag Control Information (TCI - Thông tin điều khiển thẻ)
        - TCI bao gồm BA trường phụ:

![image](https://github.com/psaumur/CCNA/assets/106411237/8e52856b-58b9-448e-a007-254973fe707e)


TPID (TAG Protocol Identifier):

- Độ dài 16 bit (2 byte).
- Luôn được đặt giá trị là 0x8100. Điều này chỉ ra rằng khung tin là loại THẺ 802.1Q.

TCI / PCP (Priority Code Point):

- Độ dài 3 bit.
- Được sử dụng cho Class of Service (CoS), giúp ưu tiên lưu lượng quan trọng trong các mạng bị tắc nghẽn.

TCI / DEI (Drop Eligible Indicator):

- Độ dài 1 bit.
- Được sử dụng để chỉ ra các khung tin có thể bị loại bỏ nếu mạng bị tắc nghẽn.

TCI / VID (VLAN ID):

- Độ dài 12 bit.
- Xác định VLAN mà khung tin thuộc về.
- 12 bit cho phép tổng cộng 4096 VLAN (2^12), dải từ 0 - 4095.
- Các VLAN 0 và 4095 được dành riêng và không thể sử dụng.
- Do đó, dải VLAN thực tế có thể dùng là từ 1 - 4094.

LƯU Ý: Giao thức ISL của Cisco cũng có dải VLAN từ 1 - 4094.

---

DẢI CÁC VLAN (VLAN RANGES)

![image](https://github.com/psaumur/CCNA/assets/106411237/1c55a830-bfdd-423a-9688-334a3dd2bfa3)


---

VLAN BẢN ĐỊA (NATIVE VLAN)

![image](https://github.com/psaumur/CCNA/assets/106411237/8b1e09a1-e9c5-410e-ad87-581b95eaca81)


![image](https://github.com/psaumur/CCNA/assets/106411237/f8145795-b3f7-4766-9507-4fba7c743a14)


![image](https://github.com/psaumur/CCNA/assets/106411237/a1811276-c043-4035-9957-800873068615)

---

CẤU HÌNH TRUNG KẾ (TRUNK CONFIGURATION)

![image](https://github.com/psaumur/CCNA/assets/106411237/d73b8f0b-2154-4e7f-8057-7c5b3f5078cc)


![image](https://github.com/psaumur/CCNA/assets/106411237/29313a87-cf16-439c-8a9e-90b518326954)

Nhiều switch hiện đại hoàn toàn không hỗ trợ giao thức ISL của Cisco. Chúng chỉ hỗ trợ 802.1Q (dot1q).

Tuy nhiên, những SWITCH hỗ trợ cả hai (như loại mình đang sử dụng trong ví dụ này) sẽ có chế độ đóng gói TRUNK mặc định là “AUTO”.

Để cấu hình THỦ CÔNG một GIAO DIỆN là CỔNG TRUNG KẾ (TRUNK PORT), trước tiên bạn phải thiết lập kiểu đóng gói là “802.1Q” hoặc “ISL”. Trên các SWITCH chỉ hỗ trợ 802.1Q, bước này là không cần thiết.

Sau khi thiết lập kiểu đóng gói, bạn có thể cấu hình giao diện đó thành TRUNK:

1) Chọn giao diện cần cấu hình.

2) Sử dụng lệnh “#switchport trunk encapsulation dot1q” để thiết lập chế độ đóng gói là 802.1Q.

3) Sử dụng lệnh “#switchport mode trunk” để cấu hình thủ công giao diện thành TRUNK.

![image](https://github.com/psaumur/CCNA/assets/106411237/6b897fb0-14a3-4e6a-b4e8-e278a6aec08e)


Sử dụng lệnh “#show interfaces trunk” để xác nhận các GIAO DIỆN đang chạy TRUNK.

![image](https://github.com/psaumur/CCNA/assets/106411237/d3e144c7-90e3-4ab0-8021-7eb4d1420282)


Các lệnh để cho phép một VLAN đi qua một đường TRUNK nhất định:

![image](https://github.com/psaumur/CCNA/assets/106411237/6a60f6ce-55be-4df5-a715-b871e5e461f4)


![image](https://github.com/psaumur/CCNA/assets/106411237/b39b091d-1ea9-4f72-b592-1eeb8ef25f90)


Lệnh để thay đổi VLAN BẢN ĐỊA (NATIVE VLAN):

![image](https://github.com/psaumur/CCNA/assets/106411237/5109becb-27dd-4c63-9c7b-74b6f55e9d5f)


![image](https://github.com/psaumur/CCNA/assets/106411237/36abc437-69cb-4c56-8a59-87479ce01a7f)

---

Thiết lập các đường TRUNK cho mạng này:

![image](https://github.com/psaumur/CCNA/assets/106411237/892b5322-807b-4d76-91cb-a039766794c5)


Chúng ta sẽ cần cấu hình:

SW1: giao diện g0/0 (đã được cấu hình ở phần trước).

SW2: các giao diện g0/0 và g0/1.

SW2 g0/0:

![image](https://github.com/psaumur/CCNA/assets/106411237/7b313959-b710-4bb6-a281-727ec9477c3e)


SW2 g0/1:

![image](https://github.com/psaumur/CCNA/assets/106411237/c26f17c8-0ec9-4406-ab66-83adf28c8550)


Còn bộ định tuyến R1 thì sao?

---

BỘ ĐỊNH TUYẾN TRÊN MỘT NHÁNH (ROUTER ON A STICK - ROAS)

![image](https://github.com/psaumur/CCNA/assets/106411237/66c4ace0-8341-4c9c-8ff5-7c171034df53)


![image](https://github.com/psaumur/CCNA/assets/106411237/b409165d-39e6-4fba-ade1-2451f7e2fa8c)


![image](https://github.com/psaumur/CCNA/assets/106411237/112a2089-5a9e-4b13-945c-6be7f188d6a8)


LƯU Ý tên các Giao diện phụ (Sub-Interface) (giống như trong sơ đồ mạng) là 0.10, 0.20 và 0.30.

Bạn gán địa chỉ IP cho chúng giống hệt như cách làm với một giao diện thông thường (sử dụng địa chỉ IP khả dụng cuối cùng của mạng con VLAN tương ứng).

Các giao diện phụ sẽ xuất hiện khi dùng lệnh “show ip interface brief”.

![image](https://github.com/psaumur/CCNA/assets/106411237/9b7ecbd1-c5f4-4ed0-9988-8fd17e16c9ae)


Chúng cũng xuất hiện trong lệnh “show ip route” (Bảng định tuyến).

![image](https://github.com/psaumur/CCNA/assets/106411237/1e9bb3fa-5aca-4883-8aff-52a554dcfba6)


ROAS được sử dụng để định tuyến giữa nhiều VLAN bằng cách sử dụng một giao diện DUY NHẤT trên ROUTER và SWITCH.

Giao diện trên SWITCH được cấu hình như một đường TRUNK thông thường.

Giao diện trên ROUTER được cấu hình sử dụng các GIAO DIỆN PHỤ (SUB-INTERFACES). Bạn cấu hình thẻ VLAN (tag) và địa chỉ IP trên MỖI GIAO DIỆN PHỤ đó.

ROUTER sẽ hoạt động như thể các khung tin đến với một thẻ VLAN nhất định đã đến trên GIAO DIỆN PHỤ được cấu hình với thẻ VLAN đó.

ROUTER sẽ GẮN THẺ cho các khung tin được gửi ra từ MỖI GIAO DIỆN PHỤ tương ứng với THẺ VLAN đã cấu hình trên GIAO DIỆN PHỤ đó.
