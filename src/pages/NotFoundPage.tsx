import { Link, useNavigate } from "react-router";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1f1f1f] text-white text-center relative overflow-hidden font-(--font-sans) px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1f1f1f]" />

      <p className="text-base sm:text-lg mt-2 mb-4 text-gray-200">
        TRANG NÀY KHÔNG CÓ KẾT QUẢ TÌM KIẾM HOẶC XẢY RA LỖI
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative">
        <h1 className="text-[80px] sm:text-[120px] md:text-[150px] font-extrabold text-primary leading-none select-none">
          404
        </h1>

        <div className="relative flex flex-col items-center mt-4 sm:mt-0">
          <div className="relative">
            <img
              src="https://www.freeiconspng.com/thumbs/bee-png/best-free-bee-png-image-5.png"
              alt="Bee"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain animate-bounce"
            />

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#3b3b3b] border border-gray-500 rounded-md px-3 py-1 shadow-md">
              <p className="text-[10px] sm:text-xs text-orange-300 font-(--font-sans)">
                BEE STAR
              </p>
            </div>
          </div>
        </div>
      </div>

      <span className="text-xs sm:text-sm text-gray-400 mt-2 tracking-wide">
        ERROR
      </span>

      <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-[500px] leading-relaxed font-(--font-sans)">
        ĐỪNG LO BẠN SẼ ĐƯỢC TRỞ LẠI ĐÚNG HƯỚNG <br />
        <Link
          to="/"
          className="text-primary hover:underline hover:text-orange-300 transition-colors"
        >
          Trang Chủ
        </Link>{" "}
        hoặc{" "}
        <button
          onClick={() => navigate(-1)}
          className="text-primary hover:underline hover:text-orange-300 transition-colors"
        >
          Trang Trước
        </button>
        .
      </p>

      {/* Dải màu cam dưới cùng */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1f1f1f]" />
    </div>
  );
};

export default NotFoundPage;
