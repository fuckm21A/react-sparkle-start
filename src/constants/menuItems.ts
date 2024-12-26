import { Gift, ShoppingBag, Shirt, Watch, Scissors } from 'lucide-react';

export const menuItems = [
  {
    title: "Le monde Fiori",
    icon: Gift,
    link: "#",
    subItems: [
      { href: "/category/le-monde-fiori/homme/histoire", title: "Histoire" },
      { href: "/category/le-monde-fiori/homme/collection", title: "Collection" },
      { href: "/category/le-monde-fiori/homme/dna", title: "DNA" },
    ],
  },
  {
    title: "L'univers Cadeaux",
    icon: ShoppingBag,
    link: "#",
    subItems: [
      { href: "/univers-cadeaux/packprestige", title: "Pack Prestige" },
      { href: "/univers-cadeaux/packpremuim", title: "Pack Premium" },
      { href: "/univers-cadeaux/packtrio", title: "Pack Trio" },
      { href: "/univers-cadeaux/packduo", title: "Pack Duo" },
      { href: "/univers-cadeaux/packminiduo", title: "Pack Mini Duo" },
      { href: "/univers-cadeaux/packmono", title: "Pack Mono" },
    ],
  },
  {
    title: "Le prêt à porter",
    icon: Shirt,
    link: "#",
    subItems: [
      { href: "/category/pret-a-porter/homme/costumes", title: "Costumes" },
      { href: "/category/pret-a-porter/homme/blazers", title: "Blazers" },
      { href: "/category/pret-a-porter/homme/chemises", title: "Chemises" },
      { href: "/category/pret-a-porter/homme/pulls", title: "Pulls" },
      { href: "/category/pret-a-porter/homme/pantalons", title: "Pantalons" },
    ],
  },
  {
    title: "Accessoires",
    icon: Watch,
    link: "#",
    subItems: [
      { href: "/category/accessoires/homme/portefeuilles", title: "Portefeuilles" },
      { href: "/category/accessoires/homme/ceintures", title: "Ceintures" },
      { href: "/category/accessoires/homme/cravates", title: "Cravates" },
      { href: "/category/accessoires/homme/mallettes", title: "Mallettes" },
      { href: "/category/accessoires/homme/porte-cartes", title: "Porte-cartes" },
      { href: "/category/accessoires/femme/sacs-a-main", title: "Sacs à main" },
    ],
  },
  {
    title: "Sur mesure",
    icon: Scissors,
    link: "#",
    subItems: [
      { href: "/category/sur-mesure/homme/portefeuilles", title: "Portefeuilles" },
      { href: "/category/sur-mesure/homme/ceintures", title: "Ceintures" },
      { href: "/category/sur-mesure/femme/sacs-a-main", title: "Sacs à main" },
    ],
  },
  {
    title: "Outlet",
    icon: ShoppingBag,
    link: "#",
    subItems: [
      { href: "/category/outlet/homme/costumes", title: "Costumes" },
      { href: "/category/outlet/homme/blazers", title: "Blazers" },
      { href: "/category/outlet/femme/chemises", title: "Chemises" },
    ],
  },
];