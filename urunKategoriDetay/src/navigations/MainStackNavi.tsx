import { createStackNavigator } from '@react-navigation/stack';
import TabNavi from './TabNavi';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CategoryToProduct from '../screens/CategoryToProduct';
import { Product } from '../components/Types/Type';
import { Metrics } from '../styles/Metrics';

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
                options={{title: 'Ürünler',headerTitleAlign: 'center',headerTitleStyle: {fontSize: Metrics.measure(20),color: "#3E22EA",fontWeight: "bold",}}}
                component={CategoryToProduct} />
            <MainStack.Screen
                name='ProductDetails'
                options={{title: 'Ürün Detayları',headerTitleAlign: 'center',headerTitleStyle: {fontSize: Metrics.measure(20),color: "#3E22EA",fontWeight: "bold"}}}
                component={ProductDetailsScreen}
            />
        </MainStack.Navigator>
    );
};

export default MainStackNavi;