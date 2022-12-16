import Card from '../UI/Card';
import classes from './AvaiableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Peixe fresco e vegetais',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'Uma especialidade alemã',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Hambúrguer',
      description: 'Clássico hambúrger',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Salada verde',
      description: 'Salada saudável',
      price: 18.99,
    },
  ];

const AvaiableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} meal={meal} />);

    return <section className={classes.meals}>
      <Card>
        <ul>
            {mealsList}
        </ul>
      </Card>
    </section>
};

export default AvaiableMeals;