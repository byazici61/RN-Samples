import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import styles from '../style/style';
    
    
type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    pressed:boolean;
    setPressed:(pressed:boolean)=>void;
  
  };
  type ProductsData = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  };


  
  const renderItem = ({ item }: { item: Product }) => {
    const {pressed,setPressed} = item;
    return (
      <View>
        <View style={styles.imageConteiner} >
          <Image style={styles.image} source={{ uri: item.thumbnail }} />
          
          <TouchableOpacity style={[styles.favButton,{backgroundColor:pressed ?'blue':'grey'}]} 
          onPress={()=>pressed==false ?setPressed(true) : setPressed(false)}
        >
            <Text style={styles.favButtonText}> + </Text>
          </TouchableOpacity>
         
        </View>
          <View style={styles.itemConteiner}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.brand}>{item.brand}</Text>

            </View>

            <Text style={styles.price}>{item.price} TL</Text>
          </View>
        </View>
      
    );
  };
  export default renderItem;