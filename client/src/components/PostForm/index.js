import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST } from '../../utils/mutations';

const PostForm = () => {
  const [formState, setFormState] = useState({"eventTitle": '', "venue": '', "city": '', "band": '', "genre": '', "date": '', "event-description": ''});
  // const { eventTitle, venue, city, band, genre, date } = formState;
  // const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }
  //   if (!e.target.value.length) {
  //     setErrorMessage(`${e.target.mame} if required.`);
  //   } else {
  //     setErrorMessage('');
  //   }
  // }
  //   if (!errorMessage) {
  //     setFormState({...formState, [e.target.name]: e.target.value });
  //   }
  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await createPost({
        variables: { ...formState }
      });

      Post.createPost(data.createPost);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      emailLogin: '',
      passwordLogin: '',
			emailSignup: '',
			passwordSignup: ''
    });
    console.log(formState);
  }
  
  return (
    <div className="col new-post-form card">
      <h5 className="main-title text-center card-header">Create an Event</h5>
      <div className="col card-body">
        <form className="topBefore form" onSubmit={handleSubmit}>
          <p>BLAHHHHH</p>
            <input onChange={handleChange} name="eventTitle" id="event-title" type="text" placeholder="EVENT" />
            <input onChange={handleChange} name="venue" id="venue" type="text" placeholder="VENUE" />
            <input onChange={handleChange} name="city" id="city" type="text" placeholder="CITY" />
            <input onChange={handleChange} name="band" id="band" type="text" placeholder="BAND" />
            <input onChange={handleChange} name="genre" id="genre" type="text" placeholder="GENRE" />
            <input onChange={handleChange} name="date" id="date" type="text" placeholder="DATE (ex. Oct 21, 2025)" />
            <div className="featured-event container">
              <input name="featured-event" id="featured-event" type="checkbox" placeholder="FEATURED EVENT" />
              <label for="featured-event">This is a Featured Event!</label>
            </div>
            <textarea id="event-description" type="text" placeholder="EVENT DESCRIPTION"></textarea>
            <input onChange={handleChange} id="submit" type="submit" value="GO!" />
        </form>
      </div>
    </div>
    )
  }


export default PostForm;