# 54. ẢO HÓA (CÁC CONTAINER): PHẦN 2

ÔN TẬP VỀ MÁY ẢO (VM - VIRTUAL MACHINES) (HYPERVISOR LOẠI 1 và LOẠI 2)

![image](https://github.com/psaumur/CCNA/assets/106411237/bfc801ca-a603-4957-a67c-316fb72e25cb)

![image](https://github.com/psaumur/CCNA/assets/106411237/da1b653d-f5f2-42d3-8088-dd3daa430913)

- CÁC MÁY ẢO (VMs) cho phép nhiều HỆ ĐIỀU HÀNH (OS) chạy trên một MÁY CHỦ VẬT LÝ duy nhất.
- Một HYPERVISOR (Phần mềm quản lý ảo hóa) được sử dụng để quản lý và phân bổ CÁC TÀI NGUYÊN PHẦN CỨNG cho mỗi VM.
    - CÁC HYPERVISOR LOẠI 1 (còn gọi là NATIVE hoặc BARE-METAL) chạy trực tiếp trên lớp PHẦN CỨNG.
    - CÁC HYPERVISOR LOẠI 2 (còn gọi là HOSTED) chạy trên một HỆ ĐIỀU HÀNH MÁY CHỦ (ví dụ: WINDOWS).
- CÁC HYPERVISOR LOẠI 1 được sử dụng rộng rãi trong các MÔI TRƯỜNG TRUNG TÂM DỮ LIỆU.
- CÁC HYPERVISOR LOẠI 2 thường được sử dụng trên CÁC THIẾT BỊ cá nhân.
    - Ví dụ: Chạy một lab mạng ảo trên PC của bạn bằng cách sử dụng Cisco Modeling Labs (CML).

- HỆ ĐIỀU HÀNH (OS) trong mỗi VM có thể giống hoặc khác nhau (Windows, Linux, MacOS, v.v.).
- *Bins / Libs* (Nhị phân / Thư viện) là các thư viện / dịch vụ PHẦN MỀM cần thiết cho các Ứng dụng chạy trong mỗi VM.
- Một VM cho phép ứng dụng / các ứng dụng của nó chạy trong một môi trường CÔ LẬP (ISOLATED), tách biệt với các ứng dụng trong CÁC VM khác.
- CÁC VM rất dễ tạo, xóa, di chuyển, v.v.
    - Một VM có thể được lưu lại và di chuyển dễ dàng giữa các MÁY CHỦ vật lý khác nhau.

![image](https://github.com/psaumur/CCNA/assets/106411237/5ed6704c-f332-49bf-8ff9-ad17a7f74b76)

---

CÁC CONTAINER (CONTAINERS)

![image](https://github.com/psaumur/CCNA/assets/106411237/4f350818-f030-46fe-8850-f2e633d22bfa)

- CÁC CONTAINER là các gói phần mềm chứa một ỨNG DỤNG (APP) và tất cả các thành phần phụ thuộc (*Bins/Libs* trong sơ đồ) để ỨNG DỤNG đó có thể chạy được.
    - Nhiều ỨNG DỤNG có thể được chạy trong một CONTAINER duy nhất, nhưng đây không phải là cách mà các CONTAINER thường được sử dụng.
- CÁC CONTAINER chạy trên một CÔNG CỤ CONTAINER (CONTAINER ENGINE) (ví dụ: DOCKER ENGINE).
    - CÔNG CỤ CONTAINER được chạy trên một HỆ ĐIỀU HÀNH MÁY CHỦ (thường là LINUX).
- CÁC CONTAINER có trọng lượng nhẹ (kích thước nhỏ) và chỉ bao gồm các thành phần phụ thuộc cần thiết để chạy ỨNG DỤNG cụ thể đó.
- Một CONTAINER ORCHESTRATOR (Công cụ điều phối Container) là một nền tảng phần mềm để tự động hóa việc TRIỂN KHAI, QUẢN LÝ, CO GIÃN, v.v. của CÁC CONTAINER.
    - KUBERNETES (ban đầu được thiết kế bởi Google) là công cụ điều phối CONTAINER phổ biến nhất.
    - DOCKER SWARM là công cụ điều phối CONTAINER của DOCKER.
- Với số lượng nhỏ, việc vận hành THỦ CÔNG là khả thi, nhưng các hệ thống quy mô lớn (ví dụ: với Kiến trúc Vi dịch vụ - Microservices) có thể yêu cầu HÀNG NGÀN CONTAINER.

![image](https://github.com/psaumur/CCNA/assets/106411237/07083826-c7b0-45c1-aefe-e05f63d7acfd)

---

MÁY ẢO so với CONTAINER

![image](https://github.com/psaumur/CCNA/assets/106411237/98a4075d-ab70-4579-ba10-c129e935ca22)

- CÁC VM có thể MẤT VÀI PHÚT để khởi động vì mỗi VM chạy HỆ ĐIỀU HÀNH riêng của nó.
- CÁC CONTAINER có thể khởi động trong vòng vài mili giây.

- CÁC VM chiếm NHIỀU dung lượng ổ đĩa hơn (Gigabytes).
- CÁC CONTAINER chiếm RẤT ÍT dung lượng ổ đĩa (Megabytes).

- CÁC VM sử dụng NHIỀU tài nguyên CPU/RAM hơn (mỗi VM phải chạy HỆ ĐIỀU HÀNH riêng của mình).
- CÁC CONTAINER sử dụng ÍT tài nguyên CPU/RAM hơn (Hệ điều hành được chia sẻ chung).

- CÁC VM có tính DI ĐỘNG (PORTABLE) và có thể DI CHUYỂN giữa các hệ thống vật lý chạy cùng một HYPERVISOR.
- CÁC CONTAINER có tính DI ĐỘNG CAO hơn; chúng NHỎ hơn, khởi động NHANH hơn, và CÁC CONTAINER DOCKER có thể chạy trên gần như BẤT KỲ dịch vụ CONTAINER nào.

- CÁC VM có tính cô lập cao hơn vì mỗi VM chạy HỆ ĐIỀU HÀNH riêng của nó.
- CÁC CONTAINER có tính cô lập kém hơn vì tất cả chúng đều chạy trên cùng một HỆ ĐIỀU HÀNH; nếu HỆ ĐIỀU HÀNH bị treo, tất cả các CONTAINER đang chạy trên đó đều bị ảnh hưởng.

![image](https://github.com/psaumur/CCNA/assets/106411237/128a8574-a555-4a3e-9e9c-62f33df2d34d)
