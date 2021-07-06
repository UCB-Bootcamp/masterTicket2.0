import React, { useState } from 'react';

const PostForm = () => {
  // const [formState, setFormState] = useState('');
  // const { name, email, message } = formState;
  // const [errorMessage, setErrorMessage] = useState('');

  // function handleChange(e) {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     console.log(isValid);

  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid')
  //     } else {
  //       if (!e.target.value.length) {
  //         setErrorMessage(`${e.target.mame} if required.`);
  //       } else {
  //         setErrorMessage('');
  //       }
  //     }
  //   }

  //   if (!errorMessage) {
  //     setFormState({...formState, [e.target.name]: e.target.value });
  //   }
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }

  return (
      <div class="col new-post-form card">
              <h5 class="main-title text-center card-header">Create an Event</h5>
          
              <div class="col card-body">
                  <form class="topBefore form">
                    <p>BLAHHHHH</p>
                      {/* <input id="event-title" type="text" placeholder="EVENT">
                      <input id="venue" type="text" placeholder="VENUE">
                      <input id="city" type="text" placeholder="CITY">
                      <input id="band" type="text" placeholder="BAND">
                      <input id="genre" type="text" placeholder="GENRE">
                      <input id="date" type="text" placeholder="DATE (ex. Oct 21, 2025)">
                       <div class="featured-event container">
                          <input name="featured-event" id="featured-event" type="checkbox" placeholder="FEATURED EVENT">
                          <label for="featured-event">This is a Featured Event!</label><br>
                      </div>
                      <textarea id="event-description" type="text" placeholder="EVENT DESCRIPTION"></textarea>
                      <input id="submit" type="submit" value="GO!"> */}
                  </form>
              </div>
          </div>
    )
  }

//   <section>
//   <h1>Contact me</h1>
//   <form id="contact-form" onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="name">Name:</label>
//       <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
//     </div>
//     <div>
//       <label htmlFor="email">Email address:</label>
//       <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
//     </div>
//     <div>
//       <label htmlFor="message">Message:</label>
//       <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
//     </div>
//     {errorMessage && (
//       <div>
//         <p className="error-text">{errorMessage}</p>
//       </div>
//     )}
//     <button type="submit">Submit</button>
//   </form>
// </section>

export default PostForm;