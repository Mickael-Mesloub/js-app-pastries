import Layout from '../components/Layout';
import './styles/ContactPage-styles.scss';

const ContactPage = () => {
  const patisserieCoordonnees = {
    nom: 'Délices sucrés',
    adresse: '123 Rue de la Gourmandise, Ville Gourmande',
    telephone: '+33 1 23 45 67 89',
    email: 'contact@delices-sucres.com',
  };

  return (
    <Layout className="contact">
      <div className="patisserie-contact">
        <h2>Coordonnées de la Pâtisserie</h2>
        <p>
          <strong>Nom:</strong> {patisserieCoordonnees.nom}
        </p>
        <p>
          <strong>Adresse:</strong> {patisserieCoordonnees.adresse}
        </p>
        <p>
          <strong>Téléphone:</strong> {patisserieCoordonnees.telephone}
        </p>
        <p>
          <strong>Email:</strong> {patisserieCoordonnees.email}
        </p>
      </div>
    </Layout>
  );
};

export default ContactPage;
