import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const RestaurantCard = (props) => {
  return (
    <Card style={{ marginTop: "15px", minWidth: "200px", maxWidth: "300px" }}>
      <CardBody>
        <CardTitle tag="h4">{props.name}</CardTitle>
        <CardText tag="h6" className="mb-2 text-muted">
          Rating: {props.rating}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default RestaurantCard;
