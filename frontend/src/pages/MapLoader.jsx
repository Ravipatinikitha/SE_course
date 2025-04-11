// MapLoader.js
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["maps"]; // optional, include 'places' or others if needed

const MapLoader = ({ children }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    version: "weekly",
    language: "en",
    region: "US",
  });

  if (loadError) return <p>Error loading maps. Please check your API key.</p>;
  if (!isLoaded) return <p>Loading Map...</p>;

  return children;
};

export default MapLoader;
