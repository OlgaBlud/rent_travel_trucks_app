import { useParams } from "react-router";

function CamperDetailsPage() {
  const { id } = useParams();
  console.log("params: ", id);
  return <div>Camper {id} Details Page</div>;
}

export default CamperDetailsPage;
