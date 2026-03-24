# 59. GIỚI THIỆU VỀ TỰ ĐỘNG HÓA MẠNG (INTRODUCTION TO NETWORK AUTOMATION)

TẠI SAO CẦN TỰ ĐỘNG HÓA MẠNG

- Các phiên bản trước của CCNA tập trung vào mô hình truyền thống trong việc quản lý / kiểm soát mạng.
- Phiên bản hiện tại cũng tập trung vào mô hình truyền thống, nhưng các ứng viên CCNA được kỳ vọng sẽ có hiểu biết cơ bản về các chủ đề khác nhau liên quan đến tự động hóa mạng.
- Trong mô hình truyền thống, các kỹ sư quản lý từng thiết bị một bằng cách kết nối tới giao diện CLI của chúng qua SSH.

---

NHỮNG HẠN CHẾ CỦA VIỆC CẤU HÌNH TỪNG THIẾT BỊ MỘT

- Lỗi đánh máy và các sai sót nhỏ khác thường xuyên xảy ra.
- Tốn thời gian và rất kém hiệu quả trong các mạng quy mô lớn.
- Khó đảm bảo rằng tất cả các thiết bị đều TUÂN THỦ CẤU HÌNH TIÊU CHUẨN của tổ chức.

---

LỢI ÍCH CỦA TỰ ĐỘNG HÓA MẠNG

- Giảm thiểu Lỗi do con người (Lỗi đánh máy, v.v.).
- Mạng trở nên dễ mở rộng hơn nhiều và được triển khai chỉ trong một phần nhỏ thời gian so với trước đây.
    - Triển khai mới.
    - Thay đổi trên toàn mạng.
    - Xử lý sự cố.
- Có thể đảm bảo việc tuân thủ chính sách trên toàn mạng.
    - Cấu hình tiêu chuẩn.
    - Quản lý phiên bản phần mềm.

- Cải thiện hiệu quả hoạt động mạng giúp giảm chi phí vận hành (OP-EX - operating expenses) của mạng. Mỗi nhiệm vụ yêu cầu ít giờ công hơn.

```
Có nhiều công cụ / phương pháp khác nhau có thể được sử dụng để tự động hóa các tác vụ trong mạng

- SDN (Software-Defined Networking - Mạng xác định bằng phần mềm)
- Ansible
- Puppet
- Các kịch bản Python (Python scripts)
- v.v…
```

---

CÁC “MẶT PHẲNG” LOGIC (LOGIC PLANES) CỦA CÁC CHỨC NĂNG MẠNG

**Một ROUTER làm gì?**

- Nó chuyển tiếp các thông điệp giữa các mạng bằng cách kiểm tra thông tin trong tiêu đề Lớp 3.
- Nó sử dụng một giao thức định tuyến như OSPF để chia sẻ thông tin tuyến đường với các router khác và xây dựng bảng định tuyến.
- Nó sử dụng ARP để xây dựng bảng ARP, ánh xạ Địa chỉ IP với Địa chỉ MAC.
- Nó sử dụng Syslog để lưu nhật ký các sự kiện xảy ra.
- và CÒN NHIỀU NỮA…

**Một SWITCH làm gì?**

- Nó chuyển tiếp các thông điệp bên trong một mạng LAN bằng cách kiểm tra thông tin trong tiêu đề Lớp 2.
- Nó sử dụng STP để đảm bảo không có vòng lặp Lớp 2 trong mạng.
- Nó xây dựng bảng địa chỉ MAC bằng cách kiểm tra địa chỉ MAC Nguồn của các khung tin.
- Nó sử dụng Syslog để lưu nhật ký các sự kiện xảy ra.
- Nó cho phép người dùng kết nối tới nó qua SSH để quản lý.

---

Các chức năng khác nhau của thiết bị mạng có thể được chia nhỏ (phân loại) về mặt logic thành các *MẶT PHẲNG (PLANES)*

```
- MẶT PHẲNG DỮ LIỆU (DATA PLANE)
- MẶT PHẲNG ĐIỀU KHIỂN (CONTROL PLANE)
- MẶT PHẲNG QUẢN LÝ (MANAGEMENT PLANE)
```


