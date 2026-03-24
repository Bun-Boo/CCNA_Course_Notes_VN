# 54. ẢO HÓA VÀ ĐIỆN TOÁN ĐÁM MÂY (VIRTUALIZATION AND CLOUD): PHẦN 1

CÁC MÁY CHỦ ẢO (VIRTUAL SERVERS)

- Mặc dù Cisco nổi tiếng hơn với CÁC THIẾT BỊ mạng (ROUTER, SWITCH, FIREWALL), họ cũng cung cấp CÁC MÁY CHỦ PHẦN CỨNG như UCS (Unified Computing System).
- Các nhà cung cấp MÁY CHỦ PHẦN CỨNG lớn nhất bao gồm Dell, EMC, HPE và IBM.

---

CÁC MÁY CHỦ TRƯỚC KHI CÓ ẢO HÓA

![image](https://github.com/psaumur/CCNA/assets/106411237/365cde17-88c6-4149-91f2-d67c79590aec)

- Trước khi có ẢO HÓA, có một mối quan hệ một-đối-một giữa MÁY CHỦ VẬT LÝ và HỆ ĐIỀU HÀNH.
- Trong HỆ ĐIỀU HÀNH đó, các ứng dụng cung cấp DỊCH VỤ (như WEB SERVER, EMAIL SERVER, v.v.) sẽ chạy.
- Một MÁY CHỦ VẬT LÝ sẽ được sử dụng cho WEB SERVER, một máy cho EMAIL SERVER, một máy cho DATABASE SERVER, v.v.
- Điều này không hiệu quả vì nhiều lý do:
    - Mỗi MÁY CHỦ VẬT LÝ đều đắt tiền và chiếm không gian, điện năng, v.v.
    - CÁC TÀI NGUYÊN trên mỗi MÁY CHỦ VẬT LÝ (CPU, RAM, LƯU TRỮ, NIC) thường chưa được khai thác hết hiệu năng.

---

ẢO HÓA (HYPERVISOR LOẠI 1)

![image](https://github.com/psaumur/CCNA/assets/106411237/62a40737-7451-4b38-a5bd-abd9367cbd40)

- ẢO HÓA cho phép chúng ta phá vỡ mối quan hệ một-đối-một giữa PHẦN CỨNG và HỆ ĐIỀU HÀNH, cho phép nhiều HỆ ĐIỀU HÀNH chạy trên một MÁY CHỦ VẬT LÝ duy nhất.
- Mỗi phiên bản hoạt động được gọi là một MÁY ẢO (VM - Virtual Machine).
- Một HYPERVISOR (Phần mềm quản lý ảo hóa) được sử dụng để quản lý và phân bổ CÁC TÀI NGUYÊN PHẦN CỨNG (CPU, RAM, v.v.) cho mỗi VM.
- Tên gọi khác của HYPERVISOR là VMM (Virtual Machine Monitor).
- Loại HYPERVISOR chạy trực tiếp trên lớp phần cứng được gọi là HYPERVISOR LOẠI 1.
    - Ví dụ bao gồm: VMware ESXi, Microsoft Hyper-V, v.v.
- CÁC HYPERVISOR LOẠI 1 còn được gọi là *bare-metal hypervisors* vì chúng chạy trực tiếp trên phần cứng (kim loại).
    - Một thuật ngữ khác là *native hypervisor* (Hypervisor nguyên bản).
- Đây là loại HYPERVISOR được sử dụng trong các môi trường trung tâm dữ liệu.

---

ẢO HÓA (HYPERVISOR LOẠI 2)

![image](https://github.com/psaumur/CCNA/assets/106411237/25a29935-a56d-4ffe-b9e4-15c5c50bca46)

- CÁC HYPERVISOR LOẠI 2 chạy như một chương trình trên một HỆ ĐIỀU HÀNH giống như một chương trình máy tính thông thường.
    - Ví dụ: VMware Workstation, Oracle Virtualbox, v.v.
- HỆ ĐIỀU HÀNH chạy trực tiếp trên phần cứng được gọi là HỆ ĐIỀU HÀNH MÁY CHỦ (HOST OS).
- HỆ ĐIỀU HÀNH chạy trong một VM được gọi là HỆ ĐIỀU HÀNH MÁY KHÁCH (GUEST OS).
- Tên gọi khác của HYPERVISOR LOẠI 2 là *hosted hypervisor* (Hypervisor được lưu trữ).
- Mặc dù CÁC HYPERVISOR LOẠI 2 hiếm khi được sử dụng trong các môi trường trung tâm dữ liệu, chúng lại rất phổ biến trên các thiết bị sử dụng cá nhân (ví dụ: nếu một người dùng MAC/Linux cần chạy một ứng dụng chỉ được hỗ trợ trên Windows, hoặc ngược lại).

---

TẠI SAO CẦN ẢO HÓA?

- PHÂN VÙNG (PARTITIONING):
    - Chạy nhiều HỆ ĐIỀU HÀNH trên MỘT MÁY VẬT LÝ RIÊNG BIỆT.
    - Chia tài nguyên hệ thống giữa CÁC MÁY ẢO.
    
- CÔ LẬP (ISOLATION):
    - Cung cấp sự CÔ LẬP về LỖI và BẢO MẬT ở cấp độ phần cứng.
    - Duy trì hiệu suất với các điều khiển tài nguyên tiên tiến.
- ĐÓNG GÓI (ENCAPSULATION):
    - Lưu toàn bộ trạng thái của một máy ảo vào các tệp tin.
    - Di chuyển và sao chép các máy ảo dễ dàng như việc di chuyển và sao chép các tệp tin.

- ĐỘC LẬP PHẦN CỨNG (HARDWARE INDEPENDENCE):
    - Khởi tạo hoặc di chuyển bất kỳ máy ảo nào sang bất kỳ máy chủ vật lý nào.

![image](https://github.com/psaumur/CCNA/assets/106411237/f0f5f886-7924-46fc-addf-6916f0d2b2c9)

---

MẠNG ẢO (VIRTUAL NETWORKS)

![image](https://github.com/psaumur/CCNA/assets/106411237/7bf3f22c-a7b8-41bf-bc1e-8c128a41f20f)

- CÁC VM được kết nối với nhau và với MẠNG BÊN NGOÀI thông qua một SWITCH ẢO (VIRTUAL SWITCH - vSwitch) chạy trên HYPERVISOR.
- Giống như một SWITCH VẬT LÝ thông thường, CÁC GIAO DIỆN của vSwitch có thể hoạt động như CÁC CỔNG TRUY CẬP (ACCESS PORTS) hoặc CÁC CỔNG TRUNK (TRUNK PORTS) và sử dụng các VLAN để tách biệt CÁC VM ở LỚP 2.
- CÁC GIAO DIỆN trên vSwitch kết nối tới NIC vật lý (hoặc các NIC) của MÁY CHỦ để liên lạc với MẠNG BÊN NGOÀI.

---

GIỚI THIỆU VỀ ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)

- Việc triển khai hạ tầng IT truyền thống thường là sự kết hợp của các hình thức sau:
    - TẠI CHỖ (ON-PREMISES):
        - Tất cả MÁY CHỦ, THIẾT BỊ MẠNG và các hạ tầng khác đều nằm trên tài sản của công ty.
        - Tất cả thiết bị đều được mua và sở hữu bởi công ty sử dụng nó.
        - Công ty chịu trách nhiệm về không gian, nguồn điện và hệ thống làm mát cần thiết.
    
    - THUÊ CHỖ ĐẶT (CO-LOCATION):
        - Các trung tâm dữ liệu cho thuê không gian để khách hàng đặt hạ tầng của họ (MÁY CHỦ, THIẾT BỊ MẠNG).
        - Trung tâm dữ liệu cung cấp không gian, điện năng và hệ thống làm mát.
        - Các MÁY CHỦ, THIẾT BỊ MẠNG, v.v. vẫn là trách nhiệm của khách hàng cuối, mặc dù chúng không nằm tại cơ sở của khách hàng.
- DỊCH VỤ ĐÁM MÂY cung cấp một giải pháp thay thế đang cực kỳ phổ biến và tiếp tục phát triển mạnh mẽ.
    - Hầu hết mọi người liên tưởng “ĐÁM MÂY” với CÁC NHÀ CUNG CẤP ĐÁM MÂY CÔNG CỘNG (PUBLIC CLOUD PROVIDERS) như AWS.
        - Mặc dù đây là CÁCH SỬ DỤNG phổ biến nhất của CÁC DỊCH VỤ ĐÁM MÂY, nhưng nó không phải là duy nhất.

---

CÁC DỊCH VỤ ĐÁM MÂY

- Viện Tiêu chuẩn và Công nghệ Quốc gia Mỹ (NIST) đã định nghĩa điện toán đám mây trong ấn phẩm SP (Special Publication) 800-145.

![image](https://github.com/psaumur/CCNA/assets/106411237/746a4f38-01b9-49cf-8dd9-5522b4cabf7b)

- Để hiểu ĐÁM MÂY là gì, hãy cùng xem xét các yếu tố sau được nêu trong SP 800-145:
    - NĂM ĐẶC TÍNH THIẾT YẾU (FIVE ESSENTIAL CHARACTERISTICS).
    - BA MÔ HÌNH DỊCH VỤ (THREE SERVICE MODELS).
    - BỐN MÔ HÌNH TRIỂN KHAI (FOUR DEPLOYMENT MODELS).

---

NĂM ĐẶC TÍNH THIẾT YẾU CỦA ĐÁM MÂY

- TỰ PHỤC VỤ THEO NHU CẦU (ON-DEMAND SELF-SERVICE):
    - KHÁCH HÀNG có thể tự do sử dụng DỊCH VỤ (hoặc dừng DỊCH VỤ) một cách thoải mái (thông qua cổng thông tin web) mà không cần liên lạc trực tiếp với NHÀ CUNG CẤP DỊCH VỤ.

- TRUY CẬP MẠNG RỘNG RÃI (BROAD NETWORK ACCESS):
    - DỊCH VỤ luôn có sẵn thông qua các kết nối MẠNG tiêu chuẩn (ví dụ: Internet hoặc mạng WAN RIÊNG) và có thể được truy cập qua nhiều loại THIẾT BỊ khác nhau.
- HỢP NHẤT TÀI NGUYÊN (RESOURCE POOLING):
    - Một NHÓM TÀI NGUYÊN (POOL) được cung cấp bởi NHÀ CUNG CẤP DỊCH VỤ và khi một KHÁCH HÀNG yêu cầu một DỊCH VỤ (ví dụ: tạo một máy ảo mới), CÁC TÀI NGUYÊN để đáp ứng yêu cầu đó sẽ được phân bổ từ NHÓM TÀI NGUYÊN chia sẻ chung.
- KHẢ NĂNG CO GIÃN NHANH CHÓNG (RAPID ELASTICITY):
    - KHÁCH HÀNG có thể nhanh chóng mở rộng DỊCH VỤ mà họ sử dụng trên ĐÁM MÂY (ví dụ: thêm máy ảo mới, mở rộng dung lượng LƯU TRỮ, v.v.) từ một NHÓM TÀI NGUYÊN dường như vô hạn. Tương tự, họ cũng có thể nhanh chóng cắt giảm CÁC DỊCH VỤ khi không còn cần thiết.
- DỊCH VỤ ĐƯỢC ĐO LƯỜNG (MEASURED SERVICE):
    - NHÀ CUNG CẤP DỊCH VỤ ĐÁM MÂY đo lường mức độ sử dụng TÀI NGUYÊN ĐÁM MÂY của KHÁCH HÀNG và KHÁCH HÀNG cũng có thể tự đo lường mức độ sử dụng của mình. KHÁCH HÀNG được tính phí dựa trên mức độ sử dụng (ví dụ: X Đô-la trên mỗi Gigabyte LƯU TRỮ mỗi ngày).

---

BA MÔ HÌNH DỊCH VỤ CỦA ĐÁM MÂY

![image](https://github.com/psaumur/CCNA/assets/106411237/a3f0e08a-3207-4a69-aa81-d4142d6735a3)

- Trong ĐIỆN TOÁN ĐÁM MÂY, mọi thứ đều được cung cấp theo mô hình “DỊCH VỤ”.
- Ví dụ: thay vì NGƯỜI DÙNG CUỐI phải mua một MÁY CHỦ VẬT LÝ, lắp nó lên giá rack, cài đặt hypervisor, tạo máy ảo, v.v. thì NHÀ CUNG CẤP DỊCH VỤ cung cấp tất cả những việc này như một DỊCH VỤ.
- Có nhiều loại DỊCH VỤ khác nhau được gọi là “___________ dưới dạng DỊCH VỤ” hoặc “__aaS”.
- BA MÔ HÌNH DỊCH VỤ của ĐIỆN TOÁN ĐÁM MÂY là:
    
    PHẦN MỀM dưới dạng DỊCH VỤ (SaaS - SOFTWARE as a SERVICE) - Ví dụ: MS Office 365.
    
![image](https://github.com/psaumur/CCNA/assets/106411237/5bcfedb7-3ab6-462a-a089-09884d220ab7)
    
    NỀN TẢNG dưới dạng DỊCH VỤ (PaaS - PLATFORM as a SERVICE) - Ví dụ: AWS Lambda và Google App Engine.
    
![image](https://github.com/psaumur/CCNA/assets/106411237/e3886b6b-4ed8-4358-ba47-e2f50378c53d)
    
    HẠ TẦNG dưới dạng DỊCH VỤ (IaaS - INFRASTRUCTURE as a SERVICE) - Ví dụ: Amazon EC2 và Google Compute Engine.
    
![image](https://github.com/psaumur/CCNA/assets/106411237/f8144a61-0d7f-4928-9e47-73fb969e0b4a)
    

---

CÁC MÔ HÌNH TRIỂN KHAI

- Hầu hết mọi người mặc định rằng “ĐÁM MÂY” có nghĩa là CÁC NHÀ CUNG CẤP ĐÁM MÂY CÔNG CỘNG như AWS, AZURE và GCP.
- Mặc dù “ĐÁM MÂY CÔNG CỘNG” (PUBLIC CLOUD) là mô hình triển khai phổ biến nhất, nhưng nó không phải là DUY NHẤT.
- BỐN MÔ HÌNH TRIỂN KHAI của ĐIỆN TOÁN ĐÁM MÂY là:

- ĐÁM MÂY RIÊNG (PRIVATE CLOUD)

![image](https://github.com/psaumur/CCNA/assets/106411237/b8953a31-3861-41ef-99df-62a49b97610a)

- ĐÁM MÂY RIÊNG thường chỉ được sử dụng bởi các doanh nghiệp lớn.
- Mặc dù ĐÁM MÂY này là RIÊNG TƯ, nó có thể được sở hữu bởi một BÊN THỨ BA.
    - Ví dụ: AWS cung cấp CÁC DỊCH VỤ ĐÁM MÂY RIÊNG cho Bộ Quốc phòng Mỹ (DoD).
- ĐÁM MÂY RIÊNG có thể được đặt TẠI CHỖ (ON-PREMISES) hoặc NGOÀI CƠ SỞ (OFF-PREMISES).
    - Nhiều người lầm tưởng “ĐÁM MÂY” và “TẠI CHỖ” (ON-PREM) là hai thứ khác nhau nhưng không phải lúc nào cũng vậy.
- Các loại DỊCH VỤ được cung cấp vẫn giống như trong ĐÁM MÂY CÔNG CỘNG (SaaS, PaaS, IaaS) nhưng hạ tầng được dành riêng cho MỘT TỔ CHỨC DUY NHẤT.

- ĐÁM MÂY CỘNG ĐỒNG (COMMUNITY CLOUD)

![image](https://github.com/psaumur/CCNA/assets/106411237/1c9008e9-205b-4ca8-8236-fc0b02c3addc)

- Đây là mô hình triển khai đám mây ÍT phổ biến nhất.
- Tương tự như ĐÁM MÂY RIÊNG, nhưng HẠ TẦNG được dành riêng để sử dụng bởi một NHÓM hoặc TỔ CHỨC CỤ THỂ.

- ĐÁM MÂY CÔNG CỘNG (PUBLIC CLOUD)

![image](https://github.com/psaumur/CCNA/assets/106411237/94e9c895-9538-4664-93db-085f013ee9fb)

- Mô hình triển khai đám mây phổ biến nhất.
- Các nhà cung cấp dịch vụ ĐÁM MÂY CÔNG CỘNG phổ biến bao gồm:
    - AWS.
    - MS AZURE.
    - GCP (Google Cloud Platform).
    - OCI (Oracle Cloud Infrastructure).
    - IBM Cloud.
    - Alibaba Cloud.

- ĐÁM MÂY LAI (HYPER CLOUD)
    
![image](https://github.com/psaumur/CCNA/assets/106411237/14f910cf-b6e2-4f75-8959-4589d2592e1c)
    
    - Về cơ bản là BẤT KỲ sự kết hợp nào của BA LOẠI TRIỂN KHAI ở trên.
    - Ví dụ: Một ĐÁM MÂY RIÊNG có khả năng chuyển tải bớt sang một ĐÁM MÂY CÔNG CỘNG khi cần thiết.

---

LỢI ÍCH CỦA ĐIỆN TOÁN ĐÁM MÂY

- CHI PHÍ:
    - CapEx (Chi phí vốn) cho việc mua PHẦN CỨNG và PHẦN MỀM, thiết lập TRUNG TÂM DỮ LIỆU, v.v. được giảm thiểu hoặc loại bỏ.
- QUY MÔ TOÀN CẦU (GLOBAL SCALE):
    - CÁC DỊCH VỤ ĐÁM MÂY có thể mở rộng trên QUY MÔ TOÀN CẦU với tốc độ nhanh chóng. CÁC DỊCH VỤ có thể được thiết lập và cung cấp cho KHÁCH HÀNG từ một vị trí địa lý gần họ nhất.

- TỐC ĐỘ / SỰ LINH HOẠT (AGILITY):
    - CÁC DỊCH VỤ được cung cấp THEO NHU CẦU và một lượng lớn CÁC TÀI NGUYÊN có thể được cấp phát chỉ trong vòng vài phút.

- NĂNG SUẤT (PRODUCTIVITY):
    - DỊCH VỤ ĐÁM MÂY loại bỏ nhu cầu cho nhiều công việc tốn thời gian như mua sắm máy chủ vật lý, lắp đặt giá rack, đi dây cáp, cài đặt và cập nhật thiết bị, v.v.
- ĐỘ TIN CẬY (RELIABILITY):
    - Việc sao lưu (backups) trên ĐÁM MÂY rất dễ dàng thực hiện. Dữ liệu có thể được nhân bản tại nhiều địa điểm ở các vùng địa lý khác nhau để hỗ trợ phục hồi sau thảm họa.

---

KẾT NỐI TỚI CÁC ĐÁM MÂY CÔNG CỘNG (CONNECTION TO PUBLIC CLOUDS)

![image](https://github.com/psaumur/CCNA/assets/106411237/671747bb-6908-47bb-b9c8-47f2df82c821)
