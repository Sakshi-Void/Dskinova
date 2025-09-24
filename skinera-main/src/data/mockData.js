// Mock data for services (synced with ssss)
// Import images so Vite processes them for production builds
import antiAgingImg from "../../Images/Services/anti-aging.jpg";
import deepPeelingImg from "../../Images/Services/deep-peeling.jpg";
import facialsImg from "../../Images/Services/facials.jpg";
import laserHairRemovalImg from "../../Images/Services/laser-hair-removal.jpg";
// Note: file name in assets is spelled 'threapy'
import laserSkinTherapyImg from "../../Images/Services/laser-skin-threapy.jpg";
import mesotherapyImg from "../../Images/Services/mesotherapy.jpg";
import microdermabrasionImg from "../../Images/Services/microdermabrasion.jpg";
import pigmentationSolutionsImg from "../../Images/Services/pigmentation-solution.jpg";
import skinTighteningImg from "../../Images/Services/skin-tightening.jpg";
import hairPrpImg from "../../Images/Services/hair-prp.jpg";
import hairGfcImg from "../../Images/Services/hair-gfc.jpg";
import hairRegrowthLaserImg from "../../Images/Services/hair-regrowth-laser.jpg";
import koreanSkinTreatmentImg from "../../Images/Services/korean-skin-treatment.jpg";
import botoxTreatmentImg from "../../Images/Services/botox-treatment.jpg";
import manicureImg from "../../Images/Services/Manicure.jpg";
import pedicureImg from "../../Images/Services/Pedicure.jpg";
import fillerImg from "../../Images/Our-Service/imgi_53_hyaluronic-acid-injection-fillers-for-cheeks.jpg";
import decorativeFlowerImg from "../../Images/Services/Flower/flower.png";
// Newly added assets to match ssss
import cryoFatFreezingImg from "../../Images/Services/Cryo-Fat-freezing.jpg";
import intralesionalInjectionImg from "../../Images/Services/IntralesionalInjection.webp";
import preBridalSpecialsImg from "../../Images/Services/PreBridalSpecials.jpg";
import dandruffImg from "../../Images/Services/Dandruff.jpg";
import laserTattooRemovalImg from "../../Images/Services/LaserTattooRemoval.jpg";
import stretchMarksImg from "../../Images/Services/StretchMarks.jpg";
import hairfallImg from "../../Images/Services/Hairfall.webp";
import medicalSpaFacialsImg from "../../Images/Services/MedicalSpaFacials.webp";
import hairTransplantImg from "../../Images/Services/HairTransplant.webp";
import pigmentationTreatmentsImg from "../../Images/Services/PigmentationTreatments.jpg";
import skinLighteningWhiteningImg from "../../Images/Services/skin-lightening-and-whitening.jpg";
// Acne Scar subitems
import co2FractionalLaserImg from "../../Images/Services/co2-fractional-laser.jpg";
import dermarollerPrpSubcisionImg from "../../Images/Services/dermaroller-with-prp&subcision.jpg";
import erbiumFiberLaserImg from "../../Images/Services/erbium-fiber-laser.jpg";
// Medical Spa Facials subitems
import oxygeneoFacialImg from "../../Images/Services/oxygeneo-facial.png";
import carbonFacialImg from "../../Images/Services/carbon-facial.avif";
import photoFacialImg from "../../Images/Services/photo-facial.jpg";