- Các hoạt động của MẶT PHẲNG QUẢN LÝ và MẶT PHẲNG ĐIỀU KHIỂN thường được quản lý bởi CPU.
- Tuy nhiên, điều này không mong muốn đối với các hoạt động của MẶT PHẲNG DỮ LIỆU vì tốc độ xử lý của CPU chậm (nói một cách tương đối).
- Thay vào đó, một phần cứng chuyên dụng ASIC (Application-Specific Integrated Circuit - Vi mạch tích hợp chuyên dụng) được sử dụng.
    - ASICs là các con chip được chế tạo cho một mục đích cụ thể.
- Lấy một SWITCH làm ví dụ:
    - Khi nhận được một KHUNG TIN, ASIC (chứ không phải CPU) chịu trách nhiệm về logic chuyển mạch.
    - Bảng Địa chỉ MAC được lưu trữ trong một loại bộ nhớ gọi là TCAM (Ternary Content-Addressable Memory).
        - Một tên gọi phổ biến khác của bảng Địa chỉ MAC là CAM TABLE.
    - ASIC đưa địa chỉ MAC ĐÍCH của KHUNG TIN vào TCAM, bộ nhớ này sẽ trả về mục nhập bảng địa chỉ MAC tương ứng.
    - KHUNG TIN sau đó được chuyển tiếp ra khỏi THIẾT BỊ phù hợp.
- CÁC ROUTER hiện đại cũng sử dụng một mặt phẳng dữ liệu phần cứng tương tự: Một ASIC được thiết kế cho logic chuyển tiếp, và các bảng được lưu trữ trong TCAM.

---

TÓM TẮT ĐƠN GIẢN:

>- Khi một THIẾT BỊ nhận được lưu lượng ĐIỀU KHIỂN / QUẢN LÝ (đích đến là chính nó), nó sẽ được xử lý trong CPU.
>- Khi một THIẾT BỊ nhận được lưu lượng DỮ LIỆU cần đi qua THIẾT BỊ, nó sẽ được xử lý bởi ASIC để đạt tốc độ tối đa.

---

MẶT PHẲNG DỮ LIỆU (DATA PLANE)

- Tất cả các tác vụ liên quan đến việc chuyển tiếp DỮ LIỆU / LƯU LƯỢNG NGƯỜI DÙNG từ GIAO DIỆN này sang GIAO DIỆN khác đều là một phần của MẶT PHẲNG DỮ LIỆU.
- Một ROUTER nhận một thông điệp, tìm kiếm tuyến đường khớp cụ thể nhất trong BẢNG ĐỊNH TUYẾN của nó, và chuyển tiếp nó ra khỏi GIAO DIỆN phù hợp tới bước nhảy tiếp theo (next hop).
    - Nó cũng thực hiện việc gỡ bỏ tiêu đề LỚP 2 ban đầu, và đóng gói lại với một tiêu đề mới hướng tới địa chỉ MAC của bước nhảy tiếp theo.
- Một SWITCH nhận một thông điệp, kiểm tra Địa chỉ MAC ĐÍCH, và chuyển tiếp nó ra khỏi GIAO DIỆN phù hợp (hoặc chuyển tiếp tràn ngập - FLOODS).
    - Điều này bao gồm các chức năng như thêm / xóa các thẻ VLAN 802.1q.
- NAT (thay đổi địa chỉ nguồn / đích trước khi chuyển tiếp) là một phần của MẶT PHẲNG DỮ LIỆU.
- Việc quyết định chuyển tiếp / loại bỏ các thông điệp dựa trên ACL, bảo mật cổng (port-security), v.v. là một phần của MẶT PHẲNG DỮ LIỆU.
- MẶT PHẲNG DỮ LIỆU còn được gọi là ‘MẶT PHẲNG CHUYỂN TIẾP’ (FORWARDING PLANE).

