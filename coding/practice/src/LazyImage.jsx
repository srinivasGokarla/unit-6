import React, { useState, useEffect } from "react";
import styled from "styled-components"

const placeHolder =
  "data:image/png;base64";
  
const Image = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    content: url(${placeHolder});
  }
`;

export const LazyImage = ({ src}) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  const onLoad = event => {
    event.target.classList.add("loaded");
  };
  const onError = event => {
    event.target.classList.add("has-error");
  };
  useEffect(
    () => {
      let observer;
      if (imageRef && imageSrc !== src) {
        if (IntersectionObserver) {
          observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                  setImageSrc(src);
                  observer.unobserve(imageRef);
              });
            },
          );
          observer.observe(imageRef);
        } 
      }
    },
    [src, imageSrc, imageRef]
  );
  return (
    <Image
      ref={setImageRef}
      src={imageSrc}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
