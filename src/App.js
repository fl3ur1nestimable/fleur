import './AppW.css';
import './AppM.css';
import React from 'react';
import { ImageBackground, Text, View, Button, StyleSheet } from 'react-native-web';
function App() {

  const styles = StyleSheet.create({
    splitTop: {
      backgroundColor: 'powderblue',
      height: '400'
    },
  });
  return (
    <>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
          <View style={{height:'100%',border:'3px solid red'}}>
            <View style={styles.splitTop}>
                <View style={styles.fleurM}>
                  <Text style={styles.title} >Fl3ur_1nestimable</Text>
                  <Text style={styles.subtitle}>Music | Sports | Socials</Text>
                  <Button style={styles.btntop} title="Let's go" />
                </View>
            </View>
      
          </View>
        ) : (
          <>
            <div className="split left">
              <div className="fleur">
                <h1>Fl3ur_1nestimable</h1>
                <h2>Music | Sports | Socials</h2>
                <button className="btn_left">Let's go</button>
              </div>
              <img src="arrivalyellowfull.png" alt="arrivalyellow" className='imgbanner' />
            </div>
            <div className="split right">
              <div className="ayeb">
                <h1>Antoine Yebouet</h1>
                <h2>Portfolio | Resume | Projects</h2>
                <button className="btn_right">Enter</button>
              </div>
              <img src="arrivalrosefull.png" alt="arrivalrose" className='imgbanner' />
            </div>
          </>
        )
      }
    </>
  );
}

export default App;
