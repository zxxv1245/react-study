import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer : {},
  image : {
    width: 50,
    height: 50,
    borderRadius : 25,
  }
}


function Comment(props) {
  return(
    
    

    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src="" alt="aa" style={styles.image}/>
      </div>
      <div>
        <span>{props.name}</span>
        <span>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;