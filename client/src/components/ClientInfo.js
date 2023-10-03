import { FiUser, FiMail, FiPhone } from "react-icons/fi";

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FiUser className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FiMail className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FiPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </>
  );
}
