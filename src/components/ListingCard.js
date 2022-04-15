import React, { useState } from "react";

function ListingCard({
  setListings,
  listing: { description, id, image, location },
}) {
  const [favorited, setFavorited] = useState(false);

  function handleFavorite() {
    setFavorited(true);
  }

  function handleUnfavorite() {
    setFavorited(false);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    setListings((currentListing) =>
      currentListing.filter((listing) => listing.id !== id)
    );
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            className="emoji-button favorite active"
            onClick={handleUnfavorite}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
