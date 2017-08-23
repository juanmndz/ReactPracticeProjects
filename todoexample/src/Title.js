import React from 'react';

const Title = ({children}) => (
  <div style={styles.header}>
    <div style={styles.title}>
      {children}
    </div>
  </div>
)

const styles = {
  header: {
    backgroundColor: "skyblue",
    padding: 15
  },
  title: {
    textAlign: "center",
    color: "white"
  }
}
export default Title;