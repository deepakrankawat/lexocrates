import { Briefcase, Users, Home, Brain, Shield, Landmark } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const servicesList = [
  { 
    name: 'Corporate Law', 
    slug: 'corporate-law', 
    icon: Briefcase, 
    description: "Expert guidance on business formation, contracts, and corporate governance.",
    longDescription: "Navigating the complexities of corporate law requires a skilled and experienced hand. At Northman Law, we provide comprehensive legal services for businesses of all sizes, from startups to established corporations. Our expertise covers everything from business formation and compliance to mergers and acquisitions. We act as your strategic partners, helping you mitigate risk, ensure compliance, and achieve your business objectives. Trust us to provide the sound legal counsel you need to thrive in a competitive marketplace. We also advise on shareholder agreements, securities law, and day-to-day corporate legal affairs to ensure your business operates on a solid legal foundation.",
    keyAreas: [
      "Business Formation and Structuring",
      "Contract Drafting and Negotiation",
      "Mergers and Acquisitions",
      "Corporate Governance and Compliance",
      "Shareholder Agreements",
      "Securities Law"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-corporate-law')
  },
  { 
    name: 'Family Law', 
    slug: 'family-law', 
    icon: Users, 
    description: "Compassionate handling of divorce, custody, and adoption cases.",
    longDescription: "Family law matters are deeply personal and often emotionally charged. Our compassionate team provides sensitive and effective representation for divorce, child custody, adoption, and other family-related legal issues. We prioritize clear communication and work to achieve amicable resolutions whenever possible, while vigorously protecting your interests in court when necessary. Your family's well-being is our primary concern. We understand the delicate nature of these cases and are committed to guiding you through this difficult time with dignity and respect. We also handle prenuptial agreements, spousal support, and domestic violence cases with the utmost discretion and care.",
    keyAreas: [
      "Divorce and Separation",
      "Child Custody and Support",
      "Adoption and Surrogacy",
      "Prenuptial and Postnuptial Agreements",
      "Domestic Violence and Restraining Orders",
      "Alimony and Spousal Support"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-family-law')
  },
  { 
    name: 'Real Estate Law', 
    slug: 'real-estate-law', 
    icon: Home, 
    description: "Seamless transactions for residential and commercial properties.",
    longDescription: "Whether you are buying, selling, or leasing property, our real estate law experts ensure your transactions are smooth and legally sound. We handle all aspects of real estate law, including contract review, title searches, zoning issues, and closing procedures for both residential and commercial properties. Our meticulous approach protects you from potential pitfalls and ensures your property rights are secure. We represent developers, investors, landlords, and tenants.",
    keyAreas: [
      "Residential and Commercial Closings",
      "Lease Agreements and Disputes",
      "Zoning and Land Use",
      "Title Examination and Insurance",
      "Real Estate Development",
      "Landlord-Tenant Law"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-real-estate-law')
  },
  { 
    name: 'Intellectual Property', 
    slug: 'intellectual-property', 
    icon: Brain, 
    description: "Protecting your patents, trademarks, and creative works.",
    longDescription: "In today's innovation-driven world, protecting your intellectual property is crucial. Our IP law team helps individuals and businesses safeguard their patents, trademarks, copyrights, and trade secrets. We provide comprehensive services, from registration and licensing to litigation against infringement, ensuring your valuable ideas and creations remain yours. We also offer strategic counseling on IP portfolio management to maximize the value of your assets.",
    keyAreas: [
      "Patent Registration and Litigation",
      "Trademark and Copyright Protection",
      "Trade Secret Law",
      "IP Licensing and Transactions",
      "Domain Name Disputes",
      "Portfolio Management"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-ip-law')
  },
  { 
    name: 'Criminal Defense', 
    slug: 'criminal-defense', 
    icon: Shield,
    description: "Vigorous defense to protect your rights and freedom.",
    longDescription: "Facing criminal charges can be a daunting experience. Our criminal defense team provides a vigorous defense for clients accused of a wide range of offenses, from misdemeanors to serious felonies. We are committed to protecting your rights, ensuring due process, and fighting for the best possible outcome. With a deep understanding of criminal law and procedure, we are your strongest advocates in the justice system, from investigation through to trial and appeals.",
    keyAreas: [
      "DUI/DWI Defense",
      "Drug Offenses",
      "Assault and Battery",
      "Theft and Fraud",
      "White-Collar Crimes",
      "Federal and State Felonies"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-criminal-defense')
  },
  { 
    name: 'Immigration Law', 
    slug: 'immigration-law', 
    icon: Landmark, 
    description: "Navigating complex immigration laws for visas and citizenship.",
    longDescription: "The immigration process can be complex and confusing. Our immigration law experts guide individuals, families, and businesses through the intricate landscape of U.S. immigration law. We assist with visa applications, green cards, naturalization, and defense against deportation. Whether you are an employer seeking to hire foreign talent or an individual looking to build a new life, we provide clear, strategic, and effective legal support. We are dedicated to helping you achieve your American dream by providing clear, strategic, and effective legal support every step of the way.",
    keyAreas: [
      "Family-Based Visas",
      "Employment-Based Visas",
      "Green Card Applications",
      "Citizenship and Naturalization",
      "Deportation Defense",
      "Asylum and Refugee Status"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-immigration-law')
  },
];
