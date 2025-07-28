import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Products = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* Featured Section */}
        <View style={styles.featuredContainer}>
          <Image
            style={styles.featuredImageRight}
            source={{ uri: 'https://i.pinimg.com/1200x/33/76/f1/3376f184c88c94ccd759df1f36e2a8a7.jpg' }}
          />
          <Image
            style={styles.featuredImageLeft}
            source={{ uri: 'https://i.pinimg.com/736x/31/ae/a9/31aea9bb73dc4a92bd8584fbce4cd3a3.jpg' }}
          />
        </View>

        {/* Header Row */}
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Products</Text>
          <TouchableOpacity>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal Product Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.productCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Nike</Text>
              <TouchableOpacity>
                <Text style={styles.cardViewMore}>View More</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Grid Cards */}
        <View style={styles.gridContainer}>
          {[1, 2, 3, 4].map((_, index) => (
            <TouchableOpacity key={index} style={styles.gridCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg' }}
                style={styles.gridImage}
              />
              <Text style={styles.gridTitle}>Grey Nike Jordan 1</Text>
              <Text style={styles.gridPrice}>KSH. 8500</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
      <View style={styles.bottomNav}>
  <TouchableOpacity style={styles.navItem}>
    <FontAwesome name="home" size={20} color="#000" />
    <Text style={styles.navText}>Home</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.navItem}>
    <FontAwesome name="th-large" size={20} color="#000" />
    <Text style={styles.navText}>Products</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.navItem}>
    <FontAwesome name="shopping-cart" size={20} color="#000" />
    <Text style={styles.navText}>Cart</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.navItem}>
    <FontAwesome name="user" size={20} color="#000" />
    <Text style={styles.navText}>User</Text>
  </TouchableOpacity>
</View>

    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 16,
  },
  featuredContainer: {
    height: 200,
    backgroundColor: '#000',
    borderRadius: 20,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  featuredImageRight: {
    height: 100,
    width: 120,
    borderRadius: 20,
    position: 'absolute',
    right: 20,
    top: 40,
  },
  featuredImageLeft: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
    left: 20,
    top: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewMoreText: {
    fontSize: 14,
    color: 'orange',
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  productCard: {
    width: 200,
    backgroundColor: '#000',
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
  },
  productImage: {
    height: 100,
    width: 100,
    borderRadius: 16,
    alignSelf: 'center',
  },
  productTitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
    alignSelf: 'center',
  },
  cardViewMore: {
    color: 'orange',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridCard: {
    backgroundColor: '#000',
    borderRadius: 16,
    width: '47%',
    marginBottom: 16,
    padding: 8,
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
  },
  gridTitle: {
    color: '#fff',
    fontSize: 12,
    marginTop: 8,
  },
  gridPrice: {
    color: 'orange',
    fontSize: 12,
    marginTop: 2,
  },
  bottomNav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 60,
  borderTopWidth: 1,
  borderTopColor: '#ccc',
  backgroundColor: '#fff',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
},
navItem: {
  alignItems: 'center',
},
navText: {
  fontSize: 12,
  color: '#000',
  marginTop: 2,
},

});

