
import ManageOrdersClient from "./ManageOrdersClient";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import Container from "@/app/components/Container";
import getOrders from "@/actions/getOrders";


const ManageOrders = async() => {

    const orders = await getOrders()
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role !== 'ADMIN'){
        return <NullData title="Ooops! Access denied"/>
    }

    return (
        <div>
            <Container>
            <ManageOrdersClient orders = {orders} />
            </Container>
        </div>
    );
};

export default ManageOrders;