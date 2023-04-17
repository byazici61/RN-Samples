import { createStackNavigator } from '@react-navigation/stack';
import TabNavi from './TabNavi';
import ProductDetailsScreen from '../src/screens/ProductDetailsScreen';
import CategoryToProduct from '../src/screens/CategoryToProduct';
import { Product } from '../src/components/Types/Type';


export type RootStackParamList = {
    CategoryToProduct: {
        categoryname: string;
    }
    Categories: undefined;
    ProductDetails: {
        product: Product;

    };
};

const MainStack = createStackNavigator();

const MainStackNavi = () => {
    //console.log('MainStackNavi');
    return (
        <MainStack.Navigator >
            <MainStack.Screen 
                name='Tabs'
                component={TabNavi}
                options={{
                    headerShown: false,

                }} />
            <MainStack.Screen 
                name='CategoryToProduct'
                component={CategoryToProduct}/>
            <MainStack.Screen
                name='ProductDetails'
                component={ProductDetailsScreen}
                />  

        </MainStack.Navigator>
    );
};

export default MainStackNavi;