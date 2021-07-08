import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST, TEST_CREATE_POST } from '../../utils/mutations';

const PostForm = () => {
  // needed to create new featuredEvent variable for checkbox
  const [formState, setFormState] = useState({"eventTitle": '', "venue": '', "city": '', "band": '', "genre": '', "date": '', "eventDescription": '' });
  const [createPost, { error }] = useMutation(TEST_CREATE_POST);

  const [checkBoxState, setCheckBoxState] = useState(false);
  // const [featuredEventState, setFeaturedEventState] = useState(false);
  // console.log('initial checkBoxState', checkBoxState);
  // console.log('initial featuredEventState', featuredEventState);

  // const handleCheckboxClick = (e) => {
  //   console.log('target b4 click', e.target);
  //   console.log('value b4 click', e.target.value);
  //   console.log('checked b4 click', e.target.checked);
  //   console.log('name b4 click', e.target.name);
  //   console.log('id b4 click', e.target.id);
  //   console.log('type b4 click', e.target.type);
  //   console.log('defaultChecked b4 click', e.target.defaultChecked);
  //   console.log('checkBoxState b4 click', checkBoxState);
  //   console.log('featuredEventState b4 click', featuredEventState);
  //   setCheckBoxState(!checkBoxState);
  //   setFeaturedEventState(!featuredEventState);
  //   console.log('target after click', e.target);
  //   console.log('value after click', e.target.value);
  //   console.log('checked after click', e.target.checked);
  //   console.log('name after click', e.target.name);
  //   console.log('id after click', e.target.id);
  //   console.log('type after click', e.target.type);
  //   console.log('defaultChecked after click', e.target.defaultChecked);
  //   console.log('checkBoxState after click', checkBoxState);
  //   console.log('featuredEventState after click', featuredEventState);

  // }
  //const state = { checked: false }
  
  //console.log('Initial checkBoxState',checkBoxState)

  const handleChange = e => {
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value
      // checked: value
    });

    setCheckBoxState(!checkBoxState);
  };
  
  // class ExampleApp extends React.Component {
  //   state = { checked: false }
  //   handleCheckboxChange = event =>
  //     this.setState({ checked: event.target.checked })
  //   render() {
  //     return (
  //       <div>
  //         <label>
  //           <Checkbox
  //             checked={this.state.checked}
  //             onChange={this.handleCheckboxChange}
  //           />
  //           <span>Label Text</span>
  //         </label>
  //       </div>    
  //     ) 
  //   }
  // }
  // const handleChangeCheckbox = (e) => {
  //   console.log("clicked");
  //   const { name, value } = e.target;
  //   setCheckedState({
  //     [e.target.featuredEvent]: e.target.checked
  //   })
  // };

  // const handleChangeCheckbox = (e) => {
  //   const { name, value } = e.target;
  //   //setState({ checked: e.target.checked })
  //   if (e.target.checked) {
  //     setCheckBoxState({
  //       checkBoxState,
  //       [name]: value
  //     })
      
  //     //formState.featuredEvent;
  //     // setCheckBoxState({
  //     //   [e.target.checked]: e.target.checked
  //     // });
  //   } 
  //   console.log('target', e.target);
  //   console.log('value', e.target.value);
  //   console.log('checked', e.target.checked);
  //   console.log('name', e.target.name);
  //   console.log('id', e.target.id);
  //   console.log('type', e.target.type);
  //   console.log('defaultChecked', e.target.defaultChecked);
  //   console.log('checkBoxState', checkBoxState);

  // };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createPost({
        variables: { 
          "eventTitle": "Weezer",
          "username": "squidbeaks",
          "venue": "Santa Barbara Bowl",
          "city": "Santa Barbara",
          "band": "Weezer",
          "genre": "Alternative Rock",
          "eventDescription": "Blah blah blah",
          "featuredEvent": true,
          "date": "Sep 21, 2021"
          // ...formState,
          // "featuredEvent": true,
          // "username": "squidbeaks"
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
            <input onChange={handleChange} label="checkbox" name="featuredEvent" id="featured-event" type="checkbox" placeholder="FEATURED EVENT" />
            <p>Is "Value 1" checked? {checkBoxState.toString()}</p>
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