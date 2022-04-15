import react, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListings);
  }, []);

  const filteredListing = listings.filter((listing) => {
    const lowercaseDescription = listing.description.toLowerCase();
    const lowercasedSearch = search.toLowerCase();

    return lowercaseDescription.includes(lowercasedSearch);
  });

  const renderListings = filteredListing.map((listing) => (
    <ListingCard key={listing.id} listing={listing} setListings={setListings} />
  ));

  return (
    <main>
      <ul className="cards">{renderListings}</ul>
    </main>
  );
}

export default ListingsContainer;
