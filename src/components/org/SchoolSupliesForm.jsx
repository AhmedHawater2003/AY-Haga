import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import GoogleLocator from "../GoogleLocator";

const SchoolSupliesForm = ({showSchool , back , close}) => {
    const [type , setType] = useState('');
    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isSuccess,setSuccess] = useState(false);
    const [chose , setChose] = useState(false);

    const [title , setTitle] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    const [titleError, setTitleError] = useState('');

    //Stationary useStates
    const [stationaryType , setStationaryType] = useState('');
    const [quantity , setQuantity] = useState('');
    //Errors
    const [stationaryTypeError , setStationaryTypeError] = useState('');
    const [quantityError , setQuantityError] = useState('');
    


    
    //Book useStates
    const [bookName , setBookName] = useState('');
    const [author , setAuthor] = useState('');
    const [language , setLanguage] = useState('');
    const [edition , setEdition] = useState('');
    const [shortSummary , setShowSummary] = useState('');
    const [pictureOfBook , setPictureOfBook] = useState('');
    const [bookQuantity , setBookQuantity] = useState('');
    //Errors
    const [bookNameError , setBookNameError] = useState('');
    const [authorError , setAuthorError] = useState('');
    const [languageError , setLanguageError] = useState('');
    const [editionError , setEditionError] = useState('');
    const [shortSummaryError , setShowSummaryError] = useState('');
    const [pictureOfBookError , setPictureOfBookError] = useState('');
    const [bookQuantityError , setBookQuantityError] = useState('');



    const resetInsertions = () =>{
        setTitleError('');
        setStationaryTypeError('');
        setQuantityError('');
        setBookNameError('');
        setAuthorError('');
        setLanguageError('');
        setEditionError('');
        setShowSummaryError('');
        setPictureOfBookError('');
        setBookQuantityError('');
        setTitle('');
        setAdditionalDetails('');
        setStationaryType('');
        setQuantity('');
        setBookName('');
        setAuthor('');
        setLanguage('');
        setEdition('');
        setShowSummary('');
        setPictureOfBook('');
        setBookQuantity('');
        setAlertMessage('');
        setShowAlert(false);
        setSuccess(false);
        setType('');
        setChose(false);

    }

    const handleClose = () => {
        resetInsertions();
        close();
    }

    const handleBack = () => {
        resetInsertions();
        back();
    }
    const handleSubmit = () => {
        if(type === ''){
            setAlertMessage('Please Select a Volunteer Type');
            setShowAlert(true);
            setSuccess(false);
        }
        if(type === 'Stationary Items'){
            if(title === ''){
                setTitleError('Title is required');
            }
            else{
                setTitleError('');
            }
            if(stationaryType === ''){
                setStationaryTypeError('Stationary Type is required');
            }
            else{
                setStationaryTypeError('');
            }
            if(quantity === ''){
                setQuantityError('Quantity is required');
            }
            else{
                setQuantityError('');
            }
            if(title !== '' && stationaryType !== '' && quantity !== ''){
                setAlertMessage('Post Submitted Successfully');
                setShowAlert(true);
                setSuccess(true);
                setTimeout(() => {
                    handleClose();
                }, 10000);
            }
        }
        if(type === 'Books'){
            if(title === ''){
                setTitleError('Title is required');
            }
            else{
                setTitleError('');
            }
            if(bookName === ''){
                setBookNameError('Book Name is required');
            }
            else{
                setBookNameError('');
            }
            if(author === ''){
                setAuthorError('Author is required');
            }
            else{
                setAuthorError('');
            }
            if(language === ''){
                setLanguageError('Language is required');
            }
            else{
                setLanguageError('');
            }
            if(edition === ''){
                setEditionError('Edition is required');
            }
            else{
                setEditionError('');
            }
            if(shortSummary === ''){
                setShowSummaryError('Short Summary is required');
            }
            else{
                setShowSummaryError('');
            }
            if(pictureOfBook === ''){
                setPictureOfBookError('Picture of Book is required');
            }
            else{
                setPictureOfBookError('');
            }
            if(bookQuantity === ''){
                setBookQuantityError('Quantity is required');
            }
            else{
                setBookQuantityError('');
            }
            if(title !== '' && bookName !== '' && author !== '' && language !== '' && edition !== '' && shortSummary !== '' && pictureOfBook !== '' && bookQuantity !== ''){
                setAlertMessage('Post Submitted Successfully');
                setShowAlert(true);
                setSuccess(true);
                setTimeout(() => {
                    handleClose();
                }, 10000);
            }
        }
    }



  return (
    <>
    <Modal show={showSchool} onHide={handleClose} size="lg" scrollable={true} onSubmit={handleSubmit}>
    <Modal.Header closeButton>
            <Modal.Title>School Supplies Donations</Modal.Title>
        </Modal.Header>
        <Modal.Body onSubmit={handleSubmit}>
        {showAlert && <Alert variant= {(isSuccess)? 'success':'danger'}>
                {alertMessage}
            </Alert>}
            <Form onSubmit = {handleSubmit} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{fontSize:'25px' , fontWeight : "bold"}}>Volunteer As
                {(alertMessage && !chose)? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <br/>
                <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="Stationary Items"
                  // checked={type === "Teacher"}
                  onChange={(event) => {setType(event.target.value); setChose(true) ; setAlertMessage('') ; setShowAlert(false) }}
                />
                <label
                  className="form-check-label"
                  htmlFor="inlineRadio1"
                  value = 'Stationary Items'
                >
                  Stationary Items
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="Books"
                onChange={(event) => {setType(event.target.value); setChose(true) ; setAlertMessage('') ; setShowAlert(false)}}
                />
                <label className="form-check-label" htmlFor="inlineRadio1" value = 'Books' >
                Books
                </label>
              </div>
                </Form.Group>
            </Form>
            {chose &&
                (type === 'Stationary Items') &&
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title
                            {titleError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Post Title"
                            value = {title}
                            onChange ={(event) => setTitle(event.target.value)}
                            isInvalid = {titleError}
                            autoFocus
                         />
                        <Form.Control.Feedback type="invalid">
                            {titleError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Stationary Type
                            {stationaryTypeError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Stationary Type"
                            value = {stationaryType}
                            onChange ={(event) => setStationaryType(event.target.value)}
                            isInvalid = {stationaryTypeError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {stationaryTypeError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Quantity Requested
                            {quantityError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Quantity"
                            value = {quantity}
                            onChange ={(event) => setQuantity(event.target.value)}
                            isInvalid = {quantityError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {quantityError}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            }
            {chose &&
                (type === 'Books') &&
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title
                            {titleError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Post Title"
                            value = {title}
                            onChange ={(event) => setTitle(event.target.value)}
                            isInvalid = {titleError}
                            autoFocus
                         />
                        <Form.Control.Feedback type="invalid">
                            {titleError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Book Name
                            {bookNameError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Book Name"
                            value = {bookName}
                            onChange ={(event) => setBookName(event.target.value)}
                            isInvalid = {bookNameError}
                            />
                        <Form.Control.Feedback type="invalid">
                            {bookNameError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Author
                            {authorError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Author"
                            value = {author}
                            onChange ={(event) => setAuthor(event.target.value)}
                            isInvalid = {authorError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {authorError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Language
                            {languageError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Language"
                            value = {language}
                            onChange ={(event) => setLanguage(event.target.value)}
                            isInvalid = {languageError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {languageError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Edition
                            {editionError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Edition"
                            value = {edition}
                            onChange ={(event) => setEdition(event.target.value)}
                            isInvalid = {editionError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {editionError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Short Summary
                            {shortSummaryError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Short Summary"
                            value = {shortSummary}
                            onChange ={(event) => setShowSummary(event.target.value)}
                            isInvalid = {shortSummaryError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {shortSummaryError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Picture of Book
                            {pictureOfBookError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="Enter Picture of Book"
                            value = {pictureOfBook}
                            onChange ={(event) => setPictureOfBook(event.target.value)}
                            isInvalid = {pictureOfBookError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {pictureOfBookError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Quantity Requested
                            {bookQuantityError? <span className="text-danger"> *</span> : null }
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Quantity"
                            value = {bookQuantity}
                            onChange ={(event) => setBookQuantity(event.target.value)}
                            isInvalid = {bookQuantityError}
                         />
                        <Form.Control.Feedback type="invalid">
                            {bookQuantityError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Form>
            }    
        </Modal.Body>
        <Modal.Footer onSubmit={handleSubmit}>
            
            <Button variant="secondary" onClick={() => {handleBack(); handleClose}}>
              Back
            </Button>
            <Button type="submit"  variant="primary" onClick={handleSubmit} >
              Submit Post
            </Button>
            
          </Modal.Footer>
    </Modal>
    </>
  )
}

export default SchoolSupliesForm
