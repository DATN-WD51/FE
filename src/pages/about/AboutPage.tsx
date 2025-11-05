import { useEffect, useState } from "react";

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "gioithieu" | "dichvu" | "phongchieu"
  >("gioithieu");

  useEffect(() => {
    document.title = "Giới thiệu - Trung tâm Chiếu phim Quốc gia";
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "gioithieu":
        return (
          <div className="leading-relaxed space-y-3 text-gray-300">
            <p>
              Rạp chiếu phim Beestar là dự án được phát triển bởi nhóm sinh viên
              Cao đẳng FPT Polytechnic, với mục tiêu mang đến không gian giải
              trí hiện đại và tiện lợi cho người yêu điện ảnh. Beestar ứng dụng
              công nghệ mới trong việc đặt vé, chọn ghế và cập nhật phim, giúp
              khán giả dễ dàng trải nghiệm những bộ phim yêu thích mọi lúc, mọi
              nơi.
            </p>
            <p>
              <strong>Ngày thành lập:</strong> 15/09/2025
            </p>
            <p>
              <strong>Trụ sở:</strong> Trịnh Văn Bô, Phường Nam Từ Liên, TP.Hà
              Nội
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://beestarcinema.com.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://beestarcinema.vn
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@beestar.vn"
                className="text-primary hover:underline"
              >
                contact@beestar.vn
              </a>
            </p>
            <p>
              <strong>Số điện thoại:</strong> 076 3068 172
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <img
                src="https://huongnghiepcdm.edu.vn/wp-content/uploads/2024/06/fpoly.webp"
                alt=""
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <img
                src="https://huongnghiepcdm.edu.vn/wp-content/uploads/2024/06/fpoly.webp"
                alt=""
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        );

      case "dichvu":
        return (
          <div className="leading-relaxed space-y-4 text-gray-300">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Beestar mang đến cho bạn trải nghiệm xem phim dễ dàng và thú vị
              hơn bao giờ hết:
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Đặt vé online chỉ trong vài giây, chọn ghế yêu thích ngay trên
                website.
              </li>
              <li>Cập nhật lịch chiếu và trailer phim mới nhất mỗi ngày.</li>
              <li>Thanh toán nhanh, bảo mật với nhiều phương thức tiện lợi.</li>
              <li>Luôn có đội ngũ hỗ trợ sẵn sàng giúp bạn 24/7.</li>
              <li>Nhận ưu đãi và tích điểm khi đặt vé thường xuyên.</li>
              <li>
                Cùng Beestar tận hưởng thế giới điện ảnh sống động, hiện đại và
                kết nối!
              </li>
            </ul>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <img
                src="https://huongnghiepcdm.edu.vn/wp-content/uploads/2024/06/fpoly.webp"
                alt=""
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <img
                src="https://huongnghiepcdm.edu.vn/wp-content/uploads/2024/06/fpoly.webp"
                alt=""
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        );

      case "phongchieu":
        return (
          <div className="leading-relaxed space-y-4 text-gray-300">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Phòng chiếu & Nhà hát
            </h2>
            <p>
              Trung tâm hiện có nhiều phòng chiếu hiện đại, được trang bị hệ
              thống âm thanh, ánh sáng và màn chiếu tiêu chuẩn quốc tế, phục vụ
              cho cả chiếu phim thương mại lẫn các sự kiện điện ảnh lớn.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Phòng chiếu 1: 402 chỗ ngồi, màn ảnh lớn, âm thanh Dolby 7.1.
              </li>
              <li>
                Phòng chiếu 2: 300 chỗ, phù hợp tổ chức sự kiện, hội thảo phim.
              </li>
              <li>
                Phòng chiếu 3: 200 chỗ, phục vụ chiếu phim nghệ thuật và phim
                độc lập.
              </li>
              <li>
                Nhà hát nhỏ: không gian riêng tư, thiết kế sang trọng cho sự
                kiện đặc biệt.
              </li>
            </ul>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <img
                src="https://huongnghiepcdm.edu.vn/wp-content/uploads/2024/06/fpoly.webp"
                alt=""
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <img
                src="https://huongnghiepcdm.edu.vn/wp-content/uploads/2024/06/fpoly.webp"
                alt=""
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-[#101418] text-white min-h-screen pt-8 pb-16 font-(--font-montserrat)">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">
          Giới thiệu
        </h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => setActiveTab("gioithieu")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "gioithieu"
                ? "bg-primary text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          >
            Giới thiệu
          </button>
          <button
            onClick={() => setActiveTab("dichvu")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "dichvu"
                ? "bg-primary text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          >
            Dịch vụ
          </button>
          <button
            onClick={() => setActiveTab("phongchieu")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "phongchieu"
                ? "bg-primary text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          >
            Phòng chiếu - Nhà hát
          </button>
        </div>

        {/* Nội dung */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutPage;
