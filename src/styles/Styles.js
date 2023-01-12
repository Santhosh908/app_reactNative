import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 30,
  },
  topview: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FF7F50',
    padding: 30,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 10,
    paddingTop: 20,
    color: 'blue',
  },
  text: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
  middle: {
    padding: 25,
    paddingBottom: 300,
    marginTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#E1D9D1',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Styles;
