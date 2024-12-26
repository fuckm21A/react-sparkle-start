import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useCart } from './cart/CartProvider';
import axios from 'axios';
import FAQModal from './modals/FAQModal';
import InfoModal from './modals/InfoModal';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { applyNewsletterDiscount } = useCart();

  // Modal states
  const [showFAQ, setShowFAQ] = useState(false);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const [showAboutFiori, setShowAboutFiori] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://respizenmedical.com/fiori/subscribe_email.php', {
        email
      });

      if (response.data.status === 'success') {
        applyNewsletterDiscount();
        toast({
          title: "Inscription réussie !",
          description: "Merci de vous être inscrit à notre newsletter. Votre réduction de 5% a été appliquée à votre panier.",
          duration: 3000,
        });
        setEmail('');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Erreur d\'inscription à la newsletter:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-white text-gray-800">
      <div className="border-y border-gray-200">
        <div className="container mx-auto px-4 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium">Abonnez-vous aujourd'hui et obtenez 5% de réduction sur votre premier achat</p>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="px-4 py-2 rounded-md border border-gray-300 flex-1 md:w-[280px] text-sm"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#700100] text-white px-6 py-2 rounded-md text-sm hover:bg-[#700100]/90"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
          <div>
            <h3 className="font-semibold text-sm mb-4">CONTACTEZ-NOUS</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="inline-block">+212-529-15-93-92</span>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span>Envoyez-nous un email</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span>Chat en direct</span>
                </a>
              </li>
            </ul>
            <p className="mt-6 mb-3 text-sm">Suivez-nous</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/fioriforyou/" target="_blank" rel="noopener noreferrer" className="hover:text-[#700100]-600">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://www.facebook.com/FioriForYouMen" target="_blank" rel="noopener noreferrer" className="hover:text-[#700100]-600">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="hover:text-[#700100]-600">
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a href="#" className="hover:text-[#700100]-600">
                <i className="fab fa-tiktok text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">À PROPOS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setShowAboutFiori(true)} className="hover:underline">
                  Qu'est-ce que Fiori
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">SERVICE CLIENT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setShowDeliveryInfo(true)} className="hover:underline">
                  Informations de livraison
                </button>
              </li>
              <li>
                <button onClick={() => setShowFAQ(true)} className="hover:underline">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => setShowReturnPolicy(true)} className="hover:underline">
                  Politique de retour
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">LES ARTISANS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/le-monde-fiori/homme/histoire" className="hover:underline">
                  Le monde Fiori
                </Link>
              </li>
              <li>
                <Link to="/univers-cadeaux/packprestige" className="hover:underline">
                  L'univers Cadeaux
                </Link>
              </li>
              <li>
                <Link to="/category/pret-a-porter/homme/costumes" className="hover:underline">
                  Le prêt à porter
                </Link>
              </li>
              <li>
                <Link to="/category/accessoires/homme/portefeuilles" className="hover:underline">
                  Accessoires
                </Link>
              </li>
              <li>
                <Link to="/category/sur-mesure/homme/portefeuilles" className="hover:underline">
                  Le sur mesure
                </Link>
              </li>
              <li>
                <Link to="/category/outlet/homme/costumes" className="hover:underline">
                  Outlet
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-sm mb-2">Nous acceptons</p>
              <div className="flex gap-2">
                <img src="https://i.ibb.co/JnwRLrJ/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png" alt="Mastercard" className="h-7" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 FioriForYou</p>
          <p className="text-xs">Fait avec ❤️ en Tunisia par <strong>Holastudie</strong></p>
        </div>
      </div>

      {/* Modals */}
      <FAQModal isOpen={showFAQ} onOpenChange={setShowFAQ} />
      
      <InfoModal
        isOpen={showDeliveryInfo}
        onOpenChange={setShowDeliveryInfo}
        title="Informations de Livraison"
        content="Nous livrons dans toute la Tunisie. Les délais de livraison varient entre 2 à 5 jours ouvrables. Pour les commandes internationales, veuillez nous contacter directement."
      />
      
      <InfoModal
        isOpen={showReturnPolicy}
        onOpenChange={setShowReturnPolicy}
        title="Politique de Retour"
        content="Nous acceptons les retours dans un délai de 14 jours suivant la réception de votre commande. Les articles doivent être dans leur état d'origine, non portés et avec toutes les étiquettes attachées. Les frais de retour sont à la charge du client."
      />
      
      <InfoModal
        isOpen={showAboutFiori}
        onOpenChange={setShowAboutFiori}
        title="Qu'est-ce que Fiori"
        content="Fiori est une marque de luxe tunisienne spécialisée dans la création de vêtements et d'accessoires haut de gamme pour hommes et femmes. Notre engagement envers l'excellence artisanale et notre passion pour les matériaux de qualité nous permettent de créer des pièces uniques qui allient élégance traditionnelle et modernité."
      />
    </footer>
  );
};

export default Footer;