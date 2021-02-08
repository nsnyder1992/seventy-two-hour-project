import { Card, CardBody, CardText, CardLink, CardHeader } from "reactstrap";

const RestaurantCard = (props) => {
  return (
    <Card style={{ marginTop: "15px", minWidth: "200px", maxWidth: "300px" }}>
      <CardHeader tag="h4">{props.name}</CardHeader>
      <CardBody>
        <CardText tag="h6" className="mb-2 text-muted">
          Rating: {props.rating}
        </CardText>
        <CardLink href={props.menu} target="blank">
          Menu
        </CardLink>
      </CardBody>
    </Card>
  );
};

export default RestaurantCard;