![image](https://github.com/psaumur/CCNA/assets/106411237/6a72186b-2956-45f6-8643-801caa2cb28e)

---

MẶT PHẲNG ĐIỀU KHIỂN (CONTROL PLANE)

- MẶT PHẲNG DỮ LIỆU của một THIẾT BỊ đưa ra các quyết định chuyển tiếp như thế nào?
    - BẢNG ĐỊNH TUYẾN (ROUTING TABLE)
    - Bảng ĐỊA CHỈ MAC (MAC ADDRESS table)
    - Bảng ARP (ARP table)
    - STP
    - v.v…
    
- Các chức năng xây dựng nên CÁC bảng NÀY (và các chức năng khác ảnh hưởng đến MẶT PHẲNG DỮ LIỆU) là một phần của MẶT PHẲNG ĐIỀU KHIỂN.

- MẶT PHẲNG ĐIỀU KHIỂN *điều khiển* những gì MẶT PHẲNG DỮ LIỆU làm, ví dụ bằng cách xây dựng BẢNG ĐỊNH TUYẾN của ROUTER.

- MẶT PHẲNG ĐIỀU KHIỂN thực hiện các công việc *quản lý gián tiếp* (overhead):
    - Bản thân OSPF không chuyển tiếp các gói dữ liệu người dùng, nhưng nó thông báo cho MẶT PHẲNG DỮ LIỆU về CÁCH các gói tin nên được chuyển tiếp.
    - Bản thân STP không trực tiếp tham gia vào quá trình chuyển tiếp CÁC KHUNG TIN, nhưng nó thông báo cho MẶT PHẲNG DỮ LIỆU về việc GIAO DIỆN nào nên và không nên được sử dụng để chuyển tiếp CÁC KHUNG TIN.
    - Các thông điệp ARP không phải là dữ liệu người dùng nhưng chúng được sử dụng để xây dựng một BẢNG ARP, bảng này được sử dụng trong quá trình chuyển tiếp dữ liệu.

![image](https://github.com/psaumur/CCNA/assets/106411237/4c21b082-5d6e-4388-94c5-bebf33b50c8d)

---

MẶT PHẲNG QUẢN LÝ (MANAGEMENT PLANE)

- Giống như MẶT PHẲNG ĐIỀU KHIỂN, MẶT PHẲNG QUẢN LÝ thực hiện các công việc quản lý gián tiếp.
    - Tuy nhiên, MẶT PHẲNG QUẢN LÝ không trực tiếp ảnh hưởng đến việc chuyển tiếp thông điệp trong MẶT PHẲNG DỮ LIỆU.
- MẶT PHẲNG QUẢN LÝ bao gồm các GIAO THỨC được sử dụng để quản lý thiết bị.
    - SSH / TELNET : Được sử dụng để kết nối tới giao diện CLI của một THIẾT BỊ để cấu hình / quản lý nó.
    - SYSLOG : Được sử dụng để lưu nhật ký các sự kiện xảy ra trên thiết bị.
    - SNMP : Được sử dụng để giám sát các hoạt động của thiết bị.
    - NTP : Được sử dụng để duy trì thời gian chính xác trên thiết bị.

![image](https://github.com/psaumur/CCNA/assets/106411237/3cfffa40-f4cb-4042-8778-139605c2eb26)

---

MẠNG XÁC ĐỊNH BẰNG PHẦN MỀM (SDN - SOFTWARE-DEFINED NETWORKING)

- MẠNG XÁC ĐỊNH BẰNG PHẦN MỀM (SDN) là một hướng tiếp cận mạng tập trung hóa MẶT PHẲNG ĐIỀU KHIỂN vào một ứng dụng được gọi là *BỘ ĐIỀU KHIỂN (CONTROLLER)*.
- SDN cũng được gọi là KIẾN TRÚC XÁC ĐỊNH BẰNG PHẦN MỀM (SDA - SOFTWARE-DEFINED-ARCHITECTURE) hoặc MẠNG DỰA TRÊN BỘ ĐIỀU KHIỂN (CONTROLLER-BASED NETWORKING).
- CÁC MẶT PHẲNG ĐIỀU KHIỂN truyền thống sử dụng một kiến trúc phân tán.
    - Ví dụ:
        - Mỗi ROUTER trong MẠNG chạy OSPF và các ROUTER chia sẻ thông tin định tuyến, sau đó tính toán các tuyến đường ưu tiên của chúng tới từng đích đến.
- Một BỘ ĐIỀU KHIỂN SDN tập trung hóa các chức năng của MẶT PHẲNG ĐIỀU KHIỂN như việc tính toán các tuyến đường.
    - Đó chỉ là một ví dụ và mức độ tập trung hóa MẶT PHẲNG ĐIỀU KHIỂN có thể khác nhau rất nhiều.
- BỘ ĐIỀU KHIỂN có thể tương tác theo lập trình với THIẾT BỊ MẠNG bằng cách sử dụng các API (Application Programming Interface - Giao diện lập trình ứng dụng).

![image](https://github.com/psaumur/CCNA/assets/106411237/05c4c5d9-5ba4-480c-9c13-72fa1f7937db)

---

GIAO DIỆN HƯỚNG NAM (SBI - SOUTHBOUND INTERFACE)

- SBI được sử dụng để liên lạc giữa BỘ ĐIỀU KHIỂN và các THIẾT BỊ MẠNG mà nó điều khiển.
- Nó thường bao gồm một GIAO THỨC LIÊN LẠC và một API (Application Programming Interface).

- Các API tạo thuận lợi cho việc trao đổi dữ liệu giữa các chương trình.
    - DỮ LIỆU được trao đổi giữa BỘ ĐIỀU KHIỂN và các THIẾT BỊ MẠNG.
    - Một API trên các THIẾT BỊ MẠNG cho phép BỘ ĐIỀU KHIỂN truy cập thông tin trên các THIẾT BỊ, điều khiển CÁC BẢNG CỦA MẶT PHẲNG DỮ LIỆU của chúng, v.v.
- Một số ví dụ về SBI :
    - OpenFlow
    - Cisco OpFlex
    - Cisco OnePK (Open Network Environment Platform Kit)
    - NETCONF

---

 GIAO DIỆN HƯỚNG BẮC (NBI - NORTHBOUND INTERFACE)

- Sử dụng SBI, BỘ ĐIỀU KHIỂN liên lạc với các THIẾT BỊ được quản lý và thu thập thông tin về chúng:
    - CÁC THIẾT BỊ trong MẠNG.
    - SƠ ĐỒ MẠNG (TOPOLOGY) (cách các THIẾT BỊ được kết nối với nhau).
    - Các GIAO DIỆN hiện có trên mỗi THIẾT BỊ.
    - CÁU HÌNH của chúng.
- GIAO DIỆN HƯỚNG BẮC (NBI) là thứ cho phép chúng ta:
    - Tương tác với BỘ ĐIỀU KHIỂN.
    - Truy cập DỮ LIỆU mà nó thu thập được về MẠNG.
    - Lập trình cho MẠNG.
    - Thực hiện các thay đổi đối với MẠNG thông qua SBI.

- Một REST API (Representational State Transfer) được sử dụng trên bộ điều khiển như một giao diện để các ỨNG DỤNG (APPS) tương tác với nó.
- OSGi (Java Open Services Gateway Initiative) - API NBI dựa trên Java.

- DỮ LIỆU được gửi dưới một định dạng có cấu trúc (*đã được tuần tự hóa*) chẳng hạn như JSON hoặc XML.
    - Điều này giúp các chương trình sử dụng DỮ LIỆU dễ dàng hơn.

![image](https://github.com/psaumur/CCNA/assets/106411237/d980626f-f731-46a4-ba14-72c3d21f2fd3)

---

TỰ ĐỘNG HÓA TRONG MẠNG TRUYỀN THỐNG VS SDN

- Các tác vụ mạng cũng có thể được tự động hóa trong các kiến trúc MẠNG truyền thống:
    - Các kịch bản (SCRIPTS) có thể được viết (ví dụ: sử dụng Python) để đẩy các lệnh tới nhiều THIẾT BỊ cùng một lúc.
    - Python kết hợp với việc sử dụng tốt CÁC BIỂU THỨC CHÍNH QUY (REGULAR EXPRESSIONS) có thể phân tích các lệnh “show” để thu thập thông tin về các thiết bị mạng.
    
- Tuy nhiên, DỮ LIỆU mạnh mẽ và tập trung được thu thập bởi các BỘ ĐIỀU KHIỂN SDN tạo thuận lợi rất lớn cho các chức năng này.
    - BỘ ĐIỀU KHIỂN thu thập thông tin về tất cả THIẾT BỊ trong MẠNG.
    - Các API HƯỚNG BẮC cho phép các ỨNG DỤNG truy cập thông tin dưới một định dạng mà các chương trình dễ dàng hiểu được (ví dụ: JSON và XML).
    - DỮ LIỆU tập trung tạo thuận lợi cho việc phân tích trên toàn mạng.
- Các công cụ SDN có thể cung cấp những lợi ích của tự động hóa mà không yêu cầu các kịch bản và ứng dụng của bên thứ ba.
    - Bạn không cần chuyên môn về tự động hóa để tận dụng các Công cụ SDN.
    - Tuy nhiên, các API cho phép các ứng dụng bên thứ ba tương tác với BỘ ĐIỀU KHIỂN, điều này có thể rất mạnh mẽ.


>💡 Mặc dù SDN và tự động hóa không phải là cùng một thứ, nhưng kiến trúc SDN tạo thuận lợi rất lớn cho việc tự động hóa các tác vụ khác nhau trong mạng thông qua BỘ ĐIỀU KHIỂN SDN và các API.
