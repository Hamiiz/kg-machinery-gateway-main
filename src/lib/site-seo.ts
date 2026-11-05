import shareImage from "@/assets/home-share.jpg";

// Set VITE_PUBLIC_ORIGIN (for example, https://www.example.com) when deploying
// so social platforms receive an absolute image URL. Local development uses the
// generated local asset URL.
const publicOrigin = import.meta.env["VITE_PUBLIC_ORIGIN"]?.replace(/\/$/, "");
export const shareImageUrl = publicOrigin
  ? `${publicOrigin}${shareImage}`
  : shareImage;
export const homeTitle = "Machinery Rental & Land Transport | Addis Ababa";
export const homeDescription = "Reliable machinery rental and land transport in Addis Ababa, Ethiopia. Hire excavators, loaders and trucks for your next project. Request a quote.";

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kefyalew Girma Machinery Rental & Land Transport",
  description: homeDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  telephone: "+251993936962",
  areaServed: { "@type": "Country", name: "Ethiopia" },
  url: "/",
};
