import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Animated,
} from 'react-native';
import {POST_SERVICE} from '../shared/backend';

const Landing: React.FC<{navigation: any}> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const floatingLabelAnimation = useRef(
    new Animated.Value(url ? 1 : 0),
  ).current;

  const handleFocus = () => {
    // Animate the label up and reduce its size when input is focus
    Animated.timing(floatingLabelAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    // If the input is empty, animate the floating label back to its original position
    if (!url) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  // Define animated styles for the floating label
  const floatingLabelStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -5], // top value
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // font size
    }),
  };
  const goToLogin = () => {
    setModalVisible(true);
  };

  const HandleLoginxxx = () => {
    navigation.navigate('Main');
  };

  const HandleLogin = async () => {
    navigation.navigate('Main');
    const endpoint = '/api/method/frappe.client.get_list';
    let payload = {
      username,
      url,
      password,
    };
    try {
      const response = await POST_SERVICE(payload, endpoint);
      console.log('response', response);
      if (response.data.code === '00') {
        navigation.navigate('Main');
      } else {
      }
    } catch (e: any) {}
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.logoParent}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/logo.png')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn} onPress={goToLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.borderLine} />
            <TouchableOpacity style={styles.row} onPress={closeModal}>
              <Image
                style={styles.backicon}
                resizeMode="contain"
                source={require('../assets/back.png')}
              />
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subTitle}>
              Please enter your First, Last name and your phone number in order
              to register
            </Text>

            <View style={styles.inputParent}>
              <View style={styles.input}>
                {url && (
                  <Animated.Text style={[styles.label, floatingLabelStyle]}>
                    URL
                  </Animated.Text>
                )}
                <TextInput
                  style={styles.inputMain}
                  value={url}
                  placeholder="URL"
                  onChangeText={val => setUrl(val)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>

              <View style={styles.input}>
                {username && (
                  <Animated.Text style={[styles.label, floatingLabelStyle]}>
                    Username/Email
                  </Animated.Text>
                )}
                <TextInput
                  style={styles.inputMain}
                  value={username}
                  placeholder="Username/Email"
                  onChangeText={val => setUsername(val)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>

              <View style={styles.input}>
                {username && (
                  <Animated.Text style={[styles.label, floatingLabelStyle]}>
                    Password
                  </Animated.Text>
                )}
                <TextInput
                  style={styles.inputMain}
                  value={password}
                  placeholder="Password"
                  onChangeText={val => setPassword(val)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  secureTextEntry
                />
              </View>

              <View style={styles.buttonContainerModal}>
                <TouchableOpacity style={styles.Loginbtn} onPress={HandleLogin}>
                  <Text style={styles.btnTextLogin}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#2F50C1',
  },
  logoParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 130,
    width: 180,
  },

  outlineBtn: {
    height: 50,
    borderRadius: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4b0076',
  },
  btn: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  Loginbtn: {
    height: 50,
    backgroundColor: '#2F50C1',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '40%',
    bottom: 20,
  },
  btnText: {
    color: '#2F50C1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnTextLogin: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  outlinebtnText: {
    color: '#4b0076',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainerModal: {
    // position: 'absolute',
    //  bottom: 20,
    // left: 0,
    // right: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '15%',
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    // shadowColor: '#000',
    width: '100%',
    // height: '40%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // modalView: {
  //   marginHorizontal: 20,
  //   backgroundColor: 'white',
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   paddingTop: 10,
  //   paddingHorizontal: 20,
  //   shadowColor: '#000',
  //   width: '100%',
  //   height: '100%',
  //   flex:1,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  borderLine: {
    borderColor: '#A7A3B3',
    borderWidth: 1,
    height: 5,
    backgroundColor: '#A7A3B3',
    borderRadius: 8,
    width: 60,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancel: {
    color: '#2F50C1',
    fontSize: 18,
    paddingLeft: 10,
  },
  title: {
    fontSize: 25,
    color: 'black',
    paddingTop: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#757281',
    paddingTop: 10,
    lineHeight: 25,
  },
  backicon: {
    height: 30,
  },
  inputParent: {
    paddingTop: 30,
  },

  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F2F8',
    borderRadius: 7,
    paddingHorizontal: 10,
    height: 50,
    marginTop: 20,
  },
  inputMain: {
    flex: 1,
    fontSize: 14,
    color:'blue'
  },

  
  top: {
    marginTop: 20,
  },
  label: {
    paddingLeft: 10,
    position: 'absolute',
    paddingTop: 5,
  },
});
