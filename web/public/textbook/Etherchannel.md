# 23. ETHERCHANNEL

ETHERCHANNEL LÀ GÌ?

ETHERCHANNEL cho phép bạn NHÓM (GROUP) nhiều GIAO DIỆN vật lý thành một nhóm hoạt động như một GIAO DIỆN LOGIC DUY NHẤT - do đó chúng HOẠT ĐỘNG giống như thể chúng là một GIAO DIỆN duy nhất.

Một **LAYER 2 ETHERCHANNEL** là một nhóm các CỔNG SWITCH hoạt động như một GIAO DIỆN duy nhất.

Một **LAYER 3 ETHERCHANNEL** là một nhóm các CỔNG ĐỊNH TUYẾN (ROUTED PORTS) hoạt động như một GIAO DIỆN duy nhất mà bạn gán một ĐỊA CHỈ IP cho nó.

![image](https://github.com/psaumur/CCNA/assets/106411237/86cecd4a-1554-4ece-8a88-6f97e24788f1)

Khi băng thông của các GIAO DIỆN kết nối với CÁC THIẾT BỊ ĐẦU CUỐI lớn hơn băng thông của kết nối tới (các) SWITCH PHÂN PHỐI (DISTRIBUTION SWITCH), điều này được gọi là **ĐIỂM NGHẼN BĂNG THÔNG (OVERSUBSCRIPTION).**

Một mức độ OVERSUBSCRIPTION nhất định có thể chấp nhận được, nhưng quá nhiều sẽ gây ra tắc nghẽn.

![image](https://github.com/psaumur/CCNA/assets/106411237/6ada996f-8fd4-4339-9ad7-d52e51a3553e)

- Nếu bạn kết nối HAI SWITCH với nhau bằng nhiều liên kết, TẤT CẢ trừ một liên kết sẽ bị VÔ HIỆU HÓA bởi GIAO THỨC CÂY KHUNG - STP (Đèn xanh so với Đèn cam ở trên switch ASW1).

TẠI SAO?

- Nếu TẤT CẢ các giao diện của ASW1 đều ở trạng thái CHUYỂN TIẾP, các VÒNG LẶP LỚP 2 sẽ hình thành giữa ASW1 và DSW1, dẫn đến BÃO QUẢNG BÁ (Rất tệ!).
- Các liên kết khác sẽ không được sử dụng trừ khi liên kết đang hoạt động bị hỏng. Trong trường hợp đó, một trong các liên kết không hoạt động sẽ bắt đầu chuyển tiếp.

Một ETHERCHANNEL (trong sơ đồ cấu trúc mạng) được biểu diễn như THẾ NÀY (vòng tròn bao quanh các kết nối đa luồng):

![image](https://github.com/psaumur/CCNA/assets/106411237/4c2cfcf8-57f2-4907-8322-2f26cc7dc7e4)

- ETHERCHANNEL nhóm nhiều kênh lại với nhau để đóng vai trò như một GIAO DIỆN DUY NHẤT.
- STP sẽ coi NHÓM này là một GIAO DIỆN duy nhất.

![image](https://github.com/psaumur/CCNA/assets/106411237/a48bed14-11b4-42ba-965a-9724598d3b69)

(Tất cả GIAO DIỆN đều sáng đèn Xanh!)

Lưu lượng sử dụng ETHERCHANNEL sẽ được cân bằng tải giữa các GIAO DIỆN vật lý trong nhóm.

Một thuật toán được sử dụng để xác định lưu lượng NÀO sẽ sử dụng giao diện vật lý NÀO (chi tiết hơn sẽ có ở phần sau).

Một số tên gọi khác của ETHERCHANNEL là:

- PORT CHANNEL (Kênh cổng)
- LAG (Link Aggregation Group - Nhóm liên kết tổng hợp)

---

ETHERCHANNEL CÂN BẰNG TẢI NHƯ THẾ NÀO?

![image](https://github.com/psaumur/CCNA/assets/106411237/bc257ff8-bf91-4744-a6cb-8f603ee9d294)

- EtherChannel cân bằng tải dựa trên các **“luồng” (flows)**.
- Một “luồng” là một sự giao tiếp giữa HAI NÚT (NODES) trong MẠNG.
- Các KHUNG TIN trong cùng một “luồng” sẽ được CHUYỂN TIẾP bằng CÙNG MỘT giao diện vật lý.
- Nếu các khung tin trong cùng một luồng được chuyển tiếp bằng các giao diện vật lý khác nhau, một số khung tin có thể đến đích không đúng thứ tự/trình tự, điều này có thể gây ra lỗi.
- Bạn có thể THAY ĐỔI CÁC ĐẦU VÀO được sử dụng trong tính toán lựa chọn GIAO DIỆN (cho các “luồng”).
    - CÁC ĐẦU VÀO có thể được sử dụng:
        - ĐỊA CHỈ MAC NGUỒN (SOURCE MAC ADDRESS)
        - ĐỊA CHỈ MAC ĐÍCH (DESTINATION MAC ADDRESS)
        - ĐỊA CHỈ MAC NGUỒN và ĐÍCH
        - ĐỊA CHỈ IP NGUỒN
        - ĐỊA CHỈ IP ĐÍCH
        - ĐỊA CHỈ IP NGUỒN và ĐÍCH

Cách xem cấu hình cho phương pháp CÂN BẰNG TẢI (LOAD-BALANCING):

![image](https://github.com/psaumur/CCNA/assets/106411237/571623bf-b96b-4382-ada5-f14f93ec1a6a)

Cách THAY ĐỔI phương pháp CÂN BẰNG TẢI:

![image](https://github.com/psaumur/CCNA/assets/106411237/5919f2fd-80bb-4b10-bfa0-ce403f52c710)

![image](https://github.com/psaumur/CCNA/assets/106411237/bc30e17e-716a-41cd-a57a-69a661b5d58e)

---

CÁCH CẤU HÌNH ETHERCHANNELS LỚP 2 / LỚP 3

Có BA phương pháp cấu hình ETHERCHANNEL trên các SWITCH của Cisco.

**PAgP (Port Aggregation Protocol)**

- Giao thức độc quyền của Cisco.
- Thương lượng động việc tạo/duy trì ETHERCHANNEL (giống như DTP làm cho các đường trung kế trunk).

```
💡 LACP (Link Aggregation Control Protocol)
```
- Giao thức tiêu chuẩn công nghiệp (IEEE 802.3ad).
- Thương lượng động việc tạo/duy trì ETHERCHANNEL (giống như DTP làm cho các đường trung kế trunk).

**EtherChannel Tĩnh (Static EtherChannel)**

- Không sử dụng giao thức để xác định xem có nên hình thành EtherChannel hay không.
- Các giao diện được cấu hình tĩnh để tạo thành một EtherChannel.

Có thể gom tối đa 8 GIAO DIỆN vào một EtherChannel duy nhất (LACP cho phép tối đa 16 nhưng chỉ có 8 cái HOẠT ĐỘNG, 8 cái còn lại sẽ ở chế độ DỰ PHÒNG - STANDBY, chờ cho đến khi một giao diện đang hoạt động bị hỏng).

---

CẤU HÌNH PAgP

![image](https://github.com/psaumur/CCNA/assets/106411237/d0c734e2-79ad-43ad-a50b-c17ced608021)

```
💡 LƯU Ý rằng “auto” và “desirable” là các chế độ DUY NHẤT có sẵn cho PAgP.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/9eabb76a-1846-48d3-abb1-bd6898a432e7)

Thương lượng PAgP để hình thành một ETHERCHANNEL:

```
💡 AWS1(config-if-range)# channel-group 1 mode desirable
Creating a port-channel interface Port-channel1
```

Sẽ xuất hiện trong danh sách giao diện là “Port-channel1”.

![image](https://github.com/psaumur/CCNA/assets/106411237/bc0c1190-9e39-4ea2-923c-b29e03e9d40a)

Số hiệu “channel-group” phải TRÙNG KHỚP giữa các GIAO DIỆN thành viên trên cùng một SWITCH.

Nó KHÔNG cần phải TRÙNG KHỚP với số hiệu “channel-group” trên SWITCH KIA!

```
💡 (channel-group 1 trên AWS1 có thể hình thành ETHERCHANNEL với channel-group 2 trên DSW1)
```

---

CẤU HÌNH LACP

![image](https://github.com/psaumur/CCNA/assets/106411237/ba4adcf6-dec5-456f-b8d7-ab4e6b722cbf)

```
💡 LƯU Ý rằng “active” và “passive” là các chế độ DUY NHẤT có sẵn cho LACP.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/0a314613-d398-49f1-a4d3-1b50fb96ab7d)

Thương lượng LACP để hình thành một ETHERCHANNEL:

Số hiệu “channel-group” phải TRÙNG KHỚP giữa các GIAO DIỆN thành viên trên cùng một SWITCH.

Nó KHÔNG cần phải TRÙNG KHỚP với số hiệu “channel-group” trên SWITCH KIA!

```
💡 (channel-group 1 trên AWS1 có thể hình thành ETHERCHANNEL với channel-group 2 trên DSW1)
```

---

CẤU HÌNH ETHERCHANNEL TĨNH (STATIC ETHERCHANNEL)

![image](https://github.com/psaumur/CCNA/assets/106411237/92db26e7-21ae-40c6-89ee-abe0197ed8ad)

```
💡 LƯU Ý rằng “on” là chế độ DUY NHẤT có sẵn cho ETHERCHANNEL TĨNH.
```

Chế độ ON chỉ hoạt động với chế độ ON.

ON + desirable = KHÔNG HOẠT ĐỘNG.

ON + active = KHÔNG HOẠT ĐỘNG.

---

CÁCH CẤU HÌNH THỦ CÔNG GIAO THỨC THƯƠNG LƯỢNG

![image](https://github.com/psaumur/CCNA/assets/106411237/83ef9bc8-4bd4-4dd3-b28e-83439ba96860)

CÓ HAI TÙY CHỌN:

- Giao thức LACP
- Giao thức PAgP

(Hình trên hiển thị lỗi không khớp giao thức vì LACP không hỗ trợ “desirable” - chỉ có PAgP mới hỗ trợ).

(“channel-group 1 mode active” hoạt động được vì LACP hỗ trợ “active”).

---

SAU KHI CẤU HÌNH CHẾ ĐỘ ETHERCHANNEL

CẤU HÌNH GIAO DIỆN CỔNG (PORT INTERFACE)

![image](https://github.com/psaumur/CCNA/assets/106411237/c485cdf1-f0ed-44b8-8c91-c0553bf6d82d)

“show running-config” sẽ hiển thị “interface Port-channel1” trong phần cấu hình.

![image](https://github.com/psaumur/CCNA/assets/106411237/6adda3dd-6408-445f-bb3f-61847b3920 b6)

```
💡 LƯU Ý các GIAO DIỆN VẬT LÝ (g0/0-g0/3) đã được tự động cấu hình theo cấu hình của Port-channel1!
```

---

CÁC LƯU Ý QUAN TRỌNG VỀ CẤU HÌNH ETHERCHANNEL

- Các GIAO DIỆN thành viên phải có CẤU HÌNH TRÙNG KHỚP với nhau:
    - Cùng chế độ DUPLEX (Full / Half)
    - Cùng TỐC ĐỘ (SPEED)
    - Cùng chế độ SWITCHPORT (Access / Trunk)
    - Cùng các VLAN được phép / VLAN bản địa (đối với các giao diện TRUNK)

- Nếu cấu hình của một GIAO DIỆN KHÔNG TRÙNG KHỚP với các giao diện khác, nó sẽ bị LOẠI RA khỏi EtherChannel.

---

XÁC MINH TRẠNG THÁI CỦA ETHERCHANNEL

```
💡 “show etherchannel summary”
```

![image](https://github.com/psaumur/CCNA/assets/106411237/9e0edb15-2806-4d51-afc9-ad67ed465a97)

Lưu ý thông tin ở phía dưới. (”SU” nghĩa là S - Lớp 2 + U - đang được sử dụng).

Protocol = Giao thức mà Etherchannel đang sử dụng (trong trường hợp này là LACP).

“Ports” = danh sách các giao diện trong EtherChannel (P = được bó lại trong port-channel).

CÁC CỜ KHÁC (OTHER FLAGS):

![image](https://github.com/psaumur/CCNA/assets/106411237/23d92ae1-9cc6-4f3a-9ddf-2ead59705c1c)

“D” = Down (Bị tắt).

![image](https://github.com/psaumur/CCNA/assets/106411237/b1b3ce70-d9a6-4bd2-be4d-976077438c85)

Thay đổi một trong các giao diện thành viên bằng lệnh “switchport mode access” đã làm cho nó khác biệt so với các thành viên khác, nên bây giờ nó xuất hiện dưới trạng thái “s” = suspended (bị tạm đình chỉ).

Một lệnh hữu ích khác:

```
💡 “show etherchannel port-channel”
```

![image](https://github.com/psaumur/CCNA/assets/106411237/61731b0c-1cc5-4a7e-b92c-d0afbea0ac2d)

```
💡 “show spanning-tree” sẽ hiển thị giao diện cổng EtherChannel duy nhất.
```

![image](https://github.com/psaumur/CCNA/assets/106411237/df0b9cc8-0448-4bbd-aefa-62fadf2b6089)

---

ETHERCHANNELS LỚP 3 (LAYER 3 ETHERCHANNELS)

![image](https://github.com/psaumur/CCNA/assets/106411237/c553ad64-1d8e-4a2a-a741-3102c89dc030)

CÁCH CẤU HÌNH MỘT ETHERCHANNEL LỚP 3 (từ một cấu hình sạch)

![image](https://github.com/psaumur/CCNA/assets/106411237/c4520b2f-1e3b-49b8-85b1-458cdb6fc865)

```
💡 “show running-config”
```

![image](https://github.com/psaumur/CCNA/assets/106411237/8638f32d-47c3-4c64-b68e-a9e2e0070ac9)

LƯU Ý: Không có SWITCHPORT và không có IP INTERFACE.

Chúng ta cấu hình địa chỉ IP ở đâu? Trực tiếp trên GIAO DIỆN CỔNG (PORT INTERFACE)!

![image](https://github.com/psaumur/CCNA/assets/106411237/3ec55a24-1de5-44a7-926c-f85500042115)

![image](https://github.com/psaumur/CCNA/assets/106411237/f99ea2a6-82fb-494a-b80d-a171732d5786)

(”RU” - “R” = Lớp 3, “U” = đang được sử dụng).

![image](https://github.com/psaumur/CCNA/assets/106411237/acfe62c5-6908-4782-9440-1f75f842c2c9)

---

CÁC LỆNH ĐÃ HỌC TRONG CHƯƠNG NÀY:

```
SW(config) port-channel load-balance *mode*
```
Cấu hình phương pháp cân bằng tải EtherChannel trên một SWITCH.
```
SW# show etherchannel load-balance
```
Hiển thị thông tin về các cài đặt cân bằng tải.
```
SW(config-if)# channel-group *number* mode {desirable | auto | active | passive | on}
```
Cấu hình một giao diện trở thành một PHẦN của một EtherChannel.
```
SW# show etherchannel summary
```
Hiển thị bản tóm tắt các EtherChannel trên một SWITCH.
```
SW# show etherchannel port-channel
```
Hiển thị thông tin về các giao diện kênh cổng ảo trên một SWITCH.

![image](https://github.com/psaumur/CCNA/assets/106411237/6cae87f0-0226-40cc-92ba-b839c7a5ff53)
