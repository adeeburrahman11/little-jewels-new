import { Fragment, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
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

    const serviceId = "service_d7fd5vg";
    const templateId = "template_qyo4o4q";
    const userId = "veuW8ypXzNU4cSONL";

    const emailData = {
      from_name: formData.firstName + " " + formData.lastName,
      to_name: "Little Jewels",
      from_email: "sender@example.com", 
      firstName: formData.firstName,
      lastName:formData.lastName,
      address:formData.address,
      parentName:formData.parentName,
      city:formData.city,
      state:formData.state,
      selectedClass:formData.selectedClass,
      previousSchool:formData.previousSchool,
      dateOfBirth:formData.dateOfBirth,
      gender:formData.gender,
      contactNumber:formData.contactNumber,
      remark:formData.remark,
    };

    // Send the email using emailjs
    emailjs.send(serviceId, templateId, emailData, userId).then(
      () => {
        toast("You have success fully submitted you enquiry!", {
            icon: "😁",
            style: {
              borderRadius: "rgb(189, 224, 254)",
              background: "lightgreen",
              color: "darkgreen",
            },
          });
        setFormData({
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
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
  };

  return (
    <Fragment>
      <h1>Enquiry Form</h1>
      <div className="enquiry-form__wrapper">
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
          Enquire Now
        </button>
      </form>
      </div>
    </Fragment>
  );
};

export default AdmissionForm;
