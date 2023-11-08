import { useState } from "react";
// import { db } from "@/firebase";
import { collection, query, limit, getDocs, serverTimestamp } from "@firebase/firestore";

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleSendVerificationCode = async () => {
    try {
      const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(
        phoneNumber,
        phoneAuthProvider
      );

      // Handle the confirmationResult, typically prompt the user for verification code.
    } catch (error) {
      console.error("Error sending verification code:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const userCredential = await confirmationResult.confirm(verificationCode);

      // User is now authenticated with phone number.
      // You can link this user to a Firestore document if needed.

      console.log("Authentication successful:", userCredential.user);
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  return (
    <div>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <button onClick={handleSendVerificationCode}>Send Verification Code</button>

      <label>
        Verification Code:
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </label>
      <button onClick={handleVerifyCode}>Verify Code</button>
    </div>
  );
};

export default LoginComponent;