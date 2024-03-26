import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Profile
 *
 *
 */
export interface Profile extends SanityDocument {
  _type: "profile";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * jobTitle — `string`
   *
   *
   */
  jobTitle?: string;

  /**
   * bio — `text`
   *
   *
   */
  bio?: string;

  /**
   * socials — `array`
   *
   *
   */
  socials?: Array<
    SanityKeyed<{
      _type: "social";
      /**
       * name — `string`
       *
       *
       */
      name?: string;

      /**
       * link — `url`
       *
       *
       */
      link?: string;

      /**
       * image — `image`
       *
       *
       */
      image?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      };
    }>
  >;
}

/**
 * Tool
 *
 *
 */
export interface Tool extends SanityDocument {
  _type: "tool";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Projects
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * id — `slug`
   *
   *
   */
  id?: { _type: "id"; current: string };

  /**
   * company — `string`
   *
   *
   */
  company?: string;

  /**
   * role — `string`
   *
   *
   */
  role?: string;

  /**
   * description — `text`
   *
   *
   */
  description?: string;

  /**
   * pages — `array`
   *
   *
   */
  pages?: Array<
    SanityKeyed<{
      _type: "page";
      /**
       * title — `string`
       *
       *
       */
      title?: string;

      /**
       * text — `text`
       *
       *
       */
      text?: string;

      /**
       * image — `image`
       *
       *
       */
      image?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      };
    }>
  >;

  /**
   * image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * tools — `array`
   *
   *
   */
  tools?: Array<SanityKeyedReference<Tool>>;
}

export type Documents = Profile | Tool | Project;
