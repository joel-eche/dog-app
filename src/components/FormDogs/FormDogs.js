import React, { useState, useEffect, useRef } from 'react';

import { getBreeds } from './../../api/pets_api.js';

import './FormDogs.css';

const FormDogs = ({ setSelectedBreed }) => {
  const [breeds, setBreeds] = useState([]);
  const [nameBreed, setNameBreed] = useState("");
  const selectRef = useRef()

  useEffect(() => {
    const fillBreeds = async () => {
      const data = await getBreeds();

      if (data.status === "success") setBreeds(data.message)
    }
    fillBreeds();
  }, []);

  useEffect(() => {
    const timeOut = nameBreed !== "" ? setTimeout(() => setSelectedBreed(nameBreed), 1000) : null;
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameBreed]);

  const controlSelectBreed = (evt) => {
    setSelectedBreed(evt.target.value);
    setNameBreed("");
  }

  const controlInputBreed = (evt) => {
    setNameBreed(evt.target.value);
    selectRef.current.value = "disabled"
  }

  return (
    <>
      <select name="breed" className="form__select-breed" onChange={(evt) => { controlSelectBreed(evt) }} defaultValue="disabled" ref={selectRef}>
        <option value="disabled" disabled>Select a breed</option>
        {
          breeds.map((breed) => <option key={breed} value={breed}>{breed}</option>)
        }
      </select>
      <span>or</span>
      <input type="text" className="form__input-breed mb-8" value={nameBreed} onChange={(evt) => { controlInputBreed(evt) }} />
    </>
  );
}

export default FormDogs;