import Article from "@/store/models/Article.js";

export default{
    /**
     * Method to get content of the home page.
     */
    getHomeContent({commit})
    {
        var article1=new Article();
        article1.id=1;
        article1.titre="L’itinérance de Madame le Directeur Général à l’espace Grand Katanga";
        article1.date="07 Juil, 2024";
        article1.img_cover="/assets/downloaded/blog1.jpeg";
        article1.content="Poursuivant sa mission de travail dans le grand Katanga, après l’étape de Kolwezi où avant";
        var article2=new Article();
        article2.id=2;
        article2.titre="VISITE D’INSPECTION DES 2400 POTEAUX DE TÉLÉCOMS EN CONSTRUCTION DANS LE TRONÇON LIKASI – KOLWEZI";
        article2.date="07 Juil, 2024";
        article2.img_cover="/assets/downloaded/blog2.jpeg";
        article2.content="La grande équipe technique qui faisait partie de la délégation de Madame le Directeur Général";
        var article3=new Article();
        article3.id=3;
        article3.titre="La tournée de Madame le Directeur Général dans le Grand Katanga";
        article3.date="07 Juil, 2024";
        article3.img_cover="/assets/downloaded/blog3.jpeg";
        article3.content="En séjour de travail dans l’espace Grand Katanga depuis le samedi 20 juillet dernier, Madame";

        commit("SET_ARTICLES",[article1,article2,article3]);
    }
}