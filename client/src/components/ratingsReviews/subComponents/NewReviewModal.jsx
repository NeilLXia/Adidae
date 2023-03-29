/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatingView from '@modular/StarRatingView';
import defaultImage from '@images/place-holder.jpg';
import { postReview } from '../scripts/API_Helper';
import characteristicsMeaning from '../scripts/characteristicsMeaning';

function NewReviewModal() {
  const prodId = useSelector((state) => state.product.id);
  const prodName = useSelector((state) => state.product.name);
  const { characteristics } = useSelector((state) => state.reviews.metaData);
  const [enteredCharacteristics, setEnteredCharacteristics] = useState({});
  const [recommend, setRecommend] = useState(false);
  const [nickName, setNickName] = useState('');
  const [summary, setSummary] = useState('');
  const [images, setImages] = useState([0]);
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleCharacteristicChange = (characteristic, value) => {
    setEnteredCharacteristics({
      ...enteredCharacteristics,
      [characteristic]: value,
    });
  };

  const handleInputChange = (setStateFunc, maxLength, e) => {
    e.preventDefault();
    setStateFunc(e.target.value);
    if (e.target.value.length === maxLength) {
      window.alert(`Input shouldn't exceed ${maxLength} characters`);
    }
  };

  useEffect(() => {
    // add event listener to all star elements
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        setRating(index - 4);
      });
    });
  }, []);

  const getImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (images[0] === 0) {
        setImages(() => [reader.result]);
      } else {
        setImages((current) => [...current, reader.result]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const postNewReview = (reviewObj) => {
    postReview(reviewObj);
  };

  const renderStarsSwitch = () => {
    switch (rating) {
      case 1:
        return 'Poor';
      case 2:
        return 'Fair';
      case 3:
        return 'Average';
      case 4:
        return 'Good';
      case 5:
        return 'Great';
      default:
        return '';
    }
  };

  return (
    <div className="px-1 w-[min-content]">
      <form onSubmit={(e) => { e.preventDefault(); console.log(e); }}>

        <div id="freeContent" className="grid grid-rows-3 gap-2 mt-4">
          {/* Stars */}
          <div className="md:ml-4 grid items-end md:grid-cols-2 grid-cols-1 justify-items-center pt-2 py-3 text-xl sm:text-xl md:text-2xl lg:text-4xl" id="overallRating">
            <div className="flex md:inline-flex md:justify-self-start border rounded-md border-gray-500 font-xs border p-1 rounded bg-stone-100">
              <StarRatingView averageRating={rating} />
              <span className="ml-3">{renderStarsSwitch()}</span>

            </div>
            <div className="overflow-auto" />
          </div>

          {/* Recommend */}
          <span className="grid md:grid-cols-2 grid-cols-1 justify-items-center items-end">
            Do you recommend this product?
          </span>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center justify-items-center">
            <div className="radio flex justify-center justify-items-center gap-3">
              <label className="mx-2" htmlFor="radioYes">
                Yes
                <input
                  type="radio"
                  id="radioYes"
                  name="recommend"
                  className="mx-2"
                  value="yes"
                  onChange={() => setRecommend(true)}
                />
              </label>
              <label htmlFor="radioNo">
                No
                <input
                  type="radio"
                  id="radioNo"
                  name="recommend"
                  className="mx-2"
                  value="no"
                  onChange={() => setRecommend(false)}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div
          id="characteristics"
          className="flex flex-col mb-5 flex-center"
          style={{
            alignItems: 'center',
            borderWidth: 'medium',
            borderStyle: 'ridge',
            borderRadius: '5px',
            backgroundColor: 'lightgrey',
            padding: '1em',
          }}
        >
          {Object.entries(characteristics).map(([key, value]) => (
            <div key={value.id} className="border p-3 mb-3 w-[max-content]" style={{ backgroundColor: '#f5f5f5', borderStyle: 'outset', borderWidth: '3px' }}>
              <div className="col-span-1 flex items-center">
                <span className="text-center block font-bold w-24">{key}</span>
              </div>
              <div className="text-center mb-2">{enteredCharacteristics[key] ? characteristicsMeaning[key][enteredCharacteristics[key]] : 'none selected'}</div>
              <div className="col-span-4 grid grid-cols-5 gap-2 items-center">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="col-span-1 flex flex-col items-center">
                    <label htmlFor={`radio-${key}-${num}`} className="block w-full border rounded-md border-gray-500 font-xs border p-1 rounded text-center lg:w-[6em] sm:w-[10vw] w-[3em]" style={{ padding: '4px' }} maxLength={60}>{num}</label>
                    <input
                      type="radio"
                      value={num}
                      id={`radio-${key}-${num}`}
                      checked={enteredCharacteristics[key] === num.toString()}
                      onChange={() => handleCharacteristicChange(key, num.toString())}
                      style={{ minWidth: '16px', width: 'calc(100% - 8px)', margin: '4px 0' }}
                    />
                  </div>
                ))}
                <div className="col-span-5 grid grid-cols-5 gap-2 items-center">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} id={`${key}-range`} className="col-span-1 flex flex-col items-center">
                      {(num === 1 || num === 5) && <span className="block font-xs p-1 text-center lg:w-[6em] sm:w-[10vw] w-[3em]">{characteristicsMeaning[key][num]}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="my-2" id="summary">
          <label htmlFor="summaryInput" className="block w-full border rounded-md border-gray-500 font-xs" style={{ padding: '4px' }} maxLength={60}>
            Summary:
            <input
              type="text"
              name="summaryInput"
              className="w-full border rounded-md border-gray-500 px-[0.25em]"
              placeholder="Example: Best purchase ever!"
              maxLength="60"
              value={summary}
              id="summaryInput"
              onChange={(e) => {
                handleInputChange(setSummary, 60, e);
              }}
            // style={{ minWidth: '16px', width: 'calc(100% - 8px)', margin: '4px 0' }}
            />

            <span className="flex justify-end">
              {`${summary.length}/60`}
            </span>
          </label>
        </div>

        {/* Review */}
        <div className="my-4" id="body">
          <label htmlFor="bodyInput" className="block w-full border rounded-md border-gray-500 font-xs" style={{ padding: '4px' }} maxLength={1000}>
            Review:
            <textarea
              id="bodyInput"
              name="bodyInput"
              rows="4"
              cols="50"
              className="w-full border rounded-md border-gray-500 px-[0.25em]"
              placeholder="Why did you like the product or not?"
              maxLength="1000"
              value={body}
              onChange={(e) => {
                handleInputChange(setBody, 1000, e);
              }}
            />
            <span className={`flex justify-end ${body.length < 50 && 'text-red-600'}`}>
              {`${body.length}/1000`}
            </span>
          </label>
        </div>

        {/* Images */}
        <div>
          <div className="my-2 py-2 px-1 col-span-5 grid grid-cols-5 gap-2 items-center justify-items-center  border rounded-md border-gray-500 font-xs border p-1 rounded bg-violet-600" id="getImage">
            {images.map((image, idx) => (
              <img className="my-2" id={`outputImage-${idx}`} key={`outputImage-${idx}`} alt={`outputImage-${idx}`} onError={((e) => { e.target.src = defaultImage; })} src={image} style={{ maxHeight: '4em', maxWidth: '4em' }} />
            ))}
          </div>
          {images.length < 5 && <input type="file" accept="image/*" onChange={getImage} />}
        </div>

        {/* Name */}
        <div className="my-2" id="nickName">
          <label htmlFor="nickNameInput" className="block w-full border rounded-md border-gray-500 font-xs" style={{ padding: '4px' }} maxLength={60}>
            What is your nickname?
            <input
              type="text"
              name="nickNameInput"
              className="w-full border rounded-md border-gray-500 px-[0.25em]"
              placeholder="Example: jackson11"
              maxLength="60"
              value={nickName}
              id="nickNameInput"
              onChange={(e) => {
                handleInputChange(setNickName, 60, e);
              }}
            // style={{ minWidth: '16px', width: 'calc(100% - 8px)', margin: '4px 0' }}
            />
            <small className="block text-gray-500">For privacy reasons, do not use your full name or email address</small>
            <span className="flex justify-end">
              {`${nickName.length}/60`}
            </span>
          </label>
        </div>

        {/* Email */}
        <div className="my-2" id="email">
          <label htmlFor="emailInput" className="block w-full border rounded-md border-gray-500 font-xs" style={{ padding: '4px' }} maxLength={60}>
            What is your email?
            <input
              type="email"
              name="email"
              className="w-full border rounded-md border-gray-500 px-[0.25em]"
              placeholder="Example: jackson11@email.com"
              maxLength="60"
              value={email}
              id="emailInput"
              onChange={(e) => {
                handleInputChange(setEmail, 60, e);
              }}
            // style={{ minWidth: '16px', width: 'calc(100% - 8px)', margin: '4px 0' }}
            />
            <small className="block text-gray-500">For authentication reasons, you will not be emailed</small>
            <span className="flex justify-end">
              {`${email.length}/60`}
            </span>
          </label>
        </div>


        <div className="flex justify-end mt-10">
          <button type="submit" className="object-right-bottom bg-secondary-300 rounded text-white p-2">Submit Question</button>
        </div>
      </form>
    </div>
  );
}

export default NewReviewModal;
