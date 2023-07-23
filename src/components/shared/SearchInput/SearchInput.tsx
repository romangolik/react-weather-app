import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import { useDebounce } from "@hooks/useDebounce";

import { geocodingService } from "@services/geocoding/geocoding.service";
import { useCurrentLocationApi } from "@contexts/current-location/current-location.state";

import Icon from "@components/ui/Icon";
import Overlay from "@components/ui/Overlay";
import ContentBlock from "@components/layout/ContentBlock";

import { getFormattedLocationName } from "./helpers/get-formatted-location-name";

import { ILocation } from "@services/geocoding/types/location.interface";

import "./SearchInput.scss";

const SearchInput: FC = () => {
  const isComponentMounted = useRef(false);

  const [searchValue, setSearchValue] = useState("");
  const { setCurrentLocation } = useCurrentLocationApi();
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [isOverlayVisible, setOverlayVisibility] = useState(false);
  const debounceSearchValue = useDebounce(searchValue, 600);

  function focusHandler(): void {
    setOverlayVisibility(true);
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  }

  function selectCurrentLocation(selectedValue: ILocation): void {
    setSearchValue("");
    setOverlayVisibility(false);
    setCurrentLocation(selectedValue);
  }

  async function fetchData(search: string): Promise<void> {
    if (search) {
      const data = await geocodingService.getLocationByName(search);
      setLocations(data);
    } else {
      setLocations([]);
    }
  }

  useEffect(() => {
    if (!isComponentMounted.current) {
      isComponentMounted.current = true;
    } else {
      fetchData(debounceSearchValue);
    }
  }, [debounceSearchValue]);

  function getCurrentPosition(): void {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude: lat, longitude: lon } = coords;
      const data = await geocodingService.getLocationByCoordinates({
        lat,
        lon,
      });
      setOverlayVisibility(false);
      setCurrentLocation(data, false);
    });
  }

  return (
    <>
      <ContentBlock
        as="div"
        className="search-field"
        paddingSize="none"
        radiusSize="smaller">
        <input
          type="text"
          value={searchValue}
          placeholder="Search for cities"
          className="search-field__input small-text"
          onFocus={focusHandler}
          onChange={changeHandler}
        />
        {navigator.geolocation && (
          <button
            className="search-field__button"
            title="Use my current location"
            onClick={getCurrentPosition}>
            <Icon name="location" className="search-field__button-icon" />
          </button>
        )}
        {isOverlayVisible && locations.length > 0 && (
          <div className="search-field__autocomplete">
            {locations.map((location) => (
              <p
                key={`${location.lat},${location.lon}`}
                className="search-field__autocomplete-item"
                onClick={() => selectCurrentLocation(location)}>
                {getFormattedLocationName(location)}
              </p>
            ))}
          </div>
        )}
      </ContentBlock>
      <Overlay 
        open={isOverlayVisible} 
        closeHandler={() => setOverlayVisibility(false)}/>
    </>
  );
};

export default SearchInput;
