function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Hello',
    lastName: 'World'
  };
  
  const App =  () => 
    (
        <h1>
          Hello, {formatName(user)}!
        </h1>
    );
  
export default App