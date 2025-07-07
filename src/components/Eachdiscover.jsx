
import { useParams } from 'react-router-dom';

const EachDiscover = () => {
  const { id } = useParams();

  console.log(id)


  return (
    <h1>eachdiscover</h1>
  );
};

export default EachDiscover;
