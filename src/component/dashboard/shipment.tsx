import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {GET_SERVICE} from '../../shared/backend';
import {Item} from '../../shared/types';

const Shipment = () => {
  const [search, setSearch] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBoxAll, setToggleCheckBoxAll] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const DATA: Item[] = [
    {id: '1', title: 'First Item'},
    {id: '2', title: 'Second Item'},
    {id: '3', title: 'Third Item'},
    {id: '4', title: 'Third Item'},
    {id: '5', title: 'Third Item'},
    {id: '6', title: 'Third Item'},
  ];

  useEffect(() => {
    getUserData();
  }, []);

  const closeModal = () =>{
    setModalVisible(false)
  }

  const getUserData = async () => {
    const endpoint = '/users';
    try {
      const response = await GET_SERVICE(endpoint);
      console.log('response', response);
      if (response.data.code === '00') {
        if (response.data.data !== null) {
        } else {
        }
      } else {
      }
    } catch (e: any) {}
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity onPress={openModal} style={styles.box}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Image style={styles.btnicon} source={require('../../assets/box.png')} />
      <View>
        <Text style={styles.smallCard}>AWB</Text>
        <Text style={styles.cardNumb}>48384736433</Text>
        <View style={styles.row}>
          <Text style={styles.smallCard}>Cairo</Text>
          <Image
            style={styles.forwardicon}
            source={require('../../assets/forward.png')}
          />
          <Text style={styles.small}>Alexandria</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.recievedBtn}>
        <Text style={styles.recievedBtnText}>Recieved</Text>
      </TouchableOpacity>

      <View style={styles.upBox}>
        <Image
          style={styles.forwardicon}
          source={require('../../assets/upicon.png')}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.parent}>
      <View style={styles.rowWide}>
        <Image
          style={styles.progileImg}
          source={require('../../assets/passport.jpg')}
        />
        <Image
          style={styles.logo}
          source={require('../../assets/bluelogo.png')}
        />
        <View style={styles.bellBox}>
          <Image
            style={styles.bell}
            source={require('../../assets/bell.png')}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.small}>Hello</Text>
        <Text style={styles.name}>Ibrahim Shaker</Text>
      </View>

      <View style={styles.input}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/searchicon.png')}
        />
        <TextInput
          style={styles.inputMain}
          value={search}
          placeholder="Search"
          onChangeText={search => setSearch(search)}
        />
      </View>

      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.filterBtn}>
          <Image
            style={styles.btnicon}
            source={require('../../assets/filter.png')}
          />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanBtn}>
          <Image
            style={styles.btnicon}
            source={require('../../assets/scan.png')}
          />
          <Text style={styles.scanText}>Scan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.top}>
        <View style={styles.rowWide}>
          <Text style={styles.shipment}>Shipments</Text>
          <View style={styles.row}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxAll}
              onValueChange={newValue => setToggleCheckBoxAll(newValue)}
            />
            <Text style={styles.mark}>Mark All</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.backdrop}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.borderLine} />
              <View style={styles.modalTopRowWide}>
                <TouchableOpacity onPress={closeModal}>
                  <Text style={styles.modalCancel}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.filter}>Filters</Text>
                <Text style={styles.modalCancel}>Done</Text>
              </View>

              <View style={styles.modalContent}>
                <Text style={styles.shipmentModal}>SHIPMENT STATUS</Text>
                <View style={styles.modalGrid}>
                  <TouchableOpacity style={styles.modalFilterBtn}>
                    <Text style={styles.modalBtnText}>Recieved</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalFilterBtn}>
                    <Text style={styles.modalBtnText}>Putaway</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalFilterBtn}>
                    <Text style={styles.modalBtnText}>Delivered</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalFilterBtn}>
                    <Text style={styles.modalBtnText}>Cancelled</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalFilterBtn}>
                    <Text style={styles.modalBtnText}>Rejected</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalFilterBtn}>
                    <Text style={styles.modalBtnText}>Lost</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalFilterBtn}>
                    <Text style={styles.modalBtnText}>On Hold</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
Shipment.navigationOptions = {
  headerShown: false, // Hide the header
};
export default Shipment;
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  rowWide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progileImg: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  bellBox: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#F4F2F8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bell: {},
  logo: {
    // height: 60,
    // width: 70,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingTop: 25,
  },
  small: {
    fontSize: 15,
    color: '#58536E',
    lineHeight: 17,
  },
  smallCard: {
    fontSize: 12,
    color: '#58536E',
    lineHeight: 22,
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 20,
    paddingTop: 10,
  },
  cardNumb: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 25,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F2F8',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 20,
  },
  inputMain: {
    flex: 1,
    fontSize: 16,
  },
  btnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  filterBtn: {
    height: 40,
    backgroundColor: '#F4F2F8',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: '48%',
    justifyContent: 'center',
    gap: 6,
  },
  modalFilterBtn: {
    height: 40,
    backgroundColor: '#F4F2F8',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 17,
    margin: 5,
  },
  modalBtnText: {
    fontSize: 16,
  },
  scanBtn: {
    height: 40,
    backgroundColor: '#2F50C1',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: '48%',
    justifyContent: 'center',
    gap: 6,
  },
  filterText: {
    color: '#58536E',
  },
  scanText: {
    color: 'white',
  },
  searchIcon: {
    height: 18,
  },
  btnicon: {},
  top: {
    marginTop: 20,
  },
  shipment: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 21,
  },
  mark: {
    color: '#2F50C1',
    fontWeight: 'bold',
    fontSize: 16,
  },
  box: {
    backgroundColor: '#F4F2F8',
    borderRadius: 9,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  recievedBtn: {
    height: 30,
    borderRadius: 9,
    backgroundColor: '#D9E6FD',
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    color: 'white',
    borderWidth: 2,
  },
  recievedBtnText: {
    color: '#2F50C1',
  },
  modalCancel: {
    color: '#2F50C1',
    fontSize: 16,
  },
  forwardicon: {
    marginHorizontal: 5,
  },
  upBox: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
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
  modalContent: {
    paddingHorizontal: 20,
  },
  modalGrid: {
    flexDirection: 'row',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  shipmentModal: {
    fontSize: 14,
    color: '#58536E',
    paddingTop: 10,
  },
  modalTopRowWide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    borderBottomColor: '#EAE7F2',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  cancel: {
    color: '#2F50C1',
    fontSize: 18,
    paddingLeft: 10,
  },
  filter: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 10,
  },
});
