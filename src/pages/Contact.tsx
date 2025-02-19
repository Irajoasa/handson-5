import { Outlet, useNavigate } from 'react-router-dom';

const ContactLayout = () => {
  const navigate = useNavigate(); // Tambahkan ini

  return (
    <div>
      <h1>Contact Page</h1>
      <div className='contact-buttons'>
        <button onClick={() => navigate("form")}>Contact Form</button>
        <button onClick={() => navigate("info")}>Contact Info</button>
      </div>
      <Outlet />
    </div>
  );
};

export default ContactLayout;
