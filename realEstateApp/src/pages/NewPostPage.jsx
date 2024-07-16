import { useRef, useState } from 'react';
import styles from './NewPostPage.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import { useUser } from '../context/AuthContext';
import { PostLocalHost } from '../lib/PostLocalHost';
import { useFetchState } from '../hooks/useFetchState';

function NewPostPage() {
  const { currentUser } = useUser();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  //this hook have two state error:false ,isLoading:false
  const [fetchState, setFetchState] = useFetchState();
  const inputEl = useRef(null);

  //handle the file upload event
  const handleImageUpload = () => {
    inputEl.current.click();
  };

  // handle file change
  const handleFileChange = (e) => {
    if (!e.target.files[0]) return;
    setImages((img) => [...img, e.target.files[0]]);
  };

  // handling the form submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    images.forEach((img) => {
      formData.append('images', img);
    });
    // converting the hashmap data to object format
    const inputs = Object.fromEntries(formData);

    // converting string to number
    formData.set('income', Number(inputs.income));
    formData.set('restaurant', Number(inputs.restaurant));
    formData.set('bus', Number(inputs.bus));
    formData.set('school', Number(inputs.school));
    formData.set('size', Number(inputs.size));
    formData.set('price', Number(inputs.price));
    formData.set('bedroom', Number(inputs.bedroom));
    formData.set('bathroom', Number(inputs.bathroom));
    formData.set(' latitude', Number(inputs.latitude));
    formData.set('longitude', Number(inputs.longitude));
    formData.append('userId', currentUser._id);
    console.log(inputs);

    try {
      setFetchState({ type: 'Loading' });
      // 1) sending the data to the user
      const res = await fetch(`${PostLocalHost}`, {
        method: 'Post',
        credentials: 'include',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.status);
      setFetchState({ type: 'Ready' });

      //navigating the postdetail page so that we can access the id of post
      navigate(`/postDetail/${data.data.newPost._id}`);
    } catch (err) {
      setFetchState({ type: 'Error' });
      setError(err.message);
      console.warn(err);
    }
  };

  return (
    <div className={styles.newPostPage}>
      <div className={styles.formContainer}>
        <h1>Add New Post</h1>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.item}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={`${styles.item} ${styles.description}`}>
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className={styles.item}>
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="Number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="Number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="type">Type</label>
              <select name="type" className={styles.select}>
                <option value="Rent" defaultChecked>
                  Rent
                </option>
                <option value="Buy">Buy</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="property">Property</label>
              <select name="property" className={styles.select}>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
                <option value="Land">Land</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" className={styles.select}>
                <option value="Owner is Responsible">
                  Owner is responsible
                </option>
                <option value="Tenant is Responsible">
                  Tenant is responsible
                </option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" className={styles.select}>
                <option value="Allowed">Allowed</option>
                <option value="Not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="school">School</label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="bus">Bus</label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="restaurant">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                className={styles.input}
              />
            </div>
            <button
              className={styles.sendButton}
              disabled={fetchState.isLoading}
            >
              {fetchState.isLoading ? (
                <Spinner color="white" size="lg" thickness="3px" />
              ) : (
                <p>Add</p>
              )}
            </button>
            {fetchState.error && <span>{error}</span>}
          </form>
        </div>
      </div>
      <div className={styles.sideContainer}>
        {images.map((image, index) => (
          <img
            src={URL.createObjectURL(image)}
            key={index}
            alt=""
            className={styles.img}
          />
        ))}
        {/* <Button colorScheme="blue">Upload</Button> */}
        <div onClick={handleImageUpload}>
          <Button colorScheme="blue">Upload</Button>
          <input
            type="file"
            ref={inputEl}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        {/* <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: 'lamadev',
            uploadPreset: 'estate',
            folder: 'posts',
          }}
          setState={setImages}
        /> */}
      </div>
    </div>
  );
}

export default NewPostPage;

// try {
//   const res = await apiRequest.post('/posts', {
//     postData: {
//       title: inputs.title,
//       price: parseInt(inputs.price),
//       address: inputs.address,
//       city: inputs.city,
//       bedroom: parseInt(inputs.bedroom),
//       bathroom: parseInt(inputs.bathroom),
//       type: inputs.type,
//       property: inputs.property,
//       latitude: inputs.latitude,
//       longitude: inputs.longitude,
//       images: images,
//     },
//     postDetail: {
//       desc: value,
//       utilities: inputs.utilities,
//       pet: inputs.pet,
//       income: inputs.income,
//       size: parseInt(inputs.size),
//       school: parseInt(inputs.school),
//       bus: parseInt(inputs.bus),
//       restaurant: parseInt(inputs.restaurant),
//     },
//   });
//   navigate('/' + res.data.id);
// } catch (err) {
//   console.log(err);
//   setError(err.message);
// }
