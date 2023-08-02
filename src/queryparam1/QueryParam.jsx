import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function QueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [parsedSearchQuery, setParsedSearchQuery] = useState({});

  useEffect(() => {
    const paramsObject = {};

    // Iterating over the searchParams
    for (const [key, value] of searchParams.entries()) {
      paramsObject[key] = value;
    }

    setParsedSearchQuery(paramsObject);
  }, [searchParams]);

  // Function to update query parameters
  const updateQueryParam = (paramKey, paramValue) => {
    // Update the query parameter in the searchParams object
    searchParams.set(paramKey, paramValue);

    // Update the URL without reloading the page
    setSearchParams(searchParams);
  };

  // Example usage: updating 'param2' to 'newvalue'
  const handleUpdateQueryParam = () => {
    updateQueryParam("param2", "newvalue");
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handleUpdateQueryParam}>Update Query Param</button>
    </div>
  );
}
