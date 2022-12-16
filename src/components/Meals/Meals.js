import MealsSummary from "./MealsSummary";
import AvaiableMeals from "./AvaiableMeals";
import {Fragment} from "react";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvaiableMeals />
        </Fragment>
    )
};

export default Meals;