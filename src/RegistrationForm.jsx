import React, { useState } from 'react';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!firstName.trim()) validationErrors.firstName = "First Name is required";
    if (!lastName.trim()) validationErrors.lastName = "Last Name is required";
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!age) {
      validationErrors.age = "Age is required";
    } else if (parseInt(age) < 18) {
      validationErrors.age = "You must be at least 18 years old";
    }
    if (!course) validationErrors.course = "Please select a course";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
      setCourse('');
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Course Registration</h2>

      <label>First Name:</label>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}

      <label>Last Name:</label>
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}

      <label>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}

      <label>Course:</label>
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select a course</option>
        <option value="React Basics">React Basics</option>
        <option value="JavaScript Advanced">JavaScript Advanced</option>
        <option value="Fullstack Development">Fullstack Development</option>
      </select>
      {errors.course && <p style={{ color: 'red' }}>{errors.course}</p>}

      <button type="submit" style={{ marginTop: '10px' }}>Register</button>

      {isSubmitted && <p style={{ color: 'green', marginTop: '10px' }}>Registration Successful!</p>}
    </form>
  );
}

export default RegistrationForm;
