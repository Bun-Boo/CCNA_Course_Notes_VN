# 63. ANSIBLE, PUPPET, VÀ CHEF

HIỆN TƯỢNG SAI LỆCH CẤU HÌNH (CONFIGURATION DRIFT)

- SAI LỆCH CẤU HÌNH là khi những thay đổi riêng lẻ được thực hiện theo thời gian khiến cấu hình của một thiết bị sai lệch so với các cấu hình tiêu chuẩn / chính xác do công ty quy định.
    - Mặc dù mỗi thiết bị sẽ có những phần cấu hình riêng biệt (Địa chỉ IP, tên máy - hostname, v.v.), hầu hết cấu hình của một thiết bị thường được xác định trong các mẫu (templates) tiêu chuẩn do các kiến trúc sư / kỹ sư mạng của công ty thiết kế.
    - Khi các kỹ sư riêng lẻ thực hiện thay đổi trên các thiết bị (ví dụ: để xử lý sự cố và khắc phục các vấn đề mạng, kiểm tra cấu hình, v.v.), cấu hình của một thiết bị có thể bị sai lệch khỏi tiêu chuẩn.
    - Hồ sơ về những thay đổi riêng lẻ này và lý do của chúng không được lưu giữ.
    - Điều này có thể dẫn đến các vấn đề trong tương lai.
- Ngay cả khi không có các công cụ tự động hóa, tốt nhất nên có các quy trình quản lý cấu hình tiêu chuẩn.
    - Khi thực hiện thay đổi, hãy lưu cấu hình dưới dạng tệp văn bản và đặt nó vào một thư mục dùng chung.
        - Có thể sử dụng một hệ thống đặt tên tiêu chuẩn như (*hostname_yyyymmdd)*.
        - Hệ thống này có những khiếm khuyết, vì một kỹ sư có thể quên đặt cấu hình mới vào thư mục sau khi thực hiện thay đổi. Cái nào nên được coi là cấu hình “CHÍNH XÁC”?
        - Ngay cả khi các cấu hình được lưu đúng cách như thế này, nó cũng không đảm bảo rằng các cấu hình đó thực sự khớp với tiêu chuẩn.
---

CUNG CẤP CẤU HÌNH (CONFIGURATION PROVISIONING)

- CUNG CẤP CẤU HÌNH đề cập đến cách các thay đổi cấu hình được áp dụng cho các thiết bị.
    - Điều này cũng bao gồm cả việc cấu hình các thiết bị mới.
- Theo truyền thống, việc cung cấp cấu hình được thực hiện bằng cách kết nối tới từng thiết bị một qua SSH.
    - Điều này không khả thi trong các mạng lớn.
- Các công cụ quản lý cấu hình như Ansible, Puppet và Chef cho phép chúng ta thực hiện các thay đổi đối với các thiết bị trên quy mô lớn với chỉ một phần nhỏ thời gian và công sức so với trước đây.

- HAI THÀNH PHẦN THIẾT YẾU:
    - Các mẫu (Templates)
    - Các biến (Variables)

