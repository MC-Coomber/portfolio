import { createContext } from "react";

interface ImageContextModel {
  currentImage: string | undefined;
  setCurrentImage: (val: string | undefined) => void;
}

export const ImageContext = createContext<ImageContextModel>({
  currentImage: undefined,
  setCurrentImage: (val) => {},
});
