import React, { useState, useEffect } from 'react';
import add from './assets/plus.png';
import applicationform from './components/applicationform';

const App = () => {
  const url = 'https://strapiqa.sparts.app/api/students';
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.data || []));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const studentCount=data.length;

  return (
    <>
      <div className='nav'>
        <h1>Students </h1><p>{studentCount}</p>
        <img
          src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png'
          alt='Profile'
        />
      </div>

      <label>
        <h3>Select School</h3>
        <select>
          <option value='s1'>School1</option>
          <option value='s2'>School2</option>
          <option value='s3'>school3</option>
        </select>
        <button className="btn"><img src={add} className='add'/> Add a Student</button>
      </label>

      <div className="student-cards">
      <table className="students-table" border="1" cellPadding="10">
        <thead>
          <tr>
            <th><input type='checkbox'/></th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Blood Group</th>
            <th>Parent Contact</th>
            <th>Parent Email</th>
            <th>Address</th>
            <th>Apartment</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <th><input type='checkbox'/></th>
              <td>{student.id}</td>
              <td>{student.attributes.firstName}</td>
              <td>{student.attributes.lastName}</td>
              <td>{student.attributes.gender}</td>
              <td>{new Date(student.attributes.dob).toLocaleDateString()}</td>
              <td>{student.attributes.bloodGroup}</td>
              <td>{student.attributes.parentContactNo}</td>
              <td>{student.attributes.parentEmailId}</td>
              <td>{student.attributes.currentAddress}</td>
              <td>{student.attributes.apartmentName}</td>
              <td>{student.attributes.city || 'N/A'}</td>
              <td>{student.attributes.state || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

    </>
  );
};

export default App;