![image](https://github.com/psaumur/CCNA/assets/106411237/0c74b2a6-1ce7-4758-b6b8-340594d567c3)

---

GIỚI THIỆU VỀ CÁC CÔNG CỤ QUẢN LÝ CẤU HÌNH

- CÁC CÔNG CỤ QUẢN LÝ CẤU HÌNH là các công cụ tự động hóa mạng tạo thuận lợi cho việc điều khiển tập trung một số lượng lớn các thiết bị mạng.
- Các lựa chọn mà bạn cần nắm vững cho kỳ thi CCNA là Ansible, Puppet và Chef.
- Các công cụ này ban đầu được phát triển sau sự trỗi dậy của các máy ảo (VM), để cho phép các quản trị viên hệ thống máy chủ tự động hóa quá trình tạo, cấu hình và xóa bỏ các máy ảo.
    - Tuy nhiên, chúng cũng được sử dụng rộng rãi để quản lý các thiết bị mạng.
    
- Các công cụ này có thể được sử dụng để thực hiện các tác vụ như :
    - Tạo cấu hình cho các thiết bị mới trên quy mô lớn.
    - Thực hiện các thay đổi cấu hình trên các thiết bị (tất cả các thiết bị trong mạng, hoặc một nhóm thiết bị cụ thể).
    - Kiểm tra cấu hình thiết bị xem có tuân thủ các tiêu chuẩn đã xác định hay không.
    - So sánh cấu hình giữa các thiết bị, và giữa các phiên bản cấu hình khác nhau trên cùng một thiết bị.

![image](https://github.com/psaumur/CCNA/assets/106411237/f9eb7783-5e42-4cfe-aec8-8b57cd316f4d)

---

ANSIBLE 

- ANSIBLE là một công cụ quản lý cấu hình thuộc sở hữu của Red Hat.
- Bản thân Ansible được viết bằng Python.
- Ansible là loại *không sử dụng tác nhân (agentless)*.
    - Nó không yêu cầu bất kỳ phần mềm đặc biệt nào chạy trên các thiết bị được quản lý.
- Ansible sử dụng SSH để kết nối tới các thiết bị, thực hiện thay đổi cấu hình, trích xuất thông tin, v.v.
- Ansible sử dụng mô hình *đẩy (push)*. Máy chủ Ansible (Nút điều khiển - Control node) sử dụng SSH để kết nối tới các thiết bị được quản lý và *đẩy* các thay đổi cấu hình tới chúng.
    - Puppet và Chef sử dụng mô hình *kéo (pull)*.
    
- Sau khi cài đặt chính Ansible, bạn phải tạo một vài tệp văn bản:
    - PLAYBOOKS :
        - Các tệp này là “bản thiết kế của các tác vụ tự động hóa”.
        - chúng phác thảo logic và các hành động của các tác vụ mà Ansible nên thực hiện.
        - Được viết bằng YAML.
    - INVENTORY (Bản kê) :
        - Các tệp này liệt kê các thiết bị sẽ được quản lý bởi Ansible, cũng như các đặc điểm của từng thiết bị như vai trò của chúng (Switch Truy cập, Switch Lõi, Router WAN, Tường lửa, v.v.).
        - Được viết bằng định dạng INI, YAML, hoặc các định dạng khác.
    - TEMPLATES (Mẫu) :
        - Các tệp này đại diện cho tệp cấu hình của thiết bị, nhưng các giá trị cụ thể cho các biến không được cung cấp.
        - Được viết bằng định dạng JINJA2.
    - VARIABLES (Biến) :
        - Các tệp này liệt kê các biến và giá trị của chúng.
        - Các giá trị này được thay thế vào các mẫu để tạo ra các tệp cấu hình hoàn chỉnh.
        - Được viết bằng YAML.

![image](https://github.com/psaumur/CCNA/assets/106411237/ba2a68b5-7661-4eff-bd5f-8c32bde354da)

---

PUPPET 

- PUPPET là một công cụ quản lý cấu hình được viết bằng RUBY.
- Puppet thường *dựa trên tác nhân (agent-based)*.
    - Phần mềm cụ thể phải được cài đặt trên các thiết bị được quản lý.
    - Không phải tất cả các thiết bị Cisco đều hỗ trợ một tác nhân Puppet.
    
- Nó CÓ THỂ được chạy theo kiểu *không sử dụng tác nhân (agentless),* trong đó một tác nhân proxy (proxy agent) chạy trên một máy chủ bên ngoài, và tác nhân này sử dụng SSH để kết nối tới các thiết bị được quản lý và liên lạc với chúng.
- Máy chủ Puppet được gọi là “Puppet master”.
- Puppet sử dụng mô hình KÉO (PULL) (các máy khách “kéo” cấu hình từ Puppet master).
    - Các máy khách sử dụng cổng TCP 8140 để liên lạc với Puppet master.
- Thay vì YAML, nó sử dụng một ngôn ngữ độc quyền cho các tệp.
- Các tệp văn bản cần thiết trên Puppet master bao gồm:
    - MANIFEST :
        - Tệp này định nghĩa trạng thái cấu hình mong muốn của một thiết bị mạng.
    - TEMPLATES (Mẫu) :
        - Tương tự như các mẫu trong Ansible.
        - Được sử dụng để tạo ra các MANIFESTS.

![image](https://github.com/psaumur/CCNA/assets/106411237/ec26ad33-7534-4f15-93f0-4557337bfaec)

---

CHEF

- CHEF là một công cụ quản lý cấu hình được viết bằng RUBY.
- CHEF *Dựa trên Tác nhân (Agent-Based)*.
    - Phần mềm cụ thể phải được cài đặt trên các thiết bị được quản lý.
    - Không phải tất cả các thiết bị Cisco đều hỗ trợ một tác nhân CHEF.
- CHEF sử dụng mô hình KÉO (PULL).
- Máy chủ sử dụng cổng TCP 10002 để gửi các cấu hình tới máy khách.
- Các tệp sử dụng một ngôn ngữ DSL (Domain-Specific Language - Ngôn ngữ Đặc thù cho Miền) dựa trên Ruby.
- Các tệp văn bản được sử dụng bởi CHEF bao gồm:
    - RESOURCES (Tài nguyên) :
        - Các “nguyên liệu” trong một RECIPE.
        - Các đối tượng cấu hình được quản lý bởi CHEF.
    - RECIPES (Công thức) :
        - Các “công thức nấu ăn” trong một COOKBOOK.
        - Phác thảo logic và các hành động của các tác vụ được thực hiện trên các tài nguyên.
    - COOKBOOKS (Sách dạy nấu ăn) :
        - Một tập hợp các RECIPE có liên quan được nhóm lại với nhau.
    - RUN-LIST :
        - Một danh sách có thứ tự các RECIPE được chạy để đưa một thiết bị về trạng thái cấu hình mong muốn.

![image](https://github.com/psaumur/CCNA/assets/106411237/eaf5be1b-3635-4806-bb7a-f397ffa1b411)

---

GHI NHỚ BIỂU ĐỒ NÀY CHO KỲ THI CCNA

![image](https://github.com/psaumur/CCNA/assets/106411237/a4d212e6-df46-45d1-a2ca-3e55220c4b5c)
