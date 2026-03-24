# 19. DTP / VTP (Không nằm trong Giáo trình)

DTP (Dynamic Trunking Protocol - Giao thức Trung kế Động)

- Giao thức cho phép các SWITCH thương lượng trạng thái các CỔNG (SWITCHPORTS) của chúng một cách tự động mà không cần cấu hình thủ công, để trở thành:
    - CỔNG TRUY CẬP (ACCESS PORTS)
    - CỔNG TRUNG KẾ (TRUNK PORTS)

- DTP được BẬT (ENABLED) mặc định trên tất cả các giao diện SWITCH của Cisco.

Chúng ta vẫn thường cấu hình thủ công các cổng sử dụng:

- “switchport mode access”
- “switchport mode trunk”

```
💡 Lệnh 'show interfaces <id-giao-diện> switchport' sẽ hiển thị cho bạn các cài đặt của switchport đó.
```
Vì mục đích bảo mật, việc **cấu hình thủ công** luôn được khuyến nghị. DTP nên được vô hiệu hóa trên TẤT CẢ các cổng.

![image](https://github.com/psaumur/CCNA/assets/106411237/bf716a33-8e11-4c09-bb0b-336ba48ef26d)


DYNAMIC DESIRABLE (Mong muốn động):

- CHẾ ĐỘ này sẽ chủ động cố gắng hình thành một đường TRUNK với các SWITCH Cisco khác.
- Sẽ hình thành đường TRUNK nếu được kết nối với một cổng switch khác đang ở các chế độ:
    - “switchport mode trunk”
    - “switchport mode dynamic desirable”
    - “switchport mode dynamic auto”
    

TUY NHIÊN … nếu giao diện bên kia được thiết lập là “static access” (chế độ ACCESS), nó sẽ KHÔNG hình thành đường TRUNK, nó sẽ là một CỔNG TRUY CẬP.

DYNAMIC AUTO (Tự động động):

- CHẾ ĐỘ này sẽ KHÔNG chủ động cố gắng hình thành một đường TRUNK với các switch Cisco khác.
- Sẽ hình thành đường TRUNK nếu SWITCH được kết nối đang chủ động cố gắng hình thành TRUNK.
- Nó sẽ hình thành đường TRUNK với một switchport ở các chế độ sau:
    - “switchport mode trunk”
    - “switchport mode dynamic desirable”

Kết nối kiểu TRUNK tới ACCESS sẽ hoạt động ở **Chế độ không khớp (Mismatched Mode)**.

Cấu hình này KHÔNG hoạt động và SẼ dẫn đến lỗi. Lưu lượng truy cập sẽ KHÔNG thể truyền qua.

BẢNG HIỂN THỊ CÁC CHẾ ĐỘ KHÁC NHAU VÀ TÍNH TƯƠNG THÍCH TRONG VIỆC HÌNH THÀNH ĐƯỜNG TRUNK:

![image](https://github.com/psaumur/CCNA/assets/106411237/93d5e4f4-cb24-4d3f-ba62-fd002581cfbb)

---

DTP sẽ KHÔNG hình thành đường TRUNK với:

một ROUTER

một PC

v.v…

Cổng SWITCHPORT sẽ chỉ ở Chế độ TRUY CẬP (ACCESS Mode)!

CÁC SWITCH ĐỜI CŨ:

- “switchport mode dynamic desirable” = Chế độ quản trị mặc định.

CÁC SWITCH ĐỜI MỚI HƠN:

- “switchport mode dynamic auto” = Chế độ quản trị mặc định.

CÁCH VÔ HIỆU HÓA VIỆC THƯƠNG LƯỢNG DTP TRÊN MỘT GIAO DIỆN:

- “switchport nonegotiate”
- “switchport mode access”

Khuyến nghị bảo mật là vô hiệu hóa DTP trên tất cả các cổng SWITCHPORT và cấu hình chúng thủ công thành cổng ACCESS hoặc TRUNK.

---

ĐÓNG GÓI (ENCAPSULATION):

Các SWITCH hỗ trợ cả hai:

- 802.1Q
- ISL

Việc đóng gói TRUNK có thể sử dụng DTP để thương lượng kiểu đóng gói mà chúng sẽ sử dụng.

- Tự động thương lượng được Bật theo mặc định.

```
💡 'switchport trunk encapsulation negotiate'
```    

- ISL được ưu tiên hơn 802.1Q.
    - Nếu CẢ HAI SWITCH đều hỗ trợ ISL, ISL sẽ được chọn.
- Các khung tin DTP được gửi trong:
    - VLAN1 khi sử dụng ISL.
    - VLAN bản địa (Native VLAN) khi sử dụng 802.1Q (tuy nhiên, VLAN bản địa mặc định cũng là VLAN1).

---

VTP (VLAN Trunking Protocol - Giao thức Trung kế VLAN)

Trong chế độ Privileged EXEC:

```
💡 #show vtp status
```

- Giao thức để cấu hình các VLAN trên một SWITCH Trung tâm (Central SWITCH).
    - Một MÁY CHỦ (SERVER) để các SWITCH khác đồng bộ hóa theo (tự động cấu hình thông qua kết nối).
- Các switch khác (**VTP CLIENTS**) sẽ đồng bộ hóa cơ sở dữ liệu VLAN của chúng với SERVER.
- Được thiết kế cho các mạng lớn với nhiều VLAN (giúp giảm việc cấu hình thủ công).
- HIẾM KHI được sử dụng. Khuyên bạn là KHÔNG NÊN DÙNG nó.
- Có BA Phiên bản VTP:

    - v1
        - KHÔNG hỗ trợ Dải VLAN Mở rộng 1006-4094.
    - v2
        - KHÔNG hỗ trợ Dải VLAN Mở rộng 1006-4094.
        - Hỗ trợ các VLAN Token Ring; các phần khác tương tự V1.
    - v3
        - Hỗ trợ Dải VLAN Mở rộng 1006-4094.
        - Các máy CLIENT lưu trữ cơ sở dữ liệu VLAN trong NVRAM.

- Có **BA chế độ VTP**:
    - SERVER (Máy chủ)
    - CLIENT (Máy trạm)
    - TRANSPARENT (Trong suốt)

- Switch Cisco mặc định hoạt động ở chế độ VTP SERVER.

---

![image](https://github.com/psaumur/CCNA/assets/106411237/87dcd7ff-f3d3-4441-841c-a0506c249f03)

---

VTP SERVERS:

- Có thể THÊM / SỬA / XÓA các VLAN.
- Lưu trữ cơ sở dữ liệu VLAN trong NVRAM.
- Tăng Số hiệu Phiên bản (Revision Number) mỗi khi một VLAN được Thêm / Sửa / Xóa.
- Quảng bá **Phiên bản Mới nhất** của cơ sở dữ liệu VLAN trên các giao diện TRUNK.
- Các VTP CLIENTS sẽ đồng bộ hóa cơ sở dữ liệu VLAN theo nó.
- **VTP SERVER cũng hoạt động như một VTP CLIENT.**
    - **VÌ VẬY, một VTP SERVER sẽ đồng bộ hóa với một VTP SERVER khác có Số hiệu Phiên bản (Revision Number) cao hơn.**

<aside>
🚨 Một mối nguy hiểm của VTP:
Việc kết nối một SWITCH cũ có Số hiệu Phiên bản (Revision Number) cao hơn vào mạng (và nếu Tên miền VTP khớp), tất cả các SWITCH trong Miền sẽ đồng bộ hóa cơ sở dữ liệu VLAN của chúng theo SWITCH cũ đó.

</aside>


VTP CLIENTS:

```
💡 (config)# vtp mode client
```

- Không thể Thêm / Sửa / Xóa các VLAN.
- KHÔNG lưu trữ cơ sở dữ liệu VLAN trong NVRAM.
    - **Máy VTP v3 CLIENT thì CÓ lưu trữ.**
- Sẽ đồng bộ hóa cơ sở dữ liệu VLAN của chúng với SERVER có số hiệu phiên bản cao nhất trong Miền VTP của chúng.
- Quảng bá cơ sở dữ liệu VLAN của mình và chuyển tiếp các Quảng bá VTP tới các máy CLIENT khác qua các Cổng TRUNK.

CHẾ ĐỘ VTP TRONG SUỐT (VTP TRANSPARENT MODE):

```
💡 (config)# vtp mode transparent
```

- KHÔNG tham gia vào Miền VTP (KHÔNG đồng bộ hóa cơ sở dữ liệu VLAN).
- Duy trì cơ sở dữ liệu VLAN riêng trong NVRAM.
- Có thể Thêm / Sửa / Xóa các VLAN.
- Sẽ không Quảng bá tới các SWITCH khác.
- Sẽ chuyển tiếp các quảng bá VTP tới các SWITCH trong cùng Miền với nó.

---

MIỀN VTP (VTP DOMAINS)

Nếu một SWITCH không có Miền VTP (Domain NULL) nhận được một quảng bá VTP có tên Miền VTP, nó sẽ tự động gia nhập Miền VTP đó.

Nếu một SWITCH nhận được một quảng bá VTP trong cùng một Miền VTP nhưng có số hiệu phiên bản (revision number) cao hơn, nó sẽ cập nhật cơ sở dữ liệu VLAN của mình cho khớp.

---

SỐ HIỆU PHIÊN BẢN (REVISION NUMBERS):

Có HAI cách để ĐẶT LẠI SỐ HIỆU PHIÊN BẢN về 0:

- Thay đổi Miền VTP sang một Miền chưa được sử dụng.
- Thay đổi chế độ VTP sang TRONG SUỐT (TRANSPARENT).

---

SỐ PHIÊN BẢN VTP (VTP VERSION NUMBER)

```
💡 (config)#vtp version <số_phiên_bản>
```

Việc thay đổi Số hiệu Phiên bản sẽ buộc đồng bộ hóa/cập nhật tất cả các SWITCH đang kết nối sang Số hiệu Phiên bản mới nhất đó.
