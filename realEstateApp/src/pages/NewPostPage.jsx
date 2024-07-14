import { useState } from 'react';
import styles from './NewPostPage.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../context/AuthContext';
import { PostLocalHost } from '../lib/PostLocalHost';

function NewPostPage() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const { currentUser } = useUser();
  const [postId, setPostId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    console.log(formData.get('title'));
    const postData = {
      userId: currentUser._id,
      title: inputs.title,
      price: parseInt(inputs.price),
      address: inputs.address,
      city: inputs.city,
      bedroom: parseInt(inputs.bedroom),
      bathroom: parseInt(inputs.bathroom),
      type: inputs.type,
      property: inputs.property,
      latitude: inputs.latitude,
      longitude: inputs.longitude,
      images: images,
    };
    // console.log(postData);
    try {
      const res = await fetch(`${PostLocalHost}`, {
        method: 'Post',
        credentials: 'include',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await res.json();
      setPostId(data.newPost._id);
      console.log('res', data.newPost._id);
      navigate(`/postDetail/${data.newPost._id}`);
    } catch (err) {
      console.warn(err);
    }
  };

  console.log(postId);

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
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="type">Type</label>
              <select name="type" className={styles.select}>
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="property">Property</label>
              <select name="property" className={styles.select}>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" className={styles.select}>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" className={styles.select}>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
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
            <button className={styles.sendButton}>Add</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
      <div className={styles.sideContainer}>
        {images.map((image, index) => (
          <img src={image} key={index} alt="" className={styles.img} />
        ))}
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
