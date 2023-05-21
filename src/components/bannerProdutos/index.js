import React,{Fragment} from 'react';
import { Image,Text, View } from 'react-native';
import styles from './styles';


export default function bannerProdutos(){
    const imagem = Math.floor(Math.random() * 4 +1);
    return(
        <>
            <Text style = {styles.textBanner}> Em Cartaz </Text>
            <Image style = {styles.imagemBanner} source = {require(`../../Img/${imagem}.jpg`)} />
        </>
    );  
}