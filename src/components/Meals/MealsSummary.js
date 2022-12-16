import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return <section className={classes.summary}>
        <h2>Comida deliciosa, entregue a você!</h2>
        <p>
            Escolha sua refeição favorita da nossa seleção especial de comidas disponíveis e aproveite um delicioso almoço ou jantar em casa.
        </p>
        <p>
            Todas nossas refeições são preparadas com ingredientes de alta qualidade, frescos e por chefes com experiência!
        </p>
    </section>
};

export default MealsSummary;