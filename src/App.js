import { data } from "./data";
import Card from "./card";
console.log(data)
function App() {
  const dataShaow = data.map((el) => {
   return <Card dice={el.dice} title={el.title} revue={el.revue} img={el.img} />;
  });
  return <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}} >{dataShaow}</div>;
}

export default App;
