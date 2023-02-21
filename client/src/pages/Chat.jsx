import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { user } = useContext(AuthContext);
  console.log("Userr:", user);

  return (
    <Container>
      <h1>
        Email: {user?.email} -----{" "}
        {!user?.isVerified ? (
          <span className="verified">verified</span>
        ) : (
          <span className="not-verified">Not Verified</span>
        )}
      </h1>
    </Container>
  );
};

export default Chat;
