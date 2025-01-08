import Alert from 'react-bootstrap/Alert';


const WelcomeAlert = function(){
    return (
        <>
        <Alert variant="info">
          <Alert.Heading>Welcome back to EpiBooks!</Alert.Heading>
          <p className='mb-0'>
          Click on a category to see a list of books. Today&apos;s recommendation is Fantasy.
          </p>
        </Alert>
        </>
      );

}
export default WelcomeAlert