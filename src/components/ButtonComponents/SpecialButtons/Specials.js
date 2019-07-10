import React, { useState } from "react";

//import any components needed
import { specials} from '../../../data'
import SpeciaLButton from './SpecialButton'
//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
const [spec, setSpec] = useState(specials)
  return (
    <div>
      {spec.map(special => <SpeciaLButton special={special} update={props.update} />)}
    </div>
  );
};

export default Specials
