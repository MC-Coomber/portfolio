// ./src/utils/sanity/client.ts
import { QueryParams, createClient } from 'next-sanity'

const projectId = 'vwtqc57v' // "pv8y60vp"
const dataset = 'content' // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export async function sanityFetch<T>({
    query,
    qParams,
    tags,
}: {
    query: string;
    qParams?: QueryParams;
    tags: string[];
}): Promise<T> {
    const params = qParams ?? {};
    return client.fetch<T>(query, params, {
        cache: "force-cache",
        next: { tags },
    });
}