import SaiImage from "@assets/image/Swami.png"

/**
 * Return an array with objects containing data of sample images.
 *
 * @param length - Optional. A number of slides.
 * @param sig    - Optional. The signature for getting a different image.
 *
 * @return An array with objects for sample images.
 */
export function generateSlides(
  length = 10,
  sig = 0
): Array<{ image: string; title: string; description: string }> {
  return Array.from({ length }).map((value, index) => {
    index = sig || index

    return {
      image: SaiImage,
      title: "Service to Man is Service to God",
      description:
        "Serving Humanity Selflessly Reflects Divine Love, As Helping Others Fulfills Spiritual Purpose And Honors God."
    }
  })
}
