import { useState } from 'react';

import backgroundImage from './aesthetic backgrounds navy.jpg';

function Signup1() {
  const [progress, setProgress] = useState(33.33);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [jobStatus, setJobStatus] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [jobStatusError, setJobStatusError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');

  const [selectedOption, setSelectedOption] = useState('Login');

  const handleToggle = () => {
    setSelectedOption(selectedOption === 'Login' ? 'Sign In' : 'Login');
  };

  const handleNext = () => {
    let isValid = true;

    // First Name Validation
    if (firstName.trim() === '') {
      setFirstNameError('Please enter a valid first name.');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    // Last Name Validation
    if (lastName.trim() === '') {
      setLastNameError('Please enter a valid last name.');
      isValid = false;
    } else {
      setLastNameError('');
    }

    // Country Validation
    if (country.trim() === '') {
      setCountryError('Please select a country.');
      isValid = false;
    } else {
      setCountryError('');
    }

    // Job Status Validation
    if (jobStatus.trim() === '') {
      setJobStatusError('Please select your job status.');
      isValid = false;
    } else {
      setJobStatusError('');
    }

    // Gender Validation
    if (gender === '' || gender === 'Gender') {
      setGenderError('Please select a valid gender.');
      isValid = false;
    } else {
      setGenderError('');
    }

    // Birth Date Validation
    const birthDateValue = new Date(birthDate);
    const today = new Date();
    const minAge = new Date(today.setFullYear(today.getFullYear() - 120)); // Max age of 120 years

    if (!birthDate) {
      setBirthDateError("We get it, time's a mystery, but we still need your birth date.");
      isValid = false;
    } else if (birthDateValue > new Date()) {
      setBirthDateError("Wow, you're from the future? Please enter a valid birth date.");
      isValid = false;
    } else if (birthDateValue < minAge) {
      setBirthDateError("If you're actually this old, you should be in a museum, not filling out forms.");
      isValid = false;
    } else {
      setBirthDateError('');
    }

    if (isValid) {
      // Proceed to the next step
      console.log('Proceed to the next step');
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Left side with background image */}
      </div>

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





        <div className="mb-2 text-[#1D3557] text-lg font-semibold text-left">
          Step 1/3
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-[#1D3557] h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        

        

        <h2 className="text-4xl font-semibold text-[#1D3557] mb-6">
          Sign Up
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557]"
              style={{ color: '#1D3557' }}
            />
            {firstNameError && (
              <p className="text-red-500 text-sm mt-1">{firstNameError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557]"
              style={{ color: '#1D3557' }}
            />
            {lastNameError && (
              <p className="text-red-500 text-sm mt-1">{lastNameError}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557]"
            style={{
              backgroundColor: 'white',
              color: '#1D3557'
            }}
          >
            <option value="" disabled>Select your country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="South Africa">South Africa</option>
            <option value="Other">Other</option>
          </select>
          {countryError && (
            <p className="text-red-500 text-sm mt-1">{countryError}</p>
          )}
        </div>

        {/* Add the Job Status Dropdown */}
        <div className="flex flex-col mb-4">
          <select
            value={jobStatus}
            onChange={(e) => setJobStatus(e.target.value)}
            className="w-full p-3 mb-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557]"
            style={{
              backgroundColor: 'white',
              color: '#1D3557'
            }}
          >
            <option value="" disabled>Select your job status</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Student">Student</option>
            <option value="Retired">Retired</option>
            <option value="Other">Other</option>
          </select>
          {jobStatusError && (
            <p className="text-red-500 text-sm mt-1">{jobStatusError}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557]"
              style={{
                backgroundColor: 'white',
                color: '#1D3557'
              }}
            >
              <option value="Gender" style={{ color: '#1D3557' }}>
                Gender
              </option>
              <option value="Male" style={{ color: '#1D3557' }}>
                Male
              </option>
              <option value="Female" style={{ color: '#1D3557' }}>
                Female
              </option>
              <option value="Other" style={{ color: '#1D3557' }}>
                Other
              </option>
            </select>
            {genderError && (
              <p className="text-red-500 text-sm mt-1">{genderError}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1D3557] hover:border-[#1D3557]"
              style={{
                backgroundColor: 'white',
                color: '#1D3557'
              }}
            />
            {birthDateError && (
              <p className="text-red-500 text-sm mt-1">{birthDateError}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full py-3 bg-[#1D3557] text-white font-semibold rounded-md hover:bg-[#33527A] transition"
        >
          Next
        </button>

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

export default Signup1;
