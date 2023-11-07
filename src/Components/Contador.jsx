import { useRef, useState } from "react";
import gear from "../assets/gear.svg";

export const Contador = () => {
  const [minutosVal, setMinutosVal] = useState(0);
  const [segundosVal, setSegundosVal] = useState("");
  const [edit, setEdit] = useState(true);

  const refMinutos = useRef(0);
  const refSegundos = useRef(0);

  const handleMinutes = (event)=>{

   setMinutosVal(event.target.value) 

  }

  const handleSegundos = (event)=>{
    console.log(event.target.value.length);
     if (event.target.value <= 59 ) {
        setSegundosVal(event.target.value) 
    }else if (event.target.value > 59) {
        
        setSegundosVal(59)
    }

  }

   const handleEdit = ()=>{
    setEdit(!edit)
    if (edit) {
        refMinutos.current.valueOf = minutosVal;
        refSegundos.current.valueOf = segundosVal;
      }
   }

//   useEffect(() => {}, []);

  return (
    <>
      <div>
        <div className="flex">
          <input
            ref={refMinutos}
            type="text"
            onChange={handleMinutes}
            value={minutosVal}
            readOnly={edit}
          />
          <p>:</p>
          <input
            ref={refSegundos}
            type="text"
            onChange={handleSegundos}
            value={segundosVal.toString().padStart(segundosVal.length === 0 ? 2 :segundosVal.length === 1 ? 1 :segundosVal.length > 2 ? 0 : 0, '0')}
            readOnly={edit}
          />
        </div>
        <img className="cursor-pointer" src={gear} onClick={handleEdit } alt="Edit Icon" />
      </div>
    </>
  );
};
