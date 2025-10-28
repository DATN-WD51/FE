import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="px-4 xl:px-0 flex items-center h-16 xl:h-20 gap-2">
          <a
            className="relative w-[90px] xl:w-[110px] h-[30px] xl:h-[40px]"
            href="/"
          >
            <img
              alt="logo"
              fetchPriority="high"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              src="/images/logo-text-new.svg"
            />
          </a>
          <nav className="hidden xl:flex items-center justify-between gap-6 z-30 flex-1 px-6">
            <a
              className="hover:text-red-500 whitespace-nowrap text-black-500"
              href="/"
            >
              Trang chủ
            </a>
            <a
              className="hover:text-red-500 whitespace-nowrap text-black"
              href="/movies"
            >
              Lịch chiếu
            </a>
            <a
              className="hover:text-red-500 whitespace-nowrap text-black"
              href="/news-list"
            >
              Tin tức
            </a>
            <a
              className="hover:text-red-500 whitespace-nowrap text-black"
              href="/promotions"
            >
              Khuyến mãi
            </a>
            <a
              className="hover:text-red-500 whitespace-nowrap text-black"
              href="/ticket-price"
            >
              Giá vé
            </a>
            <a
              className="hover:text-red-500 whitespace-nowrap text-black"
              href="/festivals"
            >
              Liên hoan phim, Tuần phim
            </a>
            <a
              className="hover:text-red-500 whitespace-nowrap text-black"
              href="/about"
            >
              Giới thiệu
            </a>
          </nav>
          <div className="font-semibold xl:hidden">
            <p className="text-xs">TRUNG TÂM CHIẾU PHIM QUỐC GIA</p>
            <p className="text-xs">National Cinema Center</p>
          </div>
          <div className="ml-auto hidden xl:flex items-center gap-5">
            <button className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-105 transition duration-300">
              Đăng ký
            </button>
            <button className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-105 transition duration-300">
              Đăng nhập
            </button>
          </div>
          <div className="ml-auto inline-flex xl:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="cursor-pointer"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
            </svg>
            <nav className="absolute inset-0 top-full w-full bg-primary/95 flex items-center flex-col justify-evenly shadow-md transition-all duration-300 overflow-hidden h-0">
              <a
                className="text-sm hover:text-red-500 transition text-red-500 opacity-0"
                href="/"
              >
                Trang chủ
              </a>
              <a
                className="text-sm hover:text-red-500 transition text-white opacity-0"
                href="/movies"
              >
                Lịch chiếu
              </a>
              <a
                className="text-sm hover:text-red-500 transition text-white opacity-0"
                href="/news-list"
              >
                Tin tức
              </a>
              <a
                className="text-sm hover:text-red-500 transition text-white opacity-0"
                href="/promotions"
              >
                Khuyến mãi
              </a>
              <a
                className="text-sm hover:text-red-500 transition text-white opacity-0"
                href="/ticket-price"
              >
                Giá vé
              </a>
              <a
                className="text-sm hover:text-red-500 transition text-white opacity-0"
                href="/festivals"
              >
                Liên hoan phim, Tuần phim
              </a>
              <a
                className="text-sm hover:text-red-500 transition text-white opacity-0"
                href="/about"
              >
                Giới thiệu
              </a>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              />
              <div className="ml-auto hidden xl:flex items-center gap-5">
                <button
                  onClick={() => navigate("/register")}
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium 
        bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-105 
        transition duration-300"
                >
                  Đăng ký
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium 
        bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-105 
        transition duration-300"
                >
                  Đăng nhập
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
