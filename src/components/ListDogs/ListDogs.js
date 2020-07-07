import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'

import { getRandomDogs, getFilteredDogsByBreed } from './../../api/pets_api';
import Modal from './../Modal';
import './ListDogs.css'

const CardDog = ({ urlImage }) => {
  const [closed, setClosed] = useState(true);

  const handleClosed = () => {
    setClosed(true); // close previous modals opened
    setClosed(false); // open a new modal
  }

  return (
    <>
      <div className="dogcard mt-8" onClick={handleClosed}>
        <img className="dogcard__image" src={urlImage} alt="Dog :3" />
      </div>
      {closed ?
        null
        :
        <Modal closed={closed} setClosed={setClosed}>
          <div className="flex flex-grow-1 align-center justify-center relative pt-8">
            <img src={urlImage} alt="Dog :3" className="max-w-100percent max-h-100percent absolute" />
          </div>
        </Modal>
      }
    </>
  )
}

const ListDogs = ({ selectedBreed }) => {
  const [pets, setDogs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const allDogs = async () => {
      const data = await getRandomDogs();
      setDogs(data.message);

      if (data.status === "error") {
        setErrorMessage(data.errorMessage)
      }
      setLoading(false);
    };

    setLoading(true);
    allDogs();
  }, []);

  useEffect(() => {
    const allDogs = async () => {
      const data = await getFilteredDogsByBreed(selectedBreed);
      setDogs(data.message);
      if (data.status === "error") {
        setErrorMessage(data.errorMessage)
      }
      setLoading(false);
    }

    if (selectedBreed) {
      setLoading(true);
      allDogs();
    }
  }, [selectedBreed]);

  return (
    <div className="listdogs">
      {isLoading ?
        <div className=" flex flex-grow-1 flex-column align-center justify-center listdogs__loader">
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>
        :
        pets.length > 0 ?
          pets.map((pet) => (
            <CardDog urlImage={pet} key={pet} />
          ))
          :
          <div className=" flex flex-grow-1 flex-column align-center justify-center listdogs__error-message">
            <FontAwesomeIcon icon={faSadCry} color="orange" size="3x" />
            <p>{errorMessage}</p>
          </div>

      }
    </div>
  );
}

export default ListDogs;