
import SignForm from './SignForm.jsx';
import Booking1 from './Booking1.jsx';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Hello',
    lastName: 'World'
  };
  
  const App =  () => 
    (
        <Booking1/>
    );
  
export default App