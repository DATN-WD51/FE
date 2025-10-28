const HomePage = () => {
  return (
    <div>
      <div className="pb-10 xl:pb-20 px-4 md:px-6 xl:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap xl:flex-nowrap gap-6">
            <div className="w-full xl:w-4/5">
              <div className="block xl:hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-500 w-4 h-4" />
                    <h3 className="font-bold md:text-2xl">Phim đang chiếu</h3>
                  </div>
                  <a className="text-sm md:text-base underline" href="/movies">
                    Xem tất cả
                  </a>
                </div>
                <div className="swiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper">
                  <div
                    className="swiper-wrapper"
                    style={{
                      cursor: "grab",
                      transitionDuration: "0ms",
                      transitionDelay: "0ms",
                      transform: "translate3d(69px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                      data-swiper-slide-index={0}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)",
                        zIndex: 1,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TRÒ CHƠI ẢO GIÁC : ARES (2D) -T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TRÒ CHƠI ẢO GIÁC : ARES (2D) -T13
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide swiper-slide-visible swiper-slide-next"
                      data-swiper-slide-index={1}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -300px) rotateX(0deg) rotateY(-15deg) scale(1)",
                        zIndex: 0,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TAY ANH GIỮ MỘT VÌ SAO - K"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TAY ANH GIỮ MỘT VÌ SAO - K
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 1, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={2}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -600px) rotateX(0deg) rotateY(-30deg) scale(1)",
                        zIndex: -1,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TỬ CHIẾN TRÊN KHÔNG-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TỬ CHIẾN TRÊN KHÔNG-T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 2, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={3}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -900px) rotateX(0deg) rotateY(-45deg) scale(1)",
                        zIndex: -2,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="NĂM CỦA ANH, NGÀY CỦA EM-T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        NĂM CỦA ANH, NGÀY CỦA EM-T13
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 3, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={4}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -1200px) rotateX(0deg) rotateY(-60deg) scale(1)",
                        zIndex: -3,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="VẬN MAY-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        VẬN MAY-T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 4, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={5}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -1500px) rotateX(0deg) rotateY(-75deg) scale(1)",
                        zIndex: -4,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="NHÀ MA XÓ - T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        NHÀ MA XÓ - T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 5, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={6}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -1800px) rotateX(0deg) rotateY(-90deg) scale(1)",
                        zIndex: -5,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="QUỶ ĂN TẠNG 3 - T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        QUỶ ĂN TẠNG 3 - T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 6, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={7}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -2100px) rotateX(0deg) rotateY(-105deg) scale(1)",
                        zIndex: -6,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CHAINSAW MAN - THE MOVIE: CHƯƠNG REZE-T18"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CHAINSAW MAN - THE MOVIE: CHƯƠNG REZE-T18
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 7, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={8}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -2400px) rotateX(0deg) rotateY(-120deg) scale(1)",
                        zIndex: -7,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CHỊ NGÃ EM NÂNG - T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CHỊ NGÃ EM NÂNG - T13
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 8, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={9}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -2700px) rotateX(0deg) rotateY(-135deg) scale(1)",
                        zIndex: -8,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CẬU BÉ CÁ HEO VÀ BÍ MẬT 7 ĐẠI DƯƠNG - P (Lồng tiếng)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CẬU BÉ CÁ HEO VÀ BÍ MẬT 7 ĐẠI DƯƠNG - P (Lồng tiếng)
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 9, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={10}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -3000px) rotateX(0deg) rotateY(-150deg) scale(1)",
                        zIndex: -9,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CỤC VÀNG CỦA NGOẠI-T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CỤC VÀNG CỦA NGOẠI-T13
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 10, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={11}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -3300px) rotateX(0deg) rotateY(-165deg) scale(1)",
                        zIndex: -10,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CHÚ THUẬT HỒI CHIẾN: HOÀI NGỌC / NGỌC CHIẾT – THE MOVIE -T13 (Phụ đề)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CHÚ THUẬT HỒI CHIẾN: HOÀI NGỌC / NGỌC CHIẾT – THE MOVIE
                        -T13 (Phụ đề)
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 11, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={12}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -3600px) rotateX(0deg) rotateY(-180deg) scale(1)",
                        zIndex: -11,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="XÀ THUẬT TIỂU TAM-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        XÀ THUẬT TIỂU TAM-T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 12, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={13}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -3900px) rotateX(0deg) rotateY(-195deg) scale(1)",
                        zIndex: -12,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="PHỎNG VẤN SÁT NHÂN-T18"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        PHỎNG VẤN SÁT NHÂN-T18
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 13, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={14}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -4200px) rotateX(0deg) rotateY(-210deg) scale(1)",
                        zIndex: -13,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="GOOD BOY – CHÓ CƯNG ĐỪNG SỢ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        GOOD BOY – CHÓ CƯNG ĐỪNG SỢ-T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 14, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={15}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -4500px) rotateX(0deg) rotateY(-225deg) scale(1)",
                        zIndex: -14,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TỚ VÀ ROBOCO: SIÊU CẤP ĐA VŨ TRỤ- P (Lồng Tiếng)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TỚ VÀ ROBOCO: SIÊU CẤP ĐA VŨ TRỤ- P (Lồng Tiếng)
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 15, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={16}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -4800px) rotateX(0deg) rotateY(-240deg) scale(1)",
                        zIndex: -15,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="KINH DỊ NHẬT VỊ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        KINH DỊ NHẬT VỊ-T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 16, transitionDuration: "0ms" }}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={17}
                      style={{
                        transitionDuration: "0ms",
                        transform:
                          "translate3d(0px, 0px, -5100px) rotateX(0deg) rotateY(-255deg) scale(1)",
                        zIndex: -16,
                      }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CẢI MẢ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CẢI MẢ-T16
                      </div>
                      <div
                        className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"
                        style={{ opacity: 0, transitionDuration: "0ms" }}
                      />
                      <div
                        className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"
                        style={{ opacity: 17, transitionDuration: "0ms" }}
                      />
                    </div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                  </div>
                </div>
              </div>
              <div className="block xl:hidden mt-14">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-500 w-4 h-4" />
                    <h3 className="font-bold md:text-2xl">
                      Liên hoan phim, Tuần phim
                    </h3>
                  </div>
                </div>
                <div className="swiper swiper-initialized swiper-horizontal mySwiper1">
                  <div
                    className="swiper-wrapper"
                    style={{
                      cursor: "grab",
                      transitionDuration: "0ms",
                      transitionDelay: "0ms",
                      transform: "translate3d(95.5px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-active"
                      data-swiper-slide-index={0}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="Mạch ngầm -T18- LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        Mạch ngầm -T18- LHP Đức
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-next"
                      data-swiper-slide-index={1}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="Niko và chuyến phiêu lưu đến dải cực quang - P - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        Niko và chuyến phiêu lưu đến dải cực quang - P - LHP Đức
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={2}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="Những lời chào từ sao hỏa - T16 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        Những lời chào từ sao hỏa - T16 - LHP Đức
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={3}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="Quê hương là chùm khế chua + Giới cấm cuối cùng - T18 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        Quê hương là chùm khế chua + Giới cấm cuối cùng - T18 -
                        LHP Đức
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={4}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="Mọi thứ đều thuộc về mình + Bầu trời đỏ lửa - T13 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        Mọi thứ đều thuộc về mình + Bầu trời đỏ lửa - T13 - LHP
                        Đức
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={5}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="Cologne 75 - T18 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        Cologne 75 - T18 - LHP Đức
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={6}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="Chỉ có ban đêm chúng ta mới có thể buồn + Nữ anh hùng - T13 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        Chỉ có ban đêm chúng ta mới có thể buồn + Nữ anh hùng -
                        T13 - LHP Đức
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                  </div>
                </div>
              </div>
              <div className="block xl:hidden mt-14">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-500 w-4 h-4" />
                    <h3 className="font-bold md:text-2xl">Phim sắp chiếu</h3>
                  </div>
                </div>
                <div className="swiper swiper-initialized swiper-horizontal mySwiper1">
                  <div
                    className="swiper-wrapper"
                    style={{
                      cursor: "grab",
                      transitionDuration: "0ms",
                      transitionDelay: "0ms",
                      transform: "translate3d(95.5px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-active"
                      data-swiper-slide-index={0}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="BỊT MẮT BẮT NAI"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        BỊT MẮT BẮT NAI
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-next"
                      data-swiper-slide-index={1}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CẢI MẢ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CẢI MẢ-T16
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={2}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="THAI CHIÊU TÀI"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        THAI CHIÊU TÀI
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={3}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="PHÁ ĐÁM - SINH NHẬT MẸ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        PHÁ ĐÁM - SINH NHẬT MẸ-T16
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={4}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="BÍ MẬT SAU BỮA TIỆC"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        BÍ MẬT SAU BỮA TIỆC
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={5}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TRÁI TIM QUÈ QUẶT"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TRÁI TIM QUÈ QUẶT
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={6}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TÌNH NGƯỜI DUYÊN MA: NHẮM MAK YÊU LUÔN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TÌNH NGƯỜI DUYÊN MA: NHẮM MAK YÊU LUÔN
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={7}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="PHÒNG TRỌ MA BẦU"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        PHÒNG TRỌ MA BẦU
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={8}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="QUÁI THÚ VÔ HÌNH: VÙNG ĐẤT CHẾT CHÓC"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        QUÁI THÚ VÔ HÌNH: VÙNG ĐẤT CHẾT CHÓC
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={9}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TRỐN CHẠY TỬ THẦN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TRỐN CHẠY TỬ THẦN
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={10}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TRUY TÌM LONG DIÊN HƯƠNG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TRUY TÌM LONG DIÊN HƯƠNG
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={11}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="BẪY TIỀN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        BẪY TIỀN
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={12}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="WICKED: PHẦN 2"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        WICKED: PHẦN 2
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={13}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="HOÀNG TỬ QUỶ"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        HOÀNG TỬ QUỶ
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={14}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="NHÀ HAI CHỦ"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        NHÀ HAI CHỦ
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={15}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="NĂM ĐÊM KINH HOÀNG 2"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        NĂM ĐÊM KINH HOÀNG 2
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={16}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="GIỜ MẤT TÍCH"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        GIỜ MẤT TÍCH
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={17}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CUỘC TÌNH VỤNG TRỘM"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CUỘC TÌNH VỤNG TRỘM
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={18}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="BÀ ĐỪNG BUỒN CON"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        BÀ ĐỪNG BUỒN CON
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={19}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="AVATAR  FIRE AND ASH"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        AVATAR FIRE AND ASH
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={20}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="SQUAREPANTS/SPONGEBOB: LỜI NGUYỀN HẢI TẶC"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        SQUAREPANTS/SPONGEBOB: LỜI NGUYỀN HẢI TẶC
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={21}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="PHI VỤ ĐỘNG TRỜI 2"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        PHI VỤ ĐỘNG TRỜI 2
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={22}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="YÊU NHƯ LẦN ĐẦU"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        YÊU NHƯ LẦN ĐẦU
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={23}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="AI THƯƠNG AI MẾN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        AI THƯƠNG AI MẾN
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={24}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="TUYỂN THỦ DÊ: MÙI VỊ CHIẾN THẮNG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        TUYỂN THỦ DÊ: MÙI VỊ CHIẾN THẮNG
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={25}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CHÀNG MÈO MANG MŨ"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CHÀNG MÈO MANG MŨ
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={26}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="CÔ DÂU!"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        CÔ DÂU!
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={27}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="THÁCH THỨC THẦN LINH"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        THÁCH THỨC THẦN LINH
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-slide-index={28}
                      style={{ width: 167, marginRight: 24 }}
                    >
                      <div className="cursor-pointer relative h-[290px] md:h-[390px]">
                        <img
                          alt="MANDALORIAN & GROGU"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl transition duration-500"
                          sizes="(min-width: 780px) 280px, 220px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                          }}
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-center relative line-clamp-2">
                        MANDALORIAN &amp; GROGU
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                    <span className="swiper-pagination-bullet" />
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-700 hidden xl:block">
                <div className="pb-16">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-red-500 w-4 h-4" />
                      <h3 className="font-bold text-base xl:text-xl">
                        Phim đang chiếu
                      </h3>
                    </div>
                    <a
                      className="text-sm xl:text-base underline"
                      href="/movies"
                    >
                      Xem tất cả
                    </a>
                  </div>
                  <div className="mt-6 grid gap-7 grid-cols-1 xl:grid-cols-4">
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TRÒ CHƠI ẢO GIÁC : ARES (2D) -T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018739_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hành động, Khoa học viễn tưởng, phiêu lưu</p>
                          <p>10/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TRÒ CHƠI ẢO GIÁC : ARES (2D) -T13
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TAY ANH GIỮ MỘT VÌ SAO - K"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018933_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hài, Tâm lý, tình cảm</p>
                          <p>03/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TAY ANH GIỮ MỘT VÌ SAO - K
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TỬ CHIẾN TRÊN KHÔNG-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hành động</p>
                          <p>19/09/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TỬ CHIẾN TRÊN KHÔNG-T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="NĂM CỦA ANH, NGÀY CỦA EM-T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018983_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>17/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          NĂM CỦA ANH, NGÀY CỦA EM-T13
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="VẬN MAY-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019097_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>17/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          VẬN MAY-T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="NHÀ MA XÓ - T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019130_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>24/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          NHÀ MA XÓ - T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="QUỶ ĂN TẠNG 3 - T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019241_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>10/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          QUỶ ĂN TẠNG 3 - T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CHAINSAW MAN - THE MOVIE: CHƯƠNG REZE-T18"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019134_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hoạt hình</p>
                          <p>26/09/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CHAINSAW MAN - THE MOVIE: CHƯƠNG REZE-T18
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CHỊ NGÃ EM NÂNG - T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019172_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hài, Tâm lý</p>
                          <p>03/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CHỊ NGÃ EM NÂNG - T13
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CẬU BÉ CÁ HEO VÀ BÍ MẬT 7 ĐẠI DƯƠNG - P (Lồng tiếng)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019185_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hoạt hình</p>
                          <p>03/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CẬU BÉ CÁ HEO VÀ BÍ MẬT 7 ĐẠI DƯƠNG - P (Lồng tiếng)
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CỤC VÀNG CỦA NGOẠI-T13"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019271_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>17/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CỤC VÀNG CỦA NGOẠI-T13
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CHÚ THUẬT HỒI CHIẾN: HOÀI NGỌC / NGỌC CHIẾT – THE MOVIE -T13 (Phụ đề)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019240_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hoạt hình</p>
                          <p>10/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CHÚ THUẬT HỒI CHIẾN: HOÀI NGỌC / NGỌC CHIẾT – THE
                          MOVIE -T13 (Phụ đề)
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="XÀ THUẬT TIỂU TAM-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019289_0.png&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>24/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          XÀ THUẬT TIỂU TAM-T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="PHỎNG VẤN SÁT NHÂN-T18"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019319_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hành động, Tâm lý, tình cảm</p>
                          <p>24/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          PHỎNG VẤN SÁT NHÂN-T18
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="GOOD BOY – CHÓ CƯNG ĐỪNG SỢ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019320_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>24/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          GOOD BOY – CHÓ CƯNG ĐỪNG SỢ-T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TỚ VÀ ROBOCO: SIÊU CẤP ĐA VŨ TRỤ- P (Lồng Tiếng)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019321_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hài, Hoạt hình</p>
                          <p>24/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TỚ VÀ ROBOCO: SIÊU CẤP ĐA VŨ TRỤ- P (Lồng Tiếng)
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="KINH DỊ NHẬT VỊ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019326_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>24/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          KINH DỊ NHẬT VỊ-T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CẢI MẢ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>31/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CẢI MẢ-T16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-16">
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-red-500 w-4 h-4" />
                      <h3 className="font-bold text-base sm:text-xl">
                        Liên hoan phim, Tuần phim
                      </h3>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-7 grid-cols-1 xl:grid-cols-4">
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="Mạch ngầm -T18- LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019333_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>31/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          Mạch ngầm -T18- LHP Đức
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="Niko và chuyến phiêu lưu đến dải cực quang - P - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019332_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hoạt hình</p>
                          <p>01/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          Niko và chuyến phiêu lưu đến dải cực quang - P - LHP
                          Đức
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="Những lời chào từ sao hỏa - T16 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019330_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>02/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          Những lời chào từ sao hỏa - T16 - LHP Đức
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="Quê hương là chùm khế chua + Giới cấm cuối cùng - T18 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019335_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>02/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          Quê hương là chùm khế chua + Giới cấm cuối cùng - T18
                          - LHP Đức
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="Mọi thứ đều thuộc về mình + Bầu trời đỏ lửa - T13 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019334_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>30/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          Mọi thứ đều thuộc về mình + Bầu trời đỏ lửa - T13 -
                          LHP Đức
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="Cologne 75 - T18 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019331_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>01/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          Cologne 75 - T18 - LHP Đức
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="Chỉ có ban đêm chúng ta mới có thể buồn + Nữ anh hùng - T13 - LHP Đức"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019329_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>02/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          Chỉ có ban đêm chúng ta mới có thể buồn + Nữ anh hùng
                          - T13 - LHP Đức
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-red-500 w-4 h-4" />
                      <h3 className="font-bold text-base sm:text-xl">
                        Phim sắp chiếu
                      </h3>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-7 grid-cols-1 xl:grid-cols-4">
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="BỊT MẮT BẮT NAI"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019245_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>31/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          BỊT MẮT BẮT NAI
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CẢI MẢ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019171_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>31/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CẢI MẢ-T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="THAI CHIÊU TÀI"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019325_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>31/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          THAI CHIÊU TÀI
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="PHÁ ĐÁM - SINH NHẬT MẸ-T16"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019096_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>31/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          PHÁ ĐÁM - SINH NHẬT MẸ-T16
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="BÍ MẬT SAU BỮA TIỆC"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019322_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>31/10/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          BÍ MẬT SAU BỮA TIỆC
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TRÁI TIM QUÈ QUẶT"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019186_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>07/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TRÁI TIM QUÈ QUẶT
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TÌNH NGƯỜI DUYÊN MA: NHẮM MAK YÊU LUÔN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019243_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hài, Tâm lý, tình cảm</p>
                          <p>07/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TÌNH NGƯỜI DUYÊN MA: NHẮM MAK YÊU LUÔN
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="PHÒNG TRỌ MA BẦU"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019324_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>07/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          PHÒNG TRỌ MA BẦU
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="QUÁI THÚ VÔ HÌNH: VÙNG ĐẤT CHẾT CHÓC"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019211_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>07/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          QUÁI THÚ VÔ HÌNH: VÙNG ĐẤT CHẾT CHÓC
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TRỐN CHẠY TỬ THẦN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018993_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hành động, Phiêu lưu</p>
                          <p>14/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TRỐN CHẠY TỬ THẦN
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TRUY TÌM LONG DIÊN HƯƠNG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019166_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hài</p>
                          <p>14/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TRUY TÌM LONG DIÊN HƯƠNG
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="BẪY TIỀN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019323_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>21/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          BẪY TIỀN
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="WICKED: PHẦN 2"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018896_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>21/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          WICKED: PHẦN 2
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="HOÀNG TỬ QUỶ"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019258_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>29/11/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          HOÀNG TỬ QUỶ
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="NHÀ HAI CHỦ"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019108_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>05/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          NHÀ HAI CHỦ
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="NĂM ĐÊM KINH HOÀNG 2"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018945_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>05/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          NĂM ĐÊM KINH HOÀNG 2
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="GIỜ MẤT TÍCH"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018667_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>08/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          GIỜ MẤT TÍCH
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CUỘC TÌNH VỤNG TRỘM"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019000_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>12/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CUỘC TÌNH VỤNG TRỘM
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="BÀ ĐỪNG BUỒN CON"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019244_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Tâm lý, tình cảm</p>
                          <p>12/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          BÀ ĐỪNG BUỒN CON
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="AVATAR  FIRE AND ASH"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018965_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hành động</p>
                          <p>19/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          AVATAR FIRE AND ASH
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="SQUAREPANTS/SPONGEBOB: LỜI NGUYỀN HẢI TẶC"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018999_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hài, Phiêu lưu</p>
                          <p>26/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          SQUAREPANTS/SPONGEBOB: LỜI NGUYỀN HẢI TẶC
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="PHI VỤ ĐỘNG TRỜI 2"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019223_0.png&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hoạt hình</p>
                          <p>26/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          PHI VỤ ĐỘNG TRỜI 2
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="YÊU NHƯ LẦN ĐẦU"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0016791_0.jpeg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p />
                          <p>30/12/2025</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          YÊU NHƯ LẦN ĐẦU
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="AI THƯƠNG AI MẾN"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019340_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hài, Tâm lý, tình cảm</p>
                          <p>01/01/2026</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          AI THƯƠNG AI MẾN
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="TUYỂN THỦ DÊ: MÙI VỊ CHIẾN THẮNG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018977_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hoạt hình</p>
                          <p>12/02/2026</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          TUYỂN THỦ DÊ: MÙI VỊ CHIẾN THẮNG
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CHÀNG MÈO MANG MŨ"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018865_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hoạt hình</p>
                          <p>27/02/2026</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CHÀNG MÈO MANG MŨ
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="CÔ DÂU!"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019175_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Kinh dị</p>
                          <p>24/03/2026</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          CÔ DÂU!
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="THÁCH THỨC THẦN LINH"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018997_0.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hành động</p>
                          <p>17/07/2026</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          THÁCH THỨC THẦN LINH
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          alt="MANDALORIAN & GROGU"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          sizes="230px"
                          srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=3840&q=75 3840w"
                          src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F10873_&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                          <p>Hành động</p>
                          <p>23/09/2026</p>
                        </div>
                        <p className="mt-2 text-sm xl:text-base font-bold">
                          MANDALORIAN &amp; GROGU
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/5 space-y-10">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold xl:text-xl">Khuyến mãi</h3>
                  <a
                    className="text-sm md:text-base underline"
                    href="/promotions"
                  >
                    Xem tất cả
                  </a>
                </div>
                <div className="hidden xl:block mt-4 h-[420px]">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-grid swiper-grid-column mySwiper3 swiper-backface-hidden">
                    <div
                      className="swiper-wrapper"
                      style={{
                        width: 858,
                        transitionDuration: "300ms",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="swiper-slide swiper-slide-active"
                        style={{ width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-next"
                        style={{ width: 256, marginTop: 30, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginTop: 30, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginTop: 30, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginTop: 30, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginTop: 30, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="promotions"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                      <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                      <span className="swiper-pagination-bullet" />
                      <span className="swiper-pagination-bullet" />
                    </div>
                  </div>
                </div>
                <div className="block xl:hidden mt-4">
                  <div className="swiper swiper-initialized swiper-horizontal mySwiper2">
                    <div
                      className="swiper-wrapper"
                      style={{
                        cursor: "grab",
                        transitionDuration: "0ms",
                        transform: "translate3d(-955px, 0px, 0px)",
                        transitionDelay: "0ms",
                      }}
                    >
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={0}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              08/08/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={1}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              16/07/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              ƯU ĐÃI GIÁ VÉ 55.000Đ/VÉ 2D CHO THÀNH VIÊN U22
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={2}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              31/01/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              GÀ RÁN SIÊU MÊ LY ĐỒNG GIÁ CHỈ 79K CÁC SET GÀ RÁN
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={3}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              31/12/2024
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              TƯNG BỪNG ƯU ĐÃI năm 2025 tại Trung tâm Chiếu phim
                              Quốc gia{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-prev"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={4}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              31/12/2024
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              SPECIAL MONDAY - ĐỒNG GIÁ 50.000Đ/VÉ 2D THỨ 2 CUỐI
                              THÁNG (TỪ 01/01/2025)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-active"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={5}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017701.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              01/07/2024
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2024
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-next"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={6}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              05/02/2024
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              CHÀO TẾT, VÉ XEM PHIM ƯU ĐÃI THẢ GA{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={7}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              04/09/2019
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              SIÊU ƯU ĐÃI “PHIM THẬT HAY - COMBO THẬT ĐÃ” CHÍNH
                              THỨC TRỞ LẠI
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold xl:text-xl">Sự kiện</h3>
                  <a
                    className="text-sm md:text-base underline"
                    href="/news-list"
                  >
                    Xem tất cả
                  </a>
                </div>
                <div className="hidden xl:block mt-4 h-[420px]">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-grid swiper-grid-column mySwiper3">
                    <div
                      className="swiper-wrapper"
                      style={{
                        width: 858,
                        transitionDuration: "300ms",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="swiper-slide swiper-slide-active"
                        style={{ width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-next"
                        style={{ marginTop: 30, width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ marginTop: 30, width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ marginTop: 30, width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ marginTop: 30, width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ marginTop: 30, width: 256, marginRight: 30 }}
                      >
                        <div className="relative h-[120px] w-full cursor-pointer overflow-hidden rounded-xl">
                          <img
                            alt="news-list"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover hover:scale-110 transition object-center"
                            sizes="247px"
                            srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                      <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                      <span className="swiper-pagination-bullet" />
                      <span className="swiper-pagination-bullet" />
                    </div>
                  </div>
                </div>
                <div className="block xl:hidden mt-4">
                  <div className="swiper swiper-initialized swiper-horizontal mySwiper2">
                    <div
                      className="swiper-wrapper"
                      style={{
                        cursor: "grab",
                        transitionDuration: "0ms",
                        transform: "translate3d(-955px, 0px, 0px)",
                        transitionDelay: "0ms",
                      }}
                    >
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={0}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019342.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              24/10/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              Gian hàng Trung tâm Chiếu phim Quốc gia chính thức
                              góp mặt tại Hội chợ Mùa Thu 2025.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={1}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019259.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              13/10/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              CINETOUR “TAY ANH GIỮ MỘT VÌ SAO” tại Trung tâm
                              Chiếu phim Quốc gia ngày 10/10/2025
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={2}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019247.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              10/10/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              Cinetour “Tay Anh Giữ Một Vì Sao” tại NCC ngày
                              9/10/2025
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={3}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019233.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              06/10/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              Đại hội Đại biểu Đảng bộ chính phủ lần thứ I,
                              nhiệm kỳ 2025-2030
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-prev"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={4}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019229.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              02/10/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              TRUNG THU NÀY ĐẾN TRUNG TÂM CHIẾU PHIM QUỐC GIA
                              NHẬN QUÀ CHO BÉ{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-active"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={5}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019222.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              30/09/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              Úm ba la… dàn trai đẹp của Tử Chiến Trên Không đã
                              chính thức “đổ bộ” tại Trung tâm Chiếu phim Quốc
                              gia
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-next"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={6}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019210.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              29/09/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              HOẠT ĐỘNG GIÁO DỤC – TRẢI NGHIỆM CỦA HỌC SINH KHỐI
                              10 TRƯỜNG THPT LÂM NGHIỆP CÙNG BỘ PHIM “MƯA ĐỎ”
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        style={{ width: 167, marginRight: 24 }}
                        data-swiper-slide-index={7}
                      >
                        <div>
                          <div className="relative h-[140px] cursor-pointer overflow-hidden rounded-xl">
                            <img
                              alt="card"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover hover:scale-110 transition object-center"
                              sizes="(min-width: 780px) calc(33.4vw - 33px), (min-width: 480px) calc(50vw - 28px), (min-width: 440px) 192px, calc(100vw - 32px)"
                              srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=16&q=75 16w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=32&q=75 32w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=48&q=75 48w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=64&q=75 64w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=96&q=75 96w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=128&q=75 128w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=256&q=75 256w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=384&q=75 384w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=3840&q=75 3840w"
                              src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019184.jpg&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-base text-gray-500">
                              24/09/2025
                            </p>
                            <p className="text-sm md:text-base line-clamp-2">
                              Buổi ra mắt và họp báo bộ phim “Tử Chiến Trên
                              Không” tại Trung tâm Chiếu phim Quốc gia
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019345.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019292.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019281.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019279.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019225.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019170.jpeg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018988.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="ads"
                  loading="lazy"
                  width={256}
                  height={450}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain h-auto w-full rounded-lg cursor-pointer"
                  sizes="100vw"
                  srcSet="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=640&q=75 640w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=750&q=75 750w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=828&q=75 828w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=1080&q=75 1080w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=1200&q=75 1200w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=1920&q=75 1920w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=2048&q=75 2048w, /_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=3840&q=75 3840w"
                  src="/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018266.png&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
