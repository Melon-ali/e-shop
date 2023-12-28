import getProducts from "@/actions/getProducts";
import ManageProductsClient from "./ManageProductsClient";
import NullData from "@/app/components/NullData";
import Container from "@/app/components/Container";
import getCurrentUser from "@/actions/getCurrentUser";


const ManageProducts = async() => {

    const products = await getProducts({category: null})
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role !== 'ADMIN'){
        return <NullData title="Ooops! Access denied"/>
    }

    return (
        <div>
            <Container>
            <ManageProductsClient products = {products} />
            </Container>
        </div>
    );
};

export default ManageProducts;