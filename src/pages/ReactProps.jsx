function MyCustomButton (props){
    //area JS
    
    return (
        //area JSX
        <button {...props}>
          {props.content}
        </button>
    )
}

//Props Childreen
function MyCustomDiv(props){
  return (
    <div style={{
      padding:20,
      margin: "20px 0",
      backgroundColor : "aqua",
      borderRadius : 12,
      color:"black"
    }}>
      {props.children}
    </div>
  )
}

export default function ReactProps() {
  return (
    <div className="App">
      <h1>React Props</h1>
      <MyCustomButton 
        content="button 1"
        style={{backgroundColor:'yellow' }}
        onClick={()=>{alert("button 1")}} />
      <MyCustomButton 
        content="button 2"
        style = {{
          backgroundColor:"red"
        }}
      />
      <MyCustomButton content="button 3" />
      <MyCustomButton content="button 4" />

      <MyCustomDiv>
        <h1>Apapun didalam props Childreen</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus a exercitationem quos earum magni culpa dolorum magnam qui neque labore, ipsum quas possimus ad quae.</p>
        <MyCustomButton content="button 1" />
      </MyCustomDiv>

      <MyCustomDiv>
        <h1>Div Lainnya</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus a exercitationem quos earum magni culpa dolorum magnam qui neque labore, ipsum quas possimus ad quae.</p>
        <MyCustomButton 
          content="button 2"
          style={{
            backgroundColor:"black",
            color:"white",
          }}
          onClick={()=>{alert("button 2")}} 
          />
      </MyCustomDiv>
    </div>
  );
}
