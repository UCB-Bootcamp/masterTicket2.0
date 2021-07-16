import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST } from '../../utils/mutations';

const PostForm = () => {
  // needed to create new featuredEvent variable for checkbox
  const [formState, setFormState] = useState({"eventTitle": '', "venue": '', "city": '', "band": '', "genre": '', "date": '', "eventDescription": ''});
  const [createPost, { error }] = useMutation(CREATE_POST);

  const [checkBoxState, setCheckBoxState] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleCheckBoxClick = () => {
    setCheckBoxState(!checkBoxState);

    console.log(!checkBoxState);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createPost({
        variables: { 
          ...formState,
          "featuredEvent": checkBoxState,
          "username": "tweyel"
        }
      });
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      eventTitle: '',
      venue: '',
			city: '',
			band: '',
      genre: '',
      date: '',
      eventDescription: ''
    });
    console.log(formState);
  }
  
  return (
    <div className="col new-post-form card sm-600">
      <h5 className="main-title text-center card-header">Create an Event</h5>
      <div className="col card-body">
        <form className="topBefore form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={formState.eventTitle} name="eventTitle" id="event-title" type="text" placeholder="EVENT" />
          <input onChange={handleChange} value={formState.venue} name="venue" id="venue" type="text" placeholder="VENUE" />
          <input onChange={handleChange} value={formState.city} name="city" id="city" type="text" placeholder="CITY" />
          <input onChange={handleChange} value={formState.band} name="band" id="band" type="text" placeholder="BAND" />
          <input onChange={handleChange} value={formState.genre} name="genre" id="genre" type="text" placeholder="GENRE" />
          <input onChange={handleChange} value={formState.date} name="date" id="date" type="text" placeholder="DATE (ex. Oct 21, 2025)" />
          <div className="featured-event container">
            <input onClick={handleCheckBoxClick} label="checkbox" name="featuredEvent" id="featured-event" type="checkbox" placeholder="FEATURED EVENT" />
            {/* <p>Is "Value 1" checked? {checkBoxState.toString()}</p> */}
            <label htmlFor="featured-event">This is a Featured Event!</label>
          </div>
          <textarea onChange={handleChange} name="eventDescription" id="event-description" type="text" placeholder="EVENT DESCRIPTION"></textarea>
          <input onSubmit={handleSubmit} id="submit" type="submit" value="GO!" />
        </form>
        {error && <div>Event not created</div>}
      </div>
    </div>
    )

  };



export default PostForm;