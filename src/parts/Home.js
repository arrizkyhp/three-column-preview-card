import Attribution from "elements/Attribution";

// Image
import iconLuxury from "assets/images/icon-luxury.svg";
import iconSedans from "assets/images/icon-sedans.svg";
import iconSuvs from "assets/images/icon-suvs.svg";
import Card from "elements/Card";

const Home = () => {
    const contents = [
      {
        imgSrc: iconSedans,
        imgAlt: "Sedans icon",
        title: "Sedans",
        description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        cardColor: "cardOrange",
      },
      {
        imgSrc: iconSuvs,
        imgAlt: "Suvs icon",
        title: "Suvs",
        description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        cardColor: "cardCyan",
      },
      {
        imgSrc: iconLuxury,
        imgAlt: "Luxury icon",
        title: "Luxury",
        description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        cardColor: "cardDarkCyan",
      },
    ];



    return (
      <div className="wrapper">
        <div className="container">
            {
                contents.map((content, index) => <Card key={index} data={content} />)
            }

        </div>

        <Attribution />
      </div>
    );
}

export default Home;