import React, { useState } from 'react';
import ResidentLayout from '../../layout/ResidentLayout';

const ResidentDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const profile = {
    name: "John Doe",
    dob: "January 1, 1990",
    address: "123 Main St, Barangay XYZ",
    contact: "+1234567890",
    email: "john.doe@example.com"
  };

  const recentRequests = [
    { type: "Birth Certificate Request", status: "Approved", requestDate: "September 1, 2024", issuedDate: "September 10, 2024" },
    { type: "Marriage Certificate Request", status: "Pending", requestDate: "September 5, 2024", estimatedProcessingTime: "2 weeks" }
  ];

  const upcomingAppointments = [
    { type: "Appointment with Registrar", date: "September 20, 2024", time: "10:00 AM", purpose: "Verify identity and documents" },
    { type: "Scheduled Certificate Pickup", date: "September 25, 2024", time: "2:00 PM", location: "Civil Registrar Office" }
  ];

  const notifications = [
    { message: "Your birth certificate has been issued and is ready for pickup.", date: "September 10, 2024" },
    { message: "Reminder for your upcoming appointment with the registrar.", date: "September 18, 2024" }
  ];

  const documentStatus = [
    { type: "Birth Certificate", status: "Issued" },
    { type: "Marriage Certificate", status: "Processing" },
    { type: "Clearance Certificate", status: "Not Requested" }
  ];

  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Resident Dashboard</h1>
      
      <section>
        <h2>Profile Summary</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Date of Birth:</strong> {profile.dob}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Contact Number:</strong> {profile.contact}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </section>
      
      <section>
        <h2>Recent Requests</h2>
        <ul>
          {recentRequests.map((request, index) => (
            <li key={index}>
              <strong>{request.type}</strong> - Status: {request.status} (Request Date: {request.requestDate}, {request.issuedDate && `Issued Date: ${request.issuedDate}`})
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2>Upcoming Appointments</h2>
        <ul>
          {upcomingAppointments.map((appointment, index) => (
            <li key={index}>
              <strong>{appointment.type}</strong> - Date: {appointment.date}, Time: {appointment.time} {appointment.purpose && `(Purpose: ${appointment.purpose}`}{appointment.location && `, Location: ${appointment.location}`})
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification.message} (Date: {notification.date})
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2>Document Status</h2>
        <ul>
          {documentStatus.map((doc, index) => (
            <li key={index}>
              <strong>{doc.type}:</strong> {doc.status}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Action Items</h2>
        <ul>
          <li><a href="#">Update Profile Information</a></li>
          <li><a href="#">Request New Certificates</a></li>
          <li><a href="#">Check Application Status</a></li>
        </ul>
      </section>
    </ResidentLayout>
  );
};

export default ResidentDashboard;
