import React from "react";
import classes from "../BurgerIngredient/BurgerIngredient.css";

const BurgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.seeds1} />;
          <div className={classes.seeds2} />;
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat} />;
    case "cheese":
      ingredient = <div className={classes.Cheese} />;
    case "salad":
      ingredient = <div className={classes.Salad} />;
    case "bacon":
      ingredient = <div className={classes.Bacon} />;
  }
};

export default BurgerIngredient;
