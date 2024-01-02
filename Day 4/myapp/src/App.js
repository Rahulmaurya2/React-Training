import "./App.css";
import FormValidation from "./components/FormValidation";
// import BgChanger from "./components/BgChanger";
// import ConditionalRendering from "./components/ConditionalRendering";
// import Freact from "./components/Freact";

function App() {
  // const student1 = [
  //   { id: 1, name: "Raj", rollNo: 654, marks: 900 },
  //   { id: 2, name: "Shivam", rollNo: 844, marks: 800 },
  //   { id: 3, name: "Sataym", rollNo: 841, marks: 110 },
  //   { id: 4, name: "Sundar", rollNo: 321, marks: 1000 },
  //   { id: 5, name: "yogi", rollNo: 123, marks: 1000 },
  // ];
  // const student2 = [
  //   { id: 1, name: "Raj", rollNo: 243, marks: 500 },
  //   { id: 2, name: "Shivam", rollNo: 654, marks: 600 },
  //   { id: 3, name: "Sataym", rollNo: 540, marks: 760 },
  //   { id: 4, name: "Sundar", rollNo: 931, marks: 650 },
  //   { id: 5, name: "yogi", rollNo: 421, marks: 690 },
  // ];

  return (
    <div className="App">
      <FormValidation />

      {/* <Freact /> */}
      {/* <ConditionalRendering
        studentName={student1}
        pass={false}
        clsName={"1st"}
      />

      <ConditionalRendering
        studentName={student2}
        pass={true}
        clsName={"2nd"}
      />
      <br></br> */}
      {/* <BgChanger></BgChanger> */}
    </div>
  );
}

export default App;
