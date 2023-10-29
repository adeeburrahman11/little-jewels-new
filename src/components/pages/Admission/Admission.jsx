import { Fragment, useState } from "react";
import "./Admission.css"; 

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    parentName: "",
    city: "",
    state: "",
    selectedClass: "",
    previousSchool: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Fragment>
      <h1>Admission</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="text-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="text-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="text-field"
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          className="text-field"
          type="text"
          placeholder="Parent Name"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
        />
        <input
          className="text-field"
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          className="text-field"
          type="text"
          placeholder="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <select
          className="text-field"
          name="selectedClass"
          value={formData.selectedClass}
          onChange={handleChange}
          required
        >
          <option value="">Select Class</option>
          <option value="Nursery">Nursery</option>
          <option value="Pre-Nursery">Pre-Nursery</option>
        </select>
        <input
          className="text-field"
          type="text"
          placeholder="Previous School"
          name="previousSchool"
          value={formData.previousSchool}
          onChange={handleChange}
        />
        <input
          className="text-field"
          type="date"
          placeholder="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        <select
          className="text-field"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          className="text-field"
          type="tel"
          placeholder="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <input
          className="text-field"
          type="text"
          placeholder="Remark"
          name="remark"
          value={formData.remark}
          onChange={handleChange}
        />
        <button style={{backgroundColor:'green', marginTop:'10px', height:'40px'}} className="button" type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default AdmissionForm;
