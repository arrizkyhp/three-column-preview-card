import propTypes from "prop-types";
import Button from "./Button";

const Card = (props) => {
    const className = ["card"];
    let buttonColor = "";

    if(props.data.cardColor === "cardOrange")
        className.push("card-orange");
        buttonColor = "btnOrange"
    if(props.data.cardColor === "cardCyan")
        className.push("card-cyan");
    if(props.data.cardColor === "cardDarkCyan")
        className.push("card-dark-cyan");


    console.log(buttonColor)

    return (
      <div className={className.join(" ")}>
        <div className="card__content">
          <div className="card__content__image">
            <img src={props.data.imgSrc} alt={props.data.imgAlt} />
          </div>
          <div className="card__content__title">
            <h1>{props.data.title}</h1>
          </div>
          <div className="card__content__description">
            <p>{props.data.description}</p>
          </div>
        </div>
        {(() => {
          if(props.data.cardColor === "cardOrange") {
            return ( <Button btnOrange>Learn More</Button> )
          } else if (props.data.cardColor === "cardCyan") {
            return (<Button btnCyan>Learn More</Button>);
          } else {
            return <Button btnDarkCyan>Learn More</Button>;
          }

        })()}
      </div>
    );
}

Card.propTypes = {
    data: propTypes.object,
}

export default Card;