import Alert from 'react-bootstrap/Alert';


const WelcomeAlert = function(){
    return (
        <>
        <Alert variant="info">
          <Alert.Heading>Welcome back to EpiBooks!</Alert.Heading>
          <p className='mb-0'>
            For you today we have choose a list of Fantasy books 
          </p>
        </Alert>
        <h1 className=' text-center'>Welcome to EpiBooks!</h1>
        </>
      );

}
export default WelcomeAlert