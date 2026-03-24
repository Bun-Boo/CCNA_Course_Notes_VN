# 61. CÁC REST API (REST APIS)

ÔN TẬP VỀ API

- Một API (Application Programming Interface - Giao diện lập trình ứng dụng) là một giao diện phần mềm cho phép hai ứng dụng giao tiếp với nhau.
- Các API là thiết yếu không chỉ cho tự động hóa mạng mà còn cho tất cả các loại ứng dụng khác.
- Trong Kiến trúc SDN, các API được sử dụng để giao tiếp giữa các ứng dụng và bộ điều khiển SDN (thông qua NBI) và giữa bộ điều khiển SDN và các thiết bị mạng (thông qua SBI).
- NBI thường sử dụng các REST API.
- NETCONF và RESTCONF là các API Hướng nam (Southbound API) phổ biến.

---

CÁC HOẠT ĐỘNG CRUD VÀ CÁC PHƯƠNG THỨC HTTP (HTTP VERBS)

- CRUD (CREATE, READ, UPDATE, DELETE) đề cập đến các hoạt động chúng ta thực hiện bằng cách sử dụng các REST API.

- CREATE (TẠO) :
    - Được sử dụng để TẠO các biến mới và đặt giá trị ban đầu cho chúng.
        - Ví dụ: tạo một biến “ip_address” và đặt giá trị thành “10.1.1.1”.

- READ (ĐỌC) :
    - Được sử dụng để ĐỌC giá trị của một biến.
        - Ví dụ: Đọc giá trị của biến “ip_address” (kết quả là ”10.1.1.1”).

- UPDATE (CẬP NHẬT) :
    - Được sử dụng để THAY ĐỔI / CẬP NHẬT giá trị của một biến.
        - Ví dụ: Thay đổi giá trị của “ip_address” từ “10.1.1.1” thành “10.2.3.4”.
    
- DELETE (XÓA) :
    - Được sử dụng để XÓA các biến.
        - Ví dụ: Xóa biến “ip_address”.

- HTTP sử dụng các *động từ* (verbs) (còn gọi là các phương thức - methods) ánh xạ tới các hoạt động CRUD này.
- Các REST API thường sử dụng HTTP.

