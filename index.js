const Box = (props) => {
  //  Write your code here.
  const {name, class} = props;
  return (
      <div className = {`box ${class}`}>
          <h1>
              {name}
          </h1>
      </div>
  );
};

const element = (
  //  Write your code here. 
  <div className = "container">
      <h1 className = "heading">
         Boxes
      </h1>
      <div className= "box-container">
         <Box name= "Small" class = "box1"/>
         <Box name= "Medium" class = "box2"/>
         <Box name= "Large" class = "box3"/>
      </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
