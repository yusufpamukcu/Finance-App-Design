import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Thumbnail, ListItem, List, Text, Button, Footer, FooterTab } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const image = { uri: "https://i.imgur.com/fXmOg.png" };

const aspecRatio = 800 / 1000

let deviceWidth = Dimensions.get('window').width
let deviceHeight = deviceWidth * aspecRatio

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };


  }

  render() {
    const Rotate_Y_AnimatedStyle = {

      transform: [

        { rotateY: this.SetInterpolate }

      ]

    }
    return (
      <Container>
        <Header transparent androidStatusBarColor='#000' style={{ height: 0 }} >

        </Header>


        <View style={styles.header}>

          <View style={{ height: deviceHeight * 0.6, width: deviceWidth }}>

            <Image
              style={{
                height: '100%', width: '100%', borderBottomLeftRadius: 100,
              }}
              source={{ uri: 'https://travislang.snodemo.com/wp-content/uploads/2019/04/poly.jpg' }}
            />
            <View style={{ ...StyleSheet.absoluteFillObject, }}>


              <View style={styles.topView}>
                <View style={{ width: '60%' }}>
                  <Text style={styles.textTitle}>Hi Yusuf</Text>
                  <Text note numberOfLines={1} style={styles.textNote}>Welcome Back</Text>

                </View>

                <Thumbnail source={{ uri: "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" }} />

              </View>

              <View style={styles.topView}>
                <View style={{ width: '60%' }}>
                  <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 14 }}>Total Spend</Text>
                  <Text note numberOfLines={1} style={styles.textNote}>Cash Available</Text>

                </View>

                <Text style={styles.textTitle}>$145.00</Text>

              </View>

            </View>
          </View>
          <View style={{ height: deviceHeight * 0.6, width: deviceWidth }}>

            <Image
              style={{
                height: '100%', width: '100%',
                ...StyleSheet.absoluteFillObject,
                transform: [
                  { rotateX: "180deg" },
                ]

              }}
              source={{ uri: 'https://travislang.snodemo.com/wp-content/uploads/2019/04/poly.jpg' }}

            />



            <View style={{
              borderTopRightRadius: 100, backgroundColor: '#fff'
            }}>
              <View style={{
                alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                margin: 40, marginBottom: 10
              }}>
                <Text style={{ color: '#2C365A', fontWeight: "bold" }}>Recent Transactions</Text>
                <MaterialCommunityIcons name="order-bool-ascending-variant" size={25} color="#423D32" />

              </View>
              <List style={{ top: 0, height: '100%' }}>
                <ListItem thumbnail style={{ padding: 10, margin: 10 }}>
                  <Left>
                    <View style={[styles.iconBody, { backgroundColor: '#FE5579' }]}>

                      <Icon name="shopping-bag" size={30} color="#fff" />
                    </View>
                  </Left>
                  <Body>
                    <Text style={{ color: '#252525', fontWeight: "bold" }}>Salary</Text>
                    <Text note numberOfLines={1} style={{ fontSize: 10 }}>Belong Interactive</Text>
                  </Body>
                  <Right>
                    <Text style={{ fontSize: 14, color: '#252525', fontWeight: "bold" }}>+$12,010</Text>

                  </Right>
                </ListItem>


                <ListItem thumbnail style={{ padding: 10, margin: 10 }}>
                  <Left>
                    <View style={[styles.iconBody, { backgroundColor: '#02468A' }]}>

                      <Icon name="paypal" size={30} color="#fff" />
                    </View>
                  </Left>
                  <Body>
                    <Text style={{ color: '#252525', fontWeight: "bold" }}>Paypal</Text>
                    <Text note numberOfLines={1} style={{ fontSize: 10 }}>Belong Interactive</Text>
                  </Body>
                  <Right>
                    <Text style={{ fontSize: 14, color: '#252525', fontWeight: "bold" }}>+$2,010</Text>
                  </Right>
                </ListItem>


                <ListItem thumbnail style={{ padding: 10, margin: 10 }}>
                  <Left>
                    <View style={[styles.iconBody, { backgroundColor: '#FD7F94' }]}>

                      <Icon name="gears" size={30} color="#fff" />
                    </View>
                  </Left>
                  <Body>
                    <Text style={{ color: '#252525', fontWeight: "bold" }}>Car Repair</Text>
                    <Text note numberOfLines={1} style={{ fontSize: 10 }}>Belong Interactive</Text>
                  </Body>
                  <Right>
                    <Text style={{ fontSize: 14, color: '#252525', fontWeight: "bold" }}>+$232,010</Text>
                  </Right>
                </ListItem>

              </List>
            </View>
          </View>


        </View>
        {/* <Icon name="rocket" size={30} color="#900" /> */}

        <Content />
        <Footer >
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button>
              <MaterialCommunityIcons name="home-outline" size={25} color="#FD6685" />
            </Button>
            <Button>
              <MaterialCommunityIcons name="credit-card-outline" size={25} color="#2D395C" />
            </Button>
            <Button >
              <MaterialCommunityIcons name="plus-circle" size={50} color="#FE5579" />
            </Button>
            <Button>
              <MaterialCommunityIcons name="comment-outline" size={25} color="#2D395C" />
            </Button>
            <Button>
              <MaterialCommunityIcons name="account-outline" size={25} color="#2D395C" />
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: deviceHeight,
    borderBottomLeftRadius: 100,

  },
  topView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30, paddingRight: 30, paddingTop: 30
  },
  body: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  textTitle: {
    color: '#fff', fontWeight: "bold", fontSize: 24
  },
  textNote: {
    color: '#BFD0E3', fontSize: 12
  },
  iconBody: {
    margin: 5, height: 50, width: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center'
  }
});