![image](https://github.com/psaumur/CCNA/assets/106411237/b25ca0c6-5a79-4dcc-afde-096b1868219b)

---

YÊU CẦU HTTP (HTTP REQUEST) :

- Khi một máy khách HTTP (HTTP client) gửi một yêu cầu tới một máy chủ HTTP (HTTP server), tiêu đề HTTP bao gồm các thông tin như sau:
    - Một Động từ HTTP (ví dụ: GET).
    - Một URI (Uniform Resource Identifier - Định danh tài nguyên thống nhất) cho biết tài nguyên mà nó đang cố gắng truy cập.

![image](https://github.com/psaumur/CCNA/assets/106411237/e859d701-50bc-475a-89ca-5267efaeaf87)

Một ví dụ về URI (sẽ được minh họa sau)

![image](https://github.com/psaumur/CCNA/assets/106411237/23dc6233-ce58-44c6-805b-05f1cbc7b933)

- Yêu cầu HTTP có thể bao gồm các tiêu đề bổ sung để truyền thêm thông tin tới máy chủ.

Kiểm tra danh sách tại https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

![image](https://github.com/psaumur/CCNA/assets/106411237/010f553f-971d-49d8-be1b-dd0eff5854ac)

- Một ví dụ là tiêu đề ACCEPT, thông báo cho máy chủ về các loại dữ liệu có thể được gửi ngược lại cho máy khách.
    - Ví dụ: **Accept: application/json** hoặc **Accept: application/xml**.

- Bạn cũng có thể xem các trường tiêu đề HTTP tiêu chuẩn với một số ví dụ tại https://en.wikipedia.org/wiki/List_of_HTTP_header_fields.

- Khi một máy khách REST thực hiện một cuộc gọi API (yêu cầu) tới một máy chủ REST, nó sẽ gửi một yêu cầu HTTP giống như ví dụ trên.

> 💡 Các REST API KHÔNG nhất thiết phải sử dụng HTTP để liên lạc, mặc dù HTTP là lựa chọn phổ biến nhất.

---

PHẢN HỒI HTTP (HTTP RESPONSE) :

- Phản hồi của máy chủ sẽ bao gồm một MÃ TRẠNG THÁI (STATUS CODE) cho biết yêu cầu thành công hay thất bại, cũng như các chi tiết khác.
- Chữ số ĐẦU TIÊN cho biết nhóm (class) của phản hồi:
    - 1xx : Thông tin (Informational) - yêu cầu đã được nhận, đang tiếp tục quá trình.
    - 2xx : Thành công (Successful) - yêu cầu đã được nhận, hiểu và chấp nhận thành công.
    - 3xx : Chuyển hướng (Redirection) - cần thực hiện thêm hành động để hoàn thành yêu cầu.
    - 4xx : Lỗi Máy khách (Client Error) - yêu cầu chứa cú pháp sai hoặc không thể thực hiện được.
    - 5xx : Lỗi Máy chủ (Server Error) - máy chủ thất bại trong việc thực hiện một yêu cầu rõ ràng là hợp lệ.

![image](https://github.com/psaumur/CCNA/assets/106411237/1ab2d4c3-11c1-4189-9a44-ae0f6405536c)

Các ví dụ về từng nhóm Phản hồi HTTP:

- 1xx Thông tin
    - 102 Processing cho biết máy chủ đã nhận được yêu cầu và đang xử lý nhưng phản hồi chưa có sẵn.

- 2xx Thành công
    - 200 OK cho biết yêu cầu đã thành công.
    - 201 Created cho biết yêu cầu đã thành công và một tài nguyên mới đã được tạo ra.

- 3xx Chuyển hướng
    - 301 Moved Permanently cho biết tài nguyên yêu cầu đã được di chuyển và máy chủ cho biết vị trí mới của nó.

- 4xx Lỗi Máy khách
    - 403 Unauthorized có nghĩa là máy khách phải xác thực để nhận được phản hồi.
    - 404 Not Found có nghĩa là tài nguyên yêu cầu không được tìm thấy.

- 5xx Lỗi Máy chủ
    - 500 Internal Server Error có nghĩa là máy chủ đã gặp phải điều gì đó bất ngờ mà nó không biết cách xử lý.

---

CÁC REST API (REST APIS)

- REST là viết tắt của Representational State Transfer (Chuyển đổi trạng thái biểu diễn).
- Các REST API còn được gọi là các API dựa trên REST hoặc các RESTful API.
    - REST không phải là một API cụ thể. Thay vào đó, nó mô tả một tập hợp các quy tắc về cách API nên hoạt động.
    
- SÁU ràng buộc của kiến trúc RESTful là:
    - Không trạng thái (Stateless)
    - Hệ thống phân lớp (Layered system)
    - Giao diện thống nhất (Uniform Interface)
    - Máy khách - Máy chủ (Client-Server)
    - Có thể lưu đệm hoặc không thể lưu đệm (Cacheable or non-cacheable)
    - Mã theo yêu cầu (Code-on-Demand) (tùy chọn)

- Để các ứng dụng giao tiếp qua mạng, các giao thức mạng phải được sử dụng để tạo thuận lợi cho các giao tiếp đó.
    - Đối với các REST API, HTTP(S) là lựa chọn phổ biến nhất.

---

REST: Máy khách - Máy chủ (Client-Server)

- Các REST API sử dụng kiến trúc máy khách - máy chủ.
- Máy khách sử dụng các cuộc gọi API (yêu cầu HTTP) để truy cập các tài nguyên trên máy chủ.
- Việc tách biệt giữa máy khách và máy chủ có nghĩa là cả hai đều có thể thay đổi và phát triển độc lập với nhau.
    - Khi ứng dụng máy khách thay đổi hoặc ứng dụng máy chủ thay đổi, giao diện giữa chúng phải không bị phá vỡ.

![image](https://github.com/psaumur/CCNA/assets/106411237/e39d0588-8e4c-441b-97b9-c2345bf09342)

---

REST: Không trạng thái (Stateless)

- Việc trao đổi qua các REST API là KHÔNG TRẠNG THÁI.
- Điều này có nghĩa là mỗi lần trao đổi API là một sự kiện riêng biệt, độc lập với tất cả các lần trao đổi trước đó giữa máy khách và máy chủ.
    - Máy chủ không lưu trữ thông tin về các yêu cầu trước đó từ máy khách để quyết định cách nó nên phản hồi các yêu cầu mới.
- Nếu yêu cầu xác thực, điều này có nghĩa là máy khách phải xác thực với máy chủ cho mỗi yêu cầu mà nó thực hiện.
- TCP là một ví dụ về giao thức CÓ TRẠNG THÁI (STATEFUL).
- UDP là một ví dụ về giao thức KHÔNG TRẠNG THÁI (STATELESS).

** Mặc dù các REST API sử dụng HTTP (vốn dùng TCP làm giao thức LỚP 4), bản thân HTTP và các REST API không có trạng thái. Các chức năng của mỗi lớp là tách biệt!

---

REST: Có thể lưu đệm hoặc Không thể lưu đệm (Cacheable or Non-Cacheable) 

- Các REST API phải hỗ trợ việc lưu đệm dữ liệu.
- *Lưu đệm* (Caching) đề cập đến việc lưu trữ dữ liệu để sử dụng trong tương lai.
    - Ví dụ :
        - Máy tính của bạn có thể lưu đệm nhiều thành phần của một trang web để nó không phải tải lại toàn bộ trang mỗi khi bạn truy cập. Điều này giúp cải thiện hiệu suất cho máy khách và giảm tải cho máy chủ.
- Không phải tất cả tài nguyên đều phải có khả năng lưu đệm, nhưng các tài nguyên có thể lưu đệm PHẢI được khai báo là có thể lưu đệm.

CHO KỲ THI CCNA

![image](https://github.com/psaumur/CCNA/assets/106411237/d3747417-a936-498c-99d3-f508d436d451)

---

THỰC HIỆN CÁC CUỘC GỌI REST API SỬ DỤNG CISCO DEVNET

- “Cisco DevNet là chương trình dành cho nhà phát triển của Cisco nhằm giúp đỡ các nhà phát triển và chuyên gia IT muốn viết các ứng dụng và phát triển các tích hợp với các sản phẩm, nền tảng và API của Cisco.”

- DevNet cung cấp rất nhiều tài nguyên miễn phí như các khóa học, hướng dẫn, phòng thực hành (labs), môi trường thử nghiệm (sandboxes), tài liệu, v.v. để tìm hiểu về TỰ ĐỘNG HÓA và phát triển kỹ năng của bạn.

- Cũng có một lộ trình chứng chỉ DevNet mà bạn có thể theo đuổi nếu bạn quan tâm đến TỰ ĐỘNG HÓA.

- Chúng ta sẽ sử dụng Cisco DNA Center Sandbox của họ để gửi một cuộc gọi REST API bằng Postman.
    - DNA Center là một trong những Bộ điều khiển SDN của Cisco (sẽ được đề cập chi tiết hơn sau).
    - Postman là một nền tảng để xây dựng và sử dụng các API.
---

ĐỂ BẮT ĐẦU:

- Tạo một tài khoản trên [developer.cisco.com](http://developer.cisco.com) (Sử dụng đăng nhập NetAcademy của tôi).
- Tạo một tài khoản trên [postman.com](http://postman.com) và tải về ứng dụng cho máy tính để bàn (https://www.postman.com/downloads) - Đã sử dụng tài khoản [gmail.com](http://gmail.com) của tôi.
