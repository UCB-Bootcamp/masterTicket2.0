import React, { useState, setState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST } from '../../utils/mutations';

const PostForm = () => {
  // needed to create new featuredEvent variable for checkbox
  const [formState, setFormState] = useState({"eventTitle": '', "venue": '', "city": '', "band": '', "genre": '', "date": '', "eventDescription": '' });
  const [createPost, { error }] = useMutation(CREATE_POST);
  // const [checkBoxState, setCheckBoxState] = useState({"featuredEvent": false});
  const [checkBoxState, setCheckBoxState] = useState(false);
  console.log('Initial checkBoxState',checkBoxState)

  const handleChange = e => {
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value
      // checked: value
    });
  }
  
  // const handleChangeCheckbox = (e) => {
  //   console.log("clicked");
  //   const { name, value } = e.target;
  //   setCheckedState({
  //     [e.target.featuredEvent]: e.target.checked
  //   })
  // };

  const handleChangeCheckbox = (e) => {

    if (e.target.defaultChecked) {
      setCheckBoxState({
        [e.target.featuredEvent]: e.target.checked
      });
    }
    console.log('value', e.target.value);
    console.log('checked', e.target.checked);
    console.log('name', e.target.name);
    console.log('id', e.target.id);
    console.log('type', e.target.type);
    console.log('featuredEvent', e.target.featuredEvent);
    console.log('checkBoxState', checkBoxState);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createPost({
        variables: { ...formState }
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
      eventDescription: '',
      featuredEvent: ''
    });
    console.log(formState);
  }
  
  return (
    <div className="col new-post-form card">
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
            <input onChange={handleChangeCheckbox} defaultChecked={checkBoxState} name="featuredEvent" id="featured-event" type="checkbox" placeholder="FEATURED EVENT" />
            <label htmlFor="featured-event">This is a Featured Event!</label>
          </div>
          <textarea onChange={handleChange} name="eventDescription" id="event-description" type="text" placeholder="EVENT DESCRIPTION"></textarea>
          <input onSubmit={handleSubmit} id="submit" type="submit" value="GO!" />
        </form>
        {error && <div>Event not created</div>}
      </div>
    </div>
    )
  }


export default PostForm;