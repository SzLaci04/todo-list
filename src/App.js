import Card from "./components/Card";

function App() {
  return (
    <div className="container-fluid">
      <h1 className="pt-1 pl-1">My Todo list</h1>
      <div>
        <Card title='szoveg' description="Leírás"/>
        <Card title='szoveg2' description="Leírás"/>
        <Card title='szoveg3' description="Leírás"/>
        
      </div>
    </div>
  );
}

export default App;