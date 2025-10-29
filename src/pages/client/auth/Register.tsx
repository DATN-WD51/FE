import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });

      alert("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Đăng ký thất bại!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111] text-white">
      <div className="bg-[#121826] p-8 rounded-2xl w-[500px] shadow-lg border border-gray-700">
        <h2 className="text-center text-2xl font-semibold mb-6 text-red-400">
          Đăng ký
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Họ & Tên */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Họ *</label>
              <input
                type="text"
                name="lastName"
                placeholder="Nhập họ..."
                value={form.lastName}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md bg-slate-800 border border-gray-600 focus:outline-none focus:border-red-400"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tên *</label>
              <input
                type="text"
                name="firstName"
                placeholder="Nhập tên..."
                value={form.firstName}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md bg-slate-800 border border-gray-600 focus:outline-none focus:border-red-400"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Nhập email..."
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-slate-800 border border-gray-600 focus:outline-none focus:border-red-400"
              required
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="text-sm font-medium">Số điện thoại *</label>
            <input
              type="text"
              name="phone"
              placeholder="Nhập số điện thoại..."
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-slate-800 border border-gray-600 focus:outline-none focus:border-red-400"
              required
            />
          </div>

          {/* Mật khẩu & Xác nhận */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="text-sm font-medium">Mật khẩu *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Nhập mật khẩu..."
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md bg-slate-800 border border-gray-600 focus:outline-none focus:border-red-400 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[36px] text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <label className="text-sm font-medium">Xác nhận mật khẩu *</label>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu..."
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md bg-slate-800 border border-gray-600 focus:outline-none focus:border-red-400 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-[36px] text-gray-400"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Nút đăng ký */}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all"
          >
            Đăng ký
          </button>

          <p className="text-center text-sm mt-3">
            Bạn đã có tài khoản?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-red-400 hover:underline cursor-pointer"
            >
              Đăng nhập
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
