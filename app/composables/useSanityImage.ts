import imageUrlBuilder from '@sanity/image-url'
import { useSanity } from '@nuxtjs/sanity'

export function useSanityImage() {
    const sanity = useSanity()
    const builder = imageUrlBuilder(sanity.config)

    function urlFor(source: any) {
        return builder.image(source)
    }

    return { urlFor }
}