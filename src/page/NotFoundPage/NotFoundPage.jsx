
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NotFound = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div >
      <div>
        <h1>Page you visited doesn&apos;t exist.</h1>
        <h2>You will be redirected to Home in {5 - timer} seconds</h2>
      </div>
      <Link to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;







//import { Link } from 'react-router-dom';

//const NotFoundPage = () => {
 // return (
   // <div>
     // <h1>404 - Not Found</h1>
      //<p>The page you are looking for does not exist.</p>
      //<Link to="/">Go back to Home</Link>
    //</div>
  //);
//};

//export default NotFoundPage;
//