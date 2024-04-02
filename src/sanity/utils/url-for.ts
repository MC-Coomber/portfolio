import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url"

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source).url()
        : null;