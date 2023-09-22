import { useEffect, useState } from 'react';
import './Dialog.css';
import CloseIcon from '@mui/icons-material/Close';

const Dialog = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Classification: 'Pre-Nursery',
        city: '',
        state: '',
        dob: '',
        gender: 'Male', 
        contactNumber: '',
        remark: '',
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsDialogOpen(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className={`dialog ${isDialogOpen ? 'active' : ''}`}>
            <div className="dialog-content">
                <h2>Admission Enrollment Form</h2>
                <span className="dialog-close-button" onClick={onClose}>
                    <CloseIcon />
                </span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" style={{color:'black'}}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email" style={{color:'black'}}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="Classification" style={{color:'black'}}>Class:</label>
                    <select
                        id="Classification"
                        name="Classification"
                        value={formData.Classification}
                        onChange={handleChange}
                        required
                    >
                        <option value="Pre-Nursery">Pre-Nursery</option>
                        <option value="Nursery">Nursery</option>
                        <option value="lk">Lower Kindergarden</option>
                        <option value="uk">Upper Kindergarden</option>
                        <option value="std">Standard 1</option>
                    </select>
                    <label htmlFor="city" style={{color:'black'}}>City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="state" style={{color:'black'}}>State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="dob" style={{color:'black'}}>Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="gender" style={{color:'black'}}>Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="contactNumber" style={{color:'black'}}>Contact Number:</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="remark" style={{color:'black'}}>Remark:</label>
                    <textarea
                        id="remark"
                        name="remark"
                        value={formData.remark}
                        onChange={handleChange}
                    />
                    <br /><button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Dialog;