export const servicesData = {
  "anti-aging": {
    id: "anti-aging",
    title: "Anti-Aging Treatment",
    price: 2500,
    currency: "₹",
    priceNote: "per session",
    image: antiAgingImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: antiAgingImg, // placeholder for video
    overview: {
      title: "Overview",
      description:
        "Advanced anti-aging facial treatment designed to reduce fine lines, wrinkles, and age spots. Our expert aestheticians use premium serums and cutting-edge technology to restore youthful radiance. Treatment includes deep cleansing, exfoliation, and targeted anti-aging therapy for visible results.\n\nThis comprehensive treatment stimulates collagen production and improves skin elasticity. Perfect for mature skin seeking rejuvenation and long-lasting hydration with natural glow enhancement.",
    },
    included: [
      "Skin Analysis",
      "Anti-Aging Serum",
      "Collagen Mask",
      "Moisturizing",
    ],
    excluded: [
      "Chemical Peel",
      "Botox Injection",
      "Laser Therapy",
      "Dermal Fillers",
    ],
    additionalInfo: {
      duration: "60-90 minutes",
      sessions: "4-6 sessions recommended",
      results: "Visible in 2-3 weeks",
    },
  },
  // Additional services
  "deep-peelings": {
    id: "deep-peelings",
    title: "Deep Peelings",
    price: 2200,
    currency: "₹",
    priceNote: "per session",
    image: deepPeelingImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: deepPeelingImg,
    overview: {
      title: "Overview",
      description:
        "Intense resurfacing peel that targets texture, pigmentation, and fine lines. Helps reveal clearer, smoother, and brighter skin with improved tone.\n\nIdeal for dull or uneven skin seeking visible renewal with professional post-care guidance.",
    },
    included: ["Consultation", "Customized Peel", "Neutralizer", "Sunscreen"],
    excluded: ["Home Peel Kits", "Dermal Fillers", "Microneedling", "Laser"],
  },
  // Newly added mapped services (sync with ssss)
  "cryo-fat-freezing": {
    id: "cryo-fat-freezing",
    title: "Cryo Fat Freezing",
    price: 9000,
    currency: "₹",
    priceNote: "per area",
    image: cryoFatFreezingImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: cryoFatFreezingImg,
    overview: {
      title: "Overview",
      description:
        "Non-surgical fat reduction using controlled cooling to target stubborn fat pockets safely and effectively.",
    },
    included: ["Consultation", "Area Marking", "Cooling Session", "Aftercare"],
    excluded: ["Surgery", "Liposuction", "Anesthesia", "Implants"],
  },
  "laser-tattoo-removal": {
    id: "laser-tattoo-removal",
    title: "Laser Tattoo Removal",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    image: laserTattooRemovalImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: laserTattooRemovalImg,
    overview: {
      title: "Overview",
      description:
        "Advanced laser technology to fade and remove unwanted tattoos with minimal downtime over multiple sessions.",
    },
    included: ["Patch Test", "Laser Session", "Cooling", "Aftercare"],
    excluded: ["Anesthesia", "Scar Revision", "Cover-up Tattoo", "Medication"],
  },
  "stretch-marks": {
    id: "stretch-marks",
    title: "Stretch Marks Treatment",
    price: 3000,
    currency: "₹",
    priceNote: "per session",
    image: stretchMarksImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: stretchMarksImg,
    overview: {
      title: "Overview",
      description:
        "Targeted treatments such as micro-needling and laser to improve texture and appearance of stretch marks.",
    },
    included: ["Assessment", "Session", "Topicals", "Aftercare"],
    excluded: ["Surgery", "Implants", "Fillers", "Home Kits"],
  },
  "pre-bridal-specials": {
    id: "pre-bridal-specials",
    title: "Pre-Bridal Specials",
    price: 12000,
    currency: "₹",
    priceNote: "package",
    image: preBridalSpecialsImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: preBridalSpecialsImg,
    overview: {
      title: "Overview",
      description:
        "Curated skincare and haircare packages to prep for the big day—glow, hydration, and polish.",
    },
    included: ["Consultation", "Facial", "Polishing", "Home-care Plan"],
    excluded: ["Injectables", "Surgery", "Extensions", "Transplants"],
  },
  dandruff: {
    id: "dandruff",
    title: "Dandruff Control",
    price: 1200,
    currency: "₹",
    priceNote: "per session",
    image: dandruffImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: dandruffImg,
    overview: {
      title: "Overview",
      description:
        "Scalp exfoliation and medicated therapies to reduce flakes, itchiness, and irritation.",
    },
    included: ["Scalp Analysis", "Therapeutic Wash", "Tonics", "Plan"],
    excluded: ["Transplant", "PRP", "Extensions", "Coloring"],
  },
  hairfall: {
    id: "hairfall",
    title: "Hairfall Solutions",
    price: 1500,
    currency: "₹",
    priceNote: "per session",
    image: hairfallImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairfallImg,
    overview: {
      title: "Overview",
      description:
        "Diagnosis-led protocols to control hair fall using topicals, meso, or PRP/GFC as needed.",
    },
    included: ["Consultation", "Plan", "Scalp Care", "Follow-up"],
    excluded: ["Transplant", "Extensions", "Coloring", "Medication"],
  },
  "medical-spa-facials": {
    id: "medical-spa-facials",
    title: "Medical Spa Facials",
    price: 2000,
    currency: "₹",
    priceNote: "per session",
    image: medicalSpaFacialsImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: medicalSpaFacialsImg,
    overview: {
      title: "Overview",
      description:
        "Clinic-grade facial protocols such as oxygeneo, carbon, and photo facials for deep rejuvenation.",
    },
    included: ["Cleanse", "Exfoliate", "Device", "Mask"],
    excluded: ["Injectables", "Laser", "Peels", "Surgery"],
  },
  "hair-transplant": {
    id: "hair-transplant",
    title: "Hair Transplant",
    price: 60000,
    currency: "₹",
    priceNote: "starting",
    image: hairTransplantImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairTransplantImg,
    overview: {
      title: "Overview",
      description:
        "FUE/FUT hair transplant solutions tailored to restore natural hairlines and density.",
    },
    included: ["Consultation", "Graft Planning", "Procedure", "Aftercare"],
    excluded: ["PRP", "GFC", "Coloring", "Extensions"],
  },
  "pigmentation-treatments": {
    id: "pigmentation-treatments",
    title: "Pigmentation Treatments",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    image: pigmentationTreatmentsImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: pigmentationTreatmentsImg,
    overview: {
      title: "Overview",
      description:
        "Treatments for tanning, melasma, and dark spots using customized peels, lasers, and serums.",
    },
    included: ["Assessment", "Custom Protocol", "In-clinic Care", "SPF"],
    excluded: ["Home Peels", "Self-medication", "Injectables", "Surgery"],
  },
  "skin-lightening-and-whitening": {
    id: "skin-lightening-and-whitening",
    title: "Skin Lightening & Whitening",
    price: 3800,
    currency: "₹",
    priceNote: "per session",
    image: skinLighteningWhiteningImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: skinLighteningWhiteningImg,
    overview: {
      title: "Overview",
      description:
        "Targeted brightening protocols to reduce tan, uneven tone, and dullness for visibly lighter, even skin.",
    },
    included: ["Assessment", "Brightening Actives", "In-clinic Care", "SPF"],
    excluded: ["Injectables", "Surgery", "Home Peels", "Self-medication"],
  },
  "intralesional-injection": {
    id: "intralesional-injection",
    title: "Intralesional Injection",
    price: 1800,
    currency: "₹",
    priceNote: "per session",
    image: intralesionalInjectionImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: intralesionalInjectionImg,
    overview: {
      title: "Overview",
      description:
        "Localized corticosteroid injections to treat alopecia areata and inflammatory scalp conditions.",
    },
    included: ["Assessment", "Injection", "Topicals", "Follow-up"],
    excluded: ["Transplant", "PRP", "GFC", "Laser"],
  },
  "co2-fractional-laser": {
    id: "co2-fractional-laser",
    title: "CO2 Fractional Laser",
    price: 5500,
    currency: "₹",
    priceNote: "per session",
    image: co2FractionalLaserImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: co2FractionalLaserImg,
    overview: {
      title: "Overview",
      description:
        "Fractional CO2 laser resurfacing to improve acne scars, texture, and fine lines with collagen remodeling.",
    },
    included: ["Consultation", "Topical Numbing", "Laser Session", "Aftercare"],
    excluded: ["Surgery", "Fillers", "Injectables", "Home Lasers"],
  },
  "dermaroller-with-prp-and-subcision": {
    id: "dermaroller-with-prp-and-subcision",
    title: "Dermaroller with PRP & Subcision",
    price: 6500,
    currency: "₹",
    priceNote: "per session",
    image: dermarollerPrpSubcisionImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: dermarollerPrpSubcisionImg,
    overview: {
      title: "Overview",
      description:
        "Combined microneedling, platelet-rich plasma, and subcision for acne scar remodeling and skin rejuvenation.",
    },
    included: ["Consultation", "PRP Prep", "Microneedling", "Subcision"],
    excluded: ["Laser", "Fillers", "Surgery", "Implants"],
  },
  "erbium-fiber-laser": {
    id: "erbium-fiber-laser",
    title: "Erbium Fiber Laser",
    price: 5000,
    currency: "₹",
    priceNote: "per session",
    image: erbiumFiberLaserImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: erbiumFiberLaserImg,
    overview: {
      title: "Overview",
      description:
        "Erbium fiber laser for gentle resurfacing and acne scar improvement with reduced downtime.",
    },
    included: ["Assessment", "Laser Session", "Cooling", "Aftercare"],
    excluded: ["Surgery", "Fillers", "Implants", "Medication"],
  },
  "oxygeneo-facial": {
    id: "oxygeneo-facial",
    title: "Oxygeneo Facial",
    price: 2500,
    currency: "₹",
    priceNote: "per session",
    image: oxygeneoFacialImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: oxygeneoFacialImg,
    overview: {
      title: "Overview",
      description:
        "3-in-1 super facial combining exfoliation, infusion, and oxygenation for immediate glow.",
    },
    included: ["Cleanse", "Exfoliate", "Infuse", "Oxygenate"],
    excluded: ["Injectables", "Laser", "Peels", "Surgery"],
  },
  "carbon-facial": {
    id: "carbon-facial",
    title: "Carbon Facial",
    price: 3000,
    currency: "₹",
    priceNote: "per session",
    image: carbonFacialImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: carbonFacialImg,
    overview: {
      title: "Overview",
      description:
        "Carbon laser peel to reduce oiliness, refine pores, and brighten dull skin.",
    },
    included: ["Cleanse", "Carbon Lotion", "Laser", "SPF"],
    excluded: ["Injectables", "Fillers", "Surgery", "Home Lasers"],
  },
  "photo-facial": {
    id: "photo-facial",
    title: "Photo Facial",
    price: 2800,
    currency: "₹",
    priceNote: "per session",
    image: photoFacialImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: photoFacialImg,
    overview: {
      title: "Overview",
      description:
        "Light-based facial treatment to improve redness, sun damage, and uneven tone for a brighter complexion.",
    },
    included: ["Cleanse", "Light Session", "Serum", "SPF"],
    excluded: ["Injectables", "Laser", "Peels", "Surgery"],
  },
  // Retain existing base services
  facials: {
    id: "facials",
    title: "Facials",
    price: 1500,
    currency: "₹",
    priceNote: "per session",
    image: facialsImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: facialsImg,
    overview: {
      title: "Overview",
      description:
        "Customized facials for hydration, brightening, and deep cleansing. Includes exfoliation, massage, and mask for refreshed, glowing skin.",
    },
    included: ["Cleansing", "Exfoliation", "Mask", "Moisturizer"],
    excluded: ["Peels", "Injectables", "Laser", "Dermaplaning"],
  },
  "laser-hair-removal": {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    image: laserHairRemovalImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: laserHairRemovalImg,
    overview: {
      title: "Overview",
      description:
        "State-of-the-art laser hair removal technology for long-term hair reduction. Safe, effective, and suitable for all skin types.",
    },
    included: ["Consultation", "Laser Treatment", "Cooling Gel", "Post-care"],
    excluded: ["Numbing Cream", "Additional Areas", "Touch-ups", "Home Kit"],
  },
  "laser-skin-therapy": {
    id: "laser-skin-therapy",
    title: "Laser Skin Therapy",
    price: 4800,
    currency: "₹",
    priceNote: "per session",
    image: laserSkinTherapyImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: laserSkinTherapyImg,
    overview: {
      title: "Overview",
      description:
        "Targeted laser treatment for scars, acne marks, and pigmentation. Stimulates collagen and promotes smoother, more even skin.",
    },
    included: ["Skin Prep", "Laser Session", "Cooling", "Aftercare"],
    excluded: ["Injectables", "Peels", "Home Lasers", "Medication"],
  },
  mesotherapy: {
    id: "mesotherapy",
    title: "Mesotherapy",
    price: 3200,
    currency: "₹",
    priceNote: "per session",
    image: mesotherapyImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: mesotherapyImg,
    overview: {
      title: "Overview",
      description:
        "Microinjections of vitamins and actives to rejuvenate and hydrate skin. Enhances tone and texture with minimal downtime.",
    },
    included: ["Consultation", "Topical Numbing", "Meso Cocktail", "Aftercare"],
    excluded: ["PRP", "Fillers", "Laser", "Peels"],
  },
  microdermabrasion: {
    id: "microdermabrasion",
    title: "Microdermabrasion",
    price: 2000,
    currency: "₹",
    priceNote: "per session",
    image: microdermabrasionImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: microdermabrasionImg,
    overview: {
      title: "Overview",
      description:
        "Gentle exfoliating procedure to remove dead skin cells, refine pores, and enhance glow. Suitable for most skin types.",
    },
    included: ["Cleansing", "Microderm", "Serum", "SPF"],
    excluded: ["Peels", "Dermaplaning", "Laser", "Injectables"],
  },
  "pigmentation-solutions": {
    id: "pigmentation-solutions",
    title: "Pigmentation Solutions",
    price: 3800,
    currency: "₹",
    priceNote: "per session",
    image: pigmentationSolutionsImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: pigmentationSolutionsImg,
    overview: {
      title: "Overview",
      description:
        "Targeted treatments for melasma, tanning, and dark spots using peels, laser, or serums as per skin type and concern.",
    },
    included: ["Assessment", "Treatment Plan", "In-clinic Care", "SPF"],
    excluded: ["Home Peels", "Self-medication", "Injectables", "Fillers"],
  },
  "skin-tightening": {
    id: "skin-tightening",
    title: "Skin Tightening",
    price: 4500,
    currency: "₹",
    priceNote: "per session",
    image: skinTighteningImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: skinTighteningImg,
    overview: {
      title: "Overview",
      description:
        "Non-surgical tightening to lift and firm skin using RF or ultrasound-based technology. Improves laxity and contours.",
    },
    included: ["Consultation", "Treatment Session", "Cooling", "Aftercare"],
    excluded: ["Surgery", "Injectables", "Implants", "Fillers"],
  },
  "hair-prp": {
    id: "hair-prp",
    title: "Hair PRP",
    price: 5000,
    currency: "₹",
    priceNote: "per session",
    image: hairPrpImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairPrpImg,
    overview: {
      title: "Overview",
      description:
        "Platelet-Rich Plasma therapy to strengthen hair roots and encourage regrowth. Minimally invasive and natural.",
    },
    included: [
      "Blood Draw",
      "PRP Preparation",
      "Scalp Injections",
      "Post-care",
    ],
    excluded: ["GFC", "Transplant", "Medication", "Laser"],
  },
  "hair-gfc": {
    id: "hair-gfc",
    title: "Hair GFC",
    price: 6000,
    currency: "₹",
    priceNote: "per session",
    image: hairGfcImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairGfcImg,
    overview: {
      title: "Overview",
      description:
        "Growth Factor Concentrate therapy to boost hair density and reduce hair fall. Advanced alternative to conventional PRP.",
    },
    included: ["Assessment", "GFC Preparation", "Injections", "Guidance"],
    excluded: ["PRP", "Transplant", "Medications", "Laser"],
  },
  "hair-regrowth-laser": {
    id: "hair-regrowth-laser",
    title: "Hair Regrowth Laser",
    price: 3000,
    currency: "₹",
    priceNote: "per session",
    image: hairRegrowthLaserImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairRegrowthLaserImg,
    overview: {
      title: "Overview",
      description:
        "Low-level laser therapy (LLLT) to stimulate scalp and promote hair growth. Comfortable and non-invasive.",
    },
    included: ["Consultation", "Laser Session", "Scalp Care", "Plan"],
    excluded: ["PRP", "GFC", "Transplant", "Drugs"],
  },
  "korean-skin-treatment": {
    id: "korean-skin-treatment",
    title: "Korean Skin Treatment",
    price: 2800,
    currency: "₹",
    priceNote: "per session",
    image: koreanSkinTreatmentImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: koreanSkinTreatmentImg,
    overview: {
      title: "Overview",
      description:
        "Signature K-beauty protocols focusing on hydration, glass-skin glow, and barrier repair using multi-step care.",
    },
    included: ["Double Cleanse", "Essence", "Ampoules", "Sheet Mask"],
    excluded: ["Injectables", "Laser", "Peels", "Dermaplaning"],
  },
  "botox-treatment": {
    id: "botox-treatment",
    title: "Botox Treatment",
    price: 12000,
    currency: "₹",
    priceNote: "per area",
    image: botoxTreatmentImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: botoxTreatmentImg,
    overview: {
      title: "Overview",
      description:
        "FDA-approved botulinum toxin injections to soften expression lines such as frown lines and crow's feet for a smoother look.",
    },
    included: ["Consultation", "Marking", "Injection", "Aftercare"],
    excluded: ["Fillers", "Peels", "Laser", "Surgery"],
  },
  filler: {
    id: "filler",
    title: "Dermal Filler Treatment",
    price: 15000,
    currency: "₹",
    priceNote: "per syringe/area",
    image: fillerImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: fillerImg,
    overview: {
      title: "Overview",
      description:
        "Hyaluronic acid-based dermal fillers to restore volume and contour lips, cheeks, and jawline. Provides immediate, natural-looking enhancement with minimal downtime.",
    },
    included: ["Consultation", "Marking", "Injection", "Aftercare"],
    excluded: ["Botox", "Laser", "Peels", "Surgery"],
  },
  manicure: {
    id: "manicure",
    title: "Manicure",
    price: 800,
    currency: "₹",
    priceNote: "per session",
    image: manicureImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: manicureImg,
    overview: {
      title: "Overview",
      description:
        "Professional manicure for clean, nourished, and polished hands. Includes cuticle care, nail shaping, gentle exfoliation, and hydration.",
    },
    included: ["Nail Shaping", "Cuticle Care", "Massage", "Polish"],
    excluded: ["Gel Extensions", "Acrylics", "Nail Art", "Paraffin"],
  },
  pedicure: {
    id: "pedicure",
    title: "Pedicure",
    price: 1000,
    currency: "₹",
    priceNote: "per session",
    image: pedicureImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: pedicureImg,
    overview: {
      title: "Overview",
      description:
        "Revitalizing pedicure to soften and refresh feet. Includes soaking, exfoliation, cuticle care, nail shaping, and moisturizing.",
    },
    included: ["Foot Soak", "Exfoliation", "Cuticle Care", "Polish"],
    excluded: [
      "Medical Pedicure",
      "Callus Removal",
      "Gel Extensions",
      "Acrylics",
    ],
  },
};

export const getServiceById = (id) => {
  return servicesData[id] || null;
};

export const getAllServices = () => {
  return Object.values(servicesData);
};
