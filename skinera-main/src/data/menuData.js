// Structured menu data for Header (Skin & Hair)
// Keep href as '#' for now; images reference filenames from Images/ if you later want to show thumbnails.

export const skinMenu = [
  { label: "Acne Scar", href: "/service/laser-skin-therapy" },
  {
    label: "Anti Aging",
    href: "/service/anti-aging",
    children: [
      { label: "Korean Facial", href: "/service/korean-facial" },
      { label: "Vampire Facial", href: "/service/vampire-facial" },
      { label: "SRF", href: "/service/srf" },
    ],
  },
  {
    label: "Skin Lightening & Whitening",
    href: "/service/skin-lightening-and-whitening",
  },
  { label: "Cryotherapy Fat Freezing", href: "/service/cryo-fat-freezing" },
  { label: "Laser Tattoo Removal", href: "/service/laser-tattoo-removal" },
  {
    label: "Pigmentation Treatments",
    href: "/service/pigmentation-treatments",
    children: [
      { label: "Chemical Peel Treatments", href: "/service/deep-peelings" },
      { label: "Laser Toning Treatments", href: "/service/laser-skin-therapy" },
      { label: "Mesotherapy", href: "/service/mesotherapy" },
      { label: "Microdermabrasion", href: "/service/microdermabrasion" },
      { label: "Carbon Laser Facial", href: "/service/laser-skin-therapy" },
    ],
  },
  {
    label: "Medical Spa Facials",
    href: "/service/medical-spa-facials",
    children: [
      { label: "Oxygeneo Facial", href: "/service/oxygeneo-facial" },
      { label: "Carbon Facial", href: "/service/carbon-facial" },
      { label: "Photo Facial", href: "/service/photo-facial" },
      { label: "Korean Facial", href: "/service/korean-facial" },
      { label: "Hydrafacial", href: "/service/hydrafacial" },
      { label: "Microdermabrasion", href: "/service/microdermabrasion" },
    ],
  },
 
  { label: "Stretch Marks", href: "/service/stretch-marks" },
  { label: "Pre Bridal Specials", href: "/service/pre-bridal-specials" },
];

export const skinNested = {
  "Acne Scar": {
    children: [
      { label: "Micro Needling with PRP", href: "/service/micro-needling-prp" },
      { label: "MNRF", href: "/service/mnrf" },
      { label: "Chemical Peel", href: "/service/chemical-peel" },
    ],
  },
  "Anti Aging": {
    children: [
      { label: "Korean Facial", href: "/service/korean-facial" },
      { label: "Vampire Facial", href: "/service/vampire-facial" },
      { label: "SRF", href: "/service/srf" },
    ],
  },
};

export const hairMenu = [
  {
    label: "Hairfall / Hair Thininig",
    href: "/service/hairfall",
    children: [
      {
        label: "Intralesional Injection",
        href: "/service/intralesional-injection",
      },
      { label: "Hair PRP/GFC Therapy", href: "/service/hair-prp" },
      { label: "Mesotherapy", href: "/service/mesotherapy" },
      {
        label: "Low Light Laser Therapy",
        href: "/service/hair-regrowth-laser",
      },
      // { label: "Hair GFC Therapy", href: "/service/hair-gfc-therapy" },
    ],
  },
  // { label: "Alopecia Areata", href: "/service/hair-gfc" },
    { label: "Hair Regrowth", href: "/service/regrowth" },
  { label: "Dandruff", href: "/service/dandruff" },
  { label: "Laser Hair Removal", href: "/service/laser-hair-removal" },
  // { label: "Hair Transplant", href: "/service/hair-transplant" },
];

export const hemopathicMenu = [
  { label: "Skin Allergy", href: "/service/skin-allergy" },
  { label: "Psoriasis", href: "/service/psoriasis" },
  { label: "Eczema", href: "/service/eczema" },
  { label: "Scales", href: "/service/scales" },
  { label: "Urticaria", href: "/service/urticaria" },
  { label: "Fungal", href: "/service/fungal" },
  { label: "Scabies", href: "/service/scabies" },
  { label: "Vitiligo White Spot", href: "/service/vitiligo-white-spot" },
  { label: "Alopecia Areata", href: "/service/alopecia-areata" },
];

// Utility to get nested items for a given label
export const getNested = (section, label) => {
  if (section === "skin") return skinNested[label]?.children || [];
  return [];
};
