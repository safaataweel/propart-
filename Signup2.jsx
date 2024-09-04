import { useState } from 'react';

function Signup2() {
  const [progress, setProgress] = useState(66.66);
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState('Login');

  // Validation Logic
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!form.password || !strongPasswordRegex.test(form.password)) {
      newErrors.password = 'Password must be at least 8 characters long, and include a number and a special character.';
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed to next step
      console.log('Form is valid! Proceed to the next step.');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex h-screen">
      {/* Left side image */}
      <div className="w-1/2">
        {/* <img
          src="/path/to/your/image.png" // Replace with your image path
          alt="Background"
          className="object-cover h-full w-full"
        /> */}
      </div>

      {/* Right side form */}
      <div className="w-1/2 flex flex-col justify-center px-16 py-12 bg-white">
        {/* Only one switcher at the top */}
        <div className="flex justify-center mb-8 relative">
          <div className="flex border-2 border-[#1D3557] rounded-full overflow-hidden w-80 bg-white">
            <button
              className={`flex-1 py-4 px-8 text-2xl font-bold transition-all duration-300 ${
                selectedOption === 'Login'
                  ? 'bg-[#1D3557] text-white'
                  : 'text-[#1D3557] hover:bg-gray-200'
              } rounded-full`}
              onClick={() => setSelectedOption('Login')}
            >
              Login
            </button>
            <button
              className={`flex-1 py-4 px-8 text-2xl font-bold transition-all duration-300 ${
                selectedOption === 'Sign In'
                  ? 'bg-[#1D3557] text-white'
                  : 'text-[#1D3557] hover:bg-gray-200'
              } rounded-full`}
              onClick={() => setSelectedOption('Sign In')}
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="mb-2 text-[#1D3557] text-lg font-semibold text-left">
          Step 2/3
        </div>

        {/* Timeline Progress */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-[#1D3557] h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="text-3xl font-semibold text-[#1D3557] mb-6 text-left">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557] text-left"
            style={{ color: '#1D3557' }}
          />
          {errors.email && <p className="text-red-500 text-sm text-left">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557] text-left"
            style={{ color: '#1D3557' }}
          />
          {errors.password && <p className="text-red-500 text-sm text-left">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleInputChange}
            className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557] text-left"
            style={{ color: '#1D3557' }}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm text-left">{errors.confirmPassword}</p>}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="w-full max-w-[48%] py-3 bg-[#F4F5F7] text-[#1D3557] font-semibold rounded-md hover:bg-[#E2E3E8] transition text-center"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full max-w-[48%] py-3 bg-[#1D3557] text-white font-semibold rounded-md hover:bg-[#33527A] transition text-center"
            >
              Next
            </button>
          </div>
        </form>

        {/* Styling for selection color */}
        <style>
          {`::selection {
            background-color: #1D3557;
            color: #fff;
          }
          body {
            background-color: #f7f7f8;
          }`}
        </style>
      </div>
    </div>
  );
}

export default Signup2;
