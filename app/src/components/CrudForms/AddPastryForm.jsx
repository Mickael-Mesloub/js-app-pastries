import Layout from '../Layout';

const AddPastryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AddPastryForm');
  };
  return (
    <Layout className="add-pastry">
      <>
        <form onSubmit={handleSubmit} className="form-add-pastry">
          <h2>Ajouter une pâtisserie</h2>
          <input
            type="text"
            placeholder="Nom de la pâtisserie"
            onChange={(e) => console.log(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantité"
            onChange={(e) => console.log(e.target.value)}
          />
          <input type="submit" value="Ajouter" />
        </form>
      </>
    </Layout>
  );
};

export default AddPastryForm;
