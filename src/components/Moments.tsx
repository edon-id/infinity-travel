import React, { useState } from "react";
import moments from "src/styles/Moments.module.css";

const Moments: React.FC = () => {
  const numbers: number[] = Array.from({ length: 14 }, (_, index) => index + 1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < numbers.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <div className={moments.header}>
        <div className={moments.leftLine}></div>
        <h3>Ваши моменти</h3>
        <div className={moments.rightLine}></div>
      </div>
      <div className={moments.grid}>
        {numbers.map((number, index) => {
          const imageSrc = `/mom${number}.png`;
          return (
            <div key={number} className={moments.gridItem}>
              <img
                src={imageSrc}
                alt={`mom${number}`}
                onClick={() => openModal(index)}
              />
            </div>
          );
        })}
      </div>

      {selectedImageIndex !== null && (
        <div className={moments.modalOverlay}>
          <img
            src="/leftChevronModal.png"
            className={moments.prevButton}
            onClick={prevImage}
          />
          <div className={moments.locationImg}>
            <img src="/locationName.png" alt="locationName" />
          </div>
          <div className={moments.locationName}>
            <i className="fa-solid fa-location-dot fa-2x"></i>
            <h2>Location Name</h2>
          </div>
          <div className={moments.modal}>
            <img
              src={`/mom${selectedImageIndex + 1}.png`}
              alt="Selected Moment"
            />
            <button className={moments.closeButton} onClick={closeModal}>
              X
            </button>
          </div>
          <img
            src="/rightChevronModal.png"
            className={moments.nextButton}
            onClick={nextImage}
          />
        </div>
      )}
    </>
  );
};

export default Moments;
